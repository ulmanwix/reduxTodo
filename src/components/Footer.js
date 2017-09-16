import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../store/actions';
import FilterButton from './FilterButton';
import Filters from '../store/Filters';

const isActive = activeFilter => filter => filter === activeFilter;

const Footer = ({activeFilter, setFilter}) => {     
    const isCurrentActive = isActive(activeFilter);
    const onFilterClick = (filter) => setFilter(filter);

    return (
        <footer className="footer">
            <FilterButton 
                filter={Filters.all} 
                active={isCurrentActive(Filters.all)}
                onFilterClick={onFilterClick}
            >
                All
            </FilterButton>
            <FilterButton 
                filter={Filters.completed}
                active={isCurrentActive(Filters.completed)} 
                onFilterClick={onFilterClick}                           
            >
                Completed
            </FilterButton>
            <FilterButton 
                filter={Filters.pending}
                active={isCurrentActive(Filters.pending)}
                onFilterClick={onFilterClick}                                            
            >
                Pending
            </FilterButton>
        </footer>
    );
};

const mapStateToProps = (state) => ({
    activeFilter: state.filter
});

export default connect(mapStateToProps, { setFilter })(Footer);