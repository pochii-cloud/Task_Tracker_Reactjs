const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3>{task.text} <a href="" style={{
            color:'red',
        }} onClick={()=>onDelete(task.id)}>delete</a></h3>
        <p>{task.day}</p>
      
    </div>
  )
}

export default Task
