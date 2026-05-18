import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import MenuHighlights from './components/MenuHighlights';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <MenuHighlights />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
