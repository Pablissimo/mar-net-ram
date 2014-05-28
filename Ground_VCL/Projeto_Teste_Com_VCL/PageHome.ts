import V = require("VCL/VCL");

export class PageHome extends V.TPage {
    constructor() {
        super();
        //add components here
        var inpObj = new V.TInput(this, "inp");
        inpObj.Text = "Show Value";

        var inpd = new V.TInputDate(this, "inpd");
        inpd.DateFormat = "dd/mm/yy";
        inpd.Date = new Date();

        var inpcmb = new V.TCombobox(this, "comb");
        inpcmb.ComboStyle = V.ComboStyle.Danger;
        inpcmb.createItem("1", "Michael C. Hall");
        inpcmb.createItem("2", "Jennifer Carpenter");
        inpcmb.createItem("3", "David Zayas");
        inpcmb.createItem("4", "James Remar");
        inpcmb.createItem("5", "Julie Benz");
        inpcmb.createItem("6", "Desmond Harrington");
        inpcmb.MultipleSelect = true;
        inpcmb.onChanged = () => {
            inpObj.Text = inpcmb.SelectedItems.length + " Was Selected";
        }
    }
}


