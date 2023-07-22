// selecting Database

use("zen_class_programme");

// Creating collections for mentors

db.createCollection("mentors");

// Creating Documents for mentors

db.mentors.insertMany([
  {
    mentorId: 1,
    mentorName: "vishnu",
    mentorEmail: "vishnu@gmail.com",
  },
  {
    mentorId: 2,
    mentorName: "deepika",
    mentorEmail: "deepika@gmail.com",
  },
  {
    mentorId: 3,
    mentorName: "ramya",
    mentorEmail: "ramya@gmail.com",
  },
  {
    mentorId: 4,
    mentorName: "gowtham",
    mentorEmail: "gowtham@gmail.com",
  },
]);
