 const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'light');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'dark');
        }
    });
 
  
 


const dashContainer = document.getElementById("dashboardContainer");

const dashboard = [
  {
    icon:"📂",
    title: "Book Categories Count",
    count: 9
  }
  // {
  //   title: "Borrowed Books",
  //   count: 5
  // }
];



dashboard.forEach(item => {
  const html = `
    <div class="col-12 col-sm-6 col-md-3 mb-4">
      <div class="dash-card h-100 p-3 text-center">
      <div class="icon-box">${item.icon}</div>
        <h4>${item.title}</h4>
        <h5>${item.count}</h5>
      </div>
    </div>
  `;
  
  dashContainer.insertAdjacentHTML("beforeend", html);
});

const dashboardSection = document.getElementById("dashboard");
const categoriesSection = document.getElementById("categories");
const profileSection = document.getElementById("Profile");
const OurLibrarySection = document.getElementById("OurLibrary");

// NAV BUTTONS
const dashboardBtn = document.getElementById("dashboardBtn");
const categoriesBtn = document.getElementById("categoriesBtn");
const profileBtn = document.getElementById("ProfileBtn");
const OurLibraryBtn = document.getElementById("OurLibraryBtn");

// BUTTON CLICK HANDLERS
dashboardBtn.addEventListener("click", () => {
  dashboardSection.style.display = "block";
  categoriesSection.style.display = "none";
  profileSection.style.display = "none";
  OurLibrarySection.style.display = "none";
});

categoriesBtn.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  categoriesSection.style.display = "block";
  profileSection.style.display = "none";
  OurLibrarySection.style.display = "none";
});

profileBtn.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  categoriesSection.style.display = "none";
  profileSection.style.display = "block";
  OurLibrarySection.style.display = "none";
});

OurLibraryBtn.addEventListener("click", () => {
  dashboardSection.style.display = "none";
  categoriesSection.style.display = "none";
  profileSection.style.display = "none";
  OurLibrarySection.style.display = "block";
});


// Default: Show dashboard only
categoriesSection.style.display = "none";
profileSection.style.display = "none";
OurLibrarySection.style.display = "none";


const books = [
{ 
   backgroundcolor:"#4D96FF", 
   bookicon:"📘", 
   title:"Education", 
   description:"Mathematics, Physics, Chemistry, Biology, Computer Science / IT, Engineering, Commerce, Economics, Business Studies, Medical & Nursing, Law.",
   link: "/education"
  },

{ 
   backgroundcolor:"lightgreen", 
   bookicon:"📕", 
   title:"Fiction", 
   description:"Adventure, Mystery & Thriller, Romance, Fantasy, Science Fiction, Historical Fiction, Horror.",
   link: "/fiction"
},

{
   backgroundcolor:"#00C9A7", 
   bookicon:"💻", 
   title:"Skill Development", 
   description:"Programming, algorithms, technology books.",
   link: "/skilldevelopment"
},
{
   backgroundcolor:"lightyellow", 
   bookicon:"🎓", 
   title:"Competitive Exams", 
   description:"UPSC, TNPSC, NEET, JEE, SSC, Banking Exams,Railway.",
   link:"/competitiveexams"
},

{
   backgroundcolor:"greenyellow", 
   bookicon:"📚", 
   title:"References", 
   description:"Dictionaries, Encyclopedias, Atlases, Yearbooks.",
   link:"/references"
},

{
   backgroundcolor:"rgb(148, 195, 250)", 
   bookicon:"🎨", 
   title:"Arts & Lifestyle", 
   description:"Cooking, Photography, Drawing / Painting, Fashion, Music, Health & Fitness.",
   link:"/artslifestyle"
},

{
   backgroundcolor:"orchid", 
   bookicon:"📰", 
   title:"Magazines & Journals", 
   description:"Tech Magazines, Sports Magazines, Educational Journals, Business Magazines.",
   link:"https://www.indiatoday.in/livetv"
},

{
   backgroundcolor:"lightsalmon", 
   bookicon:"🧒", 
   title:"Children & Teens", 
   description:"Story Books, Comics, Early Learning, Young Adult Fiction, Moral Stories.",
   link:"/childrenteens"
},

{
   backgroundcolor:"gray", 
   bookicon:"📖", 
   title:"Non-Fiction", 
   description:"Biography & Autobiography, Self-Help Motivation, History, Philosophy, Psychology, True Crime, Travel, Religion & Spirituality.",
   link:"/NonFiction"
}

];


const box = document.getElementById('bookContainer');


books.forEach(book => {
const html = `
  <div class="col-12 col-sm-6 col-md-3 mb-4">
      <div class="category-card"
       style="cursor:pointer"
           ${book.link ? `onclick="window.location.href='${book.link}'"` : ""}>
       <div class="category-container">
      <div class="category-icon" style="background-color:${book.backgroundcolor}">
        ${book.bookicon}
      </div>
      <h4>${book.title}</h4>
      <p>${book.description}</p>
    </div>
  </div>`;
box.insertAdjacentHTML("beforeend", html);
});






