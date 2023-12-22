const mongoose =  require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    Taskname: {
      type: String,
      require: true,
      unique: true,
    },
    
    Team_assigned: {
      type: String,
        require: true,
    },
    Start_day: {
      type: String,
      required: true,
    },
    Time_given_days: {
      type: Number,
      required: true,
    },
    
  },
  { timestamps: true }
);

const  tasks = mongoose.model('tasks', TaskSchema);

module.exports= tasks;