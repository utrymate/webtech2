import {useEffect, useState} from "react";
import {authHeader} from "../helpers/auth-header";
export default initialProducts => {
  const [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const fetchData=  async () => {
      const result = await fetch("http://localhost:5000/api/products/", {
          headers: authHeader()
      })
          .then(res => res.json())
          .then(
              (result) => {
                return result;
              },
              (error) => {
                return [];
              }
          );
      setProducts(result);
    };
    fetchData();
  }, []);
  return {
    products,
    addProduct: (name, price) => {
      fetch("http://localhost:5000/api/products/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + JSON.parse(localStorage.getItem('user')).authdata
        },
        body: JSON.stringify({name: name, price: price})
      })
          .then(res => res.json())
          .then(
              (result) => {
                console.log({id: result.id, name: name, price: price})
                setProducts([...products, {_id: result.id, name: name, price: price}]);
              },
              (error) => {
              }
          )

    },
    removeProduct: productID => {
      const updatedProducts = products.filter(p => p._id !== productID);
      fetch("http://localhost:5000/api/products/"+productID, {
        method: 'DELETE',
        headers: authHeader()
      })
          .then(res => res.json())
          .then(
              (result) => {
                setProducts(updatedProducts);
              },
              (error) => {}
          )
    },
  };
};
