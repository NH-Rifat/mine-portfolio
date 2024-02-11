import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa6";
import tourfam from "/public/assets/projectDetails/tourfam.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const technologies = [
    // "React",
    // "Next.js",
    // "Tailwind CSS",
    // "Node.js",
    // "Express.js",
    // "MongoDB",
    {
      name: "React",
      color: "bg-[#00BF8F]",
    },
    {
      name: "Next.js",
      color: "bg-[#000000]",
    },
    {
      name: "Tailwind CSS",
      color: "bg-[#06B6D4]",
    },
    {
      name: "Node.js",
      color: "bg-[#3C873A]",
    },
    {
      name: "Express.js",
      color: "bg-[#000000]",
    },
    {
      name: "MongoDB",
      color: "bg-[#13AA52]",
    },
  ];

  const keyFeatures = [
    {
      title: "product search",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "product filtering",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "price negociation",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "similar product suggestion",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "shop management",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "Payment integration",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "product shipping",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
    {
      title: "product varient",
      content:
        "AI Lab Granada will combine talent and cutting-edge technology and will feature technology leaders, advanced computing and a model open to startup participation. With this",
    },
  ];

  // create color array
  const colors = [
    "#bcd65f",
    "#62df5d",
    "#8669df",
    "#6586e2",
    "#e2c565",
    "#5ab6bd",
  ];

  const [titleColors, setTitleColors] = useState([]);

  useEffect(() => {
    const randomColors = keyFeatures.map(
      () => colors[Math.floor(Math.random() * colors.length)]
    );
    setTitleColors(randomColors);
  }, []);

  // #1A191D
  return (
    <div className="bg-[#1A191D] py-10">
      <div className="container space-y-9">
        <div className="p-5 bg-[rgba(90,89,89,0.05)] w-14 h-14 rounded-full cursor-pointer ">
          <Link href={`/`} className=" text-center text-xl ">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg">Web Development</h1>
          <Link href={`/`} className="flex items-center space-x-3">
            <h1 className="text-5xl font-bold ">Fish My Spot</h1>
            <div className="text-3xl">
              <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">Project Overview</h1>
          <p className="text-slate-300 first-letter:text-2xl first-letter:font-semibold font-montserrat">
            AI Lab Granada will combine talent and cutting-edge technology and
            will feature technology leaders, advanced computing and a model open
            to startup participation. With this, it seeks to develop Artificial
            Intelligence solutions that will help increase the efficiency and
            sustainability of companies, public authorities and society in order
            to have a real impact in areas such as health and quality of life,
            sustainability, the circular economy, the democratization of
            e-commerce, the optimization of industrial processes, intelligent
            employment or education. At the same time, it will serve as a centre
            for the transmission and exchange of knowledge on Artificial
            Intelligence.AI Lab Granada will combine talent and cutting-edge
            technology and will feature technology leaders, advanced computing
            and a model open to startup participation. With this, it seeks to
            develop Artificial Intelligence solutions that will help increase
            the efficiency and sustainability of companies, public authorities
            and society in order to have a real impact in areas such as health
            and quality of life, sustainability, the circular economy, the
            democratization of e-commerce, the optimization of industrial
            processes, intelligent employment or education. At the same time, it
            will serve as a centre for the transmission and exchange of
            knowledge on Artificial Intelligence.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">Key Features</h1>
          {keyFeatures?.map((feature, index) => (
            <div key={index} className="">
              <li className="space-x-2 py-1.5">
                <span
                  className="font-medium capitalize text-base px-2 py-0.5 rounded-md text-gray-800"
                  style={{ backgroundColor: titleColors[index] }}
                >
                  {feature?.title}
                </span>
                <span>
                  <span className="">:</span>
                </span>
                <span className="text-slate-300">{feature?.content}</span>
              </li>
            </div>
          ))}
        </div>
        <div className="">
          <Image
            src={tourfam}
            alt="logo"
            className="object-cover h-full  md:mx-auto lg:mx-0 "
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">Technology Used</h1>
          <div className="flex flex-row flex-wrap">
            {technologies?.map((tech, index) => (
              <div
                key={index}
                className={`${tech?.color} m-2 rounded text-white px-1.5 py-1`}
              >
                {tech?.name}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-medium">Contribution</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
