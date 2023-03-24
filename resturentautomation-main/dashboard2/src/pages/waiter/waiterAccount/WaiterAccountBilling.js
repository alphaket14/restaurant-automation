import "./Waiteraccount.css";

const WaiterBilling = () => {
  return (
    <>
      <div className="billing-container">
        <div className="plans">
          <h3>Change Plan</h3>
          <p>you can upgrade and downgrade you plan as you want</p>
          <div className="card-container">
            <div className="plan-card">
              <div>
                $0/mo
                <br />
                Startup
              </div>
              <span>using now</span>
            </div>
            <div className="plan-card">
              <div>
                $4.99/mo
                <br />
                Startup
              </div>
              <span></span>
            </div>
            <div className="plan-card">
              <div>
                $29.99/mo
                <br />
                Startup
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaiterBilling;
