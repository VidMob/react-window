!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e=e||self).ReactWindow={},e.React)}(this,(function(e,t){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function i(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function a(e,t){var r;void 0===t&&(t=i);var o,n=[],a=!1;return function(){for(var i=[],l=0;l<arguments.length;l++)i[l]=arguments[l];return a&&r===this&&t(i,n)||(o=e.apply(this,i),a=!0,r=this,n=i),o}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(e){cancelAnimationFrame(e.id)}function c(e,t){var r=l();var o={id:requestAnimationFrame((function n(){l()-r>=t?e.call(null):o.id=requestAnimationFrame(n)}))};return o}var u=-1;var d=null;function f(e){if(void 0===e&&(e=!1),null===d||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var o=document.createElement("div"),n=o.style;return n.width="100px",n.height="100px",t.appendChild(o),document.body.appendChild(t),t.scrollLeft>0?d="positive-descending":(t.scrollLeft=1,d=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),d}return d}var h=function(e){var t=e.columnIndex;e.data;return e.rowIndex+":"+t},p=null,m=null,v=null;function g(e){var i,l,d=e.getColumnOffset,p=e.getColumnStartIndexForOffset,m=e.getColumnStopIndexForStartIndex,v=e.getColumnWidth,g=e.getEstimatedTotalHeight,S=e.getEstimatedTotalWidth,I=e.getOffsetForColumnAndAlignment,M=e.getOffsetForRowAndAlignment,x=e.getRowHeight,y=e.getRowOffset,C=e.getRowStartIndexForOffset,_=e.getRowStopIndexForStartIndex,b=e.initInstanceProps,R=e.shouldResetStyleCacheOnItemSizeChange,T=e.validateProps;return l=i=function(e){function i(t){var r;return(r=e.call(this,t)||this)._instanceProps=b(r.props,o(r)),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:o(r),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof r.props.initialScrollLeft?r.props.initialScrollLeft:0,scrollTop:"number"==typeof r.props.initialScrollTop?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a((function(e,t,o,n,i,a,l,s){return r.props.onItemsRendered({overscanColumnStartIndex:e,overscanColumnStopIndex:t,overscanRowStartIndex:o,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})})),r._callOnScroll=void 0,r._callOnScroll=a((function(e,t,o,n,i){return r.props.onScroll({horizontalScrollDirection:o,scrollLeft:e,scrollTop:t,verticalScrollDirection:n,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(e,t){var o,n=r.props,i=n.columnWidth,a=n.direction,l=n.rowHeight,s=r._getItemStyleCache(R&&i,R&&a,R&&l),c=e+":"+t;if(s.hasOwnProperty(c))o=s[c];else{var u=d(r.props,t,r._instanceProps),f="rtl"===a;s[c]=o={position:"absolute",left:f?void 0:u,right:f?u:void 0,top:y(r.props,e,r._instanceProps),height:x(r.props,e,r._instanceProps),width:v(r.props,t,r._instanceProps)}}return o},r._getItemStyleCache=void 0,r._getItemStyleCache=a((function(e,t,r){return{}})),r._onScroll=function(e){var t=e.currentTarget,o=t.clientHeight,n=t.clientWidth,i=t.scrollLeft,a=t.scrollTop,l=t.scrollHeight,s=t.scrollWidth;r.setState((function(e){if(e.scrollLeft===i&&e.scrollTop===a)return null;var t=r.props.direction,c=i;if("rtl"===t)switch(f()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-o));return{isScrolling:!0,horizontalScrollDirection:e.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:e.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1)}))},r}n(i,e),i.getDerivedStateFromProps=function(e,t){return w(e,t),T(e),null};var l=i.prototype;return l.scrollTo=function(e){var t=e.scrollLeft,r=e.scrollTop;void 0!==t&&(t=Math.max(0,t)),void 0!==r&&(r=Math.max(0,r)),this.setState((function(e){return void 0===t&&(t=e.scrollLeft),void 0===r&&(r=e.scrollTop),e.scrollLeft===t&&e.scrollTop===r?null:{horizontalScrollDirection:e.scrollLeft<t?"forward":"backward",scrollLeft:t,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:e.scrollTop<r?"forward":"backward"}}),this._resetIsScrollingDebounced)},l.scrollToItem=function(e){var t=e.align,r=void 0===t?"auto":t,o=e.columnIndex,n=e.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,d=this.state,f=d.scrollLeft,h=d.scrollTop,p=function(e){if(void 0===e&&(e=!1),-1===u||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),u=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return u}();void 0!==o&&(o=Math.max(0,Math.min(o,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var m=g(this.props,this._instanceProps),v=S(this.props,this._instanceProps)>c?p:0,w=m>l?p:0;this.scrollTo({scrollLeft:void 0!==o?I(this.props,o,r,f,this._instanceProps,w):f,scrollTop:void 0!==n?M(this.props,n,r,h,this._instanceProps,v):h})},l.componentDidMount=function(){var e=this.props,t=e.initialScrollLeft,r=e.initialScrollTop;if(null!=this._outerRef){var o=this._outerRef;"number"==typeof t&&(o.scrollLeft=t),"number"==typeof r&&(o.scrollTop=r)}this._callPropsCallbacks()},l.componentDidUpdate=function(){var e=this.props.direction,t=this.state,r=t.scrollLeft,o=t.scrollTop;if(t.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===e)switch(f()){case"negative":n.scrollLeft=-r;break;case"positive-ascending":n.scrollLeft=r;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-r}else n.scrollLeft=Math.max(0,r);n.scrollTop=Math.max(0,o)}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,o=e.children,n=e.className,i=e.columnCount,a=e.direction,l=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemData,f=e.itemKey,p=void 0===f?h:f,m=e.outerElementType,v=e.outerTagName,w=e.rowCount,I=e.style,M=e.useIsScrolling,x=e.width,y=this.state.isScrolling,C=this._getHorizontalRangeToRender(),_=C[0],b=C[1],R=this._getVerticalRangeToRender(),T=R[0],z=R[1],O=[];if(i>0&&w)for(var P=T;P<=z;P++)for(var W=_;W<=b;W++)O.push(t.createElement(o,{columnIndex:W,data:d,isScrolling:M?y:void 0,key:p({columnIndex:W,data:d,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var E=g(this.props,this._instanceProps),A=S(this.props,this._instanceProps);return t.createElement(m||v||"div",{className:n,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},I)},t.createElement(c||u||"div",{children:O,ref:s,style:{height:E,pointerEvents:y?"none":void 0,width:A}}))},l._callPropsCallbacks=function(){var e=this.props,t=e.columnCount,r=e.onItemsRendered,o=e.onScroll,n=e.rowCount;if("function"==typeof r&&t>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),d=u[0],f=u[1],h=u[2],p=u[3];this._callOnItemsRendered(a,l,d,f,s,c,h,p)}if("function"==typeof o){var m=this.state,v=m.horizontalScrollDirection,g=m.scrollLeft,w=m.scrollTop,S=m.scrollUpdateWasRequested,I=m.verticalScrollDirection;this._callOnScroll(g,w,v,I,S)}},l._getHorizontalRangeToRender=function(){var e=this.props,t=e.columnCount,r=e.overscanColumnCount,o=e.overscanColumnsCount,n=e.overscanCount,i=e.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=r||o||n||1;if(0===t||0===i)return[0,0,0,0];var d=p(this.props,c,this._instanceProps),f=m(this.props,d,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),v=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(t-1,f+v)),d,f]},l._getVerticalRangeToRender=function(){var e=this.props,t=e.columnCount,r=e.overscanCount,o=e.overscanRowCount,n=e.overscanRowsCount,i=e.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=o||n||r||1;if(0===t||0===i)return[0,0,0,0];var d=C(this.props,c,this._instanceProps),f=_(this.props,d,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),p=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,d-h),Math.max(0,Math.min(i-1,f+p)),d,f]},i}(t.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}"undefined"!=typeof window&&void 0!==window.WeakSet&&(p=new WeakSet,m=new WeakSet,v=new WeakSet);var w=function(e,t){var r=e.children,o=e.direction,n=e.height,i=e.innerTagName,a=e.outerTagName,l=e.overscanColumnsCount,s=e.overscanCount,c=e.overscanRowsCount,u=e.width,d=t.instance;if("number"==typeof s&&p&&!p.has(d)&&(p.add(d),console.warn("The overscanCount prop has been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),"number"!=typeof l&&"number"!=typeof c||m&&!m.has(d)&&(m.add(d),console.warn("The overscanColumnsCount and overscanRowsCount props have been deprecated. Please use the overscanColumnCount and overscanRowCount props instead.")),null==i&&null==a||v&&!v.has(d)&&(v.add(d),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.")),null==r)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===r?"null":typeof r)+'" was specified.');switch(o){case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+o+'" was specified.')}if("number"!=typeof u)throw Error('An invalid "width" prop has been specified. Grids must specify a number for width. "'+(null===u?"null":typeof u)+'" was specified.');if("number"!=typeof n)throw Error('An invalid "height" prop has been specified. Grids must specify a number for height. "'+(null===n?"null":typeof n)+'" was specified.')},S=function(e,t){var r=e.rowCount,o=t.rowMetadataMap,n=t.estimatedRowHeight,i=t.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},I=function(e,t){var r=e.columnCount,o=t.columnMetadataMap,n=t.estimatedColumnWidth,i=t.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},M=function(e,t,r,o){var n,i,a;if("column"===e?(n=o.columnMetadataMap,i=t.columnWidth,a=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=t.rowHeight,a=o.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===e?o.lastMeasuredColumnIndex=r:o.lastMeasuredRowIndex=r}return n[r]},x=function(e,t,r,o){var n,i;return"column"===e?(n=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=o?y(e,t,r,i,0,o):C(e,t,r,Math.max(0,i),o)},y=function(e,t,r,o,n,i){for(;n<=o;){var a=n+Math.floor((o-n)/2),l=M(e,t,a,r).offset;if(l===i)return a;l<i?n=a+1:l>i&&(o=a-1)}return n>0?n-1:0},C=function(e,t,r,o,n){for(var i="column"===e?t.columnCount:t.rowCount,a=1;o<i&&M(e,t,o,r).offset<n;)o+=a,a*=2;return y(e,t,r,Math.min(o,i-1),Math.floor(o/2),n)},_=function(e,t,r,o,n,i,a){var l="column"===e?t.width:t.height,s=M(e,t,r,i),c="column"===e?I(t,i):S(t,i),u=Math.max(0,Math.min(c-l,s.offset)),d=Math.max(0,s.offset-l+a+s.size);switch("smart"===o&&(o=n>=d-l&&n<=u+l?"auto":"center"),o){case"start":return u;case"end":return d;case"center":return Math.round(d+(u-d)/2);case"auto":default:return n>=d&&n<=u?n:d>u||n<d?d:u}},b=g({getColumnOffset:function(e,t,r){return M("column",e,t,r).offset},getColumnStartIndexForOffset:function(e,t,r){return x("column",e,r,t)},getColumnStopIndexForStartIndex:function(e,t,r,o){for(var n=e.columnCount,i=e.width,a=M("column",e,t,o),l=r+i,s=a.offset+a.size,c=t;c<n-1&&s<l;)c++,s+=M("column",e,c,o).size;return c},getColumnWidth:function(e,t,r){return r.columnMetadataMap[t].size},getEstimatedTotalHeight:S,getEstimatedTotalWidth:I,getOffsetForColumnAndAlignment:function(e,t,r,o,n,i){return _("column",e,t,r,o,n,i)},getOffsetForRowAndAlignment:function(e,t,r,o,n,i){return _("row",e,t,r,o,n,i)},getRowOffset:function(e,t,r){return M("row",e,t,r).offset},getRowHeight:function(e,t,r){return r.rowMetadataMap[t].size},getRowStartIndexForOffset:function(e,t,r){return x("row",e,r,t)},getRowStopIndexForStartIndex:function(e,t,r,o){for(var n=e.rowCount,i=e.height,a=M("row",e,t,o),l=r+i,s=a.offset+a.size,c=t;c<n-1&&s<l;)c++,s+=M("row",e,c,o).size;return c},initInstanceProps:function(e,t){var r=e,o={columnMetadataMap:{},estimatedColumnWidth:r.estimatedColumnWidth||50,estimatedRowHeight:r.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return t.resetAfterColumnIndex=function(e,r){void 0===r&&(r=!0),t.resetAfterIndices({columnIndex:e,shouldForceUpdate:r})},t.resetAfterRowIndex=function(e,r){void 0===r&&(r=!0),t.resetAfterIndices({rowIndex:e,shouldForceUpdate:r})},t.resetAfterIndices=function(e){var r=e.columnIndex,n=e.rowIndex,i=e.shouldForceUpdate,a=void 0===i||i;"number"==typeof r&&(o.lastMeasuredColumnIndex=Math.min(o.lastMeasuredColumnIndex,r-1)),"number"==typeof n&&(o.lastMeasuredRowIndex=Math.min(o.lastMeasuredRowIndex,n-1)),t._getItemStyleCache(-1),a&&t.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.columnWidth,r=e.rowHeight;if("function"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.');if("function"!=typeof r)throw Error('An invalid "rowHeight" prop has been specified. Value should be a function. "'+(null===r?"null":typeof r)+'" was specified.')}}),R=function(e,t){return e},T=null,z=null;function O(e){var i,l,u=e.getItemOffset,d=e.getEstimatedTotalSize,h=e.getItemSize,p=e.getOffsetForIndexAndAlignment,m=e.getStartIndexForOffset,v=e.getStopIndexForStartIndex,g=e.initInstanceProps,w=e.shouldResetStyleCacheOnItemSizeChange,S=e.validateProps;return l=i=function(e){function i(t){var r;return(r=e.call(this,t)||this)._instanceProps=g(r.props,o(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:o(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=a((function(e,t,o,n){return r.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:o,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=a((function(e,t,o){return r.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:o})})),r._getItemStyle=void 0,r._getItemStyle=function(e){var t,o=r.props,n=o.direction,i=o.itemSize,a=o.layout,l=r._getItemStyleCache(w&&i,w&&a,w&&n);if(l.hasOwnProperty(e))t=l[e];else{var s=u(r.props,e,r._instanceProps),c=h(r.props,e,r._instanceProps),d="horizontal"===n||"horizontal"===a,f="rtl"===n,p=d?s:0;l[e]=t={position:"absolute",left:f?void 0:p,right:f?p:void 0,top:d?0:s,height:d?"100%":c,width:d?c:"100%"}}return t},r._getItemStyleCache=void 0,r._getItemStyleCache=a((function(e,t,r){return{}})),r._onScrollHorizontal=function(e){var t=e.currentTarget,o=t.clientWidth,n=t.scrollLeft,i=t.scrollWidth;r.setState((function(e){if(e.scrollOffset===n)return null;var t=r.props.direction,a=n;if("rtl"===t)switch(f()){case"negative":a=-n;break;case"positive-descending":a=i-o-n}return a=Math.max(0,Math.min(a,i-o)),{isScrolling:!0,scrollDirection:e.scrollOffset<n?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(e){var t=e.currentTarget,o=t.clientHeight,n=t.scrollHeight,i=t.scrollTop;r.setState((function(e){if(e.scrollOffset===i)return null;var t=Math.max(0,Math.min(i,n-o));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(e){var t=r.props.outerRef;r._outerRef=e,"function"==typeof t?t(e):null!=t&&"object"==typeof t&&t.hasOwnProperty("current")&&(t.current=e)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&s(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=c(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}n(i,e),i.getDerivedStateFromProps=function(e,t){return P(e,t),S(e),null};var l=i.prototype;return l.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},l.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props.itemCount,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,r-1)),this.scrollTo(p(this.props,e,t,o,this._instanceProps))},l.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,o=e.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===t||"horizontal"===o?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},l.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,o=this.state,n=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===t||"horizontal"===r)if("rtl"===t)switch(f()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var e=this.props,o=e.children,n=e.propsForChildren,i=e.className,a=e.direction,l=e.height,s=e.innerRef,c=e.innerElementType,u=e.innerTagName,f=e.itemCount,h=e.itemData,p=e.itemKey,m=void 0===p?R:p,v=e.layout,g=e.outerElementType,w=e.outerTagName,S=e.style,I=e.useIsScrolling,M=e.width,x=this.state.isScrolling,y="horizontal"===a||"horizontal"===v,C=y?this._onScrollHorizontal:this._onScrollVertical,_=this._getRangeToRender(),b=_[0],T=_[1],z=[];if(f>0)for(var O=b;O<=T;O++)z.push(t.createElement(o,{data:h,key:m(O,h),index:O,isScrolling:I?x:void 0,style:this._getItemStyle(O),propsForChildren:n}));var P=d(this.props,this._instanceProps);return t.createElement(g||w||"div",{className:i,onScroll:C,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:M,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},S)},t.createElement(c||u||"div",{children:z,ref:s,style:{height:y?"100%":P,pointerEvents:x?"none":void 0,width:y?P:"100%"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],o=e[2],n=e[3];this._callOnItemsRendered(t,r,o,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,o=this.state,n=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===t)return[0,0,0,0];var l=m(this.props,a,this._instanceProps),s=v(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,r),u=n&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,l-c),Math.max(0,Math.min(t-1,s+u)),l,s]},i}(t.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}"undefined"!=typeof window&&void 0!==window.WeakSet&&(T=new WeakSet,z=new WeakSet);var P=function(e,t){var r=e.children,o=e.direction,n=e.height,i=e.layout,a=e.innerTagName,l=e.outerTagName,s=e.width,c=t.instance;null==a&&null==l||z&&!z.has(c)&&(z.add(c),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var u="horizontal"===o||"horizontal"===i;switch(o){case"horizontal":case"vertical":T&&!T.has(c)&&(T.add(c),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". "'+o+'" was specified.')}switch(i){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". "'+i+'" was specified.')}if(null==r)throw Error('An invalid "children" prop has been specified. Value should be a React component. "'+(null===r?"null":typeof r)+'" was specified.');if(u&&"number"!=typeof s)throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. "'+(null===s?"null":typeof s)+'" was specified.');if(!u&&"number"!=typeof n)throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. "'+(null===n?"null":typeof n)+'" was specified.')},W=function(e,t,r){var o=e.itemSize,n=r.itemMetadataMap,i=r.lastMeasuredIndex;if(t>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=t;s++){var c=o(s);n[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=t}return n[t]},E=function(e,t,r,o,n){for(;o<=r;){var i=o+Math.floor((r-o)/2),a=W(e,i,t).offset;if(a===n)return i;a<n?o=i+1:a>n&&(r=i-1)}return o>0?o-1:0},A=function(e,t,r,o){for(var n=e.itemCount,i=1;r<n&&W(e,r,t).offset<o;)r+=i,i*=2;return E(e,t,Math.min(r,n-1),Math.floor(r/2),o)},F=function(e,t){var r=e.itemCount,o=t.itemMetadataMap,n=t.estimatedItemSize,i=t.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},k=O({getItemOffset:function(e,t,r){return W(e,t,r).offset},getItemSize:function(e,t,r){return r.itemMetadataMap[t].size},getEstimatedTotalSize:F,getOffsetForIndexAndAlignment:function(e,t,r,o,n){var i=e.direction,a=e.height,l=e.layout,s=e.width,c="horizontal"===i||"horizontal"===l?s:a,u=W(e,t,n),d=F(e,n),f=Math.max(0,Math.min(d-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===r&&(r=o>=h-c&&o<=f+c?"auto":"center"),r){case"start":return f;case"end":return h;case"center":return Math.round(h+(f-h)/2);case"auto":default:return o>=h&&o<=f?o:o<h?h:f}},getStartIndexForOffset:function(e,t,r){return function(e,t,r){var o=t.itemMetadataMap,n=t.lastMeasuredIndex;return(n>0?o[n].offset:0)>=r?E(e,t,n,0,r):A(e,t,Math.max(0,n),r)}(e,r,t)},getStopIndexForStartIndex:function(e,t,r,o){for(var n=e.direction,i=e.height,a=e.itemCount,l=e.layout,s=e.width,c="horizontal"===n||"horizontal"===l?s:i,u=W(e,t,o),d=r+c,f=u.offset+u.size,h=t;h<a-1&&f<d;)h++,f+=W(e,h,o).size;return h},initInstanceProps:function(e,t){var r={itemMetadataMap:{},estimatedItemSize:e.estimatedItemSize||50,lastMeasuredIndex:-1};return t.resetAfterIndex=function(e,o){void 0===o&&(o=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,e-1),t._getItemStyleCache(-1),o&&t.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){var t=e.itemSize;if("function"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a function. "'+(null===t?"null":typeof t)+'" was specified.')}}),D=g({getColumnOffset:function(e,t){return t*e.columnWidth},getColumnWidth:function(e,t){return e.columnWidth},getRowOffset:function(e,t){return t*e.rowHeight},getRowHeight:function(e,t){return e.rowHeight},getEstimatedTotalHeight:function(e){var t=e.rowCount;return e.rowHeight*t},getEstimatedTotalWidth:function(e){var t=e.columnCount;return e.columnWidth*t},getOffsetForColumnAndAlignment:function(e,t,r,o,n,i){var a=e.columnCount,l=e.columnWidth,s=e.width,c=Math.max(0,a*l-s),u=Math.min(c,t*l),d=Math.max(0,t*l-s+i+l);switch("smart"===r&&(r=o>=d-s&&o<=u+s?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(s/2)?0:f>c+Math.floor(s/2)?c:f;case"auto":default:return o>=d&&o<=u?o:d>u||o<d?d:u}},getOffsetForRowAndAlignment:function(e,t,r,o,n,i){var a=e.rowHeight,l=e.height,s=e.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,t*a),d=Math.max(0,t*a-l+i+a);switch("smart"===r&&(r=o>=d-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return d;case"center":var f=Math.round(d+(u-d)/2);return f<Math.ceil(l/2)?0:f>c+Math.floor(l/2)?c:f;case"auto":default:return o>=d&&o<=u?o:d>u||o<d?d:u}},getColumnStartIndexForOffset:function(e,t){var r=e.columnWidth,o=e.columnCount;return Math.max(0,Math.min(o-1,Math.floor(t/r)))},getColumnStopIndexForStartIndex:function(e,t,r){var o=e.columnWidth,n=e.columnCount,i=e.width,a=t*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,t+l-1))},getRowStartIndexForOffset:function(e,t){var r=e.rowHeight,o=e.rowCount;return Math.max(0,Math.min(o-1,Math.floor(t/r)))},getRowStopIndexForStartIndex:function(e,t,r){var o=e.rowHeight,n=e.rowCount,i=e.height,a=t*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,t+l-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.columnWidth,r=e.rowHeight;if("number"!=typeof t)throw Error('An invalid "columnWidth" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.');if("number"!=typeof r)throw Error('An invalid "rowHeight" prop has been specified. Value should be a number. "'+(null===r?"null":typeof r)+'" was specified.')}}),L=O({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,o){var n=e.direction,i=e.height,a=e.itemCount,l=e.itemSize,s=e.layout,c=e.width,u="horizontal"===n||"horizontal"===s?c:i,d=Math.max(0,a*l-u),f=Math.min(d,t*l),h=Math.max(0,t*l-u+l);switch("smart"===r&&(r=o>=h-u&&o<=f+u?"auto":"center"),r){case"start":return f;case"end":return h;case"center":var p=Math.round(h+(f-h)/2);return p<Math.ceil(u/2)?0:p>d+Math.floor(u/2)?d:p;case"auto":default:return o>=h&&o<=f?o:o<h?h:f}},getStartIndexForOffset:function(e,t){var r=e.itemCount,o=e.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/o)))},getStopIndexForStartIndex:function(e,t,r){var o=e.direction,n=e.height,i=e.itemCount,a=e.itemSize,l=e.layout,s=e.width,c=t*a,u="horizontal"===o||"horizontal"===l?s:n,d=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){var t=e.itemSize;if("number"!=typeof t)throw Error('An invalid "itemSize" prop has been specified. Value should be a number. "'+(null===t?"null":typeof t)+'" was specified.')}});function H(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}function U(e,t){for(var r in e)if(!(r in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}function V(e,t){var r=e.style,o=H(e,["style"]),n=t.style,i=H(t,["style"]);return!U(r,n)&&!U(o,i)}e.FixedSizeGrid=D,e.FixedSizeList=L,e.VariableSizeGrid=b,e.VariableSizeList=k,e.areEqual=V,e.shouldComponentUpdate=function(e,t){return!V(this.props,e)||U(this.state,t)},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index-dev.umd.js.map
