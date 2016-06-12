window.onload = function() {
    var matches = [];
    var elems = document.getElementsByTagName("*");

    for (var i=0; i<elems.length; i++) {
        if (elems[i].className.indexOf("ez-") == 0)
            matches.push(elems[i]);
    }

    var classes = [];
    for(i = 0; i < matches.length; i++) {
        classes.push(matches[i].className.split(' '));

        for (j = 0; j < classes.length; j++) {
            var pos;
            for (k = 0; k < classes[j].length; k++) {
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

                    switch (command.length) {
                        case 2:
                            matches[i].style[command[0]] = command[1];
                            break;
                        case 3:
                            command[0] = command[0] + ucfirst(command[1]);
                            matches[i].style[command[0]] = command[2];
                            break;
                        case 4:
                            command[1] = command[0] + ucfirst(command[1]);
                            command[2] = command[0] + ucfirst(command[2]);
                            matches[i].style[command[1]] = command[3];
                            matches[i].style[command[2]] = command[3];
                            break;
                    }
                }
            }
        }
    }
};

function ucfirst(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);

}