import React from "react";
import "./style.css";

// function to return search box component
function Searchbox(props) {
    return (
        <div className="Searchbox" id="searchBox">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search By Name" aria-label="Search"
                    value={props.search}
                    name="Name" onChange={props.handleInputChange} />
                <button className="btn btn-outline-success" type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    );
}

export default Searchbox;