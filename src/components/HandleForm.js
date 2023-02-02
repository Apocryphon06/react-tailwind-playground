import * as React from "react";
import { Button } from "@mui/material";
import DataRow from "./DataRow";
import Header from "./Header";

export default function HandleForm() {
  const [productList, setProductList] = React.useState([{}]);
  console.log("productList", productList);

  const [patient, setPatient] = React.useState();
  const [product, setProduct] = React.useState();

  const AddMoreProduct = () => {
    setProductList([...productList, { patient: patient, product: product }]);
  };

  const getData = (patient, product) => {
    console.log(patient, product);
    setPatient(patient);
    setProduct(product);
  };

  const RemoveProduct = (index) => {
    // console.log('index:', index)
    let list = [...productList];
    if (index !== -1) {
      list.splice(index, 1);
    }
    setProductList(list);
  };

  return (
    <div>
      <Header title="Select Patients & Products" />
      <div className="border rounded-lg m-5 p-5">
        {productList.map(({ item, index }) => (
          <DataRow sendData={getData} RemoveProduct={RemoveProduct} />
        ))}
      </div>

      <div className="flex justify-end items-end p-5 gap-5">
        <Button variant="outlined" onClick={AddMoreProduct}>
          Add more Product
        </Button>
      </div>
    </div>
  );
}
