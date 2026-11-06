import Navbar from './components/navbar.jsx';
import HomeSession from './components/home.jsx';
import WorkSession from './components/work.jsx';
import ExperienceSession from './components/experience.jsx';
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

  return (
    <div className='relative min-h-screen'>

      <InteractiveDots />

      <div className='relative z-10'>
        <Navbar 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        WorkRef = {WorkRef}
        />
        <HomeSession 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        WorkRef = {WorkRef}
        />
        <WorkSession 
        WorkRef = {WorkRef}
        />
        <ExperienceSession />
      </div>
    </div>
  )
}