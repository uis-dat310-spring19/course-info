CKEDITOR.plugins.add( 'annotations', {
    icons: 'annotations',
    init: function( editor ) {
        editor.ui.addButton( 'annotations', {
            label: require('dynamicCaptions').question.ckeditor.insertAnnotation,
            command: 'insertAnnotation',
            icon: CKEDITOR.plugins.getPath('annotations') +  'annotations_icon.png',
            toolbar: "links,1"
        });
        editor.addCommand('insertAnnotation', { exec: this.insertAnnotation });
    },
    insertAnnotation: function () {
        App.vent.trigger(App.EventNames.QUESTION_ADD_ANNOTATION);
    }
});
