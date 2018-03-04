import React, { Component } from 'react';
import MainTeacher from './mainteacher';
import CourseList from './CourseList';
import bg from './images/bg.jpeg';

class Subscribe extends Component {
	constructor(props){
		super(props);
		this.state = {
			studentClicked: false,
			teacherClicked:false,
			errorChecking: false,
			studentEntered: false, 
			teacherEntered: false,
			username:'',
			password:''
		}
	}

	handleSubmitStudent(){
		this.setState({
			studentClicked: true
		})
	}
	handleSubmitTeacher(){
		this.setState({
			teacherClicked: true
		})
	}

	handleLoginStudent(event){
		event.preventDefault();
		let checking = this.state.username;
		let passwordCheck = this.state.password;
		
	    this.props.students.map((student,index) => 
	      	{
	      		if(student.sUsername != checking){
	      			if(passwordCheck != student.sPassword){
	      				this.setState({
			      			errorChecking: true
			      		})
	      			}
	      			 	
			    }
			    console.log(student.sPassword)
			    if(student.sUsername == checking){
			    	if(passwordCheck == student.sPassword){
			    		this.setState({
				     		studentClicked: false,
							studentRegistered: false,
							teacherClicked: false,
							teacherRegistered: false,
							errorChecking: false,
				     		studentEntered: true
				     	})  
			    	}
			    }
      		})
	   console.log(this.state.username);
	    this.setState({
			sUsername: '',
			sPassword: '',
			username: checking
        });	
	}
	handleLoginTeacher(event){
		event.preventDefault();
		let name = this.state.tName;
		let checking = this.state.tUsername;
		let passwordCheck = this.state.tPassword;
	    
	    this.props.teachers.map((teacher,index) => 
	      	{
	      		if(teacher.tUsername != checking){
	      			if(passwordCheck != teacher.tPassword){
	      				this.setState({
			      			errorChecking: true
			      		})
	      			}
	      			 	
			    }
			    console.log(teacher.tPassword)
			    if(teacher.tUsername == checking){
			    	if(passwordCheck == teacher.tPassword){
			    		this.setState({
				     		studentClicked: false,
							studentRegistered: false,
							teacherClicked: false,
							teacherRegistered: false,
							errorChecking: false,
				     		teacherEntered: true
				     	})  
			    	}
			    }
      		})
	   
	    console.log(this.state.username);

	    this.setState({
			tUsername: '',
			tPassword: '',
			teachername: checking,
			//username: this.state.username
        });	
	}

	handleChangeTeacherUsername(e){
		this.setState({
			tUsername: e.target.value
		})
	}
	handleChangeTeacherPass(e){
		this.setState({
			tPassword: e.target.value
		})
	}
	handleChangeStudentUsername(e){
		this.setState({
			username: e.target.value
		})
	}
	handleChangeStudentPass(e){
		this.setState({
			password: e.target.value
		})
	}

	render(){
		let username = this.state.username;

		console.log(this.state.username);

		if(this.state.errorChecking){
		 	
		}

		if(this.state.studentClicked){
			return(
				<div className = "form" >
					<h2 className = "welcome">Welcome student </h2>
					<form className = "form-control" >
						<input className = "input-group" type = "text" placeholder = "Username" 
							onChange = {this.handleChangeStudentUsername.bind(this)}
							value = {this.state.username}
						/>
						<input className = "input-group" type = "password" placeholder = "password" 
							onChange = {this.handleChangeStudentPass.bind(this)}
							value = {this.state.password}
						/>
						<button className= "btn btn-success" onClick = {this.handleLoginStudent.bind(this)}> Log in </button>
					</form>
				</div>
			)

		}

		if(this.state.teacherClicked){
			return(
				<div className = "form" >
					<h2 className = "welcome">Welcome teacher </h2>
					<form className = "form-control" >
						<input className = "input-group" type = "text" placeholder = "Username"
							onChange = {this.handleChangeTeacherUsername.bind(this)}
							value = {this.state.tUsername}
						/>
						<input className = "input-group" type = "password" placeholder = "password" 
							onChange = {this.handleChangeTeacherPass.bind(this)}
							value = {this.state.tPassword}
						/>
						
						<button className= "btn btn-success" onClick = {this.handleLoginTeacher.bind(this)}> Log in </button>
					</form>
				</div>
				)
		}
		
		if(this.state.teacherEntered){
			return(
				<div >
			  		<MainTeacher
			  			teacherFiles = {this.props.teacherFiles}
			  			teachers = {this.props.teachers}
			          	newContents = {this.props.newContents}
			          	comments = {this.props.comments}
                        username = {this.state.username}
			  		 />
			  	</div>
				)
		}
		if(this.state.studentEntered){
			return(
				<section >
	    			<h2>Hello, {this.state.username} </h2>
	    			<CourseList
			        	files={this.props.teacherFiles}
			          	displayName = {this.state.displayName}
			          	students = {this.props.students}
			          	username = {this.state.username}
			          	newContents = {this.props.newContents}
			          	comments = {this.props.comments}
			        />
		    	</section>
			)
		}
		return(
			<div>
				<div  className= "studentteacher">
					<div>
						<div className = "form-inline">
							<label className="btnStudent"><button className="btn btn-success btn-lg" onClick = {this.handleSubmitStudent.bind(this)} > Student</button></label>
							<button className="btn btn-success btn-lg" onClick = {this.handleSubmitTeacher.bind(this)}> Teacher</button>
						</div>
					</div>	  		
				</div>
			  	<div>
			  		<img className = "bgimg" src = {bg} />
			  	</div>
	  		</div> 
  		)	
	}
}
export default Subscribe;