import React from "react";
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton
} from "@material-ui/core";

import { Edit, Delete } from "@mui/icons-material";

const ProductionSetList = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Food Name", minWidth: 250, maxWidth: 400 },
    { label: "Variant Name", minWidth: 150, maxWidth: 200 },
    { label: "Price", minWidth: 20, maxWidth: 50 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, foodName, variant, price, action) => {
    return { sl, foodName, variant, price, action };
  };

  const rows = [
    createData(1, "Bangla Set Menu Rice Boarta", "1:2", 0, "dummy"),
    createData(2, "	Dinner Rice Package", "1:2", 0, "dummy"),
    createData(3, "	Pasta", "Spicy", 0, "dummy")
  ];

  return (
    <>
      <Button variant="outlined">Add Production</Button>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
        </Grid>

        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.foodName}</TableCell>
                  <TableCell>{row.variant}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default ProductionSetList;
