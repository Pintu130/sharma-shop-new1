import React from 'react';

// import components
// import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesSecond from './components/FeaturesSecond';
import NewItems from './components/NewItems';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
// import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
// import Singup from './components/singup';

const Main = () => {
  //shopoNow
  const email2=(()=>{
 window.scroll({top:2600, left:0, behavior:'smooth'})
  })
  //NavBar...........
  const about=(()=>{
    window.scroll({top:600, left:0, behavior:'smooth'})
    console.log(window.scroll)
      })

  const products=(()=>{
window.scroll({top:2600, left:0, behavior:'smooth'})
console.log(window.scroll)
  })
  
  const contacts=(()=>{
    window.scroll({top:4800, left:0, behavior:'smooth'})
    console.log(window.scroll)
      })

  //mobile Menubar
  const about1=(()=>{
    window.scroll({top:350, left:0, behavior:'smooth'})
    console.log(window.scroll)
      })

    const products1=(()=>{
    window.scroll({top:2800, left:0, behavior:'smooth'})
    console.log(window.scroll)
        })
        
    const contacts1=(()=>{
    window.scroll({top:5700, left:0, behavior:'smooth'})
    console.log(window.scroll)
        })


  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white'>
      {/* <Header hader={hader}/> */}  
      <NavBar about={about} products={products} contacts={contacts}  about1={about1} products1={products1} contacts1={contacts1} />
      <Hero email2={email2} />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      {/* <Newsletter email2={email2} /> */}
      <Contact/>
      <Footer />
    </div>
  );
};

export default Main;
