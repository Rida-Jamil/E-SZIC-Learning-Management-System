const logOut = document.getElementById('logOut');
const mergeAccounts = document.getElementById('mergeAccounts');
const modifyAccount = document.getElementById('modifyAccount');
const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const auth = firebase.auth();

logOut.addEventListener('click', () => {
    //signOut() is a built in firebase function responsible for signing a user out
    auth.signOut()
        .then(() => {
            window.location.assign('./index.html');
        })
        .catch(error => {
            console.error(error);
        })
})

auth.onAuthStateChanged(user => {
    console.log(user);
})

function Continue() {
    window.location.assign('./Home.html');
}

//Go to modification page
modifyAccount.addEventListener('click', () => {
    window.location.assign('./edit.html');
});
/* 
//Go to merge accounts page
mergeAccounts.addEventListener('click', () => {
    window.location.assign('../merge');
});
 */