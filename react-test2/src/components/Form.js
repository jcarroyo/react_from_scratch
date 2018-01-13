import React from 'react';

//statefull component
class Form extends React.Component {
	handleChange(event){
		this.props.handleChange(event);
	}
	handleSubmit(event){
		this.props.handleSubmit(event);
	}
	render(){
		return (
			<form onSubmit={this.props.handleSubmit} className="col s12">
				<div className="row">
					<div className="input-field col s3">
						<input type="text" name="currentTitle" value={this.props.currentTitle} onChange={this.props.handleChange} />
					</div>
					<div className="input-field col s7">
						<input type="text" name="currentDetails" value={this.props.currentDetails} onChange={this.props.handleChange} />						
					</div>										
					<div className="input-field col s2">
						<button className="btn-large wave-effect waves-light"
						 type="submit" name="action">Add Note</button>
					</div>
				</div>				
			</form>
		)
	}
}

export default Form;