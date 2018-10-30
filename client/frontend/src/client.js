import {BASE_URL} from './api';

module.exports = {
   
  getCourses(success){
    fetch(`${BASE_URL}/courses/`, {
      'method' : 'GET'
    })
      .then(response => response.json())
      .then(success)
  },

  createCourse(data, success){
    fetch(`${BASE_URL}/courses/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },


  deleteCourse(id, success){
    fetch(`${BASE_URL}/courses/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  },

  updateCourse(id, data, success){
    fetch(`${BASE_URL}/courses/${id}/`, {
      'method': 'PUT',
      'body': JSON.stringify(data)
    })
      .then(response => response.json())
      .then(success)
  },

  getStudent(success){
    fetch(`${BASE_URL}/student/`, {
      'method' : 'GET'
    })
    .then(response => response.json())
    .then(success)
  },
  getTeacher(success){
    fetch(`${BASE_URL}/teacher/`, {
      'method' : 'GET'
    })
    .then(response => response.json())
    .then(success)
  },

  getMaterial(success){
     fetch('http://localhost:8000/api/materials/' , {
      'method' : 'GET'
    })
    .then(response => response.json())
    .then(success)
  },

  createMaterial(id, data, success){
    fetch(`${BASE_URL}/courses/${id}/materials/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },


  deleteMaterial(course_id, material_id, success){
    fetch(`${BASE_URL}/courses/${course_id}/materials/${material_id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  },

  updateMaterial(id, data, success){
    fetch(`${BASE_URL}/materials/${id}/`, {
      'method': 'PUT',
      'body': JSON.stringify(data)
    })
      .then(response => response.json())
      .then(success)
  },

  getComments(success){
    fetch(`${BASE_URL}/comments/`, {
      'method' : 'GET'
    })
      .then(response => response.json())
      .then(success)
  },

  createComment(data, success){
    fetch(`${BASE_URL}/comments/`, {
      'method': 'POST',
      'body': JSON.stringify(data) 
    })
      .then(response => response.json())
      .then(success)
  },

  deleteComment(id, success){
    fetch(`${BASE_URL}/comments/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  },

  updateComment(id, data, success){
    fetch(`${BASE_URL}/comments/${id}/`, {
      'method': 'PUT',
      'body': JSON.stringify(data)
    })
      .then(response => response.json())
      .then(success)
  }
}

