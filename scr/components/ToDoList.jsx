import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  // Check if tasks array is well-structured and each task has a unique id
  const isTasksValid = Array.isArray(tasks) && tasks.every(task => task && task.id);

  return (
    <ScrollView>
      {isTasksValid ? (
        tasks.map(task => (
          <Pressable key={task.id.toString()}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task.text}</Text>
            </View>
          </Pressable>
        ))
      ) : (
        <Text>No tasks or invalid task structure</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
