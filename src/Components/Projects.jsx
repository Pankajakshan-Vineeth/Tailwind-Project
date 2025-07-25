import { use, useState, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCards, setShowCards] = useState(1);

  const nextProject = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % projectsData.length
    );
  };

  const prevProject = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? projectsData.length - 1 : previousIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setShowCards(projectsData.length);
      } else {
        setShowCards(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  return (
    <motion.div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-7">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img onClick={prevProject} src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded" aria-label="Next Project">
          <img onClick={nextProject} src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / showCards}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded">
                  <h2 className="text-xl font-semibold text-gray-800 text-center">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm text-center">
                    {project.price} <span></span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
