import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserProvider from "./context/UserContext";
import { DivBackground } from "./globalStyles.style";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Repositories from "./pages/repositories/Repositories";

function Routers() {
  return (
    <BrowserRouter>
      <UserProvider>
      <DivBackground>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DivBackground>
      <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default Routers;
