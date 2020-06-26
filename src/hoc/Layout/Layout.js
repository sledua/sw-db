import React, {Component} from "react";
import styles from "./Layout.module.css"
import Nav from "../../components/Navigation/Nav/Nav";

class Layout extends Component{
    render() {
        return (
            <div className={styles.Layout}>
                <Nav/>
                {this.props.children}
            </div>
        )
    }
}
export default Layout;
