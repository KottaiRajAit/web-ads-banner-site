/**
 * Set the API key
 * @param {string} ochnkey - The API key
 */
let ochnkey = '5st2mbcxmip23kc8tnplfvrzk';
// let ochnkey = 'PFDgJ4S4SCdU8fN85dC5VbPk'; RIMI
// let ochnkey = 'jtxkkvu39rkc3wuy4s6xns1z6';
var enableLogging = true;

(function (d, s, id) {
    let js, ojs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) { return; }

    js = d.createElement(s); js.id = id; js.async = !0;

    js.src = "https://staging.footprintsforretail.com/jsapi/omnichannel.js";

    ojs.parentNode.insertBefore(js, ojs);

}(document, 'script', 'omnichanneltrack'));

/**
 * Initialization function 
 * ocnh.init()   - Initialized the F-AI omnichannel Js library
 * ochn.send()   - Tracking the search of the page
 */

async function ochntrack() {
    if (ochn.init) ochn.init();
    if (ochn.send) ochn.send("action", "visit");
    console.log("Omnichannel tracking initialized...");
}
