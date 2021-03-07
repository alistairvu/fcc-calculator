import { useSelector } from "react-redux"
import { rootState } from "../redux"

export const Display = () => {
  const { expression, display } = useSelector((state: rootState) => state)

  return (
    <div className="p-3">
      <div id="expression">
        <p className="text-right">{expression}</p>
      </div>
      <div id="display">
        <h3 className="text-right">{display}</h3>
      </div>
    </div>
  )
}
