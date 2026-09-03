// Google Ads and GA4 tags for the clinic's account. The two send_to values are
// opaque conversion labels issued by Google and must be sent exactly as given.
export const AW_ID = "AW-18395492498";
export const GA_ID = "G-13M2TCJFFB";
export const PHONE_SEND_TO = "AW-18395492498/FBTlCLPkku0cEJLh08NE";
export const BOOK_SEND_TO = "AW-18395492498/Uy9NCLbkku0cEJLh08NE";

// Every conversion is reported with the same placeholder value. Neither click
// has a real transaction amount — a phone call and a booking-intent click are
// not sales — so this exists only so the account's value-based reporting has
// a non-empty number, as Google Ads support asked for.
const CONVERSION_VALUE = 1.0;
const CONVERSION_CURRENCY = "EUR";

// Fires one conversion. Google's own snippet wraps this in a function that
// also delays navigation until the ping is confirmed sent (event_callback +
// return false), to stop the browser unloading the page before an async
// request completes. That protects a same-tab link. Every link this fires
// on either opens a new tab (booking, target="_blank") or triggers the OS
// dialler without navigating the page at all (tel:), so there is no page to
// unload — confirmed by capturing the network request in both cases, which
// reaches googlesyndication.com before either link's default action runs.
export function reportConversion(sendTo: string) {
  window.gtag?.("event", "conversion", {
    send_to: sendTo,
    value: CONVERSION_VALUE,
    currency: CONVERSION_CURRENCY,
  });
}

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
gtag('config', '${GA_ID}');
`;
