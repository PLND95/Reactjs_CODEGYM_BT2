import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            item: "",
        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            let { item } = state
            item = event.target.value
            return { item }
        }

        )
    };

    handleAddItem = () => {
        this.setState((state) => {
            if(this.state.item) {
                const { list } = state
                list.push(this.state.item)
                console.log(list)
                return { list }
            }

        })
    }

    render() {
        return (
            <div className="wrapper">
                <h1>To Do List</h1>
                <input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleAddItem}>Add</button>
                <ol>

                    {this.state.list.map((e, index) => {
                        return (
                            <li key={index}>{e}</li>
                        )
                    }

                    )}
                </ol>

            </div>
        )
    }
}

export default App;