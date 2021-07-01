function validate(){
  var fname = document.forms["loginform"]["fname"].value;
  var lname = document.forms["loginform"]["lname"].value;
  var email = document.forms["loginform"]["email"].value;
  var mobileno = document.forms["loginform"]["mobileno"].value;
  var username = document.forms["loginform"]["username"].value;
  var pass = document.forms["loginform"]["pass"].value;
  console.log(mobileno);
  if(fname.length>50 || lname.length>50)
    alert("Name size cannot be more than 50");
  if(!fname.match([a-zA-z]+) || !lname.match([a-zA-z]+))
    alert("Name size cannot have special characters");
  if(!mobileno.match([0-9]+) || mobileno.length!==10)
    alert("Invalid mobileno");
  if(!email.match([a-zA-z\_]+[@][a-z]+[.][a-z]+))
    alert("Invalid email");
  if(username<5 || !username.match([a-z]+[0-9]+))
    alert("Invalid email");
  if(pass<8 || !pass.match([a-z]+))
      alert("Invalid email");
}
