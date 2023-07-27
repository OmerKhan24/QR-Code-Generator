
let imgbox=document.getElementById("imgBox")
let QR=document.getElementById("QR")
let QRtext=document.getElementById("QRtext")

function generateQR(){

    if(QRtext.value.length > 0){
        QR.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRtext.value;
        imgbox.classList.add("show-img");
    }else{
        QRtext.classList.add('error');
        setTimeout(()=>{
            QRtext.classList.remove('error');
        },1000)
    }

}