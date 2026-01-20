"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import projects from "@/data/projects";

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 md:px-0">
          {projects.map((project) => (
            <li
              className="w-full max-w-[300px] mx-auto sm:mx-0 sm:max-w-none h-auto min-h-[350px] sm:h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="Project Screenshots"
                >
                  {project.screenshots.map((screenshot, idx) => (
                    <SplideSlide key={`${project.id}-${idx}`}>
                      <Image
                        src={screenshot}
                        alt={`Screenshot of ${project.title}`}
                        className="w-full h-[200px] rounded-md bg-zinc-900 object-cover"
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.title}</h2>
                <div className="mt-2 mb-2">
                  <span className="text-xs bg-white text-black rounded-lg px-2 py-1">
                    {project.category}
                  </span>
                </div>
                <Link
                  href={project.live}
                  target="_blank"
                  className="text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  View Project →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
