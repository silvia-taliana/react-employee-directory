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
    console.log(props.employeeData);

    function getSortFunction() {
        if (props.sorted === true) {
            return sortName;
        }
        else {
            return reverseSortName;
        }
    }

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