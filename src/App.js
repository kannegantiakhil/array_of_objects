import React from "react";

function Hook3() {
  const items = [
    { sid: "101", name: "Krishna", course: "EEE", gender: "MALE" },
    { sid: "102", name: "Aadya", course: "CSE", gender: "FEMALE" },
    { sid: "103", name: "Hrudya", course: "IT", gender: "FEMALE" },
    { sid: "104", name: "Varun", course: "ECE", gender: "MALE" },
    { sid: "105", name: "Manasa", course: "IT", gender: "FEMALE" },
    { sid: "106", name: "Vijay", course: "CSE", gender: "MALE" }
  ];
  return (
    <div>
      <table border="3" cellpadding="10px" bgcolor="#ff99ff">
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.sid}</td>
            <td> {item.name} </td>
            <td> {item.course} </td>
            <td>{item.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Hook3;
