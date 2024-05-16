import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function TextInput({
  label,
  id,
  value,
  onChange,
  type = "text",
}) {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleChange = (value) => {
    onChange(value);
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError(true);
        setHelperText("Invalid email format");
      } else {
        setError(false);
        setHelperText("");
      }
    } else if (type === "tel") {
      const mobileRegex = /^[0-9]{10}$/; // Adjust this regex based on the required mobile number format
      if (!mobileRegex.test(value)) {
        setError(true);
        setHelperText("Invalid mobile number format");
      } else {
        setError(false);
        setHelperText("");
      }
    }
  };

  return (
    <div className="mb-4">
      <TextField
        label={<CustomLabel label={label} />}
        id={id}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        error={error}
        helperText={helperText}
        fullWidth
        variant="outlined"
        margin="normal"
      />
    </div>
  );
}

function CustomLabel({ label }) {
  return (
    <span>
      {label}
      <span style={{ color: "red" }}>*</span>
    </span>
  );
}
