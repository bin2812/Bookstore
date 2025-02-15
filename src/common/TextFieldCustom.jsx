/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    border: "1px solid #C1BBBB",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "transparent",
      borderLeft: "3px solid #e04943",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderLeft: "3px solid #e04943",
    },
  },
  "& .MuiFilledInput-root:after": {
    border: "none",
    "&:hover": {
      border: "none",
    },
    "&.Mui-focused": {
      border: "none",
    },
  },
  "& .MuiFilledInput-root:before": {
    border: "none",
    "&:hover": {
      border: "none",
    },
  },
  "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    border: "none",
  },
});
const TextFieldCustom = ({
  id,
  label,
  variant = "filled",
  value,
  onChange,
  error,
  helperText,
  endAdornment,
  InputProps,
  ...props
}) => {
  return (
    <StyledTextField
      id={id}
      label={label}
      variant={variant}
      value={value}
      onChange={(e) => onChange(e)}
      error={error}
      helperText={helperText}
      fullWidth
      InputProps={{
        ...InputProps,
        endAdornment: endAdornment,
      }}
      {...props}
    />
  );
};

export default TextFieldCustom;
