window.onload = function() {
    if (!window.jQuery) {
        // jQuery is not loaded
        alert("jQuery required for EZ-CSS");
    }
};

jQuery(function() {
    jQuery("[class*='ez-']").each(function() {
        var element = jQuery(this);
        var classNames = element.attr("class").toString().split(' ');

        $.each(classNames, function (i, className) {
            var pos = className.indexOf('ez-');
            if (pos > -1) {
                var command = className.substr(pos + 3);
                command = command.split('-');

                for (i = 0; i < command.length; i++)
                    command[i] = command[i].replace('_', '-');

                switch (command.length) {
                    case 2:
                        if (command[1].indexOf(':') > -1) {
                            var options = command[1].split(':');

                            command[1] = '';
                            for(var o = 0; o < options.length; o++) {
                                command[1] = command[1] + ' ' + options[o];
                            }
                        }

                        jQuery(element).css(command[0], command[1]);
                        break;
                    case 3:
                        jQuery(element).css(command[0] + '-' + command[1], command[2]);
                        break;
                    case 4:
                        jQuery(element).css(command[0] + '-' + command[1], command[3]);
                        jQuery(element).css(command[0] + '-' + command[2], command[3]);
                        break;
                    case 5:
                        jQuery(element).css(command[0] + '-' + command[1], command[4]);
                        jQuery(element).css(command[0] + '-' + command[2], command[4]);
                        jQuery(element).css(command[0] + '-' + command[3], command[4]);
                        break;
                }
            }
        });
    });
});