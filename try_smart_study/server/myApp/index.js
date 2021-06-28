const express = require("express");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const dbpath = path.join(__dirname, "Courses");
let db = null;
const initializerDbPath = async () => {
  try {
    app.listen(3300, () => {
      console.log("server is running at https://localhost:3300/");
    });
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    });
  } catch (error) {
    console.log("Db Error : ${e.message}");
    process.exit(1);
  }
};
initializerDbPath();

app.get("/streams", async (request, response) => {
  const { id } = request.params;
  const getStream = "select * from stream where id={stream.id}";
  const stream = await db.get(getStream);
});
app.get("/university", async (req, res) => {
  const { id } = request.params;
  const getUniversity = "select * from universities where id = {university.Id}";
  const university = await db.get(getUniversity);
});
app.get("/subjects", async (req, res) => {
  const { sub_id } = request.params;
  const getSubjects = "select * from subjects where sub_id = {subjects.sem_id}";
  const Subjects = await db.get(getSubjects);
});
app.get("/Semesters", async (req, res) => {
  const { sem_id } = request.params;
  const getSem = "select * from Semesters where sem_id = {Semesters.sem_id}";
  const Semesters = await db.get(getSem);
});
