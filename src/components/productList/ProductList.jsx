import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
   return (
      <div className="pl">
         <div className="pl-texts">
            <h1 className="pl-title">Create & inspire.</h1>
            <p className="pl-desc">
               Here is a creative portfolio that has been waiting for you.
               Beautiful projects, stunning portfolio styles & a whole lot more awaits
               inside.
            </p>
         </div>
         <div className="pl-list">
            {products.map((item) => (
               <Product key={item.id} img={item.img} />
            ))}
         </div>
      </div>
   );
};

export default ProductList;