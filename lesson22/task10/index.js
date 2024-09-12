const paginationPages = document.querySelectorAll('.pagination__page')
const handleClick = (event)=>{
  console.log(event.target.textContent);
}

paginationPages.forEach(page=>{
page.addEventListener('click', handleClick);}
);