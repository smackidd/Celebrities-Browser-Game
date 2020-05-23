import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserLogin extends Component {
    render() {
        return (
            <div id="registration-box">
                <div id="registration-inner-box">
                    <form onSubmit={this.onSubmit}>
                        <div id="title-box"><h1>CELEBRITIES</h1></div>
                        <div id="registration-inputs">
                            <h2>Sign In</h2>
                            <input 
                                id="username-input" 
                                name="username" 
                                type="text" 
                                placeholder="Username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}/>
                            <input 
                                id="password-input" 
                                name="password" 
                                type="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangePassword}/>
                        </div>
                        <div id="registration-buttons">
                            <button type="reset" class="btn-cancel">Cancel</button>
                            <button type="submit" class="btn-submit">Submit</button>
                            
                        </div>
                        <div id="register-here"><p>Not registered yet? <Link to="/register">Register here!</Link></p></div>
                    </form>
                </div>
            </div>
        )
    }
}