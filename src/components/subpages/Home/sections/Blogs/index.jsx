import { PinContainer } from '@/components/ui/Pin';
import { blogsData } from '@/utils/data';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

const Blogs = () => {
  return (
    <section id="blogs" className="py-10 2xsm:py-20 bg-secondary-3 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-blogs  relative before:absolute before:opacity-10 before:-top-[2rem] before:-left-1/2 before:hidden before:2xsm:block">
            My Blogs
          </h2>
          <p className="subtitle">
            Explore our blogs to elevate your development skills, gain clarity
            on various topics, and become a confident developer proficient in
            utilizing diverse technologies. Learn and persevere in discovering
            the essence of engineering excellence at its finest.
          </p>
        </div>
        <div className="px-32">
          <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {blogsData?.map((item) => (
              <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                key={item.id}
              >
                <PinContainer
                  title="/ui.aceternity.com"
                  href="https://twitter.com/mannupaaji"
                >
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: '#13162D' }}
                    >
                      {/* <Image src={item?.img} alt="bgimg" layout="fill" /> */}
                    </div>
                    <Image
                      src={item.img}
                      layout="fill"
                      alt="cover"
                      className="z-10 absolute bottom-0"
                    />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: '#BEC1DD',
                      margin: '1vh 0',
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="icon5"
                            className="p-2"
                            layout="fill"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-1/2 left-[30%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[30%] top-1/2 blue__gradient" />
      {/* gradient end */}
      {/* gradient start */}
      {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient" /> */}
      <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" />
      {/* gradient end */}
    </section>
  );
};

export default Blogs;
