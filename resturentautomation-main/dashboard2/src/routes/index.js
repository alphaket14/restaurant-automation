import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import DocsLayout from "../layouts/docs";
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import ManageOrderNavbar from "../layouts/manage-order/ManageOrderNavbar";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import LoadingScreen from "../components/LoadingScreen";
//import { element } from "prop-types";
import RegisterWaiter from "src/pages/waiter_authentication/Register";
import LoginWaiter from "src/pages/waiter_authentication/Login";
import Waiteraccount from "src/pages/waiter/waiterAccount/WaiterAccount";
import Waitercode from "src/pages/waiter_authentication/waitercode/Waitercode";
//import WaiterAuthGuard from "src/guards/WaiterAuthGaurd";
//import waiterSection from "src/pages/waiter/waiterSection/waiterSection";
import WaiterSection from "src/pages/waiter/waiterSection/waiterSection";
import WaiterTables from "src/pages/waiter/waiterTables/waiterTables";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify", element: <VerifyCode /> },
      ],
    },
    //Manage Order Routes

    {
      path: "manageorder",
      children: [
        {
          path: "pos-invoice",
          element: (
            <AuthGuard>
              {/* <ManageOrderNavbar /> */}
              <PosInvoice />
            </AuthGuard>
          ),
        },
        {
          path: "table-view",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <TableView />
            </AuthGuard>
          ),
        },
        {
          path: "booked-table",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <BookedTabel />
            </AuthGuard>
          ),
        },
        {
          path: "payment-due",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <PaymentDue />
            </AuthGuard>
          ),
        },
        {
          path: "delivery-view",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <DeliveryView />
            </AuthGuard>
          ),
        },
        {
          path: "pickup-view",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <PickupView />
            </AuthGuard>
          ),
        },
        {
          path: "bar-panel",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <BarPanel />
            </AuthGuard>
          ),
        },
        {
          path: "kitchen-panel",
          element: (
            <AuthGuard>
              <ManageOrderNavbar />
              <KitchenPanel />
            </AuthGuard>
          ),
        },
        {
          path: "kitchen-view",
          element: (
            <AuthGuard>
              <KitchenView />
            </AuthGuard>
          ),
        },
        {
          path: "table-reservation",
          element: (
            <AuthGuard>
              <TableReservation />
            </AuthGuard>
          ),
        },
      ],
    },
    {
      path: "waiter",
      children: [
        {
          path: "waiterregister",
          element: <RegisterWaiter />,
        },
        {
          path: "waiteraccount",
          element: <Waiteraccount />,
        },
        {
          path: "waiterlogin",
          element: <LoginWaiter />,
        },
        {
          path: "waitersection",
          element: <WaiterSection />,
        },
        {
          path: "waitertables",
          element: <WaiterTables />,
        },
        {
          path: "Waitercode",
          element: <Waitercode />,
        },
        {
          path: "orders",
          element: (
            // <WaiterAuthGuard>
            <WaiterOrders />
            // </WaiterAuthGuard>
          ),
        },
        {
          path: "waitermenu",
          element: (
            // <WaiterAuthGuard>
            <WaiterMenu />
            // </WaiterAuthGuard>
          ),
        },
        {
          path: "waiterinvoice",
          element: (
            // <WaiterAuthGuard>
            <WaiterInvoice />
            // </WaiterAuthGuard>
          ),
        },
        {
          path: "view-order",
          element: (
            //<WaiterAuthGuard>
              <ViewOrder />
            //</WaiterAuthGuard>
          ),
        },
        {
          path: "reservations",
          element: (
            //<AuthGuard>
              <WaiterReservations />
            //</AuthGuard>
          ),
        },
        {
          path: "view-reservation",
          element: (
            //<AuthGuard>
              <ViewReservation />
            //</AuthGuard>
          ),
        },
        {
          path: "view-transaction",
          element: (
            //<AuthGuard>
              <Transaction />
            //</AuthGuard>
          ),
        },
        {
          path: "menu-page",
          element: (
            //<AuthGuard>
              <MenuPage />
            //</AuthGuard>
          ),
        },
        {
          path: "cancel-summary",
          element: (
            //<AuthGuard>
              <CancelSummary />
            //</AuthGuard>
          ),
        },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        // { path: '/', element: <Navigate to='/dashboard/app' replace /> },
        // { path: 'app', element: <GeneralApp /> },
        // { path: 'ecommerce', element: <GeneralEcommerce /> },
        // {
        //   path: 'analytics',
        //   element: <GeneralAnalytics />,
        // },
        // {
        //   path: 'e-commerce',
        //   children: [
        //     {
        //       path: '/',
        //       element: <Navigate to='/dashboard/e-commerce/shop' replace />,
        //     },
        //     { path: 'shop', element: <EcommerceShop /> },
        //     { path: 'product/:name', element: <EcommerceProductDetails /> },
        //     { path: 'list', element: <EcommerceProductList /> },
        //     { path: 'product/new', element: <EcommerceProductCreate /> },
        //     { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
        //     { path: 'checkout', element: <EcommerceCheckout /> },
        //     { path: 'invoice', element: <EcommerceInvoice /> },
        //   ],
        // },
        // {
        //   path: 'user',
        //   children: [
        //     {
        //       path: '/',
        //       element: <Navigate to='/dashboard/user/profile' replace />,
        //     },
        //     { path: 'profile', element: <UserProfile /> },
        //     { path: 'cards', element: <UserCards /> },
        //     { path: 'list', element: <UserList /> },
        //     { path: 'new', element: <UserCreate /> },
        //     { path: '/:name/edit', element: <UserCreate /> },
        //     { path: 'account', element: <UserAccount /> },
        //   ],
        // },
        {
          path: "outlet",
          children: [
            { path: "/", element: <DashboardOutlet /> },
            { path: "add-outlet", element: <AddOutlet /> },
          ],
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          path: "manage",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/manage/pos-invoice" replace />,
            },
            { path: "pos-invoice", element: <PosInvoice /> },
            { path: "order-list", element: <OrderList /> },
            { path: "pending-order", element: <PendingOrders /> },
            { path: "complete-order", element: <CompleteOrders /> },
            { path: "cancel-order", element: <CancelOrders /> },
            { path: "kitchen-dashboard", element: <BarPanel /> },
            { path: "counter-dashboard", element: <CounterDashboard /> },
            { path: "order-time", element: <OrderTimeManagement /> },
            { path: "delivery-time", element: <DeliveryTimeFrame /> },
            { path: "time-frames", element: <TimeFrames /> },
            { path: "refunded-orders", element: <RefundedOrders /> },
            { path: "counter-list", element: <CounterList /> },
            { path: "pos-setting", element: <PosSetting /> },
            { path: "sound-setting", element: <CounterList /> },
          ],
        },
        {
          path: "reservations",
          children: [
            {
              path: "/",
              element: (
                <Navigate to="/dashboard/reservations/allreservation" replace />
              ),
            },
            { path: "allreservation", element: <Allreservation /> },
            { path: "addbooking", element: <AddBooking /> },
            { path: "pending-reservations", element: <PendingReservations /> },
            {
              path: "accepted-reservations",
              element: <AcceptedReservations />,
            },
            {
              path: "rejected-reservations",
              element: <RejectedReservations />,
            },
            {
              path: "cancelled-reservations",
              element: <CancelledReservations />,
            },
            { path: "unavailableday", element: <Unavailableday /> },
            { path: "reservationsetting", element: <ReservationSetting /> },
            {
              path: "daywise-reservationsetting",
              element: <ReservationSettingDayWise />,
            },
            { path: "waiting-list", element: <WaitingList /> },

            { path: "managetable/tablelist", element: <TableList /> },
            {
              path: "managetable/tablesetting",
              element: <PaymentMethodList />,
            },
          ],
        },
        {
          path: "purchase",
          children: [
            { path: "purchaseitem", element: <PurchaseItem /> },
            { path: "addpurchase", element: <AddPurchase /> },
            { path: "purchasereturn", element: <PurchaseReturn /> },
            { path: "returninvoice", element: <ReturnInvoice /> },
            { path: "suppliermanage", element: <SupplierManage /> },
            { path: "supplierledger", element: <SupplierLedger /> },
            { path: "paymentledger", element: <PaymentLedger /> },
            {
              path: "supplieroutingredients",
              element: <StockOutIngredients />,
            },
          ],
        },
        {
          path: "customer",
          children: [
            { path: "add-customer", element: <AddCustomer /> },
            { path: "customerlist", element: <CustomerList /> },
            { path: "total-list", element: <TotalCustomerList /> },
            { path: "dine-in-list", element: <DineInCustomerList /> },
            { path: "web-list", element: <WebCustomerList /> },
            { path: "app-list", element: <AppCustomerList /> },
            {
              path: "third-party-customer-list",
              element: <ThirdPartyCustomerList />,
            },
            {
              path: "customertypelist",
              element: <CustomerTypeList />,
            },
            { path: "customer-profile", element: <CustomerProfile /> },
            {
              path: "customer-order-history",
              element: <CustomerOrderHistory />,
            },
            {
              path: "cardterminallist",
              element: <CardTerminalList />,
            },
          ]
        },
        {
          path: "report",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/report/purchasereport" />,
            },
            { path: "purchasereport", element: <PurchaseReport /> },
            {
              path: "supplierDuePaymentReport",
              element: <SupplierDuePaymentReport />,
            },
            {
              path: "stockreportproductwise",
              element: <StockReportProductWise />,
            },

            { path: "sellreport/sellreport", element: <SellReport /> },
            {
              path: "sellreport/salereportitems",
              element: <SellReportItems />,
            },
            {
              path: "sellreport/servicechargereport",
              element: <ServiceChargeReport />,
            },
            { path: "sellreport/discount-report", element: <DiscountReport /> },
            {
              path: "sellreport/sellreportordertype",
              element: <SellReportOrderType />,
            },
            {
              path: "sellreport/waiterssellreport",
              element: <SellReportWaiters />,
            },
            {
              path: "sellreport/deliverytypesellreport",
              element: <SellReportDeliveryType />,
            },
            {
              path: "sellreport/cashiersellreport",
              element: <SellReportCashier />,
            },

            { path: "kitchensell", element: <KitchenSell /> },
            { path: "cashregisterreport", element: <CashRegisterReport /> },
            { path: "sellfiltering", element: <SellReportFiltering /> },
            { path: "sellbydate", element: <SellByDate /> },
            { path: "commission", element: <Commission /> },
            { path: "salebytable", element: <SaleByTable /> },

            // { path: "customer/add-customer", element: <AddCustomer /> },
            // { path: "customer/customerlist", element: <CustomerList /> },
            // { path: "customer/total-list", element: <TotalCustomerList /> },
            // { path: "customer/dine-in-list", element: <DineInCustomerList /> },
            // { path: "customer/web-list", element: <WebCustomerList /> },
            // { path: "customer/app-list", element: <AppCustomerList /> },
            // {
            //   path: "customer/third-party-customer-list",
            //   element: <ThirdPartyCustomerList />,
            // },
            // {
            //   path: "customer/customertypelist",
            //   element: <CustomerTypeList />,
            // },
            // { path: "customer/customer-profile", element: <CustomerProfile /> },
            // {
            //   path: "customer/customer-order-history",
            //   element: <CustomerOrderHistory />,
            // },
            // {
            //   path: "customer/cardterminallist",
            //   element: <CardTerminalList />,
            // },

            { path: "expense/additemexpense", element: <AddExpenseItem /> },
            {
              path: "expense/manageitemexpense",
              element: <ManageExpenseItem />,
            },
            { path: "expense/addexpense", element: <AddExpense /> },
            { path: "expense/manageexpense", element: <ManageExpense /> },
            { path: "expense/expensestatement", element: <ExpenseStatement /> },

            { path: "waste-report", element: <Waste /> },
            { path: "profit-loss", element: <ProfitLossReport /> },
          ],
        },
        
        {
          path: "foodmanagement",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/foodmanagement/addcategory" />,
            },

            { path: "managecategory/addcategory", element: <AddCategory /> },
            { path: "managecategory/categorylist", element: <CategoryList /> },

            { path: "managefood/addfood", element: <AddFood /> },
            { path: "managefood/foodlist", element: <FoodList /> },
            { path: "managefood/manage-menu", element: <ManageMenu /> },
            { path: "managefood/add-variant", element: <AddFoodVariant /> },
            { path: "managefood/topping", element: <Toppings /> },
            { path: "managefood/foodvariant", element: <FoodVariant /> },
            {
              path: "managefood/add-availability",
              element: <AddAvailability />,
            },
            {
              path: "managefood/foodavailability",
              element: <FoodAvailability />,
            },
            { path: "managefood/addgroupitem", element: <AddGroupItem /> },
            { path: "managefood/menutype", element: <MenuType /> },

            { path: "manageaddons/addaddons", element: <AddAddons /> },
            { path: "manageaddons/addonslist", element: <AddonsList /> },
            {
              path: "manageaddons/addonsassignlist",
              element: <AddonsAssignList />,
            },

            { path: "/manage-recipe/add-recipe", element: <ManageRecipe /> },
            { path: "/manage-recipe/recipe-list", element: <RecipeList /> },

            { path: "add-waste", element: <AddWaste /> },

            { path: "/pricing/dynamic-pricing", element: <DynamicPricing /> },
            { path: "/pricing/pricing-list", element: <PricingList /> },
          ],
        },
        {
          path: "production",
          children: [
            {
              path: "/",
              element: (
                <Navigate to="/dashboard/production/setproductionunit" />
              ),
            },
            { path: "setproductionunit", element: <ManageRecipe /> },
            { path: "productionsetlist", element: <ProductionSetList /> },
            { path: "addproduction", element: <AddProduction /> },
            { path: "productionsetting", element: <ProductionSetting /> },
          ],
        },
        {
          path: "setting",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/setting/paymentmethodlist" />,
            },

            {
              path: "paymentsetting/paymentmethodlist",
              element: <PaymentMethodList />,
            },
            { path: "paymentsetting/paymentsetup", element: <PaymentSetup /> },
            {
              path: "paymentsetting/shippingmethodsetting",
              element: <ShippingMethodSetting />,
            },

            { path: "kitchensetting/kitchenlist", element: <KitchenList /> },
            {
              path: "kitchensetting/kitchenassign",
              element: <KitchenAssign />,
            },
            {
              path: "kitchensetting/kitchendashboardsetting",
              element: <KitchenDashboardSetting />,
            },
            {
              path: "order-type",
              element: <OrderType />,
            },
            {
              path: "printer-scanner",
              element: <PrinterScanner />,
            },
            {
              path: "invoice-setting",
              element: <InvoiceSetting />,
            },
            // {
            //   path: "taxes-charges",
            //   element: <TaxAndCharge />,
            // },
            {
              path:"taxes-charges/taxes",
              element: <Tax/>
            },
            {
              path:"taxes-charges/charge",
              element: <Charge/>
            },

            {
              path: "unitmeasurement/unitmeasurementlist",
              element: <UnitMeasurementList />,
            },
            {
              path: "unitmeasurement/ingredientlist",
              element: <IngredientList />,
            },

            { path: "bank/banklist", element: <BankList /> },
            { path: "bank/banktransaction", element: <BankTransaction /> },

            { path: "delivery-zone/city", element: <City /> },
            {
              path: "delivery-zone/deliverable-area",
              element: <DeliverableArea />,
            },

            { path: "user/adduser", element: <AddUser /> },
            { path: "user/userlist", element: <UserListDefault /> },

            {
              path: "rolepermission/permissionsetup",
              element: <PermissionSetup />,
            },
            { path: "rolepermission/addrole", element: <AddRole /> },
            { path: "rolepermission/rolelist", element: <RoleList /> },
            {
              path: "rolepermission/useraccessrole",
              element: <UserAccessRole />,
            },

            { path: "manage-table/add-section", element: <AddTableSection /> },

            { path: "web-setting", element: <CommonSetting /> },
            { path: "managestoretime", element: <ManageStoreTime /> },
            { path: "language", element: <Language /> },
            { path: "applicationsetting", element: <ApplicationSetting /> },
            { path: "appsetting", element: <AppSetting /> },
            { path: "factoryreset", element: <FactoryReset /> },
            { path: "currency", element: <Currency /> },
            { path: "country", element: <Country /> },
            { path: "state", element: <State /> },
          ],
        },

        //Accounts
        {
          path: "accounts",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/accounts/chartofaccount" />,
            },
            { path: "chartofaccount", element: <ChartOfAccount /> },
            { path: "supplierpayment", element: <SupplierPayment /> },
            { path: "cashadjustment", element: <CashAdjustment /> },
            { path: "debitvoucher", element: <DebitVoucherAccount /> },
            { path: "creditvoucher", element: <CreditVoucherAccount /> },
            { path: "contravoucher", element: <ContraVoucherAccount /> },
            { path: "journalvoucher", element: <JournalVoucherAccount /> },
            { path: "voucherapproval", element: <VoucherApprovalAccount /> },

            {
              path: "accountreport/vouchereport",
              element: <VoucherReportAccount />,
            },
            { path: "accountreport/cashbook", element: <CashBook /> },
            { path: "accountreport/bankbook", element: <BankBook /> },
            { path: "accountreport/generalledger", element: <GeneralLedger /> },
            { path: "accountreport/trialbalance", element: <TrialBalance /> },
            { path: "accountreport/profitloss", element: <ProfitLoss /> },
            { path: "accountreport/cashflow", element: <CashFlow /> },
            { path: "accountreport/coaprint", element: <CoaPrint /> },
            { path: "accountreport/balancesheet", element: <BalanceSheet /> },
          ],
        },

        // Inventory Management
        {
          path: "inventory",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/inventory/stock-adjustment" />,
            },
            {
              path: "ingredient-catagories",
              element: <IngredientCatagories />,
            },
            { path: "ingredient-units", element: <IngredientUnits /> },
            { path: "ingredients", element: <Ingredients /> },
            { path: "stock-adjustment", element: <StockAdjustment /> },
            { path: "inventory-report", element: <FoodInventoryReport /> },
          ],
        },

        //HR

        {
          path: "humanresource",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/humanresource/designation" />,
            },
            { path: "hrm/designation", element: <DesignationHR /> },
            { path: "hrm/addemployee", element: <AddEmployee /> },
            { path: "hrm/manageemployee", element: <ManageEmployee /> },
            { path: "hrm/managesalary", element: <ManageEmployeeSalary /> },
            { path: "hrm/commission", element: <CommissionSetting /> },

            {
              path: "shift-management/shift-mapping",
              element: <ShiftMapping />,
            },
            { path: "shift-management/manage-shift", element: <ManageShift /> },
            { path: "shift-management/dashboard", element: <ShiftDashboard /> },

            { path: "attendance/attendanceform", element: <AttendanceForm /> },
            {
              path: "attendance/markedattendance",
              element: <MarkedAttendance />,
            },
            {
              path: "attendance/monthlyattendance",
              element: <MonthlyAttendance />,
            },
            {
              path: "attendance/summaryattendance",
              element: <SummaryAttendance />,
            },
            {
              path: "attendance/attendencereport",
              element: <AttendanceReports />,
            },

            { path: "award/newaward", element: <NewAward /> },

            {
              path: "recruitment/addnewcandidate",
              element: <AddNewCandidate />,
            },
            { path: "recruitment/createjob", element: <CreateJob /> },
            {
              path: "recruitment/managecandidate",
              element: <ManageCandidate />,
            },
            {
              path: "recruitment/candidateshortlist",
              element: <CandidateShortlist />,
            },
            { path: "recruitment/interview", element: <Interview /> },
            {
              path: "recruitment/candidateselection",
              element: <CandidateSelection />,
            },

            { path: "department/department", element: <Department /> },
            { path: "department/adddivision", element: <AddDivision /> },
            { path: "department/managedivision", element: <ManageDivision /> },

            { path: "leave/weeklyholiday", element: <WeeklyHoliday /> },
            { path: "leave/holiday", element: <Holiday /> },
            { path: "leave/addleavetype", element: <AddLeaveType /> },
            { path: "leave/leaveapplication", element: <LeaveApplication /> },

            { path: "loan/grantloan", element: <GrantLoan /> },
            { path: "loan/loaninstallment", element: <LoanInstallment /> },
            { path: "loan/loanreport", element: <LoanReport /> },

            { path: "payroll/salarytypesetup", element: <SalaryTypeSetup /> },
            { path: "payroll/salarysetup", element: <SalarySetup /> },
            { path: "payroll/managesalaries", element: <ManageSalaries /> },
            { path: "payroll/generatesalaries", element: <GenerateSalaries /> },
            { path: "payroll/overtime", element: <Overtime /> },
            { path: "payroll/bonus", element: <Bonus /> },
            { path: "payroll/salarygenerate", element: <SalaryGenerate /> },
          ],
        },
        //QR CODE MANAGEMENT
        {
          path: "qr-code",
          children: [
            {
              path: "/",
              element: <Navigate to="dashboard/qr-code/qr-table" />,
            },
            { path: "/qr-table", element: <QRCodeTable /> },
            { path: "/qr-generate", element: <QRGenerate /> },
            { path: "/qr-table-generate", element: <TableQRCodes /> },
            { path: "/qr-advertisement", element: <AdvertisementQR /> },
          ],
        },

        {
          path: "marketing",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/marketing/banner-setting" />,
            },

            { path: "campaign/basic-campaign", element: <BasicCampaign /> },
            {
              path: "campaign/basic-campaign/add-new",
              element: <AddBasicCampaign />,
            },
            { path: "campaign/food-campaign", element: <FoodCampaign /> },
            {
              path: "campaign/food-campaign/add-new",
              element: <AddFoodCampaign />,
            },

            { path: "banner-setting/add-banner", element: <AddBanner /> },
            { path: "banner-setting/banner-list", element: <BannerSetting /> },

            { path: "smssetting/sms-contact", element: <SmsContact /> },
            { path: "smssetting/sms-group", element: <SmsGroup /> },
            {
              path: "smssetting/sms-group/view-sms-group",
              element: <ViewSmsGroup />,
            },
            { path: "smssetting/send-sms", element: <SendSms /> },
            { path: "smssetting/sms-history", element: <SmsHistory /> },
            {
              path: "smssetting/smsconfiguration",
              element: <SmsConfiguration />,
            },
            { path: "smssetting/smstemplate", element: <SmsTemplate /> },
            { path: "smssetting/sms-batch", element: <SmsBatch /> },

            { path: "email/email-contact", element: <EmailContact /> },
            { path: "email/email-group", element: <EmailGroup /> },
            {
              path: "email/email-group/view-email-group",
              element: <ViewEmailGroup />,
            },
            { path: "email/send-email", element: <SendEmail /> },
            { path: "email/email-history", element: <EmailHistory /> },
            { path: "email/email-template", element: <EmailTemplate /> },
            { path: "email/email-batch", element: <EmailBatch /> },

            { path: "coupon-setting/add-coupon", element: <AddCoupon /> },
            { path: "coupon-setting/coupon-list", element: <CouponList /> },

            { path: "socialsetting", element: <SocialSetting /> },
          ],
        },

        //Default

        //Modules
        {
          path: "modules",
          element: <ModuleDefault />,
        },

        //Web Setting
        {
          path: "websetting",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/websetting/commonsetting" />,
            },
            { path: "commonsetting", element: <CommonSetting /> },

            { path: "menusetting", element: <MenuSetting /> },
            { path: "seosetting", element: <SeoSetting /> },
            { path: "widgetsetting", element: <WidgetSetting /> },
            { path: "emailsetting", element: <EmailSetting /> },
            { path: "customer", element: <Customer /> },

            { path: "subscribelist", element: <SubscribeList /> },
          ],
        },

        //Message
        {
          path: "message",
          children: [
            { path: "/", element: <Navigate to="/dashboard/message/new" /> },
            { path: "new", element: <NewMessage /> },
            { path: "inbox", element: <InboxMessage /> },
            { path: "sent", element: <SentMessage /> },
          ],
        },

        //Subscription
        {
          path: "subscription",
          children: [
            {
              path: "/",
              element: <Navigate to="/dashboard/subscription/pricing" />,
            },
            { path: "pricing", element: <Pricing /> },
            { path: "sms-pricing", element: <Pricing /> },
            { path: "storage-pricing", element: <Pricing /> },
          ],
        },

        // {
        //   path: 'blog',
        //   children: [
        //     {
        //       path: '/',
        //       element: <Navigate to='/dashboard/blog/posts' replace />,
        //     },
        //     { path: 'posts', element: <BlogPosts /> },
        //     { path: 'post/:title', element: <BlogPost /> },
        //     { path: 'new-post', element: <BlogNewPost /> },
        //   ],
        // },
        // {
        //   path: 'mail',
        //   children: [
        //     {
        //       path: '/',
        //       element: <Navigate to='/dashboard/mail/all' replace />,
        //     },
        //     { path: 'label/:customLabel', element: <Mail /> },
        //     { path: 'label/:customLabel/:mailId', element: <Mail /> },
        //     { path: ':systemLabel', element: <Mail /> },
        //     { path: ':systemLabel/:mailId', element: <Mail /> },
        //   ],
        // },
        // {
        //   path: 'chat',
        //   children: [
        //     { path: '/', element: <Chat /> },
        //     { path: 'new', element: <Chat /> },
        //     { path: ':conversationKey', element: <Chat /> },
        //   ],
        // },
        { path: "calendar", element: <Calendar /> },
        // { path: 'kanban', element: <Kanban /> }
      ],
    },

    // Docs Routes
    {
      path: "docs",
      element: <DocsLayout />,
      children: [
        { path: "/", element: <Navigate to="/docs/introduction" replace /> },
        { path: "*", element: <Docs /> },
      ],
    },

    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "pricing", element: <Pricing /> },
        { path: "payment", element: <Payment /> },
        { path: "500", element: <Page500 /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "about-us", element: <About /> },
        { path: "contact-us", element: <Contact /> },
        { path: "faqs", element: <Faqs /> },
        {
          path: "components",
          children: [
            { path: "/", element: <ComponentsOverview /> },
            // FOUNDATIONS
            { path: "color", element: <Color /> },
            { path: "typography", element: <Typography /> },
            { path: "shadows", element: <Shadows /> },
            { path: "grid", element: <Grid /> },
            { path: "icons", element: <Icons /> },
            // MATERIAL UI
            { path: "accordion", element: <Accordion /> },
            { path: "alert", element: <Alert /> },
            { path: "autocomplete", element: <Autocomplete /> },
            { path: "avatar", element: <Avatar /> },
            { path: "badge", element: <Badge /> },
            { path: "breadcrumbs", element: <Breadcrumb /> },
            { path: "buttons", element: <Buttons /> },
            { path: "checkbox", element: <Checkbox /> },
            { path: "chip", element: <Chip /> },
            { path: "dialog", element: <Dialog /> },
            { path: "label", element: <Label /> },
            { path: "list", element: <List /> },
            { path: "menu", element: <Menu /> },
            { path: "pagination", element: <Pagination /> },
            { path: "pickers", element: <Pickers /> },
            { path: "popover", element: <Popover /> },
            { path: "progress", element: <Progress /> },
            { path: "radio-button", element: <RadioButtons /> },
            { path: "rating", element: <Rating /> },
            { path: "slider", element: <Slider /> },
            { path: "snackbar", element: <Snackbar /> },
            { path: "stepper", element: <Stepper /> },
            { path: "switch", element: <Switches /> },
            { path: "table", element: <Table /> },
            { path: "tabs", element: <Tabs /> },
            { path: "textfield", element: <Textfield /> },
            { path: "timeline", element: <Timeline /> },
            { path: "tooltip", element: <Tooltip /> },
            { path: "transfer-list", element: <TransferList /> },
            { path: "tree-view", element: <TreeView /> },
            // EXTRA COMPONENTS
            { path: "chart", element: <Charts /> },
            { path: "map", element: <Map /> },
            { path: "editor", element: <Editor /> },
            { path: "copy-to-clipboard", element: <CopyToClipboard /> },
            { path: "upload", element: <Upload /> },
            { path: "carousel", element: <Carousel /> },
            { path: "multi-language", element: <MultiLanguage /> },
            { path: "animate", element: <Animate /> },
            { path: "mega-menu", element: <MegaMenu /> },
          ],
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));
const Register = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);
const ResetPassword = Loadable(
  lazy(() => import("../pages/authentication/ResetPassword"))
);
const VerifyCode = Loadable(
  lazy(() => import("../pages/authentication/VerifyCode"))
);
// Dashboard
const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const GeneralEcommerce = Loadable(
  lazy(() => import("../pages/dashboard/GeneralEcommerce"))
);
const GeneralAnalytics = Loadable(
  lazy(() => import("../pages/dashboard/GeneralAnalytics"))
);
const EcommerceShop = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceShop"))
);
const EcommerceProductDetails = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductDetails"))
);
const EcommerceProductList = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductList"))
);
const EcommerceProductCreate = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceProductCreate"))
);
const EcommerceCheckout = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceCheckout"))
);
const EcommerceInvoice = Loadable(
  lazy(() => import("../pages/dashboard/EcommerceInvoice"))
);
const BlogPosts = Loadable(lazy(() => import("../pages/dashboard/BlogPosts")));
const BlogPost = Loadable(lazy(() => import("../pages/dashboard/BlogPost")));
const BlogNewPost = Loadable(
  lazy(() => import("../pages/dashboard/BlogNewPost"))
);
const UserProfile = Loadable(
  lazy(() => import("../pages/dashboard/UserProfile"))
);
const UserCards = Loadable(lazy(() => import("../pages/dashboard/UserCards")));
const UserList = Loadable(lazy(() => import("../pages/dashboard/UserList")));
const UserAccount = Loadable(
  lazy(() => import("../pages/dashboard/UserAccount"))
);
const UserCreate = Loadable(
  lazy(() => import("../pages/dashboard/UserCreate"))
);

//Outlets
const DashboardOutlet = Loadable(
  lazy(() => import("../pages/dashboard/outlet/DashboardOutlet"))
);
const AddOutlet = Loadable(
  lazy(() => import("../pages/dashboard/outlet/AddOutlet"))
);

//Analytics
const Analytics = Loadable(
  lazy(() => import("../pages/dashboard/analytics/Analytics"))
);

// *************** Manage Orders **************** //
const OrderList = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/OrderList"))
);
const PendingOrders = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/PendingOrders"))
);
const CancelOrders = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/CancelOrders"))
);
const CompleteOrders = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/CompleteOrders"))
);
const CounterDashboard = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/CounterDashboard"))
);
const OrderTimeManagement = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/OrderTimeManagement"))
);
const DeliveryTimeFrame = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/DeliveryTimeFrame"))
);
const TimeFrames = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/TimeFrames"))
);
const RefundedOrders = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/RefundedOrders"))
);
const CounterList = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/CounterList"))
);
const PosSetting = Loadable(
  lazy(() => import("../pages/dashboard/manageOrders/PosSetting"))
);
// const PosInvoice = Loadable(lazy(() => import("../pages/dashboard/manageOrders/PosInvoice")));

//Reservation Start

const Allreservation = Loadable(
  lazy(() => import("../pages/dashboard/reservations/Allreservation"))
);
const AddBooking = Loadable(
  lazy(() => import("../pages/dashboard/reservations/AddBooking"))
);
const PendingReservations = Loadable(
  lazy(() => import("../pages/dashboard/reservations/PendingReservations"))
);
const AcceptedReservations = Loadable(
  lazy(() => import("../pages/dashboard/reservations/AcceptedReservations"))
);
const RejectedReservations = Loadable(
  lazy(() => import("../pages/dashboard/reservations/RejectedReservations"))
);
const CancelledReservations = Loadable(
  lazy(() => import("../pages/dashboard/reservations/CancelledReservations"))
);
const Unavailableday = Loadable(
  lazy(() => import("../pages/dashboard/reservations/Unavailableday"))
);
const ReservationSetting = Loadable(
  lazy(() => import("../pages/dashboard/reservations/ReservationSetting"))
);
const ReservationSettingDayWise = Loadable(
  lazy(() =>
    import("../pages/dashboard/reservations/ReservationSettingDayWise")
  )
);
const WaitingList = Loadable(
  lazy(() => import("../pages/dashboard/reservations/WaitingList"))
);
const TableList = Loadable(
  lazy(() => import("../pages/dashboard/reservations/TableList"))
);

//Reservation End

//Purchase Start

const AddPurchase = Loadable(
  lazy(() => import("../pages/dashboard/purchase/AddPurchase"))
);

const PurchaseItem = Loadable(
  lazy(() => import("../pages/dashboard/purchase/PurchaseItem"))
);

const PurchaseReturn = Loadable(
  lazy(() => import("../pages/dashboard/purchase/PurchaseReturn"))
);

const ReturnInvoice = Loadable(
  lazy(() => import("../pages/dashboard/purchase/ReturnInvoice"))
);

const StockOutIngredients = Loadable(
  lazy(() => import("../pages/dashboard/purchase/StockOutIngredients"))
);

const SupplierLedger = Loadable(
  lazy(() => import("../pages/dashboard/purchase/SupplierLedger"))
);

const PaymentLedger = Loadable(
  lazy(() => import("../pages/dashboard/purchase/PaymentLedger"))
);

const SupplierManage = Loadable(
  lazy(() => import("../pages/dashboard/purchase/SupplierManage"))
);

//Purchase End

//Reports Start

const PurchaseReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/PurchaseReport"))
);
const SupplierDuePaymentReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/SupplierDuePaymentReport"))
);

const StockReportProductWise = Loadable(
  lazy(() => import("../pages/dashboard/reports/StockReportProductWise"))
);
const FoodInventoryReport = Loadable(
  lazy(() =>
    import("../pages/dashboard/inventoryManagement/FoodInventoryReport")
  )
);
const SellReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReport"))
);
const CashRegisterReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/CashRegisterReport"))
);
const SellReportFiltering = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportFiltering"))
);
const AddCustomer = Loadable(
  lazy(() => import("../pages/dashboard/reports/AddCustomer"))
);
const CustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/CustomerList"))
);
const TotalCustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/TotalCustomerList"))
);
const DineInCustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/DineInCustomerList"))
);
const WebCustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/WebCustomerList"))
);
const AppCustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/AppCustomerList"))
);
const ThirdPartyCustomerList = Loadable(
  lazy(() => import("../pages/dashboard/reports/ThirdPartyCustomerList"))
);
const CustomerProfile = Loadable(
  lazy(() => import("../pages/dashboard/reports/CustomerProfile"))
);
const CustomerOrderHistory = Loadable(
  lazy(() => import("../pages/dashboard/reports/CustomerOrderHistory"))
);
const AddExpense = Loadable(
  lazy(() => import("../pages/dashboard/reports/AddExpense"))
);
const ExpenseStatement = Loadable(
  lazy(() => import("../pages/dashboard/reports/ExpenseStatement"))
);
const SellByDate = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellByDate"))
);
const Commission = Loadable(
  lazy(() => import("../pages/dashboard/reports/Commission"))
);
const SaleByTable = Loadable(
  lazy(() => import("../pages/dashboard/reports/SaleByTable"))
);
const SellReportItems = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportItems"))
);
const ServiceChargeReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/ServiceChargeReport"))
);
const DiscountReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/DiscountReport"))
);
const SellReportOrderType = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportOrderType"))
);
const SellReportWaiters = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportWaiters"))
);
const KitchenSell = Loadable(
  lazy(() => import("../pages/dashboard/reports/KitchenSell"))
);
const SellReportDeliveryType = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportDeliveryType"))
);
const SellReportCashier = Loadable(
  lazy(() => import("../pages/dashboard/reports/SellReportCashier"))
);
const Waste = Loadable(lazy(() => import("../pages/dashboard/reports/Waste")));
const ProfitLossReport = Loadable(
  lazy(() => import("../pages/dashboard/reports/ProfitLoss"))
);

//Reports End

//Food Management Start

const AddCategory = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddCategory"))
);
const CategoryList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/CategoryList"))
);
const AddFood = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddFood"))
);
const AddFoodVariant = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddFoodVariant"))
);
const FoodList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/FoodList"))
);
const ManageMenu = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/ManageMenu"))
);
const AddGroupItem = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddGroupItem"))
);
const FoodVariant = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/FoodVariant"))
);
const Toppings = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/Toppings"))
);
const AddAvailability = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddAvailability"))
);
const FoodAvailability = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/FoodAvailability"))
);
const MenuType = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/MenuType"))
);
const AddAddons = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddAddOns"))
);
const AddonsList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddonsList"))
);
const AddonsAssignList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddonsAssignList"))
);
const ManageRecipe = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/ManageRecipe"))
);
const RecipeList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/RecipeList"))
);

const AddWaste = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/AddWaste"))
);

const DynamicPricing = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/DynamicPricing"))
);
const PricingList = Loadable(
  lazy(() => import("../pages/dashboard/foodManagement/PricingList"))
);

//Food Management end

//Production Starts

const ProductionSetList = Loadable(
  lazy(() => import("../pages/dashboard/production/ProductionSetList"))
);
const AddProduction = Loadable(
  lazy(() => import("../pages/dashboard/production/AddProduction"))
);
const ProductionSetting = Loadable(
  lazy(() => import("../pages/dashboard/production/ProductionSetting"))
);

//Production ends

//Setting Start

const OrderType = Loadable(
  lazy(() => import("../pages/dashboard/setting/OrderType"))
);
const InvoiceSetting = Loadable(
  lazy(() => import("../pages/dashboard/setting/InvoiceSetting"))
);
const TaxAndCharge = Loadable(
  lazy(() => import("../pages/dashboard/setting/TaxAndCharge"))
);
const Tax = Loadable(
  lazy(() => import("../pages/dashboard/setting/Taxes"))
);
const Charge = Loadable(
  lazy(() => import("../pages/dashboard/setting/Charges"))
);
const PrinterScanner = Loadable(
  lazy(() => import("../pages/dashboard/setting/PrinterScanner"))
);
const PaymentMethodList = Loadable(
  lazy(() => import("../pages/dashboard/setting/PaymentMethodList"))
);
const PaymentSetup = Loadable(
  lazy(() => import("../pages/dashboard/setting/PaymentSetup"))
);
const ShippingMethodSetting = Loadable(
  lazy(() => import("../pages/dashboard/setting/ShippingMethodSetting"))
);
const AddTableSection = Loadable(
  lazy(() => import("../pages/dashboard/reservations/AddTableSection"))
);

const CustomerTypeList = Loadable(
  lazy(() => import("../pages/dashboard/setting/CustomerTypeList"))
);
const CardTerminalList = Loadable(
  lazy(() => import("../pages/dashboard/setting/CardTerminalList"))
);
const KitchenList = Loadable(
  lazy(() => import("../pages/dashboard/setting/KitchenList"))
);
const KitchenAssign = Loadable(
  lazy(() => import("../pages/dashboard/setting/KitchenAssign"))
);
const KitchenDashboardSetting = Loadable(
  lazy(() => import("../pages/dashboard/setting/KitchenDashboardSetting"))
);
const UnitMeasurementList = Loadable(
  lazy(() => import("../pages/dashboard/setting/UnitMeasurementList"))
);
const IngredientList = Loadable(
  lazy(() => import("../pages/dashboard/setting/IngredientList"))
);

const SmsConfiguration = Loadable(
  lazy(() => import("../pages/dashboard/setting/SmsConfiguration"))
);
const SmsTemplate = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SmsTemplate"))
);

const BankList = Loadable(
  lazy(() => import("../pages/dashboard/setting/BankList"))
);
const BankTransaction = Loadable(
  lazy(() => import("../pages/dashboard/setting/BankTransaction"))
);

const Language = Loadable(
  lazy(() => import("../pages/dashboard/setting/Language"))
);

const ApplicationSetting = Loadable(
  lazy(() => import("../pages/dashboard/setting/ApplicationSetting"))
);

const AppSetting = Loadable(
  lazy(() => import("../pages/dashboard/setting/AppSetting"))
);

const FactoryReset = Loadable(
  lazy(() => import("../pages/dashboard/setting/FactoryReset"))
);

const Currency = Loadable(
  lazy(() => import("../pages/dashboard/setting/Currency"))
);

const Country = Loadable(
  lazy(() => import("../pages/dashboard/setting/Country"))
);

const State = Loadable(lazy(() => import("../pages/dashboard/setting/State")));

const City = Loadable(lazy(() => import("../pages/dashboard/setting/City")));
const DeliverableArea = Loadable(
  lazy(() => import("../pages/dashboard/setting/DeliverableArea"))
);

const CommissionSetting = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Commission"))
);

//Setting Ends

// Accounts Start

const ChartOfAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/ChartOfAccount"))
);

const SupplierPayment = Loadable(
  lazy(() => import("../pages/dashboard/accounts/SupplierPayment"))
);

const CashAdjustment = Loadable(
  lazy(() => import("../pages/dashboard/accounts/CashAdjustment"))
);

const DebitVoucherAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/DebitVoucher"))
);

const CreditVoucherAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/CreditVoucher"))
);
const ContraVoucherAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/ContraVoucher"))
);
const JournalVoucherAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/JournalVoucher"))
);
const VoucherApprovalAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/VoucherApproval"))
);

const VoucherReportAccount = Loadable(
  lazy(() => import("../pages/dashboard/accounts/VoucherReport"))
);

const CashBook = Loadable(
  lazy(() => import("../pages/dashboard/accounts/CashBook"))
);

const BankBook = Loadable(
  lazy(() => import("../pages/dashboard/accounts/BankBook"))
);

const GeneralLedger = Loadable(
  lazy(() => import("../pages/dashboard/accounts/GeneralLedger"))
);

const TrialBalance = Loadable(
  lazy(() => import("../pages/dashboard/accounts/TrialBalance"))
);
const ProfitLoss = Loadable(
  lazy(() => import("../pages/dashboard/accounts/ProfitLoss"))
);
const CashFlow = Loadable(
  lazy(() => import("../pages/dashboard/accounts/CashFlow"))
);
const CoaPrint = Loadable(
  lazy(() => import("../pages/dashboard/accounts/CoaPrint"))
);
const BalanceSheet = Loadable(
  lazy(() => import("../pages/dashboard/accounts/BalanceSheet"))
);

//Accounts ends

// Inventory Management

const IngredientCatagories = Loadable(
  lazy(() =>
    import("../pages/dashboard/inventoryManagement/IngredientCatagories")
  )
);
const IngredientUnits = Loadable(
  lazy(() => import("../pages/dashboard/inventoryManagement/IngredientUnits"))
);
const Ingredients = Loadable(
  lazy(() => import("../pages/dashboard/inventoryManagement/Ingredients"))
);
const StockAdjustment = Loadable(
  lazy(() => import("../pages/dashboard/inventoryManagement/StockAdjustment"))
);

// Inventory management ends

//Human Resource Starts

const DesignationHR = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Designation"))
);
const AddEmployee = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AddEmployee"))
);
const ManageEmployee = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageEmployee"))
);
const ManageEmployeeSalary = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageEmployeeSalary"))
);
const MarkedAttendance = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/MarkedAttendance"))
);
const MonthlyAttendance = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/MonthlyAttendance"))
);
const SummaryAttendance = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/SummaryAttendance"))
);
const AttendanceForm = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AttendanceForm"))
);
const AttendanceReports = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AttendanceReports"))
);
const AddExpenseItem = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AddExpenseItem"))
);
const ManageExpenseItem = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageExpenseItem"))
);

const ManageExpense = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageExpense"))
);

const NewAward = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/NewAward"))
);

const AddNewCandidate = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AddNewCandidate"))
);
const CreateJob = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/CreateJob"))
);
const ManageCandidate = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageCandidate"))
);
const CandidateShortlist = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/CandidateShortlist"))
);
const Interview = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Interview"))
);
const CandidateSelection = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/CandidateSelection"))
);
const Department = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Department"))
);
const AddDivision = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AddDivision"))
);
const ManageDivision = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageDivision"))
);
const WeeklyHoliday = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/WeeklyHoliday"))
);
const Holiday = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Holiday"))
);
const AddLeaveType = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/AddLeaveType"))
);
const LeaveApplication = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/LeaveApplication"))
);

const GrantLoan = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/GrantLoan"))
);
const LoanInstallment = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/LoanInstallment"))
);
const LoanReport = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/LoanReport"))
);

const SalaryTypeSetup = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/SalaryTypeSetup"))
);
const SalarySetup = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/SalarySetup"))
);
const ManageSalaries = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageSalaries"))
);
const GenerateSalaries = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/GenerateSalaries"))
);
const Bonus = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Bonus"))
);
const Overtime = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/Overtime"))
);

const SalaryGenerate = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/SalaryGenerate"))
);
const ShiftMapping = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ShiftMapping"))
);
const ManageShift = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ManageShift"))
);
const ShiftDashboard = Loadable(
  lazy(() => import("../pages/dashboard/humanResource/ShiftDashboard"))
);

//Human Resource ends

//QR management starts
const QRCodeTable = Loadable(
  lazy(() => import("../pages/dashboard/QRCodeManagement/QRCodeTable"))
);
const QRGenerate = Loadable(
  lazy(() => import("../pages/dashboard/QRCodeManagement/QRGenerate"))
);
const TableQRCodes = Loadable(
  lazy(() => import("../pages/dashboard/QRCodeManagement/TableQRCodes"))
);
const AdvertisementQR = Loadable(
  lazy(() => import("../pages/dashboard/QRCodeManagement/AdvertisementQR"))
);
//QR management ends

// Marketing Management
const BasicCampaign = Loadable(
  lazy(() => import("../pages/dashboard/marketing/BasicCampaign"))
);
const AddBasicCampaign = Loadable(
  lazy(() => import("../pages/dashboard/marketing/AddBasicCampaign"))
);
const FoodCampaign = Loadable(
  lazy(() => import("../pages/dashboard/marketing/FoodCampaign"))
);
const AddFoodCampaign = Loadable(
  lazy(() => import("../pages/dashboard/marketing/AddFoodCampaign"))
);

const AddBanner = Loadable(
  lazy(() => import("../pages/dashboard/marketing/AddBanner"))
);
const BannerSetting = Loadable(
  lazy(() => import("../pages/dashboard/marketing/BannerSetting"))
);

const AddCoupon = Loadable(
  lazy(() => import("../pages/dashboard/marketing/AddCoupon"))
);
const CouponList = Loadable(
  lazy(() => import("../pages/dashboard/marketing/CouponList"))
);

const SmsContact = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SmsContact"))
);
const SmsGroup = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SmsGroup"))
);
const ViewSmsGroup = Loadable(
  lazy(() => import("../pages/dashboard/marketing/ViewSmsGroup"))
);
const SendSms = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SendSms"))
);
const SmsHistory = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SmsHistory"))
);
const SmsBatch = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SmsBatch"))
);

const EmailContact = Loadable(
  lazy(() => import("../pages/dashboard/marketing/EmailContact"))
);
const EmailGroup = Loadable(
  lazy(() => import("../pages/dashboard/marketing/EmailGroup"))
);
const ViewEmailGroup = Loadable(
  lazy(() => import("../pages/dashboard/marketing/ViewEmailGroup"))
);
const SendEmail = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SendEmail"))
);
const EmailHistory = Loadable(
  lazy(() => import("../pages/dashboard/marketing/EmailHistory"))
);
const EmailTemplate = Loadable(
  lazy(() => import("../pages/dashboard/marketing/EmailTemplate"))
);
const EmailBatch = Loadable(
  lazy(() => import("../pages/dashboard/marketing/EmailBatch"))
);

const SocialSetting = Loadable(
  lazy(() => import("../pages/dashboard/marketing/SocialSetting"))
);

//Default

//User starts

const AddUser = Loadable(lazy(() => import("../pages/dashboard/user/AddUser")));
const UserListDefault = Loadable(
  lazy(() => import("../pages/dashboard/user/UserList"))
);

//User ends

//Module Starts
const ModuleDefault = Loadable(
  lazy(() => import("../pages/dashboard/module/Module"))
);
//Module ends

//Role Permission starts

const PermissionSetup = Loadable(
  lazy(() => import("../pages/dashboard/rolePermission/PermissionSetup"))
);
const AddRole = Loadable(
  lazy(() => import("../pages/dashboard/rolePermission/AddRole"))
);
const RoleList = Loadable(
  lazy(() => import("../pages/dashboard/rolePermission/RoleList"))
);
const UserAccessRole = Loadable(
  lazy(() => import("../pages/dashboard/rolePermission/UserAccessRole"))
);

//Role Permission ends

//Web Setting
const CommonSetting = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/CommonSetting"))
);
const ManageStoreTime = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/ManageStoreTime"))
);

const MenuSetting = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/MenuSetting"))
);
const SeoSetting = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/SeoSetting"))
);
const WidgetSetting = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/WidgetSetting"))
);
const EmailSetting = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/EmailSetting"))
);
const Customer = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/Customer"))
);

const SubscribeList = Loadable(
  lazy(() => import("../pages/dashboard/webSetting/SubscribeList"))
);

//Web Setting ends

// Message Starts

const NewMessage = Loadable(
  lazy(() => import("../pages/dashboard/message/NewMessage"))
);
const InboxMessage = Loadable(
  lazy(() => import("../pages/dashboard/message/InboxMessage"))
);
const SentMessage = Loadable(
  lazy(() => import("../pages/dashboard/message/SentMessage"))
);

//Message ends

// Manage Order Routes///

const PosInvoice = Loadable(
  lazy(() => import("../pages/manage-order/billing/PosInvoice"))
);
const TableView = Loadable(
  lazy(() => import("../pages/manage-order/monitor/TableView"))
);
const BookedTabel = Loadable(
  lazy(() => import("../pages/manage-order/monitor/BookedTable"))
);
const PaymentDue = Loadable(
  lazy(() => import("../pages/manage-order/monitor/PaymentDue"))
);
const DeliveryView = Loadable(
  lazy(() => import("../pages/manage-order/monitor/DeliveryView"))
);
const PickupView = Loadable(
  lazy(() => import("../pages/manage-order/monitor/PickupView"))
);
const BarPanel = Loadable(
  lazy(() => import("../pages/manage-order/monitor/BarPanel"))
);
const KitchenPanel = Loadable(
  lazy(() => import("../pages/manage-order/monitor/KitchenPanel"))
);
const KitchenView = Loadable(
  lazy(() => import("../pages/manage-order/monitor/KitchenView"))
);
const TableReservation = Loadable(
  lazy(() => import("../pages/manage-order/monitor/TableReservation"))
);

//Manage Orders ENds

//Waiters app
const WaiterOrders = Loadable(lazy(() => import("../pages/waiter/Orders")));
const WaiterMenu = Loadable(lazy(() => import("../pages/waiter/WaiterMenu")));
const WaiterInvoice = Loadable(
  lazy(() => import("../pages/waiter/WaiterInvoice"))
);
const ViewOrder = Loadable(lazy(() => import("../pages/waiter/ViewOrder")));
const WaiterReservations = Loadable(
  lazy(() => import("../pages/waiter/Reservations"))
);
const ViewReservation = Loadable(
  lazy(() => import("../pages/waiter/ViewReservation"))
);
const Transaction = Loadable(lazy(() => import("../pages/waiter/Transaction")));
const MenuPage = Loadable(lazy(() => import("../pages/waiter/MenuPage")));
const CancelSummary = Loadable(
  lazy(() => import("../pages/waiter/CancelSummary"))
);

const Chat = Loadable(lazy(() => import("../pages/dashboard/Chat")));
const Mail = Loadable(lazy(() => import("../pages/dashboard/Mail")));
const Calendar = Loadable(lazy(() => import("../pages/dashboard/Calendar")));

// const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));
// Docs
const Docs = Loadable(lazy(() => import("../pages/Docs")));
// Main
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const About = Loadable(lazy(() => import("../pages/About")));
const Contact = Loadable(lazy(() => import("../pages/Contact")));
const Faqs = Loadable(lazy(() => import("../pages/Faqs")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Pricing = Loadable(lazy(() => import("../pages/Pricing")));
const Payment = Loadable(lazy(() => import("../pages/Payment")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
// Components
const ComponentsOverview = Loadable(
  lazy(() => import("../pages/ComponentsOverview"))
);
const Color = Loadable(
  lazy(() => import("../pages/components-overview/foundations/FoundationColor"))
);
const Typography = Loadable(
  lazy(() =>
    import("../pages/components-overview/foundations/FoundationTypography")
  )
);
const Shadows = Loadable(
  lazy(() =>
    import("../pages/components-overview/foundations/FoundationShadows")
  )
);
const Grid = Loadable(
  lazy(() => import("../pages/components-overview/foundations/FoundationGrid"))
);
const Icons = Loadable(
  lazy(() => import("../pages/components-overview/foundations/FoundationIcons"))
);
const Accordion = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Accordion"))
);
const Alert = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Alert"))
);
const Autocomplete = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Autocomplete"))
);
const Avatar = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Avatar"))
);
const Badge = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Badge"))
);
const Breadcrumb = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Breadcrumb"))
);
const Buttons = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/buttons"))
);
const Checkbox = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Checkboxes"))
);
const Chip = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/chips"))
);
const Dialog = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/dialog"))
);
const Label = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Label"))
);
const List = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Lists"))
);
const Menu = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Menus"))
);
const Pagination = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Pagination"))
);
const Pickers = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/pickers"))
);
const Popover = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Popover"))
);
const Progress = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/progress"))
);
const RadioButtons = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/RadioButtons"))
);
const Rating = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Rating"))
);
const Slider = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Slider"))
);
const Snackbar = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Snackbar"))
);
const Stepper = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/stepper"))
);
const Switches = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Switches"))
);
const Table = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/table"))
);
const Tabs = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Tabs"))
);
const Textfield = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/textfield"))
);
const Timeline = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Timeline"))
);
const Tooltip = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/Tooltip"))
);
const TransferList = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/transfer-list"))
);
const TreeView = Loadable(
  lazy(() => import("../pages/components-overview/material-ui/TreeView"))
);
const Charts = Loadable(
  lazy(() => import("../pages/components-overview/extra/Charts"))
);
const Map = Loadable(
  lazy(() => import("../pages/components-overview/extra/Map"))
);
const Editor = Loadable(
  lazy(() => import("../pages/components-overview/extra/Editor"))
);
const CopyToClipboard = Loadable(
  lazy(() => import("../pages/components-overview/extra/CopyToClipboard"))
);
const Upload = Loadable(
  lazy(() => import("../pages/components-overview/extra/Upload"))
);
const Carousel = Loadable(
  lazy(() => import("../pages/components-overview/extra/Carousel"))
);
const MultiLanguage = Loadable(
  lazy(() => import("../pages/components-overview/extra/MultiLanguage"))
);
const Animate = Loadable(
  lazy(() => import("../pages/components-overview/extra/animate"))
);
const MegaMenu = Loadable(
  lazy(() => import("../pages/components-overview/extra/MegaMenu"))
);
