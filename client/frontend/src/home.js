import React, { Component } from 'react';
import Subscribe from './subscribe';
import {students, teachers, teacherFiles} from './students';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			students: students,
			teachers: teachers,
			teacherFiles: teacherFiles,
    	newContents: [
    		{
    			newContent: ''
    		}
    	],
		}
	}
	render(){
		return(
			<div>
				{this.state.teacherFiles.map((files, index)=> 
					<div className = "login" key = {index} > 
						<Subscribe
							students = {this.state.students}
							teachers = {this.state.teachers}
							teacherFiles = {this.state.teacherFiles}
							newContents = {this.state.newContents}
							comments = {files.comments}
							username = {this.state.username}
							password = {this.state.password}
						/>
					</div>
				)}
				<div className = "footer"> 
					<h5 className = "contactUs"> Contacts us </h5>
					<div className = "icons">
						<a href = "https://www.facebook.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/1_Media_social_website_facebook-256.png" />
						</a>
						<a href = "https://www.twitter.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/12_Media_social_website_Twitter-256.png" />
						</a>
						<a href = "https://www.instagram.com/">
							<img className = "iconBtn rounded-circle" src= "https://cdn2.iconfinder.com/data/icons/social-media-2151/512/2_Media_social_website_instagram-256.png" />
						</a>
					</div>
					<div className = "icons">
						E-mail address: zhaziraun@gmail.com
					</div>
				</div>
			</div>
		);
	}
}
export default Home;