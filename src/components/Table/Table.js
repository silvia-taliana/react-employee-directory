import React, { Component } from "react";
import API from "../utils/Api";
// import "./style.css";

class Table extends Component {
    //setting the default state
    state = {
        image: "",
        first: "",
        last: "",
        email: "",
        phone: Number,
        dob: Date,
    };

    // starts the loadEmployees function when the page loads
    componentDidMount() {
        this.loadEmployees();
    }

    // function to call required data from the api
    loadEmployees() {
        API.getAllEmployees()
            .then(res => {
                console.log(res);
                this.setState({
                    image: res.data.results[0].picture.thumbnail,
                    first: res.data.results[0].name.first,
                    last: res.data.results[0].name.last,
                    email: res.data.results[0].email,
                    phone: res.data.results[0].phone,
                    dob: res.data.results[0].dob.date,
                })
            })
            .catch(err => console.log(err));
    };

    // function to render api data on the page 
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
                        <tr>
                            <td><img src={this.state.image}></img></td>
                            <td>{this.state.first}</td>
                            <td>{this.state.last}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.phone}</td>
                            <td>{this.state.dob}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};

export default Table;