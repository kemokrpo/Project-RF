"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { readExcelFile } from "../utils/readExcel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Project {
  sheetName: string;
  image: string | null;
  oblast: string;
  year: number;
  description: string;
}

const ExcelSlider: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await readExcelFile("/data/Book3.xlsx");
        
        // Log loaded projects data
        console.log("Loaded projects:", data);
        
        setProjects(data);
      } catch (error) {
        console.error("Error loading Excel data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Učitavanje projekata...</div>;
  }

  if (!projects.length) {
    return <div className="text-center text-lg">Nema projekata...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-teal-600 z-9999">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-blue rounded-lg shadow-lg">
            {/* Display image from column D */}
            {project.image && (
              <img
                src={project.image}
                alt={`Projekt ${index + 1}`}
                className="w-full h-auto max-h-96 object-contain mb-4"
              />
            )}
            {/* Display Year (Godina), Area (Oblast), and Description (Opis) */}
            <div className="text-center space-y-2">
              <p className="font-semibold text-lg text-white-800">
                <span className="text-white-500">Godina:</span> {project.year}
              </p>
              <p className="font-semibold text-lg text-white-800">
                <span className="text-white-500">Oblast:</span> {project.oblast}
              </p>
              <p className="font-semibold text-white-700">
                <span className="text-white-500">Opis:</span> {project.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExcelSlider;
