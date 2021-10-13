export default function ProdCard({prod, onClick, pic}) {
  let objKeyVs = Object.entries(prod);
  // console.log(objKeyVs);
  return (
    <>
      <li className="flex-column" onClick={onClick}>{pic && objKeyVs[3][1]}</li>
    </>
  )
}

// {objKeyVs.map((attr, ind) => (
//   <li className="flex-column" key={ind}>{`${attr[0]} : ${attr[1]}`}</li>
// ))}