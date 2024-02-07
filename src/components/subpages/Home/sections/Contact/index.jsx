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
    <section className="section bg-secondary-2" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-0 lg:flex-row">
          <div className="flex mx-auto flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact?.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-secondary rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-primary text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-secondary font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
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
    </section>
  );
};

export default Contact;
