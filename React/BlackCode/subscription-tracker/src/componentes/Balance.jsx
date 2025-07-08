import { moneyFormat } from "./helpers"

function Balance({ count }) {
  return (
    <div className="balance">
        <h3>Presupuesto: {moneyFormat(count)}</h3>
        <h3>Disponible: {count}</h3>
        <h3>Gastado: {count}</h3>
    </div>
  )
}

export default Balance