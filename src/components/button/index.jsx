import * as React from "react";
import Button from "@mui/material/Button";

const ButtonSearch = (props) => {
  return (
    <>
      <Button type={props.type} variant="contained" size={props.size}>
        {props.text}
      </Button>
    </>
  );
};

export default ButtonSearch;
