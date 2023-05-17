import React from 'react';
// import { Link } from 'react-scroll'
// import data
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <nav className='bg-white shadow-2xl w-full h-full'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className='text-xl font-medium capitalize' href={item.href}>
                {item.name}
              </a>
              {/* <Link activeClass="active" to={item.name} spy={true} smooth={true} offset={50} duration={500} onClick={closemenu}/> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
