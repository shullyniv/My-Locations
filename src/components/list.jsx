import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../redux/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const mapStateToProps = (state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory
});

class CategoriesList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.selectCategory(null);
    }
    render() {
        const listItems = this.props.categories.map((category, index) =>
            <ListItem  key={index} className={this.props.selectedCategory == category.id ? 'highlight': ''} button onClick={() => this.props.selectCategory(category.id)}> <ListItemText primary={category.name} /></ListItem>
        );
        return (
            <List>{listItems}</List>
        );
    }
}
export default connect(mapStateToProps, { selectCategory })(CategoriesList);