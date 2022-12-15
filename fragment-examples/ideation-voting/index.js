function putVotes(id, votes) {
	var authtoken = Liferay.authToken;
	var url = "https://webserver-lctmitie-prd.lfr.cloud/o/c/ideas/" + id + "?&p_auth=" + Liferay.authToken;
	var putObject = JSON.stringify({ votes: votes });
	$.ajax({
	method: "PUT",
	contentType: "application/json",
	dataType: 'json',
	url: url,
	data: putObject,
	success: function (data) {		
		location.reload();
	}		
	});	
}

function updateVotes(objectToChange) {
	var authtoken = Liferay.authToken;
	var url = "/o/c/ideas/" + objectToChange + "?&p_auth=" + Liferay.authToken;
	$.ajax({
  method: "GET",
	dataType: 'json',
  url: url,
	success: function (data) {
		var newVoteTotal = data.votes + 1;
		putVotes(data.id, newVoteTotal);
	}
	});
}

setTimeout(() => {
  var rows = $(".dnd-tbody").children("div");	
	console.log(rows);
	for (let divRows = 0; divRows < rows.length; divRows++) {
 			var idDiv = $(rows[divRows]).children('div')[0];			
		  var idDivTitle = $(idDiv).children('div')[0];			
			var objectIdA = $(idDivTitle).children('a')[0];		  
			var objectId = $(objectIdA).text();
			console.log(objectId);
			var actionDiv = $(rows[divRows]).children('div')[5];	
			
			var htmlToAdd = "<a href='#'><svg  data-object-id = '" + objectId + "' class='lexicon-icon updateVotes "
			+ "lexicon-icon-add-column' focusable='false'"
			+ "role='presentation'> <use "
			+ "xlink:href='/o/modern-intranet-themev2-theme/images/clay/icons.svg#thumbs-up' />"
			+ "</svg></a>";
			$(actionDiv).html(htmlToAdd);
			$(".updateVotes").click(function() {
			    updateVotes($(this).data('object-id'));
			});
			
	}
}, "2000")