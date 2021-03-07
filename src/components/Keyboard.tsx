import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { useDispatch } from "react-redux"
import {
  addNumberKey,
  addOperationKey,
  clearScreen,
  calculateResult,
} from "../redux/calculatorSlice"

export const Keyboard = () => {
  const dispatch = useDispatch()

  const operations = ["+", "-", "*", "/"]

  const addKeyHandler = (key: string) => {
    if (key === "=") {
      dispatch(calculateResult())
    } else if (operations.indexOf(key) > -1) {
      dispatch(addOperationKey(key))
    } else {
      dispatch(addNumberKey(key))
    }
  }

  return (
    <div style={{ width: 300 }} className="d-flex flex-column">
      <Row className="d-flex">
        <Button
          variant="danger"
          onClick={() => dispatch(clearScreen())}
          id="clear"
        >
          AC
        </Button>
        <Button
          variant="warning"
          onClick={() => addKeyHandler("/")}
          id="divide"
        >
          /
        </Button>
      </Row>

      <Row className="d-flex">
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("7")}
          id="seven"
        >
          7
        </Button>
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("8")}
          id="eight"
        >
          8
        </Button>
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("9")}
          id="nine"
        >
          9
        </Button>
        <Button
          variant="warning"
          onClick={() => addKeyHandler("*")}
          id="multiply"
        >
          *
        </Button>
      </Row>

      <Row className="d-flex">
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("4")}
          id="four"
        >
          4
        </Button>
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("5")}
          id="five"
        >
          5
        </Button>
        <Button variant="secondary" onClick={() => addKeyHandler("6")} id="six">
          6
        </Button>
        <Button
          variant="warning"
          onClick={() => addKeyHandler("-")}
          id="subtract"
        >
          -
        </Button>
      </Row>

      <Row className="d-flex">
        <Button variant="secondary" onClick={() => addKeyHandler("1")} id="one">
          1
        </Button>
        <Button variant="secondary" onClick={() => addKeyHandler("2")} id="two">
          2
        </Button>
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("3")}
          id="three"
        >
          3
        </Button>
        <Button variant="warning" onClick={() => addKeyHandler("+")} id="add">
          +
        </Button>
      </Row>

      <Row className="d-flex">
        <Button
          variant="secondary"
          onClick={() => addKeyHandler("0")}
          id="zero"
        >
          0
        </Button>
        <Button
          variant="secondary"
          onClick={() => addKeyHandler(".")}
          id="decimal"
        >
          .
        </Button>

        <Button
          variant="warning"
          onClick={() => addKeyHandler("=")}
          id="equals"
        >
          =
        </Button>
      </Row>
    </div>
  )
}
