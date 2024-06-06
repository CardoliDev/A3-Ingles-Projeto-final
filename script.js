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
            <button class="site">Welcome!</button>
          </section>
          <img src="./img/teste.png.png" alt="landing page" class="intro-image">
        </main>
        <section class="transition01">
          <h3></h3>
        </section>
        <div class="tutorial">
          <h2 class="tutorial_title">Practical example
          </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mYjvgSeRu3c?si=ayndxKfo-W3cxMcV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    `,
    "basic-computer-science": `
      <div class="text">
      <h2>Hardware and Software</h2>
    <p>Hardware and software are two fundamental components of any computing system, playing distinct but complementary roles.</p>

    
        <h2>Hardware</h2>
        <p>Hardware refers to the physical components of a computer, that is, all the tangible parts that make up the system. Some examples of hardware include:</p>
        <ul>
            <li><strong>CPU (Central Processing Unit):</strong> The "brain" of the computer, responsible for executing instructions and processing data.</li>
            <li><strong>RAM (Random Access Memory):</strong> Temporarily stores data and instructions that the CPU needs while performing tasks.</li>
            <li><strong>Hard Disk Drive (HDD) or Solid State Drive (SSD):</strong> Storage devices that permanently hold data and programs.</li>
            <li><strong>Motherboard:</strong> The main circuit board that connects and allows communication between all the components of the computer.</li>
            <li><strong>Peripherals:</strong> Devices such as keyboard, mouse, monitor, printer, and other accessories that enable interaction with the computer.</li>
        </ul>
   

    
        <h2>Software</h2>
        <p>Software, on the other hand, refers to the programs and applications that instruct the hardware on what to do. Software is intangible and can be categorized into two main classes:</p>
        <h3>System Software:</h3>
        <ul>
            <li><strong>Operating System (OS):</strong> Manages the computer's hardware and software, providing essential services for running different programs. Examples include Windows, macOS, Linux, and Android.</li>
            <li><strong>Drivers:</strong> Programs that allow the operating system and other software to interact with the hardware.</li>
        </ul>
        <h3>Application Software:</h3>
        <ul>
            <li><strong>Office Programs:</strong> Such as Microsoft Office, Google Docs.</li>
            <li><strong>Internet Browsers:</strong> Such as Chrome, Firefox, Safari.</li>
            <li><strong>Multimedia Applications:</strong> Such as video editors (Adobe Premiere), image editors (Adobe Photoshop).</li>
            <li><strong>Games:</strong> Such as Minecraft, Valorant.</li>
        </ul>
    
    
        <h2>Interaction between Hardware and Software</h2>
        <p>The operation of a computer depends on the continuous interaction between hardware and software. The hardware provides the necessary physical foundation to execute operations, while the software provides the instructions and interface to perform specific tasks. Without hardware, software cannot run; without software, hardware cannot perform useful tasks.</p>
        <p>This synergy is what makes computers powerful and versatile devices, capable of performing a wide range of functions, from simple calculations to complex graphical and scientific operations.</p>
        <p><strong>Example of Interaction:</strong> When you open an internet browser (software) to access a web page, the CPU processes the instructions, the RAM temporarily stores the page's data, the graphics card renders the visual content, and the monitor displays the page for you.</p>
        <p><strong>Update and Maintenance:</strong> Both hardware and software can be updated and maintained to improve the system's performance and security. Software updates may include new features and bug fixes, while hardware updates may include adding more RAM, replacing an HDD with an SSD, or installing a new GPU.</p>
    

        <h2>Technology for Seniors</h2>
        <p>Knowing this, there are ways to facilitate the use of technology for seniors through tools that simplify the use of devices, understanding their difficulties and limited capabilities.</p>
        <h3>Examples of Devices Suitable for Seniors:</h3>
        <ul>
            <li><strong>Simple Phones:</strong> Models like the Doro PhoneEasy, which have large buttons and basic functions.</li>
            <li><strong>Adapted Tablets:</strong> Devices like the Grandpad, designed specifically for seniors, with simple interfaces and safety features.</li>
            <li><strong>Wearable Devices:</strong> Smartwatches like the Apple Watch with health monitoring and fall detection functionalities.</li>
            <li><strong>Computers with Accessibility Software:</strong> Computers equipped with operating systems that include accessibility options, such as Windows with its high-contrast mode and narrator.</li>
        </ul>
    

    
        <h2>Conclusion</h2>
        <p>When adapted and used correctly, hardware and software technology can have a significant positive impact on the lives of seniors. Facilitating communication, monitoring health, providing entertainment, and stimulating cognitive functions are just some of the ways in which adapted hardware and software can benefit this population. Addressing accessibility, training, and security challenges is essential to ensure that seniors can make the most of modern technology.</p>
    


    </div>
  `,
    "programming-logic": `
      <div class="text">
      <h1>Introduction</h1>
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
    "digital-security": `
      <div class="text">
      <h1>Introduction</h1>
      <p>Over the years, the internet has become an essential part of our lives. With it, we have made unprecedented strides in many areas, including the capacity for information, which has expanded in a way never seen before. Now, with just a single mobile device, we can research practically any subject. However, we don't just take information from the internet; we also upload personal and important information to it. Because of this, security in the digital environment is extremely important to understand.</p><br>
      <p>Basically, digital security is the practices and technologies employed to protect information and data from theft, unauthorized access and damage. In the same way that we lock our homes and cars, we also need to “lock” our digital information. Digital security uses antivirus, firewalls, passwords and various other methods to keep our data “locked down” to the outside world.</p><br>
      <h2>How It Works</h2>
      <p>Just as we invented wallets, alarms, and locks to keep our possessions safe, we have also developed ways to ensure that our information and data, which have become the most precious assets of the modern age, are protected. Various methods have been devised to accomplish this, including:</p>
      <p>Passwords and Authentication: It may seem obvious, but it's always worth emphasizing. Sometimes simple measures can make a big difference in keeping your assets safe. Just as you choose the best locks for your house, choosing a strong password will make your information more difficult for third parties to obtain. Always make your password as difficult to guess as possible. Additionally, using more than one form of authentication will help keep your data secure.</p><br>
      Antivirus and Firewalls: There are various types of malware and viruses spread across the internet, and keeping yourself protected from these is crucial. Always keep reliable antivirus software up to date on your computer. Firewalls act like “walls” that limit and control information traffic from your device to the internet.<br>
      Updating Software: Anything made by humans has its flaws, and software and operating systems are no different. Constant updates serve to make them as secure as possible. Therefore, always update the software and operating systems on your devices.<br><br>
      Phishing: Often, knowing how scammers operate can help you avoid becoming a victim. Phishing is a technique used to steal your passwords and personal information. To carry out these scams, fraudsters send emails or messages posing as banks or similar institutions. Always be on the lookout for suspicious links in your email, and if in doubt, contact your bank manager.
      The Most Common Attacks
      Knowing what the most common attacks look like can make the difference between knowing how to react or not. Here is a brief explanation of four of the most common attacks in the virtual environment:<br>
      Malware: This is any software designed to exploit, damage, or disable computers. Viruses are an example of this type of attack. The aim of this malicious software is to steal personal information, spy on users, or even take control of the system.<br><br>
      DDoS (Distributed Denial of Service) Attacks: By directing a large amount of traffic to an online service or website, it makes that site or service unavailable to users. It is often used to bring down large websites.
      Social Engineering Attacks: Attackers manipulate people into handing over confidential information. This can include creating situations that seem legitimate but are traps to obtain sensitive data.<br><br>
      Phishing: This is one of the most common attacks, aiming to steal personal data such as passwords and credit card numbers. Criminals pose as trustworthy entities and try to steal information via email. These emails often contain links to fake websites that collect this information.<br><br>
      <h2>How to Respond to an Attack</h2><br><br>
      In the face of a cyber attack, it's important to stay calm and follow a few steps to minimize the damage. Here are the best ways to respond during an attack:<br>
      Phishing:
      Don't click on suspicious links: Avoid clicking on any link in an email or message unless you are sure that the contact is safe.<br>
      Verify authenticity: Check that the email is actually from the institution it purports to be from.<br>
      Malware:
      Disconnect from the internet: To prevent the spread of malware, disconnect the infected device from the internet.
      Use antivirus software: Run a full scan with up-to-date antivirus software to detect and remove malware.<br>
      DDoS Attacks:
      Notify your service provider: Inform your provider about the attack so they can help mitigate the malicious traffic.<br>
      Social Engineering:
      Don't disclose information: Never give out your information to strangers.
      Verify: Before giving money or information to anyone, always try to verify their identity.
      Educate yourself: Stay informed about common scam tactics.<br>
      Advantages<br>
      By implementing the tips above, your online life will be much safer, and you won't have to worry about a number of problems:<br>
      Privacy: By keeping your software, antivirus, and firewalls up to date and fully functional, your internet browsing will be much safer. This is essential for keeping your personal data and communications private.<br>
      Financial Security: The security measures discussed above will help you avoid falling victim to banking scams. Additionally, knowing that your transactions are being made securely will give you more confidence and reduce the fear of fraud.<br>
      Identity Theft Protection: Using strong passwords and authentication will make your social networks harder to hack, giving you peace of mind that your social life won't be invaded and your identity won't be violated.<br>
      Cyber Attacks: Knowing how to respond to a potential digital attack will make you more resilient, ensuring you know exactly what to do and how to act.<br>
      These are just a few examples of how much better your security and privacy will be if you adopt robust digital security measures.<br>
      Conclusion<br>
      Regardless of the advances we make and how beneficial they are for society in general, some individuals will always try to misuse these benefits. Therefore, it's always important to be aware of the world around you and realize how many areas of our lives the digital world has already taken over and how important it is to keep these areas safe.<br>
      Even if it's not perfect, it is already possible to keep a large part of our online life safe. Integrating digital security into our daily lives is inevitable, so doing it in the best possible way is essential to keeping our data and information secure.
      
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