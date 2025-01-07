import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import CTA from "./components/CTA.tsx";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <Clients />
            <About />
            <CTA />
            <Portfolio />
            <Contact />
        </main>
    );
}

export default App;
