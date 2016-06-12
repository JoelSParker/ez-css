window.onload = function() {
    var elements = [];
    var elems = document.getElementsByTagName("*");

    for (var e = 0; e < elems.length; e++) {
        if (elems[e].className.indexOf("ez-") == 0)
            elements.push(elems[e]);
    }

    var classList = [];
    for(var c = 0; c < elements.length; c++) {
        classList.push(elements[c].className.split(' '));
    }

    for (var j = 0; j < classList.length; j++) {
        var pos;

        for (var k = 0; k < classList[j].length; k++) {
            pos = classList[j][k].indexOf('ez-');

            var ezClass;
            if (pos > -1) {
                ezClass = classList[j][k].substr(pos + 3);
                var command = ezClass.split('-');
                var key = command[0];
                var val = command[1];

                if (key.indexOf('_') > -1) {
                    key = key.split('_');
                    key = key[0] + ucfirst(key[1]);
                }

                if (val.indexOf('_') > -1) {
                    val = val.split('_');
                    val = val[0] + '-' + val[1];
                }

                switch (command.length) {
                    case 2:
                        if (val.indexOf('|') > -1) {
                            var options = val.split('|');

                            val = '';
                            for(var o = 0; o < options.length; o++) {
                                val = val + ' ' + options[o];
                            }
                        }

                        elements[j].style[key] = val;
                        break;
                    case 3:
                        key = key + ucfirst(val);
                        elements[j].style[key] = command[2];
                        break;
                    case 4:
                        val = key + ucfirst(val);
                        command[2] = key + ucfirst(command[2]);
                        elements[j].style[val] = command[3];
                        elements[j].style[command[2]] = command[3];
                        break;
                    case 5:
                        val = key + ucfirst(val);
                        command[2] = key + ucfirst(command[2]);
                        command[3] = key + ucfirst(command[3]);
                        elements[j].style[val] = command[4];
                        elements[j].style[command[2]] = command[4];
                        elements[j].style[command[3]] = command[4];
                        break;
                    case 6:
                        val = key + ucfirst(val);
                        command[2] = key + ucfirst(command[2]);
                        command[3] = key + ucfirst(command[3]);
                        command[4] = key + ucfirst(command[4]);
                        elements[j].style[val] = command[5];
                        elements[j].style[command[2]] = command[5];
                        elements[j].style[command[3]] = command[5];
                        elements[j].style[command[4]] = command[5];
                        break;
                }
            }
        }
    }
};

function ucfirst(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);

}