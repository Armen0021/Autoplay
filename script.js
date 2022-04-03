var nkanunner = ["Arctic","Road","Mountains","Forest"]
var i = 0

function skizb(){
    document.getElementById("nkar").src="0.jpg"
    document.getElementById("nkar").title="0.jpg"
    document.getElementById("a").value= nkanunner[0]
    document.getElementById("play").disabled = false
    document.getElementById("stop").disabled = true
}

function next(){
    i++
    if(i==4){
        i = 0
}
document.getElementById("nkar").src=i+".jpg"
document.getElementById("nkar").title=i+".jpg"
document.getElementById("a").value=nkanunner[i]
document.getElementById("divid").innerHTML="<b>"+i+".jpg"+"</b>"
if(i==1){
    document.getElementById("divid").innerHTML="<i>" +i+  ".jpg"+"</i>"
}
if(i==2){
    document.getElementById("divid").innerHTML="<u>" +i+ ".jpg"+"</u>"
}
}

function prev(){
    i--
    if(i==-1){
        i = 3
    }
    document.getElementById("nkar").src=i+".jpg"
    document.getElementById("nkar").title=i+".jpg"
    document.getElementById("a").value=nkanunner[i]
    document.getElementById("divid").innerHTML="<b>"+i+".jpg"+"</b>"
    if(i==1){
        document.getElementById("divid").innerHTML="<i>" +i+  ".jpg"+"</i>"
    }
    if(i==2){
        document.getElementById("divid").innerHTML="<u>" +i+  ".jpg"+"</u>"
    }
}
sti = 0

function play(){
    sti=setInterval(next,1000)
    document.getElementById("play").disabled = true
    document.getElementById("play").style.backgroundColor= "red"
    document.getElementById("stop").style.backgroundColor= "green"
    document.getElementById("stop").disabled = false
    document.getElementById("stop").value = "■"
}

function stop(){
    clearInterval(sti)
    document.getElementById("stop").disabled = true
    document.getElementById("stop").style.backgroundColor = "red"
    document.getElementById("play").style.backgroundColor = "green"
    document.getElementById("play").disabled = false
    document.getElementById("stop").value = "o"
}