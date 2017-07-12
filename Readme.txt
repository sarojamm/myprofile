This is from javascript performance book.

Git commands
echo "# myprofile" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:sarojamm/myprofile.git
git push -u origin master

or push an existing repository from the command line

git remote add origin git@github.com:sarojamm/myprofile.git
git push -u origin master


checkout and push


scp -i  /Users/user/Documents/sammula/aws/lbcatalog.pem  /Users/user/Documents/sammula/apps/apache-tomcat-8.0.39/webapps/myprofile.war    ec2-user@ec2-23-23-184-221.compute-1.amazonaws.com:/apps/tomcat/apache-tomcat-8.0.39/webapps
--scp -i  /Users/user/Documents/sammula/aws/lbcatalog.pem  /Users/user/Documents/sammula/apps/apache-tomcat-8.0.39/webapps/ltewebver2.war   ec2-user@ec2-23-23-184-221.compute-1.amazonaws.com:/apps/tomcat/apache-tomcat-8.0.39/webapps
--scp -i  /Users/user/Documents/sammula/aws/lbcatalog.pem  /Users/user/Documents/sammula/apps/apache-tomcat-8.0.39/webapps/reports.war      ec2-user@ec2-23-23-184-221.compute-1.amazonaws.com:/apps/tomcat/apache-tomcat-8.0.39/webapps
 