import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import logo from '@/assets/logo.png'
import LogoSvg from '@/assets/logo.svg?url'
import Icon from '@/assets/icon.svg'

export const App = () => {
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOP</div>
  // }
  //
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOB</div>
  // }

  // if (__ENV__ === 'development') {
    // addDevtools()
  // }

  return <div>
    <p data-testid="App.root">Root!!!</p>
    <div>Platform: {__PLATFORM__}</div>
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/about">About</Link>

    <input type="text" />

    <div>
      <img src={logo} alt="logo" />
    </div>
    <div>
      <LogoSvg  />
      <Icon color="red" width="40" height="40" />
    </div>

    <button className={classes.button}>Click!</button>
    <Outlet />
  </div>
};