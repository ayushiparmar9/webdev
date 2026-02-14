export const DummyAdmin = () => {
  return {
    fullName: "Rahul Sharma",
    email: "admin@cravings.com",
    mobileNumber: "9876543210",
    password: "Admin@123", // hash it before saving in DB

    role: "admin",

    dob: "1998-05-12",
    gender: "male",

    address: "MG Road, Near City Mall",
    city: "Bangalore",
    pin: "560001",

    photo: {
      url: "https://dummyimage.com/200x200/000/fff&text=Admin",
      publicID: "dummy_admin_photo",
    },

    geoLocation: {
      lat: "12.9716",
      lon: "77.5946",
    },

    paymentDetails: {
      upi: "rahuladmin@upi",
      account_number: "123456789012",
      ifs_Code: "HDFC0001234",
    },

    restaurantName: "Cravings Kitchen",
    cuisine: "North Indian, Chinese",

    documents: {
      gst: "29ABCDE1234F1Z5",
      fssai: "12345678901234",
      rc: "RC20240012345",
      dl: "DL-122334455",
      uidai: "123412341234",
      pan: "ABCDE1234F",
    },

    isActive: "active",
  };
};
// ===========================
// Dummy Managers (3)
// ===========================
export const DummyManagers = () => [
  {
    fullName: "Priya Verma",
    email: "manager1@cravings.com",
    mobileNumber: "9123456789",
    password: "Manager@123",
    role: "manager",
    dob: "1999-08-20",
    gender: "female",
    address: "Sector 21",
    city: "Delhi",
    pin: "110022",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "28.7041", lon: "77.1025" },
    paymentDetails: {
      upi: "priyamanager@upi",
      account_number: "444444444444",
      ifs_Code: "HDFC0004444",
    },
    restaurantName: "Snack Nation",
    cuisine: "Snacks",
    documents: {
      gst: "07AAAAA1111A1Z1",
      fssai: "44556677889900",
      rc: "RC20001",
      dl: "DL20001",
      uidai: "121212121212",
      pan: "AAAAA1111A",
    },
    isActive: "active",
  },

  {
    fullName: "Rohit Kumar",
    email: "manager2@cravings.com",
    mobileNumber: "9000112233",
    password: "Manager@123",
    role: "manager",
    dob: "1998-06-10",
    gender: "male",
    address: "Salt Lake",
    city: "Kolkata",
    pin: "700091",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "22.5726", lon: "88.3639" },
    paymentDetails: {
      upi: "rohitmanager@upi",
      account_number: "555555555555",
      ifs_Code: "ICIC0005555",
    },
    restaurantName: "Kolkata Rolls",
    cuisine: "Street Food",
    documents: {
      gst: "19BBBBB2222B1Z2",
      fssai: "55667788990011",
      rc: "RC20002",
      dl: "DL20002",
      uidai: "343434343434",
      pan: "BBBBB2222B",
    },
    isActive: "active",
  },

  {
    fullName: "Simran Kaur",
    email: "manager3@cravings.com",
    mobileNumber: "9888776655",
    password: "Manager@123",
    role: "manager",
    dob: "2000-03-15",
    gender: "female",
    address: "Model Town",
    city: "Chandigarh",
    pin: "160036",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "30.7333", lon: "76.7794" },
    paymentDetails: {
      upi: "simranmanager@upi",
      account_number: "666666666666",
      ifs_Code: "SBI0006666",
    },
    restaurantName: "Punjabi Dhaba",
    cuisine: "Punjabi",
    documents: {
      gst: "04CCCCC3333C1Z3",
      fssai: "66778899001122",
      rc: "RC20003",
      dl: "DL20003",
      uidai: "565656565656",
      pan: "CCCCC3333C",
    },
    isActive: "active",
  },
];

// ===========================
// Dummy Partners (3)
// ===========================
export const DummyPartners = () => [
  {
    fullName: "Amit Kapoor",
    email: "partner1@cravings.com",
    mobileNumber: "9001122334",
    password: "Partner@123",
    role: "partner",
    dob: "1995-02-15",
    gender: "male",
    address: "Bandra West",
    city: "Mumbai",
    pin: "400050",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "19.0760", lon: "72.8777" },
    paymentDetails: {
      upi: "amitpartner@upi",
      account_number: "777777777777",
      ifs_Code: "SBI0007777",
    },
    restaurantName: "Mumbai Street Bites",
    cuisine: "Fast Food",
    documents: {
      gst: "27DDDDD4444D1Z4",
      fssai: "77889900112233",
      rc: "RC30001",
      dl: "DL30001",
      uidai: "787878787878",
      pan: "DDDDD4444D",
    },
    isActive: "active",
  },

  {
    fullName: "Karan Joshi",
    email: "partner2@cravings.com",
    mobileNumber: "9112233445",
    password: "Partner@123",
    role: "partner",
    dob: "1994-07-09",
    gender: "male",
    address: "Hazratganj",
    city: "Lucknow",
    pin: "226001",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "26.8467", lon: "80.9462" },
    paymentDetails: {
      upi: "karanpartner@upi",
      account_number: "888888888888",
      ifs_Code: "HDFC0008888",
    },
    restaurantName: "Lucknow Kebabs",
    cuisine: "Awadhi",
    documents: {
      gst: "09EEEEE5555E1Z5",
      fssai: "88990011223344",
      rc: "RC30002",
      dl: "DL30002",
      uidai: "909090909090",
      pan: "EEEEE5555E",
    },
    isActive: "active",
  },

  {
    fullName: "Meera Nair",
    email: "partner3@cravings.com",
    mobileNumber: "9223344556",
    password: "Partner@123",
    role: "partner",
    dob: "1996-12-01",
    gender: "female",
    address: "Marine Drive",
    city: "Kochi",
    pin: "682001",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "9.9312", lon: "76.2673" },
    paymentDetails: {
      upi: "meerpartner@upi",
      account_number: "999999999999",
      ifs_Code: "ICIC0009999",
    },
    restaurantName: "Kerala Meals Point",
    cuisine: "South Indian",
    documents: {
      gst: "32FFFFF6666F1Z6",
      fssai: "99001122334455",
      rc: "RC30003",
      dl: "DL30003",
      uidai: "101010101010",
      pan: "FFFFF6666F",
    },
    isActive: "active",
  },
];

// ===========================
// Dummy Customers (3)
// ===========================
export const DummyUsers = () => [
  {
    fullName: "Sneha Gupta",
    email: "user1@cravings.com",
    mobileNumber: "8887766554",
    password: "User@123",
    role: "customer",
    dob: "2001-11-05",
    gender: "female",
    address: "Park Street",
    city: "Kolkata",
    pin: "700016",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "22.5726", lon: "88.3639" },
    paymentDetails: {
      upi: "sneha@upi",
      account_number: "N/A",
      ifs_Code: "N/A",
    },
    restaurantName: "N/A",
    cuisine: "N/A",
    documents: {
      gst: "N/A",
      fssai: "N/A",
      rc: "N/A",
      dl: "N/A",
      uidai: "N/A",
      pan: "N/A",
    },
    isActive: "active",
  },

  {
    fullName: "Riya Patel",
    email: "user2@cravings.com",
    mobileNumber: "7776655443",
    password: "User@123",
    role: "customer",
    dob: "2002-04-18",
    gender: "female",
    address: "CG Road",
    city: "Ahmedabad",
    pin: "380009",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "23.0225", lon: "72.5714" },
    paymentDetails: {
      upi: "riya@upi",
      account_number: "N/A",
      ifs_Code: "N/A",
    },
    restaurantName: "N/A",
    cuisine: "N/A",
    documents: {
      gst: "N/A",
      fssai: "N/A",
      rc: "N/A",
      dl: "N/A",
      uidai: "N/A",
      pan: "N/A",
    },
    isActive: "active",
  },

  {
    fullName: "Aditya Rao",
    email: "user3@cravings.com",
    mobileNumber: "9998877665",
    password: "User@123",
    role: "customer",
    dob: "2000-09-10",
    gender: "male",
    address: "Indiranagar",
    city: "Bangalore",
    pin: "560038",
    photo: { url: "", publicID: "" },
    geoLocation: { lat: "12.9716", lon: "77.5946" },
    paymentDetails: {
      upi: "aditya@upi",
      account_number: "N/A",
      ifs_Code: "N/A",
    },
    restaurantName: "N/A",
    cuisine: "N/A",
    documents: {
      gst: "N/A",
      fssai: "N/A",
      rc: "N/A",
      dl: "N/A",
      uidai: "N/A",
      pan: "N/A",
    },
    isActive: "active",
  },
];
