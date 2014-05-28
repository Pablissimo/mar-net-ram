import V = require("VCL/VCL");
import VXC = require("VCL/VXConst");

export class PageLogin extends V.TPage {
    constructor(originalURL : string) {
        super();

        var well = new V.TWell(this, "box");
        well.MarginTop = 50;

        //alert box
        var alert = new V.TAlert(well, "alert");
        alert.Visible = false;
        alert.AlertStyle = V.AlertStyle.Danger;
        
        var okbtn = new V.TButton(well, "okbtn");
        okbtn.Text = "Sign in";
        okbtn.MarginTop = 40;
        okbtn.FitToWidth = true;
        okbtn.ButtonStyle = V.ButtonStyle.Info;
        okbtn.onClicked = () => {
            alert.Visible = false;
            V.Application.login(usernameInput.Text, passInput.Text,
                () => {
                    //logged in
                    V.Application.Authenticated = true;
                    V.Application.navigateToURL(originalURL);

                    //persist the user name
                    V.Application.setLocalValue('username', usernameInput.Text);
                },
                (errorMsg : string) => {
                    //login faild
                    alert.Text = V.TConst._LOGINFAILD;
                    alert.Visible = true;
                }
                );
        }

        var usernameInput = new V.TInput(this, "userInput");
        usernameInput.LabelText = "Email Address";
        usernameInput.FitToWidth = true;
        usernameInput.LabelVisible = true;
        usernameInput.Text = V.Application.getLocalValue('username', '');
        var passInput = new V.TInput(this, "passInput");
        passInput.FitToWidth = true;   
        passInput.Password = true;
        passInput.LabelText = "Password";
        passInput.LabelVisible = true;

    }

}



