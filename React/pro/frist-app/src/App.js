import React from 'react'
import Checkbox from "../../alert/src/components/Checkbox"

export default class App extends React.Component {
  state = {
    checked:false
  }
   ischecked() {
    this.setState({checked: !this.state.checked})
    console.log("test");
}
    render() {
        return (
        <Checkbox 
        ischecked1={()=>this.ischecked()}
        open = {this.state.checked}>
        </Checkbox>
        )
    }
}
export default App;
