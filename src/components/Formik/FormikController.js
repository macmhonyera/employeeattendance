import React from "react";
import Select from "./Select.js";


function FormikController(props) {
  const { control, ...rest } = props;
  switch (control) {
    
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
