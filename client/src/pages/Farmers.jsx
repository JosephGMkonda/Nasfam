import '../styles/farmers.css'
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
  gender: number,
  age: number,
  district: number,
  
) {
  return { name, gender, age, district,};
}


const rows = [
  createData('joseph mkonda', "Male", 60, "Karonga"),
  createData('jane banda', "Female", 30, "Karonga"),
  createData('Moya phiri', "Male", 40, "Nkhata-bay"),
  createData('Steve banda', "Male", 24, "Nkhotakota"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
  createData('Ester mumbi', "Female", 45, "Karonga"),
];





function Farmers() {

 

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
        <Link to="/addFarmer">
          <button className="createButton">create</button>
          </Link>

        </div>

      </div>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className="tableHead">
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">District</TableCell>
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
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.district}</TableCell>
              <TableCell align="right">delete  edit</TableCell>
              
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default Farmers;






