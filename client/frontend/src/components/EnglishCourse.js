import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputValue: ''
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this); 

  }

  componentDidMount(){
    client.getCourse((courses) => {
      this.setState({
        items: courses
      });
    });
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
  render() {
    return (
      <div class="container">
        <div class="well">
          <h1>
           Welcome to English Courses
          </h1>
          <div class="panel panel-default">
            <div class="panel-body">
              {
                this.state.items.map((item, index) =>
                  <li key={index}>
                    <h2><a href="">{item.title}</a></h2>
                    <p class="pull-right">{item.created_at}</p>
                    <button onClick={this.deleteItem.bind(this, item.id)}>Delete</button>
                  </li>
                )
              }
              <input value={this.state.inputValue} onChange={this.inputChanged} />
              <button onClick={this.buttonClicked}>Add item</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
