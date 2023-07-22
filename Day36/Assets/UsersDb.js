// Creating & selecting Database

use("Zen_class_programme");

// Creating collections for Users

db.createCollection("users");

// Creating Documents for user

db.users.insertMany([
  {
    userId: 1,
    userName: "vignesh",
    userEmail: "vignesh@gmail.com",
    mentorId: 1,
  },
  {
    userId: 2,
    userName: "abishek",
    userEmail: "abishek@gmail.com",
    mentorId: 2,
  },
  {
    userId: 3,
    userName: "ajitkumar",
    userEmail: "ajitkumar@gmail.com",
    mentorId: 3,
  },
  {
    userId: 4,
    userName: "dhanesh",
    userEmail: "dhanesh@gmail.com",
    mentorId: 1,
  },
  {
    userId: 5,
    userName: "saravanan",
    userEmail: "saravanan@gmail.com",
    mentorId: 2,
  },
  {
    userId: 6,
    userName: "tamilazhagan",
    userEmail: "tamilazhagan@gmail.com",
    mentorId: 3,
  },
  {
    userId: 7,
    userName: "vijay",
    userEmail: "vijay@gmail.com",
    mentorId: 1,
  },
  {
    userId: 8,
    userName: "gopinath",
    userEmail: "gopinath@gmail.com",
    mentorId: 1,
  },
  {
    userId: 9,
    userName: "muzamil",
    userEmail: "muzamil@gmail.com",
    mentorId: 1,
  },
  {
    userId: 10,
    userName: "sasidharan",
    userEmail: "sasidharan@gmail.com",
    mentorId: 1,
  },
  {
    userId: 11,
    userName: "mathew",
    userEmail: "mathew@gmail.com",
    mentorId: 1,
  },
  {
    userId: 12,
    userName: "priyanka",
    userEmail: "priyanka@gmail.com",
    mentorId: 1,
  },
  {
    userId: 13,
    userName: "sangeetha",
    userEmail: "sangeetha@gmail.com",
    mentorId: 1,
  },
  {
    userId: 14,
    userName: "jemi",
    userEmail: "jemi@gmail.com",
    mentorId: 1,
  },
  {
    userId: 15,
    userName: "anandhi",
    userEmail: "anandhi@gmail.com",
    mentorId: 1,
  },
  {
    userId: 16,
    userName: "gopinatha",
    userEmail: "gopinatha@gmail.com",
    mentorId: 1,
  },
  {
    userId: 17,
    userName: "saikrupa",
    userEmail: "saikrupa@gmail.com",
    mentorId: 1,
  },
  {
    userId: 18,
    userName: "bhuvana",
    userEmail: "bhuvana@gmail.com",
    mentorId: 1,
  },
  {
    userId: 19,
    userName: "pavithra",
    userEmail: "pavithra@gmail.com",
    mentorId: 1,
  },
  {
    userId: 20,
    userName: "sowmiya",
    userEmail: "sowmiya@gmail.com",
    mentorId: 1,
  },
]);
