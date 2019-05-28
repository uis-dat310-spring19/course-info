/*
 * Plugin for handling interaction elements in the editor
 * Includes a toolbar button for triggering the event to add an interaction,
 * and blocking of backspace/delete of an interaction element
 * */

(function () {
    var isReadOnlyTree = function (node) {
        if (node.type == CKEDITOR.NODE_ELEMENT) {
            var childs = node.$.childNodes;
            for (var i = 0; i < childs.length; i++)
                if (isReadOnlyTree(new CKEDITOR.dom.node(childs[ i ]))) {
                    return true;
                }
            return false;
        } else if (node.type == CKEDITOR.NODE_TEXT) {
            return node.isReadOnly();
        } else {
            return false;
        }
    };

    // http://ckeditor.com/forums/Support/Prevent-text-deletion
    var onKey = function (e) {
        var selection = e.editor.getSelection();
        var ranges = selection.getRanges();
        if (ranges != null) {
            var range = ranges[0];
            if (range != null) {
                range = range.clone();

                var startNode = range.startContainer;
                var endNode = range.endContainer;
                var pos = startNode.getPosition(endNode);

                switch (pos) {
                    case CKEDITOR.POSITION_IDENTICAL:
                    {
                        switch (e.data.keyCode) {
                            case 8:
                            { //BACKSPACE
                                // If start of line
                                if (range.startOffset == 0 && range.endOffset == 0) {

                                } else if (startNode.$ != null && startNode.$.parentElement != null) {
                                    deleteInteraction(startNode.$.parentElement);
                                }


                                break;
                            }
                            case 46:
                            { //DEL
                                var ancestor;
                                if (!startNode.getLength || range.startOffset == startNode.getLength()) {

                                } else if (startNode.getLength() > 0 && range.endOffset > 0 && range.endOffset == (startNode.getLength()-1)) {
                                    // delete was pressed on the end of element, affecting the next element
                                    ancestor = endNode.$;
                                    if (ancestor != null) {
                                        deleteInteraction(ancestor.nextSibling);
                                    }
                                } else if (startNode.$ != null && startNode.$.parentElement != null) {
                                    deleteInteraction(startNode.$.parentElement);
                                }

                                break;
                            }
                            default:
                            {
                                return true;
                            }
                        }
                        break;
                    }
                }
            }
        }
        return true;
    };

    var deleteInteraction = function(element) {
        // delete the text entry span if it is deleted with backspace or delete
        if(element != null && element.nodeType == 1 && element.className.indexOf('text-entry') != -1) {
            element.remove();
        }
	    App.vent.trigger("question:interactionsUpdated");
    };

    CKEDITOR.plugins.add('interactioneditor', {
        init: function (editor) {
            editor.ui.addButton('Interaction',
                {
                    label: require('dynamicCaptions').question.ckeditor.addInteraction,
                    command: 'addInteraction',
                    text: 'abc'
                });
            editor.addCommand('addInteraction', { exec: this.addInteraction });

            editor.on('key', onKey);
        },
        addInteraction: function () {
            App.vent.trigger('question:addInteraction');
	        App.vent.trigger("question:interactionsUpdated");
        }

    });
})();

