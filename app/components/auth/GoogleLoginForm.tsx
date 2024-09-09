import { Box, Typography } from "@mui/material";
import GoogleLoginButton from "./GoogleLoginButton";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";

const GoogleLoginForm = () => {
  return (
    <Box
      mt={22}
      mx={{ md: 25 }}
      py={5}
      px={2}
      // border={"1px solid #c4c4c4"}
      borderRadius={"10px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <EditCalendarIcon
          sx={{
            fontSize: 220,
          }}
        />
      </Box>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={20}
        mt={1}
        mb={2}
      >
        メモパレット
      </Typography>
      <Typography textAlign={"center"} my={4} fontSize={14}>
        ログインすると〇〇の機能が使えるようになります
      </Typography>
      <GoogleLoginButton />
    </Box>
  );
};

export default GoogleLoginForm;
