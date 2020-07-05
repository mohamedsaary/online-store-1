// Toggle menu button

let toggleNavStatus = false;

let toggleNav = function() {
    let getSideBar = document.querySelector(".nav-sidebar");

    if (toggleNavStatus === false) {
        getSideBar.style.display = "block";
        toggleNavStatus = true;
    } 
    else if (toggleNavStatus === true) {
        getSideBar.style.display = "none";
        toggleNavStatus = false;
    }
}

// Search Bar

let searchBarStatus = false; 

let expandSearchBar = function () {
    
    if (searchBarStatus === false) {
        //Input box
        searchInput = document.createElement('input');
        searchInput.setAttribute("type", "search");
        searchInput.setAttribute("class", "search-input");

        //Search Button
        searchButton = document.createElement('button'); 
        searchButton.style.backgroundImage = "url(icons/search.png)";
        searchButton.style.backgroundPosition = "center";
        searchButton.style.backgroundSize = "15% 70%";
        searchButton.style.backgroundRepeat = "no-repeat";
        
        // div to contain input box and search button
        searchBarBox = document.createElement('div');
        searchBarBox.setAttribute("class", "search-box")
        searchBarBox.style.position = "fixed";    
        searchBarBox.style.top = "50px";
        searchBarBox.style.right = "0";
        searchBarBox.style.width = "50%";
        searchBarBox.style.height = "30px";
        searchBarBox.style.display = "grid";
        searchBarBox.style.gridTemplateColumns = "85% 15%";

        //putting the input box and search button into the search box/div
        searchBarBox.appendChild(searchInput);
        searchBarBox.appendChild(searchButton);
        
        document.body.appendChild(searchBarBox);
        searchBarStatus = true;
    }
    else if (searchBarStatus === true) {
        searchBarBox.remove();
        searchBarStatus = false;
    }
    
}
