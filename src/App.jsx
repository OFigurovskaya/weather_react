import style from './App.module.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
 
  return <div className={style.main}>
  <Header />
   <MainPage />
   <Footer />
  </div>
}

export default App
