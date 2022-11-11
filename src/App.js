import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';


function App() {
  
const columns = useMemo(() => [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Phone',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: 'dob',
  },
  {
    cell: row => <ActionComponent row={row} onClick={handleAction}>Action</ActionComponent>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
]);
const [thing, setThing] = useState();
const ActionComponent = ({  row, onClick  }) => {
  const clickHandler = () => onClick(row);   

 return <button onClick={clickHandler}>Action</button>;
};

const handleAction = (row)   =>{ 
  console.log(row)
  setThing(row)};

  return (
    <div className="App">
      <h3>DataTable in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default App;
