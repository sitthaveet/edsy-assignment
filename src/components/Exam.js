import React, { useState, useEffect } from "react";
import questionsData from "../assets/questions.json";
import Timer from "./Timer";

const Exam = ({ onNextPage }) => {
  // Use useState to store the current question index
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // function for next and prev buttons
  const onNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const onPrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  // Define a custom component for each question
  const question = questionsData.questions[currentQuestion];

  // set state for selected option
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questionsData.questions.length).fill("")
  );

  const handleOptionChange = (e) => {
    // Get the option value from the event target
    const optionValue = e.target.value;
    // Create a copy of the selectedOptions array
    const newSelectedOptions = [...selectedOptions];
    // Update the selected option for the current question
    newSelectedOptions[currentQuestion] = optionValue;
    // Set the state with the updated array
    setSelectedOptions(newSelectedOptions);
  };

  // Define the style for the selected and non-selected options
  const selectedStyle =
    "badge badge-accent text-primary block my-2 border-gray-200 py-5 w-full flex items-center justify-start ";
  const nonSelectedStyle =
    "badge block my-2 w-full border-gray-200 py-5 hover:bg-gray-100 flex items-center justify-start ";

  // progress bar
  const progress =
    ((currentQuestion + 1) / questionsData.questions.length) * 100;

  // define onSubmit function
  const onSubmit = () => {
    // send the selected answer to console
    console.log(selectedOptions);
    // go to the next page
    onNextPage();
  };

  // render the question component
  const Question = ({ question, selectedOption }) => {
    return (
      <div className="flex justify-start ml-7 w-5/6">
        <div className="question w-full">
          <h2 className="text-xl font-bold my-3 text-left">
            Question {question.id}/{questionsData.questions.length}
          </h2>
          <h3 className="text-l my-5 text-left">{question.questionText}</h3>
          <div className="choices">
            <div className="text-left form-control">
              {question.options.map((option, id) => (
                <label className="label cursor-pointer">
                  <div
                    key={id}
                    className={
                      selectedOption === option
                        ? selectedStyle
                        : nonSelectedStyle
                    }
                  >
                    <input
                      type="radio"
                      id={option}
                      name={question.id}
                      value={option}
                      checked={selectedOption === option}
                      onChange={handleOptionChange}
                    />
                    <span className="mx-2 label-text">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-7">
      <div className="flex justify-between">
        <p className="text-secondary text-left ml-7 font-bold">
          {" "}
          Multiple Choice
        </p>
        <Timer />
      </div>
      <div className="container flex">
        <progress
          className="progress progress-secondary mx-7 my-2"
          value={progress}
          max="100"
        ></progress>
      </div>

      <form onSubmit={onSubmit}>
        <Question
          question={question}
          selectedOption={selectedOptions[currentQuestion]}
        />
        <div className="buttons flex justify-between">
          {/* Back button for all pages except the first question */}
          {currentQuestion > 0 && (
            <div className="justify-start mt-10 ml-7">
              <button
                className="btn btn-primary my-3 "
                type="button"
                onClick={onPrevQuestion}
              >
                Back
              </button>
            </div>
          )}
          {/* Next button for all pages except the last question */}
          {currentQuestion < questionsData.questions.length - 1 &&
            currentQuestion > 0 && (
              <div className="justify-end mt-10 mr-7">
                <button
                  className="btn btn-primary my-3"
                  type="button"
                  onClick={onNextQuestion}
                >
                  Next
                </button>
              </div>
            )}
          {/* Last question must be submit button */}
          {currentQuestion === questionsData.questions.length - 1 && (
            <div className="justify-end mt-10 mr-7">
              <button
                className="btn btn-primary my-3"
                type="submit"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
        <div className="buttons flex mt-10 content-center justify-end">
          {/* If only have one next button */}
          {currentQuestion === 0 && (
            <div className="mr-7">
              <button
                className="btn btn-primary my-3"
                type="button"
                onClick={onNextQuestion}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Exam;
