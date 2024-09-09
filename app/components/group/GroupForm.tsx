import { Button, Container, Typography, Box, Modal } from "@mui/material";
import { FieldValues, UseFormRegister, FormState } from "react-hook-form";
import CustomInput from "../common/CustomInput";

type TProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<FieldValues>;
  errors: FormState<FieldValues>["errors"];
  loading: boolean;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

const GroupForm: React.FC<TProps> = ({
  onSubmit,
  register,
  errors,
  loading,
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
      <Box display={"flex"} justifyContent={"flex-end"} mb={3} mr={5}>
        <Button
          onClick={handleOpenModal}
          sx={{ mb: 3 }}
          variant="contained"
          color="primary"
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
          mt={5}
          onSubmit={onSubmit}
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            p={4}
            maxHeight={{ xs: "60%", md: "80%" }}
            minWidth={{ xs: 300, md: 400 }}
            bgcolor="white"
            borderRadius="5px"
            sx={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              textAlign="center"
            >
              グループを作成
            </Typography>
            <CustomInput
              id="groupName"
              label="グループ"
              disabled={loading}
              register={register}
              errors={errors}
              required
              sx={{ my: 2 }}
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, px: { xs: 10, mt: 15 } }}
              >
                {loading ? "作成中" : "グループを作成"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default GroupForm;
