"use client"

import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import techcss from '../../styles/Technologies/techcss.module.css'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
export default function Technologies() {
  
    useEffect(function () {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();
        tl.from(`.${techcss.innerCircle}`,{
            
            opacity:0,
            scrollTrigger:{
                trigger:`.${techcss.techAnimation}`,
                scroller:`.${techcss.techPage}`,
                start:'top center',
                end:'bottom center',
                pin:true,
                markers:true,

            }
        })
        
    },[]);
    return (<div className={techcss.techPage}>
        <div className={techcss.techtext}><h1>Technologies We Use</h1></div>

        <div className={techcss.techAnimation}>
            <div id='inner'  className={techcss.innerCircle}>
            </div>
            <div className={techcss.outerCircle1}>
                <div className={techcss.imageBox}>
                    <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/Html.png'} />
                    </div>
                    <div style={{ '--i': 1 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/CSS.png'} />
                    </div>
                    <div style={{ '--i': 2 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/Javascript.png'} />
                    </div>

                </div>
            </div>
            <div className={techcss.outerCircle2}>
                <div className={techcss.imageBox}>
                    <div style={{ '--i': 0 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/ReactNative.png'} />
                    </div>
                    <div style={{ '--i': 1.2 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/React.png'} />
                    </div>
                </div>
            </div>
            <div className={techcss.outerCircle3}>
                <div className={techcss.imageBox}>
                    <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                        <Image height={100} width={100} src={'/Next.png'} />
                    </div>
                    <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/Node.png'} />

                    </div>
                </div>
            </div>
            <div className={techcss.outerCircle4}>

                <div className={techcss.imageBox}>
                    <div style={{ '--i': 0.2 }} className={techcss.imgimgbox}>

                        <Image height={100} width={100} src={'/MongoDB.png'} />
                    </div>
                    <div style={{ '--i': -0.8 }} className={techcss.imgimgbox}>
                        <Image height={100} width={100} src={'/Blockchain.png'} />

                    </div>
                </div>
            </div>
        </div>
    </div>)
}