import React,{useContext} from "react";
import { CartContext } from "../../store/CartContext";
import { useParams } from "react-router-dom";
import { Products } from "../ProductList";
import '../ProductList.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const history=useHistory();
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const AddCart = () => {
    const productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
  };

  return (
    <div className="container">
    <button style={{width:'1rem',height:'1rem',border:'none',fontWeight:'bold',marginTop:'.5rem'}} onClick={()=>{history.goBack()}}>Back</button>
    <div className="row">
      
      <div className="col-md-6">
        <img src={product.image} alt="Meri Kahani Album" className="img-fluid" style={{height:'18rem',marginTop:'.5rem',width:'25rem',borderRadius:'5px'}} />
        <img src={product.image2} alt="img" style={{height:'8rem',marginTop:'2px',marginBottom:'8px',width:'12rem',borderRadius:'5px'}} ></img>
        <img src={product.image3} alt="img" style={{height:'8rem',marginTop:'2px',marginBottom:'8px',width:'12rem',marginLeft:'1rem', borderRadius:'5px'}} ></img></div>
      
      <div className="col-md-6" style={{fontFamily:'serif'}}>
        <h1>{product.heading}</h1>
        <p>Artist:{product.name}</p>
        <p>Genre: Bollywood, Pop</p>
        <p>Release Date: {product.date}</p>
        <p>Label: Sony Music</p>
        <p >Description:{product.des}</p>
        <button className="btn btn-primary" onClick={AddCart}>Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
