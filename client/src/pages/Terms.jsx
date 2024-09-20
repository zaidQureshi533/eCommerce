import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Terms = () => {
	return (
		<>
			<Navbar />
			<Announcement />
			<div className="m-3 p-5 rounded-md">
				<h1 className='font-extrabold text-xl'>Change and Return Policy</h1>

				<section id='overview' className='my-4'>
					<h2 className="font-bold text-lg">Overview</h2>
					<p>
						At eCommerce, we want you to be completely satisfied with your
						purchase. If you need to change or return an item, please review our
						policy below to ensure a smooth process.
					</p>
				</section>

				<section id='change-policy' className='my-4'>
					<h2 className="font-bold text-lg">Change Policy</h2>
					<p>
						We accept changes within <strong>30 days</strong> of the original
						purchase date. To be eligible for a change, the item must:
					</p>
					<ul className="list-disc list-inside">
						<li>Be in its original, unused condition with tags attached.</li>
						<li>
							Be accompanied by the original receipt or proof of purchase.
						</li>
					</ul>
					<p>
						To request a change, please contact our customer service team at{' '}
						<a href='mailto:support@yourstore.com'>support@yourstore.com</a>{' '}
						with your order number and details of the item you wish to exchange.
					</p>
				</section>

				<section id='return-policy' className='my-4'>
					<h2 className="font-bold text-lg">Return Policy</h2>
					<p>
						We accept returns within <strong>30 days</strong> of the original
						purchase date. To be eligible for a return, the item must:
					</p>
					<ul className="list-disc list-inside">
						<li>Be in its original, unused condition with tags attached.</li>
						<li>
							Be accompanied by the original receipt or proof of purchase.
						</li>
					</ul>
					<p>To return an item, please follow these steps:</p>
					<ol className="list-decimal list-inside">
						<li>
							Contact our customer service team at{' '}
							<a href='mailto:support@yourstore.com'>support@yourstore.com</a>{' '}
							to request a return authorization.
						</li>
						<li>Pack the item securely in its original packaging.</li>
						<li>
							Ship the item to the address provided by our customer service
							team. Please note that return shipping costs are the
							responsibility of the customer unless the return is due to an
							error on our part.
						</li>
					</ol>
					<p>
						Refunds will be processed to the original payment method once we
						receive and inspect the returned item. Please allow{' '}
						<strong>7-10 business days</strong> for the refund to appear in your
						account.
					</p>
				</section>

				<section id='non-returnable-items' className='my-4'>
					<h2 className="font-bold text-lg">Non-Returnable Items</h2>
					<p>
						For health and safety reasons, we cannot accept returns on the
						following items:
					</p>
					<ul className="list-disc list-inside">
						<li>Underwear and swimwear</li>
						<li>Custom-made or personalized items</li>
					</ul>
				</section>

				<section id='contact' className='my-4'>
					<h2 className="font-bold text-lg">Contact Us</h2>
					<p>
						If you have any questions about our change and return policy, please
						feel free to reach out to us at{' '}
						<a href='mailto:support@yourstore.com'>support@yourstore.com</a> or
						call us at (123) 456-7890.
					</p>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default Terms;
