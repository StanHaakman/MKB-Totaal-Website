import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Clients from "./components/Clients";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <Clients />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
        </main>
    );
}

export default App;
