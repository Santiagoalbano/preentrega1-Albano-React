import './Itemlist.css'
import Item from '../Item/Item';

const Itemlist = ({products}) => {
   return(
       <div className='Listgroup'>
           {products.map(prod => <Item key={prod.id} {...prod} />)}
       </div>

       
   )
}

export default Itemlist;