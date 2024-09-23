import './list.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function List() {
  const rows = [
    {
      id: 1,
      name: 'Acer Nitro 5',
      customer: 'John Doe',
      date: '1 March',
      amount: '$120.00',
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 2,
      name: 'Playstation 5',
      customer: 'Michael Doe',
      date: '1 March',
      amount: '$120.00',
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Xbox Series S',
      customer: 'Jane Doe',
      date: '1 March',
      amount: '$120.00',
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 4,
      name: 'Nintendo Switch',
      customer: 'Sarah Doe',
      date: '1 March',
      amount: '$120.00',
      method: 'Cash on Delivery',
      status: 'Pending',
    },
    {
      id: 5,
      name: 'Nintendo Switch',
      customer: 'Sarah Doe',
      date: '1 March',
      amount: '$120.00',
      method: 'Cash on Delivery',
      status: 'Pending',
    },
  ];
  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Id</TableCell>
              <TableCell className="tableCell">Nome</TableCell>
              <TableCell className="tableCell">customer</TableCell>
              <TableCell className="tableCell">amount</TableCell>
              <TableCell className="tableCell">date</TableCell>
              <TableCell className="tableCell">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
