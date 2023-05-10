import './Itemdetail.css'
import Itemcount from '../Componentes/Itemcount/Itemcount'


const Itemdetail =  ({id,name,img,category,description,price,stock}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='Itemheader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Itemimg"/>
            </picture>
            <section>
                <p className='Info'>
                    Descripcion:{description}
                </p>
                <p className='Info'>
                    Categoria:{category}
                </p>
                <p className='Info'>
                    Precio:{price}
                </p>
            </section>
            <footer className='Itemfooter'>
                <Itemcount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ',{Itemcount})}/>
            </footer>
        </article>
    )
}


export default Itemdetail;