import React, {Component} from 'react';
import './Navigation.css';
class Navigation extends Component {
    render() {
        return (
            <div className={"nav"}>
                <span className={(this.props.current==='random')?"active":""} onClick={
                    ()=>{
                        this.props.switchFun('random');
                    }}>Random</span>
                <span className={(this.props.current==='history')?"active":""} onClick={
                    ()=>{
                        this.props.switchFun('history');
                    }}>History</span>
            </div>
        );
    }
}

export default Navigation;
