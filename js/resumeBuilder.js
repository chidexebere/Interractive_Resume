/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = { 
	"name": "Chidiebere Onyegbuchulem",
	"role":  "Web Developer",
	"contacts": {
		"mobile": "08180727371",
		"email" :"chidex5@gmail.com",
		"github": "chidexebere",
		"twitter": "@chidexebere",
		"location": "Lagos, Nigeria"
	},
	"picture" : "images/fry.jpg ",
	"welcomeMessage": "I am a Freelance Web Developer. I Live, I Love and I Learn ",
	"skills": ["HTML", "CSS", "JS", "Python"]

}


var education = {
	"schools": [
		{
		"name": "Federal University Of Technology Owerri",
		"location": "Imo, Nigeria",
		"degree": "B.Eng Electronics and Computer Engineering",
		"major": "Electrical and Electronics Engineering",
		"datesAttended": "2005",
		"url": "http://futo.edu.ng"

		}
	],

	"onlineCourses": [
		{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"completed": "2017",
		"url": "https://classroom.udacity.com/courses/ud804"

		}
	]
	
}


var work = {
	"jobs": [
		{
		"employer": "Swift Networks",
		"location": "Lagos, Nigeria",
		"title": "Technical Engineer",
		"datesWorked": "August 2015 – Present",
		"description": "FTTx(h)-Fibre To The (Home) solution design and implementation; AON and GPON."

	},
	{
		"employer": "Swift Networks",
		"location": "Lagos, Nigeria",
		"title": "Enterprise Network Engineer",
		"datesWorked": "August 2015 – Present",
		"description": "FTTH project solution design and implementation."
	}
]
}

var projects = {
	"projects": [
		{
		"title": "Final Year Project",
		"dates": "2010",
		"description": "Design and Construction of a Web Portal."
	}
]
}

// Display Bio Function

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	//$("#footerContacts").append(formattedContactInfo[i]);
	}
}

bio.display();



// Display Work Function

function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


// Display Project  Function

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();


// Display Education  Function

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(school in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title).replace("#", education.onlineCourses[school].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url).replace("#", education.onlineCourses[school].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


//Map
$("#mapDiv").append(googleMap);


/*$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name){
	name = name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);*/




