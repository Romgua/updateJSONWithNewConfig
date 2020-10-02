
# Update JSON With New Config File

Function which update a json with a text file containing every wanted update.

The project statement is the file named *"coding-test.md"*.


## Summary

 1. [Software stack](#software-stack)
 2. [Project structure](#project-structure)
 3. [Run the project](#run-the-project)


## Software stack

- [![Generic badge](https://img.shields.io/badge/Node-v12.15.0-026e00.svg)](https://nodejs.org/en/)
- [![Generic badge](https://img.shields.io/badge/Lodash-v4.17.15-4b71ca.svg)](https://lodash.com/)

## Project structure

```
.
├── lib 				# contains all external libraries
│   └── lodash.js
├── new_configs 		# contains results after script execution
│   ├── new_configuration_1.json
│   ├── new_configuration_2.json
│   └── new_configuration_3.json
├── update_files		# contains every wanted update files
│   ├── update_1.txt
│   ├── update_2.txt
│   └── update_3.txt
├── scripts.ts			# main script
├── coding-test.md		# project statement
├── README.md			# this file :D
└── configuration.json	# main config file
```


## Run the project

To execute the script, run the following commands:

    node scripts.ts
