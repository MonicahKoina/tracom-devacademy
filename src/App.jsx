import './App.css'
import Curriculum from './Components/Curriculum';
import Navbar from './Components/Navbar';
import Welcome from './Components/welcome';
import Contact from './Components/contact';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <Welcome/>
        <Curriculum/>
        <Contact/>

      </div>
    </>
  )
}

export default App;
