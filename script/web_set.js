// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });

//FB分享
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Lightbox效果
$(document).ready(function() {
  $(".fancybox-thumb").fancybox({
	  prevEffect	: 'elastic',
	  nextEffect	: 'elastic',
	  helpers	: {
		  title	: {
			  type: 'inside'
		  },
		  thumbs	: {
			  width	: 50,
			  height	: 50
		  }
	  }
  });
});