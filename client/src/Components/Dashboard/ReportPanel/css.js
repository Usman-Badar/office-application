export const css = `/* .candidateDetails {
    background-size: 100%;
    background-image: url('../../../images.');
} */

.candidateDetails .usrBackImg {
    width: 100%;
    height: 200px;
    background-image: url('https://image.freepik.com/free-photo/abstract-blue-planets-pattern-blue-background-panoramic-image_295303-2418.jpg');
    background-size: 100%;
    position: relative;
}

.candidateDetails .usrBackImg .usrImg {
    position: absolute;
    top: calc( 100% - 75px);
    left: calc( 50% - 75px);
    width: 150px;
    height: 150px;
    border: 10px solid #fff;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.candidateDetails .otherDetails {
    padding: 80px 0 20px 0;
    color: #000;
}

.candidateDetails .otherDetails .container {
    font-size: 12px;
    width: 60% !important;
    margin-left: 20%;
    margin-top: 30px;
}

.candidateDetails .otherDetails .container .row>div {
    justify-content: center;
    display: flex;
}

.GetCandidate {
    padding: 20px;
    position: relative;
}

.GetCandidate nav {
    z-index: 10;
}

.GetCandidate nav .nav-tabs {
    border: 0;
}

.GetCandidate .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #2182C5;
    border-color: transparent transparent #00a751;
    border-bottom: 4px solid #00a751 !important;
    font-weight: bolder;
}

.GetCandidate .nav-tabs .nav-link {
    color: #2182C5;
    font-family: Exo;
    font-weight: bolder;
    text-transform: uppercase;
    border: 2px solid transparent;
    font-size: 15px;
}

.GetCandidate .nav-tabs .nav-link:hover {
    border: 2px solid transparent;
}

.GetCandidate .container-fluid .row .col-lg-12 .search_options {
    padding: 30px;
    background-color: #2182C5;
    border-radius: 10px;
    color: #ffffff;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.GetCandidate .container-fluid .row .col-lg-12 .search_options .sec {
    width: 33.33333%;
    font-family: Quicksand;
    cursor: pointer;
}

.GetCandidate .container-fluid .row .col-lg-12 .search_options .sec h5 {
    border-right: 1px solid rgb(255, 255, 255, .2);
}

.GetCandidate .container-fluid .row .col-lg-12 .search_options .sec i {
    padding: 15px;
    background-color: rgb(255, 255, 255, .1);
    border-radius: 50%;
    border: 1px solid #ffffff;
    font-size: 20px;
}

.GetCandidate .container-fluid .search_result {
    background-color: #ecedf3;
    padding: 30px;
    margin-top: 50px;
    position: relative;
}

.GetCandidate .SbyTDSInput {
    background: none;
    color: #ffffff;
}

.GetCandidate .SbyTDSInput option {
    color: #2182C5;
}

.GetCandidate .SbyTDSInput:focus {
    box-shadow: none;
    border: 1px solid #ffffff;
}

.GetCandidate .SbyTDSInput::placeholder {
    color: rgb(255, 255, 255, .8);
}

.GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div {
    width: 100%;
    height: min-content;
    padding: 30px 20px;
    background-color: #ffffff;
    border-radius: 5px;
    font-family: Quicksand;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #2182C5;
}

.GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div img {
    border: 5px solid #ffffff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border-radius: 50%;
}

.GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div p {
    color: grey;
}

.GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div .btn {
    background-color: #00a751;
    color: #ffffff;
}

.GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div .candidate_info_div_bottom {
    /* border: lightgrey 1px solid; */
    margin: 10px 20px;
    border-radius: 20px;
}

.report {
    font-size: 10px;
}

@media only screen and (max-width: 1200px) {
    .tab-container {
        display: block !important;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec {
        width: 100%;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec .col-4 {
        text-align: right !important;
        padding: 0px 25px 0 0 !important;
        max-width: 10% !important;
    }
}


/* @media only screen and (max-width: 992px)
{

    .candidateDetails .leftSide {
        width: 100%;
    }

    .candidateDetails .rightSide {
        width: 100%;
        display: block;
    }

    .candidateDetails .rightSide i {
        margin: 0 10px;
    }

} */

@media only screen and (max-width: 768px) {
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec .col-4 {
        max-width: 15% !important;
    }
    .GetCandidate nav {
        margin-top: 50px;
    }
    .candidateDetails .otherDetails {
        margin-left: -40px;
    }
    .candidateDetails .otherDetails .container {
        font-size: 12px;
        width: 100% !important;
        margin-top: 30px;
    }
    .candidateDetails .otherDetails .container .row>div {
        justify-content: left;
    }
}

@media only screen and (max-width: 600px) {
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec .col-4 {
        max-width: 20% !important;
    }
    .GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div {
        text-align: center;
    }
    .GetCandidate .container-fluid .row .col-lg-4 .candidate_info_div h5 {
        margin-top: 15px;
    }
    .candidateDetails .otherDetails .container {
        font-size: 12px;
        width: 100% !important;
        margin-top: 30px;
    }
}

@media only screen and (max-width: 450px) {
    .GetCandidate {
        padding: 10px 0;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec .col-4 {
        max-width: 25% !important;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec h5 {
        width: 100%;
        font-size: 16px;
        margin: 10px !important;
        padding: 0 !important;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options {
        padding: 30px 10px 30px 30px;
    }
    .tab-parent {
        padding: 0;
        margin: 0;
    }
    .GetCandidate .container-fluid .row .col-lg-12 .search_options .sec i {
        padding: 10px;
        /* margin: 5px 0 0 0; */
    }
    .candidateDetails .otherDetails .container {
        font-size: 12px;
        width: 100% !important;
        margin-top: 30px;
    }
}`