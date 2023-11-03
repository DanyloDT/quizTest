import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveQuizResults = async (
  correctAnswersCount,
  incorrectAnswersCount,
  totalQuestionsCount
) => {
  try {
    const results = await AsyncStorage.getItem("quizResults");
    const parsedResults = results ? JSON.parse(results) : [];

    const resultEntry = {
      date: new Date().toDateString(),
      correctAnswers: correctAnswersCount,
      incorrectAnswers: incorrectAnswersCount,
      totalQuestions: totalQuestionsCount,
    };

    console.log(resultEntry);
    parsedResults.push(resultEntry);

    await AsyncStorage.setItem("quizResults", JSON.stringify(parsedResults));
  } catch (error) {
    console.error("Помилка збереження результатів квізу:", error);
  }
};
