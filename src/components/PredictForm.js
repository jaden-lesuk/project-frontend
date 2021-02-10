import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postPrediction } from '../flux/actions/PredictionActions';
import { Button, Card, Alert } from 'react-bootstrap';
import Swal from 'sweetalert2';


const colorMap ={
    0: "success",
    1: "danger"
}


class PredictionForm extends Component {

    state = {
        source:'',
        link: '',
        title: '',
        maintext: '',

        prediction: '',
    }
    
    validate = () => {
        if(this.state.title === ''||this.state.text === ''){
            return false;
        }else{
            return true;
        }
    }

    onChange = (e) => {
        this.setState({prediction: ''})
        this.setState({ [e.target.name] : e.target.value })}

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.validate()){
            this.setState({ source: '', link: '', title: '', maintext: ''})
            await this.props.postPrediction(this.state.title,this.state.maintext, this.state.source, this.state.link);
            this.setState({prediction: this.props.prediction.predictionResult})
        }else{
            Swal.fire({icon: 'error', title: 'Oops...', text: 'Please enter details'})
        }
    }

    render(){
        const articleTrue = "This Article is allegedly TRUE"
        const articleFalse = "This Article is allegedly FALSE"

        const formStyle = {
            // padding: '3vh',
        }


        return(
            

            <div>
            {
                this.state.prediction === ''?
                <Alert variant="info">The Article Prediction will appear here</Alert>
                :<Alert variant={`${colorMap[this.state.prediction]}`}>{this.state.prediction===0? articleTrue: articleFalse}</Alert>

            }
             
            <Card  style={{backgroundColor:'#495057 ', marginBottom:'3vh'}} text="black" bg="light">
                {/* <Card.Header as="h4" className=" font-weight-bold" >News Article Form</Card.Header> */}
                <Card.Body style={ formStyle }>
                    <form  onSubmit={this.onSubmit} >
                        <div className="mb-3">
                            <label className="form-label font-weight-bold" >Source:</label>
                            <input 
                                    type = "text"
                                    name = "source"
                                    className="form-control"
                                    placeholder = "Add the source ..."
                                    value = {this.state.source}
                                    onChange = { this.onChange }
                                />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-weight-bold" >Link:</label>
                            <input 
                                    type = "text"
                                    name = "link"
                                    className="form-control"
                                    placeholder = "Add the link ..."
                                    value = {this.state.link}
                                    onChange = { this.onChange }
                                />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-weight-bold" >* Title:</label>
                            <input 
                                    type = "text"
                                    name = "title"
                                    className="form-control"
                                    placeholder = "Add the title ..."
                                    value = {this.state.title}
                                    onChange = { this.onChange }
                                />
                        </div>

                        <div className="mb-3">
                            <label className="form-label font-weight-bold">* Text:</label>
                            <textarea 
                                type = "text"
                                name = "maintext"
                                placeholder = "Add the text ..."
                                className="form-control"
                                value = {this.state.maintext}
                                onChange = { this.onChange }
                                rows = {10}
                            />
                        </div>

                        <Button variant="info" type="submit" size="md" block>Predict</Button>
                    </form>
                </Card.Body>
                <Card.Footer>
                    <div>* required</div>
                </Card.Footer>
            </Card>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    prediction: state.prediction
})


export default connect(mapStateToProps, {postPrediction})(PredictionForm);