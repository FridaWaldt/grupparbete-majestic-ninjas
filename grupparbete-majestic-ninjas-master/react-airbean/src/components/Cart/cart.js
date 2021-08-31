import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import removeItem from '../../actions/removeItem';
import updateState from '../../actions/update';
import Styles from './cart.module.css'
import {IoIosArrowUp }from "react-icons/io";
import {IoIosArrowDown }from "react-icons/io";
import {RiShoppingBasketLine} from "react-icons/ri";
import { Link } from 'react-router-dom';

function Cart(){
    // Deklarerar dispatch, selector och history funktionerna.
    const dispatch = useDispatch();
    const state = useSelector(state => state.cart)
    //gör ett state som håller koll på om sidebar är active eller inte
    const [sidebarCart, setSidebarCart] = useState(false);

    // en funktion som sätter statet till motsatsen av vad statet är för tillfället
    // detta gör att sidebar togglas av/på varje gång funktionen körs
    // jag sätter då denna funktionen på de knappar som ska öppna/stänga menyn
    const showSidebarCart = () => setSidebarCart(!sidebarCart);

    const history = useHistory();

    console.log('state: ', state)

    // funktionen för att addera antal av specifik produkt
    function handleClickAdd(obj){
        // kallar på actionen updateState som jämför det givna objektet med redan existerande objekt i state arrayen.
        dispatch(updateState(obj))
    }

    // funktionen för att subtrahera antal av specifik produkt
    function handleClickRemove(obj){
        // if-sats som utgår från om objektets antal är över 1. om antalet är 1 eller lägre så tas objektet bort från state arrayen.
        if(obj.qty > 1){
            obj.qty -= 1;
            dispatch(updateState(state))
        }else{
            dispatch(removeItem(obj));
        }
    }

    // funktion som räknar ut totala priset för alla produkter.
    function handleTotal(){
        let total = 0;

        for(let i=0; i<state.length; i++){
        total = total + Number(state[i].qty) * Number(state[i].price);
        }
        return total;
    }

    // Räknar ut antalet totala produkter i varukorgen
    function cartLength () {
        let length = 0;
        for(let i=0; i<state.length; i++){
            length = length + state[i].qty;
        }
        return length;
    }

    function saveToLocalStorage() {
        localStorage.setItem('savedProducts', JSON.stringify(state));
        console.log(localStorage)
    }


    return(
        <div className={Styles.cartWrapper}>
            <div onClick={showSidebarCart} className={Styles.cartBtn}>
                    <Link to="#" className={Styles.cartIcon}>
                        <RiShoppingBasketLine />
                    </Link>
                </div>
                <div className={Styles.counterBox}>{cartLength()}</div>
            <section className={sidebarCart ? `${Styles.wrapper} ${Styles.active}`: `${Styles.wrapper}`}>
            <div className={Styles.container}>
                <h1 className={Styles.header}>Din beställning</h1>
                <div className={Styles.listContainer}>
                    
                    {/* mappar ut alla items inuti state arrayen. */}
                {state.map((item, index) => {
                        return <div className={Styles.itemBox} key={index}>
                            <div className={Styles.titleAndPrice}>
                                <h3 className={Styles.title}>{item.title}</h3>
                                <p className={Styles.price}>{item.price*item.qty} Kr</p>
                            </div>
                            <div className={Styles.dashedBorder}></div>
                            <div className={Styles.amount}>
                                <button className={Styles.btn} onClick={() => handleClickAdd(item)} ><IoIosArrowUp  size={15} style={{background: "none"}} /></button>
                                <p>{item.qty}</p>
                                <button className={Styles.btn} onClick={() => handleClickRemove(item)} ><IoIosArrowDown size={15} /></button>
                            </div>
                        </div>
                        })}
                </div>
                
                <div className={Styles.footerBox}>
                    <div className={Styles.totalBox}>
                        <h1 className={Styles.total}>Total</h1>
                        <div className={Styles.dashedFooter}></div>
                        <h1 className={Styles.total} >{handleTotal()} kr</h1>
                    </div>   
                    <p className={Styles.moms}>Inkl moms + drönarleverans</p>
                </div>
                
                <button onClick={() => history.push("/status")} className={Styles.btnBig} >Take my money!</button>
                <button className={Styles.btnSave} onClick={saveToLocalStorage}>Save your cart</button>
            </div>
        </section>
    </div>
    )
}


export default Cart;