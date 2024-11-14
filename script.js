const passwordBox = document.getElementById("password");
const lenghtt = 12;

const horofB = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//1
const horofk = "abcdefghijklmnopqrstuvwxyz";//2
const adad = "0123456789";//3
const char = "`!@#$%&*-{}:?/><,.";//4
const all = horofB + horofk + adad + char;//5

function creatPassword(){
    let password = "";
    password += horofB[Math.floor(Math.random() * horofB.length)];//قاطی پاتی کردن حروف بزرگ 1 
    password +=  horofk[Math.floor(Math.random() * horofk.length)];//قاطی پاتی کردن حروف کوچک 2
    password +=  adad[Math.floor(Math.random() * adad.length)];//قاطی پاتی کردن اعداد 3
    password +=  char[Math.floor(Math.random() * char.length)];//قاطی پاتی کردن کاراکترا 4

    while(lenghtt > password.length){
          password += all[Math.floor(Math.random() * all.length)];//قاطی پاتی کردن همه 5
    }
  
    passwordBox.value = password;
   
}

//تابع کپی
function copy(){
    passwordBox.select();
    document.execCommand("copy");
}

