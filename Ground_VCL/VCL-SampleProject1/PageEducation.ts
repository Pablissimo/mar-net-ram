import V = require("VCL/VCL");

/*******
* this is an example for modal window that will show a pie chart
*/ 
export class PageEducation extends V.TModal {
    constructor(education : string) {
        super();

        
        var closeBtn: V.TButton = new V.TButton(this, "closeBtn", "Close");
        closeBtn.ButtonStyle = V.ButtonStyle.Primary;
        closeBtn.onClicked = () => {
            this.close();
        }        

        //setup the header of the modal
        var captionText = new V.TText(this, "captionText", "Top 5 Product for :" + education);
        captionText.TextStyle = V.TextStyle.h3

        //this is a safer way to execute a query, the query is located in the file \config\queries.json
        var educationSalesQur = new V.TQueryRemote(this);
        educationSalesQur.ShowProgressBar = false;
        educationSalesQur.QueryID = "top4Education";
        educationSalesQur.createParam(education);
        educationSalesQur.open();

        var pie = new V.TDBChartDonut(this, "pie");
        pie.Dataset = educationSalesQur;
        pie.LabelField = "ProductName";
        pie.ValueField = "salesAmount";
        pie.Height = 300;


    }
}