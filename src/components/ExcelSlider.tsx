'use client';

import React, { useState } from "react";
import { readExcelFile } from "../utils/readExcel";

interface ProjectData {
  sheetName: string;
  image: string | null;
  oblast: string;
  year: number;
  description: string;
}

const ExcelSlider: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const data = await readExcelFile(file);
      setProjects(data);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      {/* File Upload */}
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />

      {/* Slider */}
      {projects.length > 0 ? (
        <section className="relative">
          <h2 className="text-center text-xl font-bold mb-4">
            {projects[0]?.sheetName} Projects
          </h2>
          <div className="slickSlider relative overflow-hidden">
            {projects.map((project, index) => (
              <div key={index} className="slide text-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-96 object-contain"
                  />
                ) : null}
                <div className="mt-2 text-left">
                  <p><strong>Oblast:</strong> {project.oblast}</p>
                  <p><strong>Year:</strong> {project.year}</p>
                  <p><strong>Description:</strong> {project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center">Upload an Excel file to display projects.</p>
      )}
    </div>
  );
};

export default ExcelSlider;
