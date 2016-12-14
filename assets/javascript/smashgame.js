var attackerHP;
var defenderHP;
var attack;
var attackTotal;
var counterAttack;


function chooseCharacter() {
	$('.character').off('click',chooseCharacter);
	var mkdef = $('.character').not(this).removeClass('character').addClass('enemy');
	console.log(mkdef);

	$(this).removeClass('character');
	$('.choose_opponent').append(mkdef);
	$('.attacker').prepend($(this));
	attackerHP = parseInt(this.dataset.hp);
	attack = parseInt(this.dataset.attack);
	attackTotal = attack;
	console.log(attackerHP);

};

function chooseOpponent() {
	$('.defender').append($(this));
	defenderHP = parseInt(this.dataset.hp);
	counterAttack = parseInt(this.dataset.attack);
	$('button').show();

	console.log(defenderHP);
};

function attackOpponent() {
	if(attackerHP >= 0 && defenderHP >= 0) {
		defenderHP = defenderHP - attackTotal;
		if(defenderHP > 0) {
			attackerHP = attackerHP - counterAttack;
			if(attackerHP <= 0) {
				$('.attack_text').html("You Suck, Refresh To Play Again");
			} else {
				$('.attack_text').html("You attacked the enemey with " + attackTotal + " damage and sustained " + counterAttack + " damage")
				attackTotal = attackTotal + attack;
			}
		} else {
			$('.defender').empty();
		}
		console.log("attackHP =",attackerHP);
  	console.log("defenderHP =",defenderHP);
  	console.log(attackTotal)
	}
} 

  

$('.character').one('click',chooseCharacter);
$('.choose_opponent').on('click', '.enemy',chooseOpponent);

$('.btn').on('click',attackOpponent);
  
