// theses metas will be injected in by the html-webpack-plugin

const title = 'Ce Murmure Festival 2019';
const fullURL = 'http://cemurmurefestival.com';

const keywords = 'Ce Murmure, Festival, Semur-en-Auxois, 23 Août, 24 Août, 21140, Musique, Art, Animations, Numérique, Interactif, Fête, Buvette, Restauration, Danse, Party';
const desc_search = 'Vous en rêvez depuis l’été dernier, le voici revenir au galop ! Le Festival Ce Murmure vous attend les 23 et 24 Août à Semur-en-Auxois.';
const desc_social = 'Vous en rêvez depuis l’été dernier, le voici revenir au galop ! Le Festival Ce Murmure vous attend les 23 et 24 Août à Semur-en-Auxois.';
const social_image = 'static/img/share/share.png';
const twitter_card_type = 'summary_large_image';
// const twitter_site = '';
const twitter_creator = '@ekqnp';
const theme_color = '#86382E';

module.exports = {

  // viewport
  viewport: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui',

  // google verification
  'google-site-verification': 'sH9FFytCvxlxNWqJypZGd-0gNxUGTdfdDM6OAM1UxTY',

  // theme color
  'theme-color': theme_color,

  // prevent phone number auto-detection (Safari iOS & Blackberry)
  'format-detection': 'telephone=no',
  httpEquiv: {
    'http-equiv': 'x-rim-auto-match',
    content: 'none'
  },

  // search engines
  'description': desc_search,
  'keywords': keywords,

  // google+
  googlePlusName: {
    itemprop: 'name',
    content: title,
  },
  googlePlusDescription: {
    itemprop: 'description',
    content: desc_social,
  },
  googlePlusImage: {
    itemprop: 'image',
    content: fullURL+'/'+social_image,
  },

  // twitter cards
  'twitter:card': twitter_card_type,
  // 'twitter:site': twitter_site,
  'twitter:creator': twitter_creator,
  'twitter:title': title,
  'twitter:description': desc_social,
  'twitter:image:src': fullURL+'/'+social_image,

  // Open Graph
  OpenGraphTitle: {
    property: 'og:title',
    content: title
  },
  OpenGraphType: {
    property: 'og:type',
    content: 'website'
  },
  OpenGraphUrl: {
    property: 'og:url',
    content: fullURL
  },
  OpenGraphImage: {
    property: 'og:image',
    content: fullURL+'/'+social_image
  },
  OpenGraphDescription: {
    property: 'og:description',
    content: desc_social
  },
  OpenGraphSite_name: {
    property: 'og:site_name',
    content: title
  },

};
