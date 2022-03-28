import './styles.css';
import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';

const ProductCard = () =>{
    return(
        <div className='base-card product-card'>
            <div className='card-top-container'>
                <img src={ProductImg} alt="Nome do Produto"/>
            </div>
                <h6>Nome do Produto</h6>
                <ProductPrice/>
            <div className='card-bottom-container'>

            </div>
        </div>
    );
}

export default ProductCard;