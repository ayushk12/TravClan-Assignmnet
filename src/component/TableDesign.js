import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

const TableDesign = () => {
    const [data, setData] = useState([]);// for handling data
    const [iserror, setIserror] = useState(false) // for handling error
    const [errorMessages, setErrorMessages] = useState([])


    // matched the table field with api data
    const columns = [
        { title: 'Avatar', field: 'avatarUrl', render: rowData => <img src={rowData.avatarUrl} style={{ width: 40, borderRadius: '50%' }} /> },

        { title: 'First Name', field: 'firstname' },
        { title: 'Last Name', field: 'lastname' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone' },
        { title: 'Premium', field: 'hasPremium' },
        { title: 'Max/Min bid', field: 'bids' },
    ];

    useEffect(() => {
        fetch('https://intense-tor-76305.herokuapp.com/merchants')
            .then((resp) => resp.json())
            .then((resp) => {
                setData(resp);
            })
            .catch(error => {
                setErrorMessage(["Cannot load user data"])
                setIserror(true)
            })
    }, []);

    return (
        <div >
            <MaterialTable title="Employee Data"
                onRowClick={(event, rowData) => {
                    // Getting bids from rowData using this link.
                    window.open(`https://intense-tor-76305.herokuapp.com/merchants/${rowData.bids}`, "_blank")
                    event.stopPropagation();
                }}
                data={data}
                columns={columns}
                options={{
                    sorting: true,
                    paging: true,
                    draggable: true,
                    filtering: true,
                }}

            />
        </div>
    );
}

export default TableDesign;


    
