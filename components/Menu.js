// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// 1. Component Maker Function //
function menuMaker (arr) {
  // 1a. Create Elements //
  const menu = document.createElement('div')
  const menuList = document.createElement('ul')

  // 1b. Structure ELements //
  menu.appendChild(menuList)

  // 1c. Add Class Names //
  menu.classList.add('menu')

  // 2. Create List Items //
  arr.forEach(element => {
    const listItem = document.createElement('li')
    listItem.textContent = element
    menuList.appendChild(listItem)
  });

  // 3. Select Menu Button //
  const menuButton = document.querySelector('.menu-button')

  // 4. Add Event Listener //

  //Original Menu Open Event Listener //
  
  // menuButton.addEventListener('click', () => {
  //   menu.classList.toggle('menu--open')
  // })

  // Menu Open Event Listener With Slide Effect //

  menuButton.addEventListener('click', () => {
    const menuItems = Array.from(document.querySelectorAll('.menu ul li'))
    console.log(menuItems)
    if (menu.style.width === '350px') {
      menu.style.width = ''
      menuItems.forEach(element => {
        element.style.display = ''})
    } else {
      menu.style.width = '350px'
      menuItems.forEach(element => {
        element.style.display = 'block'})
    }
    
  })

  // 5. Output Menu //
  return menu
}

// 6. Create New Menu and Append to Header //
const newMenu = menuMaker(menuItems)
const header = document.querySelector('.header')
header.appendChild(newMenu)
