import React from "react"

class BadgeForm extends React.Component{
  state = {};
  handleChange = e =>{
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      [e.target.name]: e.target.value,
    })
  };
  handleClick = e =>{
    console.log({
      "Event": "Button was clicked",
    });
  }
  handleSubmit= e =>{
    // Prevent the sumbit of the form
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
        <div className="">
          <h1>New Attendant</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="firstName"
                value={this.props.form.firstName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="lastName"
                value={this.props.form.lastName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="email"
                name="email"
                value={this.props.form.email}
              />
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="jobTitle"
                value={this.props.form.jobTitle}
              />
            </div>
            <div className="form-group">
              <label>Twitter</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                type="text"
                name="twitter"
                value={this.props.form.twitter}
              />
            </div>

            {/* Si el botton es de tipo boton, no enviará el formulario, si es de tipo submit, enviará el formulario(y recargará la página por default) */}
            <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
          </form>
        </div>
    );
  }
}
export default BadgeForm;