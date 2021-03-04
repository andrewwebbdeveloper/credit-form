import './App.css';
import Form from "./components/Form";
import CardContainer from './components/CardContainer';

function App() {
  return (
    <main className="page-grid">
      <div className="page-grid-spacer" ></div>
      <section className="page-grid-main" style={{background: "cornflowerblue"}}>
        <div className="content-container">
          <CardContainer/>
          <Form/>
        </div>
      </section>
      <div className="page-grid-spacer"></div>
    </main>
  );
}

export default App;
