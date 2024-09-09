import React, { useState } from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { Box, Typography, Button, Modal } from "@mui/material";
import CustomInput from "../common/CustomInput";

type Category = {
  id: number;
  name: string;
};

type TProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<FieldValues>;
  errors: FormState<FieldValues>["errors"];
  loading: boolean;
  categories: Category[];
};

const PostForm: React.FC<TProps> = ({
  onSubmit,
  register,
  errors,
  loading,
  categories,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpenModal}
        sx={{ mb: 3, color: "white", bgcolor: "blue" }}
      >
        新規作成
      </Button>

      <Modal open={open} onClose={handleCloseModal} disableAutoFocus>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mx={{ xs: 2, md: 15 }}
          mt={5}
          onSubmit={onSubmit}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            p={4}
            maxHeight={{ xs: "60%", md: "80%" }}
            minWidth={300}
            bgcolor="white"
            borderRadius="5px"
            sx={{
              transform: "translate(-50%, -50%)",
              overflowY: "scroll",
            }}
          >
            <Typography variant="h5" mb={2} gutterBottom>
              Post の作成
            </Typography>

            {/* タイトルフィールド */}
            <CustomInput
              id="title"
              label="タイトル"
              register={register}
              disabled={loading}
              required
              errors={errors}
              sx={{ my: 2 }}
            />

            {/* 各カテゴリに対応する説明フィールド */}
            {categories.map((field, index) => (
              <Box
                key={field.id}
                display="flex"
                flexDirection={"column"}
                alignItems="left"
                width="100%"
                my={2}
              >
                <Typography variant="body1">
                  {categories[index]?.name}
                </Typography>
                <CustomInput
                  id={`descriptions.${index}.content`}
                  label={`説明 ${index + 1}`}
                  register={register}
                  disabled={loading}
                  required
                  errors={errors}
                />
                <input
                  type="hidden"
                  {...register(`descriptions.${index}.categoryId`)} // categoryId を hidden フィールドで送信
                  value={field.id}
                />
              </Box>
            ))}

            {/* 送信ボタン */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, px: { xs: 10, md: 15 } }}
              disabled={loading}
            >
              {loading ? "作成中..." : "Post を作成"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PostForm;
