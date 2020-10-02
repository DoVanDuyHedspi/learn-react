import React from 'react';
import '../css/detail.css';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      errorMessage: {
        name: '',
        email: '',
      },
      enableSubmit: true,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      name: newProps.user.name,
      email: newProps.user.email,
      errorMessage: {
        name: '',
        email: '',
      },
    })
  }

  handleChange = async (e) => {
    const inputName = e.target.name;
    await this.setState({ [inputName]: e.target.value });
    if(!this.validateSubmit()) {
      this.setState({
        enableSubmit: false,
      })
    }
  }

  validateSubmit = (type) => {
    const name = this.state.name;
    const email = this.state.email;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let message = this.state.errorMessage;
    message.name = '';
    message.email = '';

    if (name == '') {
      message.name = message.name + 'Hay nhap ten' + '\r\n'
    }
    if (email == '') {
      message.email = message.email + 'Hay nhap email' + '\r\n'
    } else if (!re.test(email)) {
      message.email = message.email + 'Hay nhap dung dinh dang email' + '\r\n'
    }
    this.setState({
      errorMessage: message,
    })

    // if (type == 'submit') {
      if (message.name || message.email) {
        return false;
      }
      return true;
    // }
  }

  handleSubmit = () => {
    if (this.validateSubmit('submit')) {
      const user = { 'name': this.state.name, 'email': this.state.email };
      this.props.handleUpdate(user);
    }
  }

  render() {
    return (
      <div>
        <div className={this.props.editStatus ? 'd-block' : 'd-none'}>
          <form>
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
          </form>
        </div>
      </div>
    )
  }
}

export default Detail;