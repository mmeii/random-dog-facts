import React from "react";
import Button from "@mui/material/Button";
import DropdownBox from "../DropdownBox";

const SubmissionForm = () => {
  // I want to get # of dog facts
  return (
    <div>
      <p>I want to get <DropdownBox /> of dog facts</p>
      <Button variant="outlined">Generate</Button>
    </div>
  );
};

export default SubmissionForm;
