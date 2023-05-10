import './Itemdetailcontainer.css'
import { useState , useEffect} from 'react'
import { getProductById } from '../Asynmock'
import Itemdetail from '../Itemdetail/Itemdetail'
import { useParams } from 'react-router-dom'

const Itemdetailcontainer = () => {
    const [product, setProduct] = useState(null)

    const{itemId} = useParams()
    
    useEffect(() => {
    getProductById('itemId')
        .then(response => {
            setProduct(response)
        })
        .catch(error =>  {
            console.error(error)
        })
       },   [itemId])

  return(
      <div className='Itemdetailcontainer' >
          <Itemdetail {...product} />
      </div>
  )

}  


export default Itemdetailcontainer;