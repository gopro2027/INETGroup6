# INETGroup6
Advanced Internet Programming Group Project


---
## XAMPP Set Up

After you have downloaded XAMPP, there are some configuration changes that are needed to work with this project.  First, test that the APACHE and MySQL servers work properly when clicking start.  Then test phpMyAdmin to make sure it loads properly.  You can see the professor's documentation on how to do this.

After ensuring everything works, stop all modules in XAMPP, then do the following.

- Navigate to your XAMPP folder.
    - For me, this is C:\xampp
- From here, navigate to apache, then to conf.
- Open httpd.conf in whatever editer you like.
- Search for the entry "DocumentRoot" and change the location to the repo folder in the host folder.
    - For example, after editing, it would read: DocumentRoot "C:/CSC/INETGroup6/host" depending on where you saved the project.
- Do the same with the next line, "<Directory ..."
    - <Directory  "C:/CSC/INETGroup6/host">
- IMPORTANT NOTE!
    - The slashes in the paths are backwards compared to windows file paths.  Don't forget to reverse them.
- After you make the changes, save the file and restart the Apache module.  If it doesn't work, double check your file paths and syntax.  If it does work, turn the Apache module back off and ensure no modules are running in XAMPP.
- Next, navigate to the mysql folder on your computer.
    - for me, C:\xampp\mysql
- Open the bin folder and then open the my.ini file in your editor.
- Find the line datadir="C:/xampp/mysql/data" and change it to the host/data folder in the repo.
    - For me, that would make the line datadir="C:/CSC/INETGroup6/host/data"
Find the line innodb_data_home_dir="C:/xampp/mysql/data" and do the same.
    - for me, innodb_data_home_dir="C:/CSC/INETGroup6/host/data"
- Then find the line innodb_log_group_home_dir="C:/xampp/mysql/data" and do it there, too.  All three lines that you have edited should have the same path.
    - for me, innodb_log_group_home_dir="C:/CSC/INETGroup6/host/data"
- Start both the Apache and MySQL modules in XAMPP to ensure everything is running.  If anything is wrong, check the filepaths and ensure you reversed the slashes in the filepath.
- Assuming everything is good to go, click the "Admin" button next to Apache and you should see the localhost directory with a folder called "data."
- Click on the "Admin" button next to MySQL to bring up phpMyAdmin.
- If all was done correctly, you should be able to see the database.
---