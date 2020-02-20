import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const SearchForm = props => {
    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <>
            <button onClick={handleGetData}>Get Civilizations</button>
        </>
    );
};
const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(SearchForm);