import React from "react";

class Preferences1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '--------------' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('You have selected: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    How much money are you willing to spend:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="--------------">--------------</option>
                        <option value="under $10">under $10</option>
                        <option value="$10 - $20">$10 - $20</option>
                        <option value="$20 - $50">$20 - $50</option>
                        <option value="over $50">over $50</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        alignItems: ''
    }
})

export default Preferences1