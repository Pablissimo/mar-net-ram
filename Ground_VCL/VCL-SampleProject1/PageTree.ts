import V = require("VCL/VCL");

export class PageTree extends V.TPage {
    constructor() {
        super();

        var tree = new V.TTree(this, "tree");
        tree.onChanged = () => {
            if (!tree.SelectedNode) return;

            prd.params.clear();
            prd.createParam(tree.SelectedNode.Value);
            prd.open();
        };



        var q = new V.TQuery(this, 'select TOP 20 firstname,lastname,education,ID from customers');
        q.open();

        var prd = new V.TQuery(this, 'select top 5 ProductName,SalesAmount from CustomerProducts where CustomerID=?');
        var pie = new V.TDBChartDonut(this, "pie");
        pie.Dataset = prd;
        pie.LabelField = "ProductName";
        pie.ValueField = "SalesAmount";
        pie.Height = 400;

                
        q.onAfterOpen = () => {
            var cnt = 0;
            var firstCell;
            tree.items.BeginUpdate();
            q.forEach(() => {
                //find parent
                var parentItem = null;
                tree.items.forEach((item)=> {
                    if (!item.ParentNode && item.Value == q.getFieldValue('education')) {
                        parentItem = item;
                        return false;
                    }
                });
                cnt++;
                if (!parentItem) parentItem = tree.createNode(null, q.getFieldValue('education'), q.getFieldValue('education'));
                var custName: string = q.getFieldValue('firstName') + " " + q.getFieldValue('lastName')+"("+cnt+")";
                var cell = tree.createNode(parentItem, q.getFieldValue('ID'), custName);
                if (!firstCell) firstCell = cell;
            });
            tree.items.EndUpdate();
            tree.draw(true);
            tree.SelectedNode = firstCell;
        }
        
    }

}


