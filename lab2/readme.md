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
