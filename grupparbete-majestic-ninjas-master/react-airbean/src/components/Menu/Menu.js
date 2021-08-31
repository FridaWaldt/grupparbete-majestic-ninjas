import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Styles from './menu.module.css'
import addItem from '../../actions/addItem'
import updateState from '../../actions/update';

import menuAdd from "../../graphics/add.svg";

import Burger from '../Burger/Burger'
import Cart from '../Cart/cart';



function Menu() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const state = useSelector(state => state.cart)


    // hämtar vår data från API:et med GET. Sparar ner datan och översätter till json. Sparar vår data inom vårt lokala state.
    useEffect(() => {
        (async () => {
            try{
                const response = await fetch('http://localhost:5000/api/beans')
                const data = await response.json()
            
                setProducts(data.menu)
            }catch(error){
                console.error(error)
            }
            
        })()
    }, [])

    //handleClick för att lägga till vårt objekt i cart. Först filtrerar vi vårt state som ger tillbaka en array med objekt som inte har samma produkt id som objekt id. Sen frågar vi oss ifall vår nya array's längd är större än 0, då ska vi uppdatera vårt redux state med den nya kvantiteten. Om det inte är längre än 0, då lägger vi till det som ett nytt objekt.
    function handleClick(obj){
        const inCart = state.filter((product) => {return product.id === obj.id})

        if(inCart.length > 0){
            dispatch(updateState(obj))
        }else{
            dispatch(addItem(obj))
        }
    }

    return (
        <div className={Styles.menuBox}>
            <nav className={Styles.menuNavigation}>
                <Burger />
                <Cart />
            </nav>
            <section className={Styles.menuSection}>
                <div className={Styles.menuWrapper}>
                    <h1>Meny</h1>
                    <ul className={Styles.menuList}>
                        {/* Mappar ut vårt item från vårt lokala state, lägger till att quantity är 1. Visar titel, pris och beskrivning på våra produkter.*/}
                        {products.map((item) => {
                            item.qty = 1
                            return (
                                <li className={Styles.menuItem} key={item.id}>
                                    <img onClick={() => handleClick(item)} className={Styles.itemButton} src={menuAdd} alt="menu add-button"/>
                                    <div className={Styles.itemBox}>
                                        <h4 className={Styles.itemTitle}>{item.title}</h4>
                                        <div className={Styles.dashedBorder}></div>
                                        <h4 className={Styles.itemPrice}>{item.price} kr</h4>
                                    </div>
                                    <h6 className={Styles.itemDescription}>{item.desc}</h6>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            <footer className={Styles.menuFooter}></footer>
        </div>
    )
}

export default Menu;


