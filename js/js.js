/**
 * file: js.js
 */
 console.log("Hi from js.js")

 //nav bar
const NavBar = `
<div class="sidenav">
    <a href="../front-page/index.html"><img src="../images/icons/home.png" class="icon" id="home" alt="home page"></a>
    <a href ="../calendar/calendar.html"><img src="../images/icons/nav.cal.png" class="icon" alt="calendar"></a>
    <a href="../announcements/announcements.html"><img src="../images/icons/nav.an.png" class="icon" alt="announcements"></a>
    <a href="../facilities/facilities.html"><img src="../images/icons/nav.map.png" class="icon" alt="facilities"></a>
    <a href="../ideas/ideas.html"><img src="../images/icons/nav.id.png" class="icon" alt="post ideas"></a>
    <a href ="../contact/contact.html"><img src="../images/icons/nav.con.png" class="icon" alt="contact"></a>
    </div>
`

 document.getElementById("nav").innerHTML= NavBar