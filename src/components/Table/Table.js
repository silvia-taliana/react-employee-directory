import React, { Component } from "react";
import API from "../utils/Api";
import EmployeeData from "../EmployeeData/EmployeeData";
// import "./style.css";

class Table extends Component {
    //setting the default state
    state = {
        employees: []
    };

    // starts the loadEmployees function when the page loads
    componentDidMount() {
        this.loadEmployees();
    }

    // function to call required data from the api
    loadEmployees() {
        API.getAllEmployees()
            .then(res => {
                this.setState({ employees: res.data.results });
            })
            .catch(err => console.log(err));
    };

    // function to render html for the table 
    render() {
        return (
            <div className="Table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EmployeeData employeeData={this.state.employees} />
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Table;