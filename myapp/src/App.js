import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [profile, setProfile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { 
      id:id,
      employee_name: name,
      employee_salary:salary,
      employee_age: age,
      profile_image: profile, 
     };

     console.log("payload: ", employeeData);
     

    try {
      const response = await fetch("https://dummy.restapiexample.com/api/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Employee registered successfully:", result);
        // Clear form fields
        setId("");
        setName("");
        setAge("");
        setSalary("");
        setProfile("");
      } else {
        console.error("Failed to register employee:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register Employee</h2>
      <input
        type="number"
        name="id"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <input
        type="url"
        name="profile"
        placeholder="Profile Image URL"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;