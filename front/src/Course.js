import React, {Component} from 'react';
import './App.css';

class Course extends Component {
	constructor () {
        super();
        this.state = { 
            editing: false, getInfo: false,
            comment: '',
        }
    }

    componentDidMount () {
        this.setState({ 
            changedText: this.props.text,
            changedImg: this.props.image,
        });
    }

    handleEditing (event) {
        this.setState({ 
            editing: true, 
        });
    }

    handleEditingDone (event) {
        this.setState({ editing: false });
    
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

    handleChangeContent(e){
        this.setState({
          comment: e.target.value
      })
    }
    handleAdd(e){
        e.preventDefault();
        let comment = this.props.comments;
        //let photo = this.fileInput.files[0]
        comment.push({ comment: this.state.comment });
          
        // let n = this.state.id;
        // n.toString();
        this.setState({
          comments: comment,
          comment: '',
          //id: n + 1
        });
    }
    render () {
        var text = this.props.text;

        if (this.state.getInfo) {
            return(
                <div className = "info">
                    <h2>{this.state.changedName} </h2>
                    <img className="imgExpand" src = {this.props.image} />
                    <p>        
                        {this.props.content}
                    </p>
                    {this.props.comments.map((comment, intex)=>
                        <p>
                            <label >{this.props.username}:</label>  {comment.comment}
                        </p>
                    )}
                    <div>
                        <form className="input-group">
                        <input className = "btn" type="text" onChange= {this.handleChangeContent.bind(this)} value={this.state.comment} />
                        <button className="btn btn-success" onClick = {this.handleAdd.bind(this)} >Comment</button>
                    </form>
                    </div>
                  <button className="btn btn-success" onClick = {this.getInfoDone.bind(this)}>OK</button>
                </div>
            )
        }
        return(
            <div className = "border border-success">
                <div  className = "filebtn">
                    
                <button className = "mainBtn" onClick = {this.handleSubmit.bind(this)}>
                    <img className="img" src = {this.props.image}/> 
                    {this.state.changedText}
                </button>
                </div>
            </div>
            )
	}
}
export default Course;