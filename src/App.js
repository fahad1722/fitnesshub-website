import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BMICalculator from "./pages/BMICalculator";
import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{width :{xl:"1488px"}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            <Route path="/bmi" element={<BMICalculator/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App