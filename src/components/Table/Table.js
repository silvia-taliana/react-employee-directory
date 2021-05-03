import React, { Component } from "react";
import API from "../utils/Api";
import EmployeeData from "../EmployeeData/EmployeeData";
// import SearchResult from "../SearchResult/SearchResult";
// import "./style.css";

class Table extends Component {
    //setting the default state
    state = {
        employees: [],
        isSorted: false,
        search: true,
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
        API.getAllEmployees()
            .then(res => {
                this.setState({ employees: res.data.results });
            })
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {
    //     let value = event.target.value;
    //     const name = event.target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // };

    // handleSearch = event => {
    //     event.preventDefault();
    //     this.setState({
    //         search: false
    //     });
    // };

    // function to render html for the table 
    render() {
        return (
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
                        <EmployeeData sorted={this.state.isSorted} employeeData={this.state.employees} />
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Table;