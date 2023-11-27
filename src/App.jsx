import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Container from "./Container";
import Loder from "./Sections/loder"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 


    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      {loading ? (
          <Loder/>
      ) : (
        <Container/>
      )}
    </div>
  );
}

export default App;
