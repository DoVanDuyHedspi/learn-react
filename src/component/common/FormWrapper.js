import React, { useEffect, useState } from 'react';
import '../../css/detail.css';

function FormWrapper(props) {
  const [user, setUser] = useState({
    name: props.user.name,
    email: props.user.email,
  });
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
  });
  const [enableSubmit, setEnableSubmit] = useState(true);

  const validateSubmit = () => {
    console.log(user);
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let message = errorMessage;
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
    
    setErrorMessage(message);
    console.log(errorMessage);

    if (message.name || message.email) {
      setEnableSubmit(false);
    }
    setEnableSubmit(true);
  }

  const handleChange = async (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    await setUser(prevUser => ({
      ...prevUser,
      [inputName]: value
    }));
  }

  useEffect(() => {validateSubmit()}, [user])

  const Input = (child, index) => (
    <div className="form-group" key={index}>
      <label htmlFor={child.props.id}>{child.props.name}</label>
      <child.type 
        {...child.props}
        className={`form-control ${errorMessage[child.props.name] ? 'is-invalid' : ''}`}
        value={user[child.props.name]}
        onChange={(e) => handleChange(e)}
      />
      <div className="invalid-feedback">
        {errorMessage[child.props.name]}
      </div>
    </div>
  )
  return (
    <form>
      {props.children.map(Input)}

      <div className="float-right">
        <input
          type="button"
          className="btn btn-secondary mr-5"
          onClick={() => props.handleCancel()}
          value="Cancel"
        />
        <input
          type="button"
          className="btn btn-primary"
          onClick={() => props.handleSubmit(user)}
          value="Save"
          disabled={!enableSubmit}
        />
      </div>
    </form>
  )

}

export default FormWrapper;

