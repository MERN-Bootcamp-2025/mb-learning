import { useState } from "react"
import productsData from "../data/products"
import ProductCard from "./ProductCard";
import '../App.css';
import FilterBar from "./FilterBar";



const ProductShowcase = ()=>{
    const [products, setProduct] = useState(productsData);
    const [selectedCategories,setSelectedCategories] = useState('');
    const [searchQuery,setSearchQuery] = useState('');

    const filtered = products.filter(p =>
    (selectedCategories === '' || p.category === selectedCategories)&&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const categories = [...new Set(products.map(p=>p.category))];

    return(
        <div className="showcase">
            <FilterBar
                categories ={categories}
                selectedCategories = {selectedCategories}
                searchQuery = {searchQuery}
                onSelectCategory={setSelectedCategories}
                onSearch={setSearchQuery}
            />
            <div className="grid">
                {
                    filtered.length>0 ? (
                        filtered.map(product => <ProductCard key={product.id} product={product}/>)
                    ) : (
                        <p>No Products found.</p>
                    )
                }
            </div>
        </div>
    )
}

export default ProductShowcase;