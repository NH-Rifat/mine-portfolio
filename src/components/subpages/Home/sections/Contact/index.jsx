import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// import contact data
import { toast } from "react-toastify";
import { contact } from "@/utils/data";
import { Button } from "@/components/reusable";

const Contact = () => {
  // email sent to the owner email......
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_28inj8p",
        "template_6xyvxpo",
        form.current,
        "e9TCiEGAqfVM21gKW"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully to Hasan Rifat");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="section bg-secondary-2 relative" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:sm:block">
            Contact me
          </h2>
          <p className="subtitle">
            Get in touch with me! I&apos;am here to answer any questions,
            discuss potential collaborations, or just chat about all things
            tech. Drop me a message and let&apos;s start building something
            great together
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-0 md:flex-row">
          <div className="flex mx-auto flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact?.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-row gap-x-1" key={index}>
                  <div className="text-secondary rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className=" text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph font-body ">{subtitle}</p>
                    <p className="text-secondary font-body ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full md:w-5/6 xl:w-full max-w-[780px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Your name"
                name="name"
              />
              <input
                className="input"
                type="email"
                placeholder="Your email"
                name="email"
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="textarea"
              placeholder="Your message"
              name="message"
            ></textarea>
            <Button text="Send Message" />
          </form>
        </div>
      </div>
      {/* gradient start */}
      {/* <div className="absolute z-[1] w-[30%] h-[30%] rounded-full top-0 right-[10%] white__gradient bottom-40" />
      <div className="absolute z-[0] w-[20%] h-[20%] left-[35%] top-16 blue__gradient" /> */}
      {/* gradient end */}
    </section>
  );
};

export default Contact;
