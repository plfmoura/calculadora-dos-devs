import React from 'react'
import Navbar from "./components/Navbar";
import "./App.css";
import Calculator from './components/Calculator';
import Footer from './components/Footer';

export default function App() {

  return (
    <main className="App">
      <Navbar />
      <Calculator />
      <Footer />
    </main>
  );
}