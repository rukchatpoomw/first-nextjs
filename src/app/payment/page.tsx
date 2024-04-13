import React from "react";
import { SubmitButton } from "../../components/SubmitButton";
import { Form } from "../../components/Form";
import { Box } from "@mui/material";

// Server Component
export default async function Home() {
  return (
    <Box className="flex items-center justify-center m-8">
      <Form />
    </Box>
  );
}
