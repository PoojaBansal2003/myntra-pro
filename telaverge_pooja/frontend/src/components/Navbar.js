// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  overflow: hidden;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 20px 0;
  margin-left: 400px;
  margin-right: 300px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;
  font-size: 16px;
  padding: 10px;

  &:hover {
    color: blue;
  }
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1b9a;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: blue;
  margin-bottom: 20px;
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        {/* <Heading>Welcome to the e-commerce website</Heading> */}
        <Nav>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/search">Search</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Wishlist">Wishlist</NavLink>
            </NavItem>
          </NavList>
          <Button>AI Help</Button>
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
