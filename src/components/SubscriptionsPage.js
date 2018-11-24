import React, { Component } from 'react';
import axios from 'axios';
import SubscriptionsList from './SubscriptionsList';
import Loading from './Loading';
import PropTypes from 'prop-types';

const PROCCESSING_CALL_BOUND = 20;

const dummySubscriptions = [
  { title: 'Spotify', email: 'info@spotify.fi' },
  { title: 'Instagram', email: 'info@instagram.fi' },
  { title: 'Facebook', email: 'info@facebook.fi' },
  { title: 'Pinterest', email: 'info@pinterest.fi' },
  { title: 'Netflix', email: 'info@netflix.fi' },
  { title: 'University', email: 'info@aalto.fi' },
];

class SubscriptionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      callCount: 0,
      timeout: null,
      subscriptions: [],
      noResponse: false,
    }
  }

  componentDidMount() {
    // this.getSubscriptions();
  }

  componentWillUnmount() {
    if (this.state.timeout) clearTimeout(this.state.timeout);
  }

  getSubscriptions = () => {
    this.setState({
      callCount: this.state.callCount + 1
    });

    if (this.state.callCount >= PROCCESSING_CALL_BOUND) {
      this.setState({
        loading: false,
        noResponse: true
      });
      return false;
    }

    axios.get('http://localhost:8000/processing_results')
      .then(response => {
        if (JSON.parse(response) === []) {
          // try again later
          const timeout = setTimeout(this.getSubscriptions, 500);
          this.setState({ timeout });
        } else {
          this.setState({
            subscriptions: JSON.parse(response),
            loading: false,
            timeout: null
          });
        }
      });
  }

  onUnsubscribe = (service) => {
    axios.post('http://localhost:8000/unsubscribe', {
      email: localStorage.getItem('email'),
      service
    }).then(response => {
      console.log(response);
    });
  }

  content() {
    if (dummySubscriptions) return <SubscriptionsList subscriptions={dummySubscriptions} onUnsubscribe={this.onUnsubscribe} />;
    if (this.state.loading) return <Loading />;
    if (this.state.noResponse) return <h1>Fetching is taking too long, try again later.</h1>;
    return <SubscriptionsList subscriptions={this.state.subscriptions} onUnsubscribe={this.onUnsubscribe} />;
  }

  render() {
    return (
      <div className="row flex">
        <div className="col-6 subscriptions-page flex">
          {this.content()}
        </div>
      </div>
    );
  }
}

SubscriptionsPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SubscriptionsPage;
