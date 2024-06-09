import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaUser } from 'react-icons/fa'; 

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  font-size: 18px;
  padding: 10px;

  &:hover {
    color: purple;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 50px;
  font-size: 20px;
  color: black;
`;

const NavbarLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 34px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src="final_logo.png" alt="Logo" />
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </NavList>
      <IconWrapper>
        <Icon>
          <Link to="/dashboard">
            <FaSearch />
          </Link>
        </Icon>
        <Icon>
          <Link to="/register">
            <FaUser />
          </Link>
        </Icon>
      </IconWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
