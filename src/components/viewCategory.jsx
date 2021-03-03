import React from 'react';
import { connect } from 'react-redux';
import { editCategory } from '../redux/actions';
import {  InputLabel, Input } from '@material-ui/core';

const mapStateToProps = (state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory
});
class EditCategory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="component-wrapper">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" disabled value={this.props.categories.find(cat => cat.id == this.props.selectedCategory).name} />
            </div>
        );
    }
}
export default connect(mapStateToProps, { editCategory })(EditCategory)