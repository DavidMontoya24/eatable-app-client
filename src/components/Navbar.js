import { VscHome } from "react-icons/vsc";
import { IoPersonSharp } from "react-icons/io5";
import { BiHistory } from "react-icons/bi";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { NavLink } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  z-index: 1;
`;

function Navbar() {
  const inactiveLink = {
    color: `${colors.gray}`,
  };

  const activeLink = {
    color: `${colors.orange}`,
    filter: `drop-shadow(0px 6px 20px ${colors.orange})`,
  };

  return (
    <NavbarWrapper>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        <VscHome size="31px" data-cy="home_btn"/>
      </NavLink>
      <NavLink
        to="/profile"
        style={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        <IoPersonSharp size="24px" data-cy="profile_btn"/>
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      >
        <BiHistory size="29px" data-cy="history_btn"/>
      </NavLink>
    </NavbarWrapper>
  );
}

export default Navbar;
