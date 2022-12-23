import About from "../src/pages/about/About";
import { motion } from "framer-motion";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Repositories from "./pages/repositories/Repositories";
import Contact from "./pages/contact/Contact";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Header />
      <About />
      <Repositories />
      <Contact />
      <Footer />
    </motion.div>
  );
}