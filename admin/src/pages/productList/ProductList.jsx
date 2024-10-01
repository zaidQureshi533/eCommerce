import './productList.css';
import {DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts, deleteProduct} from '../../store/apiCalls';
import {Box, Tooltip} from '@mui/material';
import MyModal from '../../components/myModal/MyModal';
import {Button} from '@mui/material';
import {Add, Edit} from '@mui/icons-material';
import Layout from '../../components/layout/Layout';

export default function ProductList() {
	document.title = 'Products';
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const PF = process.env.PUBLIC_FOLDER;

	useEffect(() => {
		getProducts(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteProduct(dispatch, id);
	};

	const columns = [
		{field: '_id', headerName: 'ID', width: 150},
		{
			field: 'product',
			headerName: 'Product',
			width: 300,
			renderCell: (params) => {
				return (
					<div className='productListItem'>
						<img className='productListImg' src={PF + params.row.img} alt='' />
						{params.row.title}
					</div>
				);
			},
		},
		{
			field: 'inStock',
			headerName: 'Stock',
			width: 150,
			headerAlign: 'center',
			align: 'center',
			renderCell: (params) => {
				return params.row.inStock === true ? 'Yes' : 'No';
			},
		},
		{
			field: 'price',
			headerName: '$ Price',
			width: 160,
			headerAlign: 'center',
			align: 'center',
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 250,
			renderCell: (params) => {
				return (
					<div
						style={{display: 'flex', alignItems: 'center', columnGap: '10px'}}
					>
						<Link to={`/product/${params.row._id}`}>
							<Button
								variant='contained'
								color='success'
								size='small'
								endIcon={<Edit />}
							>
								Edit
							</Button>
						</Link>
						<MyModal
							title='Are You Sure, You Want To Delete The Product?'
							label='Delete'
							action={handleDelete}
						>
							<Tooltip title='Delete Product'>
								<DeleteOutlineIcon
									color='action'
									className='productListDelete'
								/>
							</Tooltip>
						</MyModal>
					</div>
				);
			},
		},
	];

	return (
		<Layout>
			<div className='productList'>
				<Link to='/newproduct'>
					<Button
						variant='contained'
						startIcon={<Add />}
						sx={{width: 'auto', marginBlock: '20px'}}
					>
						Add Product
					</Button>
				</Link>
				<Box sx={{minHeight: '90vh', width: '100%'}}>
					<DataGrid
						rows={products}
						columns={columns}
						getRowId={(row) => row._id}
						initialState={{
							pagination: {
								paginationModel: {
									pageSize: 10,
								},
							},
						}}
						pageSizeOptions={[5, 10]}
						checkboxSelection
						disableRowSelectionOnClick
					/>
				</Box>
			</div>
		</Layout>
	);
}
