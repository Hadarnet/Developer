import React from 'react'
import DropDown from './DropDown'

export default class Dropdowns extends React.Component {

    state = {
        opens: [
            { state: false, key: 0 },
        ]
    }

    componentDidMount() {
        alert("I’m alive!")
    }
    handleCheckClick = () => {
        this.setState({ checked: !this.state.checked });
      }



    render() {
        console.log('Im in render');

        return (
            <div>
                {this.state.opens ?
                    this.state.opens.map((item, index) => {
                        return (
                            <DropDown
                                key={item.key}
                                open={item.state}
                                banana={(i) => this.toggleOpen(i)}
                                id={index}>
                            </DropDown>
                        )
                    })
                    : null}



                {/* <DropDown
                    open={this.state.open1}
                    banana={(index) => this.toggleOpen(index)}
                    index={1}>
                </DropDown>

                <DropDown
                    open={this.state.open2}
                    banana={(index) => this.toggleOpen(index)}
                    index={2}>
                </DropDown>

                <DropDown
                    open={this.state.open3}
                    banana={(index) => this.toggleOpen(index)}
                    index={3}>
                </DropDown> */}
            </div>
        )
    }
}
