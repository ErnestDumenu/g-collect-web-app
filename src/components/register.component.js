import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";

import { connect } from "react-redux";
import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className=" mt-1 alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className=" mt-1 alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className=" mt-1 alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="mt-1 alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeSex = this.onChangeSex.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      dob: "",
      sex: "",
      location: "",
      email: "",
      contact: "",
      password: "",
      successful: false,
    };
  }

  onChangeFirstname(e) {
    this.setState({
      first_name: e.target.value,
    });
  } 
  
  onChangeLastname(e) {
    this.setState({
      last_name: e.target.value,
    });
  
  }onChangeDob(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangeSex(e) {
    this.setState({
      sex: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(
            this.state.first_name,
            this.state.last_name,
            this.state.dob,
            this.state.sex,
            this.state.email,
            this.state.contact,
            // this.state.location,
            this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch((err) => {
          console.log(err)
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChangeFirstname}
                    validations={[required, ]}
                  />
                </div> 
                
                <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChangeLastname}
                    validations={[required, ]}
                  />
                </div>

                <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                  <Input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.onChangeDob}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                <label htmlFor="sex">Sex</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.onChangeSex}
                    validations={[required]}
                  />
                </div>

                

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required,email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">contact</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChangeContact}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Location">Location</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    // validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group mt-3">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group ">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                  {message}
                  <div>
                    <a className="mx-3" href="/login">Login to Continue </a>
                  </div>
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);


