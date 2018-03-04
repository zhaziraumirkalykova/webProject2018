import React, {Component} from 'react';
import './App.css';

class MainTeacherPage extends Component {
	constructor () {
    super();
    this.state = { 
        editing: false, getInfo: false,
        id: 1,
        text: '',
        newContent: '',
    }
  }

  componentDidMount () {
    this.setState({ 
        changedText: this.state.newContent,
        changedContent: this.props.content
    });
  }

  handleEditing (event) {
    this.setState({ 
        editing: true, 
    });
  }

    handleEditingDone (event) {
        this.setState({ editing: false, getInfo: true });
    
    }
    handleEditingChangeName(event){
        var _changedText = event.target.value;
        this.setState({
            changedText: _changedText
        })
    }
    handleEditingChangeContent(event){
        var _changedContent = event.target.value;
        this.setState({
            changedContent: _changedContent
        })
    }

    handleSubmit(event){
        console.log(this.state.getInfo)
        this.setState({ 
            getInfo: true, 
        });
    }
    getInfoDone(event){
        this.setState({getInfo: false})
    }
    handleAdd(e){
        e.preventDefault();
        let newContent = this.props.newContents;
        newContent.push({ newContent: this.state.newContent});
        this.setState({
          newContents: newContent,
          text: '',
          newContent: '',
        });
        console.log(this.state.contents)
    }
    handleChangeContent(e){
        this.setState({
            newContent: e.target.value
        })
    }
    render () {
    var newContents = this.props.newContents;

    if (this.state.editing) {
      return(
        <div className = "info"> 
            <img className="imgExpand" src = {this.props.image} />
            <textarea onChange={this.handleEditingChangeContent.bind(this)} className="textarea"> 
                {this.props.content} 
            </textarea> 
            <button  className="btn btn-success" onClick={this.handleEditingDone.bind(this)}> Save</button>
        </div>
        )
    } 
    if (this.state.getInfo) {
        return(
            <div className = "info">
                <h2>{this.state.changedText} </h2>
                <img className="imgExpand" src = {this.props.image} />
                <p>        
                    {this.state.changedContent}
                </p>
                <div>
                    {this.props.newContents.map((newContent, intex)=>
                        <p>
                            {newContent.newContent}
                        </p>
                    )} 
                </div>
                {this.props.comments.map((comment, intex)=>
                    <p>
                        <label>{this.props.username}: </label> {comment.comment}
                    </p>
                )} 
                <div>
                    <form className="input-group">
                        <input type="text" onChange= {this.handleChangeContent.bind(this)} value={this.state.newContent} />
                        <button className="btn btn-success" onClick = {this.handleAdd.bind(this)} >ADD</button>               
                    </form>
                </div>
                <button onClick={this.handleEditing.bind(this)} className ="btn btn-danger">Edit</button>
                <button  className="btn btn-success" onClick = {this.getInfoDone.bind(this)}>OK</button>
            </div>
            )
    }else{
        return(
            <div>
               <div>
                <button className = "mainBtn" onClick = {this.handleSubmit.bind(this)}>
                    <img className="img" src = {this.props.image}/> 
                    {this.state.changedText}
                </button>
                </div>
                <div className = "btns">
                    <button onClick = {this.handleSubmit.bind(this)}  
                         className="btn btn-success">Info</button>
                </div>
            </div>
            )
    }
    }
}
export default MainTeacherPage;