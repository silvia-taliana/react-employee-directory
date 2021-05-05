import React from "react";
// import "./style.css";

function sortName(a, b) {
    if (a.name.first < b.name.first) {
        return -1;
    }
};

function reverseSortName(a, b) {
    if (a.name.first > b.name.first) {
        return -1;
    }
}

// function to render each employee into EmployeeData component of table
function renderEmployees(props) {

    function getSortFunction() {
        if (props.sorted === true) {
            return sortName;
        }
        else {
            return reverseSortName;
        }
    }

    // function getFilterFunction() {
    //     if (props.filtered === true) {
    //         let name = props.employeeData.map(employee => {
    //             return employee.name;
    //         })
    //         console.log(name);
    //         return name.first === props.search.toLowerCase();
    //     }
    //     else {
    //         return () => props.employeeData;
    //     }
    // }

    // function filterByName() {
    //     let employees = props.employeeData.map(employee => {
    //         return employee.name;
    //     });
    //     const employee = employees.filter(function (name) {
    //         return name.first === props.search.toLowerCase();
    //     });
    //     return employee;
    // };

    return (
        <>
            {props.employeeData.sort(getSortFunction()).map(employee => (
                < tr key={employee.login.uuid}>
                    <td><img src={employee.picture.thumbnail} alt="profile"></img></td>
                    <td>{employee.name.first + " " + employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob.date}</td>
                </tr >
            ))
            },
        </>
    )
};


export default renderEmployees;