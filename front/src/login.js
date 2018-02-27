import React, { Component } from 'react';
import AccountTeacher from './teacheraccount';
import MainTeacher from './mainteacher';
import Main from './main';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			studentClicked: false,
			studentRegistered: false,
			teacherClicked: false,
			teacherRegistered: false,
			errorChecking: false,
			teacherEntered: false,
			studentEntered: false, 

			sId: 1,
			sName: '',
			sSurname: '',
			sUsername: '',
			sPassword: '',

			tId: 1,
			tName: '',
			tSurname: '',
			tUsername: '',
			tPassword: '',
		}
	}

	handleChangesUsername(e){
    	this.setState({
          	sUsername: e.target.value
      	})
  	}
  	handleChangesName(e){
  		this.setState({
  			sName: e.target.value
  		})
  	}

  	handleChangesSurname(e){
  		this.setState({
  			sSurname: e.target.value
  		})
  	}
  	handleChangesPass(e){
  		this.setState({
  			sPassword: e.target.value
  		})
  	}
  	handleChangetUsername(e){
    	this.setState({
          	tUsername: e.target.value
      	})
  	}
  	handleChangetName(e){
  		this.setState({
  			tName: e.target.value
  		})
  	}

  	handleChangetSurname(e){
  		this.setState({
  			tSurname: e.target.value
  		})
  	}
  	handleChangetPass(e){
  		this.setState({
  			tPassword: e.target.value
  		})
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

	handleRegisterStudent(){
		this.setState({
			studentRegistered: true,
			errorChecking:false

		})
	}
	handleRegisterTeacher(){
		this.setState({
			teacherRegistered: true,
			errorChecking:false
		})
	}

	handleRegisterStudentDone(e){
		console.log('hello student')
		e.preventDefault();
    	let arr = this.props.students;
        arr.push({sId: this.state.sId, sName: this.state.sName, sSurname: this.state.sSurname, 
        	sUsername: this.state.sUsername, sPassword: this.state.sPassword});
        let n = this.state.sId;
        n.toString();
        this.setState({
			students: arr,
			sName: '',
			sSurname: '',
			sUsername: '',
			sPassword: '',
			sId: n + 1,
			studentEntered: true,
			studentClicked: false,
			studentRegistered: false,
			teacherClicked: false,
			teacherRegistered: false,
			errorChecking: false,
        });

       // console.log(this.props.students);
	}
	handleRegisterTeacherDone(e){
		console.log('hello teacher')
		e.preventDefault();
    	let arr = this.props.teachers;
        arr.push({tId: this.state.tId, tName: this.state.tName, tSurname: this.state.tSurname, 
        	tUsername: this.state.tUsername, tPassword: this.state.tPassword});

        let n = this.state.tId;
        n.toString();
        this.setState({
			teachers: arr,
			tName: '',
			tSurname: '',
			tUsername: '',
			tPassword: '',
			tId: n + 1,
			studentClicked: false,
			studentRegistered: false,
			teacherClicked: false,
			teacherRegistered: false,
			errorChecking: false,
			teacherEntered: true

        });

       // console.log(this.props.teachers);
	}

	handleLoginStudent(){
		console.log('hi')
		let checking = this.state.sUsername;
		let passwordCheck = this.state.sPassword;
		let inlist;
	    let password;
		console.log(checking)
		console.log(password)
	    this.props.students.map((student,index) => 
	      	inlist = student.sUsername,
	      	)
	    this.props.students.map((student,index) => 
	      	password = student.sPassword,
	      	)
	    //console.log(inlist)
	    if(checking != inlist && passwordCheck != password){
	      	this.setState({
	      		errorChecking: true
	      	})
	    }else{
	     	this.setState({
	     		studentClicked: false,
				studentRegistered: false,
				teacherClicked: false,
				teacherRegistered: false,
				errorChecking: false,
	     		studentEntered: true
	     	})
	    }   
	    this.setState({
			sUsername: '',
			sPassword: ''
        });
	}
	handleLoginTeacher(){
		let checking = this.state.tUsername;
		let passwordCheck = this.state.tPassword;
		let inlist;
	    let password;
		console.log(checking)
		console.log(password)
	    this.props.teachers.map((teacher,index) => 
	      	inlist = teacher.tUsername,
	      	)
	    this.props.teachers.map((teacher,index) => 
	      	password = teacher.tPassword,
	      	)
	    if(checking != inlist && passwordCheck != password){
	      	this.setState({
	      		errorChecking: true
	      	})
	    }else{
	     	this.setState({
	     		studentClicked: false,
				studentRegistered: false,
				teacherClicked: false,
				teacherRegistered: false,
				errorChecking: false,
				teacherEntered: true
	     	})
	    }   
	    this.setState({
			tUsername: '',
			tPassword: ''
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
			sUsername: e.target.value
		})
	}
	handleChangeStudentPass(e){
		this.setState({
			sPassword: e.target.value
		})
	}


	render(){

		var studentBtnView = {};
		var teacherBtnView = {};
		var loginStudentView = {};
		var registerStudentView = {};
		var loginTeacherView = {};
		var registerTeacherView = {};

		var errorMessage ={};
		var teacherEnteredView = {};
		var optionView = {};
		var enteredView = {};

		teacherEnteredView.display = 'none';
		enteredView.display = 'none';

		if(!this.state.errorChecking){
			errorMessage.display = 'none';
		}else{
			errorMessage.display = 'block';

		}

		if(this.state.studentClicked){
			studentBtnView.display = 'none';
			teacherBtnView.display = 'none';
			registerStudentView.display = 'none';
			registerTeacherView.display ='none';
			loginTeacherView.display ='none';
			//errorMessage.display = 'none';
			//teacherEnteredView.display = 'none';

		}else{
			loginStudentView.display = 'none';
			loginTeacherView.display = 'none';
			registerStudentView.display = 'none';
			registerTeacherView.display ='none';
			//errorMessage.display = 'none';

		}
		if(this.state.studentRegistered){
			loginStudentView.display ='none';
			registerStudentView.display = 'block';
		}

		if(this.state.teacherClicked){
			studentBtnView.display = 'none';
			teacherBtnView.display = 'none';
			registerStudentView.display = 'none';
			registerTeacherView.display ='none';
			loginTeacherView.display ='block';
		}else{
			loginTeacherView.display = 'none';
			registerTeacherView.display ='none';
		}
		if(this.state.teacherRegistered){
			loginTeacherView.display ='none';
			registerTeacherView.display = 'block';
		}
		if(this.state.teacherEntered){
			teacherEnteredView.display = 'block';
			optionView.display = 'none';
		}
		if(this.state.studentEntered){
			enteredView.display = 'block';
			optionView.display = 'none';
		}

		return(
			<div>
				<div className= "studentteacher" style = {optionView} >
					<div className = "form-inline">
						<label className="btnStudent"><button className="btn btn-success btn-lg" onClick = {this.handleSubmitStudent.bind(this)} style = {studentBtnView} > Student</button></label>
						<button className="btn btn-success btn-lg" onClick = {this.handleSubmitTeacher.bind(this)} style = {teacherBtnView}> Teacher</button>
					</div>
				</div>
				<div style = {loginStudentView} className = "form" >
					<h2>welcome student </h2>
					<form className = "form-control" >
						<input className = "input-group" type = "text" placeholder = "Username" 
							onChange = {this.handleChangeStudentUsername.bind(this)}
							value = {this.state.sUsername}
						/>
						<input className = "input-group" type = "password" placeholder = "password" 
							onChange = {this.handleChangeStudentPass.bind(this)}
							value = {this.state.sPassword}
						/>
						<button className= "btn btn-success" onClick = {this.handleLoginStudent.bind(this)}> Log in </button>
						<p> if you don't have an account, please <a href = '#' onClick = {this.handleRegisterStudent.bind(this)}> Sign in </a> </p>
					</form>
				</div>

				<div style = {registerStudentView} className = "form" > 
					<form className="form-control">
						<input className="input-group" type = "text" placeholder="Enter your first name" onChange = {this.handleChangesName.bind(this)} value = {this.state.sName} />
						<input className="input-group" type = "text" placeholder="Enter your last name" onChange = {this.handleChangesSurname.bind(this)} value = {this.state.sSurname} />
						<input className="input-group" type = "text" placeholder="Username" onChange = {this.handleChangesUsername.bind(this)} value = {this.state.sUsername} />
						<input className="input-group" type = "password" placeholder="New password" onChange = {this.handleChangesPass.bind(this)} value = {this.state.sPassword} />
					</form>
					<button className= "btn btn-success" onClick = {this.handleRegisterStudentDone.bind(this)} > Sign in </button>
				</div>

				<div style = {loginTeacherView} className = "form" >
					<h2>welcome teacher </h2>
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
						<p> if you don't have an account, please <a href = '#' onClick = {this.handleRegisterTeacher.bind(this)}> Sign in </a> </p>
					</form>
				</div>

				<div style = {registerTeacherView} className = "form" > 
					<form className="form-control">
						<input  className="input-group" type = "text" placeholder="Enter your first name" onChange = {this.handleChangetName.bind(this)}  value = {this.state.tName} />
						<input className="input-group" type = "text" placeholder="Enter your last name" onChange = {this.handleChangetSurname.bind(this)}  value = {this.state.tSurname} />
						<input className="input-group" type = "text" placeholder="Username" onChange = {this.handleChangetUsername.bind(this)}  value = {this.state.tUsername} />
						<input className="input-group" type = "password" placeholder="New password" onChange = {this.handleChangetPass.bind(this)} value = {this.state.tPassword} />
					</form>
					<button className= "btn btn-success" onClick = {this.handleRegisterTeacherDone.bind(this)} > Sign in </button>
				</div>
				<div className="alert alert-danger" style = {errorMessage} >
				    You don't has an account! Please, register.
			  	</div>
			  	<div style = {teacherEnteredView} >
			  		<MainTeacher
			  			teacherFiles = {this.props.teacherFiles}
			  			teachers = {this.props.teachers}
			  		 />
			  	</div>

			  	{this.props.students.map((student, sId)=>
					<div style = {enteredView} key = {student.sId}>
		
						<h3> Hello, {student.sName} {student.sSurname} </h3>
				  		{this.props.teacherFiles.map((files, i) => {
						    return(
						      <section key={files.id}>
						        <Main
						          files={files.text}
						         // handleDone={this.props.handleDone}
						          //handleDelete={this.props.handleDelete}
						           />
						      </section>
						    )
						})}
				  	</div>
			  		)}
			  	
			</div>

			);
	}
}
export default Login;