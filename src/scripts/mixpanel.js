import mixpanel from 'mixpanel-browser';

const token = document.getElementById("mixpanel-token").getAttribute('data-mixpanel-token');

mixpanel.init(token, {debug: true, track_pageview: true, persistence: 'localStorage'});

const btnDemo = document.getElementById("btn-demo");

btnDemo.onclick = function() {
  mixpanel.track('Navbar - Probar demo');
}

const btnHomeDemo = document.getElementById("btn-home-demo");

btnHomeDemo.onclick = function() {
  mixpanel.track('Home - Probar demo');
}

const btnLogin = document.getElementById("btn-login");

btnLogin.onclick = function() {
  mixpanel.track('Navbar - Clic en Login');
}

const btnHomeFreeAccount = document.getElementById("btn-home-account");

btnHomeFreeAccount.onclick = function() {
  mixpanel.track('Home - Crea cuenta gratis');
}

const btnWhyAccount = document.getElementById("btn-why-account");

btnWhyAccount.onclick = function() {
  mixpanel.track('¿Por qué Neogaleno? - Crea cuenta gratis');
}

const btnWhyDemo = document.getElementById("btn-why-demo");

btnWhyDemo.onclick = function() {
  mixpanel.track('¿Por qué Neogaleno? - Probar demo');
}

const btnFormAccount = document.getElementById("btn-feature-account");

btnFormAccount.onclick = function() {
  mixpanel.track('Form feature - Crea cuenta gratis');
}

const btnFormDemo = document.getElementById("btn-feature-demo");

btnFormDemo.onclick = function() {
  mixpanel.track('Form feature - Probar demo');
}

const btnFreePlan = document.getElementById("btn-free-plan");

btnFreePlan.onclick = function() {
  mixpanel.track('Planes - Plan Gratis');
}