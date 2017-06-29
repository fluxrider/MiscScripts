// ==UserScript==
// @name        Netflix Show VS Movie
// @namespace   fluxrider.com
// @description Highlights Show VS Movies
// @include     https://www.netflix.com/browse/my-list
// @version     1
// @grant       none
// ==/UserScript==


// for each video in "My List"
var elements = document.evaluate("//div[@class='ptrack-content']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
for (var i = elements.snapshotLength - 1; i >= 0; i--) {
  var element = elements.snapshotItem(i);
  
  // get video id
  var data = element.getAttribute('data-ui-tracking-context');
  data = JSON.parse(decodeURIComponent(data));
  //alert(data.video_id);
  
  // get video type
  var type = netflix.falkorCache.videos["" + data.video_id].summary.type;
  
  // add a weird border if it's a show
  if(type == 'show') {
    element.style="border:3px solid green" // 53bee0
  } else {
    //element.parentNode.removeChild(element);
  }
}

