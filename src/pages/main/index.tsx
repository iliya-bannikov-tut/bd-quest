import {
  Alert,
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
import CheckIcon from "@mui/icons-material/Check";
import video from "../../assets/video.gif";
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));

export const Main = () => {
  const [isError, setIsError] = useState(false);
  const [answer, setAnswer] = useState("");

  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");

  const { mutateAsync: submit, isPending } = useMutation({
    mutationFn: mainCheck,
  });

  const handleSubmit = async () => {
    const data = await submit({
      answer1: task1,
      answer2: task2,
      answer3: task3,
      answer4: task4,
    });

    if (data === "Окак, он смог (ответ прямиком с бекенда)") {
      setAnswer(data);

      return;
    }

    setIsError(true);
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
        {answer && (
          <>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              ГООЙДА, он смог (The Speransky)
            </Alert>
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              {answer} (CBISTina)
            </Alert>
            <img src={video}></img> Omadetou (DDashi)
          </>
        )}
      </div>
      <img src={pic1} alt="" />
    </div>
  );
};
