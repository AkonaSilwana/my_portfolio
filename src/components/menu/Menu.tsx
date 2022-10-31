import { FC } from "react";
import "./menu.scss";

export interface IMenu {
  menuOpen: boolean,
  setMenuOpen: Function
}

const Menu: FC<IMenu> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
      
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#technologies">Technologies</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;