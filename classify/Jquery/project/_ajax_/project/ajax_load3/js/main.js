$(function(){
	$(".button").click(function(){
		$.get("process.php?url=aaa",function(response,status,xhr){
			$("#box").html(response);
		});
	});
});