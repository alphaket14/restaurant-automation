import React from "react";
import { Box, Checkbox } from "@material-ui/core";
const ProductionSetting = (props) => {
  return (
    <>
      <h2>Set Production Cost Per Unit</h2>
      <hr color="grey" />
      <Box
        component="div"
        style={{
          margin: "30px 0",
          boxSizing: "border-box",
          padding: 10,
          background: "black",
          borderRadius: 10
        }}
      >
        <p>
          NOTE***: A restaurant should have a fixed recipe for a particular food For making your
          work easy. This application has an auto production system which describes like this : If
          you have a sufficient amount of ingredients in your restaurant stock then it will
          automatically upgrade the amount of production for every sale. Let me explain to you how:
          Suppose, set a recipe for fried rice and a bbq chicken in your system once in the module
          Recipe Management.Add production with the ingredients, serving unit, variant, and price.
          Now you have got an order of 3 fried rice and 2 bbq chicken. You do not need to make this
          production again and again. Just select the food and make the order done from POS. The
          system will make the dish ready and it will automatically update the in-stock and
          out-stock quantity in the REPORT (Production-wise) and the ingredients will be reduced
          from the REPORT (Kitchen-wise).
        </p>
      </Box>
      <Checkbox id="check" />
      <label htmlFor="check">Select Auto Production</label>
    </>
  );
};
export default ProductionSetting;
