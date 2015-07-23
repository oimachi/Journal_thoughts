$( document ).ready()

// Form Validation

function entryFromForm() { 
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var content = document.getElementById("content").value;
	var tags = document.getElementById("tags").value;

	console.log (title +', '+ author +', ' + content +', ' + tags); 
	addEntry (title, author, content, tags) ;
}


function Entry(title, author, content, tags) {
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;
}

function addEntry (title, author, content, tags) {
	var entry = new Entry(title, author, content, tags);
	entries.push(entry);
	console.log(entry)
}

//Define Entry Array
 var entries = [];

 //Testing Array Contents
for(var i = 0; i < entries.length; i++){
    console.log(i + " = " + entries[i]);
}



/*function Journal()
{
	this.entries = [];

	// adds an Entry with the given info
	this.addEntry = function addIt(title, content, author, tags) {
		// create the Entry object
		var entry = new Entry(title, content, author, tags);
		// add it to the array
		this.entries.push(entry);
	}

	// Displays an Entry object
	this.displayEntry = function showEntry(entry) {
		console.log("------------------------------");
		console.log("\t" + entry.title + "\n");
		console.log("\t" + "By: " + entry.author);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		console.log(entry.content);	

		// log the tags
		for (var i = 0; i < entry.tags.length; i++) {
			console.log("#" + entry.tags[i] + " ");		
		}
		console.log("------------------------------");
	}

	// Displays an array of Entry objects
	this.displayEntries = function showEntries(entryArray) {
		for (var i = 0; i < entryArray.length; i++) {	
			this.displayEntry(entryArray[i]); // display the entry
			console.log(); // adds a new line
		}
	}

	// Displays all entries in the Journal
	this.displayAllEntries = function showAllEntries() {
		this.displayEntries(this.entries);
	}

	// Finds all Entry objects with the given tag, and returns them in an array
	this.findAllEntriesWithTag = function searchForTag(tag)	{

		var foundEntries = [];

		// look at each entry
		for (var i = 0; i < this.entries.length; i++) {
			var currentEntry = this.entries[i];

			// add it to the array if it has the tag	
			if (currentEntry.hasTag(tag)) {
				foundEntries.push(currentEntry);
			}
		}
		// return all the entries with the tag
		return foundEntries;
	}
}

function Entry(title, content, author, tags) {
	this.title = title;
	this.content = content;
	this.author = author;

	this.tags = tags;

	// returns whether or not the Entry has a given tag
	this.hasTag = function (tag) {
		for (var i = 0; i < this.tags.length; i++) {
			if (this.tags[i] === tag) {
				return true;
			}
		}
		return false;
	}
}*/

//TESTING CODE
addEntry("Surprise", "Laura", "Summertime is the best time", ["july", "august"]);
addEntry("School", "Amelia", "Maybe the strike will go on", ["septmeber", "teachers"]);
addEntry("Chrsitmas", "Adrian", "Guelph of Toronto", ["december", "santa"]);

// var myJournal = new Journal();
// myJournal.addEntry("First Entry", "Everything is great!", "Ben", ["Friday", "Boring"]);
// myJournal.addEntry("Second Entry", "What happened? Everything is terrible", "Ben", ["Monday", "Boring"]);

// var foundEntries = myJournal.findAllEntriesWithTag("Monday");
// myJournal.displayEntries(foundEntries);