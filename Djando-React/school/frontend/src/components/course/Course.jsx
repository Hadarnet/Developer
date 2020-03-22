import React from 'react';
import './course.css';


export default class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Course"
    };
  }

  async componentDidMount() {
    console.log("hello")
    const response = await fetch("/api/course/")
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    this.setState({data:jsonResponse})
  }
  render() {
    return (
      <div className="teacher">
        <div className="titleTeacher">מקצעות וקורסים</div>
        <div className="mainTeacher">
          {this.state.data.map(Course => <div className="nameTeacher" key={Course.id}>
            {Course.title}
          </div>)}
        </div>
      </div>


    );
  }
}

