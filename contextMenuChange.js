(function () {
//  ~site/SiteAssets/ContextmenuChange.js - if you put it on the same site in Site Assets
//  Initialize the variables for overrides objects

    var overrideCtx = {};
    overrideCtx.Templates = {};

  //alert("Override call worked");

    overrideCtx.Templates.OnPreRender = csrMenuAvail; 

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

function csrMenuAvail(ctx) {
//  Specifying which column you are adding the ellipsis to based on the displayed field name. 
//  As written this will work across multiple web parts on the same page

    var numColumns = ctx.ListSchema.Field.length;
    var columnArr = ctx.ListSchema.Field;
    for (var i = 0; i < numColumns; i++)
    {
	//  console.log(columnArr[i].RealFieldName);
        if (columnArr[i].RealFieldName == "Order_x0020_Number")  //internal field name
        {
            columnArr[i].listItemMenu = "True"; 
        }

		if (columnArr[i].RealFieldName == "Title")  //internal field name
        {
            columnArr[i].listItemMenu = "False";
        }
    }

}