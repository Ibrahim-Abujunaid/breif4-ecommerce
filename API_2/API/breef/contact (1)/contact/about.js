let signupButtonNav = document.getElementById('signupButtonNav');

let loginButtonNav = document.getElementById('loginButtonNav');

// Check if the user is logged in
const isLoggedIn = sessionStorage.getItem('isLoggedin');
const ADMIN=sessionStorage.getItem('ADMIN');
if (isLoggedIn=='true'&&ADMIN==1){
    loginButtonNav.textContent = 'Dashboard';
    loginButtonNav.addEventListener('click', (e) => {
        // Log out logic
        window.location.href = './userside/Blog Source Code/blog-html-css/admin/Salls/index.html';
    });
    signupButtonNav.textContent = 'Log out';
    signupButtonNav.addEventListener('click', (e) => {
        // Log out logic
        window.location.href = 'index.html';
        sessionStorage.setItem("isLoggedin","false");
        sessionStorage.removeItem("ADMIN")
    });
} else if (isLoggedIn === 'true') {
    // Change text and behavior for logged-in users
    loginButtonNav.textContent = 'Profile';
    signupButtonNav.textContent = 'Log out';

    signupButtonNav.addEventListener('click', (e) => {
        // Log out logic
        window.location.href = '/API/breef/index.html';
        sessionStorage.setItem("isLoggedin","false");
    });
    
    loginButtonNav.addEventListener('click', (e) => {
        // Log out logic
        window.location.href = '/API/breef/UserProfile.html';
    });
} else { 
    carticon.style.display="none";
    signupButtonNav.addEventListener('click', (e) => {
window.location.href ="/API/breef/signup.html"
});
  
loginButtonNav.addEventListener('click', (e) => {
    window.location.href ="/API/breef/login.html"
    });  // Logic for non-logged-in users
}


