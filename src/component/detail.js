import React from 'react';
import '../css/detail.css';
import FormWrapper from './common/FormWrapper'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: this.props.user.name,
        email: this.props.user.email,
      },
      errorMessage: {
        name: '',
        email: '',
      },
      enableSubmit: true,
    }
  }

  // handleChange = async (e) => {
  //   const inputName = e.target.name;
  //   await this.setState({ [inputName]: e.target.value });
  //   if(!this.validateSubmit()) {
  //     this.setState({
  //       enableSubmit: false,
  //     })
  //   }
  // }

  handleSubmit = (user) => {
    const userUpdate = { 'name': user.name, 'email': user.email };
    this.props.handleUpdate(userUpdate);
  }

  render() {
    return (
      <div>
        <div>
          <FormWrapper 
            user={this.state.user}
            handleCancel={() => this.props.handleCancel()}
            handleSubmit={(user) => this.handleSubmit(user)}
          >
              <input
                type="text"
                id="name"
                name="name"
              />
              <input
                type="email"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
          </FormWrapper>
          {/* <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${this.state.errorMessage.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
              />
              <div className="invalid-feedback">
                {this.state.errorMessage.name}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${this.state.errorMessage.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
              />
              <div className="invalid-feedback">
                {this.state.errorMessage.email}
              </div>
            </div>

            <div className="float-right">
              <input
                type="button"
                className="btn btn-secondary mr-5"
                onClick={() => this.props.handleCancel()}
                value="Cancel"
              />
              <input
                type="button"
                className="btn btn-primary"
                onClick={() => this.handleSubmit()}
                value="Save"
                disabled={!this.state.enableSubmit}
              />
            </div>
          </form> */}
        </div>
      </div>
    )
  }
}

export default Detail;