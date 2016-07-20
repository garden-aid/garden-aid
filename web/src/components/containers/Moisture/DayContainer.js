import gql from 'graphql-tag';
import { connect } from 'react-apollo';
import Day from '../../pres/Moisture/Day';

const DayContainer = connect({
  mapQueriesToProps({ ownProps, state }) { // eslint-disable-line no-unused-vars
    return {
      days: {
        query: gql`{
          day {
            hour, moisture
          }
        }`,
        variables: {},
      },
    };
  },
  //mapStateToProps(state) {
  //  return {};
  //},
})(Day);

export default DayContainer;
