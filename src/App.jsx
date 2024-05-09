import { useState } from "react";
import { RadioAnswer } from "./components/RadioAnswer";
import {Button} from "@nextui-org/react";


const questions = [
  {
    id: 1,
    q: "Torpe o entumecido",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 2,
    q: "Acalorado",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 3,
    q: "Con temblor en las piernas",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 4,
    q: "Incapaz de relajarse",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 5,
    q: "Con temor a que ocurra lo peor",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 6,
    q: "Mareado, o que se le va la cabeza",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 7,
    q: "Con latidos del corazón fuertes y acelerados",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 8,
    q: "Inestable",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 9,
    q: "Atemorizado o asustado",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 10,
    q: "Nervios@",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 11,
    q: "Con sensación de bloqueo",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 12,
    q: "Con temblores en las manos",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 13,
    q: "Inquieto, inseguro",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 14,
    q: "Con miedo a perder el control",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 15,
    q: "Con sensación de ahogo",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 16,
    q: "Con temor a morir",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 17,
    q: "Con miedo",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 18,
    q: "Con problemas digestivos",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 19,
    q: "Con desvanecimientos",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 20,
    q: "Con rubor facial",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },
  {
    id: 21,
    q: "Con sudores, fríos o calientes",
    respuestas: [0, 1, 2, 3],
    cantidad: ["nada", "leve", "moderado", "mucho"],
  },

];

/* const valores = {
  nada: 0,
  leve: 1,
  moderado: 2,
  mucho: 3,
}; */


function App() {
  const [answers, setAnswers] = useState([])
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true); // Estado para mantener el estado de deshabilitación del botón de envío

  const handleAnswerSelected = (questionId, selectedAnswer) => {
    setAnswers(prevAnswers => {
      // Copia el estado actual de las respuestas
      const updatedAnswers = [...prevAnswers];
      // Encuentra la respuesta correspondiente a la pregunta y actualiza su valor
      const questionIndex = updatedAnswers.findIndex(answer => answer.id === questionId);
      if (questionIndex !== -1) {
        updatedAnswers[questionIndex].respuesta = selectedAnswer;
      } else {
        updatedAnswers.push({ id: questionId, respuesta: selectedAnswer });
      }
      return updatedAnswers;
    });
     // Verificar si al menos una respuesta ha sido seleccionada para habilitar/deshabilitar el botón de envío
     const hasAnswer = answers.some(answer => answer.id === questionId);
     setIsSubmitDisabled(!hasAnswer);
  };

   // Función para manejar el envío de respuestas
  const handleClick = (e) => {
    e.preventDefault()

    console.log("Respuestas del usuario:", answers);
    // Aquí puedes hacer más cosas con las respuestas del usuario
  };

  return (
    <main className=" w-max bg-slate-800 mx-auto text-white">
      <h1 className="flex justify-center items-center text-4xl">
        Test de Ansiedad de Beck
      </h1>
      <form className="my-10 mx-8 w-[600px] min-w-0">
        <div className="flex flex-row justify-between items-center">
          <div>
            Preguntas
          </div>
          <div className="capitalize">
            nada - leve - moderado - mucho
          </div>
        </div>
        {questions.map((question) => (
          <RadioAnswer
  
            key={question.id}
            id={question.id}
            q={question.q}
            respuestas={question.respuestas}
            cantidad={question.cantidad}
            onAnswerSelected={handleAnswerSelected} // Pasar la función de devolución de llamada
          />
        ))}
        <Button onClick={handleClick} isDisabled={isSubmitDisabled} className="bg-blue-500 px-4 py-2 rounded-md">
          Enviar
        </Button>
      </form>
      
    </main>
  );
}

export default App;
