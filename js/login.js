document.getElementById('login-btn').addEventListener('click', function(){
    // declaring demo user email & password
    const defaultUserEmail = 'sb@gmail.com';
    const defaultUserPassword = 'password';
    // getting user email
    const getUseremail = document.getElementById('user-email');
    const userEmail = getUseremail.value;

    // getting user password
    const getUserPassword = document.getElementById('user-password');
    const userPassword = getUserPassword.value;

    // checking user email and password is correct or not
    if(userEmail == defaultUserEmail && userPassword == defaultUserPassword){
        window.location.href = 'admin.html';
        
    }else{
        console.log('Invalid user');
        
    }
    
    
});