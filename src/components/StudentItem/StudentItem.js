import React from 'react'

export const StudentItem = (props) => {
    return (
        <button 
            className='list-group-item list-group-item-action' 
            onClick={() => props.studentClick(props.student.index)} >
            {props.student.firstName} {props.student.lastName}
        </button>
    )
}