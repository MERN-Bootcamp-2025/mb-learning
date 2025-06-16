import ProductImage from "./ProductImage";
import '../App.css';
import ProductInfo from "./ProductInfo";
import ActionButtons from "./ActionButtons";
import PropTypes from 'prop-types';



const ProductCard = ({product})=>{
    <div className="card">
        <ProductImage src={product.image} name={product.name}/>
        <ProductInfo name={product.name} price={product.price}/>
        <ActionButtons id={product.id} isFavorite={product.isFavorite}/>
    </div>

}

ProductCard.propTypes={
    product: PropTypes.object.isRequired,
};
export default ProductCard;