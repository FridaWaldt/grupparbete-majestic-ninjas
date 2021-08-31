import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Styles from "./status.module.css";
import droneImg from "../../graphics/drone.svg";

function Status() {
  const [status, setStatus] = useState([]);
  const history = useHistory();

  // Vi hämtar vår data från API:et som innehåller data till statussidan. Till skillnad från API:et som innehåller menyn så behöver vi här använda {method: 'POST'}. Vi sparar ner datan med setStatus och skriver om till json. Datan sparar vi i vårt state "status".

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/api/beans", {
          method: "POST",
        });
        const data = await response.json();

        console.log(data);
        setStatus(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  function handleClick(){
    localStorage.clear()
    history.push("/menu")
  }
  
  // I return skickar vi ut ordernr och ETA med vårt data från vårt state.
  return (
    <div className={Styles.statusContainer}>
      <h4 className={Styles.orderNr}>
        Ordernummer <b>#{status.orderNr}</b>
      </h4>
      <img
        className={Styles.droneImg}
        src={droneImg}
        alt="drone img"
        data-testid="img-drone"
      />
      <h1 className={Styles.yourOrder}>Din beställning är på väg!</h1>
      <h3 className={Styles.Eta}>
        <b>{status.eta}</b> minuter
      </h3>

      <button
        onClick={handleClick}
        className={Styles.statusBtn}
      >
        Ok, cool!
      </button>
    </div>
  );
}

export default Status;
