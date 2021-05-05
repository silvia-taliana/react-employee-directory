import React, { Component } from "react";
import API from "../utils/Api";
import EmployeeData from "../EmployeeData/EmployeeData";
import Search from "../Search/Searchbox";
import "./style.css";

class Table extends Component {
    //setting the default state
    state = {
        employees: [],
        isSorted: true,
        search: "",
        isFiltered: false,
    };

    // function to toggle state for sorting employees
    toggleSortByName() {
        this.setState({ isSorted: !this.state.isSorted })
    };

    // starts the loadEmployees function when the page loads
    componentDidMount() {
        this.loadEmployees();
        // API.getAllEmployees()
        //     .then(res => {
        //         console.log(res);
        //         this.loadEmployees(res);
        //     })
        //     .catch(err => console.log(err));
    }

    // function to call required data from the api
    loadEmployees(res, searchedEmployee) {
        API.getAllEmployees()
            .then(res => {
                this.setState({ employees: res.data.results })
            })
            .catch(err => console.log(err));
    };
    // console.log(searchedEmployee);
    //     console.log(res);
    //     if (this.state.isFiltered === true) {
    //         const filteredEmployee = res.data.results.filter(function (employee) {
    //             console.log(employee.name.first);
    //             console.log(searchedEmployee);
    //             return (employee.name.first.toLowerCase() === searchedEmployee.toLowerCase());
    //         });
    //         console.log(filteredEmployee);
    //         // return filteredEmployee;
    //         this.setState({ employees: filteredEmployee });
    //     }
    //     else {
    //         this.setState({ employees: res.data.results })
    //     }

    // setting state of search to new input 
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    // this.setState({ isFiltered: true });

    // setting filtered state to true when search button is clicked
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ isFiltered: true });
        console.log(this.state.search);
    };
    // let searchedEmployee = this.state.search;
    //     this.loadEmployees(searchedEmployee);

    // function to render html for the table 
    render() {
        return (
            <div>
                <Search
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employeeData={this.state.employees}
                />
                <div className="Table" id="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col"><button id="nameBtn" onClick={() => { this.toggleSortByName() }}>Name</button>
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