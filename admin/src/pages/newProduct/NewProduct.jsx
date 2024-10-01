import './newProduct.css';
import {addProduct, uploadImage} from '../../store/apiCalls';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Layout from '../../components/layout/Layout';
import {
	Button,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Checkbox,
	ListItemText,
	Chip,
	Box,
} from '@mui/material';
import {publicRequest} from '../../requestMethod';
import {useRef} from 'react';

export default function NewProduct() {
	const [file, setFile] = useState(null);
	const fileInputRef = useRef();
	const [newProduct, setNewProduct] = useState({
		title: '',
		desc: '',
		size: '',
		color: '',
		price: '',
		inStock: true,
	});
	const [categoryItems, setCategoryItems] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const dispatch = useDispatch();
	const {isFetching} = useSelector((state) => state.product);
	// GET CATEGORIES
	useEffect(() => {
		const getCategoryItems = async () => {
			try {
				const res = await publicRequest.get(`/categories`);
				setCategoryItems(res.data.map((category) => category.title));
			} catch (error) {
				console.error(error);
			}
		};
		getCategoryItems();
	}, []);

	// SELECT PRODUCT CATEGORIES
	const handleCategoriesChange = (event) => {
		setSelectedCategories(event.target.value);
		setNewProduct({...newProduct, categories: event.target.value});
	};

	// SET NEW PRODUCT DETAIL
	const handleChange = (e) => {
		const {name, value} = e.target;
		const arrayFields = ['size', 'color'];
		if (arrayFields.includes(name)) {
			setNewProduct({
				...newProduct,
				[name]: value.split(','),
			});
		} else {
			setNewProduct({...newProduct, [name]: value});
		}
	};

	const handleAddProduct = (e) => {
		e.preventDefault();
		const product = newProduct;
		if (file) {
			const fileName = Date.now() + file.name;
			product.img = fileName;
			const data = new FormData();
			data.append('name', fileName);
			data.append('file', file);
			uploadImage(data);
		}
		addProduct(dispatch, product);
		handleReset();
	};

	const isFormValid = () => {
		const {title, desc, size, color, price, categories} = newProduct;
		return (
			title &&
			desc &&
			size &&
			color &&
			price &&
			categories &&
			selectedCategories.length > 0 &&
			file
		);
	};

	const handleReset = () => {
		setSelectedCategories([]);
		setFile(null);
		fileInputRef.current.value = '';
		setNewProduct({
			title: '',
			desc: '',
			size: '',
			color: '',
			price: '',
			inStock: true,
		});
	};
	return (
		<Layout>
			<div className='new-product-container'>
				<div className='newProductForm'>
					<h1 className='addProductTitle'>New Product</h1>
					<div className='addProductItem'>
						<form className='addProductForm' encType='multipart/form-data'>
							<TextField
								value={newProduct.title}
								size='small'
								type='text'
								label='Title'
								name='title'
								onChange={handleChange}
							/>
							<TextField
								value={newProduct.desc}
								size='small'
								type='text'
								label='Description'
								name='desc'
								onChange={handleChange}
							/>
							<FormControl size='small'>
								<InputLabel>Categories</InputLabel>
								<Select
									multiple
									value={selectedCategories}
									label='Categories'
									name='Categories'
									onChange={handleCategoriesChange}
									renderValue={(selected) => (
										<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
											{selected.map((value) => (
												<Chip key={value} label={value} />
											))}
										</Box>
									)}
									inputProps={{'aria-label': 'categories'}}
								>
									{categoryItems.map((c) => (
										<MenuItem key={c} value={c}>
											<Checkbox checked={selectedCategories.indexOf(c) > -1} />
											<ListItemText primary={c} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<TextField
								value={newProduct.size}
								size='small'
								type='text'
								label='Sizes'
								name='size'
								onChange={handleChange}
							/>
							<TextField
								value={newProduct.color}
								size='small'
								type='text'
								label='Colors'
								name='color'
								onChange={handleChange}
							/>
							<TextField
								value={newProduct.price}
								size='small'
								type='number'
								label='Price'
								name='price'
								onChange={handleChange}
							/>
							<FormControl size='small'>
								<InputLabel>Stock</InputLabel>
								<Select
									value={newProduct.inStock}
									label='Stock'
									name='inStock'
									onChange={handleChange}
								>
									<MenuItem value='true'>Yes</MenuItem>
									<MenuItem value='false'>No</MenuItem>
								</Select>
							</FormControl>
							<Button
								component='label'
								role={undefined}
								variant='contained'
								tabIndex={-1}
								size='small'
								color='success'
								startIcon={<CloudUploadIcon />}
							>
								Upload files
								<input
									ref={fileInputRef}
									style={{display: 'none'}}
									type='file'
									id='file'
									name='file'
									accept='.jpg,.jpeg,.png,.jfif,.webp'
									onChange={(e) => {
										setFile(e.target.files[0]);
									}}
								/>
							</Button>
							{file && <span>{file.name.slice(0, 20)}...</span>}
							<div className='form-buttons'>
								<Button
									disabled={isFetching || !isFormValid()}
									className='addProductButton'
									onClick={handleAddProduct}
									variant='contained'
									size='large'
									sx={{alignSelf: 'flex-start'}}
								>
									{isFetching ? 'Creating' : 'Create'}
								</Button>
								<Button
									disabled={isFetching}
									className='ResetButton'
									onClick={handleReset}
									variant='contained'
									size='large'
									sx={{alignSelf: 'flex-start'}}
								>
									Reset
								</Button>
							</div>
						</form>
					</div>
				</div>
				<div className='productImg'>
					{file && <img src={URL.createObjectURL(file)} alt='' />}
				</div>
			</div>
		</Layout>
	);
}
