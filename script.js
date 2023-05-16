document.getElementById('Convert').onclick=tempConvert;
document.getElementById('Reset').onclick=clearForm;
function tempConvert(){
    var f=document.getElementById("fahrenheit").value;
    var c=document.getElementById("celsius").value;

    if(f!=''){
        c=(parseFloat(f)-32)/1.8;
    }else{
        f=(parseInt(c)*1.8)+32;
    }

    document.getElementById('fahrenheit').value=parseFloat(f).toFixed(1);
    document.getElementById('celsius').value=parseFloat(c).toFixed(1);

}
function clearForm(){
    document.getElementById('fahrenheit').value='';
    document.getElementById('celsius').value='';
}