import React, { Component } from 'react';


class Math extends Component {
    state = {
        counter: 5,
        customerList: [{
            _id: '000124',
            name: 'Steve'
        }, {
            _id: '79655',
            name: 'Rob'
        }]
    }

    render() {
        return (
            <div className="my-class">
                <span className="badge bg-secondary">Counter : {this.state.counter}</span>
                {this.showMinusButton()}
                {this.showAddButton()}
                <div>
                    <table>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>

                        {this.state.customerList.map(ele => {
                            return (
                                <tr key={ele._id}>
                                    <td>{ele._id}</td>
                                    <td>{ele.name}</td>
                                </tr>
                            )
                        })}
                    </table>

                </div>
            </div>
        )
    }

    showMinusButton() {

        // if (this.state.counter >= 1) {
        //     return (
        //         <div>
        //             <button>Minus</button>
        //         </div>

        //     )
        // } else {

        // }
        return this.state.counter >= 1 ? <button className="btn btn-primary" onClick={this.minus}>Minus</button> : ''
    }

    showAddButton() {
        return this.state.counter <= 10 ? <button className="btn btn-info" onClick={this.add}>Add</button> : ''
    }


    add = () => {
        console.log(this.state)

        this.setState({
            counter: this.state.counter + 1
        });
    }

    minus = () => {
        console.log(this.state)

        this.setState({
            counter: this.state.counter - 1
        });
    }

}


export default Math
