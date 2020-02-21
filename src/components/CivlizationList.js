import React from 'react';
import { connect } from 'react-redux';

const CivilizationList = props => {
    console.log('props', props);
    return (
        <>
            {props.civilizations ? props.civilizations.map(civilization => <div>{civilization.name}</div>) : <div>Fetch civilizations to see data</div>}
        </>
    )
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        civilizations: state.civilizations.civilizations,
    }
}
export default connect(
    mapStateToProps,
    {}
)(CivilizationList)