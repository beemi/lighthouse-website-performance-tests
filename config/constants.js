'use strict';

const DESKTOP_EMULATION_METRICS = {
    mobile: false,
    width: 1350,
    height: 940,
    deviceScaleFactor: 1,
    disabled: false,
};

const screenEmulationMetrics = {
    desktop: DESKTOP_EMULATION_METRICS,
};

const DESKTOP_USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4143.7 Safari/537.36 Chrome-Lighthouse';

const userAgents = {
    desktop: DESKTOP_USERAGENT,
};

const defaultSettings = {
    output: 'html',
    maxWaitForFcp: 30 * 1000,
    maxWaitForLoad: 45 * 1000,

    formFactor: 'mobile',
    throttlingMethod: 'simulate',
    screenEmulation: screenEmulationMetrics.mobile,
    emulatedUserAgent: userAgents.mobile,

    auditMode: false,
    gatherMode: false,
    disableStorageReset: false,
    channel: 'node',

    budgets: null,
    locale: 'en-US', // actual default determined by Config using lib/i18n
    blockedUrlPatterns: null,
    additionalTraceCategories: null,
    extraHeaders: null,
    precomputedLanternData: null,
    onlyAudits: null,
    onlyCategories: null,
    skipAudits: null,
};

module.exports = {
    screenEmulationMetrics,
    userAgents,
    defaultSettings
}
