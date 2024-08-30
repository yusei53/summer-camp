"use client";
import { Box } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  return (
    <Box>
      <Button
        label="Googleでログイン"
        icon={FcGoogle}
        onClick={() =>
          signIn("google", {
            callbackUrl: "/home",
          })
        }
        sx={{
          width: "100%",
          color: "black",
          border: "1px solid #c4c4c4",
        }}
      />
    </Box>
  );
};

export default GoogleButton;
