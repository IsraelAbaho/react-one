import "./intro.css"
import "./intro.js"

export const Intro = () => {
    return (
        <div className ="header">
           <div className="logo">Isra</div>

           <div className="navBar" id="nav_Bar">
               <ul className="navList">
                   <li className="navItem"><a href="#home" className="navLink">Home</a></li>
                   <li className="navItem"><a href="#about" className="navLink">About</a></li>
                   <li className="navItem"><a href="#services" className="navLink">Services</a></li>
                   <li className="navItem"><a href="#store" className="navLink">Store</a></li>
               </ul>

               <div className="btn">
                   <button type="button">Contact Us</button>
               </div>
           </div>

           <div className="toggleButton" id="toggle_Btn">
               <div className="hum"></div>
               <div className="hum"></div>
               <div className="hum"></div>
           </div>
        </div>
          
    )
}
