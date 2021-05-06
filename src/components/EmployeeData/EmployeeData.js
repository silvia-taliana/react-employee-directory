import React from "react";
import "./style.css";
import { format } from "date-fns";

// sorting name A-Z
function sortName(a, b) {
    if (a.name.first < b.name.first) {
        return -1;
    }
};

// sorting name Z-A
function reverseSortName(a, b) {
    if (a.name.first > b.name.first) {
        return -1;
    }
}

// function to render each employee into EmployeeData component of table
function renderEmployees(props) {

    // sorting name based on state
    function getSortFunction() {
        if (props.sorted === true) {
            return sortName;
        }
        else {
            return reverseSortName;
        }
    }

    // formatting date of birth
    function formatDate(employee) {
        var date = new Date(employee.dob.date);

        var formattedDate = format(date, "MMMM do, yyyy");

        return formattedDate;
    }

    // returning employeeData component to table for each employee 
    return (
        <>
            {props.employeeData.filter(function (employee) {
                if (!props.filtered) return true
                return employee.name.first.toLowerCase() === props.search.toLowerCase();
            }).sort(getSortFunction()).map(employee => (
                < tr key={employee.login.uuid}>
                    <td><img src={employee.picture.thumbnail} alt="profile"></img></td>
                    <td>{employee.name.first + " " + employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{formatDate(employee)}</td>
                </tr >
            ))
            }
        </>
    )
};

export default renderEmployees;