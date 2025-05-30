
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";

function About() {
  return <h2 className="text-center p-4">אודות החברה – ניסיון, איכות, ומקצועיות מאז...</h2>;
}

function Contact() {
  return (
    <form className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
      <input type="text" placeholder="שם" className="border p-2 w-full mb-2" />
      <input type="email" placeholder="אימייל" className="border p-2 w-full mb-2" />
      <textarea placeholder="הודעה" className="border p-2 w-full mb-2"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">שלח</button>
    </form>
  );
}

function Blog() {
  return <h2 className="text-center p-4">בלוג מקצועי – מאמרים על חיתוך בלייזר, פרגולות, ברזל ועוד</h2>;
}

function DXFShop() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">הזמנת קובץ DXF</h2>
      <input type="text" placeholder="מה ברצונך להזמין?" className="border p-2 w-full mb-2" />
      <input type="file" className="border p-2 w-full mb-2" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">שלח בקשה</button>
    </div>
  );
}

function LaserCutting() {
  return <h2 className="text-center p-4">שירותי חיתוך בלייזר – מדויק, מהיר, כל סוגי המתכות</h2>;
}

export default function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-white shadow text-blue-800 justify-center">
        <Link to="/">דף הבית</Link>
        <Link to="/about">אודות</Link>
        <Link to="/contact">צור קשר</Link>
        <Link to="/blog">בלוג</Link>
        <Link to="/shop">חנות DXF</Link>
        <Link to="/laser">חיתוך בלייזר</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<DXFShop />} />
        <Route path="/laser" element={<LaserCutting />} />
      </Routes>
    </Router>
  );
}
