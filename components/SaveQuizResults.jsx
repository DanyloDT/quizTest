import AsyncStorage from "@react-native-async-storage/async-storage";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

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
    await addDoc(collection(db, "results"), resultEntry);
  } catch (error) {
    console.error("Помилка збереження результатів квізу:", error);
  }
};
