This project was built and tested using IIS 8, Angular JS and bootstrap. 
The index.html file at the root is the one that kicks off the single page application.
The folder structure has been chosen so that it prevents clutter as the project increases in size.
In production, all js and css files should be minified and bundled, but for easier understanding of what the includes
do, I have left them as is.
I have done some testing on Chrome (v 49) and IE 11, but to save time, have skipped testing on older versions.
The web page is pretty responsive including the navigation at the top, the table that lists the results as well as the
input form controls that stack on top of one another on smaller screens.
The whole thing has taken roughly 3 hours. As I am out of time, I will not implement part 3 which is buttons, link
triggers, but that should be pretty standard from hereon.
The main files to look for are index.html and indexCtrl.js inside /app/components/home. Constant appId is defined in
app/shared/modules/app.module.js