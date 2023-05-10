import { useEffect, useState } from "react";
import { getProducts, getProductByCategory } from "../../Asynmock";
import Itemlist from "../Itemlist/Itemlist";

import { useParams } from "react-router-dom";

const Itemlistcontainer = ({ greeting }) => {
   const [products, setProducts] = useState([])

   const {categoryId} = useParams()

   useEffect(() => {
     const asyncfunc = categoryId ? getProductByCategory : getProducts

     asyncfunc(categoryId)
     .then(response => {
        setProducts(response)
     })
      .catch(error => {
         console.error(error)
      })
}, [categoryId])

return (
   <div>
      <h1>greeting</h1>
      <Itemlist products={products}/>
   </div>
)
}


export default Itemlistcontainer;
