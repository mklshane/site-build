import Component from "./Hero";
import Navbar from "./components/Navbar";
import { AboutSection } from "./pages/AboutSection";
import Officers from "./pages/Officers";


export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
    <Navbar />
      <main>
        <Component />
        <AboutSection />
        <Officers />
      </main>
    </div>
  );
}
