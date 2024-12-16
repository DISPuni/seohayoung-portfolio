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
import protoLogo from '../assets/about/tools/proto.png'
import zepLogo from '../assets/about/tools/zeplin.svg'
import mayaLogo from '../assets/about/tools/maya.png'
import c4dLogo from '../assets/about/tools/c4d.png'
import iwLogo from '../assets/about/tools/imweb.png'
import wixLogo from '../assets/about/tools/wix.png'
import htmlLogo from '../assets/about/tools/HTML5.png'
import cssLogo from '../assets/about/tools/css.png'
import jsLogo from '../assets/about/tools/js.png'
import exLogo from '../assets/about/tools/excel.png'
import wordLogo from '../assets/about/tools/word.png'
import pptLogo from '../assets/about/tools/ppt.png'
import teamsLogo from '../assets/about/tools/teams.png'
import glyphsLogo from '../assets/about/tools/glyphs.png'


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
                                <td><a href="https://www.instagram.com/disp_design/" target={'_blank'}>DISP</a></td>
                                <td>SEOHAYOUNG</td>
                            </tr>
                            <tr>
                                <th>area</th>
                                <td><a href="https://www.instagram.com/disp.studio/" target={'_blank'}>DESIGNER</a></td>
                                <td><a href="https://www.instagram.com/puni_gallery/" target={'_blank'}>ARTIST</a></td>
                            </tr>
                            <tr>
                                <th>Contact</th>
                                <td colSpan={2}><a href="mailto:puni929@naver.com" target={'_blank'}>puni929@naver.com</a></td>
                            </tr>
                        </table>
                        <div id='rx'>
                        <div className='rx'>Please refer to the effect of each  <button class="hover">
                            <div class="hidden-hover">Pills</div><div class="show-hover">Design</div></button>
                            <br></br>With a variety of <button class="hover">
                            <div class="hidden-hover">Pills</div><div class="show-hover">Design</div></button>
                            <br></br>we are ready to handle any situation.
                            <br></br>It must not be misused. Be more careful.
                            <br></br>I’m prepare it for the desired effect.
                            <br></br>I handle  <button class="hover">
                            <div class="hidden-hover">Pills</div><div class="show-hover">Design</div></button> that are beautiful and effective.
                            <br></br><br></br>
                        </div>
                        </div>
                        <div id='aboutsign'>I am Design dispensary DISP</div><br></br>
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
                                <Accordion years={['-','2021', '2019']} 
                                organizations={['동덕여자대학교', '동덕여자대학교', '백석예술대학교']} 
                                descriptions={['패션디자인', '미디어디자인', '시각디자인']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Career</div>
                                <Accordion years={['-','2021~2022', '2021.07 ~ 2021.10','2020~2021', '2020']} 
                                organizations={['-','CJ 올리브영','아모레퍼시픽', '유비크코리아', '현대기획사']} 
                                descriptions={['그래픽디자이너','미디어커머스팀 웹디자이너', '카운셀러 TF팀 | 계약직', '웹디자이너', '기획팀 | 주임']} />
                               {/* '그래픽디자이너''Studio Kio'2024.06~ */}
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Project</div>
                                <Accordion years={['2024.10 ~ 2024.11 | 1M','2024.08 ~ 2024.09 | 1M','2024.03 ~ 2024.09 | 6M','2024.05 ~ 2024.06 | 1M','2023.11 ~ 2024.06 | 1M','2024.04 ~ 2024.05 | 1M','2024.08 ~ 2024.10 | 2M','2023.08~2023.11 | 3M','2023.05 ~ 2023.06','2023.10 ~ 2023.11','2023.04 ~ 2023.05 | 1M', '2022.08 ~ 2022.12 | 4M', 
                                '2022.05 ~ 2022.12 | 7M', '2022.08 ~ 2022.10 | 2M', '2022.07 ~ 2022.08 | 1M',
                                '2021.07 ~ 2022.06 | 11M', '2020.09 ~ 2021.05 | 9M','2020.12 ~ 2021.01 | 2M','2020.09 ~ 2020.11 | 2M','2020.05 ~ 2020.06 | 2M','2020.04 ~ 2020.06 | 2M']} 
                                organizations={['HONO 24winter','ORGD 굿디자이너:대답','되고파너의최대부적','한솔홈데코 이지셀프 브랜딩','나의바다 아트북 펀딩','경희대 의상학과 패션쇼 필름','HONO 23f/w','Mpound','동덕여대 패션쇼 키비주얼','SKT 윤리경영실 BX', '주식회사 잉클 콘텐츠 마케팅','Exhibition WWW', 
                                '칵테일레시피 북 편테일바', '패스트캠퍼스 UXUI KDT', '직장인 부트캠프 창',
                                '심리테스트 호텔쉼쉼', 'SBS 애니갤러리','Ozel 웹사이트 구축','OFF 패션화보 Freedom','청년인생설계학교','OFF 패션필름 [?]']} 
                                descriptions={['그래픽디자인','그래픽전시','브랜드 디자인','브랜드 전략기획','일러스트 개인펀딩','비디오그래퍼','그래픽 디자인','BX디자인','그래픽 총괄', '그래픽 디자인', '마케팅 & 콘텐츠 디자인', '주최 & 총괄감독', '기획 & 그래픽','UIUX 리드', 'PM & UIUX', '크리에이티브 디렉터','696화 POP방영','최종 디자인채택 및 납품','4팀 리더 & 경쟁PT','영상기획 & 콘텐츠디자인','2팀 비디오 에디터']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Award</div>
                                <Accordion years={['2023.12.06','2023.11.23','2023.7.17','2023.5.30','2023.4.21','2023.2.28','2023.2.10','2021.12.31', '2021.12.06', '2021.07.30']} 
                                organizations={['국제패션일러스트 공모전','Design It award','신한커리어업 팀 부문 수상','동덕여대 패션쇼 공모전','오설록 레시피 콘테스트','A design award','Asia design award','3D디자인 제품 공모전', 'it award challenge', '커뮤니케이션 공모전']} 
                                descriptions={['입선','프로부문 동상','신한브릿지 최우수상','대상','다다일상 입선','Finalist','Finalist','특별상 오토데스크상', '팸서포트 UXUI 동상', 'UXUI부문 특선']} />
                            </div>
                            <div className='flex about-timeline'>
                                <div className='collapse-title'>Activity</div>
                                <Accordion years={['2021.07 ~','2024.12.08','2024.10 ~ 2024.12','2024.10 ~ 2024.12','2024.10.05','2024.07 ~','2024.09 ~ 2024.11','2024.09 ~ 2024.10','2024.09.21','2024.08 ~ 2024.09','2024.07 ~ 2024.08','2024.07 ~ 2024.08','2024.07.28','2024.07.27','2024.06 ~ 2024.07','2024.05 ~ 2024.06','2024.05 ~ 2024.06','2024.04 ~','2024.02 ~ 2024.03','2023.11 ~ 2023.12','2023.10 ~ 2023.11','2023.10.23','2023.05 ~ 2023.06','2023.05.30','2023.03 ~ 2023.11','2023.01 ~ 2023.02', '2022.08.22','2022.03 ~ 2022.08','2021.04 ~ 2022.04 | 1Y','2021.05.17','2021.12 ~ 2022.01','2021.03 ~ 2021.05','2020.07 ~ 2020.10','2019.10.23']} 
                                organizations={['OOBB Crew','꼴의 힘','CHI 서포터즈','엔터테이먼트 그래픽','Howful','대한출판협회 서포터즈','한글타이포그라피학교','엠디랩프레스','서울레코드페어','Cosmopetype','한글타이포그라피학교','소장각 클럽','오이뮤','포푸리','Howful','체인지업','Cosmopetype','AI Designer Club','소장각 클럽','신모래 아트북','비플랫폼 소장각 특강','서울레코드페어','신한커리어업','42회 동덕여대 졸업패션쇼','오설록 티크리에이터','MOTIONLAB','국제 티소믈리에','스파르타 디자인멤버쉽','대학패션연합회 OFF','22회 동덕 미디어졸업전시','sbs아카데미','동덕 졸업전시 준비위원회','메가스터디 아카데미','10회 백석 시각 졸업전시회']} 
                                descriptions={['설립 & 디렉터','비상계엄 캠페인','취센스 5기','엄후영 워크숍','VASE 리소 워크숍','북적북적 1기','라틴타입 디자인','편집디자인 워크숍','STAFF3','레터링 워크숍','레터링 기초','타이포그래피 4기','식물의효능','리소4도 워크숍','리소그래피 워크숍','Season 5','한글 레터링 디자인','1기','타이포그래피 3기','쬐끄만책 5기','타이포그래피 워크숍','STAFF1', '커리어업 3기','패션디자이너','티 크리에이터 2기','c4D bagic lab', '1급','1기','27기 기획팀','UXUI & 애니메이션','MAYA CG','기획팀 전시브랜딩','모션그래픽','헬로인디북스 포스터']} />
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
                            <li className='about-marquee-item'><img className='tool' src={protoLogo} alt="proto logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={zepLogo} alt="zeplin logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={exLogo} alt="ex logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wordLogo} alt="word logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={pptLogo} alt="ppt logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={teamsLogo} alt="teams logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={glyphsLogo} alt="glyphs logo" /></li>
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
                            <li className='about-marquee-item'><img className='tool' src={protoLogo} alt="proto logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={zepLogo} alt="zeplin logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={exLogo} alt="ex logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wordLogo} alt="word logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={pptLogo} alt="ppt logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={teamsLogo} alt="teams logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={glyphsLogo} alt="glyphs logo" /></li>
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
                            <li className='about-marquee-item'><img className='tool' src={protoLogo} alt="proto logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={zepLogo} alt="zeplin logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={mayaLogo} alt="maya logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={c4dLogo} alt="c4d logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={iwLogo} alt="iw logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wixLogo} alt="wix logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={htmlLogo} alt="html logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={cssLogo} alt="css logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={jsLogo} alt="js logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={exLogo} alt="ex logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={wordLogo} alt="word logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={pptLogo} alt="ppt logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={teamsLogo} alt="teams logo" /></li>
                            <li className='about-marquee-item'><img className='tool' src={glyphsLogo} alt="glyphs logo" /></li>
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
