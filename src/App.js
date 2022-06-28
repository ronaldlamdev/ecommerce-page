import './css/styles.css';
import Header from './components/header';
import Main from './components/main';
import Modal from './components/modal';
import EmptyCart from './components/emptycart';
import NonEmptyCart from './components/nonemptycart';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Modal />
      <EmptyCart />
      <NonEmptyCart />
    </div>
  );
}

export default App;
