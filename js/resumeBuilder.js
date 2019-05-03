/*
Data goes here.
 */

let bio = {
  name: "Chidiebere Onyegbuchulem",
  role: " Front-end Developer",
  contacts: {
    mobile: "+2348062400139",
    email: "mailto:conyegbuchulem@gmail.com",
    github: "https://github.com/chidexebere",
    twitter: "https://twitter.com/chidexebere",
    portfolio: "https://chidexebere.github.io/Online-Portfolio",
    linkedin: "https://www.linkedin.com/in/onyegbuchulem-chidiebere"
  },
  picture: "images/bioPic.jpg ",
  welcomeMessage:
    "I am a Front-end developer living in Lagos Nigeria. I love to build great experiences on the web; I would say am an advocate for the web. \n When am not creating stuffs, I listen to music. \n And, I used to be a Network Engineer.",
  skills: [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "React",
    "NodeJS",
    "Gulp",
    "Firebase",
    "Git/GitHub",
    "GIMP"
  ]
};

let education = {
  schools: [
    {
      name: "Federal University Of Technology Owerri",
      location: "Imo, Nigeria",
      degree: "B.Eng, Electronics and Computer Engineering",
      class: "Second Class Upper Division  |  CGPA: 3.99",
      datesAttended: "2005 – 2010",
      url: "http://futo.edu.ng"
    }
  ],

  onlineCourses: [
    {
      title: "Google Africa Scholarships",
      school: "Udacity Mobile Web Specialist Nanodegree Program",
      completed: "May 2018 – Jan 2019",
      url: "https://graduation.udacity.com/nd024",
      cert: "see certificate"
    }
  ]
};

let work = {
  jobs: [
    {
      employer: "Freelance",
      location: "Lagos, Nigeria",
      title: "Front-end Developer  ",
      datesWorked: "Jan 2018 – present",
      description: [
        "Build responsive websites and progressive web applications with functional user experience. (HTML, CSS, JavaScript (with ES6) and React)",
        "Portfolio link: https://chidexebere.github.io/Online-Portfolio"
      ]
    },
    {
      employer: "Swift Networks",
      location: "Lagos, Nigeria",
      title: "Technical Lead FTTx and WTTx ",
      datesWorked: "Oct 2017 – Sept 2018",
      description: [
        "Developed the project plan, schedule and assigned daily tasks to core team members",
        "Worked with sales, marketing, and customer care teams to proffer solutions to customers changing needs",
        "Reduced response time to customer’s requests, complaints and tickets from 48 hrs to 24 hrs by developing a structured support template and strategically placing support teams closer to customer’s locations"
      ]
    },
    {
      employer: "Swift Networks",
      location: "Lagos, Nigeria",
      title: "Network Engineer FTTx - Fibre To The x (home/business/office) ",
      datesWorked: "Aug 2014 – Sept 2017",
      description: [
        "Deployed fibre and wireless to the (Home/Business/Office) solutions to customers within Lagos",
        "Monitored and reported daily issues on the fibre network using Network Monitoring tools",
        "Provided technical support to customers on internet service and VoIP solutions through remote and on-site troubleshooting"
      ]
    }
  ]
};

let projects = {
  projects: [
    {
      title: " Restaurant Review App ",
      url: "https://restaurant-reviews-2.firebaseapp.com",
      dates: "Dec 2018",
      description: [
        "Built a responsive restaurant review app that allows users to search for a restaurant, display its location on a map and make reviews. It is also a progressive web app which means it works offline",
        "This app was my final project for the Udacity Mobile Web Specialist Nanodegree Program",
        "Technologies used: HTML5/CSS3, JavaScript (with ES6), Service Worker, IndexedDB, Node.js, Gulp, Mapbox API, Restdb, Firebase"
      ]
    },

    {
      title: " Airbnb Clone App ",
      url: "https://airbnb-clone-5.firebaseapp.com",
      dates: "Sept 2018",
      description: [
        "Created a single page Airbnb clone website that allows users to search for an apartment and display its location us on markers using google maps",
        "I built this app while learning React from an online tutorial by LeWagon",
        "Technologies used: HTML5/CSS3, React, Node.js, Google Maps API, Firebase"
      ]
    },

    {
      title: " Currency Converter App ",
      url: "https://chidexebere.github.io/CurrencyConverter",
      dates: "June 2018",
      description: [
        "Developed a progressive web app that converts from one currency to another",
        "This app was one of the metrics for awarding the Google Africa Scholarships",
        "Technologies used: HTML5/CSS3, JavaScript, Node.js, Service Worker, IndexedDB, Free Currency Converter API"
      ]
    }
  ]
};

// Display Bio

bio.display = function() {
  let formattedName = HTMLheaderName.replace("%data%", bio.name);
  let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  let formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
  let formattedWelcomeMsg = HTMLwelcomeMsg.replace(
    "%data%",
    bio.welcomeMessage
  );

  let formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("#", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("#", bio.contacts.github));
  formattedContactInfo.push(HTMLtwitter.replace("#", bio.contacts.twitter));
  formattedContactInfo.push(HTMLportfolio.replace("#", bio.contacts.portfolio));
  formattedContactInfo.push(HTMLlinkedin.replace("#", bio.contacts.linkedin));

  $("#header").prepend(HTMLnameRole);
  $(".name-role").append(formattedName);
  $(".name-role").append(formattedRole);
  $("#header").append(HTMLbioCover);
  $(".bio-cover").append(formattedBioPic);
  $(".bio-cover").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsCover);
    $(".skills-cover").append(HTMLskillsStart);

    for (i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }

  for (i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
  }
};

bio.display();

// Display Work Function

function displayWork() {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);

    for (job in work.jobs) {
      let formattedEmployer = HTMLworkEmployer.replace(
        "%data%",
        work.jobs[job].employer
      );
      let formattedWorkTitle = HTMLworkTitle.replace(
        "%data%",
        work.jobs[job].title
      );
      let formattedWorkLocation = HTMLworkLocation.replace(
        "%data%",
        work.jobs[job].location
      );
      let formattedDatesWorked = HTMLworkDates.replace(
        "%data%",
        work.jobs[job].datesWorked
      );

      let formattedWorkDescription = HTMLworkDescription.replace(
        "%data%",
        work.jobs[job].description
      );

      let formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

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
  if (projects.projects.length > 0) {
    $("#projects").append(HTMLprojectCover);

    for (i in projects.projects) {
      $(".project-entries").append(HTMLprojectStart);
      let formattedProjectTitle = HTMLprojectTitle.replace(
        "%data%",
        projects.projects[i].title
      ).replace("#", projects.projects[i].url);
      let formattedProjectDates = HTMLprojectDates.replace(
        "%data%",
        projects.projects[i].dates
      );
      let formattedProjectDescription = HTMLprojectDescription.replace(
        "%data%",
        projects.projects[i].description
      );

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      for (img in projects.projects[i].images) {
        let formattedProjectImage = HTMLprojectImage.replace(
          "%data%",
          projects.projects[i].images[img]
        );
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

projects.display();

// Display Education  Function

education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
    $("#education").append(HTMLschoolCover);
    for (school in education.schools) {
      $(".education-entries").append(HTMLschoolStart);

      let formattedSchoolName = HTMLschoolName.replace(
        "%data%",
        education.schools[school].name
      ).replace("#", education.schools[school].url);
      let formattedSchoolDegree = HTMLschoolDegree.replace(
        "%data%",
        education.schools[school].degree
      );
      let formattedSchoolDates = HTMLschoolDates.replace(
        "%data%",
        education.schools[school].datesAttended
      );
      let formattedSchoolLocation = HTMLschoolLocation.replace(
        "%data%",
        education.schools[school].location
      );
      let formattedSchoolClass = HTMLschoolClass.replace(
        "%data%",
        education.schools[school].class
      );

      $(".education-entry:last").append(
        formattedSchoolName + formattedSchoolDegree
      );
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolClass);
    }

    if (education.onlineCourses.length > 0) {
      for (school in education.onlineCourses) {
        $(".education-entries").append(HTMLschoolStart);
        let formattedOnlineTitle = HTMLonlineTitle.replace(
          "%data%",
          education.onlineCourses[school].title
        ).replace("#", education.onlineCourses[school].url);
        let formattedOnlineSchool = HTMLonlineSchool.replace(
          "%data%",
          education.onlineCourses[school].school
        );
        let formattedOnlineDates = HTMLonlineDates.replace(
          "%data%",
          education.onlineCourses[school].completed
        );
        let formattedOnlineURL = HTMLonlineURL.replace(
          "%data%",
          education.onlineCourses[school].cert
        ).replace("#", education.onlineCourses[school].url);

        $(".education-entry:last").append(
          formattedOnlineTitle + formattedOnlineSchool
        );
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
};

education.display();

// Accordion

let allCovers = $(".cover").hide();
$(".title").click(function() {
  $(this).toggleClass("collapsed");
  allCovers.slideUp("slow");
  $(this)
    .next(".cover")
    .show();
});
