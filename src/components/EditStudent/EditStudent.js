import React from 'react'

export class EditStudent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            student: props.student,
        }
    }

    componentWillReceiveProps(props){
        this.setState({student: props.student});
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(state => {
            return {
                student: {
                    ...state.student,
                    [name]: value
                }
            }
        }); 
    }

    render(){
        let param = {
            student: this.state.student,
            listIndex: this.props.listIndex
        };
        return(
            <form className='form'>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' name='firstName' className='form-control' value={this.state.student.firstName} onChange={this.onChangeHandler} />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' name='lastName' className='form-control' value={this.state.student.lastName} onChange={this.onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Index</label>
                    <input type='text' name='index' className='form-control' value={this.state.student.index} onChange={this.onChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Module</label>
                    <input type='text' name='module' className='form-control' value={this.state.student.module} onChange={this.onChangeHandler}/>
                </div>
                <button className='btn btn-primary' onClick={(event) => this.props.editStudent(param, event)} >Submit</button>
            </form>
        )
    }

}