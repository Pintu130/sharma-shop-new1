import React, { useState,useEffect} from 'react'
// import { Link } from 'react-scroll'
import Logo from '../assets/img/Logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = (props) => {
  const [toggle,setToggle]=useState(false);
  const [bg, setBg] = useState(false);
 
  useEffect(() => {
    // add event listener
    window.addEventListener('scroll', () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
   
  //for login and logout
  const { user,loginWithRedirect,logout,isAuthenticated } = useAuth0();
  //for smooth navigation and scroll
  const {about,products,contacts,about1,products1,contacts1} = props;

  return (
    <div className={`${
        // if bg is true
        bg
          ? 'bg-primary py-4 lg:py-2'
          : // if bg is false
            'bg-none'
      }
      fixed left-0 py-8 z-10 w-full transition-all duration-200  `}
    >
      <div className='mt-3 container mx-auto mb-2 flex justify-between text-white items-center'>
          <a>
            <img className='h-6 lg:h-10' src={Logo} alt='' />
          </a>
       
        <div className='hidden md:flex lg:flex text-white items-end ml-auto'>
          <ul className='flex flex-row w-full'>
            
            <li className='ml-5 transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer duration-300'>
            <button>Home</button> 
                {/* <Link  to="/#home" spy={true} smooth={true} offset={50} duration={500}>Home</Link> */}
            </li>
            <li className='ml-5 transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <button onClick={about}>About Me</button> 
                {/* <Link  to="/#about" spy={true} smooth={true} offset={100} duration={500} onClick={scrollHandler} ref={About} >About</Link> */}
            </li>
            <li className='ml-5 transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <button onClick={products}>Products</button>
                {/* <Link  to="/#products" spy={true} smooth={true} offset={250} duration={500} >Products</Link> */}
            </li>
            <li className='ml-5 transition-all ease-in-out hover:scale-90 hover:text-orange-400 cursor-pointer'>
                <button onClick={contacts}>Contacts</button>
                {/* <Link  to="/#contact" spy={true} smooth={true} offset={250} duration={500} >Contacts</Link> */}
            </li>
           {isAuthenticated && (
              <li className='ml-3 text-orange-300 font-bold underline'>
                <p>{user.name}</p>
              </li>
            )}
               {isAuthenticated ? (
               <li className='ml-5 transition-all ease-in-out hover:bg-teal-800  bg-teal-700 px-2 rounded-md cursor-pointer'>
               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
               </li>
                ) : ( 
                <li className='ml-5 transition-all ease-in-out hover:bg-teal-800 cursor-pointer bg-teal-700 px-2 rounded-md'>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
                )}
          </ul>
        </div>
      

        {/* menubar */}
              <div className='flex flex-col items-end'>
                {!toggle?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                onClick={()=>setToggle(true)}
                viewBox="0 0 24 24" stroke-width={1.5} 
                stroke="currentColor" class="w-6 h-6 cursor-pointer md:hidden">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              onClick={()=>setToggle(false)}
              viewBox="0 0 24 24" stroke-width="1.5" 
              stroke="currentColor" class="w
              -6 h-6 cursor-pointer float-right md:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              }
              {
                toggle?
                <ul className='flex absolute flex-col mt-8 bg-slate-700 p-2 rounded-md text-sm opacity-1 md:hidden'>
                    
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <button>Home</button>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <button onClick={about1}>About Me</button>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <button onClick={products1}>Products</button>
                    </li>
                    <li className='menuItem p-2 transition-all ease-in-out hover:scale-90 cursor-pointer'>
                        <button onClick={contacts1}>Contacts</button>
                    </li>

                  {isAuthenticated && (
                  <li className=' text-orange-300 font-bold underline mb-2'>
                    <p>{user.name}</p>
                  </li>
                )}
               {isAuthenticated ? (
               <li className='p-1 transition-all ease-in-out text-center cursor-pointer hover:bg-teal-800  bg-teal-700 px-2 rounded-md'>
               <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
               </li>
                ) : ( 
                <li className='p-1 transition-all ease-in-out text-center cursor-pointer hover:bg-teal-800  bg-teal-700 px-2 rounded-md'>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
                )}
                </ul>
                :null
              }
              </div>
      </div>
    </div>
  )
}

export default NavBar
