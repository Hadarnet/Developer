import React, {Component} from 'react';
import './form.css'


export default class Form extends Component {
    constructor(props) {
      super(props);

    this.state={ years_studies:'',
                id_school:'',
                name:'',
                school_type:'',
                type_education:'',
                education_phase:'',
                city:'',
                phone:'',
                email:'',
                fax:'',
                facebook:'',
                instagram:'',
                image:'',
            }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event =>{
    event.preventDefault();
    const data = new FormData(document.forms.iForm)
    fetch("http://localhost:8000/api/school/", { method: 'POST', body: data})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }

    render(){
    return(
        <div className="form">
    <form id="iForm" onSubmit={this.handleSubmit}>
        <label htmlFor="fname">שנת לימוד:</label>
        <input type='text' name='years_studies' onChange={this.handleChange} />
        <label htmlFor="fname">סמל מוסד:</label>
        <input type='text' name='id_school' onChange={this.handleChange} />
        <label htmlFor="fname">שם מוסד לימוד:</label>
        <input type='text' name='name' onChange={this.handleChange} />
        <label htmlFor="fname">סוג מוסד לימוד:</label>
        <input type='text' name='school_type' onChange={this.handleChange} />
        <label htmlFor="fname">סוג חינוך:</label>
        <input type='text' name='type_education' onChange={this.handleChange} />
        <label htmlFor="fname">רמת חינוך:</label>
        <input type='text' name='education_phase' onChange={this.handleChange} />
        <label htmlFor="fname">עיר:</label>
        <input type='text' name='city' onChange={this.handleChange} />
        <label htmlFor="fname">כתובות:</label>
        <input type='text' name='address_school' onChange={this.handleChange} />
        <label htmlFor="fname">טלפון:</label>
        <input type='tel'  name="phone"  onChange={this.handleChange} />
        <label htmlFor="fname">דואר אלקטרוני:</label>
        <input type='text' name="email"onChange={this.handleChange} />
        <label htmlFor="fname">פקס:</label>
        <input type='text' name="fax"onChange={this.handleChange} />
        <label htmlFor="fname">פיסבוק:</label>
        <input type='text' name="facebook" onChange={this.handleChange} />
        <label htmlFor="fname">אינסטגרם:</label>
        <input type='text' name="instagram" onChange={this.handleChange} />
        <label htmlFor="fname">לוגו מוסד:</label>
        <input type='File' id="image" name="image" accept="image/*" onChange={this.handleChange} />

        <div><input type='submit' value='הוסף בית ספר' /></div>
    </form>
            </div>)
    }
}

