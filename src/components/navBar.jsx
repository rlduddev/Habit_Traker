import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <header className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>   
                <span>Habit Traker</span> 
                <span className="navbar-count">{this.props.totalCnt}</span>
            </header>
        );
    }
}

export default NavBar;