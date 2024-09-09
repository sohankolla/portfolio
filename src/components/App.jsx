import Project from "./Project.jsx"
import Experience from "./Experience.jsx"

export default function App() {

  return (
    <div className="flex flex-col h-full" id="container">
      <section className="landing">
        <h1>Hi, welcome to my website</h1>
        <p>landing so maybe image and scroll down to content?</p>
      </section>

      <section id="aboutMe">
        <h1 className="font-bold text-2xl">About Me</h1>
        <p>education, me, hobbies, other cool stuff</p>
      </section>

      <section id="experience">
        <h1 className="font-bold text-2xl">Experience</h1>
        <Experience 
          name="Elara Global Taiko Server"
          demoLink=""
          repolink=""
          startDate="May 2024"
          endDate="Aug 2024"
          description=""
          tags=""
        />
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <Project 
          name="Pass->Thru"
          demoLink=""
          repolink=""
          description=""
          tags=""
        />
        <Project 
          name="QuizWiz"
          demoLink=""
          repolink=""
          description=""
          tags=""
        />
        <Project 
          name="project3"
          demoLink=""
          repolink=""
          description=""
          tags=""
        />
      </section>

      <footer className="text-center">
        © 2024 Sohan Kolla. All rights reserved.
      </footer>
    </div>
  )

}