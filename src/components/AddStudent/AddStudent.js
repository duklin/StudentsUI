import React from 'react'

export const AddStudent = (props) => {
    return (
        <form className='form'>
                <div className='form-group row'>
                    <label className='col-4 col-form-label text-right'>First Name</label>
                    <input type='text' name='firstName' className='form-control col-8' value={props.student.firstName} onChange={props.onChangeHandlerForAdding} />
                </div>
                <div className='form-group row'>
                    <label className='col-4 col-form-label text-right'>Last Name</label>
                    <input type='text' name='lastName' className='form-control col-8' value={props.student.lastName} onChange={props.onChangeHandlerForAdding}/>
                </div>
                <div className='form-group row'>
                    <label className='col-4 col-form-label text-right'>Index</label>
                    <input type='text' name='index' className='form-control col-8' value={props.student.index} onChange={props.onChangeHandlerForAdding}/>
                </div>
                <div className='form-group row'>
                    <label className='col-4 col-form-label text-right'>Module</label>
                    <input type='text' name='module' className='form-control col-8' value={props.student.module} onChange={props.onChangeHandlerForAdding}/>
                </div>
                <button className='btn btn-primary float-right' onClick={(event) => props.addStudent(event)} >Submit</button>
            </form>
    )
}