

/*
 * This is really a good bit rubbish... - To be fixed in 2.0
 */
this.oApi._fnExternApiFunc = _fnExternApiFunc;
this.oApi._fnInitialise = _fnInitialise;
this.oApi._fnInitComplete = _fnInitComplete;
this.oApi._fnLanguageProcess = _fnLanguageProcess;
this.oApi._fnAddColumn = _fnAddColumn;
this.oApi._fnColumnOptions = _fnColumnOptions;
this.oApi._fnAddData = _fnAddData;
this.oApi._fnCreateTr = _fnCreateTr;
this.oApi._fnGatherData = _fnGatherData;
this.oApi._fnBuildHead = _fnBuildHead;
this.oApi._fnDrawHead = _fnDrawHead;
this.oApi._fnDraw = _fnDraw;
this.oApi._fnReDraw = _fnReDraw;
this.oApi._fnAjaxUpdate = _fnAjaxUpdate;
this.oApi._fnAjaxParameters = _fnAjaxParameters;
this.oApi._fnAjaxUpdateDraw = _fnAjaxUpdateDraw;
this.oApi._fnServerParams = _fnServerParams;
this.oApi._fnAddOptionsHtml = _fnAddOptionsHtml;
this.oApi._fnFeatureHtmlTable = _fnFeatureHtmlTable;
this.oApi._fnScrollDraw = _fnScrollDraw;
this.oApi._fnAdjustColumnSizing = _fnAdjustColumnSizing;
this.oApi._fnFeatureHtmlFilter = _fnFeatureHtmlFilter;
this.oApi._fnFilterComplete = _fnFilterComplete;
this.oApi._fnFilterCustom = _fnFilterCustom;
this.oApi._fnFilterColumn = _fnFilterColumn;
this.oApi._fnFilter = _fnFilter;
this.oApi._fnBuildSearchArray = _fnBuildSearchArray;
this.oApi._fnBuildSearchRow = _fnBuildSearchRow;
this.oApi._fnFilterCreateSearch = _fnFilterCreateSearch;
this.oApi._fnDataToSearch = _fnDataToSearch;
this.oApi._fnSort = _fnSort;
this.oApi._fnSortAttachListener = _fnSortAttachListener;
this.oApi._fnSortingClasses = _fnSortingClasses;
this.oApi._fnFeatureHtmlPaginate = _fnFeatureHtmlPaginate;
this.oApi._fnPageChange = _fnPageChange;
this.oApi._fnFeatureHtmlInfo = _fnFeatureHtmlInfo;
this.oApi._fnUpdateInfo = _fnUpdateInfo;
this.oApi._fnFeatureHtmlLength = _fnFeatureHtmlLength;
this.oApi._fnFeatureHtmlProcessing = _fnFeatureHtmlProcessing;
this.oApi._fnProcessingDisplay = _fnProcessingDisplay;
this.oApi._fnVisibleToColumnIndex = _fnVisibleToColumnIndex;
this.oApi._fnColumnIndexToVisible = _fnColumnIndexToVisible;
this.oApi._fnNodeToDataIndex = _fnNodeToDataIndex;
this.oApi._fnVisbleColumns = _fnVisbleColumns;
this.oApi._fnCalculateEnd = _fnCalculateEnd;
this.oApi._fnConvertToWidth = _fnConvertToWidth;
this.oApi._fnCalculateColumnWidths = _fnCalculateColumnWidths;
this.oApi._fnScrollingWidthAdjust = _fnScrollingWidthAdjust;
this.oApi._fnGetWidestNode = _fnGetWidestNode;
this.oApi._fnGetMaxLenString = _fnGetMaxLenString;
this.oApi._fnStringToCss = _fnStringToCss;
this.oApi._fnArrayCmp = _fnArrayCmp;
this.oApi._fnDetectType = _fnDetectType;
this.oApi._fnSettingsFromNode = _fnSettingsFromNode;
this.oApi._fnGetDataMaster = _fnGetDataMaster;
this.oApi._fnGetTrNodes = _fnGetTrNodes;
this.oApi._fnGetTdNodes = _fnGetTdNodes;
this.oApi._fnEscapeRegex = _fnEscapeRegex;
this.oApi._fnDeleteIndex = _fnDeleteIndex;
this.oApi._fnReOrderIndex = _fnReOrderIndex;
this.oApi._fnColumnOrdering = _fnColumnOrdering;
this.oApi._fnLog = _fnLog;
this.oApi._fnClearTable = _fnClearTable;
this.oApi._fnSaveState = _fnSaveState;
this.oApi._fnLoadState = _fnLoadState;
this.oApi._fnCreateCookie = _fnCreateCookie;
this.oApi._fnReadCookie = _fnReadCookie;
this.oApi._fnDetectHeader = _fnDetectHeader;
this.oApi._fnGetUniqueThs = _fnGetUniqueThs;
this.oApi._fnScrollBarWidth = _fnScrollBarWidth;
this.oApi._fnApplyToChildren = _fnApplyToChildren;
this.oApi._fnMap = _fnMap;
this.oApi._fnGetRowData = _fnGetRowData;
this.oApi._fnGetCellData = _fnGetCellData;
this.oApi._fnSetCellData = _fnSetCellData;
this.oApi._fnGetObjectDataFn = _fnGetObjectDataFn;
this.oApi._fnSetObjectDataFn = _fnSetObjectDataFn;


/**
 * Create a wrapper function for exporting an internal functions to an external API.
 *  @param {string} sFunc API function name
 *  @returns {function} wrapped function
 *  @private
 */
function _fnExternApiFunc (sFunc)
{
	return function() {
		var aArgs = [_fnSettingsFromNode(this[_oExt.iApiIndex])].concat( 
			Array.prototype.slice.call(arguments) );
		return _oExt.oApi[sFunc].apply( this, aArgs );
	};
}

for ( var sFunc in _oExt.oApi )
{
	if ( sFunc )
	{
		this[sFunc] = _fnExternApiFunc(sFunc);
	}
}