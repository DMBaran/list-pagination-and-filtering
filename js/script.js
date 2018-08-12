/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

const studentList = document.querySelectorAll('.student-item')

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four

function showPage(page, students) {
  const top = (page * 10) - 1;
  const bottom = (page * 10) - 10;
  // then loop through the all students in the student list
  for(var i = 0; i < students.length; i++) {
    // hide all students on the page
    students[i].style.display = 'none';
    // if student should be on this page number
    if (bottom <= i && top >= i) {
      // show content
      students[i].style.display = 'block';
    }
  }
}

showPage(1, studentList);

// Create search bar for pagination filter
function searchBar() {
  const pageHeader = document.querySelector(".page-header");
  let label = document.createElement("label");
  label.className = "student-search";
  const input = document.createElement("input");
  const btn = document.createElement("button");
  btn.textContent = "Search";
  label.appendChild(input);
  label.appendChild(btn);
  pageHeader.appendChild(label);
}

searchBar();

// Create and append the pagination links - Creating a function that can do this is a good approach

function appendPageLinks(students) {
  const pageDiv = document.querySelector(".page");
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';
  let ul = document.createElement("ul");
  // create a page link section
  pageDiv.appendChild(paginationDiv);
  paginationDiv.appendChild(ul)
  let pagination = document.getElementsByClassName('pagination')[0];
  for(let i = 0; i <= students.length / 10; i++){
    // append our new page link section to the site
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#')
    ul.appendChild(li);
    li.appendChild(a);
    a.textContent = [i + 1]
  }
  // Event listener for when you alternate between page links
  pagination.addEventListener('click', (event) => {
    
    let anchor = document.querySelectorAll('.pagination a');
    
    for (let i = 0; i < anchor.length; i++) {
      anchor[i].classList.remove('active');
    }
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
    } else {
      event.target.className = 'active';
      console.log(event.target);
    }
    function pageNumber() {
      let button = parseInt(event.target.textContent);
      showPage(button, studentList);
    }
    pageNumber();
  });
  
}

appendPageLinks(studentList);