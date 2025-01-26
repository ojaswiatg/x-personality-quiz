import { useState } from "react";
import { QUESTIONS, TOption, TQuestion } from "../constants";

type TQuestionProps = {
    question: TQuestion;
    onClickNext: (option: TOption) => void;
};

export default function Question({ question, onClickNext }: TQuestionProps) {
    const allQuestions = QUESTIONS;
    const [selectedOption, setSelectedOption] = useState(-1);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        onClickNext(question.options[selectedOption]);
    }

    function onOptionChange(event: React.FormEvent) {
        const index = parseInt((event.target as HTMLInputElement).value);
        setSelectedOption(index);
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="prose-xl font-bold whitespace-normal">{question.question}</p>

            <div className="flex flex-col gap-4 h-76">
                {question.options.map((option, index) => {
                    {
                        return (
                            <div key={question.id + option.id} className="flex gap-4">
                                <input
                                    id={question.id + option.id}
                                    name={question.question}
                                    type="radio"
                                    className="radio mt-2"
                                    value={index}
                                    onChange={(event) => onOptionChange(event)}
                                />
                                <label className="prose-lg whitespace-normal">
                                    {option.option}
                                </label>
                            </div>
                        );
                    }
                })}
            </div>

            <button className="btn btn-primary mt-4" type="submit" disabled={selectedOption === -1}>
                {allQuestions[allQuestions.length - 1].id !== question.id
                    ? "Next"
                    : "Show me my results!"}
            </button>
        </form>
    );
}
