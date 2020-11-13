$(function() {
    // Déclaration des variables/classes pour pouvoir y accéder dans toutes les fonctions
    var player1 = null;
    var player2 = null;
    var chrono = null;
    var game = null;
    var tray = null;
    var trayFactory = null;
    var tabCell = null;

    $('button.start').click(function () {
        // Récupère les 2 Names
        if ($('input:text.p1').attr('disabled') && $('input:text.p2').attr('disabled')) {
            return null;
        }

        $('input:text.p1').attr('disabled', true);
        $('input:text.p2').attr('disabled', true);

        let p1Name = $('input:text.p1').val();
        let p2Name = $('input:text.p2').val();


        // Enlève le button start et on affiche le loader
        $(this).css('display', 'none');
        $('div.loader').css('display', 'block');

        player1 = new Player(p1Name);
        player2 = new Player(p2Name);
        chrono = new Chrono(15, 2, player1);
        game = new Game(player1, 'horizontal', chrono, player1, player2);
        $('h5.currentPlayerName').text(game.getCurrentPlayer().getName());
        $('p.currentPlayerScore').text("Score : " + game.getCurrentPlayer().getScore());
        tray = new Tray(4);
        trayFactory = new TrayFactory();
        tabCell = trayFactory.createTray(tray);

        console.log(tabCell);

        // setTimeout pour avoir un effet de chargement
        setTimeout(function() {
            // Génère le rendu du tableau
            for (let i = 0; i < tray.getSize() * tray.getSize(); i) {
                const ligne = document.createElement('tr');
                for (let j = 0; j < tray.getSize(); j++) {
                    const colonne = document.createElement('td');
                    colonne.innerHTML = '<button value="' + i + '" class="btn btn-info cell" style="width: 100%;">' + tabCell[i][0].getValue() + '</button>';
                    ligne.appendChild(colonne);
                    i++;
                }
                document.getElementById('tray').appendChild(ligne);
                $('div.gameContainer').css('display', 'flex');
            }

            // Enlève le loader et remet le button start
            $('button.start').css('display', 'block');
            $('div.loader').css('display', 'none');
        }, 500);
    });

    $('table.table').on('click', 'button.cell', function () {
        $('div.error').text('');
        if (game.checkValidMove(tabCell, $(this).val())) {
            game.changeTour();
            $('h5.currentPlayerName').text(game.getCurrentPlayer().getName());
            $('p.currentPlayerScore').text("Score : " + game.getCurrentPlayer().getScore());
            $(this).css('color', 'red');
            $(this).css('background-color', 'grey');
        } else {
            $('div.error').text('You can\'t do this move !');
        }
    });
});