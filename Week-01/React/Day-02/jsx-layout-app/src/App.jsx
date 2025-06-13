import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = ()=>(
  <div>
    <Header/>
    <main className="main-content">
      <section className="content-area">
        <HeroSection/>
        <Features/>
      </section> 
      <aside>
        <Sidebar/>
      </aside>
    </main>
    <Footer/>
  </div>

);

export default App;