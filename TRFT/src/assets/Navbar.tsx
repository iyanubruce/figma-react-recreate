import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
    const navitem = {
        hidden: { scale: 1.2, rotate: 360, boxShadow: "0px 0px 8px rgba(255, 255, 255)"},

        hover: {scale:1.2, boxShadow: "0px 0px 8px rgba(255, 255, 255)"}
      }
    const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

    return ( 
        <nav className="flex align-center justify-between p-5">
            <motion.div className="text-xl font-bold">

                Food Deliver
            </motion.div>
            <ul className=" hidden md:flex gap-5">
            <Link to="/"> <motion.li className="grid place-content-center p-3"
                variants={navitem} whileHover="hidden"
                > Home </motion.li></Link>
                <Link to="/Order"><motion.li className="grid place-content-center p-3"
                variants={navitem} whileHover="hidden"
                > Order</motion.li></Link>
                <Link to="/About"><motion.li className="grid place-content-center p-3"
                variants={navitem} whileHover="hidden"
                > About</motion.li></Link>
                <Link to="/contact"><motion.li className="grid place-content-center p-3"
                variants={navitem} whileHover="hidden"
                > Contact </motion.li></Link>
                <Link to="/contact">
                <motion.button variants={navitem} whileHover="hover" className="bg-purple-800 w-[150px] h-[50px] block rounded-s text-lg text-white font-bold">Partner with us</motion.button>
                </Link>
            </ul>
            <AnimatePresence>
            <motion.ul className={`${isOpen ? ' ' : 'hidden'} fixed top-0 right-0 z-50 bg-purple-400 h-[100vh] flex-col w-[250px] text-xl`}>
                <li onClick={toggleMenu} className="block w-[100%] p-4"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
                <li className="block w-[100%] p-4"> <Link to="/">order</Link></li>
                <li className="block w-[100%] p-4"> <Link to="/About">About</Link></li>
                <li className="block w-[100%] p-4"> <Link to="/Contact">Contact</Link> </li>
                <li className="block w-[100%] p-4"><Link to="/Contact"><button className="bg-purple-800 w-[150px] h-[50px] block rounded-s text-lg text-white font-bold">Partner with us</button></Link></li>
            </motion.ul>
            </AnimatePresence>
            
            
            <button onClick={toggleMenu} className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
        </nav>
     );
}
 
export default Navbar;