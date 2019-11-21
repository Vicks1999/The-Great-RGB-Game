var num=6; 
var colors=randomcolors(num);
var squares=document.querySelectorAll(".square");
var pickcolor=picking();
var rgbdisplay=document.getElementById("rgbdisplay");
var message=document.querySelector("#message");
var newcolors=document.querySelector("#newcolors");
var h1=document.querySelector("h1");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
newcolors.textContent="New Colors";
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
num=3;
colors=randomcolors(num);
pickcolor=picking();
message.textContent="";
rgbdisplay.textContent=pickcolor;
for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
		squares[i].style.background=colors[i];	
	}
	else
	{
		squares[i].style.display="none";	
	}
}
h1.style.background="steelblue";
});

hardbtn.addEventListener("click",function(){
newcolors.textContent="New Colors";
easybtn.classList.remove("selected");
hardbtn.classList.add("selected");
num=6;
colors=randomcolors(num);
pickcolor=picking();
message.textContent="";
rgbdisplay.textContent=pickcolor;
for(var i=0;i<squares.length;i++)
{
		squares[i].style.background=colors[i];	
		squares[i].style.display="block";	
}
h1.style.background="steelblue";
});

rgbdisplay.textContent=pickcolor;
newcolors.addEventListener("click",function(){ 
	colors=randomcolors(num);
	pickcolor=picking();
	message.textContent="";
	newcolors.textContent="New Colors";
	rgbdisplay.textContent=pickcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];		
	}	
	h1.style.background="steelblue";
})
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var userclicked=this.style.background;
		if(pickcolor===userclicked)
		{
			message.textContent="Correct!";
			newcolors.textContent="Play again!!";
			changecolors(pickcolor);
			h1.style.background=pickcolor;
		}
		else
		{
			this.style.background="#232323";
			message.textContent="TryAgain!!";
		}
	});
}
function changecolors(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function picking()
{
	var picked=Math.floor(Math.random()*colors.length);
	return colors[picked];
}

function randomcolors(num){
 var arr=[];
 for(var i=0;i<num;i++)
 {
 	arr.push(randomcolor());
 }
 return arr;
}

function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" +r+", "+g+", "+b+")";
}