// ToDoList.jsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const ToDoList = () => {
  return (
    <ScrollView>
      {/* Move ToDo items here */}
      <View><Text>Task 1</Text></View>
      <View><Text>Task 2</Text></View>
      {/* Add more tasks as needed */}
    </ScrollView>
  );
};

export default ToDoList;
