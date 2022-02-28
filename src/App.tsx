import './App.css';
import Home from './components/pages/Home';
import Header from './components/base/header'
import Footer from './components/base/footer'

function Main() {
  return (
    <div className="body">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Main;
