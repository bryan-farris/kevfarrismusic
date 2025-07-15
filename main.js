document.addEventListener('DOMContentLoaded', function () {
	
function loadPartials() {
  //console.log("Running loadPartials");

  const header = document.querySelector('#header-wrap');
  const footer = document.querySelector('#footer-wrap');

  if (header) {
	fetch('/header.html')
	  .then(res => res.text())
	  .then(data => {
		header.innerHTML = data;
		//console.log("Header loaded");
	  });
  }

  if (footer) {
	fetch('/footer.html')
	  .then(res => res.text())
	  .then(data => {
		footer.innerHTML = data;
		//console.log("Footer loaded");
	  });
  }
}

// ✅ Load once on first page load
loadPartials();



});