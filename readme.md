This project is a Node.js application that provides two API endpoints to interact with the file system:

Create a Text File: Creates a text file with the current 
timestamp as content and the filename as the current date-time.
Retrieve All Text Files: Lists all the text files present in a specific directory.

Technologies Used
Node.js
Express.js
fs module for file system operations
API Endpoints

1. Create a Text File
Endpoint: /create
Method: POST
Description: Creates a text file in the files directory with the current date-time as the filename and the current timestamp as the content.
Response:
201 Created: File created successfully with the filename.
500 Internal Server Error: Failed to create the file.

2. List All Text Files
Endpoint: /list
Method: GET
Description: Retrieves a list of all .txt files in the files directory.
Response:
200 OK: Returns an array of filenames.
500 Internal Server Error: Failed to read the directory.