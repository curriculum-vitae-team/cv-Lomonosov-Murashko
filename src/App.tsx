import Header from "./components/Header";
import { Container } from '@mui/system';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth={"md"}>
        <div>TEST</div>
      </Container>
    </div>
  );
}

export default App;
