import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
const PointOfSaleDetails = ({ pointofsales }) => (
  <Card>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell >
              
                TABLE NUMBERs
              </TableCell>
              <TableCell >
              
              TOTAL PRICE
            </TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pointofsales.map((pointofsale) => (
              <TableRow hover key={pointofsale.id}>
                <TableCell>{pointofsale.tableno}</TableCell>
                <TableCell>{pointofsale.totalprice}</TableCell>
                <TableCell>
                  {pointofsale.color === "" ? (
                    <Chip label={pointofsale.status} size="small" />
                  ) : (
                    <Chip
                      style={{ color: "#ffffff" }}
                      color={pointofsale.color}
                      label={pointofsale.status}
                      size="small"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);

export default PointOfSaleDetails;
