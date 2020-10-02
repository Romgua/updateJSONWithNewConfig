/**
* Node v12.15.0
* Lodash v4.17.15
*/
'use strict';

const fs = require('fs');
const _ = require('./lib/lodash.js');

const file = require('./configuration.json');
const update_1 = fs.readFileSync('./update_files/update_1.txt', 'utf8');
const update_2 = fs.readFileSync('./update_files/update_2.txt', 'utf8');
const update_3 = fs.readFileSync('./update_files/update_3.txt', 'utf8');

/**
 * The function browse a new config file,
 * detect the path and modify with the new value
 *
 * @param Json data Basic config file
 * @param string config The new config file wich contains updates
 */
function updateJSONWithNewConfig(data, config) {
	for (let line of config.split(/[\r\n]+/)) {
		// Search index of first ':' to detect key and value
		let idx = line.indexOf(":");

		//Separate key and value
	  	let keyPath = line.substring(0, idx)
	  					  .trim()
	  					  .replace(/"/g, '');
	  	let newValue = line.substring(idx + 1)
	  					   .trim();
  		// Parse to json
  		try {
        	newValue = JSON.parse(newValue);
	    } catch (e) {
	    }

    	/* Sets the 'newValue' at 'keyPath' of 'data'.
    	If a portion of 'keyPath' doesn't exist, it's created.
    	Arrays are created for missing index properties while objects are created 
    	for all other missing properties. */
		_.set(data, keyPath, newValue);
	}

	return data;
}

console.log("~~~~ Run script ~~~~\r\n");

console.log("~~ Update new config 1 ~~\r\n");
let newConfig_1 = updateJSONWithNewConfig(file, update_1);
// Create new config file
fs.writeFileSync('./new_configs/new_configuration_1.json', JSON.stringify(newConfig_1, null, 2));
console.log("Please see new config file named: new_configuration_1.json\r\n");

console.log("~~ Update new config 2 ~~ \r\n");
let newConfig_2 = updateJSONWithNewConfig(file, update_2);
// Create new config file
fs.writeFileSync('./new_configs/new_configuration_2.json', JSON.stringify(newConfig_2, null, 2));
console.log("Please see new config file named: new_configuration_2.json\r\n");

console.log("~~ Update new config 3 ~~ \r\n");
let newConfig_3 = updateJSONWithNewConfig(file, update_3);
// Create new config file
fs.writeFileSync('./new_configs/new_configuration_3.json', JSON.stringify(newConfig_3, null, 2));
console.log("Please see new config file named: new_configuration_3.json\r\n");

console.log("~~~~ End of script ~~~~");