import React from 'react';

//stateless component
const Header = (props) => {
	return (
		<div className="navbar-fixed">          
			<nav className="teal lighten-2">
				<div className="nav-wrapper">
					<div className="brand-logo center">{props.name} Notepad</div>
				</div>
			</nav>        		
		</div>        
	);
}

export default Header;

