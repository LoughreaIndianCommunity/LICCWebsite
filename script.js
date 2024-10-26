// JavaScript for toggling the sidenav
function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    if (sidenav.style.width === '0px' || sidenav.style.width === '') {
        sidenav.style.width = '250px'; // Open the sidenav
    } else {
        sidenav.style.width = '0'; // Close the sidenav
    }
}
