import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [submittedAnswers, setSubmittedAnswers] = useState([]);

  function handleSubmit(formData) {
    setSubmittedAnswers([...submittedAnswers, formData]);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={submittedAnswers}/>
      </section>
      <section className="survey__form">{<Form onSubmit={handleSubmit}/>}</section>
    </main>
  );
}

export default Survey;
