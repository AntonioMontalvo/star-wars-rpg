
var characters = {
			'LUKE':{
				name: 'Luke Skywalker',
				health: 100,
        attackPower: 8,
        baseAttackPower: 8,
        counterAttackPower: 15,
        idHealth: $('#lukesH'),
			},
      'YODA':{
				name: 'Master Yoda',
        health: 150,
        attackPower: 20,
        baseAttackPower: 20,
        counterAttackPower: 12,
        idHealth: $('#yodasH'),
			},
      'VADER':{
				name: 'Darth Vader',
        health: 180,
        attackPower: 25,
        baseAttackPower: 25,
        counterAttackPower: 25 ,
        idHealth: $('#vadersH'),
			},
      'OBI':{
				name: 'Obi-Wan Kenobi',
        health: 120,
        attackPower: 20,
        baseAttackPower: 20,
        counterAttackPower: 18,
        idHealth: $('#obisH'),
			},
		}


    $('document').ready(function(){ //the DOM is now loaded and can be manipulated
      $('#restart').hide();
//////////////////////////////////
//       SELECT PLAYERS         //
//////////////////////////////////
      $('#LUKE').on('click', function(){

        if($('#userChoice').children().length == 0){ //if Your Character area is empty
            $(this).appendTo('#userChoice');//move selected character to Your Character area
          $('#OBI, #VADER, #YODA').appendTo('#attackersLeft');//move all others to Enemies available to Attack area
          $('#OBI, #VADER, #YODA').css('background-color', 'red');
        }

        else if($('#userChoice').children().is($(this)) == false){//if LUKE is not inthis to defender Your Character area
          if($('#attackersLeft').children().length == 3 && $('#defender').children().length == 0){$(this).appendTo('#defender');}//if enemies available area has three and defender is empty move
        }

      });

      $('#OBI').on('click', function(){
        if($('#userChoice').children().length == 0){
          $(this).appendTo('#userChoice');
          $('#LUKE, #VADER, #YODA').appendTo('#attackersLeft');
          $('#LUKE, #VADER, #YODA').css('background-color', 'red')
        }

        else if($('#userChoice').children().is($(this)) == false){
          if($('#attackersLeft').children().length == 3 && $('#defender').children().length == 0){$(this).appendTo('#defender');}
        }

      });

      $('#VADER').on('click', function(){
        if($('#userChoice').children().length == 0){
          $(this).appendTo('#userChoice');
          $('#LUKE, #YODA, #OBI').appendTo('#attackersLeft');
          $('#LUKE, #YODA, #OBI').css('background-color', 'red')
        }

        else if($('#userChoice').children().is($(this)) == false){
          if($('#attackersLeft').children().length == 3 && $('#defender').children().length == 0){$(this).appendTo('#defender');}
        }

      });

      $('#YODA').on('click', function(){
        if($('#userChoice').children().length == 0){
          $(this).appendTo('#userChoice');
          $('#LUKE, #VADER, #OBI').appendTo('#attackersLeft');
          $('#LUKE, #VADER, #OBI').css('background-color', 'red')
        }
        else if($('#userChoice').children().is($(this)) == false){
          if($('#attackersLeft').children().length == 3 && $('#defender').children().length == 0){$(this).appendTo('#defender');}
        }

      });

  });
//////////////////////////////////
//       ATTACK BUTTON          //
//////////////////////////////////


$('#button').on('click', function(){

  playersId = $('#userChoice').children().attr('id');
  defendersId = $('#defender').children().attr('id');


characters[playersId].health = characters[playersId].health - characters[defendersId].counterAttackPower;                 console.log(characters[playersId].health);//user health

characters[playersId].attackPower = characters[playersId].attackPower + characters[playersId].baseAttackPower;
console.log(characters[playersId].attackPower);


characters[defendersId].health = characters[defendersId].health - characters[playersId].attackPower;
console.log(characters[defendersId].health);


characters[playersId].idHealth.text('Health: ' + characters[playersId].health);
characters[defendersId].idHealth.text('Health: ' + characters[defendersId].health);

if(characters[playersId].health <= 0){
  $('#restart').show();
  $('#button').prop('disabled', true);
}

});

$('#restart').on('click', function(){
  location.reload();
});







// Each time the player attacks, their character's Attack Power increases by its base Attack Power. So if the base Attack Power is 6, each attack will increase the Attack Power by 6. (12, 18, 24, 30 etc...)

////////PLAYER values////////////
// playersHealth = parseInt($('#userChoice').children().attr('data-healthPoints'));//original value
// playersBaseAttackPower = parseInt($('#userChoice').children().attr('data-baseAttackPower'));
// playersCounterAttackPower = parseInt($('#userChoice').children().attr('data-counterAttackPower'));

///////DEFENDER values//////////
// defendersHealth = parseInt($('#defender').children().attr('data-healthPoints'));//original value
// defendersBaseAttackPower = parseInt($('#defender').children().attr('data-baseAttackPower'));
// defendersCounterAttackPower = parseInt($('#defender').children().attr('data-counterAttackPower'));
