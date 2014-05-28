
import V = require('VCL/VCL');
//create text object

export class Page extends V.TPage {
    constructor() {
        super();
        var txt = new V.TText(this, "txt", "Text Component");

        //create a badge and set badge style
        var bdg = new V.TBadge(this, "bdg", "Badge Component");
        bdg.BadgeStyle = V.BadgeStyle.Important;

        //create a labelwith onClicked event
        var lbl = new V.TLabel(this, "lbl", "Label Component");
        lbl.LabelStyle = V.LabelStyle.Success;
        lbl.onClicked = () => {
            txt.Text = "Clicked!";
        }
    }
}