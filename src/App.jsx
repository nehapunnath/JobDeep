import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import BrowseJobs from './pages/BrowseJobs'
import JobDetails from './pages/JobDetails'
import Contact from './pages/Contact'
import Employers from './pages/Employers'
import JobPosting from './pages/JobPosting'
import Careers from './pages/Careers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/browse-jobs' element={<BrowseJobs/>}/>
      <Route path='/jobs' element={<JobDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/employers' element={<Employers/>}/>
      <Route path='/job-posting' element={<JobPosting/>}/>
      {/* <Route path='/careers' element={<Careers/>}/> */}


      

      
    </Routes>
      <Footer/>
    </>
  )
}

export default App
