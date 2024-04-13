"use client";

import { Button } from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  return (
    <Button variant="contained" type="submit">
      Submit
    </Button>
  );
}
