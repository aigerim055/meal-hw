import React, {useState} from 'react';
import {Link} from "react-router-dom";
const Header = () => {
	
	const [value, setValue] = useState('')
	
	return (
		<header>
			<div className="container">
				<div className="header">
					<div className="logo">
						<Link to={'/'}>Logo</Link>
					</div>
					<div className="nav">
						<input id={'search'} type="text" onChange={(e) => {
							setValue(e.target.value);
						}}/>
						<button className={'search'}>
							<Link to={`/search/${value}`}>search</Link>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;