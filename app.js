"use strict";

const $tabsName = $(".tabs");

$(document).ready(() => {
	if (location.hash === "") return;
	$tabsName.find(`[value="${location.hash.substr(2)}"]`).attr("checked", true).trigger("change");
});

$tabsName.change(event => {
	$tabsName.children("section").addClass("hide");
	$tabsName.children($(event.target).val()).removeClass("hide");

	location.hash = `_${$(event.target).val()}`;
});



$("body [data-title]").mouseenter(function() {
	$(this).children().attr("hidden", true);
	$(this).append(`<div id="popUpDiv"><p>${$(this).attr("data-title")}</p></div>`);
});
$("body [data-title]").mouseleave(function() {
	$("#popUpDiv").remove();
	$(this).children().attr("hidden", false);
});


$(".accordion").click(event => {
	$(event.target.dataset.content).slideToggle();
})