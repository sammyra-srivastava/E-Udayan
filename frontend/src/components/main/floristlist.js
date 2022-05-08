import React, { useEffect, useState } from "react";
import app_config from "../../config";

import { Card, CardContent, Container, Box, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

const FloristList = () => {
  const url = app_config.backend_url;

  const [floristArray, setFloristArray] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchFlorist = () => {
    fetch(url + "/florist/getall/")
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

  const displayData = () => {
    floristArray.map(({ shopName, mobile, email, address, timings }) => {});
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
      <Card style={{ width: "1000px" }} sx={{ mt: 5 }}>
        <Container sx={{ color: "text.primary" }}>
          <CardContent>
            <Box sx={{ mt: 1 }}>
              <AddBusinessIcon />
              <Typography>Shop Name</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <CallIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <EmailIcon />
              <Typography>Mobile No</Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <AccessTimeIcon />
              <Typography>Timings</Typography>
            </Box>

            <Stack
              spacing={3}
              direction="row"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button variant="contained" style={{ cursor: "pointer" }}>
                VISIT
              </Button>
            </Stack>
          </CardContent>
        </Container>
      </Card>
    </Container>
  );
};

export default FloristList;
