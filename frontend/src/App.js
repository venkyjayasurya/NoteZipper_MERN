import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './Screens/LandingPage/LandingPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <LandingPage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
