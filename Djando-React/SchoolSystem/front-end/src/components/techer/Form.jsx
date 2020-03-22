import React, {Component} from 'react';
import './form.css'


export default class Form extends Component {
    constructor(props) {
      super(props);

    this.state={ id_number:'',
                first_name:'',
                last_name:'',
                date_of_birth:'',
                gender:'',
                country_birth:'',
                registration_start_date:'',
                registration_end_date:'',
                leaving_date:'',
                image:'' }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = event =>{
    event.preventDefault();
    console.log('User First Name :' + this.state.first_name)
    console.log('User Lest Name :' + this.state.last_name)
    const data = new FormData(document.forms.studentForm)
    fetch("http://localhost:8000/api/student/", { method: 'POST', body: data})
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }

    render(){
    return(
        <div className="form">
    <form id="iForm" onSubmit={this.handleSubmit}>
        <label htmlFor="fname">תעודת זהות:</label>
        <input type='text' name='id_number' onChange={this.handleChange} />
        <label htmlFor="fname">שם פרטי:</label>
        <input type='text' name='first_name' onChange={this.handleChange} />
        <label htmlFor="fname">שם משפחה:</label>
        <input type='text' name='last_name' onChange={this.handleChange} />
        <label htmlFor="fname">תאריך לידה:</label>
        <input type='date' name='date_of_birth' onChange={this.handleChange} />
        <label htmlFor="fname">תאריך רישום:</label>
        <label htmlFor="fname">מין:</label>
        <input type='text' name='gender' onChange={this.handleChange} />
        <label htmlFor="fname">מדינת לידה:</label>
        <input type='text' name='country_birth' onChange={this.handleChange} />
        <label htmlFor="fname">תאריך רישום:</label>
        <input type='date' name='registration_start_date' onChange={this.handleChange} />
        <label htmlFor="fname">תאריך סיום:</label>
        <input type='date' name='registration_end_date' onChange={this.handleChange} />
        <label htmlFor="fname">תמונה:</label>
        <input type='File' id="image" name="image" accept="image/*" onChange={this.handleChange} />

        <input type='submit' value='Add user' />
    </form>
            </div>)
    }
}



