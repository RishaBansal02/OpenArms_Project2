# OpenArms_Project2

# OpenArms Database - Setup Instructions

## What you need before starting
- MongoDB installed on your computer
- MongoDB Compass (the visual app for MongoDB)

## How to set up the database

### Option 1: Using MongoDB Compass (visual ease)
1. Open MongoDB Compass and connect to `mongodb://localhost:27017`
2. Click the "+" button to create a new database
3. Name the database `openarms`
4. Create a collection called `client`
5. Click "Add Data" and import `client.json`
6. Create a collection called `organization`
7. Click "Add Data" and import `organizations.json`
8. Create a collection called `case_worker`
9. Click "Add Data" and import `case_workers.json`

### Option 2: Using the terminal (mongoimport)
Run these commands in your terminal:
```
mongoimport --db openarms --collection client --file client.json
mongoimport --db openarms --collection organization --file organizations.json
mongoimport --db openarms --collection case_worker --file case_workers.json
```

### Option 3: Restore from dump file
If you want to restore the database from the dump folder, run:
```
mongorestore --db openarms dump/openarms/
```

## How to verify the data loaded correctly
Open MongoDB Compass and check that you see:
- 5 documents in the `client` collection
- 3 documents in the `organization` collection
- 5 documents in the `case_worker` collection
