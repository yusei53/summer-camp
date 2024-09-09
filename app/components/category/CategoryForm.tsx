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
      <Box component="form" mt={5} onSubmit={onSubmit}>
        <Typography
          textAlign={"center"}
          variant="h5"
          component="h1"
          gutterBottom
        >
          カテゴリーを作成
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"} mb={6}>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => append({ name: "" })}
            sx={{ mt: 3 }}
            disabled={loading}
            startIcon={<AddIcon />}
          >
            カテゴリーを追加
          </Button>
        </Box>
        {fields.map((field, index) => (
          <Box
            key={field.id}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            my={2}
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

        <Box textAlign={"center"}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              mb: 2,
              px: { xs: 10, mt: 15 },
            }}
          >
            {loading ? "作成中" : "カテゴリーを作成"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryForm;
