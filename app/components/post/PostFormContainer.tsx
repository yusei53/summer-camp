"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PostForm from "./PostForm";

const schema = z.object({
  title: z.string().min(1, { message: "タイトルを入力してください" }),
  descriptions: z.array(
    z.object({
      content: z.string().min(1, { message: "説明を入力してください" }),
      categoryId: z.number().min(1), // categoryIdを追加
    })
  ),
});

type Category = {
  id: number;
  name: string;
};

const PostFormContainer = ({
  categories,
  groupId,
}: {
  categories: Category[];
  groupId: string;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      descriptions: categories.map((category) => ({
        content: "",
        categoryId: category.id,
      })),
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/posts", {
        title: data.title,
        descriptions: data.descriptions,
        groupId,
      });

      if (response.status === 201) {
        setModalOpen(false);
        router.push(`/category/${groupId}`);
        router.refresh();
      }
    } catch (error) {
      console.log("Post creation failed: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      loading={loading}
      categories={categories}
      modalOpen={modalOpen} // モーダルの開閉状態を渡す
      setModalOpen={setModalOpen} // モーダルの開閉状態を変更する関数を渡す
    />
  );
};

export default PostFormContainer;
