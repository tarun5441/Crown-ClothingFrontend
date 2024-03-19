import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import "./header.css"
import CartDropDown from '../cartDropDown/CartDropDown.js'
import { useSelector } from 'react-redux';

const Header = () => {

  const hidden = useSelector(state => state.cart.hidden)
  const divStyle = {
    color: 'black',
    backgroundColor: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <>
      <div style={{ backgroundColor: 'lightblue', padding: '8px', display: 'flex', alignItems: 'center' }} className='header'>
        <div style={{display:"flex",flexDirection:"row"}}>
        <Link className='logo-container' to="/">
          <Logo className="logo" style={{ width: '60px', height: '60px', marginRight: '2px' }} />
        </Link>
        <h2 style={{position:"relative", top:"10px",alignItems:"center"}}>Crown-Clothing</h2>
        </div>
       
        <div className="options">
          <Link style={divStyle} className="option" to="/shop">
            SHOP
          </Link>

          <Link style={divStyle} className="option" to="/signin">
            SIGN IN
          </Link>
    
          <Link style={divStyle} className="option" to="/contact">
            CONTACT
          </Link>
          <CartIcon style={{ width: '60px', height: '60px' }}/>
        </div>
        {hidden ? null : <CartDropDown />}
      </div>
    </>
  );
}

export default Header
