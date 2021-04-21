import react, { Component } from 'react';

import './LoginForm.css';
import * as passwordHash from 'password-hash';
import axios from '../../../axios-instance';
import Cookies from 'js-cookie';
import Loading from '../../UI/Loading/Loading';
import $ from 'jquery';

class LoginForm extends Component {

    constructor( props )
    {

        super( props );
        this.state = {
            userInfo: {
                loginID: null,
                loginPass: null
            },
            loading: true
        }

    }

    componentDidMount()
    {

        this.setState( { loading: false } );

    }

    onChangeHandler = ( event ) => {

        const { name, value } = event.target;
        const setValues = {

            ...this.state.userInfo,
            [name]: value

        }
        this.setState( { userInfo: setValues } );

    }

    userLogin = ( event ) => {

        this.setState( { loading: true } );

        event.preventDefault();
        const Data = {
            loginID: this.state.userInfo.loginID,
            loginPass: this.state.userInfo.loginPass
        }

        axios.get( '/getuser' ).then( response => {

            console.log( response.data );
            for( let key in response.data )
            {

                // console.log( response.data[key] );

                if( ( response.data[key].login_id == this.state.userInfo.loginID ) && passwordHash.verify( this.state.userInfo.loginPass, response.data[key].user_password ) )
                {

                    // sessionStorage.setItem('loginID', response.data[key].login_id);
                    Cookies.set('LoginID', response.data[key].login_id );
                    console.log(Cookies.get('LoginID'));
                    this.setState( { loading: false } );
                    this.props.history.push('/dashboard');

                }

            }

        } ).catch( error => {

            this.setState( { loading: false } );
            alert(error);

            $('input[type=password]').val( '' );
            console.log( error );

        } );

    }

    render()
    {

        return(

            <>
                <Loading show={this.state.loading} />
                <div className="loginForm d-grid">
                    <div className="loginForm-inner d-flex justify-content-center">
                        <div className="loginForm-content">
                            <form onSubmit={this.userLogin}>
                                <h3 className="mb-3">Login</h3>
                                <input
                                    type="text"
                                    className="form-control form-control-sm mb-3 rounded-0"
                                    placeholder="Your Login ID"
                                    name="loginID"
                                    onChange={this.onChangeHandler}
                                />
                                <input
                                    type="password"
                                    className="form-control form-control-sm mb-3 rounded-0"
                                    placeholder="Your Password"
                                    name="loginPass"
                                    onChange={this.onChangeHandler}
                                />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-sm px-5 btns">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        );

    }

}

export default LoginForm;