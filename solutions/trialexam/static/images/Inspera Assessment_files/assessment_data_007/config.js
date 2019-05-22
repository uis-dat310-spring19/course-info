/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.

    var enableAuthoringInlineLatexEditing = window.serverVars.enableAuthoringInlineLatexEditing;

    var mathItems = [];
    if (enableAuthoringInlineLatexEditing) {
        mathItems.push('iaEditorMathjaxToggle');
        mathItems.push('iaAddInlineLatexEditField');
    }
    mathItems.push('Mathjax');

    CKEDITOR.config.toolbar_question = [
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent']},
        {name: 'math', items: mathItems},
        {name: 'insert', items: ['attachmentInsert', 'Table']},
        {name: 'links', items: ['Link','imageInsert','attachmentPDF','iaAudio','iaVideo']},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others', items: ['Interaction', 'GapElement']},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_question_modal = [
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'math', items: ['Mathjax']},
        {name: 'links'},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_document = [
        {name: 'styles', items: ['Format']},
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList']},
        {name: 'math', items: mathItems},
        {name: 'insert', items: ['attachmentInsert', 'Table']},
        {name: 'links', items: ['Link', 'imageInsert']},
        {name: 'insert'},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others'},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_stimulus_document = [
        {name: 'styles', items: ['Format']},
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList']},
        {name: 'math', items: mathItems},
        {name: 'insert', items: ['attachmentInsert', 'Table']},
        {name: 'links', items: ['Link', 'imageInsert']},
        {name: 'Annotations', items: ['annotations']},
        {name: 'insert'},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others'},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_stimulus_question = [
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent']},
        {name: 'math', items: mathItems},
        {name: 'insert', items: ['attachmentInsert', 'Table']},
        {name: 'links', items: ['Link','imageInsert','iaAudio','iaVideo']},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others', items: ['Interaction']},
        {name: 'Annotations', items: ['annotations']},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_delivering_document = [
        {name: 'styles', items: ['Format']},
        {name: 'clipboard', items: ['Undo', 'Redo']},
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList']},
        {name: 'insert', items: ['Table']},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others'},
        {name: 'about'}
    ];
    CKEDITOR.config.toolbar_criteria_marking = [
        {name: 'forms'},
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent']},
        {name: 'math', items: ['Mathjax']},
        {name: 'colors'},
        {name: 'tools'},
        {name: 'others'},
        {name: 'about'}
    ];

    // Let's have it basic on dialogs as well.
    config.removeDialogTabs = 'link:advanced';
    config.removePlugins = 'elementspath';

    config.mathJaxLib = 'https://d2snzxottmona5.cloudfront.net/lib/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML';
    config.skin = 'moono-lisa';
    config.extraPlugins = 'divarea,interactioneditor,attachmentInsert,attachmentPDF,mathjax,iaAudio,iaVideo,fixExtendSelectionError,imageInsert,dragresize,annotations,sourcedialog';

    if (config.enableInlineGapMatchPlugin) {
        config.extraPlugins += ',inlineGapMatch';
    } else if (config.enableGraphicGapMatchPlugin) {
        config.extraPlugins += ',graphicGapMatch';
    }

    if (enableAuthoringInlineLatexEditing) {
        config.extraPlugins += ',iaAddInlineLatexEditField,iaEditorMathjaxToggle';
    }
    config.disallowedContent = "script; *[on*]";
    // paste as plain text plugin ("pastetext")
    config.linkShowAdvancedTab = false;
    config.linkShowTargetTab = true;
    config.autoParagraph = false;
    config.enterMode = CKEDITOR.ENTER_P;
    config.forceEnterMode = true;
    config.forcePasteAsPlainText = false;
    config.pasteFilter = 'semantic-content';
    //config.fillEmptyBlocks = true;
    config.processNumericEntities = true;
    config.entities_processNumerical = 'force';
    config.allowedContent = true;
    config.format_tags = 'p;h1;h2;h3;h4;h5';
    config.format_pre = { element: 'pre', attributes: { 'class': 'pre-formatted' } };

};
