import React from "react";
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
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const PostForm: React.FC<TProps> = ({
  onSubmit,
  register,
  errors,
  loading,
  categories,
  modalOpen,
  setModalOpen,
}) => {
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"flex-end"} mb={6}>
        <Button
          onClick={handleOpenModal}
          variant="contained"
          color="primary"
          sx={{ mb: 3 }}
        >
          新規作成
        </Button>
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal} disableAutoFocus>
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

            <CustomInput
              id="title"
              label="タイトル"
              register={register}
              disabled={loading}
              required
              errors={errors}
              sx={{ my: 2 }}
            />

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
                  {...register(`descriptions.${index}.categoryId`)}
                  value={field.id}
                />
              </Box>
            ))}

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
