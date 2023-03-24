import React from 'react';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Tooltip, IconButton, Button } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const TableReservation = () => {


    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
        <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Reservation</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    fullWidth
                    label="Table Number"
                    type="number"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Submit
            </Button>
            </DialogActions>
        </Dialog>

        <Container>
            <h2 style={{ marginTop: '20px' }}>Tables</h2>
            <Grid sx={{ mt: 2 }} container spacing={3}>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px', backgroundColor: 'gray' }}>
                    <center>
                    Table 1
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px', backgroundColor: 'gray' }}>
                    <center>
                    Table 2
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px' }}>
                    <center>
                    Table 3
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px', backgroundColor: 'gray' }}>
                    <center>
                    Table 4
                    </center>
                </Paper>
                </Grid>
                
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px' }}>
                    <center>
                    Table 5
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px', backgroundColor: 'gray' }}>
                    <center>
                    Table 6
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px' }}>
                    <center>
                    Table 7
                    </center>
                </Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper sx={{ padding: '20px' }}>
                    <center>
                    Table 8
                    </center>
                </Paper>
                </Grid>
            </Grid>



            <h2 style={{ marginTop: '40px' }}>Table Reservation Request</h2>
            <TableContainer sx={{ mt: 4 }} >
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Slno</TableCell>
                        <TableCell align="center">Full Name</TableCell>
                        <TableCell align="center">Table For</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={1}>
                        <TableCell component="th" scope="row">
                            1
                        </TableCell>
                        <TableCell align="center">Test User</TableCell>
                        <TableCell align="center">8</TableCell>
                        <TableCell align="center">01-12-2021 17:50</TableCell>
                        <TableCell align='center'>

                            <Tooltip title='Approve'>
                                <IconButton
                                    color='primary'
                                    onClick={handleClickOpen}
                                    aria-label='upload picture'
                                    component='span'
                                >
                                    <CheckIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Reject'>
                                <IconButton
                                    aria-label='upload picture'
                                    component='span'
                                >
                                    <CancelIcon />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>


            <h2 style={{ marginTop: '40px' }}>Table Reserved Today</h2>
            <TableContainer sx={{ mt: 4, mb: 8 }} >
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Slno</TableCell>
                        <TableCell align="center">Full Name</TableCell>
                        <TableCell align="center">Table For</TableCell>
                        <TableCell align="center">Time</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell align="center">Test User</TableCell>
                            <TableCell align="center">8</TableCell>
                            <TableCell align="center">01-12-2021 11:02</TableCell>
                        </TableRow>

                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                2
                            </TableCell>
                            <TableCell align="center">My User</TableCell>
                            <TableCell align="center">2</TableCell>
                            <TableCell align="center">26-12-2021 12:05</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>

        </>
    )
}

export default TableReservation
