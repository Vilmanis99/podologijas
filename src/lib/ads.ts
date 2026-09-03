// Google Ads tag for the clinic's account. The two send_to values are opaque
// conversion labels issued by Google and must be sent exactly as given.
export const AW_ID = "AW-18395492498";
export const PHONE_SEND_TO = "AW-18395492498/FBTlCLPkku0cEJLh08NE";
export const BOOK_SEND_TO = "AW-18395492498/Uy9NCLbkku0cEJLh08NE";

export const CONSENT_STORAGE_KEY = "cookie-consent";

// Consent Mode v2 defaults. Everything that touches the visitor's device
// starts denied, so the tag stores nothing until CookieConsent sends an
// update. Google still receives cookieless pings, which is what keeps
// conversion modelling working while the visitor has not decided.
//
// This is rendered as a plain inline script in the root layout rather than
// through next/script, so it is guaranteed to be in the initial HTML and to
// run before gtag.js is injected after hydration. The defaults must already
// sit in dataLayer by then, or the first pings would go out unconsented.
export const CONSENT_DEFAULT_SNIPPET = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted'
    });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', '${AW_ID}');
`;
