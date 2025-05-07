
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle?: string;
  imageSrc: string;
  dark?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, subtitle, imageSrc, dark = false }) => {
  
  return (
    <Link to={`/project/${id}`} className="block">
      <div className={`project-card overflow-hidden rounded-lg ${dark ? 'bg-black' : 'bg-gray-100'} h-full`}>
        <div className="aspect-[3/2] overflow-hidden relative">
          {imageSrc && (
            <img
            src={`http://localhost:3000/images/${imageSrc}`}
            alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
        <div className="p-6">
          <h3 className={`text-xl font-medium ${dark ? 'text-white' : 'text-black'}`}>{title}</h3>
          {subtitle && <p className={`mt-1 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
