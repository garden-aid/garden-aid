import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import Day from '../../pres/Moisture/Day';

function mapQueriesToProps({ ownProps, state }) { // eslint-disable-line no-unused-vars
  return {
    category: {
      query: gql`{
        day {
          hour, moisture
        }
      }`,
      variables: {},
    },
  };
}

const DayContainer = connect({
  mapQueriesToProps,
})(Day);

export default DayContainer;
