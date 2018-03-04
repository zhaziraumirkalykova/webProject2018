import React, {Component} from 'react';
import './App.css';
import Course from './Course';
class CourseList extends Component {            
    render () {
        return (
            <div className = "filebtn">
                <div className="row">{this.props.files.map((files, index) =>
                    <div className="col-sm-6">
                        <section key={index} >
                        <Course
                            text = {files.text}
                            image = {files.image}
                            content = {files.content}
                            username = {this.props.username}
                            comments = {this.props.comments}
                        />
                    </section>
                    </div>
                    )
                    }
                </div>
            </div>
        );
	}
}
export default CourseList;