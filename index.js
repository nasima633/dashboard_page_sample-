const profilebtn = document.getElementById("profile-btn");

const myprofile = document.getElementById("my-profile");

const search = document.getElementById("search");

const skills = document.querySelectorAll(".skill");

const noresult = document.getElementById("noResult");

profilebtn.addEventListener("click", function () {
  myprofile.classList.toggle("hidden");

  if (myprofile.classList.contains("hidden")) {
    profilebtn.textContent = "Show My Profile";
  } else {
    profilebtn.textContent = "Hide My Profile";
  }
});

search.addEventListener("input", function () {
  const searchText = search.value.trim().toLowerCase();

  let matchingSkills = 0;

  skills.forEach(function (skill) {
    const skillName = skill.textContent.toLowerCase();

    if (skillName.includes(searchText)) {
      skill.style.display = "inline-block";

      matchingSkills++;
    } else {
      skill.style.display = "none";
    }
  });

  if (matchingSkills === 0) {
    noresult.classList.remove("hidden");
  } else {
    noresult.classList.add("hidden");
  }
});
