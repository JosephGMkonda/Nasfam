

import '../styles/Product.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'



function createData(
  name: string,
  typeOfRice: string,
  quantity: number,
  totalMoney: string,
  
) {
  return { name, typeOfRice,quantity, totalMoney};
}


const rows = [
  createData('joseph mkonda', "Kalulu", 60, "200000"),
  createData('jane banda', "Differ", 30, "300000"),
  createData('Moya phiri', "Kilombelo", 40, "2000000"),

];





function Product() {

 

  return (
    <div className='farmers'>

      <div className='farmersTop'>
        <div className='farmersTopLeft'>
          <div className='farmersTopLeftSearch'>
            <input placeholder="search by name" className='search' />
            <button className='searchBtn'>Search</button>

          </div>

        </div>

        <div className='farmersTopRight'>
            <Link to="/addProduct">
            
          <button className="createButton">create</button>

          </Link>

        </div>

      </div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Full Name</TableCell>
            
            <TableCell align="right">Type of Rice</TableCell>
            <TableCell align="right">Quantity(kg)</TableCell>
            <TableCell align="right">Total(K)</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.typeOfRice}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.totalMoney}</TableCell>
              <TableCell align="right">delete  edit</TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Product;






