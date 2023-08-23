import React from "react";
import { ProfilePic } from "../../assets";
import { Present} from "../../assets";
import { Prototype } from "../../assets";
import { Pitch } from "../../assets";
export const About = () => {
  return (
    <main className=" px-8">
      <section className="flex flex-col gap-4 py-6 justify-center h-2/3">
        <img
          src={ProfilePic}
          alt="Gugu Mokwena"
          className="rounded-full h-60 w-60 mx-auto"
        />
        <section>
          <h1 className="text-5xl flex justify-center">
            Hi, I'm <span className="text-red-400">{` Gugu P. Mokwena`}</span>
          </h1>
          <h2 className="text-sm italic text-gray-600 flex justify-center">
            Final-year Student in Software Engineering at{" "}
            <span className="text-blue-400">{` WeThinkCode_ `}</span>and Diploma
            in Computer Science Student at{" "}
            <span className="text-blue-400">
              {` Tshwane University of Technology`}
            </span>
            .
          </h2>
        </section>
      </section>

      <section className="py-6">
        <h2 className="text-5xl flex justify-center">BIO </h2>
        <section className="grid gap-6 items-center grid-cols-3">
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">💼 Title</h4>
            <p>
              Hey, I'm Gugu Mokwena, also known as Gnerd. I'm a final-year
              Software Engineering student at Wethinkcode_ and pursuing a
              Diploma in Computer Science at Tshwane University of Technology.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟 Passion</h4>
            <p className="">
              Juggling multiple roles and responsibilities at a young age, I'm
              driven by a passion for technology and a thirst for knowledge. As
              a Software Engineer in the making, I'm constantly honing my skills
              and staying updated with the ever-evolving tech landscape.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟 Side Hustle</h4>
            <p className="">
              Alongside my studies, I've been actively involved in co-founding
              Gnerd, a personal brand that embodies my dedication to all things
              tech. Collaborating with Refilwe Mashile, we're on a mission to
              bring innovative solutions and creativity to the forefront.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🚀Milestones</h4>
            <p className="">
              On my journey, I've achieved some remarkable milestones. Winning a
              hackathon as a solo member of a team stands out as a testament to
              my problem-solving abilities and determination. It's a testament
              to my willingness to embrace challenges head-on.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🎯Aspiration</h4>
            <p className="">
              My aspirations are clear - I'm determined to complete all my
              certifications, further sharpening my skills, and launching into
              the corporate world with enthusiasm. I'm excited to contribute my
              energy, creativity, and technical prowess to the field of software
              engineering.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟 Open To</h4>
            <p className="">
              Let's connect and collaborate on exciting tech ventures!
            </p>
          </section>
        </section>
      </section>

      <section className="">
        <h2 className="text-5xl flex justify-center">Portfolio</h2>
        <section className="flex items-center gap-4">
          <section className="flex justify-between gap-4 w-full items-center">
            <section className=" flex flex-col w-1/3">
              <img src={Prototype}/>
              <a
                className="text-white hover:bg-[#ed9f9f] hover:text-lg text-sm font-semibold flex justify-center bg-[#F87171] w-['400px'] py-2 rounded-full"
                href="https://www.youtube.com/shorts/lXXjhAZHfSA"
                target="_blank"
              >
                View Project Prototype
              </a>
            </section>
            <section className=" flex flex-col w-1/3 ">
              <img src={Present}/>
              <a
                className="text-white hover:bg-[#ed9f9f] hover:text-lg text-sm font-semibold flex justify-center bg-[#F87171] w-['400px'] py-2 rounded-full"
                href="https://youtu.be/wFggLJsn1Qw"
                target="_blank"
              >
                View Project Presentation
              </a>
            </section>
            <section className="flex flex-col w-1/3">
              <img src={Pitch}/>
              <a
                className="text-white hover:bg-[#ed9f9f] hover:text-lg text-sm font-semibold flex justify-center bg-[#F87171] w-['400px'] py-2 rounded-full"
                href="https://drive.google.com/file/d/1OMD7wbPcFcHLZwkYBj45bM6kGp6PX42J/view?usp=drive_link"
                target="_blank"
              >
                Project Slide Deck
              </a>
            </section>
          </section>
        </section>
      </section>
      <section className="">
        <h2 className="text-5xl justify-center flex py-3">
        Personal Elevator Pitch
        </h2>
        <section className="flex justify-center">
        <iframe  width="848" height="480" src="https://www.youtube.com/embed/S9EDzKgaDy0" title="Elevator Pitch | ALX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
      </section>
    </main>
  );
};
