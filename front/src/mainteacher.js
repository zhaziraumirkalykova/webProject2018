import React, {Component} from 'react';
import MainTeacherPage from './mainTeacherPage';

class MainTeacher extends Component {
	render(){	
		return(
			<div className="row">
			    {this.props.teacherFiles.map((files, i) => {
				    return(
				    	<div className="col-sm-6">
					      	<section key={files.id}>
						      	<MainTeacherPage
						        	teacherFiles = {this.props.teacherFiles}
						         	text={files.text}
						          	image = {files.image}
						          	content = {files.content}
						          	newContents = {this.props.newContents}
						          	comments = {this.props.comments}
	                            	username = {this.props.username}
				          		/>
					      	</section>	
		      			</div>
				    )
				})}
			</div>
		);
	}
}
export default MainTeacher;