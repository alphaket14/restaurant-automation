import moment from "moment";

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
  TableSortLabel,
  Tooltip,
} from "@material-ui/core";

const OrderDetails = ({ orders }) => (
  <Card>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ORDER</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>PAYMENT</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    DATE
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>TABLE NUMBER</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell style={{ color: "#007bff" }}>{order.ref}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>
                  {moment(order.createdAt).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  {order.tableno}
                </TableCell>
                <TableCell>
                  {
                    order.color === "" ? (
                      <Chip label={order.status} size="small" />
                    ) : (
                      <Chip style={{ color: '#ffffff' }} color={order.color} label={order.status} size="small" />
                    )
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    {/* <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box> */}
  </Card>
);

export default OrderDetails;
