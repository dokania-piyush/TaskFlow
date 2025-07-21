<!DOCTYPE html>
<html lang="en">
<body>
<div class="container">
        <h1>🚀 TaskFlow API</h1>
        <div class="badges">
            <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
            <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status">
        </div>
        <p>A robust and intelligent task management API designed to power modern, efficient, and user-friendly applications like the TaskFlow dashboard. This backend provides all the necessary endpoints for seamless task creation, tracking, and statistical analysis.</p>
     <h2>✨ Features</h2>
        <p>The API is built to support a comprehensive set of features, enabling a rich user experience as seen in the TaskFlow UI.</p>
        <ul>
            <li><strong>👤 User Authentication:</strong> Secure user registration and login using JWT.</li>
            <li><strong>📝 Full CRUD Operations:</strong> Create, Read, Update, and Delete tasks with ease.</li>
            <li><strong>📊 Smart Dashboard & Statistics:</strong> Endpoints to deliver aggregated data for a comprehensive overview, including:
                <ul>
                    <li>Total task counts.</li>
                    <li>Tasks categorized by priority (High, Medium, Low).</li>
                    <li>Completion status (Pending, Completed).</li>
                    <li>Overall completion rate percentage.</li>
                </ul>
            </li>
            <li><strong>🔍 Advanced Filtering:</strong> Dynamically filter tasks by status, time frame (Today, Week), and priority level.</li>
            <li><strong>📈 Progress Tracking:</strong> Logic to track and deliver task progress data.</li>
            <li><strong>🕒 Activity Log:</strong> Record and retrieve recent activities on tasks for better traceability.</li>
            <li><strong>💡 Priority Management:</strong> Assign and modify task priorities.</li>
        </ul>
<h2>🛠️ Tech Stack</h2>
        <p>This project is built with a modern, scalable, and efficient technology stack.</p>
        <ul>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB with Mongoose ODM</li>
            <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
            <li><strong>Validation:</strong> Joi or express-validator</li>
        </ul>
<h2>🔌 API Endpoints</h2>
       <h3>User & Authentication Endpoints</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                    <th>Protection</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>POST</strong></td>
                    <td><code>/api/users/register</code></td>
                    <td>Register a new user.</td>
                    <td>Public</td>
                </tr>
                <tr>
                    <td><strong>POST</strong></td>
                    <td><code>/api/users/login</code></td>
                    <td>Log in an existing user and get a JWT.</td>
                    <td>Public</td>
                </tr>
                <tr>
                    <td><strong>GET</strong></td>
                    <td><code>/api/users/me</code></td>
                    <td>Get the current logged-in user's profile.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>PUT</strong></td>
                    <td><code>/api/users/profile</code></td>
                    <td>Update the current user's profile information.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>PUT</strong></td>
                    <td><code>/api/users/password</code></td>
                    <td>Update the current user's password.</td>
                    <td>Private</td>
                </tr>
            </tbody>
        </table>
<h3>Task Management Endpoints</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                    <th>Protection</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>POST</strong></td>
                    <td><code>/api/tasks</code></td>
                    <td>Create a new task.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>GET</strong></td>
                    <td><code>/api/tasks</code></td>
                    <td>Get all tasks for the logged-in user.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>GET</strong></td>
                    <td><code>/api/tasks/:id</code></td>
                    <td>Get a single task by its ID.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>PUT</strong></td>
                    <td><code>/api/tasks/:id</code></td>
                    <td>Update an existing task.</td>
                    <td>Private</td>
                </tr>
                <tr>
                    <td><strong>DELETE</strong></td>
                    <td><code>/api/tasks/:id</code></td>
                    <td>Delete a task.</td>
                    <td>Private</td>
                </tr>
                 <tr>
                    <td><strong>GET</strong></td>
                    <td><code>/api/tasks/stats</code></td>
                    <td>Get dashboard statistics.</td>
                    <td>Private</td>
                </tr>
            </tbody>
        </table>

 <h2>🚀 Getting Started</h2>
        <p>To get a local copy up and running, follow these simple steps.</p>
        <h3>Prerequisites</h3>
        <p>You need to have Node.js and npm installed on your machine.</p>
        <ul>
            <li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
            <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a> (either local or a cloud instance)</li>
        </ul>
<h3>Installation</h3>
        <ol>
            <li>
                <strong>Clone the repo</strong>
                <pre><code>git clone https://github.com/your-username/taskflow-api.git</code></pre>
            </li>
            <li>
                <strong>Navigate to the project directory</strong>
                <pre><code>cd taskflow-api</code></pre>
            </li>
            <li>
                <strong>Install NPM packages</strong>
                <pre><code>npm install</code></pre>
            </li>
            <li>
                <strong>Create a <code>.env</code> file</strong> in the root directory and add the necessary environment variables.
                <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key</code></pre>
            </li>
            <li>
                <strong>Start the server</strong>
                <pre><code>npm start</code></pre>
                <p>The server will be running on <code>http://localhost:5000</code>.</p>
            </li>
        </ol>


</body>
</html>
