import React from 'react';

import Layout from './hoc/Layout/Layout';
import WorkForce from './containers/WorkForce/WorkForce';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<Layout>
				<p>WorkForce</p>
			</Layout>
		</div>
	);
}

export default App;
