// Shared language toggle — included on every page
// Each page defines window.PAGE_TRANSLATIONS = { en: {...} }
// before including this script, OR the page defines its own toggleLang().

(function () {
  var STORAGE_KEY = 'luphy-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'fr';
  }

  function applyLang(lang, dict) {
    localStorage.setItem(STORAGE_KEY, lang);
    var els = document.querySelectorAll('[data-i18n]');
    els.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
  }

  // Expose helper so each page can call initLang(enDict)
  window.initLang = function (enDict) {
    // Save original FR values on first load
    var frDict = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      frDict[el.getAttribute('data-i18n')] = el.innerHTML;
    });

    window.toggleLang = function () {
      var current = getLang();
      var next = current === 'fr' ? 'en' : 'fr';
      applyLang(next, next === 'en' ? enDict : frDict);
    };

    // Apply saved language on page load
    var saved = getLang();
    if (saved === 'en') applyLang('en', enDict);
    else {
      var btn = document.getElementById('lang-toggle');
      if (btn) btn.textContent = 'EN';
    }
  };
})();
