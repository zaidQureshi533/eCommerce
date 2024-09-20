import React, {useEffect, useState} from 'react';
import './orders.css';
import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {userRequest} from '../../requestMethod';
const Orders = () => {
	const [orders, setOrders] = useState();
	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get('/orders');
				setOrders(res.data ?? []);
			} catch (error) {
				console.log(error);
			}
		};
		getOrders();
	}, []);
	const columns = [
		{field: '_id', headerName: 'Order Id', width: 220},
		{field: 'userId', headerName: 'User Id', width: 220},
		{field: 'amount', headerName: 'Amount', width: 200},
		{field: 'status', headerName: 'Status', width: 200},
	];
	return (
		<div className='container'>
			<Box width='100%'>
				<DataGrid
					columns={columns}
					rows={orders}
					getRowId={(row) => row._id}
					initialState={{pagination: {paginationModel: {pageSize: 5}}}}
					pageSizeOptions={[5, 10, 20]}
					checkboxSelection
					disableRowSelectionOnClick
				></DataGrid>
			</Box>
		</div>
	);
};

export default Orders;
