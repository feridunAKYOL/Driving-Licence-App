import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../freeTest/FreeTest.css';

const TestNavbar = ({ situationNo, testLength }) => {
	return (
		<Navbar collapseOnSelect expand="lg" className="color-navbar">
			<Navbar.Brand>
				<h3 className="free">Free Test</h3>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Navbar>
					<Navbar.Brand>
						<h2 className="nav-position text-center mr-5">
							{situationNo} out of {testLength}
						</h2>
					</Navbar.Brand>
					<Navbar.Brand href="/">
						<Button variant="light">Home</Button>{' '}
					</Navbar.Brand>
					<Navbar.Brand href="/results">
						<Button variant="light">Return to the Results</Button>{' '}
					</Navbar.Brand>
				</Navbar>
			</Navbar.Collapse>
		</Navbar>
	);

};

export default TestNavbar;
