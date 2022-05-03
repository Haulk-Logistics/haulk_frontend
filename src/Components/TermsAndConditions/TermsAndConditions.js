import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import LogoBar from '../LogoBar/LogoBar';
import style from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
  return (
		<div>
			<LogoBar />
			<div className={style.TandC__container}>
				<div className={style.TandC__content}>
					<h2>Terms and Conditions</h2>
					<p>
						The entire agreement between Haulk logistics and the enrolled
						customer, shipper, transporter and/or consignee, as the case may be
						consists of: (i) the terms on any quote prepared by Haulk for
						Customer, (ii) the Terms and Conditions of Transportation Service in
						Nigeria, and (iii) any additional terms and conditions proposed by
						Haulk in writing and signed by Customer ((i) through (iii)
						collectively, the “Agreement)”. The Agreement shall become binding
						when accepted by Customer either by acknowledgment or performance by
						Haulk. These Terms and Conditions of Transportation Services shall
						apply to all shipments scheduled by Customer and may be amended from
						time to time by Haulk, in its sole discretion. Any terms and
						conditions proposed by Customer which are additional to or
						inconsistent with the terms and conditions contained in the
						Agreement shall be void, unless specifically agreed to by Haulk in
						writing, signed by Haulk’s duly authorized representative.
						<br />
						<br />
						Haulk is a (i) haulage service for purposes of nigerian domestic
						ground transportation, (ii) haulage service and/or indirect air
						carrier for purposes of air transportation, and (iii) freight
						forwarder for purposes of ocean transportation. Haulk reserves the
						right, in its sole discretion, to refuse to schedule any shipment at
						any time.
						<br />
						<br />
						“Goods” refers to cargo transported, including all pieces which are
						tendered to, and accepted by, haulk on a single bill of lading.
					</p>
				</div>
				<div className={style.TandC__btn}>
					<Link to='/' className={style.TandC__btnLink1}>
						<button type='submit'>No, I disagree</button>
					</Link>
					<Link to='/book-truck' className={style.TandC__btnLink2}>
						<button type='submit'>Yes, I Agree</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default TermsAndConditions;