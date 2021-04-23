import React from "react";
import "./style.css";

function Searchbox() {
    return (
        <div className="Searchbox">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
}

export default Searchbox;