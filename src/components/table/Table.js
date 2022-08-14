import './Table.css';
import MaterialTable from 'material-table';

const Table = () => {
  
  const data = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ];

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ];

  return (
    <MaterialTable
    title="Basic Search Preview"
    columns={columns}
    data={data}        
    options={{ search: true  }}
  />
  )
}

export default Table