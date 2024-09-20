import './product.css';
import Chart from '../../components/chart/Chart';
import {Button, MenuItem, TextField} from '@mui/material';
import {CloudUpload} from '@mui/icons-material';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {userRequest} from '../../requestMethod';
import {useEffect, useState, useMemo} from 'react';
import {Select} from '@mui/material';
import {uploadImage, updateProduct} from '../../store/apiCalls';
import {useDispatch} from 'react-redux';
export default function Product() {
	const dispatch = useDispatch();
	const {productId} = useParams();
	const [productStats, setProductStats] = useState([]);
	const product = useSelector((state) =>
		state.product.products.find((product) => product._id === productId)
	);
	const [updatedProduct, setUpdatedProduct] = useState({
		title: product.title,
		desc: product.desc,
		price: product.price,
		inStock: product.inStock,
	});

	const PF = process.env.PUBLIC_FOLDER;

	const [file, setFile] = useState(null);
	const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	);
	useEffect(() => {
		const getProductStats = async () => {
			try {
				const res = await userRequest.get(`/orders/income?pid=${productId}`);
				res.data.map((item) => {
					setProductStats((prev) => [
						...prev,
						{name: MONTHS[item._id - 1], Sales: item.total},
					]);
				});
			} catch (err) {
				console.log(err);
			}
		};
		getProductStats();
	}, [productId]);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUpdatedProduct({...updatedProduct, [name]: value});
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		const updatedData = updatedProduct;
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			updatedProduct.img = filename;
			data.append('name', filename);
			data.append('file', file);
			uploadImage(data);
		}
		updateProduct(dispatch, product._id, updatedData);
	};
	return (
		<div className='product'>
			<h1 className='productTitle'>Product</h1>

			<div className='productTop'>
				<div className='productTopLeft'>
					<Chart
						data={productStats}
						dataKey='Sales'
						title='Sales Performance'
					/>
				</div>
				<div className='productTopRight'>
					<div className='productInfoTop'>
						<img src={PF + product.img} alt='' className='productInfoImg' />
						<span className='productName'>{product.title}</span>
					</div>
					<div className='productInfoBottom'>
						<div className='productInfoItem'>
							<b className='productInfoKey'>Product Id:</b>
							<span className='productInfoValue'>{product._id}</span>
						</div>
						<div className='productInfoItem'>
							<b className='productInfoKey'>InStock:</b>
							<span className='productInfoValue'>
								{product.inStock === true ? 'Yes' : 'No'}
							</span>
						</div>
						<span></span>
					</div>
				</div>
			</div>
			<div className='productBottom'>
				<form className='productForm'>
					<div className='productFormLeft'>
						<label>Product Name</label>
						<TextField
							onChange={handleChange}
							name='title'
							variant='standard'
							value={updatedProduct.title}
							sx={{marginBottom: '20px'}}
						/>

						<label>Product Description</label>
						<TextField
							onChange={handleChange}
							name='desc'
							variant='standard'
							value={updatedProduct.desc}
							sx={{marginBottom: '20px'}}
						/>
						<label>Price</label>
						<TextField
							onChange={handleChange}
							name='price'
							variant='standard'
							value={updatedProduct.price}
							sx={{marginBottom: '20px'}}
						/>
						<label>In Stock</label>
						<Select
							onChange={handleChange}
							name='inStock'
							id='inStock'
							value={updatedProduct.inStock}
							size='small'
							variant='standard'
						>
							<MenuItem value='true'>Yes</MenuItem>
							<MenuItem value='false'>No</MenuItem>
						</Select>
					</div>
					<div className='productFormRight'>
						<form className='productUpload' encType='multipart/form-data'>
							<Button
								component='label'
								variant='contained'
								tabIndex={-1}
								startIcon={<CloudUpload />}
							>
								Upload file
								<input
									onChange={(e) => setFile(e.target.files[0])}
									type='file'
									id='file'
									name='file'
									style={{display: 'none'}}
								></input>
							</Button>
							<Button variant='contained' onClick={handleUpdate}>
								Update
							</Button>
						</form>
						<img
							src={file ? URL.createObjectURL(file) : PF + product.img}
							alt=''
							className='productUploadImg'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
