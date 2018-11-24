import React, { Component } from 'react';
import EmailForm from './EmailForm';
import axios from 'axios';
import PropTypes from 'prop-types';

class EmailPage extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.state = {
      identity: {
        email: '',
        password: ''
      },
      timeout: null
    }
  }

  componentDidMount() {
    const timeout = setTimeout(this.animateComponent, 1000);
    this.setState({
      timeout
    });
  }

  componentWillUnmount() {
    if (this.state.timeout) clearTimeout(this.state.timeout);
  }

  animateComponent = () => {
    this.ref.current.children[0].classList.add('mounted');
  }

  onChange = event => {
    const field = event.target.name;
    let identity = Object.assign({}, this.state.identity);
    identity[field] = event.target.value;
    return this.setState({identity});
  }
  
  onSave = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/aggregate_with_credentials', {
      email: this.state.identity.email,
      password: this.state.identity.password
    }).then(response => {
      localStorage.setItem('email', this.state.identity.email);
      this.props.history.push('/subscriptions');
    });
  }

  render() {
    return (
      <div className="row email-page flex">
        <div className="col-6 flex" ref={this.ref}>
          <EmailForm identity={this.state.identity} 
                     onChange={this.onChange} 
                     onSave={this.onSave} />
        </div>
      </div>
    );
  }
}


EmailPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default EmailPage;
