const functions = require("firebase-functions");
const app = require("express")();
const auth = require("./util/auth");

const {
  loginUser,
  signUpUser,
  uploadProfilePhoto,
  getUserDetail,
  updateUserDetails,
} = require("./APIs/users");
const {
  getAllTodos,
  getOneTodo,
  postOneTodo,
  deleteTodo,
  editTodo,
} = require("./APIs/todos");

// Route Users
app.post("/login", loginUser);

app.post("/signup", signUpUser);

app.post("/user", auth, updateUserDetails);

app.get("/user", auth, getUserDetail);

app.post("/user/image", auth, uploadProfilePhoto);

// Routes Todos
app.get("/todos", auth, getAllTodos);

app.get("/todo/:todoId", auth, getOneTodo);

app.post("/todo", auth, postOneTodo);

app.delete("/todo/:todoId", auth, deleteTodo);

app.put("/todo/:todoId", auth, editTodo);

exports.api = functions.https.onRequest(app);
