
import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import {productDetail} from '../actions/productActions'
import {useDispatch,useSelector} from 'react-redux';
import {addProduct} from '../actions/cartActions'



function ProductDetailPage() {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const productInfo=useSelector(state=>state.productInfo);

  const {loading,error,product} = productInfo;

  useEffect(()=>{
    dispatch(productDetail(productId))
  },[dispatch,productId])

  const addTocartHandler =(product)=>{
    dispatch(addProduct(product))
  }


  


// (REACT QUERY )
//  async function getProductById() {
//     return await axios.get(`https://innocenti.onrender.com/products/${productId}`);
//   }

//   const { data, isLoading, isError, error } = useQuery(
//     ["getProductById"],
//     getProductById
//   );
  

  function Loader() {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          Ruko jara ...Sabr kro...Page khul rha hai
        </p>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }


  return (
    <div>
      <div className="shadow px-24 py-6 ">
        <p className="text-2xl tracking-wider font-semibold">
          <span className="mr-2">Product</span> Summary
        </p>
      </div>

      {/* ==============================about the product section======================== */}
      <div className="flex justify-center items-start px-24 py-6 space-x-4 bg-gray-100">
        <div  className=" w-full ">
          <img style={{height:"350px",width:"100%"}} src={product.image} />
        </div>

        <div className="px-2 py-6">
          <p className="text-2xl ">
            Name:{" "}
            <span className="ml-2 tracking-wider font-semibold">
              {product.name}
            </span>
          </p>
          <p className="text-2xl mt-2">
            Price:{" "}
            <span className="ml-2 tracking-wider font-semibold">
              $ {product.price}
            </span>
          </p>
          <p className="text-xl leading-8 mt-4">
            Description: <span className="ml-2">{product.description}</span>
          </p>
          <button
            onClick={()=>addTocartHandler(product)}
            className="px-8 py-3 hover:text-black hover:bg-gray-400 transition duration-300 bg-black rounded-full text-white tracking-wider mt-8 ml-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
