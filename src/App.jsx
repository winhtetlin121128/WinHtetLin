import Navbar from './components/navbar.jsx';
import HomeSession from './components/home.jsx';
import WorkSession from './components/work.jsx';
import InteractiveDots from './cursor.jsx';

import Coffee from './coffee/coffee.jsx';

export default function App() {
  return (
    <div className='relative min-h-screen'>

      <InteractiveDots />

      <div className='relative z-10'>
        <Navbar />
        <HomeSession />
        <WorkSession />
      </div>
    </div>
  )
}