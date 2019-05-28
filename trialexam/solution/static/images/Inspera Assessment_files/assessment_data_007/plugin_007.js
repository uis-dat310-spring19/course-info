
CKEDITOR.plugins.add('attachmentInsert', {
    init: function (editor) {
        //CKEDITOR.skin.addIcon("attachmentInsert", CKEDITOR.plugins.getPath('attachmentInsert') +  'icons/attachmentInsert.png');
        editor.ui.addButton('attachmentInsert',
        {
            label: require('dynamicCaptions').question.ckeditor.addAttachment,
            command: 'addAttachment'/*,
            icon: CKEDITOR.plugins.getPath('attachmentInsert') +  'icons/attachmentInsert.png'*/
        });
        editor.addCommand('addAttachment', { exec: this.addAttachment });
    },
    addAttachment: function (editor) {
        var selection = editor.getSelection();
        var selectedText = '';
        if(selection.getSelectedElement() != null){
            selectedText = selection.getSelectedElement().getOuterHtml();
        } else {
            selectedText = selection.getSelectedText();
        }
        var bookmarks = selection.createBookmarks(true);
        
        var AddAttachmentView = require('views/author/question-edit/AddAttachmentView');
        var addAttachmentView = new AddAttachmentView({selectedText:selectedText});
        addAttachmentView.on('question:addFromAttachmentModal', function (attachment) {
            //alert(attachment.title+', '+attachment.contentItemId+', '+attachment.logicalName);
            var element = CKEDITOR.dom.element.createFromHtml( '<a class="attachment" href="file/ci/'+attachment.contentItemId+'/'+attachment.title+'" data-contentItemId="'+attachment.contentItemId+'" data-name="'+attachment.title+'" inspera:logicalName="'+attachment.logicalName+'">'+attachment.linkText+'</a> ' );
            setTimeout(function () {
                // TESTC-1090 added in setTimeout to get around a very strange IE-bug
                var range = selection.getRanges()[0];
                range.moveToBookmark(bookmarks[0]);
                range.select();

                editor.insertElement( element );
            },10);
        });
        App.layout.modalContainer.show(addAttachmentView);
    }
});