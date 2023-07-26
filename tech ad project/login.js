let a = 'Username do exist';
let b = 'Username do not exist';
let  username1;
let password1;
let  Name;
let Password;
function signin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let city = document.getElementById('city').value;
    let surname = document.getElementById('surname').value;
    let birth = document.getElementById('birth').value;


    sessionStorage.setItem('Name',username);
    sessionStorage.setItem('Password',password);
    sessionStorage.setItem('Surname',surname);
    sessionStorage.setItem('Birth',birth);
 
    info.push(
        {
            name: username2,
            surname: surname,
            password: password2,
            city: city,
            birthdate: birth

        }
    );                  

    console.log(info);

}
function login() {
    let lusername = document.getElementById('username').value;
    let lpassword = document.getElementById('password').value;
    username1 = sessionStorage.getItem('Name');
    password1 = sessionStorage.getItem('Password');
      
  console.log(username1);
  console.log(password1);
   

  if (lusername == username1 &&  lpassword == password1){
    console.log(a);
  
    
    
  }
  else{
    console.log(b);
    alert("Entered Username or Password does no exist!");
  }


}




/*let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let bigCities = cities.filter(function (r,t) {
    //return r.population > 3000000;
    return r.name  = 'Houston';
    
});
----*/
function validateform() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == null || username == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}  