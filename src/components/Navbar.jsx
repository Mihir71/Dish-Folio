import { Link } from 'react-router-dom';


import React, {useState} from 'react';
import Sidebar from './Sidebar';
import {faHome, faList, faCog, faShare, faUtensils} from "@fortawesome/free-solid-svg-icons"


const Navbar = () => {
  const  [showSidebar, setShowSidebar] = useState(false);
  
    const links = [
      {
        name : "Home",
        path : "/Dish-Folio",
        icon : faHome
      },
      {
        name : "Recipe",
        path : "/Recipe",
        icon : faList
      },
      {
        name : "Share Your Dish",
        path : "/Share_Your_Dish",
        icon : faShare
      },
      {
        name : "Settings",
        path : "/Settings",
        icon : faCog
      }
    ]

function closeSidebar() {
  setShowSidebar(false)
}
       
      
  return (
    <>
    <div className="navbar">
        <div>
        <img className="logo" src="https://www.thespruceeats.com/thmb/PW-viXRoEaJC4tsVLjq45M-GBlw=/3865x2576/filters:fill(auto,1)/still-life-fresh--organic--healthy-vegetable-harvest-variety-in-wood-crate-742168705-5b117e71a9d4f90038e704b0.jpg" alt="" />
        <Link  to="/"    className="webname"   href="#!">Dish Folio</Link>
        </div>
        <div className="menu">
        {
          links.map(link => (
            <Link to={link.path}  key={link.name}>{link.name}</Link>
          ))
        }
         </div>
        <div   className='bar'  onClick = {() => setShowSidebar(true)}  >
        
        <i className="fa-solid fa-bars" />
           
          </div>
       
      </div>

     {showSidebar &&  <Sidebar close={closeSidebar} links={links} />}
      </>
     
    

        
        
 
  )
}

export default Navbar