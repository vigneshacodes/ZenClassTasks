// selecting Database

use("zen_class_programme");

// Creating collections for attendance

db.createCollection("attendance");

// Creating Documents for attendance

db.attendance.insertMany([
  {
    userId: 1,
    topicId: 1,
    attended: true,
  },
  {
    userId: 2,
    topicId: 1,
    attended: true,
  },
  {
    userId: 3,
    topicId: 1,
    attended: true,
  },
  {
    userId: 4,
    topicId: 1,
    attended: true,
  },
  {
    userId: 5,
    topicId: 1,
    attended: true,
  },
  {
    userId: 6,
    topicId: 1,
    attended: false,
  },
  {
    userId: 7,
    topicId: 1,
    attended: true,
  },
  {
    userId: 8,
    topicId: 1,
    attended: true,
  },
  {
    userId: 9,
    topicId: 1,
    attended: true,
  },
  {
    userId: 10,
    topicId: 1,
    attended: false,
  },
  {
    userId: 11,
    topicId: 1,
    attended: true,
  },
  {
    userId: 12,
    topicId: 1,
    attended: true,
  },
  {
    userId: 13,
    topicId: 1,
    attended: true,
  },
  {
    userId: 14,
    topicId: 1,
    attended: true,
  },
  {
    userId: 15,
    topicId: 1,
    attended: true,
  },
  {
    userId: 16,
    topicId: 1,
    attended: true,
  },
  {
    userId: 17,
    topicId: 1,
    attended: true,
  },
  {
    userId: 18,
    topicId: 1,
    attended: false,
  },
  {
    userId: 19,
    topicId: 1,
    attended: true,
  },
  {
    userId: 20,
    topicId: 1,
    attended: true,
  },
  {
    userId: 1,
    topicId: 2,
    attended: true,
  },
  {
    userId: 2,
    topicId: 2,
    attended: false,
  },
  {
    userId: 3,
    topicId: 2,
    attended: true,
  },
  {
    userId: 4,
    topicId: 2,
    attended: true,
  },
  {
    userId: 5,
    topicId: 2,
    attended: true,
  },
  {
    userId: 6,
    topicId: 2,
    attended: true,
  },
  {
    userId: 7,
    topicId: 2,
    attended: true,
  },
  {
    userId: 8,
    topicId: 2,
    attended: true,
  },
  {
    userId: 9,
    topicId: 2,
    attended: true,
  },
  {
    userId: 10,
    topicId: 2,
    attended: false,
  },
  {
    userId: 11,
    topicId: 2,
    attended: true,
  },
  {
    userId: 12,
    topicId: 2,
    attended: true,
  },
  {
    userId: 13,
    topicId: 2,
    attended: true,
  },
  {
    userId: 14,
    topicId: 2,
    attended: true,
  },
  {
    userId: 15,
    topicId: 2,
    attended: true,
  },
  {
    userId: 16,
    topicId: 2,
    attended: true,
  },
  {
    userId: 17,
    topicId: 2,
    attended: true,
  },
  {
    userId: 18,
    topicId: 2,
    attended: true,
  },
  {
    userId: 19,
    topicId: 2,
    attended: true,
  },
  {
    userId: 20,
    topicId: 2,
    attended: true,
  },
  {
    userId: 1,
    topicId: 3,
    attended: true,
  },
  {
    userId: 2,
    topicId: 3,
    attended: true,
  },
  {
    userId: 3,
    topicId: 3,
    attended: false,
  },
  {
    userId: 4,
    topicId: 3,
    attended: true,
  },
  {
    userId: 5,
    topicId: 3,
    attended: true,
  },
  {
    userId: 6,
    topicId: 3,
    attended: true,
  },
  {
    userId: 7,
    topicId: 3,
    attended: true,
  },
  {
    userId: 8,
    topicId: 3,
    attended: true,
  },
  {
    userId: 9,
    topicId: 3,
    attended: true,
  },
  {
    userId: 10,
    topicId: 3,
    attended: true,
  },
  {
    userId: 11,
    topicId: 3,
    attended: true,
  },
  {
    userId: 12,
    topicId: 3,
    attended: true,
  },
  {
    userId: 13,
    topicId: 3,
    attended: true,
  },
  {
    userId: 14,
    topicId: 3,
    attended: true,
  },
  {
    userId: 15,
    topicId: 3,
    attended: true,
  },
  {
    userId: 16,
    topicId: 3,
    attended: true,
  },
  {
    userId: 17,
    topicId: 3,
    attended: false,
  },
  {
    userId: 18,
    topicId: 3,
    attended: true,
  },
  {
    userId: 19,
    topicId: 3,
    attended: true,
  },
  {
    userId: 20,
    topicId: 3,
    attended: true,
  },
  {
    userId: 1,
    topicId: 4,
    attended: true,
  },
  {
    userId: 2,
    topicId: 4,
    attended: true,
  },
  {
    userId: 3,
    topicId: 4,
    attended: true,
  },
  {
    userId: 4,
    topicId: 4,
    attended: true,
  },
  {
    userId: 5,
    topicId: 4,
    attended: true,
  },
  {
    userId: 6,
    topicId: 4,
    attended: true,
  },
  {
    userId: 7,
    topicId: 4,
    attended: true,
  },
  {
    userId: 8,
    topicId: 4,
    attended: true,
  },
  {
    userId: 9,
    topicId: 4,
    attended: true,
  },
  {
    userId: 10,
    topicId: 4,
    attended: true,
  },
  {
    userId: 11,
    topicId: 4,
    attended: true,
  },
  {
    userId: 12,
    topicId: 4,
    attended: true,
  },
  {
    userId: 13,
    topicId: 4,
    attended: true,
  },
  {
    userId: 14,
    topicId: 4,
    attended: true,
  },
  {
    userId: 15,
    topicId: 4,
    attended: true,
  },
  {
    userId: 16,
    topicId: 4,
    attended: true,
  },
  {
    userId: 17,
    topicId: 4,
    attended: true,
  },
  {
    userId: 18,
    topicId: 4,
    attended: false,
  },
  {
    userId: 19,
    topicId: 4,
    attended: true,
  },
  {
    userId: 20,
    topicId: 4,
    attended: true,
  },
  {
    userId: 1,
    topicId: 5,
    attended: true,
  },
  {
    userId: 2,
    topicId: 5,
    attended: true,
  },
  {
    userId: 3,
    topicId: 5,
    attended: true,
  },
  {
    userId: 4,
    topicId: 5,
    attended: true,
  },
  {
    userId: 5,
    topicId: 5,
    attended: true,
  },
  {
    userId: 6,
    topicId: 5,
    attended: true,
  },
  {
    userId: 7,
    topicId: 5,
    attended: true,
  },
  {
    userId: 8,
    topicId: 5,
    attended: true,
  },
  {
    userId: 9,
    topicId: 5,
    attended: true,
  },
  {
    userId: 10,
    topicId: 5,
    attended: true,
  },
  {
    userId: 11,
    topicId: 5,
    attended: true,
  },
  {
    userId: 12,
    topicId: 5,
    attended: false,
  },
  {
    userId: 13,
    topicId: 5,
    attended: true,
  },
  {
    userId: 14,
    topicId: 5,
    attended: true,
  },
  {
    userId: 15,
    topicId: 5,
    attended: true,
  },
  {
    userId: 16,
    topicId: 5,
    attended: true,
  },
  {
    userId: 17,
    topicId: 5,
    attended: true,
  },
  {
    userId: 18,
    topicId: 5,
    attended: true,
  },
  {
    userId: 19,
    topicId: 5,
    attended: true,
  },
  {
    userId: 20,
    topicId: 5,
    attended: true,
  },
  {
    userId: 1,
    topicId: 6,
    attended: true,
  },
  {
    userId: 2,
    topicId: 6,
    attended: true,
  },
  {
    userId: 3,
    topicId: 6,
    attended: true,
  },
  {
    userId: 4,
    topicId: 6,
    attended: true,
  },
  {
    userId: 5,
    topicId: 6,
    attended: false,
  },
  {
    userId: 6,
    topicId: 6,
    attended: true,
  },
  {
    userId: 7,
    topicId: 6,
    attended: true,
  },
  {
    userId: 8,
    topicId: 6,
    attended: true,
  },
  {
    userId: 9,
    topicId: 6,
    attended: true,
  },
  {
    userId: 10,
    topicId: 6,
    attended: true,
  },
  {
    userId: 11,
    topicId: 6,
    attended: true,
  },
  {
    userId: 12,
    topicId: 6,
    attended: true,
  },
  {
    userId: 13,
    topicId: 6,
    attended: true,
  },
  {
    userId: 14,
    topicId: 6,
    attended: true,
  },
  {
    userId: 15,
    topicId: 6,
    attended: true,
  },
  {
    userId: 16,
    topicId: 6,
    attended: false,
  },
  {
    userId: 17,
    topicId: 6,
    attended: true,
  },
  {
    userId: 18,
    topicId: 6,
    attended: true,
  },
  {
    userId: 19,
    topicId: 6,
    attended: true,
  },
  {
    userId: 20,
    topicId: 6,
    attended: true,
  },
  {
    userId: 1,
    topicId: 7,
    attended: true,
  },
  {
    userId: 2,
    topicId: 7,
    attended: true,
  },
  {
    userId: 3,
    topicId: 7,
    attended: true,
  },
  {
    userId: 4,
    topicId: 7,
    attended: true,
  },
  {
    userId: 5,
    topicId: 7,
    attended: true,
  },
  {
    userId: 6,
    topicId: 7,
    attended: true,
  },
  {
    userId: 7,
    topicId: 7,
    attended: true,
  },
  {
    userId: 8,
    topicId: 7,
    attended: true,
  },
  {
    userId: 9,
    topicId: 7,
    attended: false,
  },
  {
    userId: 10,
    topicId: 7,
    attended: true,
  },
  {
    userId: 11,
    topicId: 7,
    attended: true,
  },
  {
    userId: 12,
    topicId: 7,
    attended: true,
  },
  {
    userId: 13,
    topicId: 7,
    attended: true,
  },
  {
    userId: 14,
    topicId: 7,
    attended: true,
  },
  {
    userId: 15,
    topicId: 7,
    attended: true,
  },
  {
    userId: 16,
    topicId: 7,
    attended: true,
  },
  {
    userId: 17,
    topicId: 7,
    attended: false,
  },
  {
    userId: 18,
    topicId: 7,
    attended: true,
  },
  {
    userId: 19,
    topicId: 7,
    attended: true,
  },
  {
    userId: 20,
    topicId: 7,
    attended: true,
  },
  {
    userId: 1,
    topicId: 8,
    attended: true,
  },
  {
    userId: 2,
    topicId: 8,
    attended: true,
  },
  {
    userId: 3,
    topicId: 8,
    attended: true,
  },
  {
    userId: 4,
    topicId: 8,
    attended: false,
  },
  {
    userId: 5,
    topicId: 8,
    attended: true,
  },
  {
    userId: 6,
    topicId: 8,
    attended: true,
  },
  {
    userId: 7,
    topicId: 8,
    attended: true,
  },
  {
    userId: 8,
    topicId: 8,
    attended: true,
  },
  {
    userId: 9,
    topicId: 8,
    attended: true,
  },
  {
    userId: 10,
    topicId: 8,
    attended: true,
  },
  {
    userId: 11,
    topicId: 8,
    attended: true,
  },
  {
    userId: 12,
    topicId: 8,
    attended: true,
  },
  {
    userId: 13,
    topicId: 8,
    attended: true,
  },
  {
    userId: 14,
    topicId: 8,
    attended: true,
  },
  {
    userId: 15,
    topicId: 8,
    attended: false,
  },
  {
    userId: 16,
    topicId: 8,
    attended: true,
  },
  {
    userId: 17,
    topicId: 8,
    attended: true,
  },
  {
    userId: 18,
    topicId: 8,
    attended: true,
  },
  {
    userId: 19,
    topicId: 8,
    attended: true,
  },
  {
    userId: 20,
    topicId: 8,
    attended: false,
  },
]);
