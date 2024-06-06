const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
      sidebar.classList.toggle("close");
    });
    searchBtn.addEventListener("click", () =>{
      sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () =>{
      body.classList.toggle("dark");

      if(body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
      }else{
        modeText.innerText = "Dark Mode"
      }
    });


    document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById('main-content');

  const content = {
    home: `
      <div class="text">
        <main class="main_content">
          <section class="intro">
            <h1>Tech for All: A Senior-Friendly Guide</h1>
            <p class="ourWebsite">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error alias praesentium obcaecati accusantium amet enim odit quasi laudantium reiciendis cupiditate sunt, minus eos fugit, ipsum atque. Libero quibusdam debitis dolorum.
            </p>
            <button class="site">START!</button>
          </section>
          <img src="./img/teste.png.png" alt="landing page" class="intro-image">
        </main>
        <section class="transition01">
          <h3></h3>
        </section>
        <div class="tutorial">
          <h2 class="tutorial_title">How to use our website</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mYjvgSeRu3c?si=ayndxKfo-W3cxMcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    `,
    "basic-computer-science": `
      <div class="text">
      <h1>Basic Computer Science</h1>
      <p>If you know someone who works in technology, you've likely seen various "strange codes" on their monitor. These are part of programming languages, the means by which we communicate with computers to create applications, websites, software, and more.</p><br>
      <h2>Understanding Programming Languages</h2>
      <p>These codes are the tools we use to instruct computers on what to do. Just as humans communicate using different languages, computers understand various programming languages, each with unique characteristics. The most common languages used in the tech industry include: </P>
      <ul>
      <li>PHP</li>
      <li>C#</li>
      <li>JavaScript</li>
      <li>C++</li>
      <li>C</li>
      <li>Python</li>
      </ul>
      <br>
      <p>Programming is considered the universal language of the 21st century, influencing almost every aspect of the modern world. From digitizing public services to developing ride-sharing apps, programming is pivotal in transforming how we interact with technology. Additionally, programming fosters brain activity and enhances creative development.
      </p><br>
      <h2>Benefits of Learning to Program in Older Age</h2>
      <li>1. Stimulates Creativity and Innovation:
      Programming challenges often require creative problem-solving. This constant need for innovation can significantly stimulate one's creativity and ability to think outside the box.</li><br>
      <li>2. Reduces Social Isolation:
      Group classes at colleges or schools can help reduce social isolation by fostering interaction and community among participants.</li><br>
      <li>3. Improves Daily Performance:
      Programming enhances logical reasoning and concentration. These skills translate to better focus, quicker decision-making, and improved logical thinking in everyday activities.</li><br>
        <li>4. Continuous Learning Opportunities:
      The ever-evolving field of programming ensures that there is always something new to learn. For older adults, this represents an opportunity to stay mentally active and engaged in lifelong learning.</li><br>
      <li>5. Sets an Example for Other Generations:
      By learning to program, older adults can inspire younger generations, demonstrating that it’s never too late to learn new skills. This can encourage a culture of lifelong learning and adaptability.</li>

      <p>Learning to program not only benefits individuals but also has a broader positive impact on society by promoting digital inclusion, innovation, and intergenerational engagement.
      </p><br>
      <h2>Introduction to Basic Programming Concepts</h2>
      <p>For those unfamiliar with computers and programming, here’s a brief explanation:<br>

      <strong>What is Programming?</strong><br>
      Programming is the process of giving instructions to a computer to perform specific tasks. It's like writing a recipe where you specify the ingredients, the order of mixing them, and the baking time. Similarly, in programming, you write instructions in a language the computer understands, such as JavaScript, PHP, JAVA, or C#. The computer then follows these instructions to accomplish tasks like creating a website, a mobile app, or even controlling a robot.</p><br>
      <h2>Focus on Front-End Development</h2>
      <p>With a basic understanding of programming, let's delve deeper into one of its branches: front-end development. This area is crucial for creating the visual and interactive aspects of websites and software, ensuring the best possible user experience.<br>

      <strong>The Role of Front-End Developers:</strong><br>
      Front-end developers are responsible for designing the "face" of websites and applications. They focus on layout, color schemes, images, fonts, and overall visual presentation to make the site attractive and user-friendly.</p><br>
      <h2>Essential Tools for Front-End Development</h2>
      
      <ul>
      <li><strong>1. HTML (HyperText Markup Language):</strong>
      <p>HTML provides the structure of a webpage. It creates elements like headers, paragraphs, titles, lists, and links, allowing developers to organize content logically and accessibly. Example of a Page with Only HTML:
      </p></li><br>
      <li><strong>2. CSS (Cascading Style Sheets):</strong>
      <p>CSS controls the visual presentation of a website. It works in tandem with HTML to style the content, defining how elements are displayed, including layout, colors, fonts, and more. Example of a Page with HTML and CSS:
      </p></li><br>
      <li><strong>3. JavaScript:</strong>
      <p>JavaScript adds interactivity and dynamic features to a webpage that HTML and CSS alone cannot achieve. For instance, JavaScript enables user authentication during login processes, creating a more interactive and functional user experience.Example of a Page with HTML, CSS, and JavaScript:
      </p></li>
      </ul><br>
    <h2>Conclusion</h2>
    <p>While these three tools—HTML, CSS, and JavaScript—are fundamental, many other technologies complement front-end development. Mastering these core tools is crucial as they form the foundation of most websites and applications. Front-end development is an exciting and dynamic field, offering numerous opportunities for creativity and innovation in the digital world.
    </p>  


    </div>
  `,
    "programming-logic": `
      <div class="text">
        <h1>Programming Logic</h1>
        <p>Content for Programming Logic.</p>
      </div>
    `,
    "digital-security": `
      <div class="text">
        <h1>Digital Security</h1>
        <p>Content for Digital Security.</p>
      </div>
    `,
    logout: `
      <div class="text">
        <h1>Logout</h1>
        <p>You have been logged out. Thank you for visiting!</p>
      </div>
    `
  };

  document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const section = link.getAttribute('data-content');
      mainContent.innerHTML = content[section];
    });
  });

  // Toggle Dark Mode
  const toggleSwitch = document.querySelector('.toggle-switch');
  const modeText = document.querySelector('.mode-text');

  toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      modeText.textContent = "Light Mode";
    } else {
      modeText.textContent = "Dark Mode";
    }
  });
});

  // Toggle Sidebar
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    document.body.classList.toggle('sidebar-closed');
    mainContent.classList.toggle('full-width');
  });