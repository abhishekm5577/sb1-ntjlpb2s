import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;