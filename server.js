// Importing Express
const express = require("express");

// Inititating/Running Express
const app = express();

// Setting up Public Directory
app.use(express.static("views"));

// Template Engine
app.set("view engine", "ejs");

// Environment Variables (Dotenv)
require("dotenv").config();

// Blogs Array
const blogsArray = [
  {
    id: "1",
    title: "Blog 1",
    author: "Chirag Chakraborty",
    summary:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nemo voluptates quos voluptatem quaerat modi atque quis deleniti mollitia animi!",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsam explicabo sed reiciendis ipsum labore? Impedit tempora aliquidarchitecto deleniti exercitationem rerum eaque nam pariatur, nobis obcaecati perferendis beatae libero soluta iure accusamus enim quibusdam amet quisquam numquam doloribus, consectetur non eum. Abnostrum unde nemo reiciendis veritatis officia eum impedit quis qui, natus ex animi delectus totam distinctio molestias id ducimus provident iusto similique quaerat. Odio vel delectus molestiae, impedit eveniet repellat! Dolorem blanditiis, exercitationem neque aperiam nam eum eaque veniam cumque quibusdam, aut quaerat voluptatum voluptatem harum similique saepe cupiditate praesentium repellendus temporibus quos nulla necessitatibus reprehenderit omnis.",
  },
  {
    id: "2",
    title: "Blog 2",
    author: "Kuntal Chowdhury",
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ab labore quis eligendi itaque expedita adipisci, cum asperiores provident nobis.",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam ex necessitatibus exercitationem facilis asperiores suscipit enim eius neque tempora, eos accusantium excepturi ut corrupti animi. Quaerat incidunt ipsa obcaecati dolores? Reprehenderit nemo id temporibus esse fugit culpa sed error iusto qui ipsa cupiditate ab et quos laboriosam exercitationem, expedita incidunt repellendus nisi nam. Asperiores facilis earum nobis praesentium dolor atque tenetur nesciunt tempora, hic ex. Labore distinctio soluta cupiditate saepe suscipit ratione quod nulla iure aliquam illum dolorum asperiores ut praesentium quas aut, provident alias voluptatibus sequi. Debitis distinctio deleniti labore, nisi suscipit consequuntur esse corporis praesentium dolores magni.",
  },
  {
    id: "3",
    title: "Blog 3",
    author: "Debasmita Maji",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere corrupti quia, harum veniam voluptate sequi. Laborum sunt reprehenderit cumque!",
    body: "গল্পের প্রেক্ষাপট আশির দশক। স্থানীয় প্রভাবশালী ব্যবসায়ী (পড়ুন, গুন্ডা) ফেলু আচার্যের (রজতাভ দত্ত) থেকে নাটকের বায়না নিয়ে ফাঁপরে পড়েছে বগলা (খরাজ মুখোপাধ্যায়)। ফেলু চায় নাটকের প্রতিযোগিতায় জিতে মানুষের চোখে ‘সংস্কৃতিমনস্ক’ হিসাবে পরিচিতি পেতে। বগলা কীচকবধের প্রেক্ষাপটে নাটক সাজিয়েছে। বিপরীতে রয়েছে গ্রামের মাস্টারমশাইয়ের সিরাজদৌল্লা নাটক। প্রতিযোগিতায় না জিততে পারলে ফেলুর হাত থেকে বগলা এবং তার দলবলের নিস্তার নেই। সুতরাং পর্দায় গল্পের গতির সঙ্গে পাল্লা দিয়ে বেড়েছে ‘প্যান্ডেমোনিয়াম’।",
  },
];

// Setting up Routes

// Home Page
app.get("/", (req, res) => {
  // Setting the response code to 200 and rendering the index.ejs template
  res.status(200).render("index", { blogs: blogsArray });
});

// About Page
app.get("/about-us", (req, res) => {
  res.status(200).render("about");
});

// Redirection
app.get("/about", (req, res) => {
  res.redirect("/about-us"); // Redirecting the user to the About Page
});

// Details Page
app.get("/details/:id", (req, res) => {
  const id = req.params.id; // Collecting the id from the request URL
  const blogObject = blogsArray[id - 1]; // Fetching the particular blog according to its id
  res.status(200).render("details", { blog: blogObject });
});

// Error Page (Must be called after all the routes have been set up)
app.use((req, res) => {
  // Setting the response code to 404, which means 'Not Found'
  res.status(404).render("error");
});

// Listening on a port
app.listen(process.env.PORT, () => {
  console.log("Server running...");
});
