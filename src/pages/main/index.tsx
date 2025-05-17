import {
  Button,
  Snackbar,
  styled,
  TextField,
  type ButtonProps,
} from "@mui/material";
import "./style.scss";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { mainCheck } from "../../app/api/queries";
import pic1 from "../../assets/pic1.jpg";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export const Main = () => {
  const [isError, setIsError] = useState(false);
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");

  const { mutateAsync: submit, isPending } = useMutation({
    mutationFn: mainCheck,
  });

  const handleSubmit = async () => {
    const data = await submit({
      task1_answer: task1,
      task2_answer: task2,
      task3_answer: task3,
      task4_answer: task4,
    });

    if (data === "error") {
      setIsError(true);

      return;
    }
  };

  return (
    <div className="main">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isError}
        autoHideDuration={6000}
        onClose={() => setIsError(false)}
        message="Лох, неправильно"
      />
      <h2>Подарки не так просто получаются</h2>
      <div className="main__form">
        <TextField
          required
          onChange={(e) => setTask1(e.target.value)}
          value={task1}
          label="Задача 1"
          variant="outlined"
        />
        <TextField
          required
          onChange={(e) => setTask2(e.target.value)}
          value={task2}
          label="Задача 2"
          variant="outlined"
        />
        <TextField
          required
          onChange={(e) => setTask3(e.target.value)}
          value={task3}
          label="Задача 3"
          variant="outlined"
        />
        <TextField
          required
          onChange={(e) => setTask4(e.target.value)}
          value={task4}
          label="Задача 4"
          variant="outlined"
        />
        <ColorButton
          loading={isPending}
          disabled={!task1 || !task2 || !task3 || !task4}
          onClick={handleSubmit}
          variant="contained"
        >
          Отправить
        </ColorButton>
      </div>
      <img src={pic1} alt="" />
    </div>
  );
};
