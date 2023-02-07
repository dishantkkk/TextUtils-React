import "./App.css";
import Navbar from './components/Navbar' ;
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About US" />
      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze"/>
      </div>
    </>
  );
}

export default App;
