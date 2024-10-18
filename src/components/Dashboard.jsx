import React from 'react'
import { Link,useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'


const DashboardContainer = styled.div`
display: flex;
`;

const SideBar = styled.div`
width: 200px;
background-color: #f0f0f0;
padding: 10px;
`;

const MainContent = styled.div`
flex:1;
padding: 10px;
`;

const NavItem = styled(Link)`
display: block;
padding: 10px;
color: #333;
text-decoration: none;

&:hover {
    color: #ddd;
    }
`;

function Dashboard() {

    const navigate = useNavigate();
  return (
    <DashboardContainer>
   <SideBar>
   <h3>Dashboard</h3>
    <ul>
    <li>
    <NavItem to="home">Home</NavItem>
    </li>
    <li>
    <NavItem to="about">About</NavItem>
    </li>
    <li>
    <NavItem as="button" onClick={() => navigate('/login-signup')}>
      Login/Signup
    </NavItem>
  </li>
    </ul>
   </SideBar>
   <MainContent>

  <Outlet></Outlet>

   </MainContent>

    
    </DashboardContainer>
  )
}

export default Dashboard