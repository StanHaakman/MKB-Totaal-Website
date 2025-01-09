import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import CTA from "./components/CTA.tsx";
import Modal from "./components/Modal.tsx";
import Quickscan from "./components/QuickScan/index.tsx";
import {useState} from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <main>
            <Header/>
            <Hero/>
            <Services/>
            <Clients/>
            <About/>
            <CTA/>
            <Portfolio/>
            <Contact/>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded fixed right-4 bottom-4 transition duration-200"
            >
                Open Quickscan
            </button>
            
            <Modal position={"bottom-right"} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Quickscan/>
            </Modal>
        </main>
    );
}

export default App;
