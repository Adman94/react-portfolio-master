import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/s480x480/117324266_3471349759564765_2279439121490613191_n.jpg?_nc_cat=105&_nc_sid=7206a8&_nc_ohc=vYAikUJZTjUAX99eMcA&_nc_ht=scontent-sjc3-1.xx&tp=7&oh=4db8ec0e50d8170f2da8654f7df1c062&oe=5F7B6329";
         var bio = this.props.data.bio;
         // var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = "https://drive.google.com/file/d/19JiNXoIS5i6oh7JatyrMLd54nCPwW6dJ/view";
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Tim Baker Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           <span>{/* {street}<br /> */}
                              {city} {state}, {zip}
                           </span><br />
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
