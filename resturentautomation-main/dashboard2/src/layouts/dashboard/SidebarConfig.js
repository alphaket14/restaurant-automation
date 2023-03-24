// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";

import { Home, Storefront, Inventory } from "@mui/icons-material";

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle
    src={`/static/icons/navbar/${name}.svg`}
    sx={{ width: "100%", height: "100%" }}
  />
);

const ICONS = {
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  // calendar: getIcon('ic_calendar'),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  kanban: getIcon("ic_kanban"),
  manageOrder: getIcon("ic_cart"),
  foodManagement: getIcon("ic_food"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'general',
  //   items: [
  //     {
  //       title: 'app',
  //       path: PATH_DASHBOARD.general.app,
  //       icon: ICONS.dashboard
  //     },
  //     { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
  //     { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics }
  //   ]
  // },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: "Dashboard",
    items: [
      // MANAGEMENT : USER
      // {
      //   title: 'user',
      //   path: PATH_DASHBOARD.user.root,
      //   icon: ICONS.user,
      //   children: [
      //     { title: 'profile', path: PATH_DASHBOARD.user.profile },
      //     { title: 'cards', path: PATH_DASHBOARD.user.cards },
      //     { title: 'list', path: PATH_DASHBOARD.user.list },
      //     { title: 'create', path: PATH_DASHBOARD.user.newUser },
      //     { title: 'edit', path: PATH_DASHBOARD.user.editById },
      //     { title: 'account', path: PATH_DASHBOARD.user.account },
      //   ],
      // },

      //Home
      // {
      //   title: "Home",
      //   path: "/dashboard/outlet",
      //   icon: <Home />
      // },

      //Outlets
      {
        title: "Outlets",
        path: "/dashboard/outlet",
        icon: <Storefront />,
      },

      //Analytics
      {
        title: "Analytics",
        path: "/dashboard/analytics",
        icon: ICONS.analytics,
      },

      // Pos System
      {
        title: "POS System",
        path: PATH_DASHBOARD.manage.root,
        icon: ICONS.ecommerce,
        children: [
          {
            title: "POS",
            path: PATH_DASHBOARD.manage.posInvoice,
          },
          { title: "order list", path: PATH_DASHBOARD.manage.orderList },
          {
            title: "pending orders",
            path: PATH_DASHBOARD.manage.pendingOrder,
          },
          {
            title: "completed orders",
            path: PATH_DASHBOARD.manage.completeOrder,
          },
          {
            title: "canceled orders",
            path: PATH_DASHBOARD.manage.cancelOrder,
          },
          {
            title: "Kitchen Panel",
            path: PATH_DASHBOARD.manage.kitchenDashboard,
          },
          {
            title: "counter dashboard",
            path: PATH_DASHBOARD.manage.counterDashboard,
          },
          {
            title: "Order Time Management",
            path: PATH_DASHBOARD.manage.orderTimeManagement,
          },
          {
            title: "Delivery Time Frame",
            path: PATH_DASHBOARD.manage.deliveryTimeFrame,
          },
          {
            title: "Refund",
            path: PATH_DASHBOARD.manage.refund,
          },
        ],
      },

      // RESERVATIONS
      {
        title: "reservations",
        path: PATH_DASHBOARD.reservations.root,
        icon: ICONS.kanban,
        children: [
          {
            title: "Reservation List",
            path: PATH_DASHBOARD.reservations.reservation,
          },
          {
            title: "Add Booking",
            path: PATH_DASHBOARD.reservations.addBooking,
          },
          {
            title: "Pending Reservations",
            path: PATH_DASHBOARD.reservations.pending,
          },
          {
            title: "Accepted Reservations",
            path: PATH_DASHBOARD.reservations.accepted,
          },
          {
            title: "Rejected Reservations",
            path: PATH_DASHBOARD.reservations.rejected,
          },
          {
            title: "Cancelled Reservations",
            path: PATH_DASHBOARD.reservations.cancelled,
          },
          {
            title: "Waiting List",
            path: PATH_DASHBOARD.reservations.waitingList,
          },
          {
            title: "Unavailabe Day",
            path: PATH_DASHBOARD.reservations.unavailableDay,
          },
          {
            title: "Reservation Setting",
            path: PATH_DASHBOARD.reservations.reservationSetting,
          },
        ],
      },

      //FOOD MANAGEMENT
      {
        title: "Food Management",
        path: PATH_DASHBOARD.foodManagement.root,
        icon: ICONS.foodManagement,
        children: [
          {
            title: "Manage Menu",
            path: PATH_DASHBOARD.foodManagement.manageFood.manageMenu,
          },
          {
            title: "Manage Category",
            path: PATH_DASHBOARD.foodManagement.manageCategory.root,
            children: [
              /*{
                title: "Add Category",
                path: PATH_DASHBOARD.foodManagement.manageCategory.addCategory,
              },*/
              {
                title: "Category List",
                path: PATH_DASHBOARD.foodManagement.manageCategory.categoryList,
              },
            ],
          },
          {
            title: "Manage Food",
            path: PATH_DASHBOARD.foodManagement.manageFood.root,
            children: [
              /*{
                title: "Add Food",
                path: PATH_DASHBOARD.foodManagement.manageFood.addFood,
              },*/
              {
                title: "Food List",
                path: PATH_DASHBOARD.foodManagement.manageFood.foodList,
              },
              /*{
                title: "Add Food Variant",
                path: PATH_DASHBOARD.foodManagement.manageFood.addFoodVariant,
              },*/
              {
                title: "Variant",
                path: PATH_DASHBOARD.foodManagement.manageFood.foodVariant,
              },
              /*{
                title: "Add Food Availability",
                path: PATH_DASHBOARD.foodManagement.manageFood.addAvailability,
              },*/
              {
                title: "Availability",
                path: PATH_DASHBOARD.foodManagement.manageFood.foodAvailability,
              },
              {
                title: "Topping",
                path: PATH_DASHBOARD.foodManagement.manageFood.toppings,
              },
              {
                title: "Add on",
                path: PATH_DASHBOARD.foodManagement.manageAddons.addonsList,
              },
              // {
              //   title: "Add Group Item",
              //   path: PATH_DASHBOARD.foodManagement.manageFood.addGroupItem
              // },
              // { title: "Menu Type", path: PATH_DASHBOARD.foodManagement.manageFood.menuType }
            ],
          },
          /*{
            title: "Manage Addons",
            path: PATH_DASHBOARD.foodManagement.manageAddons.root,
            children: [
              {
                title: "Add Add-ons",
                path: PATH_DASHBOARD.foodManagement.manageAddons.addAddons,
              },
              {
                title: "Add-ons List",
                path: PATH_DASHBOARD.foodManagement.manageAddons.addonsList,
              },
              {
                title: "Add-ons Assign List",
                path: PATH_DASHBOARD.foodManagement.manageAddons
                  .addonsAssignList,
              },
            ],
          },*/
          {
            title: "Manage Recipe",
            path: PATH_DASHBOARD.foodManagement.manageRecipe.root,
            children: [
              {
                title: "Add Recipe",
                path: PATH_DASHBOARD.foodManagement.manageRecipe.addRecipe,
              },
              {
                title: "Recipe List",
                path: PATH_DASHBOARD.foodManagement.manageRecipe.recipeList,
              },
            ],
          },

          { title: "Add Waste", path: PATH_DASHBOARD.foodManagement.addWaste },
          {
            title: "Pricing",
            path: PATH_DASHBOARD.foodManagement.pricing.root,
            children: [
              {
                title: "Dynamic Pricing",
                path: PATH_DASHBOARD.foodManagement.pricing.dynamicPricing,
              },
              {
                title: "Pricing List",
                path: PATH_DASHBOARD.foodManagement.pricing.pricingList,
              },
            ],
          },
        ],
      },

      //Purchase
      {
        title: "Purchase Management",
        path: PATH_DASHBOARD.purchase.root,
        icon: ICONS.cart,
        children: [
          {
            title: "Supplier",
            children: [
              {
                title: "Add Supplier",
                path: PATH_DASHBOARD.purchase.supplierManage,
              },
              {
                title: "Supplier List",
                path: PATH_DASHBOARD.purchase.supplierOutIngredient,
              },
              ///Delete
            ],
          },
          {
            title: "Purchase",
            children: [
              {
                title: "Add Purchase",
                path: PATH_DASHBOARD.purchase.addPurchase,
              },
              {
                title: "Purchased List",
                path: PATH_DASHBOARD.purchase.purchaseItem,
              },
              {
                title: "Supplier Ledger",
                path: PATH_DASHBOARD.purchase.supplierLedger,
              },
              {
                title: "Add Purchase Return",
                path: PATH_DASHBOARD.purchase.purchaseReturn,
              },
              {
                title: "Purchase Return Report",
                path: PATH_DASHBOARD.purchase.returnInvoice,
              },
            ],
          },
        ],
      },

      //Inventory Management
      {
        title: "Inventory Management",
        path: PATH_DASHBOARD.inventoryManagement.root,
        icon: <Inventory />,
        children: [
          {
            title: "Ingredient Catagories",
            path: PATH_DASHBOARD.inventoryManagement.ingredientCatagories,
          },
          {
            title: "Ingredient Units",
            path: PATH_DASHBOARD.inventoryManagement.ingredientUnits,
          },
          {
            title: "Ingredients Stock List",
            path: PATH_DASHBOARD.inventoryManagement.ingredients,
          },
          // {
          //   title: "Stock Adjustment",
          //   path: PATH_DASHBOARD.inventoryManagement.stockAdjustment
          // },
          {
            title: "Food Inventory Report",
            path: PATH_DASHBOARD.inventoryManagement.foodInventoryReport,
          },
        ],
      },

      //QR code
      {
        title: "QR-Code Management",
        path: PATH_DASHBOARD.qrManagement.root,
        icon: ICONS.blog,
        children: [
          // { title: "QR Table", path: PATH_DASHBOARD.qrManagement.qrCodeTable },
          {
            title: "Generate QR",
            path: PATH_DASHBOARD.qrManagement.qrGenerate,
          },
          {
            title: "Table QR Codes",
            path: PATH_DASHBOARD.qrManagement.tableQR,
          },
          {
            title: "Advertisement",
            path: PATH_DASHBOARD.qrManagement.advertisementQR,
          },
        ],
      },

      //REPORTS
      {
        title: "Report",
        path: PATH_DASHBOARD.report.root,
        icon: ICONS.analytics,
        children: [
          {
            title: "Purchase Report",
            path: PATH_DASHBOARD.report.purchaseReport,
          },
          {
            title: "Supplier payments",
            path: PATH_DASHBOARD.report.supplierDuePaymentReport,
          },

          {
            title: "Sale report",
            path: PATH_DASHBOARD.report.sellReport.root,
            children: [
              {
                title: "Sell Report",
                path: PATH_DASHBOARD.report.sellReport.sellReport,
              },
              {
                title: "Sale Report Items",
                path: PATH_DASHBOARD.report.sellReport.saleReportItems,
              },
              {
                title: "Sevice Charge Report",
                path: PATH_DASHBOARD.report.sellReport.serviceChargeReport,
              },
              {
                title: "Discount",
                path: PATH_DASHBOARD.report.sellReport.discountReport,
              },
              {
                title: "Sell Report Waiters",
                path: PATH_DASHBOARD.report.sellReport.sellReportWaiters,
              },

              {
                title: "Sell Report Order Type",
                path: PATH_DASHBOARD.report.sellReport.sellReportOrderType,
              },
              {
                title: "Sell Report Delivery Type",
                path: PATH_DASHBOARD.report.sellReport.sellReportDeliveryType,
              },
              // {
              //   title: "Sell Report Cashier",
              //   path: PATH_DASHBOARD.report.sellReport.sellReportCashier
              // },
              // { title: "Profit Loss", path: PATH_DASHBOARD.account.accountReport.profitLoss }
            ],
          },

          // { title: "Cash register report", path: PATH_DASHBOARD.report.cashRegisterReport },
          // { title: "Sell report filtering", path: PATH_DASHBOARD.report.sellReportFiltering },
          // { title: "Sell by date", path: PATH_DASHBOARD.report.sellByDate },
          {
            title: "Kitchen Performance",
            path: PATH_DASHBOARD.report.kitchenSell,
          },
          {
            title: "Employee Commission",
            path: PATH_DASHBOARD.report.commission,
          },
          { title: "Sale by table", path: PATH_DASHBOARD.report.saleByTable },
          // {
          //   title: "Customer",
          //   path: PATH_DASHBOARD.report.customer.root,
          //   children: [
          //     // { title: "Registered Customers", path: PATH_DASHBOARD.report.customer.customerList },
          //     // { title: "All Customers", path: PATH_DASHBOARD.report.customer.customerList },
          //     {
          //       title: "Add Customer",
          //       path: PATH_DASHBOARD.report.customer.addCustomer,
          //     },
          //     // { title: "Customer List", path: PATH_DASHBOARD.report.customer.customerList },
          //     {
          //       title: "Total List",
          //       path: PATH_DASHBOARD.report.customer.totalCustomerList,
          //     },
          //     {
          //       title: "Dine In",
          //       path: PATH_DASHBOARD.report.customer.dineInCustomerList,
          //     },
          //     {
          //       title: "Web",
          //       path: PATH_DASHBOARD.report.customer.webCustomerList,
          //     },
          //     {
          //       title: "App",
          //       path: PATH_DASHBOARD.report.customer.appCustomerList,
          //     },
          //     // {
          //     //   title: "Customer Type List",
          //     //   path: PATH_DASHBOARD.report.customer.customerTypeList
          //     // },
          //     {
          //       title: "Third-Party Customers",
          //       path: PATH_DASHBOARD.report.customer.thirdPartyCustomerList,
          //     },
          //     {
          //       title: "Customer Profile",
          //       path: PATH_DASHBOARD.report.customer.customerProfile,
          //     },
          //     {
          //       title: "Customer Order History",
          //       path: PATH_DASHBOARD.report.customer.customerOrderHistory,
          //     },
          //     // {
          //     //   title: "Card Terminal List",
          //     //   path: PATH_DASHBOARD.report.customer.cardTerminalList
          //     // }
          //   ],
          // },
          {
            title: "Expense",
            path: PATH_DASHBOARD.report.expense.root,
            children: [
              // {
              //   title: "Add Expense Item",
              //   path: PATH_DASHBOARD.report.expense.addExpenseItem
              // },
              // {
              //   title: "Manage Expense Item",
              //   path: PATH_DASHBOARD.report.expense.manageExpensseItem
              // },
              // {
              //   title: "Add Expense",
              //   path: PATH_DASHBOARD.report.expense.addExpense,
              // },
              // { title: "Manage Expense", path: PATH_DASHBOARD.report.expense.manageExpense },
              {
                title: "Expense Statement",
                path: PATH_DASHBOARD.report.expense.expenseStatement,
              },
            ],
          },
          { title: "Waste Report", path: PATH_DASHBOARD.report.wasteReport },
          {
            title: "Profit & Loss Report",
            path: PATH_DASHBOARD.report.profitLoss,
          },
          // {
          //   title: "Stock report product wise",
          //   path: PATH_DASHBOARD.report.stockReportProductWise
          // }
        ],
      },

      //CUSTOMER
      {
        title: "Customer",
        path: PATH_DASHBOARD.customer.root,
        icon: ICONS.user,
        children: [
            // { title: "Registered Customers", path: PATH_DASHBOARD.report.customer.customerList },
            // { title: "All Customers", path: PATH_DASHBOARD.report.customer.customerList },
            {
              title: "Add Customer",
              path: PATH_DASHBOARD.customer.addCustomer,
            },
            // { title: "Customer List", path: PATH_DASHBOARD.report.customer.customerList },
            {
              title: "Total List",
              path: PATH_DASHBOARD.customer.totalCustomerList,
            },
            {
              title: "Dine In",
              path: PATH_DASHBOARD.customer.dineInCustomerList,
            },
            {
              title: "Web",
              path: PATH_DASHBOARD.customer.webCustomerList,
            },
            {
              title: "App",
              path: PATH_DASHBOARD.customer.appCustomerList,
            },
            // {
            //   title: "Customer Type List",
            //   path: PATH_DASHBOARD.report.customer.customerTypeList
            // },
            {
              title: "Third-Party Customers",
              path: PATH_DASHBOARD.customer.thirdPartyCustomerList,
            },
            {
              title: "Customer Profile",
              path: PATH_DASHBOARD.customer.customerProfile,
            },
            {
              title: "Customer Order History",
              path: PATH_DASHBOARD.customer.customerOrderHistory,
            },
            // {
            //   title: "Card Terminal List",
            //   path: PATH_DASHBOARD.report.customer.cardTerminalList
            // }
          ],
        },

      //Accounts
      {
        title: "Account Management",
        path: PATH_DASHBOARD.account.root,
        icon: ICONS.blog,
        children: [
          {
            title: "Chart of Account",
            path: PATH_DASHBOARD.account.chartOfAccount,
          },
          {
            title: "Supplier Payment",
            path: PATH_DASHBOARD.account.supplierPayment,
          },
          { title: "Cash Adjustment", path: PATH_DASHBOARD.account.cashAdjust },
          { title: "Debit Voucher", path: PATH_DASHBOARD.account.debitVoucher },
          {
            title: "Credit Voucher",
            path: PATH_DASHBOARD.account.creditVoucher,
          },
          {
            title: "Contra Voucher",
            path: PATH_DASHBOARD.account.contraVoucher,
          },
          {
            title: "Journal Voucher",
            path: PATH_DASHBOARD.account.journalVoucher,
          },
          {
            title: "Voucher Approval",
            path: PATH_DASHBOARD.account.voucherApproval,
          },
          {
            title: "Account Report",
            path: PATH_DASHBOARD.account.accountReport.root,
            children: [
              {
                title: "Voucher Report",
                path: PATH_DASHBOARD.account.accountReport.voucherReport,
              },
              {
                title: "Cash Book",
                path: PATH_DASHBOARD.account.accountReport.cashBook,
              },
              {
                title: "Bank Book",
                path: PATH_DASHBOARD.account.accountReport.bankBook,
              },
              {
                title: "General Ledger",
                path: PATH_DASHBOARD.account.accountReport.generalLedger,
              },
              {
                title: "Trial Balance",
                path: PATH_DASHBOARD.account.accountReport.trialBalance,
              },
              {
                title: "Cash Flow",
                path: PATH_DASHBOARD.account.accountReport.cashFlow,
              },
              {
                title: "Coa Print",
                path: PATH_DASHBOARD.account.accountReport.coaPrint,
              },
              {
                title: "Balance Sheet",
                path: PATH_DASHBOARD.account.accountReport.balanceSheet,
              },
            ],
          },
        ],
      },

      //Human Resources
      {
        title: "Employee Management",
        path: PATH_DASHBOARD.humanResource.root,
        icon: ICONS.mail,
        children: [
          {
            title: "Recruitment",
            path: PATH_DASHBOARD.humanResource.recruitment.root,
            children: [
              {
                title: "Create Job",
                path: PATH_DASHBOARD.humanResource.recruitment.createJob,
              },
              {
                title: "Add Candidate",
                path: PATH_DASHBOARD.humanResource.recruitment.addNewCandidate,
              },
              {
                title: "Manage Candidate",
                path: PATH_DASHBOARD.humanResource.recruitment.manageCandidate,
              },
              /*{
                title: "Candidate ShortList",
                path: PATH_DASHBOARD.humanResource.recruitment.candidateShortlist
              },*/
              {
                title: "Interview",
                path: PATH_DASHBOARD.humanResource.recruitment.interview,
              },
              /*{
                title: "Candidate Selection",
                path: PATH_DASHBOARD.humanResource.recruitment.canditateSelection
              }*/
            ],
          },
          {
            title: "HRM",
            path: PATH_DASHBOARD.humanResource.hrm.root,
            children: [
              {
                title: "Add Employee",
                path: PATH_DASHBOARD.humanResource.hrm.addEmp,
              },
              {
                title: "Designation",
                path: PATH_DASHBOARD.humanResource.hrm.designation,
              },
              {
                title: "Department",
                path: PATH_DASHBOARD.humanResource.department.department,
              },
              /*{
                title: "Department",
                path: PATH_DASHBOARD.humanResource.department.root,
                children: [
                  { title: "Department", path: PATH_DASHBOARD.humanResource.department.department },
                  { title: "Add Division", path: PATH_DASHBOARD.humanResource.department.addDivision },
                  {
                    title: "Manage Division",
                    path: PATH_DASHBOARD.humanResource.department.manageDivision
                  }
                ]
              },*/
              {
                title: "All Employees",
                path: PATH_DASHBOARD.humanResource.hrm.manageEmp,
              },
            ],
          },
          {
            title: "Shift Management",
            path: PATH_DASHBOARD.humanResource.shiftManagement.root,
            children: [
              {
                title: "New Shift",
                path: PATH_DASHBOARD.humanResource.shiftManagement.manageShift,
              },
              {
                title: "Assign Shift",
                path: PATH_DASHBOARD.humanResource.shiftManagement.shiftMapping,
              },
              {
                title: "Dashboard",
                path: PATH_DASHBOARD.humanResource.shiftManagement.dashboard,
              },
            ],
          },

          {
            title: "Attendance",
            path: PATH_DASHBOARD.humanResource.attendance.root,
            children: [
              {
                title: "Marked Attendance",
                path: PATH_DASHBOARD.humanResource.attendance.markedAttendance,
              },
              {
                title: "Monthly",
                path: PATH_DASHBOARD.humanResource.attendance.monthlyAttendance,
              },
              {
                title: "Summary",
                path: PATH_DASHBOARD.humanResource.attendance.summaryAttendance,
              },
              /*
              {
                title: "Attendance Form",
                path: PATH_DASHBOARD.humanResource.attendance.attendanceForm
              },
              {
                title: "Attendence Report",
                path: PATH_DASHBOARD.humanResource.attendance.attendanceReport
              }*/
            ],
          },

          // {
          //   title: "Awards",
          //   path: PATH_DASHBOARD.humanResource.award.root,
          //   children: [{ title: "New Award", path: PATH_DASHBOARD.humanResource.award.newAward }]
          // },



          {
            title: "Leave",
            path: PATH_DASHBOARD.humanResource.leave.root,
            children: [
              {
                title: "Weekly Holiday",
                path: PATH_DASHBOARD.humanResource.leave.weeklyHoliday,
              },
              {
                title: "Holiday",
                path: PATH_DASHBOARD.humanResource.leave.holiday,
              },
              {
                title: "Leave Type",
                path: PATH_DASHBOARD.humanResource.leave.addLeaveType,
              },
              /*{
                title: "Leave Application",
                path: PATH_DASHBOARD.humanResource.leave.leaveApplication
              }*/
            ],
          },

          {
            title: "Loan",
            path: PATH_DASHBOARD.humanResource.loan.root,
            children: [
              {
                title: "Grant Loan",
                path: PATH_DASHBOARD.humanResource.loan.grantLoan,
              },
              /*{
                title: "Loan Installment",
                path: PATH_DASHBOARD.humanResource.loan.loanInstallment
              },*/
              {
                title: "Loan Report",
                path: PATH_DASHBOARD.humanResource.loan.loanReport,
              },
            ],
          },

          {
            title: "Payroll",
            path: PATH_DASHBOARD.humanResource.payroll.root,
            children: [
              /*{
                title: "Salary Type Setup",
                path: PATH_DASHBOARD.humanResource.payroll.salaryTypeSetup
              },
              { title: "Salary Setup", path: PATH_DASHBOARD.humanResource.payroll.salarySetup },*/
              {
                title: "Manage Salaries",
                path: PATH_DASHBOARD.humanResource.payroll.manageSalaries,
              },
              {
                title: "Generate Salaries",
                path: PATH_DASHBOARD.humanResource.payroll.generateSalaries,
              },
              {
                title: "Settings",
                path: PATH_DASHBOARD.humanResource.payroll.root,
                subchildren: [
                  {
                    title: "Over Time",
                    path: PATH_DASHBOARD.humanResource.payroll.overtime,
                  },
                  {
                    title: "Commission",
                    path: PATH_DASHBOARD.humanResource.hrm.commission,
                  },
                  {
                    title: "Bonus",
                    path: PATH_DASHBOARD.humanResource.payroll.bonus,
                  },
                ],
              },
              /*{
                title: "Salaries",
                path: PATH_DASHBOARD.humanResource.hrm.manageEmpSalary,
              },
              {
                title: "Generate Salary",
                path: PATH_DASHBOARD.humanResource.payroll.salaryGenerate
              },
              {
                title: "Payslip",
                path: PATH_DASHBOARD.humanResource.payroll.salaryGenerate
              }*/
            ],
          },
        ],
      },

      //Marketing
      {
        title: "Marketing Management",
        path: PATH_DASHBOARD.marketing.root,
        icon: ICONS.blog,
        children: [
          {
            title: "Campaign",
            path: PATH_DASHBOARD.marketing.campaign.root,
            children: [
              {
                title: "Basic Campaign",
                path: PATH_DASHBOARD.marketing.campaign.basicCampaign,
              },
              {
                title: "Food Campaign",
                path: PATH_DASHBOARD.marketing.campaign.foodCampaign,
              },
            ],
          },
          {
            title: "Create Banner Ads",
            path: PATH_DASHBOARD.marketing.bannerSetting.root,
            children: [
              // {
              //   title: "Add Banner",
              //   path: PATH_DASHBOARD.marketing.bannerSetting.addBanner,
              // },
              {
                title: "Banners List",
                path: PATH_DASHBOARD.marketing.bannerSetting.bannerList,
              },
            ],
          },
          {
            title: "Create Coupons",
            path: PATH_DASHBOARD.marketing.couponSetting.root,
            children: [
              // {
              //   title: "Add Coupon",
              //   path: PATH_DASHBOARD.marketing.couponSetting.addCoupon,
              // },
              {
                title: "Coupons List",
                path: PATH_DASHBOARD.marketing.couponSetting.couponList,
              },
            ],
          },
          {
            title: "SMS",
            path: PATH_DASHBOARD.marketing.smsSetting.root,
            children: [
              {
                title: "Create Campaign",
                path: PATH_DASHBOARD.marketing.smsSetting.sendSms,
              },
              {
                title: "Campaign Template",
                path: PATH_DASHBOARD.marketing.smsSetting.smsTemp,
              },
              {
                title: "All Contact",
                path: PATH_DASHBOARD.marketing.smsSetting.smsContact,
              },
              {
                title: "Manage Group",
                path: PATH_DASHBOARD.marketing.smsSetting.smsGroup,
              },
              {
                title: "SMS History",
                path: PATH_DASHBOARD.marketing.smsSetting.smsHistory,
              },
              {
                title: "SMS Batch",
                path: PATH_DASHBOARD.marketing.smsSetting.smsBatch,
              },
              // { title: "SMS Configuration", path: PATH_DASHBOARD.marketing.smsSetting.smsConfig },
            ],
          },
          {
            title: "Email",
            path: PATH_DASHBOARD.marketing.email.root,
            children: [
              {
                title: "Create Campaign",
                path: PATH_DASHBOARD.marketing.email.sendEmail,
              },
              {
                title: "Campaign Template",
                path: PATH_DASHBOARD.marketing.email.emailTemp,
              },
              {
                title: "All Contact",
                path: PATH_DASHBOARD.marketing.email.emailContact,
              },
              {
                title: "Manage Group",
                path: PATH_DASHBOARD.marketing.email.emailGroup,
              },
              {
                title: "Email History",
                path: PATH_DASHBOARD.marketing.email.emailHistory,
              },
              {
                title: "Email Batch",
                path: PATH_DASHBOARD.marketing.email.emailBatch,
              },
            ],
          },
          {
            title: "Social Setting",
            path: PATH_DASHBOARD.marketing.socialSetting,
          },

          // { title: "Customer Loyalty Program", path: PATH_DASHBOARD.marketing.couponList },
          // { title: "Customer Taste Habit", path: PATH_DASHBOARD.marketing.couponList },
          // { title: "Referral System", path: PATH_DASHBOARD.marketing.couponList },
          // { title: "Restaurant", path: PATH_DASHBOARD.marketing.couponList }
        ],
      },

      //RESTAURANT SETTING
      {
        title: "Restaurant Setting",
        path: PATH_DASHBOARD.setting.root,
        icon: ICONS.dashboard,
        children: [
          {
            title: "Payment Setting",
            path: PATH_DASHBOARD.setting.paymentSetting.root,
            children: [
              {
                title: "Payment Mode",
                path: PATH_DASHBOARD.setting.paymentSetting.paymentMethodList,
              },
              // {
              //   title: "Order Type",
              //   path: PATH_DASHBOARD.setting.paymentSetting.paymentSetup,
              // },
              // {
              //   title: "Shipping Method Setting",
              //   path: PATH_DASHBOARD.setting.paymentSetting.shippingMethodSetting
              // }
            ],
          },
          {
            title: "Table Management",
            path: PATH_DASHBOARD.reservations.manageTable.root,
            children: [
              {
                title: "Add Section",
                path: PATH_DASHBOARD.setting.addsection,
              },
              {
                title: "Table List",
                path: PATH_DASHBOARD.reservations.manageTable.tableList,
              },
            ],
          },

          {
            title: "Kitchen Setting",
            path: PATH_DASHBOARD.setting.kitchenSetting.root,
            children: [
              {
                title: "Kitchen List",
                path: PATH_DASHBOARD.setting.kitchenSetting.kitchenList,
              },
              {
                title: "Kitchen Assign",
                path: PATH_DASHBOARD.setting.kitchenSetting.kitchenAssign,
              },
              {
                title: "Kitchen Dashboard Setting",
                path: PATH_DASHBOARD.setting.kitchenSetting
                  .kitchenDashboardSetting,
              },
            ],
          },

          { title: "Order Type", path: PATH_DASHBOARD.setting.orderType },

          { 
            title: "Tax & Charge Setting", 
            path: PATH_DASHBOARD.setting.taxes.root,
            children:[
              {
                title:"Tax",
                path: PATH_DASHBOARD.setting.taxes.tax
              },
              {
                title:"Charge",
                path: PATH_DASHBOARD.setting.taxes.charges
              }
            ] 
          },

          {
            title: "Restaurant Web Setting",
            path: PATH_DASHBOARD.setting.webSetting,
          },
          { title: "App Setting", path: PATH_DASHBOARD.setting.appSetting },

          // {
          //   title: "Bank Setting",
          //   path: PATH_DASHBOARD.setting.bank.root,
          //   children: [
          //     { title: "Bank List", path: PATH_DASHBOARD.setting.bank.bankList },
          //     { title: "Bank Transaction", path: PATH_DASHBOARD.setting.bank.bankTransaction }
          //   ]
          // },

          // { title: "Manage Store Time", path: PATH_DASHBOARD.setting.manageStoreTime },
          {
            title: "Invoice Setting",
            path: PATH_DASHBOARD.setting.invoiceSetting,
          },
          {
            title: "Printers & Scanners",
            path: PATH_DASHBOARD.setting.printerScanner,
          },
          {
            title: "Delivery Zone",
            path: PATH_DASHBOARD.setting.deliveryZone.root,
            children: [
              { title: "City", path: PATH_DASHBOARD.setting.deliveryZone.city },
              {
                title: "Deliverable Area",
                path: PATH_DASHBOARD.setting.deliveryZone.deliverableArea,
              },
            ],
          },
          { title: "Languages", path: PATH_DASHBOARD.setting.language },
          {
            title: "General Setting",
            path: PATH_DASHBOARD.webSetting.commonSetting,
          },
          {
            title: "User",
            path: PATH_DASHBOARD.setting.userSetting.root,
            children: [
              {
                title: "Add User",
                path: PATH_DASHBOARD.setting.userSetting.addUser,
              },
              {
                title: "User List",
                path: PATH_DASHBOARD.setting.userSetting.userList,
              },
            ],
          },
          {
            title: "Role Permission",
            path: PATH_DASHBOARD.setting.rolePermission.root,
            children: [
              {
                title: "Permission Setup",
                path: PATH_DASHBOARD.setting.rolePermission.permissionSetup,
              },
              {
                title: "Add Role",
                path: PATH_DASHBOARD.setting.rolePermission.addRole,
              },
              {
                title: "Role List",
                path: PATH_DASHBOARD.setting.rolePermission.roleList,
              },
              {
                title: "User Access Role",
                path: PATH_DASHBOARD.setting.rolePermission.userAccessRole,
              },
            ],
          },

          // { title: "Application Setting", path: PATH_DASHBOARD.setting.applicationSetting },
          // { title: "Factory Reset", path: PATH_DASHBOARD.setting.factoryReset },
          // { title: "Currency", path: PATH_DASHBOARD.setting.currency },
          // { title: "Country", path: PATH_DASHBOARD.setting.country },
          // { title: "State", path: PATH_DASHBOARD.setting.state },
          // {
          //   title: "Unit Measurement",
          //   path: PATH_DASHBOARD.setting.unitMeasurement.root,
          //   children: [
          //     {
          //       title: "Unit Measurement List",
          //       path: PATH_DASHBOARD.setting.unitMeasurement.unitMeasurementList
          //     },
          //     {
          //       title: "Ingredient List",
          //       path: PATH_DASHBOARD.setting.unitMeasurement.ingredientList
          //     }
          //   ]
          // }
        ],
      },

      //PRODUCTION
      // {
      //   title: "Production",
      //   path: PATH_DASHBOARD.production.root,
      //   icon: ICONS.user,
      //   children: [
      //     { title: "Set Production Unit", path: PATH_DASHBOARD.production.setProductionUnit },
      //     { title: "Production Set List", path: PATH_DASHBOARD.production.productionSetList },
      //     { title: "Add Production", path: PATH_DASHBOARD.production.addProduction },
      //     { title: "Production Setting", path: PATH_DASHBOARD.production.productionSetting }
      //   ]
      // }

      // // PURCHASE MANAGE
      // {
      //   title: 'purchase manage',
      //   path: PATH_DASHBOARD.blog.root,
      //   icon: ICONS.blog,
      //   children: [
      //     { title: 'posts', path: PATH_DASHBOARD.blog.posts },
      //     { title: 'post', path: PATH_DASHBOARD.blog.postById },
      //     { title: 'new post', path: PATH_DASHBOARD.blog.newPost },
      //   ],
      // },

      // // MANAGEMENT : E-COMMERCE
      // {
      //   title: 'e-commerce',
      //   path: PATH_DASHBOARD.eCommerce.root,
      //   icon: ICONS.cart,
      //   children: [
      //     { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
      //     { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
      //     { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
      //     { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
      //     { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
      //     { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
      //     { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice },
      //   ],
      // },

      // // MANAGEMENT : BLOG
      // {
      //   title: 'blog',
      //   path: PATH_DASHBOARD.blog.root,
      //   icon: ICONS.blog,
      //   children: [
      //     { title: 'posts', path: PATH_DASHBOARD.blog.posts },
      //     { title: 'post', path: PATH_DASHBOARD.blog.postById },
      //     { title: 'new post', path: PATH_DASHBOARD.blog.newPost },
      //   ],
      // },
    ],
  },

  {
    subheader: "Default",
    items: [
      //Setting
      // {
      //   title: "Settings",
      //   path: PATH_DASHBOARD.webSetting.root,
      //   icon: ICONS.chat,
      //   children: [
      //     { title: "Menu Setting", path: PATH_DASHBOARD.webSetting.menuSetting },
      //     { title: "SEO Setting", path: PATH_DASHBOARD.webSetting.seoSetting },
      //     { title: "Widget Setting", path: PATH_DASHBOARD.webSetting.widgetSetting },
      //     { title: "Email Setting", path: PATH_DASHBOARD.webSetting.emailSetting },
      //     { title: "Customer", path: PATH_DASHBOARD.webSetting.customer },

      //     { title: "Subscribe List", path: PATH_DASHBOARD.webSetting.subscribeList }
      //   ]
      // },
      //Refer
      {
        title: "Refer & Earn",
        path: "/dashboard/modules",
        icon: ICONS.blog,
      },
      //Subscription
      {
        title: "Subscription Plan",
        path: PATH_DASHBOARD.subscription.root,
        icon: ICONS.blog,
        children: [
          { title: "Pricing", path: PATH_DASHBOARD.subscription.pricing },
          {
            title: "SMS Pricing",
            path: PATH_DASHBOARD.subscription.smsPricing,
          },
          {
            title: "Storage Pricing",
            path: PATH_DASHBOARD.subscription.storagePricing,
          },
        ],
      },
      //Help
      {
        title: "Help & Support",
        path: "/dashboard/modules",
        icon: ICONS.blog,
      },

      // {
      //   title: "Message",
      //   path: "/dashboard/message",
      //   icon: ICONS.mail,
      //   children: [
      //     { title: "New", path: "message/new" },
      //     { title: "Inbox", path: "message/inbox" },
      //     { title: "Sent", path: "message/sent" }
      //   ]
      // },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     { title: 'mail', path: PATH_DASHBOARD.mail.root, icon: ICONS.mail },
  //     { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
  //     {
  //       title: 'calendar',
  //       path: PATH_DASHBOARD.calendar,
  //       icon: ICONS.calendar,
  //     },
  //     { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
  //   ],
  // },
];

export default sidebarConfig;
