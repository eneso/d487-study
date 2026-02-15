// Quiz data - all 200 questions from D487
const quizData = [
    // Lesson 1
    { lesson: 1, question: "What does SDLC stand for?", options: ["Secure Design Life Cycle", "Software Design Life Cycle", "Software Development Life Cycle", "System Development Control Lifecycle"], correct: 2 },
    { lesson: 1, question: "What does SDL stand for?", options: ["Security Development Life Cycle", "Software Deployment Lifecycle", "System Design Logic", "Secure Data Layer"], correct: 0 },
    { lesson: 1, question: "Software security entails:", options: ["Adding security after deployment", "Building security into software through an SDL in an SDLC", "Only running vulnerability scans", "Only encrypting databases"], correct: 1 },
    { lesson: 1, question: "Which are the three core elements of security?", options: ["Authentication, Authorization, Auditing", "Confidentiality, Integrity, Availability", "Privacy, Safety, Reliability", "Risk, Threat, Vulnerability"], correct: 1 },
    { lesson: 1, question: "Threat modeling and attack surface validation throughout the SDL primarily:", options: ["Replace testing", "Eliminate the need for requirements", "Alleviate security vulnerabilities", "Increase feature delivery speed"], correct: 2 },
    { lesson: 1, question: "Which SDLC phase creates a vision and next steps?", options: ["Planning", "Design", "Testing", "Deployment"], correct: 0 },
    { lesson: 1, question: "Which SDLC phase determines necessary software requirements?", options: ["Maintenance", "Requirement", "Implementation", "End of life"], correct: 1 },
    { lesson: 1, question: "Which SDLC phase prepares requirements for the technical design?", options: ["Design", "Deployment", "End of life", "Planning"], correct: 0 },
    { lesson: 1, question: "Which SDLC phase determines resources involved in the application from a known resource?", options: ["Implementation", "Testing", "Maintenance", "Requirements"], correct: 0 },
    { lesson: 1, question: "Which SDLC phase verifies functions through a known environment?", options: ["Design", "Testing", "Deployment", "End of life"], correct: 1 },
    { lesson: 1, question: "Which SDLC phase pushes security out?", options: ["Planning", "Deployment", "Maintenance", "Requirements"], correct: 1 },
    { lesson: 1, question: "Which SDLC phase implements ongoing security monitoring?", options: ["Maintenance", "Implementation", "Planning", "Testing"], correct: 0 },
    { lesson: 1, question: "Which SDLC phase considers proper steps for removing software completely?", options: ["Design", "Requirement", "End of life", "Deployment"], correct: 2 },
    { lesson: 1, question: "Hardware refers to:", options: ["Operating systems only", "Physical components of a computer system", "Code libraries", "Threat models"], correct: 1 },
    { lesson: 1, question: "Software refers to:", options: ["Physical components", "Programs and operating systems", "Network cables", "Building layouts"], correct: 1 },
    { lesson: 1, question: "Secure code is best described as:", options: ["Code with no comments", "A principle design in coding referencing security best practices and safeguards", "Code that runs fast", "Code written only in C++"], correct: 1 },
    { lesson: 1, question: "SDLC has how many major phases (as listed in Lesson 1)?", options: ["5", "6", "8", "10"], correct: 2 },
    { lesson: 1, question: "Which is NOT one of the listed SDLC phases?", options: ["Planning", "Requirements", "Marketing", "Maintenance"], correct: 2 },
    { lesson: 1, question: "Integrating and evaluating software and hardware used by an organization helps:", options: ["Maximize organization's software and security", "Eliminate compliance needs", "Remove need for testing", "Guarantee zero vulnerabilities"], correct: 0 },
    { lesson: 1, question: "Threat modeling is:", options: ["A tool for encrypting data", "A structured process to protect against vulnerabilities", "A deployment script", "A maintenance schedule"], correct: 1 },

    // Lesson 2
    { lesson: 2, question: "Implementing an SDL program ensures security is:", options: ["Added only during maintenance", "Built into software design rather than an afterthought", "Only handled by legal", "Optional if agile is used"], correct: 1 },
    { lesson: 2, question: "Which is a popular SDL model/resource listed?", options: ["PCI DSS", "BSIMM", "ITIL", "COBIT"], correct: 1 },
    { lesson: 2, question: "BSIMM primarily:", options: ["Enforces coding standards automatically", "Studies real-world software security initiatives", "Replaces penetration testing", "Is a vulnerability scanner"], correct: 1 },
    { lesson: 2, question: "BSIMM helps you determine:", options: ["Only network topology", "Where software security stands and how to develop over time", "Only developer performance", "Only cloud costs"], correct: 1 },
    { lesson: 2, question: "How many best BSIMM practices are mentioned?", options: ["8", "10", "12", "15"], correct: 2 },
    { lesson: 2, question: "OWASP SAMM is best described as:", options: ["A firewall standard", "A flexible and prescriptive framework for building security into dev orgs", "A bug bounty platform", "A logging format"], correct: 1 },
    { lesson: 2, question: "NIST provides:", options: ["Only incident response teams", "Research, info, and tools for gov and corporate information security", "Payment processing rules", "Only password managers"], correct: 1 },
    { lesson: 2, question: "DHS has an established:", options: ["Software Assurance Program", "Browser Security Program", "Hardware Certification Program", "Encryption Export Program"], correct: 0 },
    { lesson: 2, question: "CVE is:", options: ["A model to score severity", "A list providing common names for publicly known vulnerabilities", "A testing method", "A secure coding language"], correct: 1 },
    { lesson: 2, question: "Whatever SDL you use must be mapped to your:", options: ["Marketing plan", "SDLC", "HR policies", "Sales funnel"], correct: 1 },
    { lesson: 2, question: "Security metrics help corporations:", options: ["Avoid all audits", "Decide on risk management requirements and security budgets", "Remove need for governance", "Disable testing"], correct: 1 },
    { lesson: 2, question: "Security metrics can show customers:", options: ["Proof of security", "Stock prices", "Legal privileges", "Source code"], correct: 0 },
    { lesson: 2, question: "Application security is the process of:", options: ["Deleting old code", "Developing, adding, and testing security features within applications", "Printing audit reports", "Buying new hardware"], correct: 1 },
    { lesson: 2, question: "Application security aims to prevent:", options: ["Customer support tickets", "Security vulnerabilities against threats", "New feature releases", "Backups"], correct: 1 },
    { lesson: 2, question: "Static analysis is performed:", options: ["Only after deployment", "Without executing programs", "Only on virtual machines", "Only by end users"], correct: 1 },
    { lesson: 2, question: "Dynamic analysis is performed:", options: ["Without code access", "When executing programs in real time", "Only on paper", "Only during planning"], correct: 1 },
    { lesson: 2, question: "Fuzz testing uses:", options: ["Valid expected data only", "Invalid/unexpected/random data", "Only encrypted data", "Only user interviews"], correct: 1 },
    { lesson: 2, question: "A metric model allows an org to determine:", options: ["Effectiveness of security controls", "Employee attendance", "Device battery life", "Marketing ROI"], correct: 0 },
    { lesson: 2, question: "A measurement model is:", options: ["A set of data security methods developers take to protect against vulnerabilities", "A penetration test plan", "A vulnerability name list", "A cloud contract"], correct: 0 },
    { lesson: 2, question: "Which is NOT listed as a popular SDL model/resource?", options: ["Cisco SDL", "Microsoft Trustworthy Computing SDL", "OWASP Code Review Guide", "ISO 9001"], correct: 3 },

    // Lesson 3
    { lesson: 3, question: "Waterfall divides development into:", options: ["Random phases", "Separate phases where one output feeds the next", "Only two phases", "Only testing loops"], correct: 1 },
    { lesson: 3, question: "A key advantage of Waterfall is:", options: ["Unlimited revision time", "Splitting deliveries into stages for easier control", "No documentation needed", "No requirements needed"], correct: 1 },
    { lesson: 3, question: "A key disadvantage of Waterfall is:", options: ["Too much revision", "No time for reflection or design revision", "Too many daily meetings", "No testing phase"], correct: 1 },
    { lesson: 3, question: "The V-model is:", options: ["Fully linear without validation", "Waterfall variation that turns back upward after coding", "A cloud deployment model", "A security scoring model"], correct: 1 },
    { lesson: 3, question: "Agile methodology:", options: ["Forbids collaboration", "Mixes traditional and new practices", "Requires waterfall only", "Eliminates planning"], correct: 1 },
    { lesson: 3, question: "Agile uses collaboration between:", options: ["Single-role teams", "Self-organizing and cross-functional teams", "Only managers", "Only security teams"], correct: 1 },
    { lesson: 3, question: "Agile has:", options: ["2 values and 4 principles", "4 values and 12 principles", "12 values and 4 principles", "8 values and 8 principles"], correct: 1 },
    { lesson: 3, question: "Agile allows customer satisfaction through:", options: ["Delayed releases", "Rapid, continuous delivery of useful software", "No deployments", "Only annual upgrades"], correct: 1 },
    { lesson: 3, question: "A disadvantage of Agile (per lesson) is difficulty:", options: ["Writing code", "Assessing effort at the beginning of SDL", "Testing in production", "Hiring developers"], correct: 1 },
    { lesson: 3, question: "Scrum framework allows a team to work:", options: ["Rigidly and separately", "Flexibly and holistically toward a common goal", "Only by email", "Only in planning"], correct: 1 },
    { lesson: 3, question: "Extreme programming (XP) intends to improve:", options: ["Hardware speed", "Software quality and responsiveness", "Legal compliance only", "Cloud costs only"], correct: 1 },
    { lesson: 3, question: "XP is a type of:", options: ["Waterfall", "Agile software development", "V-model only", "End-of-life planning"], correct: 1 },
    { lesson: 3, question: "Waterfall methodology is best described as:", options: ["Sequential, step-by-step process for requirements", "Randomized deployments", "Continuous delivery pipeline", "Threat modeling framework"], correct: 0 },
    { lesson: 3, question: "The V-model creates a \"V\" shape because:", options: ["Testing is removed", "Stage turns back upward after coding", "Requirements are skipped", "Maintenance precedes design"], correct: 1 },
    { lesson: 3, question: "Agile emphasizes:", options: ["Collaboration and adaptability", "No customer feedback", "Fixed scope always", "One-person teams"], correct: 0 },
    { lesson: 3, question: "Scrum is primarily a:", options: ["Security tool", "Product development strategy/framework", "Penetration test method", "Compliance regulation"], correct: 1 },
    { lesson: 3, question: "Which approach is explicitly said to be difficult for early SDL effort estimation?", options: ["Agile", "Waterfall", "V-model", "End-of-life"], correct: 0 },
    { lesson: 3, question: "Which is NOT listed as an SDLC approach in Lesson 3?", options: ["Scrum", "XP", "ITIL", "Waterfall"], correct: 2 },
    { lesson: 3, question: "Agile includes:", options: ["Four core values", "Ten core values", "Fourteen core values", "No values"], correct: 0 },
    { lesson: 3, question: "A waterfall outcome from one phase acts as:", options: ["Legal approval", "Input for the next phase", "Budget report", "Threat source"], correct: 1 },

    // Lesson 4
    { lesson: 4, question: "The first phase of the SDL is:", options: ["Architecture (A2)", "Security Assessment (A1)", "Ship (A5)", "Post-Release Support"], correct: 1 },
    { lesson: 4, question: "During A1, the team develops:", options: ["Final pen test report", "Initial outline for security milestones integrated into schedule", "Only marketing requirements", "Only code review scripts"], correct: 1 },
    { lesson: 4, question: "In A1, key stakeholders should:", options: ["Avoid discussing privacy", "Have common understanding of security and privacy requirements", "Skip security considerations", "Only focus on UI design"], correct: 1 },
    { lesson: 4, question: "Software security team should be included in SDLC kickoffs to ensure:", options: ["Security is built into the process", "Testing is removed", "Deployment is faster", "Compliance is optional"], correct: 0 },
    { lesson: 4, question: "A privacy impact assessment should include:", options: ["Only a logo", "Summary of legislation and required steps", "Only customer reviews", "Only developer names"], correct: 1 },
    { lesson: 4, question: "Creating success criteria for SDL phases helps:", options: ["Avoid documentation", "Identify what worked/didn't in postmortem", "Remove metrics", "Skip requirements"], correct: 1 },
    { lesson: 4, question: "Creating key deliverables for each SDL phase ensures:", options: ["Tangible documented outcomes", "No need to test", "No need to plan", "No need to trace requirements"], correct: 0 },
    { lesson: 4, question: "In the SDL model, it is helpful to outline:", options: ["Vacation schedules", "Metrics measured in every phase", "Only marketing KPIs", "Only sales targets"], correct: 1 },
    { lesson: 4, question: "Three focus areas in secure software requirements are gathering requirements, data classification, and:", options: ["Network routing", "Managing data protection requirements", "Pricing strategy", "Brand identity"], correct: 1 },
    { lesson: 4, question: "Purpose of gathering requirements before kickoff is to:", options: ["Increase rework", "Avoid common project failures by identifying requirements early", "Delay delivery", "Remove stakeholders"], correct: 1 },
    { lesson: 4, question: "Functional requirements describe:", options: ["Constraints not affecting core purpose", "What the system will do and its core purpose", "Only legal standards", "Only test scripts"], correct: 1 },
    { lesson: 4, question: "Non-functional requirements describe:", options: ["Core purpose", "Constraints/restrictions that do not impact core purpose", "Only features", "Only threat sources"], correct: 1 },
    { lesson: 4, question: "Operational requirements refer to:", options: ["System function based on environment it will operate in", "Only UI colors", "Only database schema", "Only encryption type"], correct: 0 },
    { lesson: 4, question: "Compliance requirement areas are legal, financial, and:", options: ["Weather", "Industry standards", "Social media", "Gamification"], correct: 1 },
    { lesson: 4, question: "Product risk profile helps determine:", options: ["Actual cost of product from different perspectives", "Only number of users", "Only number of servers", "Only code style"], correct: 0 },
    { lesson: 4, question: "Requirement traceability matrix is:", options: ["A table listing all security requirements", "A penetration test report", "A DFD", "A scanner output"], correct: 0 },
    { lesson: 4, question: "Threat profile is:", options: ["The attacker's name", "The environment product operates in and threats in that environment", "A list of patches", "A deployment checklist"], correct: 1 },
    { lesson: 4, question: "Privacy impact assessment evaluates:", options: ["PII privacy issues and impact rating", "CPU performance only", "Marketing effectiveness", "UI layout"], correct: 0 },
    { lesson: 4, question: "In A1, security milestones should be integrated into:", options: ["HR handbook", "Development project schedule", "Customer support scripts", "Sales pipeline"], correct: 1 },
    { lesson: 4, question: "Which is NOT a requirement type mentioned?", options: ["Functional", "Non-functional", "Operational", "Artistic"], correct: 3 },

    // Lesson 5
    { lesson: 5, question: "The second SDL phase is focused on:", options: ["End-of-life removal", "Bringing security considerations into the SDLC", "Only post-release response", "Only maintenance patches"], correct: 1 },
    { lesson: 5, question: "Software security policy defines:", options: ["Vacation rules", "What needs protection and how it will be protected", "Only coding language choice", "Only marketing scope"], correct: 1 },
    { lesson: 5, question: "Threat modeling is a process to:", options: ["Pinpoint threats and potential vulnerabilities to prioritize remediation", "Write UI requirements", "Remove testing", "Generate invoices"], correct: 0 },
    { lesson: 5, question: "Threat modeling is proactive because it:", options: ["Reacts only after attacks", "Prepares for threats before discovery", "Works only after deployment", "Eliminates risk"], correct: 1 },
    { lesson: 5, question: "The 5 steps of threat modeling begin with:", options: ["Identify security objectives", "Identify vulnerabilities", "Decompose it", "Identify threats"], correct: 0 },
    { lesson: 5, question: "Which is the correct order?", options: ["Survey → Decompose → Objectives → Threats → Vulnerabilities", "Objectives → Survey → Decompose → Threats → Vulnerabilities", "Decompose → Survey → Threats → Objectives → Vulnerabilities", "Objectives → Threats → Survey → Vulnerabilities → Decompose"], correct: 1 },
    { lesson: 5, question: "Data flow diagrams provide:", options: ["Legal proof", "Visual representation of a process flow", "Encryption keys", "Budget estimates"], correct: 1 },
    { lesson: 5, question: "STRIDE includes:", options: ["Spoofing", "Tampering", "Repudiation", "All of the above"], correct: 3 },
    { lesson: 5, question: "Denial of service means:", options: ["Denying access to valid users", "Changing stored data", "Reading files without permission", "Gaining admin access"], correct: 0 },
    { lesson: 5, question: "Elevation of privilege means:", options: ["Losing permissions", "Gaining unauthorized privileged access", "Writing documentation", "Encrypting traffic"], correct: 1 },
    { lesson: 5, question: "Spoofing means:", options: ["Legally logging in", "Illegally accessing/using another user's credentials", "Destroying a database", "Running scans"], correct: 1 },
    { lesson: 5, question: "Tampering means:", options: ["Maliciously changing persistent data", "Monitoring logs", "Deleting backups", "Creating DFDs"], correct: 0 },
    { lesson: 5, question: "Repudiation means:", options: ["System can always trace actions", "Illegal operations where system cannot trace them", "System is offline", "Strong authentication"], correct: 1 },
    { lesson: 5, question: "Information disclosure means:", options: ["Sharing a press release", "Reading a file you were not granted access to", "Denying access", "Elevating privileges"], correct: 1 },
    { lesson: 5, question: "PASTA stands for:", options: ["Process for Attack Simulation and Threat Analysis", "Password Analysis and Security Testing Approach", "Program Assessment Standard for Technology Audits", "Practical Agile Secure Threat Assessment"], correct: 0 },
    { lesson: 5, question: "DREAD includes:", options: ["Damage potential", "Reproducibility", "Exploitability", "All of the above"], correct: 3 },
    { lesson: 5, question: "Threat source is:", options: ["Entity carrying out the attack", "A patch", "A compliance rule", "A test script"], correct: 0 },
    { lesson: 5, question: "Threat vector is:", options: ["Path attacker can take to exploit a vulnerability", "A vulnerability database", "A security policy", "A code comment"], correct: 0 },
    { lesson: 5, question: "Trike is a framework for:", options: ["Security auditing from risk management perspective", "Cloud deployment", "Network scanning", "UI testing"], correct: 0 },
    { lesson: 5, question: "Which is NOT listed as a threat modeling type?", options: ["Application-centric", "Asset-centric", "Ticket-centric", "Both A and B are listed; C is not"], correct: 2 },

    // Lesson 6
    { lesson: 6, question: "A3 phase involves reviewing:", options: ["Only marketing policy", "Policies outside SDL policy", "Only code style rules", "Only cloud contracts"], correct: 1 },
    { lesson: 6, question: "Collaboration must occur between:", options: ["Software security group and centralized information security group", "Sales and marketing only", "Customers only", "No one"], correct: 0 },
    { lesson: 6, question: "Purpose of testing activities is to:", options: ["Validate security before release", "Replace requirements", "Remove code review", "Avoid environments"], correct: 0 },
    { lesson: 6, question: "Building security in is less costly than:", options: ["Writing code", "Fixing after deployment", "Planning", "Designing"], correct: 1 },
    { lesson: 6, question: "Test environment should:", options: ["Be totally different than production", "Mimic execution environment as closely as possible", "Only be paper-based", "Never use virtualization"], correct: 1 },
    { lesson: 6, question: "Security testing techniques are categorized by:", options: ["Red/Blue/Purple", "White/Gray/Black box", "Gold/Silver/Bronze", "Alpha/Beta/Gamma"], correct: 1 },
    { lesson: 6, question: "White box testing is:", options: ["External with no knowledge", "Internal with full knowledge", "Only usability testing", "Only in production"], correct: 1 },
    { lesson: 6, question: "Black box testing is:", options: ["Internal testing with full knowledge", "External perspective with no prior knowledge", "Code review", "Static analysis only"], correct: 1 },
    { lesson: 6, question: "Gray box testing:", options: ["Has partial knowledge and analyzes source code to design test cases", "Has no knowledge", "Is only for performance testing", "Is only for end-of-life"], correct: 0 },
    { lesson: 6, question: "Alpha testing is done by:", options: ["External users", "Developers themselves", "Legal counsel", "Customers only"], correct: 1 },
    { lesson: 6, question: "Beta testing is done by:", options: ["Developers only", "Those not familiar with the development", "Only automated tools", "Only management"], correct: 1 },
    { lesson: 6, question: "Security test cases help determine:", options: ["Marketing goals", "Security issues at the lowest level", "Salary bands", "UI color schemes"], correct: 1 },
    { lesson: 6, question: "Scanning involves:", options: ["Writing requirements", "Identifying deficiencies anywhere around the system", "Creating DFDs", "Creating policies"], correct: 1 },
    { lesson: 6, question: "Security testing is:", options: ["Static and one-time", "Ongoing", "Only done after ship", "Only done in planning"], correct: 1 },
    { lesson: 6, question: "Applications should be tested:", options: ["Only in lab", "Only in operational environment", "In lab and true operational environment", "Only on paper"], correct: 2 },
    { lesson: 6, question: "System test means:", options: ["Test only one function", "Test system and its interaction with other systems", "Only test UI", "Only test network"], correct: 1 },
    { lesson: 6, question: "Scripts are:", options: ["Random notes", "Detailed logical step instructions for person/tool", "Legal contracts", "User personas"], correct: 1 },
    { lesson: 6, question: "Secure testing scripts are:", options: ["Created specifically for the application being tested", "Only for marketing", "Only for payroll", "Only for end-of-life"], correct: 0 },
    { lesson: 6, question: "External resources are:", options: ["Resources from company org", "Temporarily hired to test/report findings", "Always developers", "Always customers"], correct: 1 },
    { lesson: 6, question: "Internal resources are:", options: ["Always outside consultants", "From the company's organization", "Only attackers", "Only auditors"], correct: 1 },

    // Lesson 7
    { lesson: 7, question: "A4 phase continues to focus on:", options: ["Removing software", "Security testing processes and analysis necessities", "Only marketing plans", "Only HR onboarding"], correct: 1 },
    { lesson: 7, question: "QA testing occurs:", options: ["Only during testing phase", "Throughout the entire SDLC", "Only after deployment", "Only in end-of-life"], correct: 1 },
    { lesson: 7, question: "Three test type categories are:", options: ["Unit, integration, system", "Benchmarks, scheduled, exploratory", "Static, dynamic, fuzz", "Alpha, beta, gamma"], correct: 0 },
    { lesson: 7, question: "Code review helps catch:", options: ["Bugs early to decrease fix cost", "Only design issues", "Only legal issues", "Only performance metrics"], correct: 0 },
    { lesson: 7, question: "Four basic techniques for code review include all EXCEPT:", options: ["Static analysis", "Manual code review", "Automated scanning", "Waterfall planning"], correct: 3 },
    { lesson: 7, question: "AppSec describes:", options: ["Finding, fixing, preventing vulnerabilities at application level", "Hiring only security engineers", "Marketing security", "End-of-life removal"], correct: 0 },
    { lesson: 7, question: "AppSec is difficult to scale for:", options: ["Small organizations", "Large organizations", "Individuals only", "No one"], correct: 1 },
    { lesson: 7, question: "Proxy scripts are used to:", options: ["Communicate a web security bug/control effectively", "Replace encryption", "Replace policies", "Replace requirements"], correct: 0 },
    { lesson: 7, question: "Passive scanner:", options: ["Modifies HTTPS inputs", "Silently analyzes HTTP requests/responses passing through tool", "Deletes logs", "Only runs in planning"], correct: 1 },
    { lesson: 7, question: "Active scanner:", options: ["Silently observes only", "Modifies HTTPS inputs and analyzes responses", "Writes code automatically", "Creates DFDs"], correct: 1 },
    { lesson: 7, question: "Spider does what?", options: ["Identifies inputs and supplies them to scanning components", "Encrypts traffic", "Scores CVSS", "Writes policies"], correct: 0 },
    { lesson: 7, question: "SonarQube is primarily for:", options: ["Network scanning", "Static code analysis across many languages", "Cloud billing", "UX design"], correct: 1 },
    { lesson: 7, question: "AST is:", options: ["A network cable", "Basis for software metrics/issues generated later", "A vulnerability database", "A pen test phase"], correct: 1 },
    { lesson: 7, question: "Control flow analysis is used to:", options: ["Trace data input to output", "Step through logical conditions", "Fuzz endpoints", "Scan ports"], correct: 1 },
    { lesson: 7, question: "Data flow analysis is used to:", options: ["Step through conditions only", "Trace data from input points to output points", "Run alpha tests", "Manage HR"], correct: 1 },
    { lesson: 7, question: "Scheduled tests are:", options: ["Optional", "Mandatory requirements testing to validate security", "Only exploratory", "Only benchmarks"], correct: 1 },
    { lesson: 7, question: "Exploratory tests are done by:", options: ["Development tester continually assessing quality", "Only customers", "Only legal", "Only external attackers"], correct: 0 },
    { lesson: 7, question: "Benchmarks are tests used to compare:", options: ["Estimates to actual results", "Threat sources to vectors", "UI colors to fonts", "Laws to budgets"], correct: 0 },
    { lesson: 7, question: "Pull request is:", options: ["Request to merge code into another branch", "A pen test report", "A scan type", "A DFD"], correct: 0 },
    { lesson: 7, question: "ZAP stands for:", options: ["Zero Attack Policy", "Zed Attack Proxy", "Zone Access Procedure", "Zonal Analysis Platform"], correct: 1 },

    // Lesson 8
    { lesson: 8, question: "Ship (A5) phase occurs when:", options: ["Security team performs final analysis/security review", "Requirements are written", "DFDs are drawn", "End-of-life begins"], correct: 0 },
    { lesson: 8, question: "Policy compliance analysis verifies:", options: ["Product meets quality standards before release", "Product is profitable", "Developers are trained", "Cloud is free"], correct: 0 },
    { lesson: 8, question: "Vulnerability scanning tools attempt to identify:", options: ["Weakness in applications", "UI alignment issues", "Salary issues", "Branding issues"], correct: 0 },
    { lesson: 8, question: "Penetration testing simulates:", options: ["Customer usage", "Hacker actions to identify vulnerabilities", "Legal reviews", "Documentation writing"], correct: 1 },
    { lesson: 8, question: "Pen test phases listed are:", options: ["Plan, build, test, ship", "Assess, identify, evaluate and plan, deploy", "Scan, patch, re-scan, close", "Discover, exploit, monetize, exit"], correct: 1 },
    { lesson: 8, question: "Creating a networking laboratory helps you test:", options: ["Within controlled environment without written authorization/permissions", "Only in production", "Only on paper", "Only with customer data"], correct: 0 },
    { lesson: 8, question: "Nmap is used for:", options: ["Network scanning and security auditing", "Code review", "Password hashing", "UI testing"], correct: 0 },
    { lesson: 8, question: "Authenticated scans:", options: ["Require software to log onto system", "Never use credentials", "Only run externally", "Only run at end-of-life"], correct: 0 },
    { lesson: 8, question: "External scans target issues found:", options: ["Inside firewall only", "Outside the firewall", "Only in source code", "Only in documentation"], correct: 1 },
    { lesson: 8, question: "Internal scans identify issues that could be exploited:", options: ["From inside the network", "Only outside network", "Only by legal", "Only by marketing"], correct: 0 },
    { lesson: 8, question: "Intrusive target search means scans:", options: ["Never exploit", "Exploit a vulnerability when identified", "Only observe logs", "Only list ports"], correct: 1 },
    { lesson: 8, question: "A \"range\" is:", options: ["A budgeting spreadsheet", "Networking lab to conduct vulnerability analysis testing", "A code style guide", "A cloud region only"], correct: 1 },
    { lesson: 8, question: "Target machine is:", options: ["Virtual space to practice identifying attack surfaces", "HR system", "Legal database", "Marketing site"], correct: 0 },
    { lesson: 8, question: "Virtualization is:", options: ["Technology to create software services", "Physical cabling method", "Threat model type", "Policy standard"], correct: 0 },
    { lesson: 8, question: "Vulnerability scan means:", options: ["Explore apps/databases to identify weaknesses", "Merge code branches", "Train developers", "Create compliance reports"], correct: 0 },
    { lesson: 8, question: "Vulnerability sites provide:", options: ["Latest known vulnerabilities information", "Only design templates", "Only payroll forms", "Only user stories"], correct: 0 },
    { lesson: 8, question: "Open-source software license compliance refers to:", options: ["Regulations regarding licensing of in-house products", "A scan type", "A threat model", "A pen test phase"], correct: 0 },
    { lesson: 8, question: "Open-source software security is:", options: ["Identifying software security within in-house developed software", "Only buying proprietary tools", "Only marketing", "Only end-of-life"], correct: 0 },
    { lesson: 8, question: "SQL injection is:", options: ["Code injection that might destroy software", "A port scan technique", "A DFD type", "A compliance framework"], correct: 0 },
    { lesson: 8, question: "Active and passive analysis techniques are useful during:", options: ["Vulnerability testing", "Branding review", "Sprint planning only", "End-of-life only"], correct: 0 },

    // Lesson 9
    { lesson: 9, question: "Having software security experts report to engineering enables:", options: ["Weaker relationship", "Stronger relationship during secure development", "No difference", "Only legal alignment"], correct: 1 },
    { lesson: 9, question: "Quality security is built:", options: ["Only in one SDLC phase", "Throughout the entire engineering process", "Only after release", "Only in planning"], correct: 1 },
    { lesson: 9, question: "Not every company can include all PRSAs, so you should:", options: ["Ignore security", "Choose highest value and optimize available tools", "Only do pen tests", "Only do code reviews"], correct: 1 },
    { lesson: 9, question: "CVSS is used to:", options: ["Assess severity of a vulnerability", "Draw DFDs", "Run port scans", "Manage budgets"], correct: 0 },
    { lesson: 9, question: "Post-release privacy issues may need additional:", options: ["Marketing", "Development, QA, and/or security resources", "Office space", "Vacation time"], correct: 1 },
    { lesson: 9, question: "Third-party reviews may be necessary when completing:", options: ["Post-release review", "Planning", "Requirements writing", "End-of-life only"], correct: 0 },
    { lesson: 9, question: "During M&A, software security may go under:", options: ["Architectural review", "UI review only", "Payroll review", "Logo redesign"], correct: 0 },
    { lesson: 9, question: "Requirements for post-release certifications should be included:", options: ["After deployment only", "Before deployment in security/privacy requirements", "Only in marketing", "Only in HR policy"], correct: 1 },
    { lesson: 9, question: "PSIRT is:", options: ["Team that receives/investigates/reports vulnerabilities", "A scan tool", "A threat model", "A coding language"], correct: 0 },
    { lesson: 9, question: "Post-Release Support phase is when orgs prepare for:", options: ["New hires", "Vulnerabilities after product release", "UI redesign", "Budget cuts"], correct: 1 },
    { lesson: 9, question: "Post-Release PSIRT Response involves:", options: ["Internal-only discoveries", "External discovery of post-release vulnerabilities", "Writing requirements", "Decomposing apps"], correct: 1 },
    { lesson: 9, question: "Legacy code is:", options: ["Old code no longer supported", "New code in main branch", "Code with tests", "Code under active development"], correct: 0 },
    { lesson: 9, question: "M&A means:", options: ["Metrics and Analysis", "Merger and acquisition", "Maintenance and Availability", "Model and Architecture"], correct: 1 },
    { lesson: 9, question: "Software Security Champion (SSC) is an expert on:", options: ["Promoting security awareness and best practices", "Writing sales copy", "Running payroll", "Managing cloud bills"], correct: 0 },
    { lesson: 9, question: "Software Security Evangelist (SSE) is an expert to promote:", options: ["Awareness of products to wider community", "Only internal HR policies", "Only compliance fines", "Only backups"], correct: 0 },
    { lesson: 9, question: "Strong security relationship is supported when security reports to:", options: ["Engineering organization", "Customers", "Vendors", "Competitors"], correct: 0 },
    { lesson: 9, question: "Security should be built:", options: ["Only at ship", "Throughout engineering process", "Only post-release", "Only in design"], correct: 1 },
    { lesson: 9, question: "Post-release privacy issues could require additional:", options: ["QA", "Security", "Development", "All of the above"], correct: 3 },
    { lesson: 9, question: "PSIRT deals with:", options: ["Marketing incidents", "Software product security incidents and vulnerabilities", "UI bugs only", "Feature requests"], correct: 1 },
    { lesson: 9, question: "Which term refers to consolidation of companies?", options: ["M&A", "CVSS", "CVE", "STRIDE"], correct: 0 },

    // Lesson 10
    { lesson: 10, question: "Software is most likely deployed in:", options: ["Only Waterfall", "Agile, DevOps, Digital Enterprise, or combinations", "Only end-of-life", "Only planning"], correct: 1 },
    { lesson: 10, question: "Agile development is designed to:", options: ["Deliver value faster", "Eliminate requirements", "Stop deployments", "Avoid collaboration"], correct: 0 },
    { lesson: 10, question: "DevOps teams work together for:", options: ["Ongoing operations, enhancements, defect removal, optimization", "Only marketing", "Only requirements writing", "Only end-of-life"], correct: 0 },
    { lesson: 10, question: "Cloud technology has caused a rethinking of how apps are:", options: ["Built, deployed, and used", "Sold only", "Named only", "Ignored"], correct: 0 },
    { lesson: 10, question: "Moving to public cloud services has increased:", options: ["Security challenges", "Printer usage", "HR workload", "Coffee sales"], correct: 0 },
    { lesson: 10, question: "Digital enterprises use technology to:", options: ["Enable and improve business activities", "Avoid business activities", "Remove all risk", "Ban software"], correct: 0 },
    { lesson: 10, question: "OpenSAMM business functions include governance, construction, verification, and:", options: ["Marketing", "Deployment", "Payroll", "Recruiting"], correct: 1 },
    { lesson: 10, question: "BSIMM is a study of:", options: ["Only CVEs", "Existing software security initiatives in larger development", "Only networks", "Only regulations"], correct: 1 },
    { lesson: 10, question: "The four BSIMM category types are governance, intelligence, SSDL touchpoints, and:", options: ["Sales", "Deployment", "Finance", "Branding"], correct: 1 },
    { lesson: 10, question: "Threats can be classified using STRIDE. Which is included?", options: ["Spoofing", "Tampering", "Elevation of privilege", "All of the above"], correct: 3 },
    { lesson: 10, question: "In OpenSAMM, \"verification\" is centered around:", options: ["Managing overall activities", "Checking and testing artifacts produced through development", "Releasing software", "Capturing security info only"], correct: 1 },
    { lesson: 10, question: "In OpenSAMM, \"governance\" is centered around:", options: ["How org manages overall software development activities", "How org releases software", "Only code review", "Only environment hardening"], correct: 0 },
    { lesson: 10, question: "\"Construction\" in OpenSAMM is centered around:", options: ["How org defines goals and creates software within projects", "Only incident response", "Only vulnerability disclosure", "Only HR"], correct: 0 },
    { lesson: 10, question: "\"Deployment\" in OpenSAMM is centered around:", options: ["How org releases software", "Only threat modeling", "Only coding", "Only design review"], correct: 0 },
    { lesson: 10, question: "Code review (CR) is a practice of:", options: ["Verification", "Deployment", "Governance", "Construction"], correct: 0 },
    { lesson: 10, question: "Design review (DR) is a practice of:", options: ["Verification", "Construction", "Governance", "Deployment"], correct: 0 },
    { lesson: 10, question: "Education and guidance (EG) is a practice of:", options: ["Governance", "Verification", "Deployment", "Construction"], correct: 0 },
    { lesson: 10, question: "Environment hardening (EH) is a practice of:", options: ["Deployment", "Governance", "Verification", "Construction"], correct: 0 },
    { lesson: 10, question: "Vulnerability management (VM) is a practice of:", options: ["Deployment", "Construction", "Verification", "Governance"], correct: 0 },
    { lesson: 10, question: "Threat assessment (TA) is a practice of:", options: ["Construction", "Governance", "Verification", "Deployment"], correct: 0 }
];

// State management
let currentQuestionIndex = 0;
let currentLesson = 'all';
let answers = {};
let submitted = false;
let evaluated = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    setupEventListeners();
    updateStats();
});

function setupEventListeners() {
    // Lesson buttons
    document.querySelectorAll('.lesson-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentLesson = e.target.dataset.lesson;
            currentQuestionIndex = 0;
            submitted = false;
            displayQuestion();
        });
    });

    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        const filtered = getFilteredQuestions();
        if (currentQuestionIndex < filtered.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    });

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all answers?')) {
            answers = {};
            evaluated = {};
            submitted = false;
            currentQuestionIndex = 0;
            currentLesson = 'all';
            document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('[data-lesson="all"]').classList.add('active');
            updateStats();
            displayQuestion();
        }
    });

    // Submit button
    document.getElementById('submitBtn').addEventListener('click', showResults);

    // Evaluate button
    document.getElementById('evaluateBtn').addEventListener('click', evaluateQuestion);
}

function getFilteredQuestions() {
    if (currentLesson === 'all') {
        return quizData;
    }
    return quizData.filter(q => q.lesson === parseInt(currentLesson));
}

function displayQuestion() {
    const filtered = getFilteredQuestions();
    if (filtered.length === 0) return;

    const question = filtered[currentQuestionIndex];
    const container = document.getElementById('quizContainer');
    
    const questionNum = quizData.indexOf(question) + 1;
    const lessonLabel = currentLesson === 'all' ? `(Lesson ${question.lesson})` : '';

    let html = `
        <div class="question-block active">
            <div class="question-number">Question ${questionNum} ${lessonLabel}</div>
            <div class="question-text">${question.question}</div>
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const isSelected = answers[questionNum - 1] === index;
        const isCorrect = index === question.correct;
        const isEvaluated = evaluated[questionNum - 1];
        
        let classes = 'option';
        if (isSelected) classes += ' selected';
        
        // Show feedback ONLY when explicitly evaluated
        if (isEvaluated) {
            if (isSelected && isCorrect) classes += ' correct';
            if (isSelected && !isCorrect) classes += ' incorrect';
            if (!isSelected && isCorrect) classes += ' correct';
        }

        html += `
            <label class="${classes}">
                <input type="radio" name="answer" value="${index}" ${isSelected ? 'checked' : ''}>
                <label>${option}</label>
            </label>
        `;
    });

    // Show feedback ONLY when explicitly evaluated
    if (evaluated[questionNum - 1]) {
        const isCorrect = answers[questionNum - 1] === question.correct;
        html += `
            <div class="feedback ${isCorrect ? 'correct' : 'incorrect'} show">
                ${isCorrect ? '✓ Correct!' : '✗ Incorrect. '}
                The correct answer is: <strong>${question.options[question.correct]}</strong>
            </div>
        `;
    }

    html += `</div></div>`;
    container.innerHTML = html;

    // Add event listeners for options
    document.querySelectorAll('.option input').forEach(input => {
        input.addEventListener('change', (e) => {
            answers[questionNum - 1] = parseInt(e.target.value);
            // Re-evaluate if already evaluated to update feedback
            if (evaluated[questionNum - 1]) {
                displayQuestion();
            }
            updateStats();
        });
    });

    // Update navigation and evaluate button
    updateNavigation();
    updateEvaluateButton();
    document.getElementById('currentQuestion').textContent = `Question ${currentQuestionIndex + 1} of ${filtered.length}`;
}

function updateNavigation() {
    const filtered = getFilteredQuestions();
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === filtered.length - 1;
}

function updateEvaluateButton() {
    const filtered = getFilteredQuestions();
    const question = filtered[currentQuestionIndex];
    const questionNum = quizData.indexOf(question) + 1;
    
    const evaluateBtn = document.getElementById('evaluateBtn');
    const isEvaluated = evaluated[questionNum - 1];
    
    if (isEvaluated) {
        evaluateBtn.textContent = 'Evaluated ✓';
        evaluateBtn.classList.add('answered');
        evaluateBtn.disabled = true;
    } else {
        evaluateBtn.textContent = 'Evaluate';
        evaluateBtn.classList.remove('answered');
        evaluateBtn.disabled = false;
    }
}

function evaluateQuestion() {
    const filtered = getFilteredQuestions();
    const question = filtered[currentQuestionIndex];
    const questionNum = quizData.indexOf(question) + 1;
    
    // Mark as evaluated
    evaluated[questionNum - 1] = true;
    displayQuestion();
    updateStats();
}

function updateStats() {
    const totalAnswered = Object.keys(answers).length;
    document.getElementById('answered').textContent = totalAnswered;
    document.getElementById('total').textContent = quizData.length;
    
    let correct = 0;
    quizData.forEach((q, index) => {
        if (answers[index] === q.correct) correct++;
    });
    
    const percentage = quizData.length > 0 ? Math.round((correct / quizData.length) * 100) : 0;
    document.getElementById('score').textContent = percentage;
}

function showResults() {
    submitted = true;
    displayQuestion();
    
    let correct = 0;
    quizData.forEach((q, index) => {
        if (answers[index] === q.correct) correct++;
    });
    
    const percentage = Math.round((correct / quizData.length) * 100);
    const resultMessage = percentage >= 80 ? 'Great job!' : percentage >= 60 ? 'Good effort!' : 'Keep studying!';
    
    alert(`Results:\n${correct}/${quizData.length} correct (${percentage}%)\n\n${resultMessage}`);
}
