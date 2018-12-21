import { connect } from 'react-redux';
import SiteFooter from '../../components/SiteFooter';

const mapStateToProps = state => ({
  siteName: process.env.SITE_NAME,
  siteLogo: process.env.SITE_LOGO,
  marketingSiteBaseUrl: process.env.MARKETING_SITE_BASE_URL,
  supportUrl: process.env.SUPPORT_URL,
  contactUrl: process.env.CONTACT_URL,
  openSourceUrl: process.env.OPEN_SOURCE_URL,
  termsOfServiceUrl: process.env.TERMS_OF_SERVICE_URL,
  privacyPolicyUrl: process.env.PRIVACY_POLICY_URL,
  facebookUrl: process.env.FACEBOOK_URL,
  twitterUrl: process.env.TWITTER_URL,
  youTubeUrl: process.env.YOU_TUBE_URL,
  linkedInUrl: process.env.LINKED_IN_URL,
  googlePlusUrl: process.env.GOOGLE_PLUS_URL,
  redditUrl: process.env.REDDIT_URL,
  appleAppStoreUrl: process.env.APPLE_APP_STORE_URL,
  googlePlayUrl: process.env.GOOGLE_PLAY_URL,
});

export default connect(mapStateToProps)(SiteFooter);
