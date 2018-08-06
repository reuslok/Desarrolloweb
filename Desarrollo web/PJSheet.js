function Name() {
    var x = document.getElementById("fnombre");
    x.value = x.value.toUpperCase();
document.getElementById('Name').innerHTML = x.value;
}

function Level() {
    var x = document.getElementById("fnivel");
    x.value = x.value.toUpperCase();
document.getElementById('Level').innerHTML = x.value + raza.value + clase.value;
}
 var raza;
 var clase;
function Raza(){
 var  raza = this.value;
    
}
function Clase(){
  var clase = this.value;
    
}

$('.tabs .tab').click(function(){
    if ($(this).hasClass('main')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.main-cont').show();
    } 
    if ($(this).hasClass('actions')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.actions-cont').show();
    }
	 if ($(this).hasClass('feats')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.feats-cont').show();
    }
	 if ($(this).hasClass('bg')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.bg-cont').show();
    }
	if ($(this).hasClass('equip')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.equip-cont').show();
    }
});

var actions = new Vue({
  el: '#actions',
  data: {
    items: [
      { title:'Thing 1', desc: 'Foo' },
      { title:'Thing 2', desc: 'Bar' }
    ]
  }
})

var bactions = new Vue({
  el: '#bonus-actions',
  data: {
    items: [
      { title:'Thing 1', desc: 'Foo' },
      { title:'Thing 2', desc: 'Bar' }
    ]
  }
})

var options = new Vue({
  el: '#options',
  data: {
    items: [
      { title:'Thing 1', desc: 'Foo' },
      { title:'Thing 2', desc: 'Bar' }
    ]
  }
})