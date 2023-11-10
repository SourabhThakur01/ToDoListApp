// App.jsx
import React from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

const App = () => {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
};

export default App;
