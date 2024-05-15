import React from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({
  label,
  id,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="mb-4">
      <TextField
        label={label}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        fullWidth
        variant="outlined"
        margin="normal"
      />
    </div>
  );
}
