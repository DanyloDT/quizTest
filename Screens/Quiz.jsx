import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Button,
  // Button,
} from "react-native";
import questionsData from "../components/questions.json";
import { saveQuizResults } from "../components/SaveQuizResults";
import { QuizResults } from "../components/QuizResults";

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  console.log(selectedAnswer);
  const handleAnswerSelection = (answer) => {
    if (selectedAnswer === null) {
      const currentQuestion = questionsData.questions[currentQuestionIndex];
      setSelectedAnswer(answer);
      if (answer === currentQuestion.correctAnswer) {
        setIsAnswerCorrect(true);
        setCorrectAnswersCount(correctAnswersCount + 1);
      } else {
        setIsAnswerCorrect(false);
        setIncorrectAnswersCount(incorrectAnswersCount + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      setSelectedAnswer(null);
      setIsAnswerCorrect(false);
      if (currentQuestionIndex < questionsData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
        saveQuizResults(
          correctAnswersCount,
          incorrectAnswersCount,
          questionsData.questions.length
        );
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(false);
    setQuizCompleted(false);
    setCorrectAnswersCount(0);
    setIncorrectAnswersCount(0);
  };

  const handleShowResults = () => {
    setShowResults(!showResults);
  };

  return (
    <View style={styles.container}>
      {quizCompleted ? (
        <>
          <Text style={styles.quizCompleted}>Квіз завершено!</Text>
          <TouchableOpacity onPress={resetQuiz} style={styles.button}>
            <Text style={styles.text}>Почати спочатку</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShowResults} style={styles.button}>
            <Text style={styles.text}>Показати результати</Text>
          </TouchableOpacity>
          <Modal visible={showResults} animationType="slide">
            <QuizResults
              correctAnswers={correctAnswersCount}
              incorrectAnswers={incorrectAnswersCount}
              totalQuestions={questionsData.questions.length}
              onClose={handleShowResults}
            />
          </Modal>
        </>
      ) : (
        <>
          <Text style={styles.question}>
            {questionsData.questions[currentQuestionIndex].question}
          </Text>
          <View style={styles.blockAnswer}>
            {questionsData.questions[currentQuestionIndex].answers.map(
              (answer, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswerSelection(answer)}
                  style={
                    selectedAnswer === answer
                      ? styles.selectedAnswer
                      : styles.answer
                  }
                >
                  <Text style={styles.text}>{answer}</Text>
                </TouchableOpacity>
              )
            )}
          </View>

          {selectedAnswer && (
            <Text
              style={
                isAnswerCorrect ? styles.correctAnswer : styles.incorrectAnswer
              }
            >
              {isAnswerCorrect
                ? "Правильна відповідь!"
                : "Неправильна відповідь."}
            </Text>
          )}

          <Button
            title="Наступне питання"
            onPress={nextQuestion}
            disabled={selectedAnswer === null}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  question: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
  },
  blockAnswer: {
    gap: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  answer: {
    minWidth: 60,
    backgroundColor: "#5f9ea0",
    padding: 8,
    borderRadius: 10,
  },
  selectedAnswer: {
    minWidth: 60,
    backgroundColor: "#0000ff",
    padding: 8,
    borderRadius: 10,
  },
  correctAnswer: {
    color: "green",
  },
  incorrectAnswer: {
    color: "red",
  },
  quizCompleted: { marginBottom: 20, fontSize: 30 },

  button: {
    marginBottom: 20,
    backgroundColor: "#5f9ea0",
    padding: 10,
    borderRadius: 10,
  },
  text: { fontSize: 18, color: "#f0ffff", textAlign: "center" },
});
