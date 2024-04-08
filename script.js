let generateOTP = () =>{
    const otpLength = 6
    const otp = Math.floor(Math.random()*900000)+100000;

    document.getElementById("otpdisplay").innerHTML = otp;
    console.log(otp)
};

document.getElementById("btn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);