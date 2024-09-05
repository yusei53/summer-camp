import { FieldValues, FormState, UseFormRegister } from "react-hook-form";
import { Box, Typography, Button } from "@mui/material";
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
  return (
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
      <Typography variant="h4" component="h1" gutterBottom>
        Post の作成
      </Typography>

      <CustomInput
        id="title"
        label="タイトル"
        register={register}
        disabled={loading}
        required
        errors={errors}
      />

      {/* 各カテゴリに対応する説明フィールド */}
      {categories.map((field, index) => (
        <Box
          key={field.id}
          display="flex"
          flexDirection={"column"}
          alignItems="left"
          width="100%"
          mb={2}
        >
          <Typography variant="body1" sx={{ mr: 2 }}>
            {categories[index]?.name}
          </Typography>
          <input
            type="hidden"
            {...register(`descriptions.${index}.categoryId`)} // categoryId を hidden フィールドで送信
            value={field.id}
          />
          <CustomInput
            id={`descriptions.${index}.content`}
            label={`説明 ${index + 1}`}
            register={register}
            disabled={loading}
            required
            errors={errors}
          />
        </Box>
      ))}

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        {loading ? "作成中..." : "Post を作成"}
      </Button>
    </Box>
  );
};

export default PostForm;
