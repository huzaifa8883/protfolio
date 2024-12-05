import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Header from './components/header';
// import Footer from './components/Footer';
import Home from './components/Home';  // Import your Home component
// import About from './components/About'; // Add other components for other pages (e.g., About)
// import Contact from './components/Contact';  // Example Contact page
import Footer from './components/Footer';

import Aboutus from './components/Aboutus';
function App() {
  return (
    <>
      <Header /> {/* Always rendered at the top */}
      
      {/* Routes container */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path='/about'  element={<Aboutus/>}/>
          {/* <Route path="/about" element={<About />} />  */}
          {/* <Route path="/contact" element={<Contact />} />  */}
          {/* Add more routes as needed */}
        </Routes>
      </main>

      <Footer /> 
    </>
  );
}

export default App;
