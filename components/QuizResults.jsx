import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export const QuizResults = ({
  correctAnswers,
  incorrectAnswers,
  totalQuestions,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Результати квізу</Text>
      <Text style={styles.text}>Правильні відповіді: {correctAnswers}</Text>
      <Text style={styles.text}>Неправильні відповіді: {incorrectAnswers}</Text>
      <Text style={styles.text}>
        Загальна кількість запитань: {totalQuestions}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.textButton}>Закрити</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 5,
  },
  title: { fontWeight: "bold", fontSize: 30, marginBottom: 10 },
  text: { fontSize: 18 },
  button: {
    marginTop: 25,
    backgroundColor: "#5f9ea0",
    padding: 10,
    borderRadius: 10,
  },
  textButton: { fontSize: 18, color: "#f0ffff", textAlign: "center" },
});
