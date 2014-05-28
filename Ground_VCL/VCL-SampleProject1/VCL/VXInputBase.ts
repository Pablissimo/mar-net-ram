import VXC = require("VCL/VXComponent");
import V = require("VCL/VCL");
import VXU = require("VCL/VXUtils");

export class TEditorBase extends VXC.TComponent {
    private _labelVisible: boolean = false;
    public get LabelVisible(): boolean {
        return this._labelVisible;
    }
    public set LabelVisible(val: boolean) {
        if (val != this._labelVisible) {
            this._labelVisible = val;
            this.drawDelayed(true);
        }
    }

    private _labetextcolor: string;
    public get LabelTextColor(): string {
        return this._labetextcolor;
    }
    public set LabelTextColor(val: string) {
        var isOk = /^#[0-9A-F]{6}$/i.test(val);
        if (!isOk) V.Application.raiseException("'" + val + "' is not valid hex color string");
        else {

            if (val != this._labetextcolor) {
                this._labetextcolor = val;
                this.drawDelayed(true);
            }
        }
    }

    private _tabindex: number;
    public get TabIndex(): number {
        return this._tabindex;
    }
    public set TabIndex(val: number) {
        if (val != this._tabindex) {
            this._tabindex = val;
            this.drawDelayed(true);
        }
    }

    private _labeltext: string = "";
    public get LabelText(): string {
        return this._labeltext;
    }
    public set LabelText(val: string) {
        if (val != this._labeltext) {
            this._labeltext = val;
            this.LabelVisible = true;
            this.drawDelayed(true);
        }
    }
    private _labelposition: V.LabelPosition = V.LabelPosition.TopLeft;
    public get LabelPosition(): V.LabelPosition {
        return this._labelposition;
    }
    public set LabelPosition(val: V.LabelPosition) {
        if (val != this._labelposition) {
            this._labelposition = val;
            this.drawDelayed(true);
        }
    }

    public setFocus() {
        if (this.jEdit) this.jEdit.focus();
    }


    public onKeyUp: (keyCode: number) => void; 
    public onChanged: (sender: TEditorBase) => void;

    public jLabel: JQuery;
    public jEdit: JQuery;
    public create() {
        if (this.LabelVisible) {
            this.jLabel = $('<label/>');
            this.jLabel.addClass('control-label');
            this.jLabel.attr('for', this.jEdit.attr('id'));
            this.jLabel.text(this.LabelText);
            if (this.LabelTextColor) this.jComponent.css('color', this.LabelTextColor);
            if (this.LabelPosition == V.LabelPosition.TopLeft) {
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.TopCenter) {
                this.jLabel.addClass('text-center');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.TopRight) {
                this.jLabel.addClass('text-right');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.BottomLeft) {
                this.jComponent.append(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.Right) {
                this.jLabel.addClass('pull-right');
                this.jLabel.css('padding-top', '5px');
                this.jLabel.css('padding-left', '5px');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.Left) {
                this.jLabel.addClass('pull-left');
                this.jLabel.css('padding-top', '5px');
                this.jLabel.css('padding-right', '5px');
                this.jComponent.prepend(this.jLabel)
            } else if (this.LabelPosition == V.LabelPosition.BottomCenter) {
                this.jLabel.addClass('text-center');
                this.jComponent.append(this.jLabel);
            } else if (this.LabelPosition == V.LabelPosition.BottomRight) {
                this.jLabel.addClass('text-right');
                this.jComponent.append(this.jLabel);
            }
        }

        super.create();
    }
}

export class TInputBase extends TEditorBase {
    private _maxlength: number;
    public get MaxLength(): number {
        return this._maxlength;
    }
    public set MaxLength(val: number) {
        if (val != this._maxlength) {
            this._maxlength = Math.floor(val);
            if (this._maxlength < 0) this._maxlength = 0;
            this.drawDelayed(true);
        }
    }

    private _rtl: boolean = false;
    public get Rtl(): boolean {
        return this._rtl;
    }
    public set Rtl(val: boolean) {
        if (val != this._rtl) {
            this._rtl = val;
            this.drawDelayed(true);
        }
    }

    public canEdit() {
        return true;
    }

    /**
    * Occurs when the user hit the button component.
    */
    public onButtonClicked: () => void;
    /**
    * Occurs when the text for the edit component may have changed.
    */
    private jBtn: JQuery;
    private jImage: JQuery;
    private jbtnText: JQuery;
    private jinternalSpan: JQuery;

    public create() {
        this.jComponent.empty();
        this.jComponent = VXU.VXUtils.changeJComponentType(this.jComponent, 'div', this.FitToWidth, this.FitToHeight);
        this.jComponent.addClass('input-append control-group');

        //this.jinternalSpan = $("<span>").css('display', 'block').css('overflow', 'hidden').css('padding-right', '15px').css('width', '100%');
        this.jinternalSpan = $("<span>").css('display', 'block').css('overflow', 'hidden').css('padding-right', '15px');
        if ((<any>this).textarea) {
            this.jEdit = $('<textarea/>').attr('rows', (<V.TTextArea>this).Rows).css('resize','none');
            if ((<V.TTextArea>this).Wrap) this.jEdit.attr('Wrap', 'Wrap');

        } else {
            this.jEdit = $('<input/>');
            if (this.TabIndex) this.jEdit.attr('tabindex', this.TabIndex);
        }

        this.jEdit.attr("type", 'text').attr('id', V.Application.genGUID()).css('width', '100%');
        if ((<any>this)._readonly) this.jEdit.attr("readonly", "readonly");

        if (this.ButtonClickOnEnter) {
            this.jEdit.keydown((eventObject: JQueryKeyEventObject) => {
            })
        };
        this.jImage = $('<i/>');
        this.jbtnText = $('<span/>');

        if (!this.Enabled || ((<any>this).isEditable && !(<any>this).isEditable())) this.jEdit.attr("disabled", "disabled");
        if (this.Password) this.jEdit.attr("type", "Password");
        if (this.TextAlgnment == V.TextAlignment.Left) this.jEdit.css('text-align', 'left');
        if (this.TextAlgnment == V.TextAlignment.Right) this.jEdit.css('text-align', 'right');
        if (this.TextAlgnment == V.TextAlignment.Center) this.jEdit.css('text-align', 'center');
        if (this.MaxLength > 0) this.jEdit.attr("maxlength", this.MaxLength);
        if (this.Placeholder != null) this.jEdit.attr("placeholder", this.Placeholder);
        if (this.Rtl == true) this.jEdit.attr("dir", "RTL");
        this.jinternalSpan.append(this.jEdit);
       

        if (this.ButtonVisible) {
            this.jBtn = $('<button/>').attr('tab-index','-1').css('outline','none');
            this.jBtn.addClass('btn');
            this.jBtn.attr('type', "button").css('float','right');
            switch (this.ButtonStyle) {
                case V.ButtonStyle.Default: break;
                case V.ButtonStyle.Primary: this.jBtn.addClass("btn-primary"); break;
                case V.ButtonStyle.Info: this.jBtn.addClass("btn-info"); break;
                case V.ButtonStyle.Success: this.jBtn.addClass("btn-success"); break;
                case V.ButtonStyle.Warning: this.jBtn.addClass("btn-warning"); break;
                case V.ButtonStyle.Danger: this.jBtn.addClass("btn-danger"); break;
                case V.ButtonStyle.Link: this.jBtn.addClass("btn-link"); break;
            }

            if (this.ButtonIcon != null) {
                this.jImage.addClass(V.iconEnumToBootstrapStyle(this.ButtonIcon));
                this.jImage.appendTo(this.jBtn);
                if (this.ButtonText != "") this.jImage.css('margin-right', '6px');
                this.jbtnText.text(this.ButtonText);
            } else if (this.ButtonText == "") this.jbtnText.text(".");
            else this.jbtnText.text(this.ButtonText);

            if (!this.Enabled) this.jBtn.addClass("disabled");
            this.jbtnText.appendTo(this.jBtn);

            this.jBtn.off("click").click(() => { if (this.onButtonClicked != null) (V.tryAndCatch(() => { this.onButtonClicked(); })); return false; });
            this.jComponent.append(this.jBtn)
        }
        this.jComponent.append(this.jinternalSpan)

        super.create();
    }

    private _textaligment: V.TextAlignment = V.TextAlignment.Left;
    public get TextAlgnment(): V.TextAlignment {
        return this._textaligment;
    }
    public set TextAlgnment(val: V.TextAlignment) {
        if (val != this._textaligment) {
            this._textaligment = val;
            this.drawDelayed(true);
        }
    }


    private _placeholder: string;
    public get Placeholder(): string {
        return this._placeholder;
    }
    public set Placeholder(val: string) {
        if (val != this._placeholder) {
            this._placeholder = val;
            this.drawDelayed(true);
        }
    }


    private _password: boolean;
    public get Password(): boolean {
        return this._password;
    }
    public set Password(val: boolean) {
        if (val != this._password) {
            this._password = val;
            this.drawDelayed(true);
        }
    }

    private _buttonclickonenter: boolean = null;
    public get ButtonClickOnEnter(): boolean {
        return this._buttonclickonenter;
    }
    public set ButtonClickOnEnter(val: boolean) {
        if (val != this._buttonclickonenter) {
            this._buttonclickonenter = val;
            this.drawDelayed(true);
        }
    }


    private _buttonicon: V.ButtonIcon = null;
    public get ButtonIcon(): V.ButtonIcon {
        return this._buttonicon;
    }
    public set ButtonIcon(val: V.ButtonIcon) {
        if (val != this._buttonicon) {
            this._buttonicon = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }

    private _buttonstyle: V.ButtonStyle = V.ButtonStyle.Default;
    public get ButtonStyle(): V.ButtonStyle {
        return this._buttonstyle;
    }
    public set ButtonStyle(val: V.ButtonStyle) {
        if (val != this._buttonstyle) {
            this._buttonstyle = val;
            this.drawDelayed(true);
        }
    }

    private _buttonVisible: boolean = false;
    public get ButtonVisible(): boolean {
        return this._buttonVisible;
    }
    public set ButtonVisible(val: boolean) {
        if (val != this._buttonVisible) {
            this._buttonVisible = val;
            this.drawDelayed(true);
        }
    }

    private _buttontext: string = "";
    public get ButtonText(): string {
        if (this._buttontext == null) return "";
        return this._buttontext;
    }
    public set ButtonText(val: string) {
        if (val != this._buttontext) {
            this._buttontext = val;
            this.ButtonVisible = true;
            this.drawDelayed(true);
        }
    }


}