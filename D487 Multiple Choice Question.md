# D487 Multiple Choice Questions

## Table of Contents
- [Lesson 1: Why build security in (SDLC + SDL basics)](#lesson-1)
- [Lesson 2: SDL programs and maturity models](#lesson-2)
- [Lesson 3: SDLC approaches](#lesson-3)
- [Lesson 4: SDL Phase A1: Security Assessment + Requirements](#lesson-4)
- [Lesson 5: SDL Phase A2: Architecture + Threat Modeling](#lesson-5)
- [Lesson 6: SDL Phase A3: Design & Development testing foundations](#lesson-6)
- [Lesson 7: SDL Phase A4: Code review + AppSec tooling](#lesson-7)
- [Lesson 8: SDL Phase A5: Ship](#lesson-8)
- [Lesson 9: Post-release support + PSIRT + CVSS + M&A](#lesson-9)
- [Lesson 10: Modern environments + OpenSAMM + BSIMM categories + STRIDE recap](#lesson-10)
- [Answer Key](#answer-key)

---

## Lesson 1 — Why build security in (SDLC + SDL basics) {#lesson-1}

**Question 1:** What does SDLC stand for?
- A. Secure Design Life Cycle
- B. Software Design Life Cycle
- C. Software Development Life Cycle
- D. System Development Control Lifecycle

**Question 2:** What does SDL stand for?
- A. Security Development Life Cycle
- B. Software Deployment Lifecycle
- C. System Design Logic
- D. Secure Data Layer

**Question 3:** Software security entails:
- A. Adding security after deployment
- B. Building security into software through an SDL in an SDLC
- C. Only running vulnerability scans
- D. Only encrypting databases

**Question 4:** Which are the three core elements of security?
- A. Authentication, Authorization, Auditing
- B. Confidentiality, Integrity, Availability
- C. Privacy, Safety, Reliability
- D. Risk, Threat, Vulnerability

**Question 5:** Threat modeling and attack surface validation throughout the SDL primarily:
- A. Replace testing
- B. Eliminate the need for requirements
- C. Alleviate security vulnerabilities
- D. Increase feature delivery speed

**Question 6:** Which SDLC phase creates a vision and next steps?
- A. Planning
- B. Design
- C. Testing
- D. Deployment

**Question 7:** Which SDLC phase determines necessary software requirements?
- A. Maintenance
- B. Requirement
- C. Implementation
- D. End of life

**Question 8:** Which SDLC phase prepares requirements for the technical design?
- A. Design
- B. Deployment
- C. End of life
- D. Planning

**Question 9:** Which SDLC phase determines resources involved in the application from a known resource?
- A. Implementation
- B. Testing
- C. Maintenance
- D. Requirements

**Question 10:** Which SDLC phase verifies functions through a known environment?
- A. Design
- B. Testing
- C. Deployment
- D. End of life

**Question 11:** Which SDLC phase pushes security out?
- A. Planning
- B. Deployment
- C. Maintenance
- D. Requirements

**Question 12:** Which SDLC phase implements ongoing security monitoring?
- A. Maintenance
- B. Implementation
- C. Planning
- D. Testing

**Question 13:** Which SDLC phase considers proper steps for removing software completely?
- A. Design
- B. Requirement
- C. End of life
- D. Deployment

**Question 14:** Hardware refers to:
- A. Operating systems only
- B. Physical components of a computer system
- C. Code libraries
- D. Threat models

**Question 15:** Software refers to:
- A. Physical components
- B. Programs and operating systems
- C. Network cables
- D. Building layouts

**Question 16:** Secure code is best described as:
- A. Code with no comments
- B. A principle design in coding referencing security best practices and safeguards
- C. Code that runs fast
- D. Code written only in C++

**Question 17:** SDLC has how many major phases (as listed in Lesson 1)?
- A. 5
- B. 6
- C. 8
- D. 10

**Question 18:** Which is NOT one of the listed SDLC phases?
- A. Planning
- B. Requirements
- C. Marketing
- D. Maintenance

**Question 19:** Integrating and evaluating software and hardware used by an organization helps:
- A. Maximize organization's software and security
- B. Eliminate compliance needs
- C. Remove need for testing
- D. Guarantee zero vulnerabilities

**Question 20:** Threat modeling is:
- A. A tool for encrypting data
- B. A structured process to protect against vulnerabilities
- C. A deployment script
- D. A maintenance schedule

---

## Lesson 2 — SDL programs and maturity models (BSIMM, OWASP, NIST, CVE) {#lesson-2}

**Question 21:** Implementing an SDL program ensures security is:
- A. Added only during maintenance
- B. Built into software design rather than an afterthought
- C. Only handled by legal
- D. Optional if agile is used

**Question 22:** Which is a popular SDL model/resource listed?
- A. PCI DSS
- B. BSIMM
- C. ITIL
- D. COBIT

**Question 23:** BSIMM primarily:
- A. Enforces coding standards automatically
- B. Studies real-world software security initiatives
- C. Replaces penetration testing
- D. Is a vulnerability scanner

**Question 24:** BSIMM helps you determine:
- A. Only network topology
- B. Where software security stands and how to develop over time
- C. Only developer performance
- D. Only cloud costs

**Question 25:** How many best BSIMM practices are mentioned?
- A. 8
- B. 10
- C. 12
- D. 15

**Question 26:** OWASP SAMM is best described as:
- A. A firewall standard
- B. A flexible and prescriptive framework for building security into dev orgs
- C. A bug bounty platform
- D. A logging format

**Question 27:** NIST provides:
- A. Only incident response teams
- B. Research, info, and tools for gov and corporate information security
- C. Payment processing rules
- D. Only password managers

**Question 28:** DHS has an established:
- A. Software Assurance Program
- B. Browser Security Program
- C. Hardware Certification Program
- D. Encryption Export Program

**Question 29:** CVE is:
- A. A model to score severity
- B. A list providing common names for publicly known vulnerabilities
- C. A testing method
- D. A secure coding language

**Question 30:** Whatever SDL you use must be mapped to your:
- A. Marketing plan
- B. SDLC
- C. HR policies
- D. Sales funnel

**Question 31:** Security metrics help corporations:
- A. Avoid all audits
- B. Decide on risk management requirements and security budgets
- C. Remove need for governance
- D. Disable testing

**Question 32:** Security metrics can show customers:
- A. Proof of security
- B. Stock prices
- C. Legal privileges
- D. Source code

**Question 33:** Application security is the process of:
- A. Deleting old code
- B. Developing, adding, and testing security features within applications
- C. Printing audit reports
- D. Buying new hardware

**Question 34:** Application security aims to prevent:
- A. Customer support tickets
- B. Security vulnerabilities against threats
- C. New feature releases
- D. Backups

**Question 35:** Static analysis is performed:
- A. Only after deployment
- B. Without executing programs
- C. Only on virtual machines
- D. Only by end users

**Question 36:** Dynamic analysis is performed:
- A. Without code access
- B. When executing programs in real time
- C. Only on paper
- D. Only during planning

**Question 37:** Fuzz testing uses:
- A. Valid expected data only
- B. Invalid/unexpected/random data
- C. Only encrypted data
- D. Only user interviews

**Question 38:** A metric model allows an org to determine:
- A. Effectiveness of security controls
- B. Employee attendance
- C. Device battery life
- D. Marketing ROI

**Question 39:** A measurement model is:
- A. A set of data security methods developers take to protect against vulnerabilities
- B. A penetration test plan
- C. A vulnerability name list
- D. A cloud contract

**Question 40:** Which is NOT listed as a popular SDL model/resource?
- A. Cisco SDL
- B. Microsoft Trustworthy Computing SDL
- C. OWASP Code Review Guide
- D. ISO 9001

---

## Lesson 3 — SDLC approaches (Waterfall, V-model, Agile, Scrum, XP) {#lesson-3}

**Question 41:** Waterfall divides development into:
- A. Random phases
- B. Separate phases where one output feeds the next
- C. Only two phases
- D. Only testing loops

**Question 42:** A key advantage of Waterfall is:
- A. Unlimited revision time
- B. Splitting deliveries into stages for easier control
- C. No documentation needed
- D. No requirements needed

**Question 43:** A key disadvantage of Waterfall is:
- A. Too much revision
- B. No time for reflection or design revision
- C. Too many daily meetings
- D. No testing phase

**Question 44:** The V-model is:
- A. Fully linear without validation
- B. Waterfall variation that turns back upward after coding
- C. A cloud deployment model
- D. A security scoring model

**Question 45:** Agile methodology:
- A. Forbids collaboration
- B. Mixes traditional and new practices
- C. Requires waterfall only
- D. Eliminates planning

**Question 46:** Agile uses collaboration between:
- A. Single-role teams
- B. Self-organizing and cross-functional teams
- C. Only managers
- D. Only security teams

**Question 47:** Agile has:
- A. 2 values and 4 principles
- B. 4 values and 12 principles
- C. 12 values and 4 principles
- D. 8 values and 8 principles

**Question 48:** Agile allows customer satisfaction through:
- A. Delayed releases
- B. Rapid, continuous delivery of useful software
- C. No deployments
- D. Only annual upgrades

**Question 49:** A disadvantage of Agile (per lesson) is difficulty:
- A. Writing code
- B. Assessing effort at the beginning of SDL
- C. Testing in production
- D. Hiring developers

**Question 50:** Scrum framework allows a team to work:
- A. Rigidly and separately
- B. Flexibly and holistically toward a common goal
- C. Only by email
- D. Only in planning

**Question 51:** Extreme programming (XP) intends to improve:
- A. Hardware speed
- B. Software quality and responsiveness
- C. Legal compliance only
- D. Cloud costs only

**Question 52:** XP is a type of:
- A. Waterfall
- B. Agile software development
- C. V-model only
- D. End-of-life planning

**Question 53:** Waterfall methodology is best described as:
- A. Sequential, step-by-step process for requirements
- B. Randomized deployments
- C. Continuous delivery pipeline
- D. Threat modeling framework

**Question 54:** The V-model creates a "V" shape because:
- A. Testing is removed
- B. Stage turns back upward after coding
- C. Requirements are skipped
- D. Maintenance precedes design

**Question 55:** Agile emphasizes:
- A. Collaboration and adaptability
- B. No customer feedback
- C. Fixed scope always
- D. One-person teams

**Question 56:** Scrum is primarily a:
- A. Security tool
- B. Product development strategy/framework
- C. Penetration test method
- D. Compliance regulation

**Question 57:** Which approach is explicitly said to be difficult for early SDL effort estimation?
- A. Agile
- B. Waterfall
- C. V-model
- D. End-of-life

**Question 58:** Which is NOT listed as an SDLC approach in Lesson 3?
- A. Scrum
- B. XP
- C. ITIL
- D. Waterfall

**Question 59:** Agile includes:
- A. Four core values
- B. Ten core values
- C. Fourteen core values
- D. No values

**Question 60:** A waterfall outcome from one phase acts as:
- A. Legal approval
- B. Input for the next phase
- C. Budget report
- D. Threat source

---

## Lesson 4 — SDL Phase A1: Security Assessment + Requirements {#lesson-4}

**Question 61:** The first phase of the SDL is:
- A. Architecture (A2)
- B. Security Assessment (A1)
- C. Ship (A5)
- D. Post-Release Support

**Question 62:** During A1, the team develops:
- A. Final pen test report
- B. Initial outline for security milestones integrated into schedule
- C. Only marketing requirements
- D. Only code review scripts

**Question 63:** In A1, key stakeholders should:
- A. Avoid discussing privacy
- B. Have common understanding of security and privacy requirements
- C. Skip security considerations
- D. Only focus on UI design

**Question 64:** Software security team should be included in SDLC kickoffs to ensure:
- A. Security is built into the process
- B. Testing is removed
- C. Deployment is faster
- D. Compliance is optional

**Question 65:** A privacy impact assessment should include:
- A. Only a logo
- B. Summary of legislation and required steps
- C. Only customer reviews
- D. Only developer names

**Question 66:** Creating success criteria for SDL phases helps:
- A. Avoid documentation
- B. Identify what worked/didn't in postmortem
- C. Remove metrics
- D. Skip requirements

**Question 67:** Creating key deliverables for each SDL phase ensures:
- A. Tangible documented outcomes
- B. No need to test
- C. No need to plan
- D. No need to trace requirements

**Question 68:** In the SDL model, it is helpful to outline:
- A. Vacation schedules
- B. Metrics measured in every phase
- C. Only marketing KPIs
- D. Only sales targets

**Question 69:** Three focus areas in secure software requirements are gathering requirements, data classification, and:
- A. Network routing
- B. Managing data protection requirements
- C. Pricing strategy
- D. Brand identity

**Question 70:** Purpose of gathering requirements before kickoff is to:
- A. Increase rework
- B. Avoid common project failures by identifying requirements early
- C. Delay delivery
- D. Remove stakeholders

**Question 71:** Functional requirements describe:
- A. Constraints not affecting core purpose
- B. What the system will do and its core purpose
- C. Only legal standards
- D. Only test scripts

**Question 72:** Non-functional requirements describe:
- A. Core purpose
- B. Constraints/restrictions that do not impact core purpose
- C. Only features
- D. Only threat sources

**Question 73:** Operational requirements refer to:
- A. System function based on environment it will operate in
- B. Only UI colors
- C. Only database schema
- D. Only encryption type

**Question 74:** Compliance requirement areas are legal, financial, and:
- A. Weather
- B. Industry standards
- C. Social media
- D. Gamification

**Question 75:** Product risk profile helps determine:
- A. Actual cost of product from different perspectives
- B. Only number of users
- C. Only number of servers
- D. Only code style

**Question 76:** Requirement traceability matrix is:
- A. A table listing all security requirements
- B. A penetration test report
- C. A DFD
- D. A scanner output

**Question 77:** Threat profile is:
- A. The attacker's name
- B. The environment product operates in and threats in that environment
- C. A list of patches
- D. A deployment checklist

**Question 78:** Privacy impact assessment evaluates:
- A. PII privacy issues and impact rating
- B. CPU performance only
- C. Marketing effectiveness
- D. UI layout

**Question 79:** In A1, security milestones should be integrated into:
- A. HR handbook
- B. Development project schedule
- C. Customer support scripts
- D. Sales pipeline

**Question 80:** Which is NOT a requirement type mentioned?
- A. Functional
- B. Non-functional
- C. Operational
- D. Artistic

---

## Lesson 5 — SDL Phase A2: Architecture + Threat Modeling {#lesson-5}

**Question 81:** The second SDL phase is focused on:
- A. End-of-life removal
- B. Bringing security considerations into the SDLC
- C. Only post-release response
- D. Only maintenance patches

**Question 82:** Software security policy defines:
- A. Vacation rules
- B. What needs protection and how it will be protected
- C. Only coding language choice
- D. Only marketing scope

**Question 83:** Threat modeling is a process to:
- A. Pinpoint threats and potential vulnerabilities to prioritize remediation
- B. Write UI requirements
- C. Remove testing
- D. Generate invoices

**Question 84:** Threat modeling is proactive because it:
- A. Reacts only after attacks
- B. Prepares for threats before discovery
- C. Works only after deployment
- D. Eliminates risk

**Question 85:** The 5 steps of threat modeling begin with:
- A. Identify security objectives
- B. Identify vulnerabilities
- C. Decompose it
- D. Identify threats

**Question 86:** Which is the correct order?
- A. Survey → Decompose → Objectives → Threats → Vulnerabilities
- B. Objectives → Survey → Decompose → Threats → Vulnerabilities
- C. Decompose → Survey → Threats → Objectives → Vulnerabilities
- D. Objectives → Threats → Survey → Vulnerabilities → Decompose

**Question 87:** Data flow diagrams provide:
- A. Legal proof
- B. Visual representation of a process flow
- C. Encryption keys
- D. Budget estimates

**Question 88:** STRIDE includes:
- A. Spoofing
- B. Tampering
- C. Repudiation
- D. All of the above

**Question 89:** Denial of service means:
- A. Denying access to valid users
- B. Changing stored data
- C. Reading files without permission
- D. Gaining admin access

**Question 90:** Elevation of privilege means:
- A. Losing permissions
- B. Gaining unauthorized privileged access
- C. Writing documentation
- D. Encrypting traffic

**Question 91:** Spoofing means:
- A. Legally logging in
- B. Illegally accessing/using another user's credentials
- C. Destroying a database
- D. Running scans

**Question 92:** Tampering means:
- A. Maliciously changing persistent data
- B. Monitoring logs
- C. Deleting backups
- D. Creating DFDs

**Question 93:** Repudiation means:
- A. System can always trace actions
- B. Illegal operations where system cannot trace them
- C. System is offline
- D. Strong authentication

**Question 94:** Information disclosure means:
- A. Sharing a press release
- B. Reading a file you were not granted access to
- C. Denying access
- D. Elevating privileges

**Question 95:** PASTA stands for:
- A. Process for Attack Simulation and Threat Analysis
- B. Password Analysis and Security Testing Approach
- C. Program Assessment Standard for Technology Audits
- D. Practical Agile Secure Threat Assessment

**Question 96:** DREAD includes:
- A. Damage potential
- B. Reproducibility
- C. Exploitability
- D. All of the above

**Question 97:** Threat source is:
- A. Entity carrying out the attack
- B. A patch
- C. A compliance rule
- D. A test script

**Question 98:** Threat vector is:
- A. Path attacker can take to exploit a vulnerability
- B. A vulnerability database
- C. A security policy
- D. A code comment

**Question 99:** Trike is a framework for:
- A. Security auditing from risk management perspective
- B. Cloud deployment
- C. Network scanning
- D. UI testing

**Question 100:** Which is NOT listed as a threat modeling type?
- A. Application-centric
- B. Asset-centric
- C. Ticket-centric
- D. Both A and B are listed; C is not

---

## Lesson 6 — SDL Phase A3: Design & Development testing foundations {#lesson-6}

**Question 101:** A3 phase involves reviewing:
- A. Only marketing policy
- B. Policies outside SDL policy
- C. Only code style rules
- D. Only cloud contracts

**Question 102:** Collaboration must occur between:
- A. Software security group and centralized information security group
- B. Sales and marketing only
- C. Customers only
- D. No one

**Question 103:** Purpose of testing activities is to:
- A. Validate security before release
- B. Replace requirements
- C. Remove code review
- D. Avoid environments

**Question 104:** Building security in is less costly than:
- A. Writing code
- B. Fixing after deployment
- C. Planning
- D. Designing

**Question 105:** Test environment should:
- A. Be totally different than production
- B. Mimic execution environment as closely as possible
- C. Only be paper-based
- D. Never use virtualization

**Question 106:** Security testing techniques are categorized by:
- A. Red/Blue/Purple
- B. White/Gray/Black box
- C. Gold/Silver/Bronze
- D. Alpha/Beta/Gamma

**Question 107:** White box testing is:
- A. External with no knowledge
- B. Internal with full knowledge
- C. Only usability testing
- D. Only in production

**Question 108:** Black box testing is:
- A. Internal testing with full knowledge
- B. External perspective with no prior knowledge
- C. Code review
- D. Static analysis only

**Question 109:** Gray box testing:
- A. Has partial knowledge and analyzes source code to design test cases
- B. Has no knowledge
- C. Is only for performance testing
- D. Is only for end-of-life

**Question 110:** Alpha testing is done by:
- A. External users
- B. Developers themselves
- C. Legal counsel
- D. Customers only

**Question 111:** Beta testing is done by:
- A. Developers only
- B. Those not familiar with the development
- C. Only automated tools
- D. Only management

**Question 112:** Security test cases help determine:
- A. Marketing goals
- B. Security issues at the lowest level
- C. Salary bands
- D. UI color schemes

**Question 113:** Scanning involves:
- A. Writing requirements
- B. Identifying deficiencies anywhere around the system
- C. Creating DFDs
- D. Creating policies

**Question 114:** Security testing is:
- A. Static and one-time
- B. Ongoing
- C. Only done after ship
- D. Only done in planning

**Question 115:** Applications should be tested:
- A. Only in lab
- B. Only in operational environment
- C. In lab and true operational environment
- D. Only on paper

**Question 116:** System test means:
- A. Test only one function
- B. Test system and its interaction with other systems
- C. Only test UI
- D. Only test network

**Question 117:** Scripts are:
- A. Random notes
- B. Detailed logical step instructions for person/tool
- C. Legal contracts
- D. User personas

**Question 118:** Secure testing scripts are:
- A. Created specifically for the application being tested
- B. Only for marketing
- C. Only for payroll
- D. Only for end-of-life

**Question 119:** External resources are:
- A. Resources from company org
- B. Temporarily hired to test/report findings
- C. Always developers
- D. Always customers

**Question 120:** Internal resources are:
- A. Always outside consultants
- B. From the company's organization
- C. Only attackers
- D. Only auditors

---

## Lesson 7 — SDL Phase A4: Code review + AppSec tooling {#lesson-7}

**Question 121:** A4 phase continues to focus on:
- A. Removing software
- B. Security testing processes and analysis necessities
- C. Only marketing plans
- D. Only HR onboarding

**Question 122:** QA testing occurs:
- A. Only during testing phase
- B. Throughout the entire SDLC
- C. Only after deployment
- D. Only in end-of-life

**Question 123:** Three test type categories are:
- A. Unit, integration, system
- B. Benchmarks, scheduled, exploratory
- C. Static, dynamic, fuzz
- D. Alpha, beta, gamma

**Question 124:** Code review helps catch:
- A. Bugs early to decrease fix cost
- B. Only design issues
- C. Only legal issues
- D. Only performance metrics

**Question 125:** Four basic techniques for code review include all EXCEPT:
- A. Static analysis
- B. Manual code review
- C. Automated scanning
- D. Waterfall planning

**Question 126:** AppSec describes:
- A. Finding, fixing, preventing vulnerabilities at application level
- B. Hiring only security engineers
- C. Marketing security
- D. End-of-life removal

**Question 127:** AppSec is difficult to scale for:
- A. Small organizations
- B. Large organizations
- C. Individuals only
- D. No one

**Question 128:** Proxy scripts are used to:
- A. Communicate a web security bug/control effectively
- B. Replace encryption
- C. Replace policies
- D. Replace requirements

**Question 129:** Passive scanner:
- A. Modifies HTTPS inputs
- B. Silently analyzes HTTP requests/responses passing through tool
- C. Deletes logs
- D. Only runs in planning

**Question 130:** Active scanner:
- A. Silently observes only
- B. Modifies HTTPS inputs and analyzes responses
- C. Writes code automatically
- D. Creates DFDs

**Question 131:** Spider does what?
- A. Identifies inputs and supplies them to scanning components
- B. Encrypts traffic
- C. Scores CVSS
- D. Writes policies

**Question 132:** SonarQube is primarily for:
- A. Network scanning
- B. Static code analysis across many languages
- C. Cloud billing
- D. UX design

**Question 133:** AST is:
- A. A network cable
- B. Basis for software metrics/issues generated later
- C. A vulnerability database
- D. A pen test phase

**Question 134:** Control flow analysis is used to:
- A. Trace data input to output
- B. Step through logical conditions
- C. Fuzz endpoints
- D. Scan ports

**Question 135:** Data flow analysis is used to:
- A. Step through conditions only
- B. Trace data from input points to output points
- C. Run alpha tests
- D. Manage HR

**Question 136:** Scheduled tests are:
- A. Optional
- B. Mandatory requirements testing to validate security
- C. Only exploratory
- D. Only benchmarks

**Question 137:** Exploratory tests are done by:
- A. Development tester continually assessing quality
- B. Only customers
- C. Only legal
- D. Only external attackers

**Question 138:** Benchmarks are tests used to compare:
- A. Estimates to actual results
- B. Threat sources to vectors
- C. UI colors to fonts
- D. Laws to budgets

**Question 139:** Pull request is:
- A. Request to merge code into another branch
- B. A pen test report
- C. A scan type
- D. A DFD

**Question 140:** ZAP stands for:
- A. Zero Attack Policy
- B. Zed Attack Proxy
- C. Zone Access Procedure
- D. Zonal Analysis Platform

---

## Lesson 8 — SDL Phase A5: Ship (final review + scanning + pen testing) {#lesson-8}

**Question 141:** Ship (A5) phase occurs when:
- A. Security team performs final analysis/security review
- B. Requirements are written
- C. DFDs are drawn
- D. End-of-life begins

**Question 142:** Policy compliance analysis verifies:
- A. Product meets quality standards before release
- B. Product is profitable
- C. Developers are trained
- D. Cloud is free

**Question 143:** Vulnerability scanning tools attempt to identify:
- A. Weakness in applications
- B. UI alignment issues
- C. Salary issues
- D. Branding issues

**Question 144:** Penetration testing simulates:
- A. Customer usage
- B. Hacker actions to identify vulnerabilities
- C. Legal reviews
- D. Documentation writing

**Question 145:** Pen test phases listed are:
- A. Plan, build, test, ship
- B. Assess, identify, evaluate and plan, deploy
- C. Scan, patch, re-scan, close
- D. Discover, exploit, monetize, exit

**Question 146:** Creating a networking laboratory helps you test:
- A. Within controlled environment without written authorization/permissions
- B. Only in production
- C. Only on paper
- D. Only with customer data

**Question 147:** Nmap is used for:
- A. Network scanning and security auditing
- B. Code review
- C. Password hashing
- D. UI testing

**Question 148:** Authenticated scans:
- A. Require software to log onto system
- B. Never use credentials
- C. Only run externally
- D. Only run at end-of-life

**Question 149:** External scans target issues found:
- A. Inside firewall only
- B. Outside the firewall
- C. Only in source code
- D. Only in documentation

**Question 150:** Internal scans identify issues that could be exploited:
- A. From inside the network
- B. Only outside network
- C. Only by legal
- D. Only by marketing

**Question 151:** Intrusive target search means scans:
- A. Never exploit
- B. Exploit a vulnerability when identified
- C. Only observe logs
- D. Only list ports

**Question 152:** A "range" is:
- A. A budgeting spreadsheet
- B. Networking lab to conduct vulnerability analysis testing
- C. A code style guide
- D. A cloud region only

**Question 153:** Target machine is:
- A. Virtual space to practice identifying attack surfaces
- B. HR system
- C. Legal database
- D. Marketing site

**Question 154:** Virtualization is:
- A. Technology to create software services
- B. Physical cabling method
- C. Threat model type
- D. Policy standard

**Question 155:** Vulnerability scan means:
- A. Explore apps/databases to identify weaknesses
- B. Merge code branches
- C. Train developers
- D. Create compliance reports

**Question 156:** Vulnerability sites provide:
- A. Latest known vulnerabilities information
- B. Only design templates
- C. Only payroll forms
- D. Only user stories

**Question 157:** Open-source software license compliance refers to:
- A. Regulations regarding licensing of in-house products
- B. A scan type
- C. A threat model
- D. A pen test phase

**Question 158:** Open-source software security is:
- A. Identifying software security within in-house developed software
- B. Only buying proprietary tools
- C. Only marketing
- D. Only end-of-life

**Question 159:** SQL injection is:
- A. Code injection that might destroy software
- B. A port scan technique
- C. A DFD type
- D. A compliance framework

**Question 160:** Active and passive analysis techniques are useful during:
- A. Vulnerability testing
- B. Branding review
- C. Sprint planning only
- D. End-of-life only

---

## Lesson 9 — Post-release support + PSIRT + CVSS + M&A {#lesson-9}

**Question 161:** Having software security experts report to engineering enables:
- A. Weaker relationship
- B. Stronger relationship during secure development
- C. No difference
- D. Only legal alignment

**Question 162:** Quality security is built:
- A. Only in one SDLC phase
- B. Throughout the entire engineering process
- C. Only after release
- D. Only in planning

**Question 163:** Not every company can include all PRSAs, so you should:
- A. Ignore security
- B. Choose highest value and optimize available tools
- C. Only do pen tests
- D. Only do code reviews

**Question 164:** CVSS is used to:
- A. Assess severity of a vulnerability
- B. Draw DFDs
- C. Run port scans
- D. Manage budgets

**Question 165:** Post-release privacy issues may need additional:
- A. Marketing
- B. Development, QA, and/or security resources
- C. Office space
- D. Vacation time

**Question 166:** Third-party reviews may be necessary when completing:
- A. Post-release review
- B. Planning
- C. Requirements writing
- D. End-of-life only

**Question 167:** During M&A, software security may go under:
- A. Architectural review
- B. UI review only
- C. Payroll review
- D. Logo redesign

**Question 168:** Requirements for post-release certifications should be included:
- A. After deployment only
- B. Before deployment in security/privacy requirements
- C. Only in marketing
- D. Only in HR policy

**Question 169:** PSIRT is:
- A. Team that receives/investigates/reports vulnerabilities
- B. A scan tool
- C. A threat model
- D. A coding language

**Question 170:** Post-Release Support phase is when orgs prepare for:
- A. New hires
- B. Vulnerabilities after product release
- C. UI redesign
- D. Budget cuts

**Question 171:** Post-Release PSIRT Response involves:
- A. Internal-only discoveries
- B. External discovery of post-release vulnerabilities
- C. Writing requirements
- D. Decomposing apps

**Question 172:** Legacy code is:
- A. Old code no longer supported
- B. New code in main branch
- C. Code with tests
- D. Code under active development

**Question 173:** M&A means:
- A. Metrics and Analysis
- B. Merger and acquisition
- C. Maintenance and Availability
- D. Model and Architecture

**Question 174:** Software Security Champion (SSC) is an expert on:
- A. Promoting security awareness and best practices
- B. Writing sales copy
- C. Running payroll
- D. Managing cloud bills

**Question 175:** Software Security Evangelist (SSE) is an expert to promote:
- A. Awareness of products to wider community
- B. Only internal HR policies
- C. Only compliance fines
- D. Only backups

**Question 176:** Strong security relationship is supported when security reports to:
- A. Engineering organization
- B. Customers
- C. Vendors
- D. Competitors

**Question 177:** Security should be built:
- A. Only at ship
- B. Throughout engineering process
- C. Only post-release
- D. Only in design

**Question 178:** Post-release privacy issues could require additional:
- A. QA
- B. Security
- C. Development
- D. All of the above

**Question 179:** PSIRT deals with:
- A. Marketing incidents
- B. Software product security incidents and vulnerabilities
- C. UI bugs only
- D. Feature requests

**Question 180:** Which term refers to consolidation of companies?
- A. M&A
- B. CVSS
- C. CVE
- D. STRIDE

---

## Lesson 10 — Modern environments + OpenSAMM + BSIMM categories + STRIDE recap {#lesson-10}

**Question 181:** Software is most likely deployed in:
- A. Only Waterfall
- B. Agile, DevOps, Digital Enterprise, or combinations
- C. Only end-of-life
- D. Only planning

**Question 182:** Agile development is designed to:
- A. Deliver value faster
- B. Eliminate requirements
- C. Stop deployments
- D. Avoid collaboration

**Question 183:** DevOps teams work together for:
- A. Ongoing operations, enhancements, defect removal, optimization
- B. Only marketing
- C. Only requirements writing
- D. Only end-of-life

**Question 184:** Cloud technology has caused a rethinking of how apps are:
- A. Built, deployed, and used
- B. Sold only
- C. Named only
- D. Ignored

**Question 185:** Moving to public cloud services has increased:
- A. Security challenges
- B. Printer usage
- C. HR workload
- D. Coffee sales

**Question 186:** Digital enterprises use technology to:
- A. Enable and improve business activities
- B. Avoid business activities
- C. Remove all risk
- D. Ban software

**Question 187:** OpenSAMM business functions include governance, construction, verification, and:
- A. Marketing
- B. Deployment
- C. Payroll
- D. Recruiting

**Question 188:** BSIMM is a study of:
- A. Only CVEs
- B. Existing software security initiatives in larger development
- C. Only networks
- D. Only regulations

**Question 189:** The four BSIMM category types are governance, intelligence, SSDL touchpoints, and:
- A. Sales
- B. Deployment
- C. Finance
- D. Branding

**Question 190:** Threats can be classified using STRIDE. Which is included?
- A. Spoofing
- B. Tampering
- C. Elevation of privilege
- D. All of the above

**Question 191:** In OpenSAMM, "verification" is centered around:
- A. Managing overall activities
- B. Checking and testing artifacts produced through development
- C. Releasing software
- D. Capturing security info only

**Question 192:** In OpenSAMM, "governance" is centered around:
- A. How org manages overall software development activities
- B. How org releases software
- C. Only code review
- D. Only environment hardening

**Question 193:** "Construction" in OpenSAMM is centered around:
- A. How org defines goals and creates software within projects
- B. Only incident response
- C. Only vulnerability disclosure
- D. Only HR

**Question 194:** "Deployment" in OpenSAMM is centered around:
- A. How org releases software
- B. Only threat modeling
- C. Only coding
- D. Only design review

**Question 195:** Code review (CR) is a practice of:
- A. Verification
- B. Deployment
- C. Governance
- D. Construction

**Question 196:** Design review (DR) is a practice of:
- A. Verification
- B. Construction
- C. Governance
- D. Deployment

**Question 197:** Education and guidance (EG) is a practice of:
- A. Governance
- B. Verification
- C. Deployment
- D. Construction

**Question 198:** Environment hardening (EH) is a practice of:
- A. Deployment
- B. Governance
- C. Verification
- D. Construction

**Question 199:** Vulnerability management (VM) is a practice of:
- A. Deployment
- B. Construction
- C. Verification
- D. Governance

**Question 200:** Threat assessment (TA) is a practice of:
- A. Construction
- B. Governance
- C. Verification
- D. Deployment

---

## Answer Key {#answer-key}

| Q# | Answer | Q# | Answer | Q# | Answer | Q# | Answer |
|----|--------|-------|--------|-------|--------|-------|--------|
| 1 | C | 51 | B | 101 | B | 151 | B |
| 2 | A | 52 | B | 102 | A | 152 | B |
| 3 | B | 53 | A | 103 | A | 153 | A |
| 4 | B | 54 | B | 104 | B | 154 | A |
| 5 | C | 55 | A | 105 | B | 155 | A |
| 6 | A | 56 | B | 106 | B | 156 | A |
| 7 | B | 57 | A | 107 | B | 157 | A |
| 8 | A | 58 | C | 108 | B | 158 | A |
| 9 | A | 59 | A | 109 | A | 159 | A |
| 10 | B | 60 | B | 110 | B | 160 | A |
| 11 | B | 61 | B | 111 | B | 161 | B |
| 12 | A | 62 | B | 112 | B | 162 | B |
| 13 | C | 63 | B | 113 | B | 163 | B |
| 14 | B | 64 | A | 114 | B | 164 | A |
| 15 | B | 65 | B | 115 | C | 165 | B |
| 16 | B | 66 | B | 116 | B | 166 | A |
| 17 | C | 67 | A | 117 | B | 167 | A |
| 18 | C | 68 | B | 118 | A | 168 | B |
| 19 | A | 69 | B | 119 | B | 169 | A |
| 20 | B | 70 | B | 120 | B | 170 | B |
| 21 | B | 71 | B | 121 | B | 171 | B |
| 22 | B | 72 | B | 122 | B | 172 | A |
| 23 | B | 73 | A | 123 | A | 173 | B |
| 24 | B | 74 | B | 124 | A | 174 | A |
| 25 | C | 75 | A | 125 | D | 175 | A |
| 26 | B | 76 | A | 126 | A | 176 | A |
| 27 | B | 77 | B | 127 | B | 177 | B |
| 28 | A | 78 | A | 128 | A | 178 | D |
| 29 | B | 79 | B | 129 | B | 179 | B |
| 30 | B | 80 | D | 130 | B | 180 | A |
| 31 | B | 81 | B | 131 | A | 181 | B |
| 32 | A | 82 | B | 132 | B | 182 | A |
| 33 | B | 83 | A | 133 | B | 183 | A |
| 34 | B | 84 | B | 134 | B | 184 | A |
| 35 | B | 85 | A | 135 | B | 185 | A |
| 36 | B | 86 | B | 136 | B | 186 | A |
| 37 | B | 87 | B | 137 | A | 187 | B |
| 38 | A | 88 | D | 138 | A | 188 | B |
| 39 | A | 89 | A | 139 | A | 189 | B |
| 40 | D | 90 | B | 140 | B | 190 | D |
| 41 | B | 91 | B | 141 | A | 191 | B |
| 42 | B | 92 | A | 142 | A | 192 | A |
| 43 | B | 93 | B | 143 | A | 193 | A |
| 44 | B | 94 | B | 144 | B | 194 | A |
| 45 | B | 95 | A | 145 | B | 195 | A |
| 46 | B | 96 | D | 146 | A | 196 | A |
| 47 | B | 97 | A | 147 | A | 197 | A |
| 48 | B | 98 | A | 148 | A | 198 | A |
| 49 | B | 99 | A | 149 | B | 199 | A |
| 50 | B | 100 | C | 150 | A | 200 | A |
