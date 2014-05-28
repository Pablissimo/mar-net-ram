import V = require("VCL/VCL");


export class Widget extends V.TWidgetPanel {
    constructor(owner : V.TWidgetGrid,image : string) {
        super(owner, null, 3, 3, "Drag me");
        //draw a random chart
        var chrt = new V.TChartLine(this, "chrt");

        chrt.LineWidth = 3;
        chrt.YMin = null;
        var val = 25;
        var factor = 1;
        if (Math.random() < 0.5) factor = -1; 
        for (var i = 0; i < 12; i++) {
            val += factor * (Math.random() * 3 + Math.random() * 3 + Math.random() * 3);
            if (Math.random() < 0.1) factor = -factor;
            chrt.createValue(new Date(2012, i, 1), val);
        }

        this.HeaderStyle = V.HeaderStyle.Primary;
        this.BorderWidth = 1;
        this.BackgroundImageURL = "Assets/" + image + ".jpg";
        owner.addWidget(this);
    }

}


