import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

function DataRow({ sendData, RemoveProduct }) {
  const [patient, setPatient] = React.useState();

  const handlePatientSelect = (event) => {
    setPatient(event.target.value);
  };

  const [product, setProduct] = React.useState();

  const handleProductSelect = (event) => {
    setProduct(event.target.value);
  };

  useEffect(() => {
    sendData(patient, product);
  }, [patient, product, sendData]);

  //   const [productList, setProductList] = React.useState([{}]);

  //   const AddMoreProduct = () => {
  //     setProductList([...productList, {}]);
  //   };
  return (
    <div className="py-3 rounded-lg grid grid-flow-col grid-2 gap-5 items-center">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="display-name">Patient</InputLabel>
          <Select
            label={"Patient"}
            InputLabelProps={{ shrink: true }}
            labelId="display-name"
            id="demo-simple-select"
            value={patient}
            onChange={handlePatientSelect}
          >
            <MenuItem value={"Hrithik"}>Hrithik</MenuItem>
            <MenuItem value={"John"}>John</MenuItem>
            <MenuItem value={"Jack"}>Jack</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor="display-name">Tests & Products</InputLabel>
          <Select
            label="Test & Products"
            InputLabelProps={{ shrink: true }}
            labelId="display-name"
            id="demo-simple-select"
            value={product}
            onChange={handleProductSelect}
          >
            <MenuItem value={"test1"}>test1</MenuItem>
            <MenuItem value={"test2"}>test2</MenuItem>
            <MenuItem value={"test3"}>test3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        sx={{ width: "minWidth" }}
        onClick={RemoveProduct}
        variant="outlined"
        color="error"
      >
        Remove
      </Button>
    </div>
  );
}

export default DataRow;
