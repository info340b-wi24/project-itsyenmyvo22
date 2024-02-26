import React from 'react';
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




    

    return(
      <div>
    <nav className="site-navbar">
    <div className="container">
        <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 td">
      <CustomLink to="/Home">Home</CustomLink>

        </div>
        <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Calendar">Calendar</a> */}
      <CustomLink to ="/Calendar">Calendar</CustomLink>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Game">Guess the Song</a> */}
      <CustomLink to="/Game">Guess the Song </CustomLink>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3 td">
      {/* <a href="/Cards">Card Trading</a> */}
      <CustomLink to ="/Cards">Card Trading</CustomLink>
    </div>
    </div>
    </div>
  </nav>


<nav className="navbar navbar-dark site-navbar" id="mobile">
     
 
   <button className="navbar-toggler ms-auto" type="button" id ="toggle" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon fas fa-bars fa-1x"><i
         className = "fas fa-bars fa-1x"></i></span>
     </button>
     
     <div className = "collapse navbar-collapse" id = "navbarSupportedContent1">
      <ul className = "navbar-nav mr-auto">
         <li className = "nav-item active">
           <Link className = "nav-link" to="/Home">Home</Link>
         </li>
         <li className = "nav-item">
            <Link className = "nav-link" to="/Cards">Card Trading</Link>
         </li>
         <li className = "nav-item">
           <Link className = "nav-link" to="/Game">Guess the Song</Link>
         </li>
         <li className = "nav-item">
           <Link className = "nav-link" to="/Calendar">Calendar</Link>
         </li>
         
      </ul>
     </div>
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