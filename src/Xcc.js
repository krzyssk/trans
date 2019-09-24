import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };



    }



    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });

    }

    render() {
        return (
            <section className="flex">
                <div className="content flex">
                    <div className="sandbox flex">
                        <div className="directions">
                            <h1>Translate latin alphabeth to cyrillic</h1>
                            <h3>This tool works offline. It allows you to transliterate Latin text to the Cyryllic alphabet.</h3>
                        </div>
                        <form id="nameForm" className="flex">
                            <div className="form-group">
                                <textarea
                                    id="text"
                                    name="hard"
                                    value={this.state.text}

                                    rows={20}
                                    onChange={this.handleChange}
                                    wrap="hard"
                                >
                                </textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;