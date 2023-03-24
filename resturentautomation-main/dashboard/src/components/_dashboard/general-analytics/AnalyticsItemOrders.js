import { Icon } from '@iconify/react';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
// material
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

export default function AnalyticsItemOrders({no_item_orders}) {
  return (
    <RootStyle>
      <Typography variant="h3">{no_item_orders}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Customers
      </Typography>
    </RootStyle>
  );
}
