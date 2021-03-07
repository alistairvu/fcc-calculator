import { render } from "react-dom"
import App from "./App"
import "./bootstrap.min.css"
import { Provider } from "react-redux"
import store from "./redux"

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
