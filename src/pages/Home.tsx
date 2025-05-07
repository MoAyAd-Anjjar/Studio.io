
import React from 'react';
import NavBar from '../components/NavBar';
import ProfileSection from '../components/ProfileSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <ProfileSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
