import React from 'react';
import '../../css/detail.css';

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: props.user.name,
        email: props.user.email,
      },
      errorMessage: {
        name: '',
        email: '',
      },
      enableSubmit: true,
    }
  }

  validateSubmit = (type) => {
    const { user } = this.state; 
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let message = this.state.errorMessage;
    message.name = '';
    message.email = '';

    if (user.name == '') {
      message.name = message.name + 'Hay nhap ten' + '\r\n'
    }
    if (user.email == '') {
      message.email = message.email + 'Hay nhap email' + '\r\n'
    } else if (!re.test(user.email)) {
      message.email = message.email + 'Hay nhap dung dinh dang email' + '\r\n'
    }
    this.setState({
      errorMessage: message,
    })

    if (message.name || message.email) {
      return false;
    }
    return true;
  }

  handleChange = async (e) => {
    const inputName = e.target.name;
    const user = this.state.user;
    user[inputName] = e.target.value;
    await this.setState({ user, });
    if(!this.validateSubmit()) {
      this.setState({
        enableSubmit: false,
      })
    }
  }

  render() {
    const Input = (child, index) => (
      <div className="form-group" key={index}>
        <label htmlFor={child.props.id}>{child.props.name}</label>
        <child.type 
          {...child.props}
          className={`form-control ${this.state.errorMessage[child.props.name] ? 'is-invalid' : ''}`}
          value={this.state.user[child.props.name]}
          onChange={(e) => this.handleChange(e)}
        />
        <div className="invalid-feedback">
          {this.state.errorMessage[child.props.name]}
        </div>
      </div>
    )
    return (
      <form>
        {this.props.children.map(Input)}

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
            onClick={() => this.props.handleSubmit(this.state.user)}
            value="Save"
            disabled={!this.state.enableSubmit}
          />
        </div>
      </form>
    )
  }
}

export default FormWrapper;

