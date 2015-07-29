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

});

// Create Journal
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
		for(index in this.entries){
			var html = '<span class="toc"><li data-index="'+index+'">'+this.entries[index].title+'</li></span>';
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
		$('#post-date').html(entry.date);
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
		var content = entry.content
		$('#textareaid').html(this.entries[index].content);
		frm.find('input[name="title"]').val(this.entries[index].title);
		frm.find('input[name="author"]').val(this.entries[index].author);
		// frm.find('input[name="content"]').val(this.entries[index].content);
		frm.find('input[name="tags"]').val(this.entries[index].tags);
		frm.find('input[name="index"]').val(index);
	}
	this.updateEntry = function(frm){
		var index = frm.find('input[name="index"]').val();
		var title = frm.find('input[name="title"]').val();
		var author = frm.find('input[name="author"]').val();
		var content = frm.find('input[name="content"]').val();
		var tags = frm.find('input[name="tags"]').val();

		this.entries[index].title = title;
		this.entries[index].author = author;
		this.entries[index].content = content;
		this.entries[index].tags = tags;
		this.drawTOC();
		this.displayEntry();
	}
}


function entryFromForm() { 
	var title = document.getElementById("title").value;
	var author = document.getElementById("author").value;
	var content = document.getElementById("content").value;
	var tags = document.getElementById("tags").value;
	
	var date = (function SetDate(){
	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	var today = year + "-" + month + "-" + day;
	document.getElementById('date').value = today;
	console.log (date);
	return today;
    })();

	console.log (title +', '+ author +', ' + content +', ' + tags +', ' + date); 
	addEntry(title, author, content, tags, date);

	//clear values
	document.getElementById("title").value = '';
}


function updateFromForm(formname){
	var frm = $('form[name="'+formname+'"]');
	event.preventDefault();
	_journal.updateEntry(frm);
}


function Entry(title, author, content, tags, date) {
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;
	this.date = date;
}

function addEntry (title, author, content, tags, date) {
	var entry = new Entry(title, author, content, tags, date);
	_journal.addEntry(entry);
	console.log(entry)
}


//Populating entries
addEntry("Too Young", "Laura Waters", "Finn? Finn? Finn! Where are you? I need you to try this! Ill be there in a sec! Whats the status? Good, man! Nice! Seal the deal, bro! Okay, man! Whatevs! You can do it, you hear me?! Im playin BMO--call me later, bye! Hows Finns date? I think its goin good. Unlike your game, boiiiii!<p>Wait, wait! You cant give orders like that! Im in charge here, Lemongrab! TOO YOUNG! TOO YOUNG TO RULE THE KINGDOM! Watch your manners with the princess..! HHHHUUUUOOOOOOOOOOOH?! What the huh? MMMM! HAH! I am next in line to thee throne! Sooo... I will be in charge... UNTIL PRINCESS BUBBLEGUM turns... 18 again!", ["july ", " august"], "2015-07-27");
addEntry("Beautopia", "Jane Tyler", "Hey, what kind of coffee do you want? Hazelnut! Hazelnut! What if your name was Zelnut? And then I would be all like Hey, Zelnut. Thats terrible. Hey, Zelnut. Stop! <p>You hear that? Yeah.Finn and Susan Strong! Finn, help Susan. Of course I will. Excuse us for a moment, Strong. Dude, you know youre my bro, but that girl is bad news.", ["septmeber ", " teachers"], "2015-06-04");
addEntry("Marceline's Closet", "Colin McGrath", "Do you think it's right for Marceline to invite us to jam without Princess and BMO? It's just a jam sesh. Is that what you're gonna jam with? Yeah, man. Balloon music is the future. Listen. Pretty good. I don't think you mastered it yet. Well, duh. I just started.<p>Eliminating desire from my heart. It helps pass the time. Come on! I can't do that! Let's play Cloud Hunt 'til she gets here. No, man, I got a mental block with Cloud Hunt! Yeah, that's what makes it awesome, 'cause I know I'll win. Oh, what?! Bring it on, brother! Now explain the rules 'cause I forget. Okay. I count to ten and you go hide somewhere. Then, I gotta try to find you. You can hide... anywhere in here. Anywhere in here, ...but Marcy's house is off limits because she said so. Okay? Got it. Okay. I'm gonna start counting. Ready? Yes. Go!", ["december ", " santa"], "2015-04-21");

