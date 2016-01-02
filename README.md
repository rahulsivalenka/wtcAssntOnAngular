# wtcAssntOnAngular
WTC assignment on Angular JS 1.4.x

##Aim
1. #####UI/Screens/View
    Can use any of the below in which you are comfortable to develop UX : 
       
      * HTML/CSS or 
      * [Bootstrap](http://getbootstrap.com/) or 
      * [Angular-UI](https://github.com/angular-ui). 

2. #####Application Logic to Implement :
Need to develop with: AngularJS: 1.4.X (Stable Version)

3. #####Application Summary 

    * Create an application with Login Page, where user can enter username/password.
    * Authentication to be done using static JSON data. No need of any DB connection.
    * On Failure Login, Display Error Message
    * On Successful Login,  A form and grid will be displayed. There will be ADD-NEW/ UPDATE/DELETE/SAVE buttons 
available to add new record or update or delete respectively.
    * Whenever user selects a row from grid, the form shall display selected row data in the form and the 
user can change and click to UPDATE button to update the existing record.
    * The data of the Grid will have some sample data of user demographics. Initially, Form will be in 
disabled mode. To enable the form, user can either select a row in the grid or user can click on 
ADD-NEW button.
    * The form and GRID data columns will contain the following fields of user demographics:  
    		
    		1. First Name, Last Name
    		2. Employee ID: 
    		3. Designation:
    		4. DOB: 
    		5. Address:
    		6. Mobile Number:
    		7. Email ID: 
    		8. Added By: (Take the Logged in User Name and auto-fill it in a Grey/Read-Only field)
    
    * Field Validations should be there. 
    * Once Your user Clicks on SAVE button, the form data has to be added to the data in the GRID.
    * User can perform operations of Add/Update/Delete on the GRID data. 
    * GRID should be filterable (i.e. if I want to see the particular employee detail, I can enter the name 
of the employee and the Grid will display that employee record only).
    * The FORM and the GRID Panel should be shown either TOP-BOTTOM or LEFT-RIGHT aligned so that 
there is a good view of both Form and Grid. 
    * LoggedIn user information and Logout option should be displayed at top right corner.
On LogOut CLick User should navigate to LogIn Screen.

## Screenshots
* Login Screen

    ![Login Screen](/screens/login-screen.png)
* Error Toast

    ![Error Toast](/screens/wrong-user-password.png)
* Normal Toasts

    ![Normal Toasts](/screens/login-logout-toasts.png)
