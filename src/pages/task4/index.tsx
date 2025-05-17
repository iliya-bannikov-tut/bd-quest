import {
  Alert,
  Button,
  Snackbar,
  styled,
  TextField,
  type ButtonProps,
} from "@mui/material";
import "./style.scss";
import { green } from "@mui/material/colors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { task4Check } from "../../app/api/queries";
import CheckIcon from "@mui/icons-material/Check";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));

export const Task4 = () => {
  const [attempts, setAttempts] = useState(0);
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [bdate, setBdate] = useState<Dayjs | null>(null);
  const [answer, setAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  const { mutateAsync: submit, isPending } = useMutation({
    mutationFn: task4Check,
  });

  const handleSubmit = async () => {
    if (!bdate) {
      return;
    }

    const data = await submit({
      name,
      lname,
      bdate: bdate.format("YYYY-MM-DD"),
    });

    setLname("");
    setName("");
    setBdate(null);

    if (data === "error") {
      setAttempts((prev) => prev + 1);
      setIsError(true);

      return;
    }

    setAnswer(data);
  };

  return (
    <div className="task4">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isError}
        autoHideDuration={6000}
        onClose={() => setIsError(false)}
        message="Лох, неправильно"
      />
      <p>ODRGJWRPGWRKPGWG</p>
      <div className="task4__form">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          label="Имя"
          variant="outlined"
        />
        <TextField
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
          label="Фамилия"
          variant="outlined"
        />
        <DatePicker
          value={bdate}
          onChange={(e) => e && setBdate(e)}
          label="День рождения"
        />

        <ColorButton
          loading={isPending}
          disabled={name === "" || lname === "" || !bdate}
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
      <div className="task4__comments">
        {attempts >= 3 && (
          <span>// TODO: АЛГОРИТМ СЛАБЫЙ, НАДО ЗАМЕНИТЬ BASE64</span>
        )}
        {attempts >= 7 && <span>// TODO: 22</span>}
      </div>
    </div>
  );
};
