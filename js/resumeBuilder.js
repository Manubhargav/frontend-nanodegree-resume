/*		--Bio--		*/

var bio = {};

bio.name = "Manu Bhargav";
bio.role = "Front-End Developer";
bio.contacts = {
 			"mobile": "+919964210799",
 			"email" : "manubhargav27@gmail.com",
 			"github" : "manubhargav",
 			"twitter" : "@aadithya27",
 			"location" : "Mysore"
 		};
bio.welcomeMessage = "Welcome to my Online Resume";
bio.skills = [" Awesomeness "," Programming "," Photography ","Delivering on time"];
bio.biopic = "images/fry.jpg";

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	$("#header").append(formattedBioPic,formattedWelcome);
	if(bio.skills) {
		$("#header").append(HTMLskillsStart);
	}
	bio.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%",skill);
	 		$("#skills").append(formattedSkill);
	});

	/* Footer Contacts*/
	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
};

bio.display();

/*		--Education--		*/

var education = {};
education.schools = [
	{ 
			"name" : "VVCE",
			"location" : "Mysore",
			"degree" : "B.Tech",
			"majors" : ["IS&E","ComputerScience"],
			"dates" : "2016",
			"url" : "http://vvce.ac.in"
		},
		{
			"name" : "Udacity",
			"location" : "Online",
			"degree" : "Nanodegree",
			"majors" : ["HTML&CSS","JavaScript"],
			"dates" : "2016",
			"url" : "http://udacity.com"
		}
];

education.onlineCourses = [
	{
			"title" : "FEND",
			"school" : "Udacity",
			"dates" : "29th Aug",
			"url" : "http://udacity.com/nanodegree/nd001/"
	}
];

education.display = function(){
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",school.name).replace("#",school.url);
			var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
			var formattedNameDegree = formattedName + formattedDegree;
			var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
	});
	$("#education").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%",course.title).replace("#",course.url);
		var formattedSchool = HTMLonlineSchool.replace("%data%",course.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		var formattedDate = HTMLonlineDates.replace("%data%",course.dates);
		var formattedURL = HTMLonlineURL.replace("%data%",course.url);
		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedURL);
	});
};
education.display();

/*		--Work--		*/

var work = {};
work.jobs = [
	{
		"employer" : "Forest Department",
		"title" : "System Analyst",
		"location" : "Mysore",
		"dates" : "September onwards",
		"description" : "Work at Aranya Bhavana. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employer" : "UL",
		"title" : "Fellow Intern",
		"location" : "Bangalore",
		"dates" : "October onwards",
		"description" : "Work with UL on Fire & Safety Codes. ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
	}
];

work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%",job.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
			var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);
	});
};

work.display();

/*		--Projects--		*/

var projects =  {};

projects.projects = [
	{
		"title" : "Lollipop Man App",
		"dates" : "2014", 
		"description" : "IOT App",
		"images" : ["images/project1-large.jpg"]
	},
	{
		"title" : "Web development",
		"dates" : "2015",
		"description" : "RigTechnologies.in",
		"images" : ["images/project2-large.jpg"]
	},
	{
		"title" : "Photography",
		"dates" : "2016",
		"description" : "instagram.com/manubhargav",
		"images" : ["images/project3-large.jpg"]
	}
];

projects.display = function() {
	projects.projects.forEach(function(i) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",i.title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",i.dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",i.description);
		$(".project-entry:last").append(formattedProjectDescription);
		if(i.images.length>0) {
			i.images.forEach(function(j) {
				var formattedImage = HTMLprojectImage.replace("%data%",j);
				$(".project-entry:last").append(formattedImage);
			});
		}
	});
};
projects.display();


/*		--Google Map--		*/


$("#mapDiv").append(googleMap);