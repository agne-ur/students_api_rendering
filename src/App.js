import React, {useState, useEffect} from "react";
import StudentCard from "./components/StudentCard";
import Filter from "./components/Filter"
import './App.css';

function App() {

  const [studentData, setStudentData] = useState([]);
  const [filterContent, setFilterContent] = useState([]);

  function nameFilter(str) {
    let newNameFilter = [];
    studentData.map(student => {
      const fullName = `${student.firstName} ${student.lastName}`.toLocaleLowerCase();

      if (fullName.includes(str)) {
        newNameFilter.push(student);
      }
    })
    setFilterContent(newNameFilter);
  }

  const addTag = (str, index) => {
    const tagForStudent = [...studentData];
    tagForStudent[index].tags.push(str);
    setStudentData(tagForStudent);
  }

  async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    const {students} = json;
    let newStudentData = [];

    students.map(student => {
      let newStudent = student;
      newStudent.tags = [];
      newStudentData.push(newStudent);
    })
    setStudentData(newStudentData);
    setFilterContent(newStudentData);
  }

  useEffect(() => {
    fetchUrl(`https://api.hatchways.io/assessment/students`);
  }, []);

  console.log(filterContent)
  return (
    <div className="App">
      <div className="content">
        <Filter filterFunction={nameFilter} type={`name`}/>
        {filterContent.map((student, index) => {

          function findAverage(array) {
            let sum = 0;

            for (let i = 0; i < array.length; i++) {
              sum += parseInt(array[i]);
            }
            return sum / array.length
          }

          const averageGrades = findAverage(student.grades)

          return (
            <StudentCard 
              key={index.toString()}
              index={index}
              img={student.pic}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              company={student.company}
              skill={student.skill}
              grades={averageGrades}
              tags={student.tags}
              addTag={addTag}
            />
          );
        })}
      </div>    
    </div>
  );
}

export default App;
