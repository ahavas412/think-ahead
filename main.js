$(function() {
    $('button.start').click(function() {
        // Récupère les 2 Names
        if ($('input:text.p1').attr('disabled')) {
            return null;
        }

        $('input:text.p1').attr('disabled', true);
        $('input:text.p2').attr('disabled', true);

        let p1Name = $('input:text.p1').val();
        let p2Name = $('input:text.p2').val();

        // Enlève le button start et on affiche le loader
        $(this).css('display', 'none');
        $('div.loader').css('display', 'block');

        var player1 = new Player(p1Name);
        var player2 = new Player(p2Name);
        var tray = new Tray(4);
        var trayFactory = new TrayFactory();
        var tabCell = trayFactory.createTray(tray);

        console.log(tabCell);

        // setTimeout pour avoir un effet de chargement
        setTimeout(function() {
            // Génère le rendu du tableau
            for (let i = 0; i < tray.getSize() * tray.getSize(); i) {
                const ligne = document.createElement('tr');
                for (let j = 0; j < tray.getSize(); j++) {
                    const colonne = document.createElement('td');
                    colonne.innerHTML = '<button value="' + i + '" class="btn btn-info" style="width: 100%;">' + tabCell[i][0].getValue() + '</button>';
                    ligne.appendChild(colonne);
                    i++;
                }
                document.getElementById('tray').appendChild(ligne);
            }

            // Enlève le loader et remet le button start
            $('button.start').css('display', 'block');
            $('div.loader').css('display', 'none');
        }, 500);
    });
})