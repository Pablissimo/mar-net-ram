import V = require("VCL/VCL");

export class PageComponents extends V.TPage {
    private gauge: V.TGauge;
    constructor() {
        super();

        //create buttons example
        var btn = new V.TButton(this, "btnMini");
        btn.Text = "Mini/Danger";
        btn.ButtonSize = V.ButtonSize.Mini;
        btn.ButtonStyle = V.ButtonStyle.Danger;
        btn.onClicked = () => { this.changeGaugeValue(); };

        var btn = new V.TButton(this, "btnSmall");
        btn.Text = "Small/Info";
        btn.ButtonSize = V.ButtonSize.Small;
        btn.ButtonStyle = V.ButtonStyle.Info;
        btn.onClicked = () => { this.changeGaugeValue(); };


        var btn = new V.TButton(this, "btnDef");
        btn.Text = "Default/Default";
        btn.ButtonSize = V.ButtonSize.Default;
        btn.ButtonStyle = V.ButtonStyle.Default;
        btn.onClicked = () => { this.changeGaugeValue();};


        var btn = new V.TButton(this, "btnLarge");
        btn.Text = "Large/Primary";
        btn.ButtonSize = V.ButtonSize.Large;
        btn.ButtonStyle = V.ButtonStyle.Primary;
        btn.onClicked = () => { this.changeGaugeValue(); };


        //create text
        var txt = new V.TText(this,'txt1',"Sample Text-H1");
        txt.TextStyle = V.TextStyle.h1;
        txt.TextColor = "#440000";

        var txt = new V.TText(this, 'txt2', "Sample Text-H2");
        txt.TextStyle = V.TextStyle.h2;
        txt.MarginLeft = 15;
        txt.TextColor = "#b70000";

        var txt = new V.TText(this, 'txt3', "Sample Text-H3");
        txt.TextStyle = V.TextStyle.h3;
        txt.MarginLeft = 15;
        txt.TextColor = "#ff4980";

        var txt = new V.TText(this, 'txt4', "Sample Text-H4");
        txt.TextStyle = V.TextStyle.h4;
        txt.MarginLeft = 15;
        txt.TextColor = "#ff0000";

        var txt = new V.TText(this, 'txtl', "Sample Text-Lead");
        txt.TextStyle = V.TextStyle.lead;
        txt.MarginLeft = 15;
        txt.TextColor = "#800080";

        var txt = new V.TText(this, 'txts', "Sample Text-Small");
        txt.TextStyle = V.TextStyle.small;
        txt.MarginLeft = 15 ;
        txt.TextColor = "#0d7074";


        //notificiation
        var btn = new V.TButton(this, "NotifyBtn");
        btn.ButtonStyle = V.ButtonStyle.Primary;
        btn.Text = "Raise Notification";
        btn.onClicked = () => {
            var notf = new V.TNotification(this);
            notf.AlertStyle = V.AlertStyle.Info;
            notf.Text = "Houston we have a problem</br>Please check again"; 
            notf.show();
        }
        var btn = new V.TButton(this, "alertBtn");
        btn.ButtonStyle = V.ButtonStyle.Primary;
        btn.Text = "Raise Alert";
        btn.onClicked = () => {
            alert.Visible = true;
        }

        var alert = new V.TAlert(this, "alert");
        alert.Text = "Houston we have a problem</br >Try again"
        alert.Visible = false;


        //images 
        var img = new V.TImage(this, "Img");
        img.Url = 'Assets/castle.jpg';
        img.Width = 200;
        img.Height = 200;

        //icons
        var icn = new V.TIcon(this, "icon1");
        icn.Icon = V.Icon.icon_android;
        icn.Size = 2;

        var icn = new V.TIcon(this, "icon2");
        icn.Icon = V.Icon.icon_ambulance;
        icn.Size = 3;

        var icn = new V.TIcon(this, "icon3");
        icn.Icon = V.Icon.icon_apple;
        icn.Color = "#b70000"
        icn.Size = 4;

        var icn = new V.TIcon(this, "icon4");
        icn.Icon = V.Icon.icon_briefcase;
        icn.Size = 5;

        //gauge
        this.gauge = new V.TGauge(this, "gug");
        this.gauge.Width = 200;
        this.gauge.Height = 200;
        this.gauge.Value = 94;

        //sparks
        var sprk1 = new V.TSparkBar(this, "sprk1");
        sprk1.Width = 70;
        for (var i = 0; i < 20; i++) sprk1.createValue(25 + Math.random() * 15);

        var sprk2 = new V.TSparkPie(this, "sprk2");
        sprk2.Width = 70;
        for (var i = 0; i < 8; i++) sprk2.createValue(25 + Math.random() * 15);

        var sprk3 = new V.TSparkLine(this, "sprk3");
        sprk3.Width = 70;
        for (var i = 0; i < 20; i++) sprk3.createValue(25 + Math.random() * 15);


    }


    private changeGaugeValue() {
        this.gauge.Value = Math.random() * 100;
    }

}


