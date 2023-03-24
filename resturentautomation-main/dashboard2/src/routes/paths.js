// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DOCS = "/docs";
const ROOTS_DASHBOARD = "/dashboard";
const ROOTS_ORDER = "/manageorder";

const ROOTS_AUTH_WAITER = "/waiter";
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  register: path(ROOTS_AUTH, "/register"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  verify: path(ROOTS_AUTH, "/verify"),
};
export const WAITER_AUTH = {
  login: path(ROOTS_AUTH_WAITER, "/waiterlogin"),
  register: path(ROOTS_AUTH_WAITER, "/waiterregister"),
  orders: path(ROOTS_AUTH_WAITER, "/orders"),
};

export const PATH_PAGE = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
  components: "/components",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  // general: {
  //   app: path(ROOTS_DASHBOARD, '/app'),
  //   ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
  //   analytics: path(ROOTS_DASHBOARD, '/analytics'),
  // },
  // mail: {
  //   root: path(ROOTS_DASHBOARD, '/mail'),
  //   all: path(ROOTS_DASHBOARD, '/mail/all'),
  // },
  // chat: {
  //   root: path(ROOTS_DASHBOARD, '/chat'),
  //   new: path(ROOTS_DASHBOARD, '/chat/new'),
  //   conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey'),
  // },
  // calendar: path(ROOTS_DASHBOARD, '/calendar'),
  // kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    // root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    // cards: path(ROOTS_DASHBOARD, '/user/cards'),
    // list: path(ROOTS_DASHBOARD, '/user/list'),
    // newUser: path(ROOTS_DASHBOARD, '/user/new'),
    // editById: path(ROOTS_DASHBOARD, '/user/ada-lindgren/edit'),
    account: path(ROOTS_DASHBOARD, "/user/account"),
  },

  //Pos

  manage: {
    root: path(ROOTS_DASHBOARD, "/manage"),
    posInvoice: path(ROOTS_ORDER, "/pos-invoice"),
    orderList: path(ROOTS_DASHBOARD, "/manage/order-list"),
    pendingOrder: path(ROOTS_DASHBOARD, "/manage/pending-order"),
    completeOrder: path(ROOTS_DASHBOARD, "/manage/complete-order"),
    cancelOrder: path(ROOTS_DASHBOARD, "/manage/cancel-order"),
    kitchenDashboard: path(ROOTS_DASHBOARD, "/manage/kitchen-dashboard"),
    counterDashboard: path(ROOTS_DASHBOARD, "/manage/counter-dashboard"),
    orderTimeManagement: path(ROOTS_DASHBOARD, "/manage/order-time"),
    deliveryTimeFrame: path(ROOTS_DASHBOARD, "/manage/delivery-time"),
    refund: path(ROOTS_DASHBOARD, "/manage/refunded-orders"),
    counterList: path(ROOTS_DASHBOARD, "/manage/counter-list"),
    posSetting: path(ROOTS_DASHBOARD, "/manage/pos-setting"),
    soundSetting: path(ROOTS_DASHBOARD, "/manage/sound-setting"),
  },

  //Reservations

  reservations: {
    root: path(ROOTS_DASHBOARD, "/reservations"),
    reservation: path(ROOTS_DASHBOARD, "/reservations/allreservation"),
    addBooking: path(ROOTS_DASHBOARD, "/reservations/addbooking"),
    pending: path(ROOTS_DASHBOARD, "/reservations/pending-reservations"),
    accepted: path(ROOTS_DASHBOARD, "/reservations/accepted-reservations"),
    rejected: path(ROOTS_DASHBOARD, "/reservations/rejected-reservations"),
    cancelled: path(ROOTS_DASHBOARD, "/reservations/cancelled-reservations"),
    unavailableDay: path(ROOTS_DASHBOARD, "/reservations/unavailableday"),

    reservationSetting: path(
      ROOTS_DASHBOARD,
      "/reservations/reservationsetting"
    ),
    waitingList: path(ROOTS_DASHBOARD, "/reservations/waiting-list"),
    manageTable: {
      root: path(ROOTS_DASHBOARD, "/reservations/managetable"),
      tableList: path(ROOTS_DASHBOARD, "/reservations/managetable/tablelist"),

      tableSetting: path(
        ROOTS_DASHBOARD,
        "/reservations/managetable/tablesetting"
      ),
    },
  },

  //Purchase Manage

  purchase: {
    root: path(ROOTS_DASHBOARD, "/purchase"),
    purchaseItem: path(ROOTS_DASHBOARD, "/purchase/purchaseitem"),
    addPurchase: path(ROOTS_DASHBOARD, "/purchase/addpurchase"),
    purchaseReturn: path(ROOTS_DASHBOARD, "/purchase/purchasereturn"),
    returnInvoice: path(ROOTS_DASHBOARD, "/purchase/returninvoice"),
    supplierManage: path(ROOTS_DASHBOARD, "/purchase/suppliermanage"),
    supplierLedger: path(ROOTS_DASHBOARD, "/purchase/supplierledger"),
    paymentLedger: path(ROOTS_DASHBOARD, "/purchase/paymentledger"),
    supplierOutIngredient: path(
      ROOTS_DASHBOARD,
      "/purchase/supplieroutingredients"
    ),
  },

  //Reports

  report: {
    root: path(ROOTS_DASHBOARD, "/report"),
    purchaseReport: path(ROOTS_DASHBOARD, "/report/purchasereport"),
    supplierDuePaymentReport: path(
      ROOTS_DASHBOARD,
      "/report/supplierDuePaymentReport"
    ),
    stockReportProductWise: path(
      ROOTS_DASHBOARD,
      "/report/stockreportproductwise"
    ),
    sellReport: {
      root: path(ROOTS_DASHBOARD, "/report/sellreport"),
      sellReport: path(ROOTS_DASHBOARD, "/report/sellreport/sellreport"),
      saleReportItems: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/salereportitems"
      ),
      serviceChargeReport: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/servicechargereport"
      ),
      discountReport: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/discount-report"
      ),
      sellReportOrderType: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/sellreportordertype"
      ),
      sellReportWaiters: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/waiterssellreport"
      ),

      sellReportDeliveryType: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/deliverytypesellreport"
      ),
      sellReportCashier: path(
        ROOTS_DASHBOARD,
        "/report/sellreport/cashiersellreport"
      ),
    },
    kitchenSell: path(ROOTS_DASHBOARD, "/report/kitchensell"),
    cashRegisterReport: path(ROOTS_DASHBOARD, "/report/cashregisterreport"),
    sellReportFiltering: path(ROOTS_DASHBOARD, "/report/sellfiltering"),
    sellByDate: path(ROOTS_DASHBOARD, "/report/sellbydate"),
    commission: path(ROOTS_DASHBOARD, "/report/commission"),
    saleByTable: path(ROOTS_DASHBOARD, "/report/salebytable"),
    // customer: {
    //   root: path(ROOTS_DASHBOARD, "/report/customer"),
    //   addCustomer: path(ROOTS_DASHBOARD, "/report/customer/add-customer"),
    //   customerList: path(ROOTS_DASHBOARD, "/report/customer/customerlist"),
    //   totalCustomerList: path(ROOTS_DASHBOARD, "/report/customer/total-list"),
    //   dineInCustomerList: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/dine-in-list"
    //   ),
    //   webCustomerList: path(ROOTS_DASHBOARD, "/report/customer/web-list"),
    //   appCustomerList: path(ROOTS_DASHBOARD, "/report/customer/app-list"),
    //   thirdPartyCustomerList: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/third-party-customer-list"
    //   ),
    //   customerTypeList: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/customertypelist"
    //   ),
    //   customerProfile: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/customer-profile"
    //   ),
    //   customerOrderHistory: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/customer-order-history"
    //   ),
    //   cardTerminalList: path(
    //     ROOTS_DASHBOARD,
    //     "/report/customer/cardterminallist"
    //   ),
    // },
    expense: {
      root: path(ROOTS_DASHBOARD, "/report/expense"),
      addExpenseItem: path(ROOTS_DASHBOARD, "/report/expense/additemexpense"),
      manageExpensseItem: path(
        ROOTS_DASHBOARD,
        "/report/expense/manageitemexpense"
      ),
      addExpense: path(ROOTS_DASHBOARD, "/report/expense/addexpense"),
      manageExpense: path(ROOTS_DASHBOARD, "/report/expense/manageexpense"),
      expenseStatement: path(
        ROOTS_DASHBOARD,
        "/report/expense/expensestatement"
      ),
    },
    wasteReport: path(ROOTS_DASHBOARD, "/report/waste-report"),
    profitLoss: path(ROOTS_DASHBOARD, "/report/profit-loss"),
  },

  //Customer 
  customer: {
    root: path(ROOTS_DASHBOARD, "/customer"),
    addCustomer: path(ROOTS_DASHBOARD, "/customer/add-customer"),
    customerList: path(ROOTS_DASHBOARD, "/customer/customerlist"),
    totalCustomerList: path(ROOTS_DASHBOARD, "/customer/total-list"),
    dineInCustomerList: path(
      ROOTS_DASHBOARD,
      "/customer/dine-in-list"
    ),
    webCustomerList: path(ROOTS_DASHBOARD, "/customer/web-list"),
    appCustomerList: path(ROOTS_DASHBOARD, "/customer/app-list"),
    thirdPartyCustomerList: path(
      ROOTS_DASHBOARD,
      "/customer/third-party-customer-list"
    ),
    customerTypeList: path(
      ROOTS_DASHBOARD,
      "/customer/customertypelist"
    ),
    customerProfile: path(
      ROOTS_DASHBOARD,
      "/customer/customer-profile"
    ),
    customerOrderHistory: path(
      ROOTS_DASHBOARD,
      "/customer/customer-order-history"
    ),
    cardTerminalList: path(
      ROOTS_DASHBOARD,
      "/customer/cardterminallist"
    ),
  },

  //Food Management

  foodManagement: {
    root: path(ROOTS_DASHBOARD, "/foodmanagement"),
    manageCategory: {
      root: path(ROOTS_DASHBOARD, "/foodmanagement/managecategory"),
      addCategory: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managecategory/addcategory"
      ),
      categoryList: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managecategory/categorylist"
      ),
    },
    manageFood: {
      root: path(ROOTS_DASHBOARD, "/foodmanagement/managefood"),
      addFood: path(ROOTS_DASHBOARD, "/foodmanagement/managefood/addfood"),
      manageMenu: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/manage-menu"
      ),
      addFoodVariant: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/add-variant"
      ),
      foodList: path(ROOTS_DASHBOARD, "/foodmanagement/managefood/foodlist"),
      addGroupItem: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/addgroupitem"
      ),
      foodVariant: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/foodvariant"
      ),
      addAvailability: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/add-availability"
      ),
      foodAvailability: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/managefood/foodavailability"
      ),
      toppings: path(ROOTS_DASHBOARD, "/foodmanagement/managefood/topping"),
      menuType: path(ROOTS_DASHBOARD, "/foodmanagement/managefood/menutype"),
    },
    manageAddons: {
      root: path(ROOTS_DASHBOARD, "/foodmanagement/manageaddons"),
      addAddons: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/manageaddons/addaddons"
      ),
      addonsList: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/manageaddons/addonslist"
      ),
      addonsAssignList: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/manageaddons/addonsassignlist"
      ),
    },
    manageRecipe: {
      root: path(ROOTS_DASHBOARD, "/foodmanagement/manage-recipe"),
      addRecipe: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/manage-recipe/add-recipe"
      ),
      recipeList: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/manage-recipe/recipe-list"
      ),
    },

    addWaste: path(ROOTS_DASHBOARD, "/foodmanagement/add-waste"),
    pricing: {
      root: path(ROOTS_DASHBOARD, "/foodmanagement/pricing"),
      dynamicPricing: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/pricing/dynamic-pricing"
      ),
      pricingList: path(
        ROOTS_DASHBOARD,
        "/foodmanagement/pricing/pricing-list"
      ),
    },
  },

  //Production

  production: {
    root: path(ROOTS_DASHBOARD, "/production"),
    setProductionUnit: path(ROOTS_DASHBOARD, "/production/setproductionunit"),
    productionSetList: path(ROOTS_DASHBOARD, "/production/productionsetlist"),
    addProduction: path(ROOTS_DASHBOARD, "/production/addproduction"),
    productionSetting: path(ROOTS_DASHBOARD, "/production/productionsetting"),
  },

  //Setting

  setting: {
    root: path(ROOTS_DASHBOARD, "/setting"),

    paymentSetting: {
      root: path(ROOTS_DASHBOARD, "/setting/paymentsetting"),
      paymentMethodList: path(
        ROOTS_DASHBOARD,
        "/setting/paymentsetting/paymentmethodlist"
      ),
      paymentSetup: path(
        ROOTS_DASHBOARD,
        "/setting/paymentsetting/paymentsetup"
      ),
      shippingMethodSetting: path(
        ROOTS_DASHBOARD,
        "/setting/paymentsetting/shippingmethodsetting"
      ),
    },
    orderType: path(ROOTS_DASHBOARD, "/setting/order-type"),
    addsection: path(ROOTS_DASHBOARD, "/setting/manage-table/add-section"),
    printerScanner: path(ROOTS_DASHBOARD, "/setting/printer-scanner"),
    invoiceSetting: path(ROOTS_DASHBOARD, "/setting/invoice-setting"),
    // taxes: path(ROOTS_DASHBOARD, "/setting/taxes"),

    taxes:{
      root: path(ROOTS_DASHBOARD, "/setting/taxes-charges"),
      tax: path(ROOTS_DASHBOARD, "/setting/taxes-charges/taxes"),
      charges: path(ROOTS_DASHBOARD, "/setting/taxes-charges/charge"),
    },

    kitchenSetting: {
      root: path(ROOTS_DASHBOARD, "/setting/kitchensetting"),
      kitchenList: path(ROOTS_DASHBOARD, "/setting/kitchensetting/kitchenlist"),
      kitchenAssign: path(
        ROOTS_DASHBOARD,
        "/setting/kitchensetting/kitchenassign"
      ),
      kitchenDashboardSetting: path(
        ROOTS_DASHBOARD,
        "/setting/kitchensetting/kitchendashboardsetting"
      ),
    },
    unitMeasurement: {
      root: path(ROOTS_DASHBOARD, "/setting/unitmeasurement"),
      unitMeasurementList: path(
        ROOTS_DASHBOARD,
        "/setting/unitmeasurement/unitmeasurementlist"
      ),
      ingredientList: path(
        ROOTS_DASHBOARD,
        "/setting/unitmeasurement/ingredientlist"
      ),
    },

    bank: {
      root: path(ROOTS_DASHBOARD, "/setting/bank"),
      bankList: path(ROOTS_DASHBOARD, "/setting/bank/banklist"),
      bankTransaction: path(ROOTS_DASHBOARD, "/setting/bank/banktransaction"),
    },
    deliveryZone: {
      root: path(ROOTS_DASHBOARD, "/setting/delivery-zone"),
      city: path(ROOTS_DASHBOARD, "/setting/delivery-zone/city"),
      deliverableArea: path(
        ROOTS_DASHBOARD,
        "/setting/delivery-zone/deliverable-area"
      ),
    },
    userSetting: {
      root: path(ROOTS_DASHBOARD, "/setting/user"),
      addUser: path(ROOTS_DASHBOARD, "/setting/user/adduser"),
      userList: path(ROOTS_DASHBOARD, "/setting/user/userlist"),
    },
    rolePermission: {
      root: path(ROOTS_DASHBOARD, "/setting/rolepermission"),
      permissionSetup: path(
        ROOTS_DASHBOARD,
        "/setting/rolepermission/permissionsetup"
      ),
      addRole: path(ROOTS_DASHBOARD, "/setting/rolepermission/addrole"),
      roleList: path(ROOTS_DASHBOARD, "/setting/rolepermission/rolelist"),
      userAccessRole: path(
        ROOTS_DASHBOARD,
        "/setting/rolepermission/useraccessrole"
      ),
    },
    webSetting: path(ROOTS_DASHBOARD, "/setting/web-setting"),
    manageStoreTime: path(ROOTS_DASHBOARD, "/setting/managestoretime"),
    language: path(ROOTS_DASHBOARD, "/setting/language"),
    applicationSetting: path(ROOTS_DASHBOARD, "/setting/applicationsetting"),
    appSetting: path(ROOTS_DASHBOARD, "/setting/appsetting"),
    factoryReset: path(ROOTS_DASHBOARD, "/setting/factoryreset"),
    currency: path(ROOTS_DASHBOARD, "/setting/currency"),
    country: path(ROOTS_DASHBOARD, "/setting/country"),
    state: path(ROOTS_DASHBOARD, "/setting/state"),
  },

  //Accounts

  account: {
    root: path(ROOTS_DASHBOARD, "/accounts"),
    chartOfAccount: path(ROOTS_DASHBOARD, "/accounts/chartofaccount"),
    supplierPayment: path(ROOTS_DASHBOARD, "/accounts/supplierpayment"),
    cashAdjust: path(ROOTS_DASHBOARD, "/accounts/cashadjustment"),
    debitVoucher: path(ROOTS_DASHBOARD, "/accounts/debitvoucher"),
    creditVoucher: path(ROOTS_DASHBOARD, "/accounts/creditvoucher"),
    contraVoucher: path(ROOTS_DASHBOARD, "/accounts/contravoucher"),
    journalVoucher: path(ROOTS_DASHBOARD, "/accounts/journalvoucher"),
    voucherApproval: path(ROOTS_DASHBOARD, "/accounts/voucherapproval"),

    accountReport: {
      root: path(ROOTS_DASHBOARD, "/accounts/accountreport"),
      voucherReport: path(
        ROOTS_DASHBOARD,
        "/accounts/accountreport/vouchereport"
      ),
      cashBook: path(ROOTS_DASHBOARD, "/accounts/accountreport/cashbook"),
      bankBook: path(ROOTS_DASHBOARD, "/accounts/accountreport/bankbook"),
      generalLedger: path(
        ROOTS_DASHBOARD,
        "/accounts/accountreport/generalledger"
      ),
      trialBalance: path(
        ROOTS_DASHBOARD,
        "/accounts/accountreport/trialbalance"
      ),
      profitLoss: path(ROOTS_DASHBOARD, "/accounts/accountreport/profitloss"),
      cashFlow: path(ROOTS_DASHBOARD, "/accounts/accountreport/cashflow"),
      coaPrint: path(ROOTS_DASHBOARD, "/accounts/accountreport/coaprint"),
      balanceSheet: path(
        ROOTS_DASHBOARD,
        "/accounts/accountreport/balancesheet"
      ),
    },
  },

  // Inventory Management
  inventoryManagement: {
    root: path(ROOTS_DASHBOARD, "/inventory"),
    ingredientCatagories: path(
      ROOTS_DASHBOARD,
      "/inventory/ingredient-catagories"
    ),
    ingredientUnits: path(ROOTS_DASHBOARD, "/inventory/ingredient-units"),
    ingredients: path(ROOTS_DASHBOARD, "/inventory/ingredients"),
    stockAdjustment: path(ROOTS_DASHBOARD, "/inventory/stock-adjustment"),
    foodInventoryReport: path(ROOTS_DASHBOARD, "/inventory/inventory-report"),
  },

  //Human Resource

  humanResource: {
    root: path(ROOTS_DASHBOARD, "/humanresource"),
    hrm: {
      root: path(ROOTS_DASHBOARD, "/humanresource/hrm"),
      designation: path(ROOTS_DASHBOARD, "/humanresource/hrm/designation"),
      addEmp: path(ROOTS_DASHBOARD, "/humanresource/hrm/addemployee"),
      manageEmp: path(ROOTS_DASHBOARD, "/humanresource/hrm/manageemployee"),
      manageEmpSalary: path(ROOTS_DASHBOARD, "/humanresource/hrm/managesalary"),
      commission: path(ROOTS_DASHBOARD, "/humanresource/hrm/commission"),
    },
    shiftManagement: {
      root: path(ROOTS_DASHBOARD, "/humanresource/shift-management"),
      shiftMapping: path(
        ROOTS_DASHBOARD,
        "/humanresource/shift-management/shift-mapping"
      ),
      manageShift: path(
        ROOTS_DASHBOARD,
        "/humanresource/shift-management/manage-shift"
      ),
      dashboard: path(
        ROOTS_DASHBOARD,
        "/humanresource/shift-management/dashboard"
      ),
    },
    attendance: {
      root: path(ROOTS_DASHBOARD, "/humanresource/attendance"),
      attendanceForm: path(
        ROOTS_DASHBOARD,
        "/humanresource/attendance/attendanceform"
      ),
      markedAttendance: path(
        ROOTS_DASHBOARD,
        "/humanresource/attendance/markedattendance"
      ),
      monthlyAttendance: path(
        ROOTS_DASHBOARD,
        "/humanresource/attendance/monthlyattendance"
      ),
      summaryAttendance: path(
        ROOTS_DASHBOARD,
        "/humanresource/attendance/summaryattendance"
      ),
      attendanceReport: path(
        ROOTS_DASHBOARD,
        "/humanresource/attendance/attendencereport"
      ),
    },

    award: {
      root: path(ROOTS_DASHBOARD, "/humanresource/award"),
      newAward: path(ROOTS_DASHBOARD, "/humanresource/award/newaward"),
    },
    recruitment: {
      root: path(ROOTS_DASHBOARD, "/humanresource/recruitment"),
      addNewCandidate: path(
        ROOTS_DASHBOARD,
        "/humanresource/recruitment/addnewcandidate"
      ),
      createJob: path(ROOTS_DASHBOARD, "/humanresource/recruitment/createjob"),
      manageCandidate: path(
        ROOTS_DASHBOARD,
        "/humanresource/recruitment/managecandidate"
      ),
      candidateShortlist: path(
        ROOTS_DASHBOARD,
        "/humanresource/recruitment/candidateshortlist"
      ),
      interview: path(ROOTS_DASHBOARD, "/humanresource/recruitment/interview"),
      canditateSelection: path(
        ROOTS_DASHBOARD,
        "/humanresource/recruitment/candidateselection"
      ),
    },
    department: {
      root: path(ROOTS_DASHBOARD, "/humanresource/department"),
      department: path(ROOTS_DASHBOARD, "/humanresource/department/department"),
      addDivision: path(
        ROOTS_DASHBOARD,
        "/humanresource/department/adddivision"
      ),
      manageDivision: path(
        ROOTS_DASHBOARD,
        "/humanresource/department/managedivision"
      ),
    },
    leave: {
      root: path(ROOTS_DASHBOARD, "/humanresource/leave"),
      weeklyHoliday: path(
        ROOTS_DASHBOARD,
        "/humanresource/leave/weeklyholiday"
      ),
      holiday: path(ROOTS_DASHBOARD, "/humanresource/leave/holiday"),
      addLeaveType: path(ROOTS_DASHBOARD, "/humanresource/leave/addleavetype"),
      leaveApplication: path(
        ROOTS_DASHBOARD,
        "/humanresource/leave/leaveapplication"
      ),
    },
    loan: {
      root: path(ROOTS_DASHBOARD, "/humanresource/loan"),
      grantLoan: path(ROOTS_DASHBOARD, "/humanresource/loan/grantloan"),
      loanInstallment: path(
        ROOTS_DASHBOARD,
        "/humanresource/loan/loaninstallment"
      ),
      loanReport: path(ROOTS_DASHBOARD, "/humanresource/loan/loanreport"),
    },
    payroll: {
      root: path(ROOTS_DASHBOARD, "/humanresource/payroll"),
      salaryTypeSetup: path(
        ROOTS_DASHBOARD,
        "/humanresource/payroll/salarytypesetup"
      ),
      salarySetup: path(ROOTS_DASHBOARD, "/humanresource/payroll/salarysetup"),
      manageSalaries: path(
        ROOTS_DASHBOARD,
        "/humanresource/payroll/managesalaries"
      ),
      generateSalaries: path(
        ROOTS_DASHBOARD,
        "/humanresource/payroll/generatesalaries"
      ),
      overtime: path(ROOTS_DASHBOARD, "/humanresource/payroll/overtime"),
      bonus: path(ROOTS_DASHBOARD, "/humanresource/payroll/bonus"),
      salaryGenerate: path(
        ROOTS_DASHBOARD,
        "/humanresource/payroll/salarygenerate"
      ),
    },
  },

  // QR Code Management
  qrManagement: {
    root: path(ROOTS_DASHBOARD, "/qr-code"),
    qrCodeTable: path(ROOTS_DASHBOARD, "/qr-code/qr-table"),
    qrGenerate: path(ROOTS_DASHBOARD, "/qr-code/qr-generate"),
    tableQR: path(ROOTS_DASHBOARD, "/qr-code/qr-table-generate"),
    advertisementQR: path(ROOTS_DASHBOARD, "/qr-code/qr-advertisement"),
  },

  //Default

  marketing: {
    root: path(ROOTS_DASHBOARD, "/marketing"),
    campaign: {
      root: path(ROOTS_DASHBOARD, "/marketing/campaign"),
      basicCampaign: path(
        ROOTS_DASHBOARD,
        "/marketing/campaign/basic-campaign"
      ),
      foodCampaign: path(ROOTS_DASHBOARD, "/marketing/campaign/food-campaign"),
    },
    bannerSetting: {
      root: path(ROOTS_DASHBOARD, "/marketing/banner-setting"),
      addBanner: path(ROOTS_DASHBOARD, "/marketing/banner-setting/add-banner"),
      bannerList: path(
        ROOTS_DASHBOARD,
        "/marketing/banner-setting/banner-list"
      ),
    },
    couponSetting: {
      root: path(ROOTS_DASHBOARD, "/marketing/coupon-setting"),
      addCoupon: path(ROOTS_DASHBOARD, "/marketing/coupon-setting/add-coupon"),
      couponList: path(
        ROOTS_DASHBOARD,
        "/marketing/coupon-setting/coupon-list"
      ),
    },
    smsSetting: {
      root: path(ROOTS_DASHBOARD, "/marketing/smssetting"),
      smsContact: path(ROOTS_DASHBOARD, "/marketing/smssetting/sms-contact"),
      smsGroup: path(ROOTS_DASHBOARD, "/marketing/smssetting/sms-group"),
      sendSms: path(ROOTS_DASHBOARD, "/marketing/smssetting/send-sms"),
      smsHistory: path(ROOTS_DASHBOARD, "/marketing/smssetting/sms-history"),
      smsConfig: path(
        ROOTS_DASHBOARD,
        "/marketing/smssetting/smsconfiguration"
      ),
      smsTemp: path(ROOTS_DASHBOARD, "/marketing/smssetting/smstemplate"),
      smsBatch: path(ROOTS_DASHBOARD, "/marketing/smssetting/sms-batch"),
    },
    email: {
      root: path(ROOTS_DASHBOARD, "/marketing/email"),
      emailContact: path(ROOTS_DASHBOARD, "/marketing/email/email-contact"),
      emailGroup: path(ROOTS_DASHBOARD, "/marketing/email/email-group"),
      sendEmail: path(ROOTS_DASHBOARD, "/marketing/email/send-email"),
      emailHistory: path(ROOTS_DASHBOARD, "/marketing/email/email-history"),
      emailTemp: path(ROOTS_DASHBOARD, "/marketing/email/email-template"),
      emailBatch: path(ROOTS_DASHBOARD, "/marketing/email/email-batch"),
    },
    socialSetting: path(ROOTS_DASHBOARD, "/marketing/socialsetting"),
  },

  webSetting: {
    root: path(ROOTS_DASHBOARD, "/websetting"),
    commonSetting: path(ROOTS_DASHBOARD, "/websetting/commonsetting"),

    menuSetting: path(ROOTS_DASHBOARD, "/websetting/menusetting"),
    seoSetting: path(ROOTS_DASHBOARD, "/websetting/seosetting"),
    widgetSetting: path(ROOTS_DASHBOARD, "/websetting/widgetsetting"),
    emailSetting: path(ROOTS_DASHBOARD, "/websetting/emailsetting"),
    customer: path(ROOTS_DASHBOARD, "/websetting/customer"),

    subscribeList: path(ROOTS_DASHBOARD, "/websetting/subscribelist"),
  },
  message: {
    root: path(ROOTS_DASHBOARD, "/message"),
    newMessage: path(ROOTS_DASHBOARD, "/message/new"),
    inboxMessage: path(ROOTS_DASHBOARD, "/message/inbox"),
    sentMessage: path(ROOTS_DASHBOARD, "/message/sent"),
  },
  subscription: {
    root: path(ROOTS_DASHBOARD, "/subscription"),
    pricing: path(ROOTS_DASHBOARD, "/subscription/pricing"),
    smsPricing: path(ROOTS_DASHBOARD, "/subscription/sms-pricing"),
    storagePricing: path(ROOTS_DASHBOARD, "/subscription/storage-pricing"),
  },

  // eCommerce: {
  //   root: path(ROOTS_DASHBOARD, '/e-commerce'),
  //   shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
  //   product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
  //   productById: path(
  //     ROOTS_DASHBOARD,
  //     '/e-commerce/product/nike-air-force-1-ndestrukt'
  //   ),
  //   list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
  //   newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
  //   editById: path(
  //     ROOTS_DASHBOARD,
  //     '/e-commerce/product/nike-blazer-low-77-vintage/edit'
  //   ),
  //   checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
  //   invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice'),
  // },
  // blog: {
  //   root: path(ROOTS_DASHBOARD, '/blog'),
  //   posts: path(ROOTS_DASHBOARD, '/blog/posts'),
  //   post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
  //   postById: path(
  //     ROOTS_DASHBOARD,
  //     '/blog/post/portfolio-review-is-this-portfolio-too-creative'
  //   ),
  //   newPost: path(ROOTS_DASHBOARD, '/blog/new-post'),
  // },
};

export const PATH_ORDER = {
  root: ROOTS_ORDER,
  billing: {
    posInvoice: path(ROOTS_ORDER, "/pos-invoice"),
  },
};

export const PATH_DOCS = {
  root: ROOTS_DOCS,
  introduction: path(ROOTS_DOCS, "/introduction"),
  quickstart: path(ROOTS_DOCS, "/quick-start"),
  package: path(ROOTS_DOCS, "/package"),

  // Theme UI
  color: path(ROOTS_DOCS, "/color"),
  typography: path(ROOTS_DOCS, "/typography"),
  icon: path(ROOTS_DOCS, "/icon"),
  shadows: path(ROOTS_DOCS, "/shadows"),
  components: path(ROOTS_DOCS, "/components"),
  settings: path(ROOTS_DOCS, "/settings"),
  tips: path(ROOTS_DOCS, "/tips"),

  // Development
  routing: path(ROOTS_DOCS, "/routing"),
  environmentVariables: path(ROOTS_DOCS, "/environment-variables"),
  stateManagement: path(ROOTS_DOCS, "/state-management"),
  apiCalls: path(ROOTS_DOCS, "/api-calls"),
  analytics: path(ROOTS_DOCS, "/analytics"),
  authentication: path(ROOTS_DOCS, "/authentication"),
  multiLanguage: path(ROOTS_DOCS, "/multi-language"),
  lazyload: path(ROOTS_DOCS, "/lazyload-image"),
  formHelper: path(ROOTS_DOCS, "/form-helper"),

  // Changelog
  support: path(ROOTS_DOCS, "/support"),
  changelog: path(ROOTS_DOCS, "/changelog"),
};
