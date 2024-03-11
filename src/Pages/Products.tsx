import ProductHeaders from "../Components/Products/ProductHeaders";
import ProductSearch from "../Components/Products/ProductSearch";
import { useDispatch } from "react-redux";
import useFetchData from "../Api/useFetchData";
import { useEffect, useState } from "react";
import { initialFetch } from "../features/productsSlice";
import ProductDisplay from "../Components/Products/ProductDisplay";
import ErrorPage from "./ErrorPage";
import Loading from "./Loading";

const Products = () => {
  const dispatch = useDispatch();
  const ProductData = useFetchData("Products");

  useEffect(() => {
    ProductData.error ? null : dispatch(initialFetch(ProductData.data));
  }, [ProductData.data]);

  const [AnimaitionComplete, setAnimaitionComplete] = useState(false);

  const ProductPage = () => {
    return (
      <div>
        <ProductHeaders />
        <ProductSearch />
        <ProductDisplay />
      </div>
    );
  };

  return ProductData.error && AnimaitionComplete ? (
    <ErrorPage ErrorMessage={`${ProductData.error}`} />
  ) : ProductData.loading || !AnimaitionComplete ? (
    <Loading setAnimationComplete={setAnimaitionComplete} />
  ) : AnimaitionComplete ? (
    <ProductPage />
  ) : null;
};

export default Products;
