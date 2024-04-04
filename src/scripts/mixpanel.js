import mixpanel from 'mixpanel-browser';

const token = document
  .getElementById('mixpanel-token')
  .getAttribute('data-mixpanel-token');

mixpanel.init(token, {
  debug: true,
  track_pageview: true,
  persistence: 'localStorage',
});

window.onload = () => {
  const btnDemo = document.getElementById('btn-demo');
  console.log({ btnDemo }, document.getElementById('btn-demo'));
  btnDemo.onclick = function () {
    mixpanel.track('Navbar - Probar demo');
  };

  const btnHomeDemo = document.getElementById('btn-home-demo');

  btnHomeDemo.onclick = function () {
    mixpanel.track('Home - Probar demo');
  };

  const btnLogin = document.getElementById('btn-login');

  btnLogin.onclick = function () {
    mixpanel.track('Navbar - Clic en Login');
  };

  const btnHomeFreeAccount = document.getElementById('btn-home-account');

  btnHomeFreeAccount.onclick = function () {
    mixpanel.track('Home - Crea cuenta gratis');
  };

  const btnWhyAccount = document.getElementById('btn-why-account');
  console.log({ btnWhyAccount });
  btnWhyAccount.onclick = function () {
    console.log('btn click');
    mixpanel.track('¿Por qué Neogaleno? - Crea cuenta gratis');
  };

  const btnWhyDemo = document.getElementById('btn-why-demo');

  btnWhyDemo.onclick = function () {
    mixpanel.track('¿Por qué Neogaleno? - Probar demo');
  };

  const btnFormAccount = document.getElementById('btn-feature-account');

  btnFormAccount.onclick = function () {
    mixpanel.track('Form feature - Crea cuenta gratis');
  };

  const btnFormDemo = document.getElementById('btn-feature-demo');

  btnFormDemo.onclick = function () {
    mixpanel.track('Form feature - Probar demo');
  };

  const btnFreePlan = document.getElementById('btn-free-plan');

  btnFreePlan.onclick = function () {
    mixpanel.track('Planes - Plan Gratis');
  };

  // Enlaces Cabeceras
  const linkHeaderAbout = document.getElementById('link-header-about');
  const linkHeaderFunctions = document.getElementById('link-header-functions');
  const linkHeaderPrices = document.getElementById('link-header-prices');
  const linkHeaderContact = document.getElementById('link-header-contact');
  // enlaces footer
  const linkFooterLinkedin = document.getElementById('link-linkedin');
  const linkFooterInstagram = document.getElementById('link-instagram');
  const linkFooterCondusef = document.getElementById('link-condusef');
  const linkFooterProfeco = document.getElementById('link-profeco');
  // enlaces whatsapp
  const linkWappMex = document.getElementById('wapp-mex');
  const linkWappVen = document.getElementById('wapp-ven');
  const linkWappCol = document.getElementById('wapp-col');
  const linkWappLatam = document.getElementById('wapp-latam');

  // modals
  const modalTerms = document.getElementById('modal-terms');
  const modalPriv = document.getElementById('modal-priv');

  linkWappMex.onclick = function () {
    mixpanel.track('linkWapp - MEX');
  };
  linkWappVen.onclick = function () {
    mixpanel.track('linkWapp - VEN');
  };
  linkWappCol.onclick = function () {
    mixpanel.track('linkWapp - COL');
  };
  linkWappLatam.onclick = function () {
    mixpanel.track('linkWapp - LATAM');
  };

  modalTerms.onclick = function () {
    mixpanel.track('Modal - Terms');
  };

  modalPriv.onclick = function () {
    mixpanel.track('Modal - Privacy');
  };

  linkHeaderAbout.onclick = function () {
    mixpanel.track('Navbar - ¿Por qué Neogaleno?');
  };

  linkHeaderFunctions.onclick = function () {
    mixpanel.track('Navbar - Funcionalidades');
  };

  linkHeaderPrices.onclick = function () {
    mixpanel.track('Navbar - Precios');
  };

  linkHeaderContact.onclick = function () {
    mixpanel.track('Navbar - Contacto');
  };

  linkFooterLinkedin.onclick = function () {
    mixpanel.track('Footer - Linkedin');
  };

  linkFooterInstagram.onclick = function () {
    mixpanel.track('Footer - Instagram');
  };

  linkFooterCondusef.onclick = function () {
    mixpanel.track('Footer - Condusef');
  };

  linkFooterProfeco.onclick = function () {
    mixpanel.track('Footer - Profeco');
  };
};
