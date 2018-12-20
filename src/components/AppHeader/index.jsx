import PropTypes from 'prop-types';
import React from 'react';

import EdxLogo from '../../images/edx-logo.png';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="region-inner clearfix">
        <div className="region-container container">
          <div className="region-container-inner header-search">
            <div id="branding" className="branding-elements">
              <div id="logo" className="edx-logo" itemScope="" itemType="http://schema.org/Organization">
                <h1 className="edx-logo-heading">
                  <a href="/" title="Home page" itemProp="url">
                    <img
                      className="site-logo image-style-none"
                      itemProp="logo"
                      src={EdxLogo}
                      alt="edX Home Page"
                    />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AppHeader.defaultProps = {
  username: null,
  userProfileImageUrl: null,
};

AppHeader.propTypes = {
  username: PropTypes.string,
  userProfileImageUrl: PropTypes.string,
};

export default AppHeader;
