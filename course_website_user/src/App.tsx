import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar } from "./components/AppBar/AppBar"
import { Courses } from "./components/Courses/Courses"
import { Landing } from "./components/Landing"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"

import { RecoilRoot } from 'recoil';
import PurchaseCourse from './components/Courses/PurchaseCourse';



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
            <Route path="/purchasecourse" element={<PurchaseCourse courseId="123" />} />
          

          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  )
}

export default App
