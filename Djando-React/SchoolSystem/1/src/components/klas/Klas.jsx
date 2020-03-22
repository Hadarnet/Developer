import React from 'react';
import './klas.css';


export default class Klas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Klas"
    };
  }

  async componentDidMount() {
    console.log("hello")
    const response = await fetch("/api/klas/")
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    this.setState({data:jsonResponse})
  }
  render() {
    return (
      <div className="teacher">
        <div className="titleTeacher">כיתות</div>
        <div className="mainTeacher">
          {this.state.data.map(Klas => <div className="nameTeacher" key={Klas.id}>
            {Klas.name_class} {Klas.number_class}
          </div>)}
        </div>
      </div>


    );
  }
}

