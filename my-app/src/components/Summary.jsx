function Summary({ tasks }) {
  const total = tasks.length
  const doneCount = tasks.filter((task) => task.done).length

  return (
    <p>
      יש {total} משימות, ומתוכן {doneCount} הושלמו
    </p>
  )
}

export default Summary