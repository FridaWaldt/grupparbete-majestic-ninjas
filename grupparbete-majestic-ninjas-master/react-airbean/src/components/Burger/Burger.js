import React, { useState } from "react";
import Style from "./burger.module.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Burger() {
  //gör ett state som håller koll på om sidebar är active eller inte
  const [sidebar, setSidebar] = useState(false);

  // en funktion som sätter statet till motsatsen av vad statet är för tillfället
  // detta gör att sidebar togglas av/på varje gång funktionen körs
  // jag sätter då denna funktionen på de knappar som ska öppna/stänga menyn
  const showSidebar = () => setSidebar(!sidebar);

  // med hjälp av en ternary op så lägger jag till/tar bort klassen "active" på nav beroende på vad statet är.

  return (
    <div className={Style.burgerWrapper}>
      <div className={Style.burgerBtn} onClick={showSidebar}>
        <Link to="#" className={Style.burgerIcon}>
          <AiOutlineMenu />
        </Link>
      </div>
      <nav
        className={sidebar ? `${Style.navMenu} ${Style.active}` : Style.navMenu}
      >
        <div className={Style.burgerBtn} onClick={showSidebar}>
          <Link to="#" className={Style.burgerIcon}>
            <AiOutlineClose />
          </Link>
        </div>
        <ul className={Style.navMenuItems}>
          <li>
            {/* onClick för att toggla bort menyn ifall man trycker på den sidan man redan står på */}
            <Link to="/menu" className={Style.navText} onClick={showSidebar}> 
              Meny
            </Link>
          </li>
          <li className={Style.navLine}></li>
          <li>
            <Link to="/about" className={Style.navText} onClick={showSidebar}>
              Vårt kaffe
            </Link>
          </li>
          <li className={Style.navLine}></li>
        </ul>
      </nav>
    </div>
  );
}

export default Burger;
