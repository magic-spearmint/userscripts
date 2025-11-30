// ==UserScript==
// @name        Bluesky: Blacksky Redirect
// @namespace   magic_spearmint-bluesky-blacksky_redirect
// @author      Magic Spearmint
// @description Automatically redirects Bluesky pages serving comptaible ATProto content to their equivalent Blacksky pages.
// @copyright   2025 Magic Spearmint
// @version     0.1.0
// @license     https://creativecommons.org/publicdomain/zero/1.0
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bsky.app
// @homepageURL https://github.com/magic-spearmint/userscripts
// @supportURL  https://github.com/magic-spearmint/userscripts/wiki
// @downloadURL https://github.com/magic-spearmint/userscripts/main/bluesky/blacksky_redirect.user.js
// @updateURL   https://github.com/magic-spearmint/userscripts/main/bluesky/blacksky_redirect.meta.js
// @match       *://bsky.app/*
// @match       *://fxbsky.app/*
// @exclude     *://cdn.bsky.app/*
// @run-at      document-start
// ==/UserScript==

/* jshint esversion: 8 */
/* eslint indent: "off", indent-legacy: "off", max-classes-per-file: "off", padded-blocks: "off" */

(() => {
   "use strict";

   let oldURI = window.location.href,
       newURI = "https://blacksky.community/",
       oldRegex = new RegExp(/^https?:\/\/blacksky\.community\//),
       newRegex = new RegExp(/^https?:\/\/bsky\.app\//);

   if (!oldURI.match(oldRegex)) {
      window.location.replace(oldURI.replace(newRegex, newURI));
   }
})();
