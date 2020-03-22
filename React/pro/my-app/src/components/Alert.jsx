import React from 'react';
class Rq extends Component {

  constructor(){
    super();
    this.state = {
      option: '',
      isDisabled: true,
      checked: true    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(){
this.setState({checked: !this.state.checked});
  if (this.state.checked) 
  {
    this.setState({isDisabled: false})

  }
else

  this.setState({isDisabled: true});
}


handleSubmit(e){
 e.preventDefault();
 if (this.state.isDisabled===false) {
  alert('Form submitted')

 } else
 {
  alert('form has not submitted');
 }
}
}