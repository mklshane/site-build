import React from 'react'
import logo from '../assets/JPCS-log.jpg'

export const AboutSection = () => {
  return (
    <section id="about" className="w-full lg:w-[80%] min-h-dvh mt-28 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-foreground text-5xl font-bold text-center">
          About <span className="text-primary">JPCS</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-10 items-center justify-center">
          <img
            src={logo}
            className="w-60 lg:w-60 rounded-full transform transition duration-500 ease-in-out hover:scale-110"
            alt=""
          />
          <div className="flex flex-col gap-4 text-foreground w-[80%] lg:w-[40%]">
            <p className="text-md lg:text-md">
              The Junior Philippine Computer Society (JPCS) – De La Salle Lipa
              Chapter is a student-led organization that serves as the official
              academic society for Computer Science and IT-related programs in
              the institution. We are proudly affiliated with the national JPCS
              network, connecting aspiring tech leaders across the Philippines.
            </p>
            <p className="text-md lg:text-md">
              At JPCS, we are driven by our passion for technology, innovation,
              and community building. We aim to bridge the gap between
              theoretical knowledge and real-world application through various
              initiatives including technical workshops, industry talks, coding
              competitions, and outreach programs.
            </p>
            <p className="text-md lg:text-md">
              As Lasallians, we are committed to fostering a culture of
              integrity, collaboration, and excellence—empowering our members to
              grow not only as competent tech professionals but also as socially
              responsible individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
