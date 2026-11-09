import Navbar from './components/navbar.jsx';
import HomeSession from './components/home.jsx';
import WorkSession from './components/work.jsx';
import ExperienceSession from './components/experience.jsx';
import AboutSession from './components/about.jsx';
import FooterSession from './components/footer.jsx';
import InteractiveDots from './cursor.jsx';

import Coffee from './coffee/coffee.jsx';
import { useRef } from 'react';

export default function App() {

  const ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const HomeRef = useRef(null);
  const WorkRef = useRef(null);
  const ExperienceRef = useRef(null);
  const AboutRef = useRef(null);

  return (
    <div className='relative min-h-screen'>

      <InteractiveDots />

      <div className='relative z-10'>
        <Navbar 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        WorkRef = {WorkRef}
        ExperienceRef = {ExperienceRef}
        AboutRef = {AboutRef}
        />
        <HomeSession 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        WorkRef = {WorkRef}
        />
        <WorkSession 
        WorkRef = {WorkRef}
        />
        <ExperienceSession 
        ExperienceRef = {ExperienceRef}
        />
        <AboutSession 
        AboutRef = {AboutRef}
        />
        <FooterSession 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        />
      </div>
    </div>
  )
}