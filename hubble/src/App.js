import Header from "./components/Header";
// use curly braces bc it is not a default (!!)
import { Container } from "./components/styles/Container.styled";
function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello Vorld!</h1>
      </Container>
    </>
  );
}

export default App;
