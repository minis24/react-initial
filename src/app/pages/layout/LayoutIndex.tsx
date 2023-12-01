import { Outlet, } from 'react-router-dom';
const LayoutIndex = () => {


	return (
		<>
			<div id="main-wrapper">
				{/* <LayoutHeader />
				<LayoutAside /> */}
				<div className="page-wrapper">
					{/* <PageBreadcrumb /> */}
					<div className="container-fluid">
						{/* Start Page Content ========= */}
						<Outlet />
						{/* End Page Content ============ */}
					</div>
					<footer className="footer">All rights reserved by ©2023. SECUCEN Co.,LTD.</footer>
				</div>
			</div>
		</>
	);
};

export default LayoutIndex;
