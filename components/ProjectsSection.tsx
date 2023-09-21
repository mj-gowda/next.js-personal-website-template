
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare, BsInfoCircle } from "react-icons/bs"
import { projects } from "@/assets/projects/myProjects"
import MyModal from "./projectModal"




const ProjectsSection = () => {

  return (
    <section id="projects" className="md:pb-48 ">
      <h1 className="my-10 md:pb-12 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded "></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx} id={project.name}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="transition ease-in-out delay-150 hover:scale-110 duration-300 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70 mt-6"
                      />
                    </Link>
                  </div>
                  <div className="mt-6 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <h1 className="transition ease-in-out delay-150 hover:scale-105 duration-300 text-2xl font-bold mb-4">{project.name}</h1>
                  </Link>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.blog}>
                        <BsInfoCircle
                          title="project info"
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          title="git repo"
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link  href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          title="Go to website"
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <p>
                      <MyModal tech={project.stack}/>
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
