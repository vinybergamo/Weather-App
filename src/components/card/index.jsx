import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "./styles";

const BasicCard = (props) => {
  return (
    <Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent className="card-content">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.city}
          </Typography>
          <Typography variant="h2" component="div">
            {props.temp}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.region}, {props.country}
          </Typography>
          <img src={props.src} />
          <Typography variant="body2">{props.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BasicCard;
