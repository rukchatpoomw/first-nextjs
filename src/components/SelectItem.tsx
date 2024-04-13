import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export default function SelectItem() {
  const [product, setProduct] = useState("");
  const productList = ["Smartphone", "Laptop", "Headphones", "Smartwatch"];

  function onChange(event: SelectChangeEvent) {
    setProduct(event.target.value as string);
  }
  return (
    <FormControl fullWidth>
      <InputLabel> Products </InputLabel>

      <Select
        label="Products"
        value={product}
        onChange={onChange}
        name="select"
      >
        {productList.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
