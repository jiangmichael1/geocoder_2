# TO DO
1. Figure out OpenLayers map display
2. Figure out how to get values to display on fetch request
3. User input/form submit - allow user to upload XLSX file that will display on webpage
4. Learn to how to use Redux Store -> All constants need storage in Redux store such that they can be manipulated in real time


*3/27/23*
- Got a working GitHub repo
- Began working with OpenLayers Map Library
- Corrected all usage of Function 1A to 1B
- Successfully rendering each label -> Still need to figure out values
- Fixed an issue with 'DisplayFormat = False' causing weird spacing on return request

*4/1/23*
- Looked into Zhi's code to figure out how to iterate over fetch request's key/value pairs and get the values to display
- Found an entire react component dedicated to flattening the request -> Will use this idea: Create RC that returns a flattened array
- Looked into XLSX JS Library provided by SheetJS, the community edition

*4/3/23*
- Started reading documentation on SheetJS's CE of XLSX
- Encountered an error with "Uncaught TypeError" when trying to import XLSX from the './xlsx' library -> needed to import * as XLSX instead
- Imported a sample Excel file and got it to display in console
- Created this MD file to better note down each day's discoveries/learnings
- Started using HotTable to display the imported Excel file

*4/5/23*
- Figuring out how to lift state up in React to pass array version of Excel data to HotTable
    - Made a quick to-do list app to refresh memory on state managements
- Figured out how to pass the array from the parse file to the display file
- Working on how to display each header using .map

*4/7/23*
- Got the table with headers display to work, now displays all the information from the imported table
- Lift the data up so it can be used for url fetch request 
    - Figure out how to queue each row into a fetch request
    - Store the needed column as a state 
    - Maybe find a library for queueing? -> Check Zhi's code

*4/10/23*
- Restarted the app after realizing that it was too messy having started without guidance
- Working on importing Excel file and storing each row as a state at the top level 
- Create header and body for Excel display 
- Able to read imported file and edit each cell 
- Configuring fetch request to take parameters from state (not hardcoded anymore) 
- Next steps: 
    - Figure out how to query each row as a separate fetch request
    - Understand how Zhi did the querying/pick apart his code

*4/12/23*
- Axios working to make the Get request 
- Working on queryHelper -> Having an issue where passing the data array retrieved from the request causes an endless loop