import React, { Component } from 'react';

import './LaboratoryInvestigation.css';
import $ from 'jquery';
import Loading from '../../../UI/Loading/Loading';
import axios from '../../../../axios-instance';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

class LaboratoryInvestigation extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            loading: true,
            Investication: {
                bloodGroup: "",
                hemoglobin: "",
                malaria: "",
                microFilaria: "",
                RBs: "",
                lft: "",
                creatinine: "",
                hivIII: "",
                HbsAg: "",
                antiHcv: "",
                vdrl: "",
                tpha: "",
                sugar: "",
                albumin: "",
                CovidPCR: "",
                CovidAntibodies: "",
                helminthes: "",
                ova: "",
                cyst: "",
                others: "",
            },
            vaccination: {
                Polio: "yes",
                PolioDate: null,
                MMR1: "yes",
                MMR1Date: null,
                MMR2: "yes",
                MMR2Date: null,
                Meningococcal: "yes",
                MeningococcalDate: null,
                Covid: "yes",
                CovidDate: null,
            }

        }

    }

    componentDidMount()
    {

        $('div.options-tabs').slideUp(0);

        this.setState( { loading: false } );

    }

    onChangehandler =( event ) => {

        const { name, value } = event.target;
        const setvalues = {
            ...this.state.Investication,
            [name]: value
        }

        this.setState( { Investication: setvalues } );

    }

    vaccinationChangehandler = ( event ) => {

        const { name, value } = event.target;
        let setValues = {};
        
        setValues = {
            ...this.state.vaccination,
            [name]: value
        }

        this.setState( { vaccination: setValues } );

        if ( value === "yes" )
        {
            $('#' + name).attr("required", true);
            $('#' + name).attr("disabled", false);
        }else
        {
            $('#' + name).attr("required", false);
            $('#' + name).attr("disabled", true);
        }

    }

    onLaboratorySubmittion = ( event ) => {

        const formsData = new FormData();
        event.preventDefault();
        if( Cookies.get('CandidateID') !== undefined )
        {
            this.setState( { loading: true } );

            formsData.append('bloodGroup', this.state.Investication.bloodGroup);
            formsData.append('hemoglobin', this.state.Investication.hemoglobin);
            formsData.append('malaria', this.state.Investication.malaria);
            formsData.append('microFilaria', this.state.Investication.microFilaria);
            formsData.append('RBs', this.state.Investication.RBs);
            formsData.append('lft', this.state.Investication.lft);
            formsData.append('creatinine', this.state.Investication.creatinine);
            formsData.append('hivIII', this.state.Investication.hivIII);
            formsData.append('HbsAg', this.state.Investication.HbsAg);
            formsData.append('antiHcv', this.state.Investication.antiHcv);
            formsData.append('vdrl', this.state.Investication.vdrl);
            formsData.append('tpha', this.state.Investication.tpha);
            formsData.append('sugar', this.state.Investication.sugar);
            formsData.append('albumin', this.state.Investication.albumin);
            formsData.append('CovidPCR', this.state.Investication.CovidPCR);
            formsData.append('CovidAntibodies', this.state.Investication.CovidAntibodies);
            formsData.append('helminthes', this.state.Investication.helminthes);
            formsData.append('ova', this.state.Investication.ova);
            formsData.append('cyst', this.state.Investication.cyst);
            formsData.append('others', this.state.Investication.others);

            formsData.append('Polio', this.state.vaccination.Polio);
            formsData.append('PolioDate', this.getDate(this.state.vaccination.PolioDate));
            formsData.append('MMR1', this.state.vaccination.MMR1);
            formsData.append('MMR1Date', this.getDate(this.state.vaccination.MMR1Date));
            formsData.append('MMR2', this.state.vaccination.MMR2);
            formsData.append('MMR2Date', this.getDate(this.state.vaccination.MMR2Date));
            formsData.append('Meningococcal', this.state.vaccination.Meningococcal);
            formsData.append('MeningococcalDate', this.getDate(this.state.vaccination.MeningococcalDate));
            formsData.append('Covid', this.state.vaccination.Covid);
            formsData.append('CovidDate', this.getDate(this.state.vaccination.CovidDate));
            formsData.append('Inserter', Cookies.get('LoginID'));
            formsData.append('CandidateID', Cookies.get('CandidateID'));

            console.log( event );

            axios.post( '/laboratoryentry', formsData ).then( () => {

                this.setState( { loading: false } );
                this.props.error("Laboratory Data inserted successfully");
                
                $('input.form-control').val('');
                $('select').val('');
    
            } ).catch( error => {
    
                this.setState( { loading: false } );
                this.props.error("Network Error 500");
    
            } );

        }else
        {
            
            this.setState( { loading: false } );
            this.props.error("No Candidate found");

        }
        Cookies.remove('CandidateID')

    }

    getDate = ( value ) => {

        let getSplit = value.split('-');
        let year = getSplit[0];
        let month = getSplit[1];
        let date = getSplit[2];

        let removeZeroFromMonth = month.substring(1,2);
        let getCorrectMonth = removeZeroFromMonth - 1;

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let getMonthName = monthNames[getCorrectMonth];

        let WhatTheCorrectDate = year + "-" + getMonthName + "-" + date;
        return WhatTheCorrectDate;

    }

    render()
    {

        return(

            <>
                <Loading show={this.state.loading} />
                <form onSubmit={this.onLaboratorySubmittion} className="LaboratoryInvestigation">

                    {/* 
                        ************************************************
                        *  LaboratoryInvestigation content has started *
                        *                                              *
                        * **********************************************
                    */}
                    <nav>
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="GENERAL-tab" data-toggle="tab" href="#GENERAL" role="tab" aria-controls="nav-home" aria-selected="true">GENERAL </a>
                            <a className="nav-item nav-link" id="VACCINATION-tab" data-toggle="tab" href="#VACCINATION" role="tab" aria-controls="nav-profile" aria-selected="false">VACCINATION</a>
                        </div>
                    </nav>
                    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="GENERAL" role="tabpanel" aria-labelledby="GENERAL-tab">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 px-0">

                                        {/* <p className="text-uppercase font-weight-bold mb-1">blood group</p> */}
                                        <input
                                            required
                                            type="text"
                                            placeholder="BLOOD GROUP"
                                            className="form-control form-control-sm rounded-0 mb-3"
                                            name="bloodGroup"
                                            onChange={this.onChangehandler}
                                        />
                                        {/* <p className="text-uppercase font-weight-bold mb-1">hemoglobin</p> */}
                                        <input
                                            required
                                            type="text"
                                            placeholder="HEMOGLOBEN"
                                            className="form-control form-control-sm rounded-0 mb-3"
                                            name="hemoglobin"
                                            onChange={this.onChangehandler}
                                        />

                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">

                                        <div style={{ 'cursor': 'pointer' }}>
                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="THICKFILMFOR">THICK FILM FOR</p>

                                            <div className="THICKFILMFOR_tab options-tabs">

                                                {/* <p className="text-uppercase font-weight-bold mb-1">malaria</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="MALARIA"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="malaria"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">micro filaria</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="MICROFILARIA"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="microFilaria"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="BIOCHEMISTRY">BIOCHEMISTRY</p>

                                            <div className="BIOCHEMISTRY_tab options-tabs">

                                                {/* <p className="text-uppercase font-weight-bold mb-1">R.B.s</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="RBS"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="RBs"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">l.f.t</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="LFT"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="lft"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">creatinine</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="CREATININE"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="creatinine"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="SEROLOGY">SEROLOGY</p>

                                            <div className="SEROLOGY_tab options-tabs">

                                                {/* <p className="text-uppercase font-weight-bold mb-1">hiv I & II</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="HIV I & II"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="hivIII"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">Hbs ag</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="HBS Ag"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="HbsAg"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">anti hcv</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="ANTI HCV"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="antiHcv"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">vdrl</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="VDRL"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="vdrl"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">tpha <sub>(if vdrl positive)</sub> </p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="TPHA (if vdrl positive)"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="tpha"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="URINE">URINE</p>

                                            <div className="URINE_tab options-tabs">

                                                {/* <p className="text-uppercase font-weight-bold mb-1">sugar</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="SUGAR"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="sugar"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">albumin</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="ALBUMIN"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="albumin"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="COVID">COVID - 19</p>

                                            <div className="COVID_tab options-tabs">

                                                {/* <p className="text-uppercase font-weight-bold mb-1">Covid PCR</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="COVID PCR"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="CovidPCR"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">Covid Antibodies</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="COVID ANTIBODIES"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="CovidAntibodies"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                            <p className="border-bottom tab-btns text-uppercase font-weight-bold" id="STOOL">STOOL</p>

                                            <div className="STOOL_tab options-tabs">

                                                <h5 className="text-uppercase font-weight-bold mb-1">routine</h5>

                                                {/* <p className="text-uppercase font-weight-bold mb-1">helminthes</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="HELMINTHES"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="helminthes"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">ova</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Ova"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="ova"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">cyst</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Cyst"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="cyst"
                                                    onChange={this.onChangehandler}
                                                />
                                                {/* <p className="text-uppercase font-weight-bold mb-1">others</p> */}
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="OTHERS"
                                                    className="form-control form-control-sm rounded-0 mb-3"
                                                    name="others"
                                                    onChange={this.onChangehandler}
                                                />

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="VACCINATION" role="tabpanel" aria-labelledby="VACCINATION-tab">
                            <h5 className="text-uppercase text-center font-weight-bold mb-1">Vaccination Status</h5>
                            <div className="container-fluid pt-3 pr-5">
                                <div className="row">
                                    <div className="col-lg-6 col-md-4 col-sm-4 col-4 font-weight-bold mb-3 text-center">
                                        Type
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-4 col-4 font-weight-bold mb-3 text-center">
                                        date
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 d-grid">
                                        Polio
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <select required onChange={this.vaccinationChangehandler} name="Polio" className="form-control form-control-sm rounded-0">
                                            <option selected>yes</option>
                                            <option>no</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <input
                                            id="Polio" onChange={this.vaccinationChangehandler} required type="date" name="PolioDate" className="form-control rounded-0 form-control-sm" />

                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 d-grid">
                                        MMR 1
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <select required onChange={this.vaccinationChangehandler} name="MMR1" className="form-control form-control-sm rounded-0">
                                            <option selected>yes</option>
                                            <option>no</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <input
                                            id="MMR1" onChange={this.vaccinationChangehandler} required type="date" name="MMR1Date" className="form-control rounded-0 form-control-sm" />

                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 d-grid">
                                        MMR2
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <select required onChange={this.vaccinationChangehandler} name="MMR2" className="form-control form-control-sm rounded-0">
                                            <option selected>yes</option>
                                            <option>no</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <input
                                            id="MMR2" onChange={this.vaccinationChangehandler} required type="date" name="MMR2Date" className="form-control rounded-0 form-control-sm" />

                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 d-grid">
                                        Meningococcal
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <select required onChange={this.vaccinationChangehandler} name="Meningococcal" className="form-control form-control-sm rounded-0">
                                            <option selected>yes</option>
                                            <option>no</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <input
                                            id="Meningococcal" onChange={this.vaccinationChangehandler} required type="date" name="MeningococcalDate" className="form-control rounded-0 form-control-sm" />

                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 d-grid">
                                        Covid
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <select required onChange={this.vaccinationChangehandler} name="Covid" className="form-control form-control-sm rounded-0">
                                            <option selected>yes</option>
                                            <option>no</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 text-center d-grid mb-3">

                                        <input
                                            id="Covid" onChange={this.vaccinationChangehandler} required type="date" name="CovidDate" className="form-control rounded-0 form-control-sm" />

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-12 mt-3">
                        <button type="submit" className="btn btn-sm w-50">submit</button>
                    </div>

                    


                    {/* 
                        ************************************************
                        *  LaboratoryInvestigation content end         *
                        *                                              *
                        * **********************************************
                        */}


                </form>
                <ToastContainer autoClose={3000} />
            </>

        );

    }

}

export default LaboratoryInvestigation;