import React from "react";
// import "./style.css";

// function to render each employee into EmployeeData component of table
function renderEmployees(props) {
    return (
        <>
            {props.employeeData.map(employee => (
                < tr key={employee.login.uuid}>
                    <td><img src={employee.picture.thumbnail} alt="profile"></img></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.dob.date}</td>
                </tr >
            ))
            }
        </>
    )
};
export default renderEmployees;