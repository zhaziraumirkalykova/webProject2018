import React, { Component } from 'react';
import Subscribe from './subscribe';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			students: [
				{
					sId: 0,
					sName: 'Zhazira',
					sSurname: 'Umirkalykova',
					sUsername: 'student',
					sPassword: 'student'
				},
				{
					sId: 1,
					sName: 'Zhanna',
					sSurname: 'Ivanova',
					sUsername: 'Ivanova',
					sPassword: 'zhanna'
				},
				{
					sId: 2,
					sName: 'Aslan',
					sSurname: 'Maratov',
					sUsername: 'Maratov',
					sPassword: 'pass123'
				},
				{
					sId: 3,
					sName: 'Elena',
					sSurname: 'Dobreva',
					sUsername: 'Dobreva',
					sPassword: 'checkpass'
				},
				{
					sId: 4,
					sName: 'Zhazira',
					sSurname: 'Umirkalykova',
					sUsername: 'zhaziraun',
					sPassword: 'student'
				},
			],
			teachers: [
				{
					tId: 0,
					tName: 'Shyryn',
					tSurname: 'Zhanatova',
					tUsername: 'teacher',
					tPassword: 'teacher'
				}
			],
			teacherFiles: [
				{
					id: 0,
					image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfSvV9GmoUpUhJlL70f4dg0424cxN2d-WXJ8ebEdWfJQH2oJOVg',
					text: 'A1 Beginner',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},	
				{
					id: 1,
					image: 'https://ws.usembassy.gov/wp-content/uploads/sites/18/2015/06/education_top_photo.jpg',
					text: 'A2 Elementary',
					content: 'hello from Elementary',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},
				{
					id: 2,
					image: 'https://images.contentful.com/c5jex75dbvaq/3F6M9FiQ6AkcuUKs8cyWAs/a045b015eb51b83a873fc023ff17f354/Graduates-home.png?fm=jpg&w=2880&h=1000&fl=progressive',
					text: 'B1 Intermediate',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},
				{
					id: 3,
					image: 'https://i.cbc.ca/1.4448164.1513264013!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mandatory-sex-ed.jpg',
					text: 'B2 Upper-Intermediate',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},
				{
					id: 4,
					image: 'https://www.expectmorearizona.org/wp-content/uploads/2017/08/29901534001_5434892995001_5434893943001-vs.jpg',
					text: 'C1 Advanced',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},
				{
					id: 5,
					image: 'https://mediaplanet.azureedge.net/images/111/3607/re_shutterstock_131624870.jpg',
					text: 'C2 Proficiency',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					comments: [
		        		{
		        			comment: ''
		        		}
		        	],
				},
				
			],

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