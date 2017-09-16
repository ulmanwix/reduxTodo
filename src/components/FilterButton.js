import React from 'react';

const FilterButton = ({active, onFilterClick, filter, children}) => (
    <button className="filter-button" onClick={() => onFilterClick(filter)}>
        {children}
    </button>
)

export default FilterButton;