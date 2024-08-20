import styled from "@emotion/styled";
import { TextField } from "@mui/material";

  const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#9e9fa0',
        borderRadius: 20,
        borderWidth:2
      },
      '&:hover fieldset': {
        borderColor: '#5d5d5d',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });

  export default StyledTextField