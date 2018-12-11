import React from 'react'
import { listStudents } from "../../repository/studentRepository";
import { StudentsList } from "../StudentsList/StudentsList";
import { EditStudent } from "../EditStudent/EditStudent";
import { AddStudent } from "../AddStudent/AddStudent";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: listStudents(),
            selectedStudent: '',
            newStudent: {
                firstName: '',
                lastName: '',
                index: '',
                module: ''
            }
        };
        this.studentsRef = React.createRef();
        this.editStudentRef = React.createRef();
    }

    studentClickHandler = (index) => {
        this.setState({selectedStudent: index});
    }

    outsideClickHandler = (event) => {
        let studentsRef = this.studentsRef.current;
        let editStudentRef = this.editStudentRef.current;
        if(!studentsRef.contains(event.target) && !editStudentRef.contains(event.target)){
            this.setState({selectedStudent: ''});
        }
    }

    editStudentHandler = (param, event) => {
        event.preventDefault();
        let students = this.state.students;
        students[param.listIndex] = param.student;
        this.setState({students: students, selectedStudent: ''});
    }

    componentWillMount(){
        document.addEventListener('mousedown', this.outsideClickHandler, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.outsideClickHandler, false);
    }

    addStudentHandler = (event) => {
        event.preventDefault();
        this.setState((state) => {
            return {
                students: [
                    ...state.students,
                    state.newStudent
                ],
                newStudent: {
                    firstName: '',
                    lastName: '',
                    index: '',
                    module: ''
                }
            }
        })
    }

    onChangeHandlerForAdding = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState(state => {
            return {
                newStudent: {
                    ...state.newStudent,
                    [name]: value
                }
            }
        });
    }

    render() {
        let edit;
        if(this.state.selectedStudent !== ''){
            let student = this.state.students.filter(s => s.index === this.state.selectedStudent)[0];
            let listIndex = this.state.students.indexOf(student);
            edit = <EditStudent student={student} listIndex={listIndex} editStudent={this.editStudentHandler}/>
        }
        return (
            <div className='container mt-2 mb-2'>
                <div className='row mb-2'>
                    <div className='col-8'>
                        <div ref={this.studentsRef}>
                            <StudentsList students={this.state.students} studentClick={this.studentClickHandler} />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div ref={this.editStudentRef}>
                            {edit}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-5'>
                        <AddStudent student={this.state.newStudent} onChangeHandlerForAdding={this.onChangeHandlerForAdding} addStudent={this.addStudentHandler} />
                    </div>
                </div>
            </div>
        )
    }
}