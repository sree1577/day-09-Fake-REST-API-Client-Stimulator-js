let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const historyList = document.getElementById("historyList");

function setEndpoint(value) {
  document.getElementById("endpoint").value = value;
}

function toggleBody() {
  const method = document.getElementById("method").value;
  document.getElementById("body").disabled =
    method === "GET" || method === "DELETE";
}

function send() {
  const method = document.getElementById("method").value;
  const endpoint = document.getElementById("endpoint").value.trim();
  const body = document.getElementById("body").value;

  updateStatus("Processing...", "#2563eb");
  document.getElementById("response").textContent = "Processing request...";

  setTimeout(() => {
    handleRequest(method, endpoint, body);
  }, 700);
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
      if (!body) throw new Error("Request body required");
      const data = JSON.parse(body);
      data.id = users.length + 1;
      users.push(data);
      status = 201;
      result = data;
    }

    else if (endpoint.startsWith("/users/") && method === "PUT") {
      const id = Number(endpoint.split("/")[2]);
      const user = users.find(u => u.id === id);
      if (!user) {
        status = 404;
        result = { error: "User not found" };
      } else {
        const data = JSON.parse(body);
        user.name = data.name;
        status = 200;
        result = user;
      }
    }

    else if (endpoint.startsWith("/users/") && method === "DELETE") {
      const id = Number(endpoint.split("/")[2]);
      const index = users.findIndex(u => u.id === id);
      if (index === -1) {
        status = 404;
        result = { error: "User not found" };
      } else {
        users.splice(index, 1);
        status = 204;
        result = { message: "User deleted" };
      }
    }

    else {
      status = 404;
      result = { error: "Endpoint not found" };
    }
  } catch (err) {
    status = 400;
    result = { error: err.message || "Invalid JSON" };
  }

  displayResponse(status, result);
  addToHistory(method, endpoint, status);
}

function displayResponse(status, data) {
  updateStatus(`Status: ${status}`, status < 300 ? "#16a34a" : "#dc2626");
  document.getElementById("response").textContent =
    JSON.stringify(data, null, 2);
}

function updateStatus(text, color) {
  const statusDiv = document.getElementById("status");
  statusDiv.textContent = text;
  statusDiv.style.color = color;
}

function addToHistory(method, endpoint, status) {
  const time = new Date().toLocaleTimeString();
  const li = document.createElement("li");
  li.textContent = `[${time}] ${method} ${endpoint} → ${status}`;
  historyList.prepend(li);
}

function copyResponse() {
  const text = document.getElementById("response").textContent;
  navigator.clipboard.writeText(text);
  alert("Response copied to clipboard");
}

function resetAll() {
  document.getElementById("endpoint").value = "";
  document.getElementById("body").value = "";
  document.getElementById("response").textContent = "Waiting for request...";
  updateStatus("Status: -", "#000");
}
