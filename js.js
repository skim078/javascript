function greeting() {
  var name = prompt();
  alert(name + " how are you?");
}
//for prompt and greeting




}

function isUserValid(username) {
  return username.length>=6 && !username.includes("!") && !username.includes("#") && !username.includes("$") ;
};

function isPasswordValid (pass) {
  return pass.length>=6 && pass != "password" && (pass.includes("!") || pass.includes("#") || pass.includes("$") && username != pass);
};

function areCredsValid() {
  var name = prompt("user id");
  var pass = prompt("Password");
  return isUserValid(name) && isPasswordValid(pass)
};

 function getUserCreds() {

   alert("your creds are valid " + areCredsValid());
 };
