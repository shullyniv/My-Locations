import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, InputLabel } from '@material-ui/core';
import { editCategory } from '../redux/actions'
const mapStateToProps = (state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory
});
class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: this.props.categories.find(category => category.id == this.props.selectedCategory) };
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
    }
    handleChange(event) {
        let category = this.state.category;
        category.name = event.target.value;
        this.setState({ category: category });
    }
    save() {
        this.props.editCategory(this.state.category);
        this.props.history.push('/list');
    }
    render() {
        return (
            <div className="component-wrapper">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" value={this.state.category.name} onChange={this.handleChange} />
                <Button disabled={!this.state.category.name} onClick={this.save}>Save</Button>
            </div>
        );
    }
}
export default connect(mapStateToProps, { editCategory })(EditCategory)