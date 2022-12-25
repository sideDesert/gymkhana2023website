import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import WhiteLogo from '../images/logowhite.png';
import Menu from "../images/menu.svg";
import { useState,useRef,useLayoutEffect,useCallback } from "react";
import useOutsiderAlert from '../hooks/useOutsideAlert';
import {gsap} from "gsap";
import useScrollPosition from "../hooks/useScrollPosition";
import {councilChildren, eventsChildren, specialClubsChildren, moreChildren} from '../constants/menuChildrenData'

const links = [
  "Home",
  "Office Bearers",
  "Councils",
  "Events",
  "Special Clubs",
  "Fresher's Guide",
  "IITH Map",
  "Gallery",
  "More",
  "Election",
  "Transparency",
];


interface LinkButton{
  type:string, 
  children:React.ReactNode, 
  href?:string, 
  subLinks?:Children[],
  menuIndex:number, 
  activateSubMenu:(e:React.MouseEvent<HTMLElement|MouseEvent>,menuIndex:number)=>void
}
interface Children{
  name: string,
  href: string
}
interface Link{
  parent: string,
  children?: Array<Children|null>,
  menuIndex: number ,
  href ?: string
}




function LinkButton(props:LinkButton){
  const {type, children,href='#', activateSubMenu,menuIndex} = props;

  if(type === 'BUTTON'){
    return (<>
    <button onClick={(e)=>{activateSubMenu(e,menuIndex)}}>{children}</button>
    </>)
  }
  return <a href={href}>{children}</a>
}

const updatedLinks:Link[] = [
  {parent: 'Home', menuIndex: 0,href:'/'}, 
  {parent:'Office Bearers',menuIndex: 1, href:'/office-bearers/'}, 
  {parent:'Councils', children: councilChildren,menuIndex: 2, href:'/councils/general'},
  {parent:'Events', children: eventsChildren,menuIndex: 3, href:'/events/elan'},
  {parent:'Special Clubs',menuIndex: 4, href:'/special-clubs'},
  {parent:'Fresher`s Guide',menuIndex: 5, href:'freshers-guide',},
  {parent:'IITH Map',menuIndex: 6, href:'map'},
  {parent:'Gallery',menuIndex: 7, href:'gallery'},
  {parent:'More', children:moreChildren,menuIndex: 8, href:'/more'}
]

export function Button(props: {children: string}) {
  return (
    <button className="px-4 py-2 w-[12rem] text-xl border-black rounded-lg active:bg-slate-200">
      {props.children}
    </button>
  );
}


function MobileNavbar() {
  const [active, setActive] = useState<boolean>(false);
  const scrollRef = useRef(0)
  const prevScroll = useRef(0)
  const mobileMenuRef = useRef();
  const mobileNavbar = useRef<any>(null)
  
  const activateMobileMenu = () => {
    setActive(true);
  };
  
  const deActivateMobileMenu=()=>{
    gsap.to(mobileMenuRef.current, {autoAlpha: 0,duration:0.2, onComplete: ()=>{setActive(false)}})
  }

  useLayoutEffect(()=>{
    if(active){
      document.body.style.overflowY = 'hidden'
      gsap.from(mobileMenuRef.current, {autoAlpha:0, stagger: 0.1})
    } else {
      document.body.style.overflowY = 'scroll';
    }
  },[active])

  const getPosition  =()=>{
    return window.scrollY
  }

  useLayoutEffect(()=>{
    function handleScroll(){
      scrollRef.current = getPosition()
      if(scrollRef.current < prevScroll.current){
        gsap.to(mobileNavbar.current, {
          y: '0%'
        })

      }
      if(scrollRef.current>prevScroll.current){
        gsap.to(mobileNavbar.current, {
          y:'-100%'
        })
      }
      prevScroll.current = scrollRef.current
    }
    window.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <nav ref = {mobileNavbar} className="bg-white flex justify-between px-4 py-2 w-full z-40 lg:hidden fixed">
        <div>
          <a href='/'><div className="h-[4rem] w-[4rem] relative">
            <img src={Logo} alt="gymkhana logo" />
          </div></a>
        </div>
        <button
          className="pr-2"  
          onClick={() => {
            activateMobileMenu();
          }}
        >
          <img src={Menu} alt="menu" />
        </button>
      </nav>
      {active && (
        <div ref={mobileMenuRef} className="mobileMenu fixed z-40 w-full h-full ">
          <div className="fixed right-5 top-5 text-lg">
            <button onClick={deActivateMobileMenu}>Close</button>
          </div>
          <ul className="bg-white text-center pb-6 h-full flex-grow flex flex-col justify-center items-center">
            {updatedLinks.map((el) => (
              <li key={el.parent} className="pt-3 menu-items">
                <a href={el.href}><Button>{el.parent}</Button></a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function MainNavbar({blackOn, disableAnimation}){
  const [activeSubMenu, setActiveSubMenu] = useState<number|null>(null);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [logo, setLogo] =  useState(Logo);
  const buttonRef = useRef<any>();
  const subMenuRef = useRef<any>();
  const navRef = useRef<any>();

  const activateSubMenu = (e:React.MouseEvent<HTMLElement|MouseEvent>,menuIndex:number)=>{
    setActiveSubMenu((prevMenuIndex)=>{
    //  return prevMenuIndex===menuIndex ? null : menuIndex
    return prevMenuIndex === menuIndex ? null:menuIndex
    });
    buttonRef.current = e;
    setTop(buttonRef.current.target.offsetTop);
    setLeft(buttonRef.current.target.offsetLeft);
  }
  useOutsiderAlert(subMenuRef, ()=>{setActiveSubMenu(null)})

  
  const scrollPosition = useScrollPosition(); 

  if(!disableAnimation){
    if(scrollPosition>0){
      gsap.to(navRef.current,{background:'white', color: 'black'})
    } else {
      gsap.to(navRef.current, {backgroundColor: 'transparent', color:'white'})
    }
  } else {
    gsap.set(navRef.current, {background: 'white'})
  }

  return (
    <>
  <nav ref={navRef} className={`fixed justify-between ${blackOn ? 'text-black bg-white':'text-white bg-transparent'} px-4 py-2 w-full z-40 hidden lg:flex lg:items-center lg:flex-row`}  >
    <div className="inline-block">
      <a href='/'><div className="h-[4rem] w-[4rem] relative ">
        <img src={disableAnimation? Logo : (scrollPosition!==0 ? Logo : WhiteLogo)} alt="gymkhana logo" />
      </div></a>
    </div>
    <div className="inline-block">
      <ul className="flex gap-5">
        {updatedLinks.map((el)=>(<li key={el.parent}><LinkButton subLinks={el?.children} menuIndex={el.menuIndex} activateSubMenu={activateSubMenu} type={el.children ? 'BUTTON':'ANCHOR'} href={el?.href}>{el.parent}</LinkButton></li>))}
      </ul>
    </div>
  </nav>
{activeSubMenu && 
  <div ref={subMenuRef} className="bg-white text-black inline-block fixed z-40" style={{left:activeSubMenu !== 8 ? left: left-93, top:top+60}}>
    <ul className="text-md">
      {updatedLinks[activeSubMenu].children.map((el)=>(
      <a href={el.href} key ={el.href}><li  className='pl-3 pr-5 py-2 '>{el.name}</li></a>
      ))}
    </ul>
  </div>
}
   
  
  </>
  )
}


function Navbar({blackOn = true, disableAnimation=true}){
  return <>
  <MobileNavbar/>
  <MainNavbar blackOn={blackOn} disableAnimation={disableAnimation}/>
  </>
}

export default Navbar;
