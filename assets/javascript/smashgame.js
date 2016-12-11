function chooseCharacter() {
	var mkdef = $('.character').not(this).removeClass('character').addClass('enemy');
	$('.character').removeClass('character').data("player", "one");
	$('.choose_opponent').append(mkdef);
	$('.attacker').append($(this));

};

function chooseOpponent() {
	// $('.defender').append($(this));
	// $(this).appendTo('.defender');
};

$('.character').click(chooseCharacter);
$('.enemy').click(chooseOpponent);