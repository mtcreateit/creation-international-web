import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RefundsCancellations(props) {
	return <div>
		<Header/>
		<div className="flex flex-col items-center px-12">
			<div className="mt-8">
				<p className="text-5xl text-center font-semibold">Return and refund policy</p>
			</div>
			<div className="max-w-6xl flex flex-col">
				<div className="mt-12 border-b pb-24">
					<ul>
						<li className="ml-2 mt-2"><strong>•</strong> Returns and Cancellations
						</li>
						<li className="ml-2 mt-2"><strong>•</strong> Physical Returns, Non-Subscription Products
							& Shipping
						</li>
					</ul>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">RETURNS & NON-SUBSCRIPTION CANCELLATIONS</p>
					<ul>
						<li className="ml-2 mt-2"><strong>•</strong> 100% money back guarantee covers price of
							product only. 100% money back guarantee does not cover shipping and handling fee due
							to the fact that the customer made the decision to try product, therefore the customer
							accepts to pay the fee to ship the product.
						</li>
						<li className="ml-2 mt-2"><strong>•</strong> Customers must contact our support
							department for a RMA (Return Authorization Number). This number must be displayed on
							the outside of all return packages. Returned packages without RMA numbers will not be
							accepted.
						</li>
						<li className="ml-2 mt-2">Once a return is received or valid refund request submitted,
							the refund process will take no more than 30 days. All refunds will be either returned
							to the original credit card OR- mailed in check form to the billing name and address.
							International orders that will be refunded back to the original credit card, and
							PayPal orders will be credited back to the PayPal account.
						</li>
						<li className="ml-2 mt-2"><strong>•</strong> You have THIRTY (30) Days from the date of
							the original purchase to return the product to receive your refund. Any return
							received after the THIRTY (30) DAY time limit will not be processed.
						</li>
						<li className="ml-2 mt-2"><strong>•</strong> To ensure that your product is not lost or
							damaged, we strongly recommend sending the product certified mail with a tracking
							number. If we do not receive the product back and the customer does not have proof
							that the product was returned we cannot issue a refund.
						</li>
						<li className="ml-2 "><strong>•</strong> Valid proof of returning a product includes:
							delivery confirmation or signature required via USPS. If the customer has delivery
							confirmation or signature required, then a full refund will be issued.
						</li>
						<li className="ml-2 "><strong>•</strong> Due to loss or missing or slow mail, we will
							honor any package that is postmarked for up to one year after the purchase of the
							product.
						</li>
						<li className="ml-2 "><strong>•</strong> Subscriptions, Trials and Digital Products
						</li>
					</ul>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">FREE TRIALS</p>
				</div>
				<div className="mt-2">
					<p>Your Creation International membership may start with a free trial. The free trial
						period of your membership lasts for one month, or as otherwise specified during sign-up
						and is intended to allow new and certain former members to try the service.</p>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">FREE TRIAL ELIGIBILITY</p>
				</div>
				<div className="mt-2">
					<p>Eligibility is determined by Creation International at its sole discretion and we may
						limit eligibility or duration to prevent free trial abuse. We reserve the right to
						revoke the free trial and put your account on hold in the event that we determine that
						you are not eligible. Members of households with an existing or recent Creation
						International membership are not eligible. We may use information such as device ID,
						method of payment or an account email address used with an existing or recent Creation
						International membership to determine eligibility. For combinations with other offers,
						restrictions may apply.</p>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">TRIAL BILLING</p>
				</div>
				<div className="mt-2">
					<p>We will charge your Payment Method for your monthly membership fee at the end of the
						free trial period and your membership will automatically renew monthly unless you cancel
						your membership prior to the end of the free trial period. To view the monthly
						membership price and end date of your free trial period, visit our website and click the
						“Billing details” link on the “Account” page.</p>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">BILLING CYCLE</p>
				</div>
				<div className="mt-2">
					<p>The membership fee for the Creation International service any other charges you may
						incur in connection with your use of the service, such as taxes and possible transaction
						fees, will be charged on a monthly basis to your Payment Method on the calendar day
						corresponding to the commencement of the paying portion of your membership until your
						membership is cancelled. Membership fees are fully earned upon payment. In some cases
						your payment date may change, for example if your Payment Method has not successfully
						settled or if your paid membership began on a day not contained in a given month. Visit
						our website and click on the “Cancel Membership” link on the “My Profile” page to see
						your next payment date. We may authorize your Payment Method in anticipation of
						membership or service-related charges through various methods, including authorizing it
						up to approximately one month of service as soon as you register. In some instances,
						your available balance or credit limit may be reduced to reflect the authorization
						during your free trial period.</p>
				</div>
				<div className="mt-24">
					<p className="text-2xl font-semibold">CANCELLATION</p>
				</div>
				<div className="mt-2 pb-40">
					<p>You can cancel your Creation International membership at any time, and you will
						continue to have access to the Creation International service through the end of your
						monthly billing period. We do not provide refunds or credits for any partial-month
						membership periods. To cancel, go to the “My Profile” page on our website, select
						‘Cancel Membership’, and follow the instructions for cancellation. If you cancel your
						membership, your account will automatically close at the end of your current billing
						period. To see when your account will close, click “Billing details” on the “Account”
						page.</p>
					<p>Excessive returns will not be accepted. Refunds will not be given to any one customer
						for one specific product more than twice. There is an unlimited amount of orders that a
						customer can place for one specific product, but the money back guarantee is void after
						a customer has used it for one specific product more than twice.</p>
					<p>To ensure that your product is not lost or damaged, we strongly recommend sending the
						product certified mail with a tracking number. If we do not receive the product back and
						the customer does not have proof that the product was returned we cannot issue a
						refund.</p>
					<p>Valid proof of returning a product includes: delivery confirmation or signature
						required via USPS. If the customer has delivery confirmation or signature required, then
						a full refund will be issued.</p>
					<p>Due to loss or missing or slow mail, we will honor any package that is postmarked for
						up to one year after the purchase of the product.</p>
				</div>
			</div>
		</div>
		<Footer/>
	</div>;
}
