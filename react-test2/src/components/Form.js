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
			<form onSubmit={this.props.handleSubmit}>
				<label>Title:</label>
				<input type="text" name="currentTitle" value={this.props.currentTitle} onChange={this.props.handleChange} />
				<textarea name="currentDetails" value={this.props.currentDetails} onChange={this.props.handleChange}>
				</textarea>
				<div>
					<input type="submit" value="Add note" />
				</div>
			</form>
		)
	}
}

export default Form;