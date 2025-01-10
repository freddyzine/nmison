import { useState } from "react"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Fade, Icon, IconButton, Modal, TextField, Typography } from "@mui/material";

export function Instrument({ instruments }){
  const ins = JSON.parse(instruments)
// const [open, setOpen] = useState(false)
  // function addIns(data){
  //   setInstruments(s => [...s, data])
  // }
  return(
    <div>
      <TableContainer sx={{ maxWidth: 650, width: "100%" }} style={{maxWidth: 400}}  component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {
                ["Name", "Make", "Model", "Capacity", "Qty", ""].map(i => (
                  <TableCell key={i}>{i}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {ins.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.make}
                </TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.capacity}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <IconButton color="error">
                  <Icon color="error" na />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
// eslint-disable-next-line
function Form({ open, handleClose, handleSubmit}){
  const init = {
    name: "", model: "", make: "",
    capacity: "", quantity: 1
  }
  const [payload, setPayload] = useState(init)
  const onchange = (field) => (e) => setPayload(s => ({...s, [field]: e.target.value}))

  function submit(e){
    e.preventDefault()
    handleSubmit(payload)
    setPayload(init)
    handleClose()
  }
  return(
    <Modal
      open={/*open*/ Form}
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">Add an instrument</Typography>
          <form  onSubmit={submit} className="space-y-[15px] mt-3">
            <TextField label="Name" value={payload.name} onChange={onchange("name")} required variant="outlined" />
            <TextField label="Make" value={payload.make} onChange={onchange("make")} required variant="outlined" />
            <TextField label="Model" value={payload.model} onChange={onchange("model")} required variant="outlined" />
            <TextField label="Capacity" value={payload.capacity} onChange={onchange("capacity")} required variant="outlined" />
            <TextField label="Quantity" value={payload.quantity} onChange={onchange("quantity")} defaultValue={1} type="number" variant="outlined" />
            <Button 
              style={{ marginTop: 10, float: "right" }}  
              variant="contained"
              type="submit"
            >Add Instrument</Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};
