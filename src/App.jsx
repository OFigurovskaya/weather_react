import style from './App.module.scss';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

function App() {
 
  return <div className={style.container}>
  <Header />
   <MainPage />
   <Footer />
  </div>
}

export default App
