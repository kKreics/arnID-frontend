import React from 'react';
import PropTypes from 'prop-types';
import SubscriptionsListItem from './SubscriptionsListItem';

const SubscriptionsList = ({subscriptions = [], onUnsubscribe}) => {
  return (
    <ul className="subscriptions-list">
      {subscriptions.map((subscription, i) => {
        return <SubscriptionsListItem key={i} 
                                      subscription={subscription} 
                                      onUnsubscribe={onUnsubscribe} /> 
      })}
    </ul>
  );
};

SubscriptionsList.propTypes = {
  subscriptions: PropTypes.array.isRequired,
  onUnsubscribe: PropTypes.func.isRequired,
};

export default SubscriptionsList;
