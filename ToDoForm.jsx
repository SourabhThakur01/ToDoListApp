// ToDoForm.jsx
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const ToDoForm = () => {
  return (
    <View>
      {/* Form for adding new tasks */}
      <TextInput placeholder="Enter new task" />
      <Button title="Add Task" onPress={() => {}} />
    </View>
  );
};

export default ToDoForm;
