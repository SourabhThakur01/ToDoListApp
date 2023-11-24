import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { SafeAreaView, Button } from 'react-native';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function Home({ navigation }){
    const [tasks, setTasks] = React.useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Eat food'
    ]);
    
    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    return(
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm onAddTask={handleAddTask}/>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </SafeAreaView>
        </MainLayout>
    );
}

export default Home;