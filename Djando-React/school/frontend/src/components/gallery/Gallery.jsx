import React from 'react';
import './gallery.css';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Teacher"
    };
  }

  async componentDidMount() {
    console.log("hello");
    const response = await fetch("/api/gallery/");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    this.setState({data:jsonResponse})
  }


  render() {
    return (
      <div>
        <div>גלריה</div>
          {this.state.data.map(Gallery => <div className="cGallery" >
            <div className="galleryImg">            <img
            src = {Gallery.image}
            alt = ""/>
</div>
            <div className="galleryTitle">{Gallery.title}</div>
          </div>)}
      </div>
    );
  }
}
