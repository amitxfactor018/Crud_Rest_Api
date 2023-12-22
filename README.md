# Task-node-js-Rest_api
this is a task managment  Rest Api build using  node js
#CRUD operation is performed here
## Schema Design
{
    Taskname: {
      Tpye is string, should be unique and is require.
    },
    
    Team_assigned: {
      Type is string and is require
    },
    Start_day: {
      Type is string and is require
    },
    Time_given_days: {
      Type is Number and is require
    },
    
  },
### route for registering a task(post method) 
POST: http://localhost:3000/tasks
eg:-
\
here username ,phoneNumber and password must be unique and password's length must be at least 6 
\
{
\
  "Taskname":"Process Management",
  "Team_assigned":"Process Managers",
  "Start_day":"10:10:2023",
  "Time_given_days":10
  \
}

### route for updating the credentials for a task(put method)

You need to select the id and Change the details you want to.
PUT: http://localhost:3000/tasks/id


### route for deleting a task(delete method)

DEL: http://localhost:3000/tasks/id



### route for getting the data of  a task(get method)
Get all the tasks
GET: http://localhost:3000/tasks

Get a task by its id
GET: http://localhost:3000/tasks/id
