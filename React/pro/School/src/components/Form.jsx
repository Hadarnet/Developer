import React from 'react'

export default class MyFormComponent extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: 'initial value',
    //     }
    // }

    
    state = {
        value: 'initial value',
        users: [],
        counterOfPurchuses: 0,
    }

    onUsernameChange = (event) => {

        this.setState({ value: event.target.value })
    }

    onSubmit = (event) => {

        event.preventDefault();
        console.log('Form submitted');
    }


    render() {
        return (
            <form onSubmit={() => this.onSubmit()} >
                <input name="username" type="text" onChange={(e) => this.onUsernameChange(e)} />
                <input type="submit" value="send" />
                <h1>{this.state.value}</h1>
            </form>
        );
    }
}
