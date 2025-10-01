import './App.css'
import StudentCard from './components/StudentCard'
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <h1>Student info</h1>
         <StudentCard name="Turki Alslamah" id="202172030" dept="CCM" />
        </div>
      </main>
    </div>
  )
}

export default App
