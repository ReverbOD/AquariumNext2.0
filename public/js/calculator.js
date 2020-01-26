//litrages calculator

$('#calcLt').on('submit', function(e) {
    e.preventDefault();
    $('#resultLt').addClass('d-none');

    var num1 = parseInt($('#lenght').val());
    var num2 = parseInt($('#high').val());
    var num3 = parseInt($('#deep').val());
    var num4 = 1000;

    var result = 'La tua vasca avrà un litraggio di ' + (num1 * num2 * num3 / num4) + " lt";

    $('#resultLt').html(result);
    $('#resultLt').removeClass('d-none');
});

$('#calcLt').on('reset', function() {
    $('#resultLt').addClass('d-none');
});
// END litrages calc

// biological calculator
$('#calcFiltraggio').on('submit', function(e) {
    e.preventDefault();
    $('#resultFiltraggio').addClass('d-none');

    var num1 = parseInt($('#litraggio').val());
    var num2 = 10;

    var result = 'Per un filtraggio biologico ottimale avrai bisogno di gr ' + (num1 * num2) + " di materiale filtrante";

    $('#resultFiltraggio').html(result);
    $('#resultFiltraggio').removeClass('d-none');
});

$('#calcFiltraggio').on('reset', function() {
    $('#resultFiltraggio').addClass('d-none');
});
// END biological Calc

// pump calculator
$('#calcPompa').on('submit', function(e) {
    e.preventDefault();
    $('#resultPompa').addClass('d-none');

    var num1 = parseInt($('#litraggio').val());
    var num2 = 4;

    var result = 'Per una circolazione ottimale avrai bisogno di una pompa con ' + (num1 * num2) + " lt/h";

    $('#resultPompa').html(result);
    $('#resultPompa').removeClass('d-none');
});

$('#calcPompa').on('reset', function() {
    $('#resultPompa').addClass('d-none');
});
// END pump calc

// lumen calculator
$('#calcLumen').on('submit', function(e) {
    e.preventDefault();
    $('#resultLumen').addClass('d-none');

    var num1 = parseInt($('#litraggio').val());
    var num2 = parseInt($('#lumen').val());

    var result = 'Il rapporto Lumen/Litri è di ' + (num2 / num1);

    $('#resultLumen').html(result);
    $('#resultLumen').removeClass('d-none');
});

$('#calcLumen').on('reset', function() {
    $('#resultLumen').addClass('d-none');
});

//if (sumLum < 40) {
//    minimum = "hai un valore basso";
//} else if (sumLum > 40 && < 60) {
//    medium = "Hai un buon valore";
//} else(sumLum > 60) {
//    high = "hai un valore alto";
//};
// END lumen calc

// ground calculator
$('#calcFondo').on('submit', function(e) {
    e.preventDefault();
    $('#resultFondo').addClass('d-none');

    var num1 = parseInt($('#lenght').val());
    var num2 = parseInt($('#high').val());
    var num3 = parseInt($('#deep').val());
    var num4 = 1000;

    var result = "Per l'altezza del fondo desiderata avrai bisogno di kg " + (num1 * num2 * num3 / num4);

    $('#resultFondo').html(result);
    $('#resultFondo').removeClass('d-none');
});

$('#calcFondo').on('reset', function() {
    $('#resultFondo').addClass('d-none');
});
// END ground calc

// water change calculator
$('#calcChange').on('submit', function(e) {
    e.preventDefault();
    $('#resultChange').addClass('d-none');

    var change = parseInt($('#change').val());
    var kh = parseInt($('#kh').val());
    var gh = parseInt($('#gh').val());
    var khDesire = parseInt($('#khDesire').val());

    var result = ' L acqua sarà composta al ' + ((change / khDesire) * kh) + ' % di osmosi su ' + change + ' lt, e avrai un gH di ' + ((gh / change) * ((change / khDesire) * kh))

    $('#resultChange').html(result);
    $('#resultChange').removeClass('d-none');
});

$('#calcChange').on('reset', function() {
    $('#resultChange').addClass('d-none');
});
// END water change Calc

// termos calculator
$('#calcTermos').on('submit', function(e) {
    e.preventDefault();
    $('#resultTermos').addClass('d-none');

    var num1 = parseInt($('#litraggio').val());
    var num2 = 2;

    var result = 'Avrai bisogno di un riscaldatore con un wattaggio di ' + (num1 * num2) + 'o superiore';

    $('#resultTermos').html(result);
    $('#resultTermos').removeClass('d-none');
});

$('#calcTermos').on('reset', function() {
    $('#resultTermos').addClass('d-none');
});
// END termos calc