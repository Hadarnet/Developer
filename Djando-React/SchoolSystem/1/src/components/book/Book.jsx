import React from 'react';
import './book.css';


export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Book"
    };
  }

  async componentDidMount() {
    console.log("hello")
    const response = await fetch("/api/book/")
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    this.setState({data:jsonResponse})
  }
  render() {
    return (
      <div className="teacher">
        <div className="titleTeacher">ספרים ווידיאו</div>
        <div className="mainTeacher">
          {this.state.data.map(Book => <div className="nameBook" key={Book.id}>
           <div>{Book.title}</div><div>{Book.course}</div>
          </div>
          )}
        </div>
      </div>


    );
  }
}
