import React from 'react'
import "./menuStyle.css"
import logo from "../Img/FlipCash logo.png"
import dashboardimg from "../Img/dashboardlogo.png"
import accountimg from "../Img/accountlogo.png"
import depositimg from "../Img/depositlogo.png"
import transferimg from "../Img/transferlogo.png"
import withdrawimg from "../Img/withdrawlogo.png"
import paybillsimg from '../Img/paybillslogo.png'
import historyimg from "../Img/historylogo.png"
import notificationimg from "../Img/notificationlogo.png"
import logoutimg from "../Img/logoutlogo.png"
import { Link, NavLink } from 'react-router-dom'
import { MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiHandDeposit } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";


// import axios from 'axios'


const Menu = () => {


  // const logOutUrl = "https://flipcash-banking.onrender.com/api/v1/user/sign-out"

  const handleLogout = ()=>{

    // try{
    //   const response = await axios.post(logOutUrl, {
    //     headers: {
    //       "Authorization" : `Bearer ${localStorage.getItem("userToken")}`
    //     }
    //   })
    //   console.log(response)
    // }
    // catch(err){
    //   console.log(err);
    // }
    localStorage.removeItem("userToken")
    localStorage.removeItem("email")
    localStorage.removeItem("phoneNumber")
    localStorage.removeItem("firstName")
    localStorage.removeItem("accountNumber")
    localStorage.removeItem("lastName")
    localStorage.removeItem("currentBalance")
    localStorage.removeItem("type")
    localStorage.removeItem("amount")
    localStorage.removeItem("receiver")
    localStorage.removeItem("sender")
  }

  return (
    <>

        <div className='menu'>
            <div className='bankLogo'>
              <div className='logoImg'>
                <img src={logo} alt=''/>
              </div>
            </div>

            <div className='theMenus'>

              <NavLink to= "/dashboard" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <MdDashboard className='menu_logo'/>
                <h5>Dashboard</h5>
              </NavLink>

              <NavLink to= "/account"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <MdOutlineAccountCircle className='menu_logo'/>
                <h5>Account</h5>
              </NavLink>

              <NavLink to= "/deposit" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <PiHandDeposit  className='menu_logo'/>
                <h5>Deposit</h5>
              </NavLink>

              <NavLink to= "/transfer"  className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <FaMoneyBillTransfer  className='menu_logo'/>
                <h5>Transfer</h5>
              </NavLink>

              <NavLink to= "/withdraw" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <BiMoneyWithdraw  className='menu_logo'/>
                <h5>Withdraw</h5>
              </NavLink>

              <NavLink to= "/paybills" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <MdPayments className='menu_logo'/>
                <h5>Pay Bills</h5>
              </NavLink>

              <NavLink to= "/history" className={({ isActive}) =>
                            isActive ? "active" : "notactive"}>
                <FaHistory className='menu_logo'/>
                <h5>History</h5>
              </NavLink>

            </div>

            <div className='log_out'>
              <MdLogout className='log_out_logo' />
              <h5 onClick={handleLogout}>Log out</h5>
            </div>
        </div>
    
    </>
  )
}

export default Menu
