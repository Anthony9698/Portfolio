import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import styles from './layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    SideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.SideDrawerTogglerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.state.SideDrawerClosedHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout