var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var main=['हफ्ता','साल','आज','कल','कैलेंडर','सेकंड','घंटा','मिनट','बजे','घड़ी','सकना','करना','जाना','आना','हसना','बनाना','देखना','दूर','छोटा','सुंदर','बदसूरत','कठिन','अच्छा','आदमी','आप','आशा','और','एक','कमरा','कुरसी','खिड़की','गाड़ी','गुजराती','चाचा','चिड़िया','छोटा','जर्मन','जापानी','ठीक','तीन','तुम','तू','दादी','दूसरा','दो','नहीं','पंखा','पिता','पुराना','बड़ा','बहुत','बहू','बूढ़ा','भारतीय','मकान','माता','मानव','यह','रविवार','राजा','लाल','लोग','वह','हम','हवादार','है','अभी','आज','और','कितना','किताब']

var malayalam = ['ആ','ഇ','ഈ','ഓ','ക','ഖ','ഗ','ഘ','ങ','ച','ഛ','ജ','ഡ','ഢ','ണ','ത','ഥ','ദ','ധ','ന','പ','യ','ഴ','വ','ശ','ഷ','സ','ഹ','ാ','ി','ോ'];
var malayalam_dict = ['സ്വാഗതം','ചായ','ചാവി','ചാവി','മേശ','പേന','തൊപ്പി','വീഞ്ഞ്','കുശിനി']


var telugu = ['అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ఎ','ఏ','ఐ','ఒ','ఓ','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఞ','ట','ఠ','డ','ఢ','ణ','త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ఱ','ల','ళ','వ','శ','ష','స','హ'];
var telugu_dict = ['దయ','అది','అవును','నిజమె','కాదు','ఏంటి','ఆంగ్లము','ఎల','ఎవరు','ఏది','ఎంత','ఎన్ని','వద్దు','లేదు','కాదు','రాదు','నాకు','కాలేదు','భాష','నాపేరు','ఉంది','ఎలా','ఉన్నారు','ఎక్కడికి','ఏంటి','ఎక్కడ','ఎందుకు','ఎవరు','ఎలా','ఏమి','ఉంది','లేదు','నాకు','కావాలి','మాసం','సంవత్సరం','మాసం','తేది','నూతన','ఇది','చాలా','బాగుంది','మీరు','ఎక్కడ','నను','సినిమా','చూస్తున్నాను','ఉంది','తరువు','తరవండి','అవును','నాకోసం','మీకోసం','నకోసం','కాదు','అవును','ఎంత','కాలేదు','నాకు','సున్న','ఒక','రెండు','మూడు','నాలుగు','ఐదు','ఆరు','ఏడు','ఎనిమిది','తొమ్మిది','పది','పదకొందు','పన్నెండు']

var tamil = ['அ','ஆ','இ','ஈ','உ','ஊ','எ','ஏ','ஐ','ஒ','ஓ','ஓ','க்','ங்','ச்','ஞ்','ட்','ண்','த்','ந்','ப்','ம்','ய்','ர்','ல்','வ்','ழ்','ள்','ற்','ன்'];
var tamil_dict = ['பாடு','காது','பிள்ளை','நான்','பூ','தீ','கல்யாணம் ','பந்து','அன்பு'];

var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55,61,62,63,64,65,71,72,73,74,75,81,82,83,84,85,91,92,93,94,95];

var i=0;
var j=0;
var word='';
var score=0;
var count=0;

var mainarray=o[0];
console.log(mainarray);

document.getElementById("Score").innerHTML="join " + "the " + "words " + "and " + "see " + " whether " + "you " + "are " + "correct " + "or " + "not.";


function setlanguage()							
{
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');					
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=200;t++)
	{
		var get = document.getElementById(t);
		
		if (langval == 'telugu')												
		{
			var rand = telugu[Math.floor(Math.random() * telugu.length)];
		}
		
		if (langval == 'hindi')													
		{
			var rand = o[Math.floor(Math.random() * o.length)];
		}

			if (langval == 'malayalam')											
			{
				var rand = malayalam[Math.floor(Math.random() * malayalam.length)]
			}
		if (langval == 'tamil')													
		{
			var rand = tamil[Math.floor(Math.random() * tamil.length)];
		}
					document.getElementById(t).innerHTML=rand;

		if (t%5 == 0)
			t = t+5;
	}
	word='';
}

setlanguage();

function getdata(a,b)															
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="Your " + "word: " + word;
	document.getElementById("Score").innerHTML='';
}
function regenerate()															
{	
	console.log('inside regenerate');
	word='';
	j=0;	
	var lang = document.getElementById('Language');								
	var langval = lang.options[lang.selectedIndex].value;
	console.log('inside regenerate: ' + langval);
	document.getElementById("Selectedletter").innerHTML='';

	if(langval=='telugu')														
	{
	for(var i=0;i<80;i++)
	{
		var item = telugu[Math.floor(Math.random()*(telugu.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}
	if(langval=='hindi')														
	{
	for(var i=0;i<80;i++)
	{
		var item = o[Math.floor(Math.random()*(o.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				
		j++;
	}
	}
	if(langval=='tamil')														
	{
	for(var i=0;i<80;i++)
	{
		var item = o[Math.floor(Math.random()*(tamil.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				
		j++;
	}
	}
	if(langval=='malayalam')														
	{
	for(var i=0;i<80;i++)
	{
		var item = o[Math.floor(Math.random()*(malayalam.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				
		j++;
	}
	}
	document.getElementById("Score").innerHTML="Form " + "the " + "word " + "and " + "check " + " whether " + "you " + "are " + "correct " + "or " + "not.";
	score=0;
}

function Check()																
{
	var flag=0;
	console.log(word);
	var lang = document.getElementById('Language');
	var langval = lang.options[lang.selectedIndex].value;
	if(langval=='hindi')														
	{
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
		score=score+5;
		document.getElementById("Score").innerHTML=" Hey Congrats!! " + "Your " + "score " + "is " + score;		
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Oops!! " + "Word " + "not " + "found.";		
	flag=0;
	}
	if(langval=='telugu')
	{																			
	for(var k=0;k<telugu_dict.length;k++)
	{
		console.log(main[k]);
		if(word==telugu_dict[k])
		{
		flag=1;
		score=score+5;
		document.getElementById("Score").innerHTML="Hey Congrats!! " + "Your " + "score " + "is " + score;	//Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Oops!! " + "Word " + "not " + "found.";			
	flag=0;
	}
	if(langval=='tamil')
	{																			
	for(var k=0;k<tamil_dict.length;k++)
	{
		console.log(main[k]);
		if(word==tamil_dict[k])
		{
		flag=1;
		score=score+5;
		document.getElementById("Score").innerHTML="Hey Congrats!! " + "Your " + "score " + "is " + score;	
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Oops! " + "Word " + "not " + "found.";			
	flag=0;
	}
	if(langval=='malayalam')
	{																			
	for(var k=0;k<malayalam_dict.length;k++)
	{
		console.log(main[k]);
		if(word==malayalam_dict[k])
		{
		flag=1;
		score=score+5;
		document.getElementById("Score").innerHTML="Hey Congrats!! " + "Your " + "score " + "is " + score;	
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Oops! " + "Word " + "not " + "found.";			
	flag=0;
	}
	
	word='';
	document.getElementById("Selectedletter").innerHTML='';
}