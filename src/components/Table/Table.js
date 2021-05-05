import React, { Component } from "react";
import API from "../utils/Api";
import EmployeeData from "../EmployeeData/EmployeeData";
import Search from "../Search/Searchbox";
// import SearchResult from "../SearchResult/SearchResult";
// import "./style.css";

class Table extends Component {
    //setting the default state
    state = {
        employees: [],
        isSorted: true,
        search: "",
        isFiltered: false,
    };

    toggleSortByName() {
        // this.sortByName();
        this.setState({ isSorted: !this.state.isSorted })
    };

    // starts the loadEmployees function when the page loads
    componentDidMount() {
        this.loadEmployees();
    }

    // function to call required data from the api
    loadEmployees() {
        if (this.state.isFiltered === true) {
            API.getAllEmployees()
                .then(res => {
                    console.log(res.data.results);

                    let employees = res.data.results.map(employee => {
                        return employee.name;
                    });
                    const employee = employees.filter(function (name) {
                        return name.first === this.state.search.toLowerCase();
                    });
                    return employee;
                })
                .then(
                    console.log(res),
                    this.setState({ employees: employee })
                )
                .catch(err => console.log(err));
        }
        else {
            API.getAllEmployees()
                .then(res => {
                    this.setState({ employees: res.data.results });
                })
                .catch(err => console.log(err));
        }
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ isFiltered: true });
        this.loadEmployees();
    };

    // function to render html for the table 
    render() {
        return (
            <div>
                <Search
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employeeData={this.state.employees}
                />
                <div className="Table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col"><button onClick={() => { this.toggleSortByName() }}>Name</button>
                                </th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <EmployeeData sorted={this.state.isSorted} search={this.state.search} filtered={this.state.isFiltered} employeeData={this.state.employees} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export default Table;