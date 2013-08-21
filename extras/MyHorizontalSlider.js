// dojo/_base/declare and dijit/form/HorizontalSlider are loaded from CDN
define([ "dojo/_base/declare", "dijit/form/HorizontalSlider","dojo/dom"], function(declare, HorizontalSlider, dom){
	// declare a custom class or clobber an existing one
	// http://dojotoolkit.org/reference-guide/1.9/dijit/form/HorizontalSlider.html
	return dojo.declare(dijit.form.HorizontalSlider, {
		name: "slider",
		pageNode : "", // Node in document where the onChange results will get displayed.
        value: 5,
        minimum: -10,
        maximum: 10,
        intermediateChanges: true,
        style: "width:300px;",
        onChange: function(value){
            dom.byId(this.pageNode).innerHTML = value;
        },
        someFunction : function (rain, snow) {
        	//your logic here
        }
	});
});