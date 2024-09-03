import { Button, Container, Typography, Box } from "@mui/material";
import { FieldValues, UseFormRegister, FormState } from "react-hook-form";
import CustomInput from "../common/CustomInput";

type TProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<FieldValues>;
  errors: FormState<FieldValues>["errors"];
  loading: boolean;
};

const GroupForm: React.FC<TProps> = ({
  onSubmit,
  register,
  errors,
  loading,
}) => {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={5}
        onSubmit={onSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          追加
        </Typography>
        <CustomInput
          id="groupName"
          label="グループ"
          disabled={loading}
          register={register}
          errors={errors}
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? "追加中" : "追加"}
        </Button>
      </Box>
    </Container>
  );
};

export default GroupForm;
