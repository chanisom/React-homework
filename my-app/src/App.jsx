import Header from './components/Header'
import TaskList from './components/TaskList'
import Summary from './components/Summary'

const tasks = [
  { id: 1, name: 'ללמוד ריאקט', done: true },
  { id: 2, name: 'לבנות אתר משימות', done: false },
  { id: 3, name: 'להעלות לגיט', done: false },
  { id: 4, name: 'לקנות חלב', done: true },
]

function App() {
  return (
    <div dir="rtl">
      <Header userName="דני" />
      <Summary tasks={tasks} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App