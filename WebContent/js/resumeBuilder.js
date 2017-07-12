/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Saroja Ammula");
 var name ="Saroja Ammula";
 var role = "FullStack Developer";
  var skills = ["Technologies:  Java, Spring, JPA, RESTful Web services, Angularjs, " +
  "jQuery, Bootstrap, HighCharts, TomCat7.0, Hibernate.",
  "Familiar: Hadoop, Mapreduce, Hive, Pig, HDFS, HBase, Spark, Scala, Python, MongoDB, Amazon EC2 and cloudera.",
  "Databases:  ASE 15.5, MySql, MSSQL, Oracle 10g, and Oracle 8i.",
  "Operating Systems: UNIX, Linux, Windows 7, Mac OS  10.X, and DOS"
];
 var bio = {
 	"name":name,
 	"role":role,
 	"contacts":{
 		"mobile": "408-865-0122",
 		"email":"saroja.ammula@gmail.com",
 		"github":"sarojamm",
 		"location":"Bay Area"
 	},
 	"WelcomeMessage":" Welcome ",
 	"skills":skills,
 	"bioPic":"images/me.jpg"
 }; 
var work = {
  "jobs": [
    {
      "employer": "Verizon, Inc",
      "title": "Senior Software Systems Engineer",
      "location": "Walnut creek, CA",
      "dates": "June 2014 - Dec 2016",
      "description": "Worked on developing products from a proof-of-concept to product development to final deployment." +
	  " Developed prototypes of dashboards to display data in tabular and chart formats. " +
	  "Designed and implemented the application, with reusability in-mind, such that it can be integrated in several " +
	  "performance tools. Achieved this by identifying and decoupling functionality rooted in legacy systems;" +
	  " Worked with rf engineers to identify the data mappings for KPI; streamlined the format of the results " +
	  "generated by reporting engines; created the data model for metadata used by the application; " +
	  "implemented dashboards with enhanced features to meet the latest responsive look and feel."
    },
    {

      "employer": "GE",
      "title": "Software Engineer",
      "location": "San Ramon, CA.",
      "dates": "2013 Oct – 2014 March",
      "description": "Worked on one of the main component of the Grid IQ insights tool. Implemented web services for advanced meter insights analytics." +
	  " Worked on dashboards to display usage charts associated with meter usage, temperature reading alerts, and various other flags."
    },
    {
      "employer": "AT&T",
      "title": "Java Developer",
      "location": "San Ramon, CA.",
      "dates": "2011 June - 2013 Oct",
      "description": "Worked on the CELL2MSN study tool: Tool mainly prepares data to be analyzed be the mobility" +
	  "voice traffic on the network and designed site mappings. This cell site mapping maximizes the coverage of " +
	  "handover activities while maintaining voice traffic balance between two sub-groups. This tool assists the network " +
	  "planners to handover the voice traffic to other neighboring cells that are within the same location. Worked on the two main components of this tool.."
    },
    {



      "employer": "Sybase, Inc.",
      "title": " Information System Engineer",
      "location": "Dublin, CA.",
      "dates": "2005 Nov- 2011 June",
      "description": " •	Designed, implemented and maintained several internal and external customer facing web projects." +
	  "Involved in all phases of Software Development Lifecycle including business analysis, requirements gathering, data modeling, " +
	  "converting business requirements into a web application system, testing, releasing to production systems, and supporting the deployed product."
    }
  ]
};
var projects ={
	"projects": [{
		"title":"ShopSqlData",
		"dates":"2011 June - Present",
		"description":" Analytics for different data sources ",
		"images":["images/ltehc1.png","images/ltetbl1.png","images/lteurep.png","images/atthp.png"]
	}],

};

var education={
 	"schools":[
    	{
    		"name":"San Jose State University",
    		"location": "San Jose",
    		"degree":"BS",
    		"majors":["CS"],
    		"dates":2006,
    		"url":"http://sjsu.edu"
    	},
 	    {
 	    	"name":"San Jose State University",
    		"location": "San Jose",
    		"degree":"Masters",
    		"majors":["Software Engineeting"],
    		"dates":2012,
    		"url":"http://sjsu.edu"

 	    }
 	],
 	"onlineCourses":[
 		{
 			"title":"Java Script",
    		"school": "Udacity", 
    	 	"dates":2017,
    		"url":"http://udacity.com"
    	},
        {
            "title":"Big Data",
            "school": "Coursera",
            "dates":2017,
            "url":"https://www.coursera.org/account/accomplishments/specialization/TVE7C2FSFPSE"
        }
 	]

}; 
addHeader();
addSkills();
addMap();
addContact();
addExperience();
addProject();
addEducation();


 // Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locationArra=[];
    for (var job in work_obj.jobs){
    	var newlocation = work_obj.jobs[job].location;
    	locationArra.push(newlocation); 
    }
    return locationArra;
}
function inName(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
 
function addExperience(){
 	//$("#workExperience").css("display", "none");
    $("#workExperience").css("display", "block");
 	$("#workExperience").append(HTMLworkStart);

 	for(var i =0; i <  work.jobs.length; i++){
       	var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
       	var title = HTMLworkTitle.replace("%data%", work.jobs[i].title); 
	    $(".work-entry:last").append(employer + title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(description);
 	}  
}
function addEducation(){
	$("#education").css("display", "block");
 	$("#education").append(HTMLschoolStart); 
 	for(var i =0; i <  education.schools.length; i++){
       	var name = HTMLschoolName.replace("%data%", education.schools[i].name);
       	var location = HTMLschoolLocation.replace("%data%", education.schools[i].location); 
       	var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var majors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]); 
       	var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
       	var url = HTMLonlineURL.replace("%data%", education.schools[i].url); 
	    $(".education-entry:last").append(name+degree); 
        $(".education-entry:last").append(dates);
        $(".education-entry:last").append(majors);
        $(".education-entry:last").append(location);
        $(".education-entry:last").append(url); 
    } 
 	$(".education-entry:last").append(HTMLonlineClasses);
    for(var i =0; i <  education.onlineCourses.length; i++){
       	var name = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
       	var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school); 
       	var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
       	var url = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url); 
	    $(".education-entry:last").append(name+school); 
        $(".education-entry:last").append(dates);  
        $(".education-entry:last").append(url); 
   } 
}

function addHeader(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
 	$("#header").append(formattedName);
 	var formattedRole = HTMLheaderRole.replace("%data%", bio.role  +" | <a href='/'   ><span class='blacktext'>Home</span></a>");
	$("#header").append(formattedRole); 
	 
}
function addSkills(){
	var HTMLbioPic = '<img src="%data%" class="biopic rotate90">';
	var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
	$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage));
 	if(skills.length > 0){
 		$("#header").append(HTMLskillsStart);
 		for(var i = 0; i <  skills.length; i++ ){
        	var skill = HTMLskills.replace("%data%",skills[i] );
 			$("#skills").append(skill);
 		} 
 	}
}
function addContact(){ 
	//HTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "contact");
	//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", "data"); 
 	//$("#footerContacts").append(HTMLcontactGeneric); 
 	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
 	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
 	$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.github));
 	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github ));
 	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location )); 
}
function addMap(){ 
	$("#mapDiv").append(googleMap);
}
function addProject(){
	$("#projects").css("display", "block");
	$("#projects").append(HTMLprojectStart); 
	for(var i =0; i <  projects.projects.length; i++){
        var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(title);
        var dates = HTMLprojectTitle.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(dates); 
        var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(description);
        
        for (var j =0; j < projects.projects[i].images.length ; j++){
        	var gallary="<div class='gallery'> <a target='_blank' href='"+ projects.projects[i].images[j]+"'> "; 
        	var images = HTMLprojectImage.replace("%data%",  projects.projects[i].images[j]  );
        	gallary += images +"  </a>  <div  >Add a description of the image here</div>  </div>";
        	$(".project-entry:last").append(gallary); 
        }
        
        
 	}   
 	

}
