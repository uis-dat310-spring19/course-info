
CKEDITOR.plugins.add( 'fixExtendSelectionError', {
    init: function(editor) {
        var makeSafe = function(fn){
            return function(){
                var result;

                try{
                    result = fn.apply(this, arguments);
                }catch(ex){
                    if(ex.name == "IndexSizeError" && (ex.message.indexOf("'extend'") > -1) && (ex.message.indexOf("'Selection'") > -1)){
                        // see https://inspera.atlassian.net/browse/TESTC-5505
                        // => swallow error until feature fix is available from CKEDITOR (milestone 4.5.7)
                    }
                    else {
                        throw ex;
                    }
                }
                return result;
            };
        };

        var a,b;
        a = CKEDITOR.editor.prototype.fire.toString();
        b = makeSafe(function(){}).toString();

        if(a != b) {
            CKEDITOR.editor.prototype.fire = makeSafe(CKEDITOR.editor.prototype.fire);
        }

        a = b = undefined;
    }
});