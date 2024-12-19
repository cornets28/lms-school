import React from "react"
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material"
import { ErrorMessage } from "@hookform/error-message"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import colors from "@/utils/theme/base/colors"

type FormGeneratorProps = {
  type?: "text" | "email" | "password" | "number"
  inputType: "select" | "input" | "textarea"
  options?: { value: string; label: string; id: string }[]
  label?: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  errors: FieldErrors<FieldValues>
  lines?: number
}

export const FormGenerator = ({
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  type = "text",
  lines = 3,
}: FormGeneratorProps) => {
  const { grey } = colors

  switch (inputType) {
    case "input":
      return (
        <FormControl fullWidth margin="normal">
          {label && <InputLabel htmlFor={`input-${label}`}>{label}</InputLabel>}
          <TextField
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            label={placeholder}
            variant="outlined"
            {...register(name)}
            error={Boolean(errors[name])}
            helperText={<ErrorMessage errors={errors} name={name} />}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: grey["700"],
                  borderRadius: 5,
                  height: 40,
                  marginTop: 0.5,
                },
                "&:hover fieldset": {
                  borderColor: grey["500"],
                },
                "&.Mui-focused fieldset": {
                  borderColor: grey["500"],
                  borderWidth: 1,
                },
                input: { color: grey["700"] },
              },
            }}
          />
        </FormControl>
      )

    case "select":
      return (
        <FormControl fullWidth margin="normal" error={Boolean(errors[name])}>
          {label && (
            <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
          )}
          <Select
            id={`select-${label}`}
            labelId={`select-label-${label}`}
            {...register(name)}
            defaultValue=""
          >
            {options?.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            <ErrorMessage errors={errors} name={name} />
          </FormHelperText>
        </FormControl>
      )

    case "textarea":
      return (
        <FormControl fullWidth margin="normal">
          <TextField
            id={`textarea-${label}`}
            placeholder={placeholder}
            multiline
            rows={lines}
            variant="outlined"
            {...register(name)}
            error={Boolean(errors[name])}
            helperText={<ErrorMessage errors={errors} name={name} />}
          />
        </FormControl>
      )

    default:
      return null
  }
}
