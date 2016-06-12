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
                        jQuery(element).css(command[0], command[1]);
                        break;
                    case 3:
                        jQuery(element).css(command[0] + '-' + command[1], command[2]);
                        break;
                    case 4:
                        jQuery(element).css(command[0] + '-' + command[1], command[3]);
                        jQuery(element).css(command[0] + '-' + command[2], command[3]);
                        break;
                }
            }
        });
    });
});