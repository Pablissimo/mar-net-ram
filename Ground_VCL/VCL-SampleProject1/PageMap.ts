import V = require("VCL/VCL");

export class PageMap extends V.TPage {
    constructor() {
        super();

        var myMap = new V.TGoogleMap(this, 'map');
        myMap.Height = 600;

        var q = new V.TQuery(this, 'select firstname,lastname,addressline1 from customers');
        q.open();
        q.onAfterOpen = () => {
            q.forEach(() => {
                var address :string = q.getFieldValue('addressLine1');
                var marker = myMap.createMarkerFromAddress(address + ",CA,USA");
                marker.Title = q.getFieldValue('FirstName');

            });
        }
    }

}


