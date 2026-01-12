const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

function send() {
  const method = document.getElementById("method").value;
  const endpoint = document.getElementById("endpoint").value;
  const body = document.getElementById("body").value;

  document.getElementById("status").textContent = "Status: Loading...";
  document.getElementById("response").textContent = "Processing request...";

  setTimeout(() => {
    handleRequest(method, endpoint, body);
  }, 1000);
}

function handleRequest(method, endpoint, body) {
  let status;
  let result;

  try {
    if (endpoint === "/users" && method === "GET") {
      status = 200;
      result = users;
    } 
    else if (endpoint === "/users" && method === "POST") {
      if (!body) {
        status = 400;
        result = { error: "Request body required" };
      } else {
        const newUser = JSON.parse(body);
        newUser.id = users.length + 1;
        users.push(newUser);
        status = 201;
        result = newUser;
      }
    } 
    else {
      status = 404;
      result = { error: "Endpoint not found" };
    }
  } catch (err) {
    status = 500;
    result = { error: "Invalid JSON" };
  }

  displayResponse(status, result);
}

function displayResponse(status, data) {
  const statusDiv = document.getElementById("status");
  const responseDiv = document.getElementById("response");

  statusDiv.textContent = `Status: ${status}`;

  if (status >= 200 && status < 300) {
    statusDiv.style.color = "#22c55e";
  } else {
    statusDiv.style.color = "#ef4444";
  }

  responseDiv.textContent = JSON.stringify(data, null, 2);
}
