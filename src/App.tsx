import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import CoursePage from './pages/CoursePage/CoursePage'
import Profile from './pages/Profile/Profile'
import WorkoutPage from './pages/WorkoutPage/WorkoutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="app__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/workout/:courseId/:workoutId" element={<WorkoutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App