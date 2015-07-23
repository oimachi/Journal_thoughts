$( document ).ready(function(){
	$('#delete-form').submit(function(event){
		event.preventDefault();
		var frm = $(this);
		_journal.deleteEntry(frm);
	});

	$('#edit-form').submit(function(event){
		event.preventDefault();
		var frm = $(this);
		$('#edit-entry-a').trigger('click');
		_journal.editEntry(frm);
	});

	// $('#update-entry-form').submit(function(event){
	// 	event.preventDefault();
	// 	var frm = $(this);
	// 	_journal.updateEntry(frm);
	// })
});

// Form Validation
var _journal = new Journal();

function Journal(){

	this.entries = [];

	this.addEntry = function(entry){
		this.entries.push(entry);
		this.drawTOC();
	}

	this.drawTOC = function(){
		var index = this.entries.length -1;
		$('#table-of-contents').html('');
		//for(var index = 0; index<this.entries.length;index++)
		for(index in this.entries){
			var html = '<li data-index="'+index+'">'+this.entries[index].title+'</li>';
			$('#table-of-contents').append(html);
		}
		$('#table-of-contents li').unbind('click');
		$('#table-of-contents li').click(function(){
			var object = $(this);
			_journal.displayEntry(object.data('index'))
		});
	}

	this.displayEntry = function(index){
		$('#entry').show();
		var entry = this.entries[index];
		$('#post-title').html(entry.title);
		$('#post-author').html(entry.author);
		$('#post-content').html(entry.content);
		$('.entry-index').val(index);
	}

	this.deleteEntry = function(frm){
		var index = frm.find('input[name="index"]').val();
		this.entries.splice(index,1);
		$('#table-of-contents li[data-index="'+index+'"]').remove();
		$('#entry').hide();
		this.drawTOC();
	}

	this.editEntry = function(frm){
		var index = frm.find('input[name="index"]').val();
		var frm = $('#update-entry-form');
		frm.find('input[name="title"]').val(this.entries[index].title);
		frm.find('input[name="index"]').val(index);
	}
	this.updateEntry = function(frm){
		var index = frm.find('input[name="index"]').val();
		var title = frm.find('input[name="title"]').val();

		this.entries[index].title = title;
		this.drawTOC();
	}
}


function entryFromForm() { 
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var content = document.getElementById("content").value;
	var tags = document.getElementById("tags").value;

	console.log (title +', '+ author +', ' + content +', ' + tags); 
	addEntry(title, author, content, tags);

	//clear values
	document.getElementById("title").value = '';
}


function updateFromForm(formname){
	var frm = $('form[name="'+formname+'"]');
	event.preventDefault();
	_journal.updateEntry(frm);
}


function Entry(title, author, content, tags) {
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;
}

function addEntry (title, author, content, tags) {
	var entry = new Entry(title, author, content, tags);
	_journal.addEntry(entry);
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