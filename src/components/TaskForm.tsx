import React from "react";
import Form from 'react-bootstrap/Form';
import '../styles/TaskForm.css';

class TaskForm extends React.Component<any, any >{
    constructor(props: any){
        super(props);
        this.state = {
            title: "",
            description:"",
            responsible :"",
            priority:""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        console.log(e.target.value , e.target.name);
        const {value, name} = e.target;
        this.setState({
            [value]:name
        })
    }

    clickButtom(){

    }

    render(){
        return (
    
            <div className="inputs mt-4">
                <Form className="listForms">
                    <Form.Group controlId="Title">                     
                        <Form.Control type="text" placeholder="Title" onChange={this.handleInput} />
                    </Form.Group>

                    <Form.Group controlId="Description">                     
                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>

                    <Form.Group controlId="Responsible">
                        
                        <Form.Control type="text" placeholder="Responsible" />
                    </Form.Group>

                    <div className="positionButtom">
                        <div className="buttomEditTask" onClick={this.clickButtom}>Edit task</div>
                    </div>
                </Form>
        
        </div>
        );
    }
}

export default TaskForm;