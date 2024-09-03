"use client";
import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryForm from "./CategoryForm";

const schema = z.object({
  categories: z.array(
    z.object({
      name: z.string().min(1, { message: "カテゴリ名を入力してください" }),
    })
  ),
});

const CategoryFormContainer = ({ groupId }: { groupId: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      categories: [{ name: "" }],
    },
    resolver: zodResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/categories", {
        categories: data.categories.map((cat: any) => cat.name),
        groupId,
      });

      if (response.status === 201) {
        router.push("/test");
      }
    } catch (error) {
      console.log("Category creation failed: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CategoryForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      loading={loading}
      control={control}
      fields={fields}
      append={append}
      remove={remove}
    />
  );
};

export default CategoryFormContainer;
