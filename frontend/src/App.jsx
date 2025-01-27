import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubscriptionCheckout from './Components/Subscription/Subscription';
import SignIn from './Components/Login_page/Employer_Login';
import PasswordForm from './Components/Login_page/Employer_password';
import Home from './Components/Home';
import Register from './Components/Login_page/Employer_signup';
import CandidateRegister from './Components/Login_page/Candidate_signup';
import CandidateSignin from './Components/Login_page/Candidate_Login';
import Candidatepassword from './Components/Login_page/Candidate_password';
import JobPostStepper from './Components/Job_post/Job_post';
import HomePage from './Components/Dashboard/Employer_home';
import Dashboard_page from './Components/Dashboard/Job_list';
import UpdateJobPost from './Components/Job_post/update';
import ProfilePage from './Components/Dashboard/Employer_profile';
import SettingsPage from './Components/Dashboard/Setting';





function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/Subscription' element={<SubscriptionCheckout />} />
          <Route path='/Employer_Login' element={<SignIn />} />
          <Route path='/Employer_password' element={<PasswordForm />}/>
          <Route path='/Employer_signup' element={<Register/>}/>
          <Route path='/Candidate_signup' element={<CandidateRegister/>}/>
          <Route path='/Candidate_Login' element={<CandidateSignin/>} />
          <Route path='/Candidate_password' element={<Candidatepassword/>}/>
          <Route path='/Job_page' element={<Dashboard_page/>}/>
          <Route path='/Job_post' element={<JobPostStepper/>}/>
          <Route path='/Home_page' element={<HomePage/>}/>
          <Route path='/Update' element={<UpdateJobPost/>}/>
          <Route path='/Employer_profile' element={<ProfilePage/>}/>
          <Route path='/Setting' element={<SettingsPage/>}/>
         
        </Routes>
      </Router>
    </div>
  )
}

export default App
