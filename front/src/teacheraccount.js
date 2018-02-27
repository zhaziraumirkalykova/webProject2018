import React, {Component} from 'react';

class AccoutTeacher extends Component {
	render(){
		return(
			<div>
				<h4> Hello, {this.props.teachers.tName} </h4>
			</div>
			);
	}
}
export default AccoutTeacher;