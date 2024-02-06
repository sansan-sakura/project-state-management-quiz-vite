import { create } from "zustand";

import data from "../static/data.json";

const useQuizStore = create((set) => ({
  questions: data.questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,

  submitAnswer: (questionId, answerIndex) => {
    // const question = questions.find((q) => q.id === questionId);
    // if (!question) {
    //   throw new Error(
    //     "Could not find question! Check to make sure you are passing the question id correctly."
    //   );
    // }
    // if (question.options[answerIndex] === undefined) {
    //   throw new Error(
    //     `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
    //   );
    // }
    // set((state) => ({
    //   answers: [
    //     ...state.answers,
    //     {
    //       questionId,
    //       answerIndex,
    //       question,
    //       answer: question.options[answerIndex],
    //       isCorrect: question.correctAnswerIndex === answerIndex,
    //     },
    //   ],
    // }));
  },

  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
    });
  },
}));

export default useQuizStore;
