CKEDITOR.plugins.add('imageInsert', {
    editor: undefined,
    init: function (editor) {
        this.editor = editor;

        editor.ui.addButton('imageInsert',
            {
                label: require('dynamicCaptions').question.ckeditor.addImage,
                command: 'addImage',
                icon: CKEDITOR.plugins.getPath('imageInsert') +  'icons/image.png',
                toolbar: "links,1"
            });
        editor.addCommand('addImage', { exec: this.addImage });
    },

    addImage: function (editor) {
        App.vent.trigger(App.EventNames.QUESTION_ADD_IMAGE, {editor: editor});
    }
});
