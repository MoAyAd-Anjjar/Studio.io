
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 'haptic',
    title: 'Haptic',
    subtitle: 'UI/UX Design & Engineering',
    imageSrc: '/placeholder.svg',
    dark: true
  },
  {
    id: 'playmind',
    title: 'Playmind',
    subtitle: 'Your gaming AI companion',
    imageSrc: '/placeholder.svg',
    dark: false
  },
  {
    id: 'project-3',
    title: 'Minimalist App',
    subtitle: 'Mobile UI Design',
    imageSrc: '/placeholder.svg',
    dark: false
  },
  {
    id: 'project-4',
    title: 'Dashboard',
    subtitle: 'Web Application',
    imageSrc: '/placeholder.svg',
    dark: true
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-medium mb-12">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                imageSrc={project.imageSrc}
                dark={project.dark}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
