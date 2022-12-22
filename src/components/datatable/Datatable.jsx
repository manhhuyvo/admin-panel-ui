import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './datatable';
import { userRows, userColumns, productRows, productColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Datatable = ({target}) => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
            return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration: 'none'}}>
                            <div className='viewButton'>View</div>
                        </Link>
                        <div className='deleteButton'>Delete</div>
                    </div>
                );
            },
        },
    ];

  return (
    <div className='datatable'>
            <div className='dataTableTitle'>
                <Link to={`/${target}s/new`} style={{textDecoration: 'none'}} className="link">
                    <AddIcon className='icon'/>
                    Add New {target}
                </Link>
            </div>
            {
                target === "User" ? (
                    <DataGrid
                        rows={userRows}
                        columns={userColumns.concat(actionColumn)} //Merge 2 arrays
                        pageSize={7}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                ) : (
                    <DataGrid
                        rows={productRows}
                        columns={productColumns.concat(actionColumn)} //Merge 2 arrays
                        pageSize={7}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                )
            }
    </div>
  )
}

export default Datatable