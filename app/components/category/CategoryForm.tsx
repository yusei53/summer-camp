import { Button, Container, Typography, Box, IconButton } from "@mui/material";
import {
  FieldValues,
  UseFormRegister,
  FormState,
  Control,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import CustomInput from "../common/CustomInput";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

type TProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<FieldValues>;
  errors: FormState<FieldValues>["errors"];
  loading: boolean;
  control: Control<FieldValues>;
  fields: FieldArrayWithId<FieldValues, "categories", "id">[];
  append: UseFieldArrayAppend<FieldValues, "categories">;
  remove: UseFieldArrayRemove;
};

const CategoryForm: React.FC<TProps> = ({
  onSubmit,
  register,
  errors,
  loading,
  fields,
  append,
  remove,
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
          カテゴリーを追加
        </Typography>
        {fields.map((field, index) => (
          <Box
            key={field.id}
            display="flex"
            alignItems="center"
            width="100%"
            sx={{ my: 2 }}
          >
            <CustomInput
              id={`categories.${index}.name`}
              label={`カテゴリー ${index + 1}`}
              disabled={loading}
              register={register}
              errors={errors}
              required
            />
            <IconButton
              onClick={() => remove(index)}
              disabled={loading}
              aria-label="remove"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button
          type="button"
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => append({ name: "" })}
          sx={{ mt: 3 }}
          disabled={loading}
          startIcon={<AddIcon />}
        >
          カテゴリーを追加
        </Button>
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

export default CategoryForm;
