import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postPrediction } from '../flux/actions/PredictionActions'

class PredictionForm extends Component {

    state = {
        title: '',
        author: '',
        maintext: '',
        result: 'hello'
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        // predictedResult = this.props.postPrediction(this.state.title, this.state.author,this.state.maintext);
        this.setState({ title: '' })
        this.props.postPrediction(this.state.title, this.state.author,this.state.maintext);
    }

    render(){
        const formStyle = {
            textAlign: 'left',
            padding: '20px',
            // width: '500px',
            paddingLeft:'100px',
            paddingRight:'100px',
            marginBottom: '15px'
        }

        return(
            <div style={ formStyle }>
                <form  onSubmit={this.onSubmit} style = {{ display: 'flex', flexDirection:'column', flex: 1}}>
                    <input 
                        type = "text"
                        name = "title"
                        placeholder = "Add a title ..."
                        style = {{flex: '10', padding: '5px', margin: '5px'}}
                        value = {this.state.title}
                        onChange = { this.onChange }
                    />
                    <input 
                        type = "text"
                        name = "author"
                        placeholder = "Add an author ..."
                        style = {{flex: '10', padding: '5px', margin: '5px'}}
                        value = {this.state.author}
                        onChange = { this.onChange }
                    />

                    <textarea 
                        type = "text"
                        name = "maintext"
                        placeholder = "Add the text ..."
                        style = {{flex: '10', padding: '5px', margin: '5px'}}
                        value = {this.state.maintext}
                        onChange = { this.onChange }
                        rows = {20}
                    />

                    <input 
                        type = "submit"
                        value = "submit"
                        className = "btn"
                        style = {{flex: '1', margin: '5px'}}
                    />
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    prediction: state.prediction
})


export default connect(mapStateToProps, {postPrediction})(PredictionForm);