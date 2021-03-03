import React from 'react';
import { connect } from 'react-redux';
import { Button, Input, InputLabel } from '@material-ui/core';
import { addCategory } from '../redux/actions'
const mapStateToProps = (state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory
});
class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: { id: this.props.categories.length + 1, name: '' } };
    this.handleChange = this.handleChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }
  handleChange(event) {
    let category = this.state.category;
    category.name = event.target.value;
    this.setState({ category: category });
  }
  addCategory() {
    this.props.addCategory(this.state.category);
    this.props.history.push('/list');
  }
  render() {
    return (
      <div className="component-wrapper">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" value={this.state.category.name} onChange={this.handleChange} />
        <Button disabled={!this.state.category.name} onClick={this.addCategory}>Save</Button>
      </div>
    );
  }
}
export default connect(mapStateToProps, { addCategory })(AddCategory)