// import React, { useState } from "react";
// import {
//   // Container,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemSecondaryAction,
//   ListItemText,
//   Checkbox,
//   IconButton,
//   Typography,
//   Card,
//   // makeStyles,
// } from "@material-ui/core";

// import { makeStyles } from '@material-ui/core/styles';
// // import { Container } from "@mui/material";
// import { Delete } from "@material-ui/icons";
// // import { Delete } from "@mui/icons-material";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 600,
//     margin: 'auto',
//     padding: 16,
//     marginTop: 100
//   },
//   form: {
//     // display: 'flex',
//     alignItems: 'flex-end',
//   },
//   input: {
//     flexGrow: 1,
//     marginRight: 8,
//   },
//   button: {
//     background: 'linear-gradient(45deg, #5378ff 30%, #6bdefe 90%)',
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//   },
//   check: {
//     '&:hover':{
//     background: 'linear-gradient(45deg, #d1dbff 30%, #e1f4f9 90%)',
//     border: 0,
//     }
//   },
//   list:{    
//     '&:hover':{
//     background: 'linear-gradient(45deg, #d1dbff 30%, #e1f4f9 90%)',
//     }
//   },
//   text:{
//     padding: '0px 200px',
//     background: 'linear-gradient(55deg, #5378ff 30%, #23cfff 70%)',
//     textAlign:'center',
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   },
//   text1:{
//     padding: '0px 200px',
//     background: 'linear-gradient(55deg, #5378ff 30%, #23cfff 70%)',
//     textAlign:'center',
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent"
//   }
// });

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [showAll, setShowAll] = useState(true);

//   const classes = useStyles();

//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (newTask) {
//       setTasks([...tasks, { text: newTask, completed: false }]);
//       setNewTask("");
//     }
//   };

//   const handleDelete = (taskIndex) => {
//     const newTasks = [...tasks];
//     newTasks.splice(taskIndex, 1);
//     setTasks(newTasks);
//   };

//   const handleToggleCompleted = (taskIndex) => {
//     const newTasks = [...tasks];
//     newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
//     setTasks(newTasks);
//   };

//   const incompleteTasks = tasks.filter((task) => !task.completed);

//   return (
//     <>
//     <div>
//       <Typography>
        
//       </Typography>
//     </div>
    
//     <Card className={classes.root} maxWidth="sm">
//       <Typography className={classes.text} variant="h4"
//       //  align="center" 
//        gutterBottom>
//         Todo List
//       </Typography>
//       <form
//        className={classes.form} 
//       onSubmit={handleSubmit}>
//         <TextField
//         data-testid="input"
//           label="Add a new task"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={newTask}
//           className={classes.input}
//           onChange={handleInputChange}
//         />
//         <Button className={classes.button} fullWidth data-testid="add" variant="contained" 
//         // color="primary" 
//         type="submit">
//           Add
//         </Button>
//       </form><br></br>
//       <Typography className={classes.text1} align="center">
//         total tasks {tasks.length}
//         <Typography >
//         {incompleteTasks.length} tasks left
//         </Typography>
//       </Typography>
//       <Button
//       // className={classes.button}
//         fullWidth
//         onClick={() => setShowAll(!showAll)}
//         color={showAll ? "secondary" : "primary"}
//       >
//         {showAll ? "Show incomplete tasks only" : "Show all tasks"}
//       </Button>
//       <List >
//         {tasks.map((task, index) => {
//           if (!showAll && task.completed) {
//             return null;
//           }
//           return (
//             <ListItem className={classes.list} key={index} dense button>
//               <Checkbox
//               className={classes.check}
//                 data-testid="checkbox"
//                 checked={task.completed}
//                 color='primary'
//                 onChange={() => handleToggleCompleted(index)}
//               />
//               <ListItemText primary={task.text} />
//               <ListItemSecondaryAction >
//                 <IconButton className={classes.list} onClick={() => handleDelete(index)}>
//                   <Delete  />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           );
//         })}
//       </List>
      
//     </Card>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import {
  // Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  Typography,
  Card,
  // makeStyles,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
// import { Container } from "@mui/material";
import { Delete } from "@material-ui/icons";
// import { Delete } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #e3e9ff 30%, #ffffff 90%)',

    maxWidth: 600,
    margin: 'auto',
    padding: 16,
    marginTop: 100
  },
  form: {
    // display: 'flex',
    alignItems: 'flex-end',
  },
  input: {
    flexGrow: 1,
    marginRight: 8,
    background:"linear-gradient(45deg, #e3e9ff 30%, #b5efff 90%)",
    '&:hover':{
      background:"linear-gradient(45deg, #e3e9ff 30%, #b5efff 90%)",
    }
    
  },
  button: {
    background: 'linear-gradient(45deg, #5378ff 30%, #6bdefe 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  check: {
    '&:hover':{
    background: 'linear-gradient(45deg, #d1dbff 30%, #e1f4f9 90%)',
    border: 0,
    }
  },
  list:{    
    '&:hover':{
    background: 'linear-gradient(45deg, #d1dbff 30%, #e1f4f9 90%)',
    }
  },
  text:{
    // fontSize:12,
    padding: '0px 200px',
    background: 'linear-gradient(55deg, #5378ff 30%, #23cfff 70%)',
    textAlign:'center',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  text1:{
    fontSize:'22px',
    padding: '0px 200px',
    background: 'linear-gradient(55deg, #5378ff 30%, #23cfff 70%)',
    textAlign:'center',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showAll, setShowAll] = useState(true);

  const classes = useStyles();

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleDelete = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  const handleToggleCompleted = (taskIndex) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
  };

  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <>
    <Card className={classes.root}>
      <Typography className={classes.text} variant="h4"
      //  align="center" 
       gutterBottom>
        Todo List
      </Typography>
      <form
       className={classes.form} 
      onSubmit={handleSubmit}>
              {/* <TextField id="standard-secondary" label="Standard secondary" color="secondary" /> */}

        <TextField
        // data-testid="input"
        id ="inputk"
          label="Add a new task"
          variant="filled"
          fullWidth
          margin="normal"
          value={newTask}
          className={classes.input}
          onChange={handleInputChange}
        />
        <Button className={classes.button} fullWidth data-testid="add" variant="contained" 
        // color="primary" 
        type="submit">
          Add
        </Button>
      </form><br></br>
      <Typography className={classes.text1} variant="h5">
        Total tasks {tasks.length}
        </Typography>
        <Typography className={classes.text1} variant="h5">
        {incompleteTasks.length} tasks left
        </Typography>
      
      <Button data-testid="filter"
        fullWidth
        onClick={() => setShowAll(!showAll)}
        color={showAll ? "secondary" : "primary"}
      >
        {showAll ? "Show incomplete tasks only" : "Show all tasks"}
      </Button>
      <List >
        {tasks.map((task, index) => {
          if (!showAll && task.completed) {
            return null;
          }
          return (
            <ListItem className={classes.list} key={index} dense button>
              <Checkbox
              className={classes.check}
                
                checked={task.completed}
                color='primary'
                onChange={() => handleToggleCompleted(index)}
              />
              <ListItemText primary={task.text} />
              <ListItemSecondaryAction >
                <IconButton data-testid="delete" className={classes.list} onClick={() => handleDelete(index)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      
    </Card>
    </>
  );
}

export default App;
