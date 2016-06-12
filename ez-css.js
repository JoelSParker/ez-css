window.onload = function() {
    var matches = [];
    var elems = document.getElementsByTagName("*");

    for (var e = 0; e < elems.length; e++) {
        if (elems[e].className.indexOf("ez-") == 0)
            matches.push(elems[e]);
    }

    var classes = [];
    for(var c = 0; c < matches.length; c++) {
        classes.push(matches[c].className.split(' '));
    }

    for (var j = 0; j < classes.length; j++) {
        var pos;

        for (var k = 0; k < classes[j].length; k++) {
            pos = classes[j][k].indexOf('ez-');

            var command;
            if (pos > -1) {
                command = classes[j][k].substr(pos + 3);
                command = command.split('-');

                // console.log(command.indexOf('_') > -1);

                if (command[0].indexOf('_') > -1) {
                    command[0] = command[0].split('_');
                    command[0] = command[0][0] + ucfirst(command[0][1]);
                }

                console.log(command.length);

                switch (command.length) {
                    case 2:
                        if (command[1].indexOf(':') > -1) {
                            var options = command[1].split(':');

                            command[1] = '';
                            for(var o = 0; o < options.length; o++) {
                                command[1] = command[1] + ' ' + options[o];
                            }
                        }

                        matches[j].style[command[0]] = command[1];
                        break;
                    case 3:
                        command[0] = command[0] + ucfirst(command[1]);
                        matches[j].style[command[0]] = command[2];
                        break;
                    case 4:
                        command[1] = command[0] + ucfirst(command[1]);
                        command[2] = command[0] + ucfirst(command[2]);
                        matches[j].style[command[1]] = command[3];
                        matches[j].style[command[2]] = command[3];
                        break;
                    case 5:
                        command[1] = command[0] + ucfirst(command[1]);
                        command[2] = command[0] + ucfirst(command[2]);
                        command[3] = command[0] + ucfirst(command[3]);
                        matches[j].style[command[1]] = command[4];
                        matches[j].style[command[2]] = command[4];
                        matches[j].style[command[3]] = command[4];
                        break;
                    case 6:
                        command[1] = command[0] + ucfirst(command[1]);
                        command[2] = command[0] + ucfirst(command[2]);
                        command[3] = command[0] + ucfirst(command[3]);
                        command[4] = command[0] + ucfirst(command[4]);
                        matches[j].style[command[1]] = command[5];
                        matches[j].style[command[2]] = command[5];
                        matches[j].style[command[3]] = command[5];
                        matches[j].style[command[4]] = command[5];
                        break;
                }
            }
        }
    }
};

function ucfirst(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);

}