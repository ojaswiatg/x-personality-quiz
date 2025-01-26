"use client";

import { useState } from "react";
import Question from "./components/Question";
import { QUESTIONS, TOption } from "./constants";
import Finish from "./components/Finish";
import Start from "./components/Start";

export default function Home() {
    const questions = QUESTIONS;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [totalPoints, setTotalPoints] = useState(0);

    const onClickNext = (option: TOption) => {
        if (currentQuestionIndex < questions.length) {
            setTotalPoints((prev) => prev + option.points);
        }
        setCurrentQuestionIndex((prev) => prev + 1);
    };

    return (
        <div>
            {currentQuestionIndex === -1 ? (
                <Start onClickStart={() => setCurrentQuestionIndex(0)} />
            ) : currentQuestionIndex >= questions.length ? (
                <Finish
                    totalPoints={totalPoints}
                    onClickAgain={() => setCurrentQuestionIndex(-1)}
                />
            ) : (
                <div className="main p-8 flex flex-col gap-4">
                    <p className="prose-lg font-bold">Question {currentQuestionIndex + 1}/10</p>
                    <progress
                        className="progress progress-primary"
                        value={currentQuestionIndex + 1}
                        max="10"
                    ></progress>
                    <Question
                        key={questions[currentQuestionIndex].question}
                        question={questions[currentQuestionIndex]}
                        onClickNext={onClickNext}
                    />
                </div>
            )}
        </div>
    );
}
