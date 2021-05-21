import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import './NewDashboard.css';
import NewCandidateInfo from './CandidateInfo/NewCandidateInfo';
import Report from './ReportPanel/ReportPanel';
import Loading from '../UI/Loading/Loading';
import CreateUser from './CandidateInfo/CreateUser/CreateUser';
import DashboardHome from './DashboardHome/DashboardHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends Component {

    constructor( props )
    {

        super( props );
        this.state = {
            show: true,
            isShowed: false,
            isHided: false,
            shortScreen: false,
            loading: true,
            fixedBtnIcon: 'las la-times la-2x'
        }

    }

    componentDidMount()
    {

        this.setState( { loading: false } );
        this.props.history.push('/dashboard');

        // the following block of code is to check that user has login id or not after every second
        setInterval( () => {

            if (Cookies.get('LoginID') === undefined || Cookies.get('LoginID') == null) {
                
                this.props.history.push('/login');

            }

        }, 0.1 * 1000 );

        let ScWd = window.outerWidth;
        if (ScWd < 1101) {

            this.setState({ shortScreen: true, show: false });

        } else {

            this.setState({ shortScreen: false, show: true });

        }

        //Get Screen width for responsive
        window.addEventListener( 'resize', () => {

            let ScWd = window.outerWidth;
            if (ScWd < 1101) {

                this.setState({ shortScreen: true });

            } else {

                this.setState({ shortScreen: false, show: true });

            }

        } );
        

    }

    // the following block of code is to open & close the side bar
    openClose = () => {

        if( this.state.show )
        {
            this.setState( { show: false, fixedBtnIcon: 'las la-ellipsis-v la-2x' } );
        }else
        {
            this.setState( { show: true, fixedBtnIcon: 'las la-times la-2x' } );
        }

    }

    render()
    {

        return(

            <>
                <Loading show={this.state.loading} />
                <div className="user_box_container d-mobile-768-none">
                    <div className="d-flex justify-content-center user_box">
                        <div className="">
                            <img
                                src={'images/users/' + Cookies.get('UserImg')}
                                width="30"
                                height="30"
                                className="rounded-circle"
                                alt="user img"
                            />
                        </div>
                        <div className="d-grid px-3">
                            <p>{Cookies.get('LoginID')}</p>
                        </div>
                        <div className="d-grid">
                            <p><i className="las la-user-secret"></i></p>
                        </div>
                    </div>
                </div>
                <div className="NewDashboard">
                    <div className="side_bar" style={ { 'left' : this.state.show ? '0' : '-100%' } }>
                        <div className="fix-top-bar">
                            <button className='btn fixed_btn p-0 m-0 p-2' onClick={this.openClose} >
                                <i className={this.state.fixedBtnIcon}></i>
                            </button>
                        </div>
                        <h3 className="text-center pt-3 pb-0 mb-0">
                            lab official
                            <div>online laboratory</div>
                        </h3>
                        <hr />
                        <div className="clear_float"></div>
                        <div className="d-grid">
                            <div className="side-links">
                                <NavLink onClick={ this.state.shortScreen ? this.openClose : null } activeClassName="linkActive" to={ "/dashboard" }>
                                    <div className="d-grid pr-1">
                                        <i className="las la-home"></i>
                                    </div>
                                    <div className="d-grid pl-1">
                                        dashboard
                                    </div>
                                </NavLink>
                                <NavLink onClick={ this.state.shortScreen ? this.openClose : null } activeClassName="linkActive" to={ "/candidateinfo" }>
                                    <div className="d-grid pr-1">
                                        <i className="las la-info-circle"></i>
                                    </div>
                                    <div className="d-grid pl-1">
                                        candidate info
                                    </div>    
                                </NavLink>
                                <NavLink onClick={ this.state.shortScreen ? this.openClose : null } activeClassName="linkActive" to="/reports">
                                    <div className="d-grid pr-1">
                                        <i className="las la-print"></i>
                                    </div>
                                    <div className="d-grid pl-1">
                                        reports
                                    </div>
                                </NavLink>
                                {
                                    Cookies.get('Role') === 'Admin' ?
                                        <NavLink onClick={ this.state.shortScreen ? this.openClose : null } activeClassName="linkActive" to="/createuser">
                                            <div className="d-grid pr-1">
                                                <i className="las la-user-edit"></i>
                                            </div>
                                            <div className="d-grid pl-1">
                                                New User
                                            </div>
                                        </NavLink>
                                    :
                                    null
                                }
                            </div>
                            <div className="logout_div">
                                <div className="side-links mb-0 pb-0">
                                    <NavLink onClick={ this.state.shortScreen ? this.openClose : null } activeClassName="linkActive" to="/logout" className="mb-0">
                                        <div className="d-grid pr-1">
                                            <i className="las la-sign-out-alt"></i>
                                        </div>
                                        <div className="d-grid pl-1">
                                            Logout
                                        </div>
                                    </NavLink>
                                    <hr />
                                    <div className="clear_float"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-content">
                        <Switch>
                            <Route path='/dashboard' component={DashboardHome} />
                            <Route path='/candidateinfo' component={NewCandidateInfo} />
                            <Route path='/reports' component={Report} />
                            <Route path='/createuser' component={CreateUser} />
                        </Switch>
                    </div>
                </div>
                <ToastContainer autoClose={3000} />
            </>
            
        )

    }

}


export default Dashboard;