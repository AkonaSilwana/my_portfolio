import "./topbar.scss";
import  Mail  from "@material-ui/icons/Mail";
import  Person  from "@material-ui/icons/Person";
import { FC } from "react";
import { IMenu } from "../menu/Menu";

const Topbar: FC<IMenu> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Akona.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+27837699862" className="navlink">Call Me</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:asilwana30@gmail.com?subject=Reaching out to work with you" className="navlink">Email Me </a></span>
          </div>
          
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;