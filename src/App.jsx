import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Project title="Proyect 6" description="Projects Portfolio" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
