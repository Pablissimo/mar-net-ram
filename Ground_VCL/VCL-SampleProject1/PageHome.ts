import V = require("VCL/VCL");
import PED = require("PageEducation");
/* this is example of enterprise analytic app
   for the demo purpose it use jet database located on app_data/sample.mdb
*/

//Pagehome is the main page of the application its inherited from TPage
//BTW all components start with V.Txxxxxxx
export class PageHome extends V.TPage {
    private topProductsQur: V.TQuery;
    private customerDetQur: V.TQuery;
    private customerSalesQur: V.TQuery;
    //please check out the PageHome.html for the bootstrap layout of this page
    constructor() {
        super();

        //this is the fastest way to run a query,it's unsafe (SQL injection) but fine for unsecured application
        //TQuery run a SQL query on the backend and return a recordset
        //you can bind any TDBxxxx component to dataset component (TQuery,TQueryRemote,TDataset etc)
        var customerQur: V.TQuery = new V.TQuery(this, "select id,firstname,lastName,BirthDate,Education from customers");
        customerQur.onAfterOpen = () => { this.selectCurrentCustomer(customerQur.getFieldValue("ID")); }
        customerQur.open();//Query is running in async mode

        //query the example database for the top most selling products
        this.topProductsQur = new V.TQuery(this, "select top 10 ProductName,sum(SalesAmount) as SalesAmount from CustomerProducts where CustomerID=? group by ProductName ");
        this.customerDetQur = new V.TQuery(this, "Select FirstName,LastName,BirthDate,Phone from Customers where ID=?");
        this.customerSalesQur = new V.TQuery(this, "Select Sum(SalesAmount)  as SalesAmount, OrderDate from orders where CustomerID=? group by OrderDate");

        //On to top half on the screen we will have a grid binded to customerQur
        //The parameters for component constructing is the owner(usually container component) and the id of the object in the html file
        var grid = new V.TDBGrid(this, "dbgrid");
        grid.Dataset = customerQur;//bind the grid to the dataset
        grid.ShowSelectedRecord = true;
        grid.PageSize = 8;

        grid.onRowClicked = () => {
            var customerID = customerQur.getFieldValue("ID");
            this.selectCurrentCustomer(customerID);
        }

        //create a columns for the grid
        var col = grid.createColumn("firstname", "First Name");
        grid.createColumn("lastName", "Last Name");

        grid.createColumn("BirthDate", "BirthDate");
        col = grid.createColumn("Education");
        col.onClicked = () => {
            var customerID = customerQur.getFieldValue("ID");
            this.selectCurrentCustomer(customerID);
            var frmEducation = V.Application.createPage(PED.PageEducation, [customerQur.getFieldValue("Education")]);
            frmEducation.showModal();
        };


        /////////////////////////////////////////////////////
        //set up the panel with the bar inside
        //////////////////////////////////////////////////////

        //please notice the the barchar owner is the productspanel component
        var productsPanel = new V.TPanel(this, "ProductsPanel");
        productsPanel.HeaderText = "Top Products";
        productsPanel.HeaderStyle = V.HeaderStyle.Primary;// use bootstrap semantic for styling

        var barchart = new V.TDBChartBar(this, "barchart");
        barchart.Height = 317;//set the height of component in pixels
        barchart.Dataset = this.topProductsQur;
        barchart.LabelField = "ProductName";
        barchart.ValueField1 = "SalesAmount";
        //barchart.TitleY = "Sales Amount";
        barchart.FitToWidth = true;


        ///////////////////////////////////////////////////////
        //set up the panel with the customer information
        //////////////////////////////////////////////////////
        var infoPanel = new V.TPanel(this, "infoPanel");
        infoPanel.HeaderText = "Customer Details";
        infoPanel.HeaderStyle = V.HeaderStyle.Primary;// use bootstrap semantic for styling

        var firstnameEdit = new V.TDBInput(infoPanel, "firstName");
        firstnameEdit.DataField = "FirstName";
        firstnameEdit.Dataset = this.customerDetQur;
        firstnameEdit.Enabled = false;
        firstnameEdit.LabelVisible = true;
        firstnameEdit.LabelPosition = V.LabelPosition.Left;
        firstnameEdit.LabelText = "First Name"
        firstnameEdit.FitToWidth = true;// the component will take the whole width of the parent panel

        var lastNameEdit = new V.TDBInput(infoPanel, "lastName");
        lastNameEdit.DataField = "lastName";
        lastNameEdit.Dataset = this.customerDetQur;
        lastNameEdit.Enabled = false;
        lastNameEdit.LabelVisible = true;
        lastNameEdit.LabelText = "Last Name";
        lastNameEdit.LabelPosition = V.LabelPosition.Left;
        lastNameEdit.FitToWidth = true;

        var phoneEdit = new V.TDBInput(infoPanel, "phone");
        phoneEdit.DataField = "phone";
        phoneEdit.Dataset = this.customerDetQur;
        phoneEdit.Enabled = false;
        phoneEdit.LabelVisible = true;
        phoneEdit.LabelText = "Phone Number";
        phoneEdit.LabelPosition = V.LabelPosition.Left;
        phoneEdit.FitToWidth = true;// the component will take the whole width of the parent panel


        /////////////////////////////////////////////////
        //create another panel
        ////////////////////////////////////////////////
        var salesPanel = new V.TPanel(this, "SalesInfo");
        salesPanel.HeaderText = "Sales Details";
        salesPanel.HeaderStyle = V.HeaderStyle.Primary;// use bootstrap semantic for styling

        var salesChart = new V.TDBChartLine(salesPanel, "salesChart");
        salesChart.TitleY = "Sales Amount";
        salesChart.Height = 150;//set the height of component in pixels
        salesChart.Dataset = this.customerSalesQur;
        salesChart.DateField = "OrderDate";
        salesChart.ValueField1 = "SalesAmount";
        salesChart.FitToWidth = true;



        ///////////////////////////////////////////////////////
        //Provide the functionality of search input box
        //////////////////////////////////////////////////////
        var searchInput = new V.TInput(this, "searchInput");
        searchInput.LabelText = "Search Customer";
        searchInput.LabelVisible = true;
        searchInput.onChanged = () => { //text was changed
            var inputTxt = searchInput.Text.trim().toLocaleLowerCase();
            //this method filter the recored set of the query dataset
            customerQur.applyFilter(() => {
                if (inputTxt == "") return true;
                if (customerQur.getFieldValue("FirstName").toLowerCase().indexOf(inputTxt) >= 0) return true;
                if (customerQur.getFieldValue("LastName").toLowerCase().indexOf(inputTxt) >= 0) return true;
                return false;
            });
        }


        //example of alert
        var alert = new V.TAlert(this, "alert");
        alert.Text = "Houston we have a problem</br>Please check again";
        alert.Visible = false;

        var btnAlert = new V.TButton(this, "btnAlert");
        btnAlert.Text = "Show Alert";
        btnAlert.onClicked = () => {
            alert.Visible = !alert.Visible;
            btnAlert.Text = alert.Visible ? "Hide Alert" : "Show Alert";
        }
    }



    //refresh the detailed datasets based on the slected customers
    private selectCurrentCustomer(customerID: number) {

        //this is the way to pass paramaters to the query
        this.topProductsQur.params.clear();
        this.topProductsQur.createParam(customerID);
        this.topProductsQur.open();

        this.customerDetQur.params.clear();
        this.customerDetQur.createParam(customerID);
        this.customerDetQur.open();

        this.customerSalesQur.params.clear();
        this.customerSalesQur.createParam(customerID);
        this.customerSalesQur.open();
    }

}


