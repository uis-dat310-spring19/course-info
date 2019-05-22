/* global define, App */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['shared/modules/LocalStorageModule'], function (lsm) {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            return (root.LanguageUtils = factory(lsm.getLocalStorage()));
        });
    } else {
        // Browser globals
        root.LanguageUtils = factory(localStorage);
    }
}(this, function (ls) {
    'use strict';

    var availableLanguages = window.supportedLanguages;

    /**
     * Map only the locales that do not start with their proper alpha2 code.
     */
    var localeToAlpha2Map = {
        no_no: 'nb',
        no_no_ny: 'nn'
    };

    var idToLocaleMap = {
        1: 'no_no',
        2: 'en_us',
        3: 'no_no_ny',
        4: 'fr_fr',
        5: 'ru_ru',
        6: 'de_de',
        7: 'sv_se',
        8: 'da_dk',
        9: 'is_is',
        10: 'fi_fi',
        11: 'es_es',
        12: 'pl_pl',
        13: 'es_co',
    };

    var localeToIdMap = {
        da_dk: 8,
        de_de: 6,
        en_us: 2,
        es_es: 11,
        es_co: 13,
        fi_fi: 10,
        fr_fr: 4,
        is_is: 9,
        no_no: 1,
        no_no_ny: 3,
        pl_pl: 12,
        ru_ru: 5,
        sv_se: 7
    };

    function getLocale() {
        var stored = ls ? ls.getItem('locale') : undefined;
        if (availableLanguages.indexOf(stored) !== -1) {
            return stored;
        } else if (App) {
            stored = getLocaleFromLanguageId(App.serverVars.languageId);
            App.setLocale(stored);
            return stored;
        }

        return getLocaleFromLanguageId(window.serverVars.languageId);
    }

    function getLocaleFromLanguageId(languageId) {
        return idToLocaleMap[languageId];
    }

    function getAlpha2Code(locale) {
        var loc = locale || getLocale();
        return localeToAlpha2Map[loc] || loc.substr(0, 2);
    }

    function getMomentLanguage(locale) {
        return getAlpha2Code(locale);
    }

    function getJqueryUILanguage(locale) {
        return getAlpha2Code(locale);
    }

    function getCKEditorLanguage(locale) {
        if (locale === 'no_no_ny') {
            return 'nb'; // Nynorsk is not supported in CKEditor at the moment.
        }
        return getAlpha2Code(locale);
    }

    function getFlexPaperLocale(locale) {
        var loc = locale || getLocale();
        var map = {
            cs_CZ: 'cz_CS',
            da_dk: 'dn_DN',
            de_de: 'de_DE',
            el_el: 'el_EL',
            en_us: 'en_US',
            es_co: 'es_ES',
            fi_fi: 'fi_FN',
            fr_fr: 'fr_FR',
            hu_hu: 'hu_HU',
            it_it: 'it_IT',
            nl_nl: 'nl_NL',
            no_no: 'no_NO',
            no_no_ny: 'no_NO',
            pl_pl: 'pl_PL',
            pt_br: 'pt_BR',
            pt_pt: 'pt_PT',
            ru_ru: 'ru_RU',
            sv_se: 'se_SE',
            tr_tr: 'tr_TR',
            zh_cn: 'zh_CN'
        };
        return map[loc] || map['en_us'];
    }

    function getLanguageId(locale) {
        var loc = locale || getLocale();
        return localeToIdMap[loc];
    }

    function isInCorrectLanguage(element, requestedLanguage, defaultLanguage) {
        var nodeName = element.nodeName;
        var isLanguageControlledTag = (['P', 'LI', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE'].indexOf(nodeName) !== -1);
        var isAudioElement = (nodeName === 'div' && element.getAttribute('class').includes('ia-audio'));

        if (!isLanguageControlledTag && !isAudioElement) {
            return true;
        }

        var elementLanguage = element.getAttribute('lang');
        var useDefaultLanguage = requestedLanguage === undefined || requestedLanguage === defaultLanguage;
        var isInDefaultLanguage = !elementLanguage || elementLanguage === defaultLanguage;

        return (elementLanguage === requestedLanguage) || (useDefaultLanguage && isInDefaultLanguage);
    }

    function isEmbed(element) {
        if (element.nodeType !== 1 || element.localName !== 'object') {
            return false;
        }

        var hasEmbedCodeClass = element.getAttribute('class') === 'embedCode';
        var iframeList = element.getElementsByTagName('iframe');

        return hasEmbedCodeClass && iframeList && iframeList.length === 1;
    }

    function getHTMLNodes(parentElement, language, defaultLanguage) {
        var childNodes = _.toArray(parentElement.childNodes);
        _.each(childNodes, function (node) {
            if (node.nodeType !== 1) {
                return undefined;
            } else if (isEmbed(node)) {
                parentElement.removeChild(node);
                return parentElement.appendChild(node.firstElementChild);
            } else if (!isInCorrectLanguage(node, language, defaultLanguage)) {
                // block elements in wrong language should be removed
                return parentElement.removeChild(node);
            }

            if (node.hasAttribute('lang') && node.hasAttribute('style')) {
                node.removeAttribute('style');
            }

            if (parentElement.hasChildNodes()) {
                return getHTMLNodes(node, language, defaultLanguage);
            }

            return undefined;
        });
    }

    function getCurrentLanguageFromHTML(documentBody, language) {
        var defaultLanguage = documentBody.getAttribute('data-defaultlanguage');
        var supportedLanguages = documentBody.getAttribute('data-supportedlanguages');
        var languageIsSupported = supportedLanguages.indexOf(language) > -1;

        var langToUse = languageIsSupported ? language : undefined;

        getHTMLNodes(documentBody, langToUse, defaultLanguage);

        // avoid having itemBody element as the root tag
        var htmlString = '';
        var childNodes = _.toArray(documentBody.childNodes);
        _.each(childNodes, function(node) {
            htmlString += new XMLSerializer().serializeToString(node);
        })
        return htmlString;
    }

    return {
        availableLanguages: availableLanguages,
        getAlpha2Code: getAlpha2Code,
        getCKEditorLanguage: getCKEditorLanguage,
        getJqueryUILanguage: getJqueryUILanguage,
        getLocale: getLocale,
        getLocaleFromLanguageId: getLocaleFromLanguageId,
        getMomentLanguage: getMomentLanguage,
        getLanguageId: getLanguageId,
        getFlexPaperLocale: getFlexPaperLocale,
        getCurrentLanguageFromHTML: getCurrentLanguageFromHTML
    };
}));
