import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import AddFlorist from "./addFlorist";
import AddFlower from "./addFlower";

const ManageFlower = () => {
  const [floristArray, setFloristArray] = useState([]);
  const [selFlorist, setSelFlorist] = useState("");
  const [loading, setLoading] = useState(true);

  

  const url = app_config.backend_url;

  const fetchFlorist = () => {
    fetch(url + "/florist/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setFloristArray(data);
      });
  };

  useEffect(() => {
    fetchFlorist();
  }, []);

  const displayAddFlower = () => {
    if (selFlorist) {
      return <AddFlower floristId={selFlorist} />;
    }
  };

  return (
    <div>
      <Container maxWidth="xxl">
        <div className="manageflower-top"></div>
        <div className="card">
          <div className="card-body">
            <FormControl fullWidth>
              <InputLabel id="select-florist">
                Select Florist to Manage Flowers
              </InputLabel>
              <Select
                labelId="select-florist"
                value={selFlorist}
                label="Select Florist to Manage Flowers"
                onChange={(e) => setSelFlorist(e.target.value)}
              >
                {floristArray.map(({ _id, shopName }) => (
                  <MenuItem value={_id}>{shopName}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {displayAddFlower()}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ManageFlower;
