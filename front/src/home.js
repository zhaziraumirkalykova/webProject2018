import React, { Component } from 'react';
import Login from './login';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			students: [
				// {
				// 	// sId: 0,
				// 	// sName: 'Zhazira',
				// 	// sSurname: 'Umirkalykova',
				// 	// sUsername: 'student',
				// 	// sPassword: 'student'
				// }
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
					text: 'The first task',
				},
				// {
				// 	id: 1,
				// 	text: 'The second task'
				// }
			],

			//id: '',
		    text: '',
		}
	}
	render(){
		return(
			<div>
				<Login
					students = {this.state.students}
					teachers = {this.state.teachers}
					sId = {this.state.sId}
					sName = {this.state.sName}
					sSurname = {this.state.sSurname}
					sUsername = {this.state.sUsername}
					sPassword = {this.state.sPassword}
					teacherFiles = {this.state.teacherFiles}
				/>
			</div>
		);
	}
}
export default Home;