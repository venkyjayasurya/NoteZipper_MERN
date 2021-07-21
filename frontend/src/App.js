import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
