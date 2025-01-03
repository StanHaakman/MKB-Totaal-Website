import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
        </main>
    );
}

export default App;
