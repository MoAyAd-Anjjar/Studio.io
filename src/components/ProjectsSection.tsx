import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const ProjectsSection = () => {
  const [ImgsPath, setImgsPath] = useState<string>("");
  useEffect(() => {
    const getIMG = async () => {
      const res = await axios.get("http://localhost:3000");
      setImgsPath(res.data);
    };
    getIMG();
  }, []);

  const projects = [
    {
      id: "haptic",
      title: "Haptic",
      subtitle: "UI/UX Design & Engineering",
      imageSrc: `img1.png`,
      dark: true,
    },
    {
      id: "playmind",
      title: "Playmind",
      subtitle: "Your gaming AI companion",
      imageSrc: `img1.png`,
      dark: false,
    },
    {
      id: "Minimalist App",
      title: "Minimalist App",
      subtitle: "Mobile UI Design",
      imageSrc: `img1.png`,
      dark: false,
    },
    {
      id: "Dashboard",
      title: "Dashboard",
      subtitle: "Web Application",
      imageSrc: `img1.png`,
      dark: true,
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const animate = () => {
      if (isPaused) return;

      setScrollPos((prevPos) => {
        const newPos = prevPos + 0.5; // Adjust speed here
        const contentWidth = scrollContainer.scrollWidth;
        const containerWidth = scrollContainer.clientWidth;

        if (newPos >= (contentWidth - containerWidth) / 2) {
          return 0;
        }
        return newPos;
      });
    };

    const animationId = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationId);
  }, [isPaused]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPos;
    }
  }, [scrollPos]);

  return (
    <section
      className="py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div
          className="w-full overflow-x-hidden"
          ref={containerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-4 py-4 w-max">
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="w-[320px] flex-shrink-0"
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  imageSrc={project.imageSrc}
                  dark={project.dark}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
