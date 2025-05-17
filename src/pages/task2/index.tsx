import { Button, styled, TextField, type ButtonProps } from "@mui/material";
import "./style.scss";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../app/api/queries";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const Task2 = () => {
  const [attempts, setAttempts] = useState(0);

  const { mutateAsync: submit, isPending } = useMutation({
    mutationFn: signIn,
  });

  const handleSubmit = async () => {
    setAttempts((prev) => prev + 1);
  };

  return (
    <div className="task2">
      <h3>Подтвердите что вы реально тот самый</h3>
      <span>Войдите в свой прадзничный аккаунт</span>
      <div className="task2__form">
        <TextField label="Логин" variant="outlined" />
        <TextField type="password" label="Пароль" variant="outlined" />

        <ColorButton variant="contained">Contained</ColorButton>
      </div>
      <div className="task2__comments">
        <span>// TODO: ИЛЬЯ БЛЯТЬ ЗАШИФРУЙ ПАРОЛИ</span>
        <span>// TODO: И УДАЛИ КОММЕНТ ВЫШЕ</span>
        {attempts >= 3 && (
          <span>
            // TODO: КАК ХОРОШО ЧТО НИКТО НЕ ЗНАЕТ ПРО sql И ЕГО УЯЗВИМОСТИ В
            ГОЛОМ ВИДЕ
          </span>
        )}
      </div>
    </div>
  );
};
