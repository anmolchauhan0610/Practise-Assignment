import React from 'react'
import "../style.css"
import logo from "../Pictures/Mainlogo.png"
import plus from "../Pictures/plus.png"
import user from "../Pictures/user.png"
import folder from "../Pictures/folder.png"
import upload from "../Pictures/upload.png"
import report from "../Pictures/report.png"
import setting from "../Pictures/setting.png"
import logout from "../Pictures/logout.png"
import profilePic from "../Pictures/profilePic.png"
import note2 from "../Pictures/note 2.png"
import menuicon from "../Pictures/menuicon.png"

const Sidebar = () => {
    return (
        <>
            <div className='main_div'>
                <div className='row m-0 p-0'>
                    <div className='col-1 sidebar text-center p-0'>
                        <div className='bglogo mb-3 ' >
                            <img className="logo" src={logo} alt='logo' style={{ width: "100%", height: "10%" }} />
                        </div>
                        <div className='my-3'>
                            <img className='mb-1' src={plus} alt='plus ' />
                            <p>NEW</p>
                        </div>
                        <div className="my-3">
                            <img className='mb-1' src={user} alt='user' />
                            <p>PATIENT</p>
                        </div>
                        <div className="my-3">
                            <img src={folder} alt='folder' />
                            <p>FOLDER</p>
                        </div>
                        <div className="my-3">
                            <img src={upload} alt='upload' />
                            <p>UPLOAD</p>
                        </div>
                        <div className="my-3">
                            <img src={report} alt='report' />
                            <p>REPORT</p>
                        </div>
                        <div className="my-3">
                            <img src={setting} alt='setting' />
                            <p>SETTING</p>
                        </div>
                        <div className="my-3">
                            <img src={logout} alt='logout' />
                            <p>LOGOUT</p>
                        </div>
                    </div>
                    <div className='col-4 profile text-center pt-4'>
                        <img className='profilePic' src={profilePic} alt="profilePic" />
                        <h2 className='headingName m-0'>Diane Cooper</h2>
                        <h6 className='headingEmail'>diane.cooper@example.coh6</h6>
                        <div className='detail d-flex w-100'>
                            <div className='picDetail w-50'>
                                <h5>15</h5>
                                <p>Past</p>
                            </div>
                            <div className='w-50'>
                                <h5>02</h5>
                                <p>Upcoming</p>
                            </div>

                        </div>
                        <h4 className='heading mt-4 mb-5'>Send Message</h4>
                        <h5 className='mb-5'>Files/Documents</h5>
                        <div className='files'>
                            <div className='row'>
                            <div className='col-4 d-flex flex-column justify-content-between'>
                                <div className=''>
                                <img className="icon py-3" src={menuicon} alt='menuicon' style={{ width: "30%", height: "" }} />
                            
                                </div>
                                <div className=''>
                                <img className="icon py-3" src={menuicon} alt='menuicon' style={{ width: "30%", height: "" }} />
                            
                                </div>
                                <div className=''>
                                <img className="icon py-3" src={menuicon} alt='menuicon' style={{ width: "30%", height: "" }} />
                            
                                </div>
                                <div className=''>
                                <img className="icon py-3" src={menuicon} alt='menuicon' style={{ width: "30%", height: "" }} />
                            
                                </div>
                           
                            </div>
                            <div className='col-8 d-flex flex-column justify-content-between'>
                                <div className=''>
                                <p className='m-0 py-3 text-start'>Check Up Results.pdf</p>
                                </div>
                                <div className=''>
                                <p className='m-0 py-3 text-start'>Check Up Results.pdf</p>
                                </div>
                                <div className=''>
                                <p className='m-0 py-3 text-start'>Medical Prescription.pdf</p>
                                </div>
                                <div className=''>
                                <p className='m-0 py-3 text-start'>Dental X-Ray Result.pdf</p>
                                </div>
                           
                            </div>
                            </div>
                            

                           
                        </div>
                    </div>
                    <div className='col-7 main_content mt-5'>
                        <div className='row'>
                            <div className='col-3'>
                            <div className='data'>
                                <p>Gender</p>
                                <p className='para pb-2'>Female</p>
                            </div>
                            
                            <div className='data'>
                                <p>Street Address</p>
                                <p className='para pb-2'>JL. Diponegoro No. 21</p>
                            </div>
                            </div>
                            <div className='col-3'>
                                 <div className='data'>
                                <p>Birthday</p>
                                <p className='para pb-2'>Feb 24th, 1997</p>
                            </div> 
                            <div className='data'>
                                <p>City</p>
                                <p className='para pb-2'>Cilacap</p>
                            </div>
                            
                           
                            </div>
                            <div className='col-3'>
                             <div className='data'>
                                <p>Phone Number</p>
                                <p className='para pb-2'>(239) 555 -0108</p>
                            </div> 
                            <div className='data'>
                                <p>Zip Code</p>
                                <p className='para pb-2'>655849</p>
                            </div>
                            
                            </div>
                            <div className='col-3'>
                            <div className='data'>
                                <p>Registered Date</p>
                                <p className='para pb-2'>Feb 24th, 1997</p>
                            </div>
                            <div className='data'>
                                <p>Member Status</p>
                                <p className='para pb-2'>Active Member</p>
                            </div>
                            </div>

                        </div>
                        <div className='appointments d-flex justify-content-between align-items-start  mt-5'>
                            <div className=' p-3'>
                            <p className=' upcomingApp m-0'>Upcoming Appointments</p>
                            </div>
                           <div className=' pastApp p-3'>
                           <p className='m-0'>Past Appointments</p>
                           </div>
                            <div className=' medApp p-3'>
                            <p className='m-0'>Medical Records</p>
                            </div>
                           
                        </div>
                        <div className='treatment mt-4'>
                            <div className='showTreatments mb-5 d-flex justify-content-between'>
                                <h6>Root Canal Treatment</h6>
                                <h6 className='showPrevious'>Show Previous Treatments</h6>
                            </div>
                            <div className='row  firstRow px-0'>
                                <div className='showTreat col-3 p-0'>
                                <div className='options'>
                                    <h5 className='date'>26 Nov ‘19</h5>
                                    <p>09.00 - 10.00</p>
                                </div>
                                </div>
                                <div className=' showTreat col-3 p-0'>
                                <div className='options'>
                                    <p>Treatment</p>
                                    <p className='info'>Open Access</p>
                                </div>
                                </div>
                                <div className='col-6 p-0 d-flex justify-content-evenly align-items-center'>
                                <div className='options'>
                                    <p>Dentist</p>
                                    <p className='info'>Drg. Adam H.</p>
                                </div>
                                <div className='options'>
                                    <p>Nurse</p>
                                    <p className='info'>Jessicamila</p>
                                </div>
                                <div className='options  p-0 d-flex justify-content-between align-items-center'>
                                   <img src={note2} alt='note' style={{width:""}}/>
                                    <p className='note m-0'>Note</p>
                                </div>
                                </div>
                                
                            </div>
                            <div className='row firstRow  px-0'>
                                <div className='showTreat col-3 p-0'>
                                <div className='options'>
                                    <h5 className='date'>12 Nov ‘19</h5>
                                    <p>09.00 - 10.00</p>
                                </div>
                                </div>
                                <div className=' showTreat col-3 p-0'>
                                <div className='options'>
                                    <p>Treatment</p>
                                    <p className='info'>Root Canal</p>
                                </div>
                                </div>
                                <div className='col-6 p-0 d-flex justify-content-evenly align-items-center'>
                                <div className='options'>
                                    <p>Dentist</p>
                                    <p className='info'>Drg. Adam H.</p>
                                </div>
                                <div className='options'>
                                    <p>Nurse</p>
                                    <p className='info'>Jessicamila</p>
                                </div>
                                <div className='options  p-0 d-flex justify-content-between align-items-center'>
                                   <img src={note2} alt='note' style={{width:""}}/>
                                    <p className='note m-0'>Note</p>
                                </div>
                                </div>
                                
                            </div>


                            

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar