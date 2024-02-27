import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './components/App';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'


export function NavBar(props){

    // let item = document.getElementById('navbarSupportedContent1');
    // let button = document.getElementById('toggle');
    // button.addEventListener('click', () => {
    //    if (item.style.display != "block") {
    //       item.style.display = "block";
    //    } else {
    //       item.style.display = "none";
    //    }
    // })

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () =>{
      setIsOpen(!isOpen);
    }

    const closeMenu = () => {
      setIsOpen(false);
    };

    return(
      
      <div>

    <nav className="site-navbar">
 
        <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 td">
      <CustomLink to="/" onClick ={closeMenu}>Home</CustomLink>

        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Calendar">Calendar</a> */}
      <CustomLink to ="/Calendar" onClick ={closeMenu}>Calendar</CustomLink>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Game">Guess the Song</a> */}
      <CustomLink to="/Game" onClick ={closeMenu}>Guess the Song </CustomLink>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Cards">Card Trading</a> */}
      <CustomLink to ="/Cards" onClick ={closeMenu}>Card Trading</CustomLink>
    </div>
    </div>
 
  </nav>



  {/* nav className="navbar navbar-dark */}
<nav className="navbar site-navbar" id="mobile">
     
 
   <button className="navbar-dark navbar-toggler ms-auto" type="button" id ="toggle" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-label="Toggle navigation" onClick={toggleMenu}>
   {/* <div className= {isOpen? 'menu-icon ': 'menu-icon'}> */}
    <span className="navbar-toggler-icon fas fa-bars fa-1x"><i
         className = "fas fa-bars fa-1x"></i></span> 
     
     {/* </div> */}
     </button>
     
    {/* <div className ={isOpen? 'open' : 'menu'}> */}
     
    {isOpen && (
        
     
      <ul className = "navbar-nav mr-auto">
         {/* <li className = "nav-item active"> */}
           <CustomLink className = "nav-link"  to="/" onClick={closeMenu}>Home</CustomLink>
         {/* </li> */}
        
            <CustomLink className = "nav-link" to="/Cards" onClick={closeMenu}>Card Trading</CustomLink>
         
        
           <CustomLink className = "nav-link" to="/Game" onClick={closeMenu}>Guess the Song</CustomLink>
      
           <CustomLink className = "nav-link" to="/Calendar" onClick={closeMenu}>Calendar</CustomLink>
       
         
      </ul>
       )}
  

     {/* </div> */}
   
        {isOpen && (
        <div className="overlay" onClick={closeMenu}></div>
      )}

     </nav>

    
  </div>

    )
}




function CustomLink({to, children, ...props}){
    
    const resolvedPath = useResolvedPath(to);
 const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className ={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
          </Link>
        </li>
    )
}