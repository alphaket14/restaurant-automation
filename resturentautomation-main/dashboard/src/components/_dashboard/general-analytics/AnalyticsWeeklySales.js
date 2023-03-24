import { Icon } from '@iconify/react';
import androidFilled from '@iconify/icons-ant-design/android-filled';
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

const TOTAL = 714000;

export default function AnalyticsWeeklySales({weekly_sales}) {
  return (
    <RootStyle>
      {/* <Typography variant="h3">{weekly_sales} ₹</Typography> */}
      <Typography variant="h3">{weekly_sales}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Food Items
      </Typography>
    </RootStyle>
  );
}
