app.factory('Chart', function() {
    return function(options){
        var options = options || {};

        var width = options.width || 0,
            height = options.height || 0,
            id = options.id || "chart";

        return Raphael(id, width, height)
    };

});