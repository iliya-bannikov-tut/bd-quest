import { Button, styled, TextField, type ButtonProps } from "@mui/material";
import "./style.scss";
import { green } from "@mui/material/colors";
import { useState } from "react";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export const Task4 = () => {
  const [attempts, setAttempts] = useState(0);

  return (
    <div className="task4">
      <p>ODRGJWRPGWRKPGWG</p>
      <div className="task4__form">
        <TextField label="Имя" variant="outlined" />
        <TextField label="Фамилия" variant="outlined" />

        <ColorButton variant="contained">Contained</ColorButton>
      </div>
      <div className="task4__comments">
        {attempts >= 3 && <span>// TODO: ИЛЬЯ БЛЯТЬ ЗАШИФРУЙ ПАРОЛИ</span>}
        {attempts >= 7 && <span>// TODO: И УДАЛИ КОММЕНТ ВЫШЕ</span>}
      </div>
    </div>
  );
};
