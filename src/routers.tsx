import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserProvider from "./context/UserContext";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Repositories from "./pages/repositories/Repositories";

function Routers() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default Routers;
