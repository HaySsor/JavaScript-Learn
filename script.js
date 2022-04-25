// * Ćwiczenie - "Przeplatanie"
/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
 * - używając kolejnych cyfr parametrów połączy je w jeden string.
 *
 * Przykład:
 * zipIt(111, 222) // => '121212'
 * zipIt(123, 456) // => '142536'
 * zipIt(12, 5555) // => '152555'
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
 * spełniają tego warunku, funkcja powinna rzucić wyjątek.
 */

function zipIt(first, second) {
	const firstArray = Array.from(String(first), Number);
	const secondArray = Array.from(String(second), Number);
	const resultArray = [];

	for (i = 0; i < Math.max(firstArray.length, secondArray.length); i++) {
		resultArray.push(firstArray[i], secondArray[i]);
	}

	console.log(resultArray.join(""));
	return resultArray.join("");
}
zipIt(11111111, 222);

// ================================================================================================================================

// * Ćwiczenie - "Pangram"
// * Cel zadania
// *------------
// * Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
// *
// * Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
// *
// *
// * Przykład:
// *
// * isPangram('test') // => false
// * isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
// */
/*
 * Punkty dodatkowe
 *-----------------
 * Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
 */

function isPangram(sentence) {
	if (typeof sentence != "string") {
		throw new Error("It must be string");
	}

	const alphabet = "aąbcćdeęfghijklłmnńoprsśtuówyzźż";
	const sentenceToLowerCase = sentence.toLowerCase();

	for (let i = 0; i < alphabet.length; i++) {
		if (!sentenceToLowerCase.includes(alphabet[i])) {
			return false;
		}
	}

	return true;
}
// ===================================================================================================================
// * Ćwiczenie  - "Predykaty"
/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która jako parametr przyjmie tablicę elementów oraz predykat.
 *
 * Predykatem będzie funkcja która jako parametr przyjmuje jeden element z podanej tablicy
 * i zwraca dla niego wartość true lub false.
 *
 * Funkcja powinna zwrócić nową tablicę w której znajdą się tylko elementy spełniające
 * podany warunek, nie używając wbudowanych metod filter lub map.
 *
 * Przykład:
 * applyPredicate([1, 2, 3], element => element > 2) // => [3]
 * applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)) // => ['b', 'c']
 */

function applyPredicate(elements, predicate) {
	const resultArray = [];

	elements.forEach(item => {
		if (predicate(item)) {
			resultArray.push(item);
		}
	});
	return resultArray;
}
// ===================================================================================================================
// * Ćwiczenie  - "W dwóch krokach"

// * Cel zadania
// *------------
// * Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego
// * parametru zarejestrowany wcześniej przedrostek.

// * Przykład:
// * const greeting = withPrefix('Witaj, ');
// * greeting('Janek'); // => 'Witaj, Janek'
// * greeting('Tomek'); // => 'Witaj, Tomek'
// *
// * const goodbye = withPrefix('Żegnaj, ');
// * goodbye('Janek'); // => 'Żegnaj, Janek'
// * goodbye('Tomek'); // => 'Żegnaj, Tomek'
// *
// * Utworzona funkcja to tzw. funkcja wyższego rzędu.
/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
 * spełnia tego warunku, funkcja powinna rzucić wyjątek.
 */
function withPrefix(prefix) {
	if (typeof prefix !== "string") {
		throw new Error("Podaj tekst");
	}
	return name => prefix + name;
}
// ===========================================================================================================================
// * Ćwiczenie 7 - "Emoji"
/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie
 * z mapowaniem z obiektu "emojiMappings";
 *
 * Przykład:
 * useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
 * useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
 */
const emojiMappings = {
	stop: "🚫",
	gwiazda: "⭐️",
	samochód: "🏎",
	buduję: "🧱",
	budzik: "⏰",
};

function useEmoji(input) {
	arrayInput = input.split(" ");
	const emojiMappingsKeys = Object.keys(emojiMappings);
	let endSing = "";
	arrayInput.forEach((word, id) => {
		const lastChar = word.slice(-1);
		if (lastChar === ".") {
			endSing = ".";
			word = word.substr(word[0], word.length - 1);
		}
		if (emojiMappingsKeys.indexOf(word.toLowerCase()) !== -1) {
			arrayInput[id] = emojiMappings[word.toLowerCase()] + endSing;
		}
	});

	return arrayInput.join(" ");
}
// =========================================================================================================================
// * Cel zadania
// *------------
// * Napisz funkcję, która policzy czas trwania kursu z podziałem na lekcje przygotowane przez Adama, Marcina i Przemka.

// *
// * Funkcja ma zwrócić zdanie:
// * "Kurs Opanuj JavaScript trwa x godzin i y minut.
//    Moduł Adama: ... godzin ... minut
//    Moduł Przemka: ... godzin ... minut
//    Moduł Marcina: ... godzin ... minut
// "
// */
/*
 * Punkty dodatkowe
 *-----------------
 * W wiadomości zwrotnej uwzględnij jaki % kursu stanowią materiały z poszczególnych modułów.
 */

const lessons = [
	{
		id: 1,
		name: "Dziękujemy za zakup kursu",
		length: "0:54",
	},
	{
		id: 2,
		name: "[1x1] Wprowadzenie",
		length: "03:39",
	},
	{
		id: 3,
		name: "[1x2] Podstawy pisania skryptów",
		length: "03:49",
	},
	{
		id: 4,
		name: "[1x3] Zmienne",
		length: "09:01",
	},
	{
		id: 5,
		name: "[1x4] Typy danych",
		length: "06:34",
	},
	{
		id: 6,
		name: "[1x5] Instrukcje warunkowe",
		length: "06:39",
	},
	{
		id: 7,
		name: "[1x6] Operatory",
		length: "11:49",
	},
	{
		id: 8,
		name: "[1x7] Pętle",
		length: "07:24",
	},
	{
		id: 9,
		name: "[1x8] Funkcje",
		length: "06:19",
	},
	{
		id: 10,
		name: "[1x9] Tablice",
		length: "11:41",
	},
	{
		id: 11,
		name: "[1x10] Metody tablic",
		length: "12:55",
	},
	{
		id: 12,
		name: "[1x11] Obiekty",
		length: "11:24",
	},
	{
		id: 13,
		name: "[1x12] Prototypy",
		length: "09:16",
	},
	{
		id: 14,
		name: "[1x13] Klasy",
		length: "03:38",
	},
	{
		id: 15,
		name: "[1x14] Zakres",
		length: "10:05",
	},
	{
		id: 16,
		name: "[1x15] Hoisting",
		length: "08:50",
	},
	{
		id: 17,
		name: "[1x16] Closures",
		length: "06:46",
	},
	{
		id: 18,
		name: "[1x17] Obsługa błędów",
		length: "08:47",
	},
	{
		id: 19,
		name: "[1x18] Nowe metody stringów",
		length: "05:28",
	},
	{
		id: 20,
		name: "[1x19] Destrukturyzacja",
		length: "06:25",
	},
	{
		id: 21,
		name: "[1x20] Rest i Spread",
		length: "06:34",
	},
	{
		id: 22,
		name: "[1x21] Object literals",
		length: "02:23",
	},
	{
		id: 23,
		name: "[1x22] ES6 Modules",
		length: "09:23",
	},
	{
		id: 24,
		name: "[2x1] Środowiska uruchomieniowe",
		length: "10:06",
	},
	{
		id: 25,
		name: "[2x2] Jak działa przeglądarka internetowa",
		length: "13:51",
	},
	{
		id: 26,
		name: "[2x3] DevTools - narzędzia programistyczne",
		length: "16:17",
	},
	{
		id: 27,
		name: "[2x4] Dołączanie kodu JavaScript",
		length: "16:08",
	},
	{
		id: 28,
		name: "[2x5] Document, Window, Navigator",
		length: "12:27",
	},
	{
		id: 29,
		name: "[2x6] Poznaj DOM",
		length: "9:03",
	},
	{
		id: 30,
		name: "[2x7] QuerySelector i nawigacja w DOM",
		length: "15:05",
	},
	{
		id: 31,
		name: "[2x8] Praca z elementami DOM",
		length: "13:49",
	},
	{
		id: 32,
		name: "[2x9] Zdarzenia",
		length: "19:37",
	},
	{
		id: 33,
		name: "[2x10] Formularze",
		length: "12:27",
	},
	{
		id: 34,
		name: "[2x11] Ajax i Fetch API",
		length: "15:02",
	},
	{
		id: 35,
		name: "[2x12] Ciasteczka",
		length: "08:37",
	},
	{
		id: 36,
		name: "[2x13] Przechowywanie stanu z Web Storage API",
		length: "16:11",
	},
	{
		id: 37,
		name: "[2x14] Custom Elements",
		length: "15:41",
	},
	{
		id: 38,
		name: "[2x15] Shadow DOM",
		length: "08:38",
	},
	{
		id: 39,
		name: "[2x16] Template i Slot",
		length: "08:39",
	},
	{
		id: 40,
		name: "[2x17] Polyfills - wsparcie dla brakujących funkcji",
		length: "10:36",
	},
	{
		id: 41,
		name: "[2x18] Canvas - grafika po stronie klienta",
		length: "21:49",
	},
	{
		id: 42,
		name: "[2x19] Niestandardowe API przeglądarek",
		length: "16:17",
	},
	{
		id: 43,
		name: "[2x20] Web Workers",
		length: "09:56",
	},
	{
		id: 44,
		name: "[2x21] Service Worker i tryb offline",
		length: "17:43",
	},
	{
		id: 45,
		name: "[2x22] WebAssembly",
		length: "17:37",
	},
	{
		id: 46,
		name: "[2x22] WebAssembly",
		length: "17:37",
	},
	{
		id: 47,
		name: "[3x1] Czym są SPA?",
		length: "07:36",
	},
	{
		id: 48,
		name: "[3x2] Problem przy budowaniu SPA",
		length: "06:23",
	},
	{
		id: 49,
		name: "[3x3] Architektura oparta o komponenty",
		length: "06:59",
	},
	{
		id: 50,
		name: "[3x4] Czym są frameworki?",
		length: "05:57",
	},
	{
		id: 51,
		name: "[3x5] Zalety i wady frameworków",
		length: "06:58",
	},
	{
		id: 52,
		name: "[3x6] Kiedy framework, kiedy vanilla?",
		length: "03:18",
	},
	{
		id: 53,
		name: "[3x7] Czym jest Angular?",
		length: "19:46",
	},
	{
		id: 54,
		name: "[3x8] Czym jest Vue?",
		length: "17:36",
	},
	{
		id: 55,
		name: "[3x9] Czym jest React? - cz. 1",
		length: "07:24",
	},
	{
		id: 56,
		name: "[3x9] Czym jest React? - cz. 2",
		length: "12:54",
	},
	{
		id: 57,
		name: "[3x9] Czym jest React? - cz. 3",
		length: "10:54",
	},
	{
		id: 58,
		name: "[3x10] Jaki framework wybrać?",
		length: "05:34",
	},
	{
		id: 59,
		name: "[3x11] Template Syntax i JSX",
		length: "06:28",
	},
	{
		id: 60,
		name: "[3x12] JSX w praktyce",
		length: "05:47",
	},
	{
		id: 61,
		name: "[3x13] Komponenty, props i state",
		length: "11:47",
	},
	{
		id: 62,
		name: "[3x14] Komponenty kontenerowe i prezentacyjne",
		length: "08:41",
	},
	{
		id: 63,
		name: "[3x15] Przepływ danych",
		length: "10:56",
	},
	{
		id: 64,
		name: "[3x16] Cykl życia komponentu - cz. 1",
		length: "05:35",
	},
	{
		id: 65,
		name: "[3x16] Cykl życia komponentu - cz. 2",
		length: "14:20",
	},
	{
		id: 66,
		name: "[3x17] Routing",
		length: "07:36",
	},
	{
		id: 67,
		name: "[3x18] Linia komend",
		length: "10:56",
	},
	{
		id: 68,
		name: "[3x19] Menadżer pakietów - npm",
		length: "11:22",
	},
	{
		id: 69,
		name: "[3x20] npm scripts",
		length: "10:43",
	},
	{
		id: 70,
		name: "[3x21] CLI - Create React App",
		length: "11:51",
	},
	{
		id: 71,
		name: "[3x22] Deployment aplikacji",
		length: "6:01",
	},
];

function totalDuration() {
	let timeAdam = 0;
	let timePrzemek = 0;
	let timeMarcin = 0;

	const getTime = lesson => {
		let time = Number(lesson.length.slice(-2));
		const restOfTime = parseFloat(lesson.length.replace(":", "."));
		time += Math.floor(restOfTime) * 60;
		return time;
	};

	const getClockHoursCourse = time => Math.floor(time / 3600);

	const getClockMinutesCourse = time =>
		Math.floor(time / 60 - 60 * Math.floor(time / 3600));

	for (let i = 0; i < lessons.length; i++) {
		if (lessons[i].name.startsWith("[1")) {
			timeAdam += getTime(lessons[i]);
		}

		if (lessons[i].name.startsWith("[2")) {
			timePrzemek += getTime(lessons[i]);
		}

		if (lessons[i].name.startsWith("[3")) {
			timeMarcin += getTime(lessons[i]);
		}
	}

	const totalCourseTime = timeAdam + timeMarcin + timePrzemek;

	const adam = ` Moduł Adama: ${getClockHoursCourse(
		timeAdam
	)} godzin ${getClockMinutesCourse(timeAdam)} minut`;
	const przemek = ` Moduł Przemka: ${getClockHoursCourse(
		timePrzemek
	)} godzin ${getClockMinutesCourse(timePrzemek)} minut`;
	const marcin = ` Moduł Marcina: ${getClockHoursCourse(
		timeMarcin
	)} godzin ${getClockMinutesCourse(timeMarcin)} minut`;

	const fullCurseTime = `${getClockHoursCourse(
		totalCourseTime
	)} godzin ${getClockMinutesCourse(totalCourseTime)} minut`;

	const procentOfCurse = (mentorTime, fullTime) =>
		Math.round(((mentorTime * 100) / fullTime) * 100) / 100;

	const procentAdam = procentOfCurse(timeAdam, totalCourseTime);
	const procentMarcina = procentOfCurse(timeMarcin, totalCourseTime);
	const procentPrzemka = procentOfCurse(timePrzemek, totalCourseTime);

	return `kurs wynosi ${fullCurseTime}
${adam} to ${procentAdam}% procent kursu
${przemek} to ${procentPrzemka}% procent kursu
${marcin} to ${procentMarcina}% procent kursu
`;
}
// }==================================================================================================================================

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję rule() w taki sposób aby wszystkie przekazane do niej tablice zostały połączone w jedną
 *
 *
 * Przykład:
 * rule([1, 2], [5, 6]) // => [1, 2, 5 , 6];
 *
 */

/*
 * Punkty dodatkowe
 *-----------------
 * - Wykorzystaj operator rest
 * - Zapisz rozwiązanie w jednej linii
 */

function rulez(...arrays) {
	return arrays.flat();
}

// =====================================================================================================================================

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, sprawdzającą czy pudełko jest puste.
 *
 *
 */

function thing(box) {
	const boxArray = box.split("\n");
	let reg = /\s/g;
	const resultArrayLine = boxArray.map(elem => elem.replace(reg, ""));
	return resultArrayLine.some(item => item === "*o*");
}
// =====================================================================================================================================
/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
 *
 *
 * Przykład:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
 *
 */

function greeting(message) {
	const alphabet = {
		a: "4",
		e: "3",
		i: "1",
		o: "0",
		s: "5",
	};
	const mrEllitoaText = message
		.split("")
		.map((letter, i) => {
			if (alphabet[letter]) {
				return alphabet[letter];
			} else if (i % 2 === 0) {
				return letter.toUpperCase();
			} else {
				return letter;
			}
		})
		.join("");

	console.log(mrEllitoaText);
}

greeting("Control Is An Illusion");

// =================================================================================

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję wyszukującą hashtagi w zdaniu
 *
 *
 * Przykład:
 * findTags('W 2020 #opanujeJS'); // => opanujeJS
 * findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
 * findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
 *
 */

function findTags(message) {
	if (typeof message !== "string") {
		throw new Error("Podaj tekst");
	}
	const hastagArray = message.split(" ");
	const hastagText = [];
	let reg = /[#!]/g;
	hastagArray.forEach(text => {
		if (text.startsWith("#")) {
			hastagText.push(text);
		}
	});
	const result = hastagText
		.map(elem => elem)
		.join("")
		.replace(reg, "!")
		.split("!")
		.filter(item => item.length);
	console.log(result);
	return result;
}

findTags("#dominisa");

//   ==============================================================================================================

/*
 * Cel zadania
 *------------
 * Zaimplementuj własne wersje funkcji tablicowych Array.prototype.length oraz Array.prototype.filter, bez wykorzystania tych wbudowanych.
 *
 *
 * Przykład:
 * filter([1, 2, 3, 4], isEven); // => [2, 4]
 * length([1, 2, 3, 4]); // => 4
 *
 */

function filter(array, callback) {
	let arrayLength = 0;
	let result = [];
	const resultArray = array.map(callback);

	for (number of array) {
		arrayLength++;
	}
	for (let i = 0; i < arrayLength; i++) {
		if (resultArray[i] === true) {
			result.push(array[i]);
		}
	}
	console.log(result);
	return result;
}

function length(array) {
	let arrayLength = 0;
	for (index of array) {
		arrayLength++;
	}
	console.log(arrayLength);
	return arrayLength;
}
// =============================================================================================================================

/*
* Cel zadania
*------------
* Otrzymując zdanie jako parametr wejściowy, zwróć obiekt, który będzie zawierał liczbę wystąpień każdego słowa w zdaniu. Zignoruj to czy słowo jest napisane z dużej czy z małej litery.
*
* 
*
* Przykład:
* countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
* 
* 
*/

function countWords(sentence) {
	const regNumberLetter = /\w+/g;
	const result = {};
	const wordArray = sentence.toLowerCase().match(reg);
	wordArray.forEach(word => {
		if ((result[word] = result[word])) {
			result[word] += 1;
		} else {
			result[word] = 1;
		}
	});
	return result;
}
// ==================================================================================================================
/*
 * Wprowadzenie
 *------------
 * Książki są identyfikowane przez numery ISBN-10. Numery te zwykle zawierają myślniki, i przykładowo wyglądają tak: 99921-58-10-7
 *
 * Na ISBN-10 składa się 9 cyfr (od 0 do 9) oraz jeden znak kontrolny (cyfra lub X). Znak kontrolny X reprezentuje liczbę 10.
 *
 * Algorytm weryfikujący wygląda następująco:
 * (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) % 11 == 0
 *
 *
 * Przykład:
 * Weźmy ISBN: 85-359-0277-5
 * (8 * 10 + 5 * 9 + 3 * 8 + 5 * 7 + 9 * 6 + 0 * 5 + 2 * 4 + 7 * 3 + 7 * 2 + 5 * 1) % 11 == 0
 * Algorytm potwierdza poprawność tego ISBN-10
 *
 * Cel zadania
 *------------
 * W oparciu o zaprezentowany powyżej algorytm, napisz funkcję sprawdzającą przekazany w formie stringa ISBN. Funkcja powinna obsłużyć ISBN z i bez myślników.
 *
 */

function reduseArray(array) {
	return array.reduce((total, item) => {
		return (total += item);
	}, 0);
}

function checkISBN(isbn) {
	const removeDashesReg = /\w/g;
	const arrayWithoutDashes = isbn.match(removeDashesReg).join("");
	const multiArray = [];
	let multiplier = 10;
	const ISBNModullo = 11;
	for (let i = 0; i < arrayWithoutDashes.length; i++) {
		if (arrayWithoutDashes[i] === "X") {
			multiArray.push((arrayWithoutDashes[i] = 10) * multiplier);
		}
		multiArray.push(arrayWithoutDashes[i] * multiplier);
		multiplier--;
	}

	const arrayWithOnlyNumber = multiArray.filter(item => item > 0);
	const result = reduseArray(arrayWithOnlyNumber);
	if (result % ISBNModullo == 0) {
		return true;
	} else {
		return false;
	}
}

// ======================================================================================================================

/*
 * Cel zadania
 *------------
 * Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
 *
 * Przykład: '[{()}]' => true
 * Przykład: '[{]}' => false
 */

function Stack() {
	this.data = [];
}
Stack.prototype.push = function (item) {
	this.data.push(item);
};
Stack.prototype.top = function () {
	return this.data[this.data.length - 1];
};
Stack.prototype.pop = function () {
	return this.data.pop();
};
Stack.prototype.isEmpty = function () {
	return !this.data.length;
};

const brackets = {
	"[": "]",
	"{": "}",
	"(": ")",
};

function checkBrackets(stringWithBrackets) {
	const openTokens = Object.keys(brackets);
	const tokens = stringWithBrackets.split("");
	const stack = new Stack();
	for (const token of tokens) {
		if (openTokens.includes(token)) {
			stack.push(token);
		} else if (!stack.isEmpty()) {
			let last = stack.top();
			let closingToken = brackets[last];
			if (token === closingToken) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	return stack.isEmpty();
}

checkBrackets("{()}");
