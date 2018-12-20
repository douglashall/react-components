import { connect } from 'react-redux';

import AppHeader from '../../components/AppHeader';

const mapStateToProps = state => ({
  username: state.userProfile.username,
  userProfileImageUrl: state.userProfile.userProfileImageUrl,
});

export default connect(mapStateToProps)(AppHeader);
