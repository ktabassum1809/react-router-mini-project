
import './App.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';

import LoginSignup from './components/LoginSignup';



const Container = styled.div`
font-family: Arial, sans-serif;
`;

function App() {
 

  return (
    <Container>
    <Routes>
    <Route path="/" element={<Navigate to="/dashboard"/>}/>
    <Route path="/dashboard" element={<Dashboard />}>
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
    <Route path="/login-signup" element={<LoginSignup/>} />
    </Routes>

    </Container>
  )
}

export default App
