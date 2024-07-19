import{ motion} from "framer-motion"
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <div className=" w-[100%] h-[100vh] flex justify-center">
            <div className="w-[60%] md:h-[40%] h-[60%] mt-[10%] flex flex-col justify-center items-center">
                <motion.h1 initial={{y:100}} animate={{ y:0 }} className="text-7xl">Welcome to Food Deliver</motion.h1>
                <Link to="/order"><motion.button initial={{x:1000}} animate={{ x:0 }} transition={{delay:0.5, duration:0.3, type:"spring", stiffness:200}} className="w-[350px] h-[150px] block rounded-s md:text-3xl text-lg  font-bold">Order Now</motion.button></Link>

            </div>
        </div>
     );
}
 
export default Home;