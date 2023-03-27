import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const numbers = ["1", "2", "3", "4", "5"];

const DropdownBox = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={numbers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Number" />}
      />
    </div>
  );
};

export default DropdownBox;
