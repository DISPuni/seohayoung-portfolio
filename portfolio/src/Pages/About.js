import React, { useEffect, useState } from 'react'

import './About.css'

import NavHeader from '../Components/NavHeader'
import MobileNavHeader from '../Components/MobileNavHeader'
import MobileNav from '../Components/MobileNav'
import Accordion from '../Utils/Accordion'
import SecondFooter from '../Components/SecondFooter'
import TopBtn from '../Components/TopBtn'
import MobileFooter from '../Components/MobileFooter'

import logo from '../assets/icons/disp_mainlogo.svg'

import fashionLogo from '../assets/about/fashion_logo.svg'
import mediaLogo from '../assets/about/media_logo.svg'
import visualLogo from '../assets/about/visual_logo.svg'
import fashionIcon from '../assets/icons/fashion_icon.svg'
import mediaIcon from '../assets/icons/media_icon.svg'
import visualIcon from '../assets/icons/visual_icon.svg'

import psLogo from '../assets/about/tools/photoshop.svg'
import aiLogo from '../assets/about/tools/illustrator.svg'
import aeLogo from '../assets/about/tools/ae.svg'
import xdLogo from '../assets/about/tools/XD.svg'
import prLogo from '../assets/about/tools/premiere.svg'
import idLogo from '../assets/about/tools/indesign.svg'
import paintLogo from '../assets/about/tools/paint.png'
import procreateLogo from '../assets/about/tools/procreate.png'
import figmaLogo from '../assets/about/tools/Figma.png'
import mayaLogo from '../assets/about/tools/maya.png'
import c4dLogo from '../assets/about/tools/c4d.png'
import iwLogo from '../assets/about/tools/imweb.png'
import wixLogo from '../assets/about/tools/wix.png'
import htmlLogo from '../assets/about/tools/HTML5.png'
import cssLogo from '../assets/about/tools/css.png'
import jsLogo from '../assets/about/tools/js.png'

function About() {

    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, [])

    return (
        <div className='page'>
            {isLoading ?
                <div className='page flex'>
                    <img className='text-logo margin-auto' src={logo} alt='main logo' />
                </div> :
                <div className='page flex-col'>
                    <NavHeader isNav={true} isAbout={true} isBlog={false} />
                    <MobileNavHeader setIsModalOpen={setIsModalOpen} />
                    {isModalOpen ? <MobileNav setIsModalOpen={setIsModalOpen} /> :null}
                    <TopBtn className='top-btn'/>
                    <div id='aboutBody'>
                        <img id='aboutLogo' src={logo} alt="about logo" />
                        <table>
                            <tr>
                                <th>Made by</th>
                                <td>DISP</td>
                                <td>SEOHAYOUNG</td>
                            </tr>
                            <tr>
                                <th>area</th>
                                <td>DESIGNER</td>
                                <td>ARTIST</td>
                            </tr>
                            <tr>
                                <th>Contact</th>
                                <td colSpan={2}>puni929@naver.com</td>
                            </tr>
                        </table>
                        <div id='aboutIconContainer' className='flex margin-auto'>
                            <div className='flex-col margin-auto'>
                                <img className='about-icon' src={mediaIcon} alt="media icon" />
                                <img className='about-logo' src={mediaLogo} alt="media logo" />
                                <div className='about-logo-text margin-auto'>more than synergy,</div>
                            </div>
                            <div id='aboutFashionLogo' className='flex-col margin-auto'>
                                <img className='about-icon' src={fashionIcon} alt="fashion icon" />
                                <img className='about-logo' src={fashionLogo} alt="fashion logo" />
                                <div className='about-logo-text margin-auto'>Between the traces.</div>
                            </div>
                            <div className='flex-col margin-auto'>
                                <img className='about-icon' src={visualIcon} alt="visual icon" />
                                <img className='about-logo' src={visualLogo} alt="visual logo" />
                                <div className='about-logo-text margin-auto'>Add felxibility.</div>
                            </div>
                        </div>
                        <div id='aboutContainer' className='flex-col margin-auto'>
                            <div className='flex about-timeline' style={{ borderTop: '1px solid #43434B' }}>
                                <div className='collapse-title'>Education</div>
                                <Accordion years={['2020.03 ~ 2023.08 | 3Y', '2018.03 ~ 2020.02 | 2Y']} organizations={['Dounduk univ', 'Backseok art univ']} descriptions={[`Fashion Design<br/>Media Design`, 'Visual Design']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Career</div>
                                <Accordion years={['2021.12 ~ 2022.09 | 10M', '2021.07 ~ 2021.10 | 4M', '2020.12 ~ 2021.06 | 7M', '2020.04 ~ 2020.09 | 6M']} organizations={['CJ Oliveyoung', 'Amorepacific', 'UBIQUE KOREA', 'Hyundai AD']} descriptions={['Vcomerce design', 'Counseller Omni TF', 'Web design', 'design team Manager']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Project</div>
                                <Accordion years={['2021.12 ~ 2022.09 | 10M', '2021.07 ~ 2021.10 | 4M', '2022.05 ~ 2022.08 | 3M']} organizations={['Exhibition WWW', 'Design Crew OOBB 2nd pyeonteilba', 'Design Crew OOBB 1st hotel shimshim']} descriptions={['Deractor', 'PM & Editorial design', '3rd team']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Award</div>
                                <Accordion years={['2021.12 ~ 2022.09 | 10M', '2021.07 ~ 2021.10 | 4M', '2022.05 ~ 2022.08 | 3M']} organizations={['Exhibition WWW', 'Design Crew OOBB 2nd pyeonteilba', 'Design Crew OOBB 1st hotel shimshim']} descriptions={['Deractor', 'PM & Editorial design', 'OOBB Founder & team leader']} />
                            </div>
                        </div>
                    </div>
                    <div className='about-marquee' >
                        <ul className="about-marquee-content flex">
                            <li className='about-marquee-item'><div id='availableToolText'>Available Tools</div></li>
                            <li className='about-marquee-item'><img className='tool' src={psLogo} alt="ps logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aiLogo} alt="ai logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aeLogo} alt="ae logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={xdLogo} alt="xd logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={prLogo} alt="pr logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={idLogo} alt="id logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={paintLogo} alt="paint logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={procreateLogo} alt="procreate logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={figmaLogo} alt="figma logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                        </ul>
                        <ul className="about-marquee-content flex" aria-hidden='true'>
                            <li className='about-marquee-item'><div id='availableToolText'>Available Tools</div></li>
                            <li className='about-marquee-item'><img className='tool' src={psLogo} alt="ps logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aiLogo} alt="ai logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aeLogo} alt="ae logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={xdLogo} alt="xd logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={prLogo} alt="pr logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={idLogo} alt="id logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={paintLogo} alt="paint logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={procreateLogo} alt="procreate logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={figmaLogo} alt="figma logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                        </ul>
                        <ul className="about-marquee-content flex" aria-hidden='true'>
                            <li className='about-marquee-item'><div id='availableToolText'>Available Tools</div></li>
                            <li className='about-marquee-item'><img className='tool' src={psLogo} alt="ps logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aiLogo} alt="ai logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={aeLogo} alt="ae logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={xdLogo} alt="xd logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={prLogo} alt="pr logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={idLogo} alt="id logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={paintLogo} alt="paint logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={procreateLogo} alt="procreate logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={figmaLogo} alt="figma logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                        </ul>
                    </div>
                    <SecondFooter isAbout={true}/>
                    <MobileFooter/>
                </div>
            }
        </div>
    )
}

export default About