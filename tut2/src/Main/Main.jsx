import React,{useEffect} from 'react'
import './Main.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import gsap from 'gsap'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { useState } from 'react';
import { scrollPercent } from '../../scrollPercent';
import AOS from 'aos';
import {TbPodium,TbTrophy,TbManualGearbox} from 'react-icons/tb'

const Main = () => {
  let scroll=0;

  window.addEventListener('wheel', function(event)
{
if (event.deltaY < 0)
{
scroll=1

}
else if (event.deltaY > 0)
{
scroll=0

}
});



useEffect(()=>{

 scrollPercent()

})

    return (



     <div>
       <span id='scrollProgress'></span>
      <div data-aos="fade-left" id='parentCont' className="parent row">
     
    <div className="content">
    <canvas className="first"></canvas>
    <section className="one">
          <div className="heading1" id='heading1'>
            <h1 id='firstHeading'>WITNESS POSSIBILITIES LIKE NEVER BEFORE</h1>
          </div>
        
        </section>
        <section className="two" id='two'>
          <div className="vidContainer" id='vidContainer'>
            <p id='vid'>teaser vid</p>
           
          </div>

        </section>
        <section className="three">
          <div className="competitionsContainer">
            <div className="ellipse">
              <TbTrophy size={94} style={{marginLeft:"0.3rem",marginTop:"0.2rem"}}/>
            </div>
            <div className="competitionHeading">
              <h1 id='competitionsHeading'>COMPETITIONS</h1>
            </div>
            <div className="competitionsPara">
              <p>Indulge in exciting hackathons, case studies, business plans.</p>
            </div>
            <div className="btnContainer">
              <button>KNOW MORE</button>
            </div>
          </div>
        </section>
        <section className="four">
          <div className="competitionsContainer">
            <div className="ellipse">
              <TbPodium size={100}/>
            </div>
            <div className="ssHeading">
              <h1 id='speaker'>SPEAKER SESSIONS</h1>
            </div>
            <div className="ssPara">
              <p>Insightful sessions from industry experts</p>
            </div>
            <div className="btnContainer2">
              <button>KNOW MORE</button>
            </div>
          </div>
        </section>
        <section className="five">
          <div className="workshopsContainer">
            <div className="ellipse">
              <TbManualGearbox size={90} style={{margin:"0.5rem"}}/>
            </div>
            <div className="workshopsHeading">
              <h1 id='workshops'>WORKSHOPS</h1>
            </div>
            <div className="workshopsPara">
              <p>Upskill yourself with hand-on workshops.</p>
            </div>
            <div className="btnContainer3">
              <button>KNOW MORE</button>
            </div>
          </div>
        </section>
        <section className="six">
      <h1 id='sixth'> ESUMMIT LOGO</h1>
        </section>
       
    </div>

      </div>
     </div>
  

    )
}

export default Main
