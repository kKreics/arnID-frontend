import React from 'react';
import PropTypes from 'prop-types';

const SubscriptionsListItem = ({subscription = {}, onUnsubscribe}) => {
  return (
    <li className="subscriptions-list-item">
      <span>{subscription.title}</span>
      <div className="btn-wrapper">
        <button className="btn unsub" onClick={() => onUnsubscribe(subscription)}>Send GDPR request</button>
      </div>
    </li>
  );
};

SubscriptionsListItem.propTypes = {
  subscription: PropTypes.object.isRequired,
  onUnsubscribe: PropTypes.func.isRequired,
};

export default SubscriptionsListItem;
