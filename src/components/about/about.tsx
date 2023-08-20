import { ProfilePic } from "../../assets";
export const About = () => {
  return (
    <main className="h-screen">
      <section className="flex flex-col gap-4 py-6">
        <img
          src={ProfilePic}
          alt="Gugu Mokwena"
          className="rounded-full h-40 w-40 mx-auto"
        />
        <section>
          <h1 className="text-5xl flex justify-center">
            Hi, I'm <span className="text-red-400"> Gugu P. Mokwena</span>
          </h1>
          <h2 className="text-sm text-gray-600 flex justify-center">
            Final-year Student in Software Engineering at Wethinkcode_ and
            Diploma in Computer Science Student at Tshwane University of
            Technology.
          </h2>
        </section>
      </section>

      <section className="py-6">
        <h2 className="text-5xl flex justify-center">BIO </h2>
        <section className="grid gap-6 items-center grid-cols-3">
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">💼</h4>
            <p>
              Hey, I'm Gugu Mokwena, also known as Gnerd. I'm a final-year
              Software Engineering student at Wethinkcode_ and pursuing a
              Diploma in Computer Science at Tshwane University of Technology.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟</h4>
            <p className="">
              {" "}
              Juggling multiple roles and responsibilities at a young age, I'm
              driven by a passion for technology and a thirst for knowledge. As
              a Software Engineer in the making, I'm constantly honing my skills
              and staying updated with the ever-evolving tech landscape.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟</h4>
            <p className="">
              Alongside my studies, I've been actively involved in co-founding
              Gnerd, a personal brand that embodies my dedication to all things
              tech. Collaborating with Refilwe Mashile, we're on a mission to
              bring innovative solutions and creativity to the forefront.
            </p>
          </section>{" "}
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟</h4>
            <p className="">
              🚀 On my journey, I've achieved some remarkable milestones.
              Winning a hackathon as a solo member of a team stands out as a
              testament to my problem-solving abilities and determination. It's
              a testament to my willingness to embrace challenges head-on.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟</h4>
            <p className="">
              🎯 My aspirations are clear - I'm determined to complete all my
              certifications, further sharpening my skills, and launching into
              the corporate world with enthusiasm. I'm excited to contribute my
              energy, creativity, and technical prowess to the field of software
              engineering.
            </p>
          </section>
          <section className="rounded-lg p-6 border border-[#F87171]">
            <h4 className="text-xl flex justify-center">🌟</h4>{" "}
            <p className="">
              Let's connect and collaborate on exciting tech ventures!
            </p>{" "}
          </section>
        </section>
      </section>

      <section className="">
        <h2 className="text-5xl flex justify-center">Portfolio</h2>
        <section className="flex items-center gap-4">
          <section className="flex">
            
            <p>
             
              <a
                className="text-blue-400 text-xs"
                href="https://www.youtube.com/shorts/lXXjhAZHfSA"
                target="_blank"
              ><img src=''/>View Project Prototype:{" "}
              </a>
            </p>
          </section>
          <p>Project Presentation: https://youtu.be/wFggLJsn1Qw</p>
          <p>
            Project Slide Deck:
            https://drive.google.com/file/d/1OMD7wbPcFcHLZwkYBj45bM6kGp6PX42J/view?usp=drive_link
          </p>{" "}
        </section>
      </section>
      <section className="flex justify-between items-center gap-5 bg-[#F87171] min-h-[240px] px-20 ">
        <h2 className="text-5xl">Personal Elevator Pitch</h2>
      </section>
    </main>
  );
};
