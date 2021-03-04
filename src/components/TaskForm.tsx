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
            priority:"High"
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
        console.log(e.currentTarget.name);
        const {value, name} = e.currentTarget;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e:React.FormEvent){
        e.preventDefault();
        this.props.updateTaks(this.state);
    }

    render(){
        return (
    
            <div className="inputs mt-4">
                <Form className="listForms" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="TitleId">                     
                        <Form.Control type="text" placeholder="Title" name="title" onChange={this.handleInput} />
                    </Form.Group>

                    <Form.Group controlId="DescriptionId">                     
                        <Form.Control type="text" placeholder="Description"  name="description" onChange={this.handleInput}/>
                    </Form.Group>

                    <Form.Group controlId="ResponsibleId">
                        <Form.Control type="text" placeholder="Responsible"  name="responsible" onChange={this.handleInput}/>
                    </Form.Group>


                    <Form.Group controlId="ProprityId">
                        <Form.Control as="select" name="priority" onChange={this.handleInput}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </Form.Control>
				    </Form.Group>

                    <div className="positionButtom">
                        <button type="submit" className="buttomEditTask" >Add task</button>
                    </div>
                </Form>
        
        </div>
        );
    }
}

export default TaskForm;