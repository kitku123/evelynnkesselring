var strona = 1;

//przyciemnianiee

element = document.getElementById("lewo");

element.onmouseover = function() {
	if(strona == 1){
		document.getElementById("prawo").classList.add("ciemne1");

		

	}
	document.getElementById("artysta").innerHTML="@_bisha_monten on twt"
	document.getElementById("prawoo").classList.add("ciemne3");
}

element.onmouseleave = function() {
			document.getElementById("prawo").classList.remove("ciemne1");
			document.getElementById("prawoo").classList.remove("ciemne3");
			document.getElementById("artysta").innerHTML=""
}

element = document.getElementById("lewooo");

element.onmouseover = function() {
	document.getElementById("artysta").innerHTML="@_bisha_monten"

}

element.onmouseleave = function() {

			document.getElementById("artysta").innerHTML=""
}

element = document.getElementById("lewoo");

element.onmouseover = function() {
	if(strona == 1){
		document.getElementById("prawo").classList.add("ciemne1");
		

	}
	document.getElementById("prawoo").classList.add("ciemne3");
}

element.onmouseleave = function() {
			document.getElementById("prawo").classList.remove("ciemne1");
			document.getElementById("prawoo").classList.remove("ciemne3");
}


element = document.getElementById("prawo");

element.onmouseover = function() {
	if(strona == 2){
		document.getElementById("lewo").classList.add("ciemne2");
		
	}
}

element.onmouseleave = function() {
	document.getElementById("lewo").classList.remove("ciemne2");
}


//relacje
relki = [["https://cdn.discordapp.com/attachments/844563617533919242/1013210647372234842/unknown.png", "Laurin Ciel Lavigne","Evelynn bardzo lubi marionetkę i chyba ze wzajemnością. Dobrze się ze soba dogadują, czasami zdarza im się też flirtować, ale relacja nadal ma całkowicie przyjacielski wydźwięk"],
["https://cdn.discordapp.com/attachments/844563617533919242/1013213158535610409/unknown.png","Maja Marion Kesselring","Eve nie widział swojej kuzynki od co najmniej kilkunastu lat. Nie wie, że dziewczynie udało się uciec tak jak jemu i pewnie myśli, że wampirka nie żyje. Gdy byli dziećmi z racji podobnego wieku łatwo się zaprzyjaźnili. Maja była dla wampira praktycznie jak siostra."],
["https://cdn.discordapp.com/attachments/844563617533919242/1013219812400451684/unknown.png","Kaleb \"Joker\" Price","Wampir potrzebował pieniędzy, a lichwiarz był mu w stanie je zaoferować. Były to czasy, gdy Eve ledwo wiązał koniec z końcem, dlatego też nawet nie liczył na to, że uda mu się pożyczkę zwrócić. Z dnia na dzień po prostu zniknął i od tamtego dnia modli się, żeby na swojego wierzyciela nie wpaść."]];


function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

relki.sort(compareSecondColumn);
relki = relki.sort(compareSecondColumn);




 
for(i = 0; i < relki.length; i++){
	element = document.getElementById("relki").innerHTML+= " <div id = \"rl"+i+"\", class = \"relka\"> <div id = \"relka1\"> <img src = \""+relki[i][0]+"\"> </div><div id = \"relka2\"> <br><b>"+relki[i][1]+"</b><br>"+relki[i][2]+"</div> </div><br>";

}

//przejście na inne strony


document.getElementById("p7").onmousedown = function() {
	if(strona == 1){

		document.getElementById("lewo").classList.remove("lewopersonalia");
		document.getElementById("prawo").classList.remove("prawopersonalia");
		document.getElementById("prawo").classList.remove("ciemne1");
		document.getElementById("lewo").classList.add("lewociekawostki");
		document.getElementById("prawo").classList.add("prawociekawostki");
		strona = 2;

		for(i = 1; i < 8; i++){
			document.getElementById("p"+i).innerHTML = "";
		}

		document.getElementById("p8").innerHTML = "<b>Lęki:</b>";
		document.getElementById("p9").innerHTML = "<br> • psy";
		document.getElementById("p10").innerHTML = "<br> • ostre przedmioty";
		document.getElementById("p11").innerHTML = "<br> • odkrycie tożsamości";
		document.getElementById("p12").innerHTML = "<br><br><b>Stosunek do rodziny królewskiej:</b><br>neutralny";
		document.getElementById("p13").innerHTML = "<br><br><b>Ciekawostki:</b>";
		
		document.getElementById("p14").innerHTML = "<br> • umie grać na pianinie";
		document.getElementById("p15").innerHTML = "<br> • przyrządza dobre potrawy";
		document.getElementById("p16").innerHTML = "<br> • zawsze nosi ze sobą talię kart";
		document.getElementById("p17").innerHTML = "<br> • jest pedantem";
		document.getElementById("p18").innerHTML = "<br> • jest switchem";
		document.getElementById("p19").innerHTML = "<br> • bardzo lubi owoce";
		document.getElementById("p20").innerHTML = "<br><br><br><br>🡄⠀";


	}
}	

document.getElementById("p20").onmousedown = function() {
	if(strona == 2){

		document.getElementById("lewo").classList.add("lewopersonalia");
		document.getElementById("prawo").classList.add("prawopersonalia");
		//document.getElementById("prawo").classList.remove("ciemne2");
		document.getElementById("lewo").classList.remove("ciemne2");
		document.getElementById("lewo").classList.remove("lewociekawostki");
		document.getElementById("prawo").classList.remove("prawociekawostki");
		strona = 1;

		for(i = 8; i < 22; i++){
			document.getElementById("p"+i).innerHTML = "";
		}

		document.getElementById("p1").innerHTML = "<span id = \"tytul\">E V E</span><br>Evelynn Kesselring"
	 	document.getElementById("p2").innerHTML = "<b><br id = \"male\">Rasa:</b><br>wampir"
	 	document.getElementById("p3").innerHTML = "<b><br id = \"male\">Zawód:</b><br>iluzjonista"
	 	document.getElementById("p4").innerHTML = "<b><br id = \"male\">Data urodzenia i wiek:</b><br>16 marca | 24 lata"
	 	document.getElementById("p5").innerHTML = "<b><br id = \"male\">Identyfikacja płciowa:</b><br>niebinarna"
	 	document.getElementById("p6").innerHTML = "<b><br id = \"male\">Orientacja seksualna i romantyczna:</b><br>biseksualny biromantyczny"
	 	document.getElementById("p7").innerHTML = "<br><br><br>🡆"

	}
}	



//pyciski!!

function dla(id, tekst, stronka, gdzie){
			
	element = document.getElementById(id);

	element.onmouseover = function() {
		if (stronka == strona){
			document.getElementById(gdzie).innerHTML = tekst;
		}
	}

	element.onmouseleave = function() {
		if (stronka == strona){
			document.getElementById(gdzie).innerHTML = "";
		}
	}				
}

function dl3(id, tekst){
			
	element = document.getElementById(id);

	element.onmouseover = function() {
		document.getElementById("trescr").innerHTML = tekst;
		
	}

	element.onmouseleave = function() {
			document.getElementById("trescr").innerHTML = "";
	
	}				
}



function dl1(id, tekst){
	dla(id, tekst, 1, "tresc");
}

function dl2(id, tekst){
	dla(id, tekst, 2, "trescl");
}



dl1("p1","Eve pochodzi z dużego wampirzego rodu, którego przedstawicieli na tym świecie trudno już szukać. Z wiadomych więc powodów nie posługuje się swoim dawnym nazwiskiem. Pełnym imieniem też nie dzieli się często - w cyrku występuje pod pseudonimem \"Eve\", będącym tak właściwie zdrobnieniem prawdziwego imienia. <br>W spisie ludności widnieje pod jako \"Eve Monnaie\".");
dl1("p2", "Choć jest wampirem czystej krwi, swoją rasę jest zmuszony ukrywać, by w ten sposób nie ujawnić swojej prawdziwej tożsamości. Żyje jako człowiek.<br>O tym, że w rzeczywistości człowiekiem nie jest, wie tylko kilka zaufanych mu osób. Te, które dowiedziały się przypadkiem albo już nie żyją, albo mają bardzo dobre informacje, żeby go tym szantażować.");
dl1("p3", "Życie nauczyło go, jak udawać. Choć zaczynąjąc pracę w cyrku o sztuce iluzji nie miał zbyt wielkiego pojęcia, po jakimś czasie udało mu się opanować ją całkiem dobrze. Podczas cyrkowego programu, ma swój własny pokaz magii. Często też zdarza mu się też asystować w przedstawieniach innych cyrkowców.");
dl1("p4", "Po świecie nie stąpa jeszcze zbyt długo, ale żyje dostatecznie długo, żeby pamiętać,co się stało z resztą jego rodziny. Uciec z domu był zmuszony w wieku lat 14. Trochę włóczył się po świecie, szukając swojego miejsca, jednak od kilku lat to cyrk jest jego domem.");
dl1("p5", "Nigdy nie czuł się jakoś nierozłącznie powiązany z męskością, ale nigdy też się jej nie brzydził. Wampir uważa, że płeć to jedynie koncept i lubi z nią eksperymentować Choć na co dzień nie ma żadnego problemu z byciem określanym jako mężczyzna, to często można go zobaczyć w makijażu, perukach czy sukienkach - w tym również podczas cyrkowych pokazów.");
dl1("p6", "Evelynn gustuje zarówno w kobietach, jak i mężczyznach, a tymi, którzy nie wpisują się w wymienione kategorie również nie gardzi. Uwielbia flirtować, przeżywać przelotne romanse i one night standy. Nie interesują go jednak szczególnie związki - jeśli chodzi o partnerów romantycznych jest dużo bardziej wybredny niż przy partnerach seksualnych.");

dl2("p9", "Psy są najgorsze! Evelynn nie czuje się w ich towarzystwie w żadnym stopniu komfrotowo. Chociaż panika nie towarzyszy mu przy spotkaniu z byle burkiem, to jeżeli jakiś większy pies zacznie biec w jego stronę, wampir zareaguje... co najmniej nieadekwatnie do sytuacji");
dl2("p10", "Boi się ostrych przedmiotów, a może tak właściwie srebra, którego mogą posiadać domieszkę?. Nie ma problemu z nożami, które wcześniej \"przetestował\", jednak nadal czasami trudno mu się odciąć od traumatycznych wspomnień z dzieciństwa. Nie każde ostrze jest w stanie go zranić, ale po co ryzykować?");
dl2("p11", "Żyjąc pod fałszywym nazwiskiem i ukrywając się jako wampir, zawsze pozostaje ta myśl \"co jeżeli to wszystko wyjdzie na jaw?\". Boi się, że jego dotychczasowe życie może runać jak domek z kart, a jego nowa \"rodzina\" skończy tak, jak poprzednia.");
dl2("p12", "Ta część może wydawać się dość dziwna, bo w końcu przez panujacą monarchię wampir stracił swoją rodzinę i dom. Eve nie żywi jednak urazy do rodziny królewskiej jako całości. Król, który wydał rozkaz o eksterminacji Kesselringów przecież już nie żyje, a nawet jeżeliby żył, to nie zwróciłby życia jego rodzicom, nieważne jak bardzo wampir by tego chciał. Poza tym Eve porzucił już swoje nazwisko, a teraz jego miejsce jest w cyrku. Zamiast roztrząsać przeszłość, woli się od niej odciąć. Jest apolityczny.")

dl2("p14", "W młodości uczył się grać na tym instrumencie, a takie umiejętności szybko nie przepadają. W przeszłości zarabiał też grając w barze, jednak wtedy nie udało mu się do tego przekonać. Dopiero w cyrku znowu poczuł radość z grania. Teraz jego gra często służy jako akompaniament przy niektórych występach");
dl2("p15", "Wampiry najbardziej syci krew, jednak młodego Evelynna bardzo zaintrygowała idea samodzielnego przyrządzania potraw. Gdy żył jeszcze w posiadłości razem z rodziną, często odwiedział kuchnie, a jedna z gotujących dla Kesselringów kucharka nauczyła wampira podstaw tej sztuki. Potrafi przyrządzić dość wiele potraw, jednak szczególnie lubuje się w przygotowywaniu deserów.")
dl2("p16", "Jest iluzjonistą, a sztuczki karciane są jednymi z prostszych do wykonania. Mając przy sobie talię kart, wampir jest w stanie zaprezentować swoje umiejętności bez większego ekwipunku. W ten sposób może szybko zarobić, np. przez zakłady. Lubi także grać w gry - czasami dla rozrywki, czasami dla hazardu.");
dl2("p17", "Wiele lat spędził tułając się po świecie, gdzie nie zawsze mógł liczyć na dobre warunki noclegu, jednak teraz gdy jest w cyrku, stare nawyki mu wróciły. Evelynn bardzo ceni sobie porządek. W jego pokoju zawsze jest czysto i wszystko jest ładnie zorganizowane. Nie lubi brudnych miejsc, dlatego jeżeli ktoś szuka darmowej sprzątaczki, to równie dobrze może go zaprosić do siebie.");
dl2("p18", "W zależności od humoru, a także osoby, z którą akurat wybrał się do łóżka, jest w stanie zająć obie role - jest switchem, co ułatwia mu znajdowanie nowych partnerów seksualnych.");
dl2("p19", "Bardzo lubi owoce, a szczególnie te małe i słodkie. W gust wampira najbardziej trafiają maliny, wiśnie i truskawki. Uwielbia również sorbety o wymienionych smakach.")

dl3("p23", "Innych pracowników cyrku traktuje jak nową rodzinę, więc jeżeli zależy ci na jakieś ciepłej relacji, to jak najbardziej! Jeżeli natomiast myślisz, że pomiędzy Evelynnem, a twoją postacią nie doszłoby do porozumienia, to też śmiało możemy coś wymyślić.<br>Jeżeli twoja postać jest w cyrku dość długo, to może pamięta jak wampir do niego dołączył? Początki bywają trudne, szczególnie gdy przez całe swoje życie kryjesz się przed władzami. Eve na początku był dla innych dość chłodny i niedostępny. Nie miał też własnych pokazów, a jedynie w niektórych asystował (i nadal asystyje, więc na tym też możemy oprzeć relację!). Z czasem jednak stał się bardziej rozmowny i ekspresyjny. Może twoja postać ma z nim z tamtego czasu wciąż negatywne wspomnienia, niezakończone konflikty, a może żywiła do niego współczucie?")
dl3("p24", "Ah, skąd ta nienawiść! No cóż - mogą być jej pewne źródła. Eve bardzo lubi drażnić się z innymi i czasami zdarza mu się naruszać granice innych. Czasami niektóre rzeczy mogą zajść za daleko i... Są rzeczy, których się zwyczajnie nie wybacza. Jeżeli jesteś cyrkowcem, to inne tło relacji negatywnej przedstawione zostało wcześniej. No i ogólnie wiele ich jest xD")
dl3("p25", "Gdzieś na górze karty jest wspomniane, że Eve bardzo lubi przelotne romanse i one night standy... Jeżeli twoja postać ma podobne upodobania, to może im dać taki szybki, jednak jakże zbliżający, początek znajomości. Jeżeli twoja postać jest z cyrku, to mogę zaoferować wampirka jako friend with benefits.<br>Jeżeli twoja postać ma za dużo pieniędzy, to Eve też jest w stanie zrobić wiele rzeczy odpłatnie. Albo przynajmniej był, kiedy nie miał jeszcze dobrego źródła dochodu.")
dl3("p26", "O, to świetnie! Evelynn bardzo lubi poznawać nowych ludzi. Jeżeli twoja postać ma jakiś problem, to wampir jest w stanie jej wysłuchać, przytulić i pogłaskać po główce. Jeżeli twoja postać lubi sobie wypić, to Eve chętnie zostanie jej kompanem do kieliszka.<br>Jeżeli podobałby ci się motyw przyjaciół z dzieciństwa, to możemy też dać naszym postaciom jakieś wspólne chwile z młodości. Zarówno z tego, kiedy żył jako Kesselring, jak i z jego późniejszej tułaczki po świecie.")
dl3("p27", "Wspomniane zostało, że Evelynn jest tak naprawdę wampirem? I to z rodu Kesselringów? Tak? No to mam taki koncept - nie każdy zawsze pamięta o śniadaniach, obiadach i różnych innych rzeczach tego typu. Tak samo Evelynnowi mogło się kiedyś zapomnieć o spożywaniu krwi. Albo może nie miał odpowiedniej ku temu okazji, zanim nie zawładnął nim głód. Czerwone oczka mogą nakierować obserwatora na to, że ich właściciel jest wampirem, ale jeżeli wygłodniały wampir się na takiego obserwatora rzuci, to nie pozostawi to już wątpliwości. Jeżeli chcesz, to twoja postać może zostać powiernikiem tego sekretu, a to, co z nim zrobi, to już inna sprawa.")


