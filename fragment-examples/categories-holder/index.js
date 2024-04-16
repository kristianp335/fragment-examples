function waitForElement(selector, callback) {
  const intervalId = setInterval(() => {
    if (fragmentElement.querySelector(selector)) {
			var selectElement = fragmentElement.querySelector(selector);
			selectElement.click();
			var categoriesListId = selectElement.getAttribute('aria-controls');
			var categoriesList = document.getElementById(categoriesListId);
			categoriesList.style.left = "0px";
      if (categoriesList.querySelectorAll('.dropdown-section')) {
			clearInterval(intervalId);
      callback();
			}
    }
  }, 500);
}

waitForElement("button", () => {
 moveMenu();
});

function moveMenu() {
	var selectElement = fragmentElement.querySelector("button");
	console.log(selectElement);
	selectElement.click();
	var categoriesListId = selectElement.getAttribute('aria-controls');
  var categoriesList = document.getElementById(categoriesListId);
	const addDivs = categoriesList.querySelectorAll('.dropdown-section');

	addDivs.forEach(addDiv => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('hiding-div');
		    
		    let inputValue = addDiv.querySelector("input").value;
		    console.log(inputValue);
		    if (window.location.search.indexOf(inputValue) > -1) {
				    addDiv.classList.add("active-background");
				}
		    addDiv.prepend(newDiv);
  });
	
	

	
	//categoriesList.addEventListener("scroll", preventCategoriesList);
	//categoriesList.addEventListener("click", preventCategoriesList);
	//categoriesList.addEventListener("focusout", preventCategoriesList);
	
	//function preventCategoriesList(event) {
    //event.preventDefault();
		//event.stopPropagation();
  //}
	
	//categoriesList.style.removeProperty('top');
	//categoriesList.style.removeProperty('left');
	//const checkIntervalTopLeft = setInterval(removeTopAndLeft, 20);
	//function removeTopAndLeft() { 
		//categoriesList.style.removeProperty('top');
		//categoriesList.style.removeProperty('left');
	//}
 const checkInterval = setInterval(removeAndAddClasses, 100);
 function removeAndAddClasses() { 
		if(categoriesList.classList.contains("dropdown-menu")) {
			   categoriesList.classList.add("show");
			   categoriesList.classList.add("holder");
			
			   			
		}
	}	
	selectElement.style.visibility = "hidden";
}


//function destroyParameters() {
   //let firstUrlParam = window.location.search.replace("?", "").split("&")[0];
   //console.log(firstUrlParam);
   //console.log(firstUrlParam.includes("category"));
   //let removeParam = firstUrlParam.split("=")[0];
   //console.log(removeParam);
   //console.log("Hello World");
   //let params = new URLSearchParams(location.search);
   //params.delete(removeParam)
   //history.replaceState(null, '', '?' + params);
//}



