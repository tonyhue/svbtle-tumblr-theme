/* Svbtle Theme by Matteo Roversi */
/* http://svbtletheme.tumblr.com/ */

$(document).ready(function(){
	if(typeof disqus_shortname != 'undefined') { comment_count(); }
});

function comment_count() {
	var query = '?';
	var disqus_links = [];
	$("a").each(function(index){
		if ($(this).hasClass('disqus')) {
			disqus_links.push($(this));
			query += 'url' + index + "=" + encodeURIComponent($(this).attr('href')) + '&';
		}
	});
	jQuery.getScript('http://disqus.com/forums/' + disqus_shortname + '/get_num_replies.js' + query, function() {
		if (hide_zero) {
			$("a.disqus").filter(function(){
				return $(this).html() == "0 Comments";
			}).hide();
		}
	});
}
