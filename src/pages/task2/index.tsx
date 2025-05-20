import {
  Alert,
  Button,
  Snackbar,
  styled,
  TextField,
  type ButtonProps,
} from "@mui/material";
import "./style.scss";
import { purple } from "@mui/material/colors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../app/api/queries";
import CheckIcon from "@mui/icons-material/Check";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export const Task2 = () => {
  const [attempts, setAttempts] = useState(0);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [answer, setAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  const { mutateAsync: submit, isPending } = useMutation({
    mutationFn: signIn,
  });

  const handleSubmit = async () => {
    const data = await submit({ login, pass });

    setLogin("");
    setPass("");

    if (data === "error") {
      setAttempts((prev) => prev + 1);
      setIsError(true);

      return;
    }

    setAnswer(data);
  };

  return (
    <div className="task2">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isError}
        autoHideDuration={6000}
        onClose={() => setIsError(false)}
        message="Лох, неправильно"
      />
      <h3>Подтвердите что вы реально тот самый</h3>
      <span>Войдите в свой прадзничный аккаунт</span>

      <div className="task2__form">
        <TextField
          required
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          label="Логин"
          variant="outlined"
        />
        <TextField
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          label="Пароль"
          variant="outlined"
        />

        <ColorButton
          loading={isPending}
          disabled={login === "" || pass === ""}
          onClick={handleSubmit}
          variant="contained"
        >
          Войти
        </ColorButton>
        {answer && (
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            ГООЙДА, ты получил ответ: {answer}
          </Alert>
        )}
      </div>

      <div className="task2__comments">
        <span>// TODO: ИЛЬЯ БЛЯТЬ ЗАШИФРУЙ ПАРОЛИ</span>
        <span>// TODO: И УДАЛИ КОММЕНТ ВЫШЕ</span>
        {attempts >= 3 && (
          <span>// TODO: CBIST ПОЧИСТИ УЖЕ ТАБЛИЦУ users (name, password)</span>
        )}
      </div>
    </div>
  );
};
