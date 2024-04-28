import LineGradient from '../components/LineGradient';
import {motion} from 'framer-motion';

import whatsappBusinessImage from '../assets/WhatsApp1.jpeg';
import project2Image from "../assets/skynews1.jpg";
import project3Image from '../assets/tour-image.jpg';
import project4Image from '../assets/property2.jpg';
import project5Image from "../assets/ctmi1.jpg";
import project7Image from "../assets/graphics1.jpg";
import project6Image from "../assets/graphics2.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1},
};

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const Project = ({ title, url, imgSrc, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  // eslint-disable-next-line react/prop-types
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.a href={url} target="_blank" variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        {desc}
        </p>
      </div>
      <img src={imgSrc} alt={projectTitle} />
    </motion.a>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
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

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="WhatsApp business"
            url="https://www.figma.com/file/ELw4DClzEA4ldDU1NuGDd1?type=design"
            imgSrc={whatsappBusinessImage}
            desc="Mobile App Redesign (WhatsApp business)
            Designed wireframes and interactive prototypes using Figma "

          />
          <Project
            title="Tour App"
            url="/project2"
            imgSrc={project3Image}
            desc="Designed a website named TOUR (it's all about helping people tour around in a new
            environment).
            Designed wireframes and interactive prototypes using Figma
            - Conducted interviews and research for the designing team."
          />

          {/* ROW 2 */}
          <Project
            title="Property Forager"
            url="https://www.figma.com/file/XZ8OAeaHJ7sIXLoC7NozIl?type=design"
            imgSrc={project4Image}
            desc="Designed a Real Estate Website UI
            Designed wireframes and interactive prototypes using Figma
            Conducted interviews and research for the designing team.
            "
          />
          <Project
            title="Sky News"
            url="/project4"
            imgSrc={project2Image}
            desc="Designed a website named Sky News (it's all about news).
            Designed wireframes and interactive prototypes using Figma
            Conducted interviews and research for the designing team."
          />
          <Project
            title="Graphics Design"
            url="https://www.behance.net/samuel-chidi"
            imgSrc={project5Image}
            desc="Designed a Backcover for CMTI,  a book that gives guidlines in upbringing a child the right way."
          />

          {/* ROW 3 */}
          <Project
            title="Graphics Design"
            url="https://www.behance.net/samuel-chidi"
            imgSrc={project6Image}
            desc="Designed a Backcover for client,  a book that gives guidlines in living the right way."
          />
          <Project
            title="Graphics Design"
            url="https://www.behance.net/samuel-chidi"
            imgSrc={project7Image}
            desc="Designed a logo for a client."
          />
          <div className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
