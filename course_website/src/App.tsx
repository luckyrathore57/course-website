import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar } from "./components/AppBar/AppBar"
import { Courses } from "./components/Courses/Courses"
import { Landing } from "./components/Landing"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"
import { CreateCourse } from './components/Courses/CreateCourse';
import { CourseUpdate } from './components/Courses/CourseUpdate';
import { RecoilRoot } from 'recoil';



function App() {


  return (

    <div>
      <RecoilRoot>

        <Router>
          <AppBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/createcourse" element={<CreateCourse />} />
            <Route path="/updatecourse/:courseId" element={<CourseUpdate />} />

          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
