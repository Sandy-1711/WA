"use client"
import Image from "next/image"
import navcss from '../../styles/Nav/navcss.module.css'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
export default function Nav() {

    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        
        tl.to('#nav', {
            position: 'fixed',
            top: 0,
            y:0,
            backgroundColor: '#272839',
            scrollTrigger: {
                target: '#nav',
                scroller: 'body',
                start: '100px top',
                end: '10px top',
                scrub: 0.5,
            }
        })
    }, [])

    return <nav id="nav" className={navcss.navbar}>
        <div className={navcss.logo}><Image height={100} width={100} src='https://zimed.netlify.app/assets/images/logo-1-1.png' /></div>
        <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Services</a>
            </li>

            <li>
                <a>Disclaimer</a>
            </li>
            <li>
                <a>Contact Us</a>
            </li>
            <li>
                <a>Our Clients</a>
            </li>

        </ul>
        <button>Start Now</button>

    </nav>
}