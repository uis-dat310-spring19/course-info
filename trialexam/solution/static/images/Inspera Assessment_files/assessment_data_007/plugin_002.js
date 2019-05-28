
CKEDITOR.plugins.add('attachmentPDF', {
    editor: undefined,
    init: function (editor) {
        var self = this;
        this.editor = editor;

        // subscribe to global event regarding pdf attachement state (attached/removed)
        App.vent.on(App.EventNames.QUESTION_PDF_UPDATE, function(evt) {
            self.onPDFStateUpdate(evt);
        });

        editor.ui.addButton('attachmentPDF',
            {
                label: require('dynamicCaptions').question.ckeditor.addPDF,
                command: 'addPDF',
                icon: CKEDITOR.plugins.getPath('attachmentPDF') +  'icons/attachmentPDF.png',
                toolbar: "links,1"
            });
        editor.addCommand('addPDF', { exec: this.addPDF });
    },

    onPDFStateUpdate: function(evt){
        var command = this.editor.getCommand('addPDF');
        if(evt.type == "added") {
            command.setState(CKEDITOR.TRISTATE_DISABLED);
        }
        else if(evt.type == "removed"){
            command.setState(CKEDITOR.TRISTATE_OFF);
        }
    },

    addPDF: function (editor) {
        App.vent.trigger(App.EventNames.QUESTION_ADD_PDF);
    }
});