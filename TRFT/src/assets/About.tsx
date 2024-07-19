import { motion } from "framer-motion";

const About = () => {
  const divMotion = {
    hidden: { x: 10000 },
    visible: { x: 0 },
  };

  const hoverEffect = { boxShadow: "0px 0px 8px rgba(255, 255, 255)" };

  return (
    <div className="w-full md:h-screen flex flex-wrap justify-around items-center">
      <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-5/6 md:h-4/5 flex flex-wrap justify-around">
        <motion.div
          variants={divMotion}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0, duration: 0.3, type: "tween" }}
          whileHover={hoverEffect}
          className="w-[47%] h-[50%] m-3 rounded-lg shadow-lg text-center p-3"
        >
          <p className="text-2xl">Welcome to Our Food Delivery Company!</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo in turpis lacinia, at mattis libero accumsan.
          </p>
        </motion.div>
        <motion.div
          variants={divMotion}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.3, type: "tween" }}
          whileHover={hoverEffect}
          className="w-[47%] h-[50%] m-3 rounded-lg shadow-lg text-center p-3"
        >
          <p className="text-2xl">Our Mission</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo in turpis lacinia, at mattis libero accumsan.
          </p>
        </motion.div>
        <motion.div
          variants={divMotion}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.3, type: "tween" }}
          whileHover={hoverEffect}
          className="w-[47%] h-[50%] m-3 rounded-lg shadow-lg text-center p-3"
        >
          <p className="text-2xl">Our Values</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo in turpis lacinia, at mattis libero accumsan.
          </p>
        </motion.div>
        <motion.div
          variants={divMotion}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.3, type: "tween" }}
          whileHover={hoverEffect}
          className="w-[47%] h-[50%] m-3 rounded-lg shadow-lg text-center p-3"
        >
          <p className="text-2xl">Contact Us</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat justo in turpis lacinia, at mattis libero accumsan.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
