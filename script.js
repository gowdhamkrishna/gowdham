const email=document.querySelector('.email')
const password=document.querySelector('.password')
const confirm=document.querySelector(".button-confirm")
let obj={
    email:"",
    password:"",
}
confirm.addEventListener("click",(e)=>{
    e.preventDefault();
    if (email.value===""||password.value==="") {
        alert("Please fill in all the fields");
        return
    }
        
        obj.email=email.value;
        obj.password=password.value;
        console.log(obj);
        sendServer();
})
const sendServer=async()=>{
    const response = await fetch('http://localhost:8000/send', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
    })
}