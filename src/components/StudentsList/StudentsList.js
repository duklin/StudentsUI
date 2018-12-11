import React from 'react'
import { StudentItem } from "../StudentItem/StudentItem";
import ReactPaginate from "react-paginate";

export class StudentsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageNum: 0,
            pageSize: 3
        }
    }

    getStudentsPage = (offset, nextPageOffset) => {
        return this.props.students
            .map(student => {
                return <StudentItem student={student}
                    key={student.index}
                    studentClick={this.props.studentClick} />
            })
            .filter((student, index) => {
                return index >= offset
                    && index < nextPageOffset;
            });
    };

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({ pageNum: selected });
    };

    render() {
        const offset = this.state.pageNum * this.state.pageSize;
        const nextPageOffset = offset + this.state.pageSize;
        const pageCount = Math.ceil(this.props.students.length / this.state.pageSize);
        const students = this.getStudentsPage(offset, nextPageOffset);
        return (
            <div>
                <div className='list-group'>
                    {students}
                </div>
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="#">...</a>}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        )
    }
}