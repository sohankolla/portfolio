import Project from "./Project.jsx"
import Experience from "./Experience.jsx"

export default function App() {

  return (
    <div className="flex flex-col min-h-screen relative" id="container">
      {/* Animated Starry Background */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="clouds2"></div>
      
      <main className="flex-grow">
        <section className="landing relative z-10">
          <h1>Hi, welcome to my website</h1>
          <p>landing so maybe image and scroll down to content?</p>
        </section>

        <section id="aboutMe" className="relative z-10">
          <h1 className="font-bold text-2xl">About Me</h1>
          <p>education, me, hobbies, other cool stuff</p>
        </section>

        <section id="experience" className="relative z-10">
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

        <section id="projects" className="relative z-10">
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
      </main>

      <footer className="text-center relative text-white z-10 py-4">
        © 2024 Sohan Kolla. All rights reserved.
      </footer>
    </div>
  )

}