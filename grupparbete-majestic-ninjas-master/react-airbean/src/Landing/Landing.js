import React, { useEffect } from "react";
import Styles from "./landing.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import addItem from "../actions/addItem";
/* import Burger from "../components/Burger/Burger";  */
//image imports
import landinglogo from "../graphics/airbean-landing.svg";
import landingLeft from "../graphics/intro-graphic-left.svg";
import landingRight from "../graphics/intro-graphic-right.svg";

function Landing() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        let products = JSON.parse(localStorage.getItem("savedProducts"));
        console.log(products);
        if(products){
          dispatch(addItem(products));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <section onClick={() => history.push("/menu")} className={Styles.landing}>
      <div className={Styles.leafsLeft}>
        <img id={Styles.landingLeft} src={landingLeft} alt="leafs left side" />
      </div>
      <div className={Styles.logoBox}>
        <img id={Styles.landingLogo} src={landinglogo} alt="logo coffecup" />
      </div>
      <div className={Styles.leafsRight}>
        <img
          id={Styles.landingRight}
          src={landingRight}
          alt="leafs right side"
        />
      </div>
    </section>
  );
}

export default Landing;
