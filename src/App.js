import React, { useState } from 'react';
import './App.css';

function calculateEquation(x) {
  const pi = Math.PI;
  const e = Math.E;
  
  const part1 = Math.log(x ** 11 * Math.pow(pi, (e * x) / 2)) / Math.log(7);
  const part2 = Math.asin(x - 3) * Math.pow(e, 2);
  
  const result = part1 + part2;
  return Math.max(5,+result.toFixed(2));
}

function App() {
  const [cgpa, setCGPA] = useState('');
  const [salaami, setSalaami] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleCGPAChange = (event) => {
    setCGPA(event.target.value);
  };

  const calculateSalaami = () => {
    const cgpaValue = parseFloat(cgpa);
    if (!isNaN(cgpaValue)) {
      setSalaami(calculateEquation(cgpaValue));
      console.log(Math.asin(1));
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
      }, 2000);
    }
  };

  const closePopup = () => {
    setSalaami(null);
  };

  const goToCGPACalculator = () => {
    window.location.href = 'https://masrafi5628.github.io/CGPA-Calculator/';
  };

  return (
    <div className="App">
      <h1>Eid Mubarak!</h1>
      <p>تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ</p>
      <form onSubmit={(e) => { e.preventDefault(); calculateSalaami(); }}>
        <div className="input-group">
          <label htmlFor="cgpa"></label>
          <input 
            type="number" 
            id="cgpa" 
            value={cgpa} 
            onChange={handleCGPAChange} 
            step="0.01" 
            placeholder="Enter your CGPA" 
            required 
          />
        </div>
        <button className="btn" type="submit">Calculate Salaami</button>
      </form>
      <button className="btn cgpa-calc" onClick={goToCGPACalculator}>CGPA Calculator</button>
      {salaami !== null && (
        <div className="popup">
          <span className="close" onClick={closePopup}>&times;</span>
          <h2>Marhabaa....!</h2>
          <p>Your Salaami according to your CGPA - <span style={{color:'red'}}>{salaami} BDT</span></p>
        </div>
      )}
      {showFireworks && (
        <div className="fireworks">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      )}
    </div>
  );
}

export default App;
