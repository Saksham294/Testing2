import React from 'react'
import './Navbar.css'
import logo from '../icell.2f352f17.gif'
import { HiBars2 } from 'react-icons/hi2'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  return (
    <div>

      <div id='myTopnav' className="navMain">
        <img className='logo' src={logo}></img>
        <div className="nav">
          <label htmlFor='btn'>
          <HiBars2 className='icon'></HiBars2>

          </label>
          <input type='checkbox' id='btn'></input>
          <ul className='navList' id='navL'>
            <li>SPEAKERS</li>
            <li>COMPETITIONS</li>
            <li>WORKSHOPS</li>
            <li>SCHEDULE</li>
            <li>SPONSORS</li>
          </ul>
        </div>

      </div>

      <div className="wrapper">
        <ul className='menu'>
            <li>SPEAKERS</li>
            <li>COMPETITIONS</li>
            <li>WORKSHOPS</li>
            <li>SCHEDULE</li>
            <li>SPONSORS</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
