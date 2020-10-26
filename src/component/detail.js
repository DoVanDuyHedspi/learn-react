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
        </div>
      </div>
    )
  }
}

export default Detail;