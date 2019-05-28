var chartRequireConfig = require.config({
	//enforceDefine : true,
	//context     : "chartingEmbed",
	//baseUrl     : CHARTING_MODULES_BASE,
	waitSeconds : 15,
	paths       : {
		//'jquery'                 : CHARTING_MODULES_BASE + 'libs/jquery-1.7.2',
		//'jqueryUI'               : CHARTING_MODULES_BASE + 'libs/jquery-ui-1.10.3.custom',
		'jqueryui'               : ASSESSMENT_BASE + 'lib/jqueryui',
		'jqueryDropdown'         : CHARTING_MODULES_BASE + 'libs/jquery.multiselect',
		'jqueryDropdownFilter'   : CHARTING_MODULES_BASE + 'libs/jquery.multiselect.filter',
		//'backbone'               : CHARTING_MODULES_BASE + 'libs/backbone',
		//'underscore'             : CHARTING_MODULES_BASE + 'libs/underscore',
		'json2'                  : CHARTING_MODULES_BASE + 'libs/json2/json2',
//		'jsonSelect'             : CHARTING_MODULES_BASE + "libs/jsonselect",
//		'jsonxml'                : CHARTING_MODULES_BASE + "libs/jsonxml",
		"hc"                     : CHARTING_MODULES_BASE + "libs/highcharts.src",
		"hc_exporting"           : CHARTING_MODULES_BASE + "libs/exporting.src",
//		'blockUI'                : CHARTING_MODULES_BASE + 'libs/jquery.blockUI',
		'fileSaver'              : CHARTING_MODULES_BASE + 'libs/FileSaver',
		'base64binary'           : CHARTING_MODULES_BASE + 'libs/base64-binary',
        "base64"                 : CHARTING_MODULES_BASE + 'libs/Base64',
		'html2canvas'            : CHARTING_MODULES_BASE + 'libs/html2canvas',
		"css"                    : CHARTING_MODULES_BASE + "libs/css",
//		'hbs'                    : ASSESSMENT_BASE + 'modules/hbs',
//		'handlebars'             : ASSESSMENT_BASE + 'lib/handlebars',
		'modules/i18nprecompile' : ASSESSMENT_BASE + 'modules/i18nprecompile',
        'BrowserDetector'        : ASSESSMENT_BASE + 'BrowserDetector',

		/**********************************
		 * jqxWidgets
		 *
		 **********************************/
		"jqxcore"               : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxcore",
		"jqxscrollbar"          : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxscrollbar",
		"jqxdata"               : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxdata",
		"jqxbuttons"            : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxbuttons",
		"jqxmenu"               : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxmenu",
		"jqxdropdownlist"       : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxdropdownlist",
		"jqxlistbox"            : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxlistbox",
		"jqxgrid"               : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid",
		"jqxgridAggregates"     : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.aggregates",
		"jqxgridColumnsreorder" : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.columnsreorder",
		"jqxgridColumnsresize"  : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.columnsresize",
		"jqxgridExport"         : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.export",
		"jqxgridFilter"         : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.filter",
		"jqxgridPager"          : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.pager",
		"jqxgridGrouping"       : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.grouping",
		"jqxgridSort"           : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.sort",
		"jqxgridSelection"      : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxgrid.selection",
		"jqxdataExport"         : CHARTING_MODULES_BASE + "libs/jqWidgets/jqxdata.export",


		/**********************************
		 * charting modules
		 *
		 **********************************/
		'indicatorController' : CHARTING_MODULES_BASE + 'chart/controllers/indicatorController',

		'data'                  : CHARTING_MODULES_BASE + 'chart/models/data',
		'dataAdapterFactory'    : CHARTING_MODULES_BASE + 'chart/models/dataAdapterFactory',
		'dataSetTypeDefinition' : CHARTING_MODULES_BASE + 'chart/models/dataSetTypeDefinition',
		'filter'                : CHARTING_MODULES_BASE + 'chart/models/filter',
		'filterSet'             : CHARTING_MODULES_BASE + 'chart/models/filterSet',
		'indicatorDataFactory'  : CHARTING_MODULES_BASE + 'chart/models/indicatorDataFactory',
		'indicatorModel'        : CHARTING_MODULES_BASE + 'chart/models/indicatorModel',
		'instanceSettings'      : CHARTING_MODULES_BASE + 'chart/models/instanceSettings',
		'item'                  : CHARTING_MODULES_BASE + 'chart/models/item',
		'labelItem'             : CHARTING_MODULES_BASE + 'chart/models/labelItem',
		'NOAFilter'             : CHARTING_MODULES_BASE + 'chart/models/NOAFilter',
		'objectFactory'         : CHARTING_MODULES_BASE + 'chart/models/objectFactory',
		'UDEData'               : CHARTING_MODULES_BASE + 'chart/models/UDEData',
		'userDefinedItem'       : CHARTING_MODULES_BASE + 'chart/models/userDefinedItem',

		'abstractDataAdapter'                  : CHARTING_MODULES_BASE + 'chart/models/adapters/abstractDataAdapter',
		'agregatedDataNormalizeAdapter'        : CHARTING_MODULES_BASE + 'chart/models/adapters/agregatedDataNormalizeAdapter',
		'categoriesDetector'                   : CHARTING_MODULES_BASE + 'chart/models/adapters/categoriesDetector',
		'columnSortingAdapter'                 : CHARTING_MODULES_BASE + 'chart/models/adapters/columnSortingAdapter',
		'filterAdapter'                        : CHARTING_MODULES_BASE + 'chart/models/adapters/filterAdapter',
		'filterSetGroupDataAdapter'            : CHARTING_MODULES_BASE + 'chart/models/adapters/filterSetGroupDataAdapter',
		'filterSetsDataAdapter'                : CHARTING_MODULES_BASE + 'chart/models/adapters/filterSetsDataAdapter',
		'genericColumnSortingAdapter'          : CHARTING_MODULES_BASE + 'chart/models/adapters/genericColumnSortingAdapter',
		'groupAdapter'                         : CHARTING_MODULES_BASE + 'chart/models/adapters/groupAdapter',
		'groupSameColumnSiblingsDataAdapter'   : CHARTING_MODULES_BASE + 'chart/models/adapters/groupSameColumnSiblingsDataAdapter',
		'legendDetector'                       : CHARTING_MODULES_BASE + 'chart/models/adapters/legendDetector',
		'normalizeAdapter'                     : CHARTING_MODULES_BASE + 'chart/models/adapters/normalizeAdapter',
		'obsCountAgregatorAdapter'             : CHARTING_MODULES_BASE + 'chart/models/adapters/obsCountAgregatorAdapter',
		'obsCountDataAdapter'                  : CHARTING_MODULES_BASE + 'chart/models/adapters/obsCountDataAdapter',
		'simpleBarChartAdapter'                : CHARTING_MODULES_BASE + 'chart/models/adapters/simpleBarChartAdapter',
		'simpleBarChartLegendDetector'         : CHARTING_MODULES_BASE + 'chart/models/adapters/simpleBarChartLegendDetector',
		'sortingAdapter'                       : CHARTING_MODULES_BASE + 'chart/models/adapters/sortingAdapter',
		'stackedAgregatedDataNormalizeAdapter' : CHARTING_MODULES_BASE + 'chart/models/adapters/stackedAgregatedDataNormalizeAdapter',
		'tableChartGroupAdapter'               : CHARTING_MODULES_BASE + 'chart/models/adapters/tableChartGroupAdapter',
		'userDefinedItemsAdapter'              : CHARTING_MODULES_BASE + 'chart/models/adapters/userDefinedItemsAdapter',
		'weightedAverageAdapter'               : CHARTING_MODULES_BASE + 'chart/models/adapters/weightedAverageAdapter',
		'scoreIntervalNormalizeAdapter'        : CHARTING_MODULES_BASE + 'chart/models/adapters/scoreIntervalNormalizeAdapter',

		'dataSourceDefinitionParser20' : CHARTING_MODULES_BASE + 'chart/serialization/dataSourceDefinitionParser20',
		'dataSourceDefinitionParser10' : CHARTING_MODULES_BASE + 'chart/serialization/dataSourceDefinitionParser10',

		'chartUtils' : CHARTING_MODULES_BASE + 'chart/utils/chartUtils',

		'HCDataAdapter'  : CHARTING_MODULES_BASE + 'HCDataAdapter',
		'ajaxDAO'        : CHARTING_MODULES_BASE + 'ajaxDAO',
		'chart'          : CHARTING_MODULES_BASE + 'chart',
		'captionManager' : CHARTING_MODULES_BASE + 'captionManager',
		'locale'         : CHARTING_MODULES_BASE + '../res/locale/noa_properties',
		'settings'       : CHARTING_MODULES_BASE + "settings",
		'utils'          : CHARTING_MODULES_BASE + "utils"
	},
	shim        : {
		'handlebars' : {
			exports : 'Handlebars'
			/*deps: ['template/helpers/equals', 'template/helpers/foreach', 'template/helpers/objectIterator',
			 'template/helpers/simpleChoice', 'template/helpers/conditionItem', 'template/helpers/caption',
			 'template/helpers/booleanToString']*/
		},
        'hbs': {
            deps : ['BrowserDetector']
        },

		/**********************************
		 * jqxWidgets
		 *
		 **********************************/
		jqxcore      : {
			deps : ["jquery"]
		},
		jqxscrollbar : {
			deps : ["jquery", "jqxcore"]
		},
		jqxdata      : {
			deps : ["jquery", "jqxcore"]
		},
		jqxbuttons   : {
			deps : ["jquery", "jqxcore"]
		},
		jqxmenu      : {
			deps : ["jquery", "jqxcore"]
		},
		jqxlistbox   : {
			deps : ["jquery", "jqxcore"]
		},

		jqxgrid : {
			deps : [
				"jquery",
				"jqxcore",
				"jqxscrollbar",
				"jqxdata",
				"jqxbuttons",
				"jqxmenu",
				"jqxdropdownlist"
			]
		},

		jqxdropdownlist       : {
			deps : ["jquery", "jqxlistbox"]
		},
		jqxgridFilter         : {
			deps : ["jqxgrid"]
		},
		jqxgridPager          : {
			deps : ["jqxgrid"]
		},
		jqxgridGrouping       : {
			deps : ["jqxgrid"]
		},
		jqxgridColumnsresize  : {
			deps : ["jqxgrid"]
		},
		jqxgridSort           : {
			deps : ["jqxgrid"]
		},
		jqxgridSelection      : {
			deps : ["jqxgrid"]
		},
		jqxgridAggregates     : {
			deps : ["jqxgrid"]
		},
		jqxgridColumnsreorder : {
			deps : ["jqxgrid"]
		},
		jqxgridExport         : {
			deps : ["jqxgrid"]
		},
		jqxdataExport         : {
			deps : ["jquery", "jqxcore", "jqxdata"]
		},

		//------------------------------------

		'jqueryui/slider'    : {
			deps : ['jquery']
		},
//		jqueryUI             : {
//			deps : ["jquery"]
//		},
		jqueryDropdown       : {
			deps : ["jquery"/*, "jqueryUI"*/]
		},
		jqueryDropdownFilter : {
			deps : ["jqueryDropdown"]
		},
		backbone             : {
			deps    : ['jquery', 'underscore'],
			exports : "Backbone"
		},
		underscore           : {
			exports : '_'
		},
		json2                : {
			exports : "JSON"
		},
		/*		jsonxml              : {
		 exports : "jsonxml",
		 deps    : ["jquery"]
		 },*/
		hc_dataAdapter       : {
			deps : ["json2", "jsonSelect"]
		},
		hc                   : {
			deps : ["jquery"]
		},
		hc_exporting         : {
			deps : ["hc", "jquery"]
		},
		captionManager       : {
			deps : ["settings", "locale"]
		},
		settings             : {
			deps : ["jquery"]
		},
//		blockUI              : {
//			deps : ["jquery"]
//		},

		// dependencies like the one below SHOULD NOT be defined inside shim.
		// It is sufficient if they are specified in the "define" method of the module that is depende
//		userDefinedItem      : {
//			deps : ["item"]
//		},

		instanceSettings : {
			deps : ["backbone"]
		}
	}//,
//	hbs         : {
//		i18nDirectory     : ASSESSMENT_BASE + '../templates/i18n/',
//		helperDirectory   : ASSESSMENT_BASE + 'template/helpers/',
//		templateExtension : 'handlebars'
//	}
});

var highchartsRequireConfig = require.config({
	//enforceDefine : true,
	//context     : "chartingEmbed",
	//baseUrl     : CHARTING_MODULES_BASE,
	waitSeconds : 15,
	paths       : {
		//'jquery'                 : CHARTING_MODULES_BASE + 'libs/jquery-1.7.2',
		//'jqueryUI'               : CHARTING_MODULES_BASE + 'libs/jquery-ui-1.10.3.custom',
		//'backbone'               : CHARTING_MODULES_BASE + 'libs/backbone',
		//'underscore'             : CHARTING_MODULES_BASE + 'libs/underscore',
//		'jsonSelect'             : CHARTING_MODULES_BASE + "libs/jsonselect",
//		'jsonxml'                : CHARTING_MODULES_BASE + "libs/jsonxml",
        'bootstrap'              : ASSESSMENT_BASE + 'lib/bootstrap3',
        'BrowserDetector'        : ASSESSMENT_BASE + 'BrowserDetector',
		"hc"                     : CHARTING_MODULES_BASE + "libs/highcharts.src",
		"hc_exporting"           : CHARTING_MODULES_BASE + "libs/exporting.src",
		"gradingChart"           : CHARTING_MODULES_BASE + "gradingChart",
        "base64"                 : CHARTING_MODULES_BASE + 'libs/Base64'
//		'blockUI'                : CHARTING_MODULES_BASE + 'libs/jquery.blockUI',
	},
	shim : {
        'bootstrap'                             : {
            deps : ['jquery']
        },
		'jqueryui/draggable'    : {
			deps : ['jquery', "jqueryui/core", "jqueryui/widget", "jqueryui/mouse"]
		},
        'hbs': {
            deps : ['BrowserDetector']
        },
		hc                   : {
			deps : ["jquery"]
		},
		hc_exporting         : {
			deps : ["hc", "jquery"]
		}
	}
});


var highchartsEmbedRequireConfig = require.config({
    //enforceDefine : true,
    //context     : "chartingEmbed",
    //baseUrl     : CHARTING_MODULES_BASE,
    waitSeconds : 15,
    paths       : {
        'jquery'                 : CHARTING_MODULES_BASE + 'libs/jquery-1.7.2',
        'jqueryui'               : ASSESSMENT_BASE + 'lib/jqueryui',
        'bootstrap'              : ASSESSMENT_BASE + 'lib/bootstrap3',
        //'backbone'               : CHARTING_MODULES_BASE + 'libs/backbone',
        //'underscore'             : CHARTING_MODULES_BASE + 'libs/underscore',
        "hc"                     : CHARTING_MODULES_BASE + "libs/highcharts.src",
        "hc_exporting"           : CHARTING_MODULES_BASE + "libs/exporting.src",
        "gradingChart"           : CHARTING_MODULES_BASE + "gradingChart",
        "base64"                 : CHARTING_MODULES_BASE + 'libs/Base64',
        'handlebars'             : ASSESSMENT_BASE + 'lib/handlebars',
        'hbs'                    : ASSESSMENT_BASE + 'modules/hbs',
        'BrowserDetector'        : ASSESSMENT_BASE + 'BrowserDetector'
    },
    shim : {
        'bootstrap'                             : {
            deps : ['jquery']
        },
        'jqueryui/draggable'    : {
            deps : ['jquery', "jqueryui/core", "jqueryui/widget", "jqueryui/mouse"]
        },
        backbone             : {
            deps    : ['jquery', 'underscore'],
            exports : "Backbone"
        },
        underscore           : {
            exports : '_'
        },
        'hbs': {
            deps : ['BrowserDetector']
        },
        hc                   : {
            deps : ["jquery"]
        },
        hc_exporting         : {
            deps : ["hc", "jquery"]
        },
        'handlebars'                            : {
            exports : 'Handlebars'
        }
    },
	hbs         : {
        disableI18n : true,
		/*i18nDirectory     : ASSESSMENT_BASE + '../templates/i18n/',*/
		helperDirectory   : ASSESSMENT_BASE + 'template/helpers/',
		templateExtension : 'handlebars'
	}
});


_charting = function(){
	return {
		init : function(options){
			chartRequireConfig([
				'require',
				'chart',
				"hbs!" + CHARTING_MODULES_BASE + "../templates/chart",
				'utils',
				'hc',
				'hc_exporting',
				"jsonSelect",
				"jqxgridAggregates",
				"jqxgridColumnsreorder",
				"jqxgridColumnsresize",
				"jqxgridExport",
				"jqxgridFilter",
				"jqxgridPager",
				"jqxgridGrouping",
				"jqxgridSort",
				"jqxgridSelection",
				"jqxdataExport",
				"css!" + CHARTING_MODULES_BASE + "../res/css/charting/jquery-ui-1.10.3.chartingUI.css",
				"css!" + CHARTING_MODULES_BASE + "../res/css/charting/jquery.multiselect.css",
				"css!" + CHARTING_MODULES_BASE + "../res/css/charting/jquery.multiselect.filter.css",
				"css!" + CHARTING_MODULES_BASE + "../res/css/jqWidgets/styles/jqx.base.css",
				"css!" + CHARTING_MODULES_BASE + "../res/css/jqWidgets/styles/jqx.classic.css",
				"css!" + CHARTING_MODULES_BASE + "../res/css/charting/charting.css"
			], function(require, Chart, ChartTemplate){
				var l_chartTemplateData = $.extend({}, true, options),
					l_chart;

				l_chartTemplateData.resourcesFolder = CHARTING_MODULES_BASE + "../res/";
				l_chartTemplateData.instanceId = GUID();

				$(options.container).html(ChartTemplate(l_chartTemplateData));
				l_chart = new Chart();
				l_chart.init(l_chartTemplateData);
				$(options.container).data("chart", l_chart);
				$(options.container).trigger("chartInitialized.charting");
			});
		},

		initSimpleChart : function(options, readyHandler) {
			highchartsRequireConfig(
				["gradingChart", "hc", "hc_exporting", "bootstrap"],
				function(GradingChart){
					var l_chart = new GradingChart();
					l_chart.init(options);

					App.vent.trigger('chartInitialized:charting', l_chart);
                    readyHandler.apply(this, [l_chart]);
				});
		},

        initEmbededChart: function(options){
            highchartsEmbedRequireConfig(
                [
                    "gradingChart",
                    "hc",
                    "hc_exporting",
                    "bootstrap"
                ],
                function(GradingChart){
                    var l_chart = new GradingChart();
                    l_chart.init(options);

                    //App.vent.trigger('chartInitialized:charting', l_chart);
                });
        }
	};
};

if (!charting) {
	var charting = new _charting();
}
