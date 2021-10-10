function route() {
  let hash = window.location.hash;
  let pgID = hash.replace("#/", "");

  if (pgID == "") {
    MODEL.pgChange("home");
  } else {
    MODEL.pgChange(pgID);
  }
}

function initListeners() {
  $(window).on("hashchange", route);
  route();
}

$("document").ready(function () {
  initListeners();
});
