let projects = [
  {
    _id: 0,
    name: "Ayubo UI/UX",
    department: "UI team",
    status: "under review",
    color: "orange",
  },
  {
    _id: 1,
    name: "York LMS",
    department: "Frontend",
    status: "in progress",
    color: "pink",
  },
  {
    _id: 2,
    name: "FeedzBird App",
    department: "Mobile team",
    status: "pending",
    color: "purple",
  },
  {
    _id: 3,
    name: "Covid Stats UI",
    department: "UI team",
    status: "under review",
    color: "orange",
  },
  {
    _id: 4,
    name: "RSLE Web",
    department: "Frontend",
    status: "in progress",
    color: "pink",
  },
  {
    _id: 5,
    name: "myTunes App",
    department: "Mobile team",
    status: "pending",
    color: "purple",
  },
  {
    _id: 6,
    name: "SmartMovers DB",
    department: "Backend",
    status: "completed",
    color: "green",
  },
  {
    _id: 7,
    name: "Kelaniya Lib.Mgt",
    department: "Backend",
    status: "completed",
    color: "green",
  },
];

function loadTableContent(json_response) {
  html_content = "";
  for (let p of json_response) {
    let tb_element = `<tr><td>${p.name}</td><td>${p.department}</td><td><span class="status ${p.color}"></span>${p.status}</td></tr>`;
    html_content += tb_element;
  }
  let table = document.getElementById("project-table");
  table.getElementsByTagName("tbody")[0].innerHTML = html_content;
}

loadTableContent(projects);

console.log("Created by : Dileepa Samarawickrama");
console.log("Assignment 2 : open.uom.lk");
console.log("Visit My Github : https://github.com/dnsamw");
