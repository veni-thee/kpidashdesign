/* Open when someone clicks on the span element */
function openNav1() {
  document.getElementById("myNav1").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}

/* Open when someone clicks on the span element */
function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}

/* Open when someone clicks on the span element */
function openNav3() {
  document.getElementById("myNav3").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
