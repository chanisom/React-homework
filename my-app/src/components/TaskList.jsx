function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} - {task.done ? 'הושלמה' : 'לא הושלמה'}
        </li>
      ))}
    </ul>
  )
}

export default TaskList