
CKEDITOR.plugins.add('iaVideo', {
    editor: undefined,
    init: function (editor) {
        this.editor = editor;
        editor.ui.addButton('iaVideo',
            {
                label: require('dynamicCaptions').question.ckeditor.addVideo,
                command: 'addIAVideo',
                icon: CKEDITOR.plugins.getPath('iaVideo') +  'video_icon.png',
                toolbar: "links,1"
            });
        editor.addCommand('addIAVideo', { exec: this.addIAVideo });
    },
    addIAVideo: function () {
        App.vent.trigger(App.EventNames.QUESTION_ADD_VIDEO);
    }
});
