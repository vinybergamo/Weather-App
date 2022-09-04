import TextField from "@mui/material/TextField";

const InputSearch = (props) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search city"
        variant="outlined"
        onChange={props.onChange}
        size="small"
      />
    </>
  );
};

export default InputSearch;
