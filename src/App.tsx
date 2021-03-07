import Container from "react-bootstrap/Container"
import { Display, Keyboard } from "./components"

const App = () => {
  return (
    <main>
      <Container className="text-center py-5 ">
        <div style={{ width: 300 }}>
          <Display />
          <Keyboard />
        </div>
      </Container>
    </main>
  )
}

export default App
