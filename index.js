console.log("Hello, World!");

const express = require('express');
const app = express();

// SQL Injection vulnerability
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = "SELECT * FROM users WHERE id = " + userId; // SQL injection
  // database.execute(query);
  res.send(query);
});

// Command Injection vulnerability
const { exec } = require('child_process');
app.get('/execute', (req, res) => {
  const command = req.query.cmd;
  exec('ls ' + command, (error, stdout) => { // Command injection
    res.send(stdout);
  });
});

// Path Traversal vulnerability
const fs = require('fs');
app.get('/file', (req, res) => {
  const filename = req.query.name;
  fs.readFile('/var/data/' + filename, (err, data) => { // Path traversal
    res.send(data);
  });
});

// XSS vulnerability
app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  res.send('<html><body>Search results for: ' + searchTerm + '</body></html>'); // XSS
});

// Hard-coded credentials
const password = "admin123"; // Hard-coded password
const apiKey = "sk_live_51234567890abcdef"; // Hard-coded API key

// Insecure randomness
function generateToken() {
  return Math.random().toString(36); // Insecure random for security-sensitive context
}

// Regular expression DoS
app.get('/validate', (req, res) => {
  const input = req.query.input;
  const regex = /^(a+)+$/; // ReDoS vulnerability
  const isValid = regex.test(input);
  res.send({ valid: isValid });
});

// Missing input validation
app.post('/update', (req, res) => {
  const userData = req.body;
  // Direct use without validation
  console.log(eval(userData.code)); // Code injection via eval
  res.send('Updated');
});

// Information exposure
app.get('/error', (req, res) => {
  try {
    throw new Error('Database connection failed: host=db.internal.com, user=admin');
  } catch (e) {
    res.send(e.stack); // Exposing stack trace
  }
});

// Weak cryptography
const crypto = require('crypto');
function encryptData(data) {
  const cipher = crypto.createCipher('des', 'weak-key'); // Weak algorithm
  return cipher.update(data, 'utf8', 'hex');
}

// Unvalidated redirect
app.get('/redirect', (req, res) => {
  const url = req.query.url;
  res.redirect(url); // Open redirect
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});