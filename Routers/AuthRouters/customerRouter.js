const router = require("express").Router()
const { SignupUser, LoginUser, DeleteUsers, AllCustomer, GetCustomer, GetDeleteCustomerById } = require("../../Controllers/AuthControllers/CustomerControllers")


router.post("/signup", SignupUser);
// login the user 
router.post("/login", LoginUser);
// delete all 
router.delete("/deleteall", DeleteUsers);
// delete by id  
router.get('/delete/:id', GetDeleteCustomerById)
// all customers
router.get("/getall", AllCustomer);
// all customers
router.get("/getbyid/:id", GetCustomer);
// get the single user by id
router.post("/get", AllCustomer);



module.exports = router