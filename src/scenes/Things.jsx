import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Things = () => {
  return (
    <section id="tools" className="pt-48 pb-48 ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Things</span> I Used
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      <div className="flex justify-center items-center mx-auto">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8 mx-auto text-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            <img
            alt="figma"
            className=" max-w-[30px] md:max-w-[40px] pr-4"
            src="assets/figma.png"
          />
            Figma
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            <img
            alt="vscode"
            className="max-w-[30px] md:max-w-[50px] pr-4"
            src="assets/vscode.png"
          />
            VS Code
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            <img
            alt="reactjs"
            className="max-w-[30px] md:max-w-[50px] pr-4"
            src="assets/reactjs.png"
          />
            ReactJS
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            <img
            alt="css"
            className="max-w-[30px] md:max-w-[50px] pr-4"
            src="assets/css.png"
          />
            Tailwind CSS
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            <img
            alt="type"
            className="max-w-[30px] md:max-w-[60px] pr-4"
            src="assets/type.png"
          />
            Typescript
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            VS Code
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            VS Code
          </div>

          <div
            className="flex justify-center text-center items-center p-10 border-2 border-opacity-50 border-gray-300
        max-w-[300px] max-h-[80px] text-2xl font-playfair font-semibold rounded-3xl"
          >
            VS Code
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Things;
