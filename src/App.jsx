import Navbar from './components/navbar.jsx';
import HomeSession from './components/home.jsx';
import WorkSession from './components/work.jsx';
import ExperienceSession from './components/experience.jsx';
import AboutSession from './components/about.jsx';
import ContactSession from './components/contact.jsx';
import FooterSession from './components/footer.jsx';
import InteractiveDots from './cursor.jsx';

import toast,{ Toaster } from 'react-hot-toast';

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
  const ContactRef = useRef(null);

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
        ContactRef = {ContactRef}
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
        <ContactSession 
        ContactRef = {ContactRef}
        />
        <FooterSession 
        ScrollToSection = {ScrollToSection}
        HomeRef = {HomeRef}
        />

        <Toaster />
      </div>
    </div>
  )
}