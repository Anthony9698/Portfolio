import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import styles from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        activeName: false
    }

    activeNameHandler = () => this.setState({ activeName: true });
    deactiveNameHandler = () => this.setState({ activeName: false });
    

    // SideDrawerClosedHandler = () => {
    //     this.setState({ showSideDrawer: false });
    // }

    // SideDrawerToggleHandler = () => {
    //     this.setState(prevState => {
    //         return { showSideDrawer: !prevState.showSideDrawer };
    //     });
    // }

    render() {
        return (
            <Aux>
                <Toolbar 
                    activateName={this.activeNameHandler}
                    deactivateName={this.deactiveNameHandler} 
                    activeName={this.state.activeName} />
                {/* <Toolbar drawerToggleClicked={this.SideDrawerTogglerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.state.SideDrawerClosedHandler} /> */}
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout