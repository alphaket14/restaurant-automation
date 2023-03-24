import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
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
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const orders = [
  {
    id: uuid(),
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
    },
    createdAt: 1555016400000,
    status: "Pending",
    color: "",
    tableno: "28",
    type:"Ground floor"
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "Delivered",
    color: "success",
    tableno: "8",
    type:"Ground floor"
  },
  {
    id: uuid(),
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    },
    createdAt: 1554930000000,
    status: "Refunded",
    color: "error",
    tableno: "5",
    type:"Ground floor"
  },
  {
    id: uuid(),
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    },
    createdAt: 1554757200000,
    status: "Pending",
    color: "",
    tableno: "2",
    type:"Ground floor"
  },
  {
    id: uuid(),
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    },
    createdAt: 1554670800000,
    status: "Delivered",
    color: "success",
    tableno: "1",
    type:"Ground floor"
  },
  {
    id: uuid(),
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
    },
    createdAt: 1554670800000,
    status: "Delivered",
    color: "success",
    tableno: "4",
    type:"Ground floor"
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ORDER</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    PAID
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
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
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
    <Box
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
    </Box>
  </Card>
);

export default LatestOrders;
