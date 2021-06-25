/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular';
import { Menu4 } from '@styled-icons/remix-fill';

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  box-shadow: 0 1px 0 rgba(22, 8, 43, 0.1);
  padding: 0 1rem;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  justify-content: space-between;
`;

const Title = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 500;
  display: none;
`;

const Search = styled.div`
  display: flex;
  padding: 0.4rem 0.75rem;
  background-color: #f4f0fa;
  border-radius: 0.25rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #f4f0fa;
`;

const SearchAltStyle = styled(SearchAlt)`
  height: 1.2rem;
  width: 1.2rem;
  color: red;
`;

const Menu4Style = styled(Menu4)`
  height: 2rem;
  width: 2rem;
  color: white;
  cursor: pointer;
`;

const Header = () => (
  <Navbar>
    <NavbarContainer>
      <Title>
        AquariumNext
      </Title>

      <Search>
        <SearchInput />
        <SearchAltStyle />
      </Search>

      <Menu4Style />

    </NavbarContainer>
  </Navbar>
);

export default Header;
