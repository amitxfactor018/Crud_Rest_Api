const mongoose =  require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    Coursename: {
      type: String,
      require: true,
      min: 1,
      max: 50,
      unique: true,
    },
    
    Cousecode: {
      type: String,
        require: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Seats_available: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const  Course = mongoose.model('Course', CourseSchema);

module.exports=Course;