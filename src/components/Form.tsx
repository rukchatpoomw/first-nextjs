"use client";

import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";
import { onSubmit } from "../app/payment/actions";
import SelectItem from "./SelectItem";

export function Form() {
  const { pending } = useFormStatus();

  return (
    <form action={onSubmit}>
      <FormGroup className="gap-4 bg-gray-100 p-6 rounded">
        <Typography className="pb-2" variant="h6">
          Playground
        </Typography>
        <TextField
          helperText="Enter your email"
          label="Email"
          variant="outlined"
          name="text"
          type="email"
        />
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-amoun">Amount</InputLabel>
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">THB</InputAdornment>
            }
            name="amount"
            label="Amount"
          ></OutlinedInput>
          <FormHelperText>Enter specific amount</FormHelperText>
        </FormControl>
        <SelectItem />
        <FormControlLabel
          label="Save payment"
          control={<Switch defaultChecked name="save" />}
        />

        <SubmitButton />
      </FormGroup>
    </form>
  );
}
