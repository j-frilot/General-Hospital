import React from "react";

const FilterForm = () => {
    return (
        <section className="filter">
            <form className="container form-container">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Search Physicians"
                />
            </form>
        </section>
    );
};

export default FilterForm;
