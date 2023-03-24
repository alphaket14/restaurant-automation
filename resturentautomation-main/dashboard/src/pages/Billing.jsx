import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const billings=[];
//[{ref_no:'ref_no',supplier:'supplier',total_price:'total_price',paid_price:'paid_price',due_price:'due_price'}]
const Billing =()=>{
        return (
                <>
                  <Helmet>
                    <title>Billings | Client Portal</title>
                  </Helmet>
                  <Box
                    sx={{
                      backgroundColor: "background.default",
                      minHeight: "100%",
                      padding: "30px",
                    }}
                  >
                    <Container maxWidth={false}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="h4" sx={{ my: "20px" }}>
                        Billings
                        </Typography>
                      </div>
                      <Paper>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>SN</TableCell>
                              <TableCell>REFERENCE NO.</TableCell>
                              <TableCell>DATE</TableCell>
                              <TableCell>GRAND TOTAL</TableCell>
                              <TableCell>DUE</TableCell>
                              <TableCell>ADDED BY</TableCell>
                              <TableCell>ACTIONS</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {billings.length > 0 ? (
                              billings?.map((billing) => (
                                <TableRow hover key={billing.ref_no}>
                                  <TableCell style={{}}>{billing.ref_no}</TableCell>
                                  <TableCell>{billing.supplier}</TableCell>
                                  <TableCell>{billing.total_price}</TableCell>
                                  <TableCell>{billing.paid_price}</TableCell>
                                  <TableCell align="right">{billing.due_price}</TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <Typography variant="subtitle2" sx={{ p: 2 }}>
                            
                              </Typography>
                            )}
                          </TableBody>
                        </Table>
                      </Paper>
                    </Container>
                  </Box>
                </>
              );  
            
};
export default Billing;