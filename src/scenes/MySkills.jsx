import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import {motion} from 'framer-motion';
import skillImg from "../assets/skillimage2.jpg";


const MySkills = () => {
  const isAboveLarge = useMediaQuery ('(min-width: 1060px)');
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0},
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            🎨 Design is my canvas, and I enjoy exploring diverse styles and trends to infuse creativity into
            every project I undertake.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge
            ? <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                <img
                  alt="skills"
                  className="z-10"
                  src={skillImg}
                />
              </div>
            : <img
                alt="skills"
                className="z-10"
                src={skillImg}
              />}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Intern UI/UX Designer
            Company Name: Leasing Residential Real Estate
            Awka, Anambra
            February, 2023- June, 2023
            - Collaborated with senior designers to create wireframes and mockups for web and mobile
            applications
            - Assisted in user research, including conducting interviews and analyzing user data
            - Contributed to design discussions and provided input on user experience improvements.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          🌐 I&apos;m well-versed in industry-standard design tools such as Adobe Creative Suite, Sketch,
            Figma, and InVision. Leveraging these tools, I bring my ideas to life and iterate tirelessly until I
            achieve design excellence.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.4, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0},
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            🚀 If you&apos;re looking for a driven and enthusiastic  UI/UX designer to add value to your
            team, let&apos;s connect! I&apos;m excited to contribute my passion and skills to create delightful user
            experiences together. Feel free to reach out for collaboration, networking, or just a good design
            chat!

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
