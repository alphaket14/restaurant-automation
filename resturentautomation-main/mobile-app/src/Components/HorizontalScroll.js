import React from "react";
import { Grid } from "@material-ui/core";
import ScrollContainer from "react-indiana-drag-scroll";
const HorizontalScroll = (props) => {
  return (
    <>
      <ScrollContainer className="scroll-container" style={{ display: "flex", padding: "0 10px" }}>
        {props.array.map((el) => {
          return (
            <Grid
              item
              container
              style={{ marginRight: 10, alignItems: "center" }}
              direction="column"
              rowGap={1}
            >
              <Grid
                item
                style={{
                  position: "relative",
                  height: 80,
                  width: 80,
                  borderRadius: "50%",
                  overflow: "hidden"
                }}
              >
                <img
                  style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
                  src={el.image}
                />
              </Grid>
              <Grid item align="center">
                {el.title}
              </Grid>
            </Grid>
          );
        })}
      </ScrollContainer>
    </>
  );
};
export default HorizontalScroll;
