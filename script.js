var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","word")
input.setAttribute("placeholder","ex:end")
var button=document.createElement("button")
button.innerHTML="search";
button.addEventListener("click",foo);
let final=document.createElement("div")
final.setAttribute("id","content")

div.append(input,button,final)
document.body.append(div)


async function foo(){
   
let res = document.getElementById("word").value;

let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${res}`
let result=await fetch(url);
let result1=await result.json();
console.log(result1)
final.innerHTML=`<div class="card"><b>Meaning</b> : ${result1[0].meanings[0].definitions[0].definition}<br><br>
<b>synonyms</b> : ${result1[0].meanings[0].synonyms[0]}<br><br>
<b>antonyms</b> : ${result1[0].meanings[0].antonyms[0]}<br><br>
<b>partsofspeech</b> :  ${result1[0].meanings[0].partOfSpeech}<br><br>

<b>pronunciation :</b><br><audio controls><source src = "${result1[0].phonetics[0].audio}" ></audio>






`
}
