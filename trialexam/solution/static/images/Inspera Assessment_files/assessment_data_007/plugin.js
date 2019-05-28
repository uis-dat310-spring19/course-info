
CKEDITOR.plugins.add('iaAudio', {
    editor: undefined,
    init: function (editor) {
        var self = this;
        this.editor = editor;

        editor.ui.addButton('iaAudio',
            {
                label: require('dynamicCaptions').question.ckeditor.addAudio,
                command: 'addIAAudio',
                icon: CKEDITOR.plugins.getPath('iaAudio') +  'audio_icon.png',
                toolbar: "links,1"
            });
        editor.addCommand('addIAAudio', { exec: this.addIAAudio });
    },
    addIAAudio: function (editor) {
        App.vent.trigger(App.EventNames.QUESTION_ADD_AUDIO);
    }
});