const router = require('express').Router();
let Outlet = require('../models/outlet.model');
//to get the Restaurant table
router.route('/getoutlets').get((req, res) => {
    Outlet.find((err, data) => {
        if(err){
            res.status(500).send(err.message);
            console.log(err);
        }
        else{
            res.status(201).send(data);
        }
    })
        //.then(Outlet => res.json(Outlet))
        //.catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/add').post((req, res) => {
    const resname = req.body.resname;
    const pan = Number(req.body.pan);
    const gst = Number(req.body.gst);
    const fssai = Number(req.body.fssai);
    const restype=req.body.restype;
    const tablebooking=req.body.tablebooking;
    const outletstatus=req.body.outletstatus;
    const onlinedelivery=req.body.onlinedelivery;
    const partnerdelivery=req.body.partnerdelivery;
    const currencytype=req.body.currencytype;
    const cuisines=req.body.cuisines;
    const starttime=req.body.starttime;
    const endtime=req.body.endtime;
    const city = req.body.city;
    const pincode = Number(req.body.pincode);
    const address = req.body.address;
    const locality = req.body.locality;
    const zone = req.body.zone;
    const state = Number(req.body.state);
    const country = Number(req.body.country);
    const latitude = Number(req.body.latitude);
    const longitude = Number(req.body.longitude);
    const con1 = Number(req.body.con1);
    const con2 = Number(req.body.con2);
    const con3 = Number(req.body.con3);
    const landline = Number(req.body.landline);
    const mail = req.body.mail;
    const weblink = req.body.weblink;
    const avgcost = Number(req.body.avgcost);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = Number(req.body.phone);
    const email = req.body.email;
    const password = req.body.password;
    const newOutlet = new Outlet({
        resname,
        pan,
        gst,
        fssai,
        restype,
        tablebooking,
        partnerdelivery,
        outletstatus,
        onlinedelivery,
        currencytype,
        cuisines,
        starttime,
        endtime,
        city,
        pincode,
        address,
        locality,
        zone,
        state,
        country,
        latitude,
        longitude,
        con1,
        con2,
        con3,
        landline,
        mail,
        weblink,
        avgcost,
        fname,
        lname,
        phone,
        email,
        password,
    });
    newOutlet.save()
        .then(() => res.json('New Outlet registered'))
        .catch(err => res.status(400).json('Error: '+ err));
});
//to add new Restaurant
router.route('/update/:id').post((req, res) => {
    Outlet.findById(req.params.id)
    .then(Outlet => {
       Outlet.resname = req.body.resname;
       Outlet.pan = req.body.pan;
       Outlet.gst = req.body.gst;
       Outlet.fssai = req.body.fssai;
       Outlet.restype=req.body.restype;
       Outlet.tablebooking=req.body.tablebooking;
       Outlet.outletstatus=req.body.outletstatus;
       Outlet.onlinedelivery=req.body.onlinedelivery;
       Outlet.partnerdelivery=req.body.partnerdelivery;
       Outlet.currencytype=req.body.currencytype;
       Outlet.cuisines=req.body.cuisines;
       Outlet.starttime=req.body.starttime;
       Outlet.endtime=req.body.endtime;
       Outlet.city = req.body.city;
       Outlet.pincode = req.body.pincode;
       Outlet.address = req.body.address;
       Outlet.locality = req.body.locality;
       Outlet.zone = req.body.zone;
       Outlet.state = req.body.state;
       Outlet.country = req.body.country;
       Outlet.latitude = req.body.latitude;
       Outlet.longitude = req.body.longitude;
       Outlet.con1 = req.body.con1;
       Outlet.con2 = req.body.con2;
       Outlet.con3 = req.body.con3;
       Outlet.landline = req.body.landline;
       Outlet.mail = req.body.mail;
       Outlet.weblink = req.body.weblink;
       Outlet.avgcost = req.body.avgcost;
       Outlet.fname = req.body.fname;
       Outlet.lname = req.body.lname;
       Outlet.phone = req.body.phone;
       Outlet.email = req.body.email;
       Outlet.password = req.body.password;
     Outlet.save()
     .then(() => res.json('Outlet updated!'))
     .catch(err => res.status(400).json('Error: ' + err));
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

//for deleting
router.route('/delete/:id').delete((req, res) => {
    Outlet.findByIdAndDelete(req.params.id)
      .then(() => res.json('Outlet deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//for all route files
module.exports = router;