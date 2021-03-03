import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Route, Link ,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteCategory } from '../redux/actions';
const mapStateToProps = (state) => ({
    selectedCategory: state.selectedCategory,
});
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.deleteCategory = this.deleteCategory.bind(this);
    }
    deleteCategory() {
        this.props.deleteCategory(this.props.selectedCategory);
        this.props.history.push('/list');
    }
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Route> 
                        <Link to='/list'><Button className="menu-item">Categories List</Button></Link>
                        <Link to='/add'><Button className="menu-item"> Add Category</Button></Link>
                        {this.props.selectedCategory &&(<Link to='/edit'><Button className="menu-item"> Edit</Button></Link>)}
                        {this.props.selectedCategory && (<Link to='/view'><Button className="menu-item" >View</Button></Link>)}
                        {this.props.selectedCategory && (<Button className="menu-item" onClick={this.deleteCategory}>Delete</Button>)}
                    </Route>
                </Toolbar>
            </AppBar>
        );
    }
}
export default withRouter (connect(mapStateToProps, { deleteCategory })(Home))