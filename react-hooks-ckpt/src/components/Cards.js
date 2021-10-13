import ProdCard from "./ProdCard.js";

export default function Cards({ prods, onClick, pic }) {


  let values = Object.values(prods)
  return (
    <>
      {values.map((prod, index) => (
        <ul className="prod-card flex-row" key={index}>
          <ProdCard prod={prod} onClick={onClick} pic={pic} />
        </ul>)
      )}
    </>
  )
}
