import './App.css';
import Header from './components/Header';
import './index.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState } from 'react'
function App() {
  const[showAddTask,setShowAddTask]=useState(
    false
  )
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: '11th october',
        reminder: true
      },
      {
        id: 2,
        text: 'Doctors Appointment two',
        day: '12th october',
        reminder: false
      },
      {
        id: 3,
        text: 'Doctors Appointment three',
        day: '11th october',
        reminder: true
      },
    ]
  )
  //add task
  const AddTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (


    <div className="container">

      <Header onAdd={()=>setShowAddTask(!showAddTask)} />
      { showAddTask && <AddTask onAdd={AddTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />

    </div>

  );
}

export default App;
