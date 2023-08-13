export const About = () => {
  return (
    <main className="h-screen">
      <section className="bg-secondaryDark flex items-center py-2">
        <section>
          <h1 className="text-5xl">
            Hi, I'm <span className="text-red-400">Gugu P. Mokwena</span>
          </h1>
          <h2 className="text-4xl">Final-year Student in Software Engineering at Wethinkcode_ and Diploma in Computer Science Student at Tshwane University of Technology.</h2>
          <button
            className="rounded-lg py-1.5 px-3 font-semibold bg-[#F87171]">
            Learn More
          </button>
        </section>
      </section>
      <section className="flex justify-between items-center gap-5 bg-[#F87171] min-h-[240px] px-20 ">
        <h2 className="text-5xl">BIO </h2>
        <ul>
      <li className="">👋 Hey, I'm Gugu Mokwena, also known as Gnerd. I'm a final-year Software Engineering student at Wethinkcode_ and pursuing a Diploma in Computer Science at Tshwane University of Technology.</li>

      <li className="">🌟 Juggling multiple roles and responsibilities at a young age, I'm driven by a passion for technology and a thirst for knowledge. As a Software Engineer in the making, I'm constantly honing my skills and staying updated with the ever-evolving tech landscape.</li>

      <li className="">💼 Alongside my studies, I've been actively involved in co-founding Gnerd, a personal brand that embodies my dedication to all things tech. Collaborating with Refilwe Mashile, we're on a mission to bring innovative solutions and creativity to the forefront.</li>

      <li className="">🚀 On my journey, I've achieved some remarkable milestones. Winning a hackathon as a solo member of a team stands out as a testament to my problem-solving abilities and determination. It's a testament to my willingness to embrace challenges head-on.</li>

      <li className="">🎯 My aspirations are clear - I'm determined to complete all my certifications, further sharpening my skills, and launching into the corporate world with enthusiasm. I'm excited to contribute my energy, creativity, and technical prowess to the field of software engineering.</li>

      <li className="">Let's connect and collaborate on exciting tech ventures!</li>    
    </ul>

      </section>
      <section className="justify-center flex items-center text-center">
      <h2 className="text-5xl">Portfolio</h2>

     <p>Project Prototype: https://www.youtube.com/shorts/lXXjhAZHfSA</p> 
     <p>Project Presentation: https://youtu.be/wFggLJsn1Qw</p> 
     <p>Project Slide Deck: https://drive.google.com/file/d/1OMD7wbPcFcHLZwkYBj45bM6kGp6PX42J/view?usp=drive_link</p> 
        
      </section>
      <section className="flex justify-between items-center gap-5 bg-[#F87171] min-h-[240px] px-20 ">
        <h2 className="text-5xl">Personal Elevator Pitch</h2>

      </section>
    </main>
  );
};
