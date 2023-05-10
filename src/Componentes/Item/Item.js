import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, name, img, price, stock,}) => {

   return (
       <article className='articulo'>
           <header className="Carditem">
           <h2 className='Itemholder'>
               {name}
           </h2>
           </header>
           <picture>
               <img src={img} alt={name} className="Itemimg"/>
           </picture>
           <section>
               <p className="Info">
                   Precio: ${price}
               </p>
               <p className='Info'>
                   Stock disponible: {stock}
               </p>
           </section>
           <footer className='Itemfooter'>
             <Link to={`/item/${id}`} className ="Option">Ver detalle</Link>
           </footer>
       </article>
   )
}


export default Item;



