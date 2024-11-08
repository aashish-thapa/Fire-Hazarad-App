import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
    `;

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    `;

const NavLinks = styled.ul`
    display: flex;
    list-styled: none;
`;

const NavLink = styled.li`
    margin: 0 3rem;
    
    a{
        color: white;
        text-decoration: none;
        font-size: 1rem;
        
        &:hover{
            text-decoration: underline;}}`;




function Navbar(){
    return(
        <NavbarContainer>
            <Logo>FireTracker</Logo>
            <NavLinks>
                <NavLink><a href='#home'>Home</a></NavLink>
                <NavLink><a href='#map'>Map</a></NavLink>
                <NavLink><a href='#aboutUs'>About Us</a></NavLink>
            </NavLinks>

        </NavbarContainer>
    )
}

export default Navbar;