import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
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

const TOTAL = 1352831;

export default function AnalyticsNewUsers({no_new_users}) {
  return (
    <RootStyle>
      <Typography variant="h3">{no_new_users}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Ingredients
      </Typography>
    </RootStyle>
  );
}
