"use client";
import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GroupForm from "./GroupForm";

const schema = z.object({
  groupName: z.string().min(1, { message: "グループ名を入力してください" }),
});

const GroupFormContainer = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      groupName: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/groups", data);
      if (response.status === 201) {
        const groupId = response.data.id;
        router.push(`/groups/${groupId}`);
      }
    } catch (error) {
      console.log("Group creation failed: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GroupForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      loading={loading}
      modalOpen={modalOpen} // モーダルの開閉状態を渡す
      setModalOpen={setModalOpen}
    />
  );
};

export default GroupFormContainer;
