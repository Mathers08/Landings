import './App.css';
import { Download, Experience, Footer, Header, Hero, Search } from "./components";

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
