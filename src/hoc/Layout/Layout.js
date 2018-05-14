import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }
  sideDrawerToggleHandler = () => {
    this.setState((prev) => {
      return {showSideDrawer: !prev.showSideDrawer};
    });
  }
  render () {
    return (
      <Aux>
        <div>
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler} />
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;
