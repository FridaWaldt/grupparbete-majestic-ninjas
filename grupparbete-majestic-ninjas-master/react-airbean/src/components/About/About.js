import React from "react";
/* import { useHistory } from "react-router-dom"; */
import Styles from "./about.module.css";
import founderImg from "../../graphics/eva-cortado.jpg";
import aboutLeafHeader from "../../graphics/graphics-header.svg";
import aboutLeafFooter from "../../graphics/graphics-footer.svg";
//components
import Burger from "../Burger/Burger";

function About() {
  /* const history = useHistory(); */
  return (
    <section className={Styles.aboutContainer}>
      {/* komponent för nav-menyn */}
      <Burger />

      <div className={Styles.aboutLeafUp}>
        <img src={aboutLeafHeader} alt="leafs header" />
      </div>

      <h1 className={Styles.ourCoffeTitle}>Vårt Kaffe</h1>

      <article className={Styles.aboutCoffe}>
        <p>
          Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.
        </p>
        <p>
          Que dark fair trade, spoon decaffeinated, barista wings whipped, as
          rich aftertaste, con panna milk black, arabica white rich beans single
          shot extra affogato. So affogato macchiato sit extraction instant
          grinder seasonal organic, turkish single shot, single origin, and
          robusta strong to go so dripper. Viennese froth, grounds
          caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
          frappuccino medium, café au lait flavour cultivar ut bar instant
          kopi-luwak.
        </p>
        <p>
          Roast id macchiato, single shot siphon mazagran milk fair trade est
          aroma a half and half and, so, galão iced to go, whipped as cream cup
          pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
          and half at, that, percolator macchiato trifecta and body as arabica
          dripper. In galão black java milk sit trifecta, robusta, acerbic café
          au lait instant shop latte. Seasonal bar shop filter aroma id, crema,
          affogato viennese cultivar aftertaste, seasonal, percolator cream
          black, galão flavour, milk aromatic turkish skinny crema.
        </p>
      </article>
      <img className={Styles.founderImg} src={founderImg} alt="founder img" />

      <h2 className={Styles.evaCortado}>Eva Cortado</h2>
      <p className={Styles.evasTitle}>VD &amp; Grundare</p>
      <div className={Styles.aboutLeafDown}>
        <img id={Styles.leafsBottom} src={aboutLeafFooter} alt="leafs bottom" />
      </div>
    </section>
  );
}

export default About;
