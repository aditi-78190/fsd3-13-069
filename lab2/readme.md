C- create/add/insert

R- retrieve / view /get

U- update / edit

D- delete/ remove

FS- (file system). It's a node library and interacts directly with client OS rather than browser.

Major task for of OS Module

- Reading and Writing Files

    - readFile()
    - writeFile()
    - readdir()

- directory Management
    - mkdir()
    - rmdir() --depricated
    - readdir()
    - rm()

- Metadata/Information
    - stat()
    - lstat()
    - fstat()

- Watching for changes
    - watch()
    - watchFile()
    - unwatchFile()

- Streaming large files

    - createReadStream()
    - createWriteStream()

- File Operations

    - rename()
    - truncate()
    - unlink()
    - link()
    - sylink()

for await function use async.

<!-- CRUD OPERATIONS -->
each item id , name , price , quantity

<!-- opERATIONS -->
1. add to cart
2. show cart
3. remove items from cart
4. update quantity from cart
5. checkout

NOTE: all items will be stored in hdd, so after termination of program we can retrieve cart details.

<!--  -->


local host - URL
127.0.0.1 - IP

ctrl+c - stop the server

every request from client has a pair of(request and response)

npm stands for node package manager
used to install, run, uninstall any program/project and package 
-npm install  <packageName>
-npm uninstall <packageName>

to use npm, the project must be npm project
to create npm project we can use 

- npm init -y
- it creates a package.json file automatically
    package.json holds all the info related to install packages from npm
- update package.json,set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore


34) - start -> it will execute the app on development
- dev -> it will start server in development phase (only for developer)

- res : it will return contents (json/html/plain) to the user/client
- req : it will retrieve the info from client to the server
- server send also statusCodes to the client, that indicates the error/success msg

## Status Codes
- 200 -> 0k
- 201 -> created
- 400 -> bad req
- 403 -> forbidden
- 404 -> not found
- 500 ->internal server error


# Content Type

- text/plain
- text/html
- application/json
- text/css

The content type and status code can be send back to client by two ways.

1. res.writeHead
2. res.setHeader
3. res.statusCode