import { portfolioProjects } from '@/utils/data';
import Image from 'next/image';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { MdOutlineArrowOutward } from 'react-icons/md';
import grainImage from '/public/assets/images/grain.jpg';
const Works = () => {
  return (
    <>
      <section id="portfolio" className="section bg-secondary-2  relative">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="section-title before:content-portfolio  relative before:absolute before:opacity-40 before:-top-[2rem]  before:-left-[108%] before:lg:-left-3/4  before:hidden before:sm:block">
              My latest work
            </h2>
            <p className="subtitle ">
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </p>
          </div>
          {/* gradient start */}
          <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 white__gradient bottom-40" />
          <div className="absolute z-[0] w-[20%] h-[20%] left-10 top-0 blue__gradient" />
          {/* gradient end */}
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {portfolioProjects?.map((project) => (
              <div
                className="bg-secondary-2 rounded-3xl relative z-0 after:-z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 md:px-10  after:pointer-events-none"
                key={project?.title}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage?.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project?.company}</span>
                      <span>$bull;</span>
                      <span>{project?.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project?.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project?.results?.map((result) => (
                        <li
                          key={result?.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <span>
                            <IoCheckmarkCircleOutline className="text-lg sm:text-xl" />
                          </span>
                          <span className="">{result?.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={'project?.link'}>
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                        <span>Visit Live Site</span>
                        <MdOutlineArrowOutward className="text-lg sm:text-xl ml-2" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      src={project?.image}
                      alt={project?.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
