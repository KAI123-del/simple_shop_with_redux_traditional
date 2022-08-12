import { useNavigate } from "react-router-dom";
import { productList } from "../actions/productActions";
import { addProduct } from "../actions/cartActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  let navigate = useNavigate();
  const productInfoHandler = (item) => {
    navigate(`/products/${item._id}`);
  };

  const dispatch = useDispatch();
  const productHome = useSelector((state) => state.productHome);

  const { loading, error, products } = productHome;

  //  (REACT QUERY )
  // async function getProducts() {
  //   return await axios.get(`https://innocenti.onrender.com/products`);
  // }

  // const { data, isError, error, isLoading } = useQuery(
  //   ["products"],
  //   getProducts
  // );
  // console.log("data", data);

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  
  const cartItemHandler = (product) => {
    dispatch(addProduct(product));
  };


  function Products() {
    return (
      <div style={{height:"100%"}} className="grid grid-cols-12 gap-6 px-24  pt-4 pb-8">
        {products.map((item) => (
          <>
            <div className=" shadow-xl pt-2 pb-4 border px-2 shadow-gray-200   col-span-4 rounded-lg">
              <div className="   bg-gray-100 rounded-t-lg ">
                <img
                  src={item.image}
                  style={{ height: "350px", width: "100%" }}
                />
              </div>
              <div className="flex justify-between items-center py-3 px-4">
                <div className=" text-lg font-semibold">
                  <p className="">{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => productInfoHandler(item)}
                    className="bg-lime-500 px-6 py-2 rounded-full text-medium shadow text-lime-100 hover:text-lime-500 hover:bg-lime-100 transition duration-300">
                    Product Info
                  </button>
                </div>
              </div>
              <div className="col-span-4">
                <button
                  onClick={() => cartItemHandler(item)}
                  className="px-8 hover:bg-gray-200 hover:text-black transition duration-300 py-3 mt-4 bg-black rounded-full w-full text-white tracking-wider ">
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  function Loader() {
    return (
      <div style={{height:'100%'}} className="fixed top-0 left-0 right-0 bottom-0 w-full  z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
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
    <div className="m-0  p-0">
      <Products />
    </div>
  );
}

export default Home;
