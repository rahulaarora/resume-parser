import skillsData from "../data/skillsData";
import useScript from "../hooks/useScript";
import Script from "next/script";
import { signOut } from "next-auth/react";
import BarGraph from "./Charts/BarGraph";
import PieGraph from "./Charts/PieGraph";

const Dashboard = (props) => {
    const scores = [];

    Object.keys(props.scores).map((obj, i) => {
        return (
            scores.push({
                name: obj.charAt(0).toUpperCase() + obj.slice(1),
                score: props.scores[obj],
            })
        )
    })

    useScript("https://use.fontawesome.com/releases/v6.1.0/js/all.js")

    let skills = props.skills.split(",").map((skill) => skill.trim());

    let matchedSkills = []
    let totalSkills = []
    let requiredSkills = []
    for (const role in skillsData) {
        if (Object.hasOwnProperty.call(skillsData, role)) {
            if (role == props.role) {
                totalSkills = skillsData[role]
                skills.forEach(skill => {
                    if (skillsData[role].includes(skill)) {
                        matchedSkills.push(skill)
                    }
                });
                break;
            }
        }
    }

    requiredSkills = totalSkills.filter(skill => !matchedSkills.includes(skill)).map(function (x) { return x.toUpperCase(); })



    const pieData = [
        { name: 'Skills Matched', value: matchedSkills.length },
        { name: 'Skills Required', value: requiredSkills.length },
    ];

    return (
        <>
            <Script src="./js/script.js" />
            <Script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" />
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <a className="navbar-brand ps-3" href="#">Resume Parser</a>
                {/* <!-- Sidebar Toggle--> */}
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-0 me-md-4 me-lg-0 flex-grow-1 flex-md-grow-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">

                </div>
                {/* <!-- Navbar--> */}
                <div className="pe-2 pe-md-3"><a href="#" className="signOut text-decoration-none" onClick={() => { signOut() }}>Sign Out</a></div>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" href="#">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    Dashboard
                                </a>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                            <span title={props.email}>
                                {props.name}
                            </span>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">{props.email}</li>
                            </ol>
                            {/* <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body">Primary Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <div className="card-body">Success Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <div className="card-body">Danger Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" href="#">View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-bar me-1"></i>
                                            Skills Scores <a href="#" className="text-decoration-none">( Take test to improve! )</a>
                                        </div>
                                        <div className="card-body" style={
                                            {
                                                height: "400px",
                                            }
                                        }>
                                            <BarGraph data={scores} />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <i className="fas fa-chart-area me-1"></i>
                                            Desired Job Role: {props.role}
                                        </div>
                                        <div className="card-body" style={
                                            {
                                                height: "300px",
                                            }
                                        }>
                                            <PieGraph data={pieData} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-bar me-1"></i>
                                        Suggested Courses
                                    </div>
                                    <div className="card-body row justify-content-center align-items-center px-4">
                                        {
                                            requiredSkills.map((skill, key) => {
                                                return (
                                                    <div className="card me-3 min-w-20 mb-3" style={{ width: "18rem" }} key={key}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{skill}</h5>
                                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis, unde tenetur dolor placeat deleniti </p>
                                                            <a href="#" className="btn btn-primary">View Details <svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"></path></svg></a>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Resume-Parser</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    );
}

export default Dashboard;