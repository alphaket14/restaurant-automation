import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
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

const TOTAL = 234;

export default function AnalyticsBugReports({no_bug_reports}) {
  return (
    <RootStyle>
      <Typography variant="h3">{no_bug_reports}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
       Users
      </Typography>
    </RootStyle>
  );
}
