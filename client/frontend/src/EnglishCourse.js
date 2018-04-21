import React, { Component } from 'react';
import client from './client';  
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: '',
      students: [], 
      isSelected: false,
      details: [],
      comments: [],
      newMaterial: '',
      selectedDetail: [],
      iddd: 0,
      curCourseId: 0,
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this); 
    this.handleCreateMaterial = this.handleCreateMaterial.bind(this);
  //  this.handleClickedTitle = this.handleClickedTitle.bind(this);
    this.handleDeleteMaterial = this.handleDeleteMaterial.bind(this);

  }

  componentDidMount(){
    client.getCourses((courses) => {
      this.setState({
        items: courses
      });
    });

    client.getMaterial((materials) => {
      this.setState({
        details: materials,
        isSelected:true,
      })
    });
    client.getComments((comments) => {
      this.setState({
        comments: comments
      })
    })
    // client.getCourses((courses) => {
    //   // courses.map((course) => {
    //   //   // console.log(course)
    //   // })

    //   let temp = this.state.comments_list;
    //   courses.map((course) => {
    //     temp.push(courses.comments)
    //   });

    //   courses.map((course) => {
    //       temp.push({
    //         id: course.id, 
    //         comments_list: course.title, 
    //         //visibility: false, 
    //         comments: [] });
    //   })
    
    //   this.setState({
    //     comments_list: temp,
    //     items: courses
    //   });
    //   //console.log(this.state.comments_list)
  
    //   courses.map((course) => {
    //     client.getComments(course.id, (data) => {
    //       let temp2 = this.state.comments_list;
    //       temp2[course.id-1].comments = data
          
    //       this.setState({comments_list: temp2});
    //     })
    //   })
    // });
    // client.getComments((comments) =>{
    //   console.log("helo");
    // })
  }

  inputChanged(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  buttonClicked() {
    const data = {
      'id': this.state.items[this.state.items.length - 1].id + 1,
      'title': this.state.inputValue,
      'created_at': new Date().toISOString()
    }
    
    this.setState({
      items: [...this.state.items, data],
      inputValue: ''
    });
    
    client.createCourse(data, (courses) => {
      if (courses)
        alert('Created!');
    });  
  }

  deleteItem(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });

    client.deleteCourse(id, (course) => {
      if(course)
        alert('Deleted!')
    });
  }

  handleDeleteMaterial(id){
    console.log("hello")
    this.setState({
      details: this.state.details.filter((detail) => detail.id !== id)
    });

    client.deleteMaterial(id, (material) => {
      if(material)
        alert('Deleted!')
    });
  }

  handleCreateMaterial(){
    const data = {
      'title': this.state.newMaterial,
      'course': this.state.curCourseId
    }
    
    this.setState({
      selectedDetail: [...this.state.selectedDetail, data],
      newMaterial: ''
    });

     console.log(this.state.curCourseId);
    
    client.createMaterial(this.state.curCourseId, data, (materials) => {
      if (materials)
        alert('Created!');
    }); 
  }

  handleUpdateMaterial = (newDetail) => {
    const newArr = this.state.details.map((detail) => {
      if (detail.id === newDetail.id) {
        return Object.assign({}, detail, {
          title: newDetail.title,
        });
      } else {
        return detail;
      }
    });
    
    this.setState({
      details: newArr,
    });    

      const data = {
      'id': newDetail.id,
      'title': newDetail.title,
    }

    client.updateTodo(newDetail.id, data, (detail) => {
      if (detail)
        alert('Updated!');
    });
  }

  handleClickedTitle(id){
    console.log(id);
    console.log(this.state.details);
    let output = this.state.details.filter((item) => item.course === id);
    console.log(output);
      this.setState({
        selectedDetail: output,
        curCourseId: id,
      });

  }

 handleChange = (e) => {
    this.setState({
      newMaterial: e.target.value
    })
  }

  render() {

    var all = this.state.details.map((detail) => (
      <div>
        <h3>{detail.title} </h3>
      </div>
    ));

    return (
      <div className="container">
        <div className = "navbar-header">
          {
            this.state.items.map((item, index) =>
                <ul className = "list-inline" key={index}>
                  <li className = "float-left"><a className = "btn" onClick = {this.handleClickedTitle.bind(this, item.id)}>{item.title}</a></li>
                </ul>
            )
          }
        </div>

        <br style={{clear: ""}}></br>
      <div>
  
        {
          this.state.selectedDetail.map((detail, index) => 
            <ul key = {index}>
              <li> {detail.title} </li>
            </ul>
          )
        }
        <div>
          <ul>
            <input value = {this.state.newMaterial} onChange = {this.handleChange} /> 
            <button onClick = {this.handleCreateMaterial}> Add new Material</button>
          </ul>
        </div>
        {
          this.state.comments.map((comment, index) => 
            <div key = {index}>
              <ul >
                <li> 
                  {comment.text}
                </li>
              </ul>
            </div>
          )
        }
        </div>
      </div>

    );
  }
}

export default App;
