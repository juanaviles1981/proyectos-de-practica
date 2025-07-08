import SimpleItem from "./SingleItem"
export default function DisplayItems({ subs }) {
  return (
   <>
    <h2>Suscripciones</h2>
    {
        subs.map(item => (
            <SimpleItem 
            key={item.id}
            id={item.id} 
            price={item.price} 
            type={item.type} />
        ))
    }

   </>
  )
}
