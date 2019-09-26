import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write your text.'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="example">
                <h1>Translate latin alphabeth to cyrillic </h1>
                <h4>This tool works offline. It allows you to transliterate Latin text to the Cyryllic alphabet.</h4>
                <form >
                    <textarea id="form" value={this.state.value} onChange={this.handleChange} rows={10} />
                </form>

            </div>
        );
    }
}



export default EssayForm;


