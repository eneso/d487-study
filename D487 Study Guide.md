# D487 Study Guide

## Table of Contents
- [Lesson 1: Why build security in (SDLC + SDL basics)](#lesson-1)
- [Lesson 2: SDL programs and maturity models (BSIMM, OWASP, NIST, CVE)](#lesson-2)
- [Lesson 3: SDLC approaches (Waterfall, V-model, Agile, Scrum, XP)](#lesson-3)
- [Lesson 4: SDL Phase A1: Security Assessment + Requirements](#lesson-4)
- [Lesson 5: SDL Phase A2: Architecture + Threat Modeling](#lesson-5)
- [Lesson 6: SDL Phase A3: Design & Development testing foundations](#lesson-6)
- [Lesson 7: SDL Phase A4: Code review + AppSec tooling](#lesson-7)
- [Lesson 8: SDL Phase A5: Ship (final review + scanning + pen testing)](#lesson-8)
- [Lesson 9: Post-release support + PSIRT + CVSS + M&A](#lesson-9)
- [Lesson 10: Modern environments + OpenSAMM + BSIMM categories + STRIDE recap](#lesson-10)

---

## Lesson 1: Why build security in (SDLC + SDL basics) {#lesson-1}

### Key Concepts

**SDLC (Software Development Life Cycle)**
- Structured approach to software development
- Consists of multiple phases from planning to end-of-life

**SDL (Security Development Life Cycle)**
- Security Development Life Cycle
- Framework for building security into software

**Software Security**
- Building security into software through an SDL in an SDLC
- Not just adding security after deployment or running scans

**Three Core Elements of Security (CIA Triad)**
- **Confidentiality**: Protecting information from unauthorized access
- **Integrity**: Ensuring data accuracy and preventing unauthorized modifications
- **Availability**: Ensuring systems and data are accessible when needed

**Threat Modeling and Attack Surface Validation**
- Primary purpose: Alleviate security vulnerabilities
- Conducted throughout the SDL

### SDLC Phases

1. **Planning Phase**
   - Creates a vision and next steps
   
2. **Requirements Phase**
   - Determines necessary software requirements
   - Determines resources involved from a known resource
   
3. **Design Phase**
   - Prepares requirements for the technical design
   
4. **Implementation Phase**
   - Development and coding activities
   
5. **Testing Phase**
   - Verifies functions through a known environment
   
6. **Deployment Phase**
   - Pushes security out to production
   
7. **Maintenance Phase**
   - Implements ongoing security monitoring
   - Ongoing updates and patches
   
8. **End of Life Phase**
   - Considers proper steps for removing software completely

### Key Definitions

- **Hardware**: Physical components of a computer system
- **Software**: Programs and operating systems
- **Secure Code**: A principle design in coding referencing security best practices and safeguards

### Best Practices

- Integrate and evaluate software and hardware to maximize organization's software and security
- Use threat modeling as a structured process to protect against vulnerabilities
- Build security throughout all 8 major SDLC phases

---

## Lesson 2: SDL programs and maturity models (BSIMM, OWASP, NIST, CVE) {#lesson-2}

### SDL Program Implementation

**Core Principle**: Security should be built into software design rather than an afterthought

### Popular SDL Models and Resources

**BSIMM (Building Security In Maturity Model)**
- Studies real-world software security initiatives
- Helps determine where software security stands and how to develop over time
- Contains 12 best practices
- Descriptive rather than prescriptive

**OWASP SAMM (Software Assurance Maturity Model)**
- Flexible and prescriptive framework
- For building security into development organizations

**NIST (National Institute of Standards and Technology)**
- Provides research, info, and tools for government and corporate information security
- Standards and guidelines

**DHS (Department of Homeland Security)**
- Has an established Software Assurance Program

**CVE (Common Vulnerabilities and Exposures)**
- A list providing common names for publicly known vulnerabilities
- Standardized naming convention

### Key Principles

- Whatever SDL you use must be mapped to your SDLC
- Security metrics help corporations decide on risk management requirements and security budgets
- Security metrics can show customers proof of security

### Application Security

**Definition**: The process of developing, adding, and testing security features within applications

**Goal**: Prevent security vulnerabilities against threats

### Testing Types

**Static Analysis**
- Performed without executing programs
- Code review, AST tools

**Dynamic Analysis**
- Performed when executing programs in real time
- Runtime testing

**Fuzz Testing**
- Uses invalid/unexpected/random data
- Tests for unexpected behavior

### Models and Metrics

**Metric Model**
- Allows an org to determine effectiveness of security controls

**Measurement Model**
- A set of data security methods developers take to protect against vulnerabilities

### Additional SDL Resources (Listed)
- Cisco SDL
- Microsoft Trustworthy Computing SDL
- OWASP Code Review Guide

---

## Lesson 3: SDLC approaches (Waterfall, V-model, Agile, Scrum, XP) {#lesson-3}

### Waterfall Methodology

**Description**: Sequential, step-by-step process where development is divided into separate phases

**Key Characteristics**:
- One output feeds the next phase as input
- Linear progression

**Advantages**:
- Splitting deliveries into stages for easier control
- Clear structure and documentation

**Disadvantages**:
- No time for reflection or design revision
- Rigid and inflexible

### V-Model

**Description**: Waterfall variation that turns back upward after coding

**Key Characteristics**:
- Creates a "V" shape because stage turns back upward after coding
- Each development phase has corresponding testing phase

### Agile Methodology

**Core Principles**:
- Mixes traditional and new practices
- Emphasizes collaboration and adaptability
- Has **4 values and 12 principles**

**Key Features**:
- Uses collaboration between self-organizing and cross-functional teams
- Allows customer satisfaction through rapid, continuous delivery of useful software
- Includes four core values

**Disadvantage**:
- Difficulty assessing effort at the beginning of SDL
- Hard to estimate initially

### Scrum Framework

**Description**: Product development strategy/framework

**Key Characteristics**:
- Allows a team to work flexibly and holistically toward a common goal
- Type of Agile approach

### Extreme Programming (XP)

**Description**: A type of Agile software development

**Goal**: Intends to improve software quality and responsiveness

**Key Characteristics**:
- Focuses on technical excellence
- Rapid iterations

### Comparison Summary

| Methodology | Key Feature | Best For |
|-------------|-------------|----------|
| Waterfall | Sequential phases | Well-defined requirements |
| V-Model | Testing at each stage | Quality assurance focus |
| Agile | Iterative and adaptive | Changing requirements |
| Scrum | Sprint-based | Team collaboration |
| XP | Technical practices | Code quality |

---

## Lesson 4: SDL Phase A1: Security Assessment + Requirements {#lesson-4}

### Overview

**First SDL Phase**: Security Assessment (A1)

**Primary Goal**: Establish security foundation before development begins

### Key Activities

**Security Milestones Integration**
- Develop initial outline for security milestones integrated into schedule
- Integrate security milestones into development project schedule

**Stakeholder Alignment**
- Key stakeholders should have common understanding of security and privacy requirements
- Include software security team in SDLC kickoffs to ensure security is built into the process

**Privacy Impact Assessment**
- Should include summary of legislation and required steps
- Evaluates PII privacy issues and impact rating

**Success Criteria and Deliverables**
- Create success criteria for SDL phases to identify what worked/didn't in postmortem
- Create key deliverables for each SDL phase to ensure tangible documented outcomes
- Outline metrics measured in every phase

### Three Focus Areas in Secure Software Requirements

1. **Gathering Requirements**
2. **Data Classification**
3. **Managing Data Protection Requirements**

### Requirements Types

**Functional Requirements**
- Describe what the system will do and its core purpose
- Core functionality

**Non-Functional Requirements**
- Describe constraints/restrictions that do not impact core purpose
- Quality attributes (performance, security, usability)

**Operational Requirements**
- Refer to system function based on environment it will operate in
- Deployment and runtime considerations

**Compliance Requirements**
- Three areas: Legal, Financial, and Industry standards
- Regulatory obligations

### Key Artifacts

**Product Risk Profile**
- Helps determine actual cost of product from different perspectives
- Risk assessment

**Requirement Traceability Matrix**
- A table listing all security requirements
- Links requirements to implementation and testing

**Threat Profile**
- The environment product operates in and threats in that environment
- Environmental threat landscape

### Purpose and Benefits

- Gathering requirements before kickoff avoids common project failures by identifying requirements early
- Reduces rework and cost
- Establishes security baseline

---

## Lesson 5: SDL Phase A2: Architecture + Threat Modeling {#lesson-5}

### Overview

**Second SDL Phase**: Focused on bringing security considerations into the SDLC

### Software Security Policy

**Definition**: Defines what needs protection and how it will be protected

**Purpose**: Establishes security guidelines and standards

### Threat Modeling

**Definition**: A process to pinpoint threats and potential vulnerabilities to prioritize remediation

**Nature**: Proactive because it prepares for threats before discovery

### Five Steps of Threat Modeling

**Correct Order**: Objectives → Survey → Decompose → Threats → Vulnerabilities

1. **Identify security objectives**
2. **Survey the application**
3. **Decompose it**
4. **Identify threats**
5. **Identify vulnerabilities**

### Data Flow Diagrams (DFDs)

**Purpose**: Provide visual representation of a process flow

**Use**: Help understand system architecture and data movement

### STRIDE Threat Model

**Components**:
- **S**poofing: Illegally accessing/using another user's credentials
- **T**ampering: Maliciously changing persistent data
- **R**epudiation: Illegal operations where system cannot trace them
- **I**nformation Disclosure: Reading a file you were not granted access to
- **D**enial of Service: Denying access to valid users
- **E**levation of Privilege: Gaining unauthorized privileged access

### PASTA

**Stands for**: Process for Attack Simulation and Threat Analysis

**Purpose**: Risk-centric threat modeling methodology

### DREAD Risk Assessment

**Components**:
- **D**amage potential
- **R**eproducibility
- **E**xploitability
- **A**ffected users
- **D**iscoverability

### Key Threat Concepts

**Threat Source**
- Entity carrying out the attack
- The attacker

**Threat Vector**
- Path attacker can take to exploit a vulnerability
- Attack method

### Trike Framework

**Purpose**: Security auditing from risk management perspective

### Threat Modeling Types

- Application-centric
- Asset-centric
- Attacker-centric

---

## Lesson 6: SDL Phase A3: Design & Development testing foundations {#lesson-6}

### Overview

**A3 Phase Focus**: Reviewing policies outside SDL policy and establishing testing foundations

### Key Collaboration

- Must occur between software security group and centralized information security group
- Cross-functional cooperation essential

### Testing Principles

**Core Purpose**: Validate security before release

**Cost Principle**: Building security in is less costly than fixing after deployment

**Test Environment**: Should mimic execution environment as closely as possible

**Security Testing**: Ongoing (not static and one-time)

**Testing Scope**: Applications should be tested in lab and true operational environment

### Security Testing Categories

**White Box Testing**
- Internal with full knowledge
- Access to source code and architecture

**Black Box Testing**
- External perspective with no prior knowledge
- No internal knowledge

**Gray Box Testing**
- Has partial knowledge and analyzes source code to design test cases
- Hybrid approach

### Testing Phases

**Alpha Testing**
- Done by developers themselves
- Internal testing

**Beta Testing**
- Done by those not familiar with the development
- External users

### Testing Activities

**Security Test Cases**
- Help determine security issues at the lowest level
- Specific security validation

**Scanning**
- Identifying deficiencies anywhere around the system
- Automated vulnerability detection

**System Test**
- Test system and its interaction with other systems
- Integration testing

### Testing Resources

**Scripts**
- Detailed logical step instructions for person/tool
- Secure testing scripts are created specifically for the application being tested

**External Resources**
- Temporarily hired to test/report findings
- Outside consultants, pen testers

**Internal Resources**
- From the company's organization
- In-house security team

---

## Lesson 7: SDL Phase A4: Code review + AppSec tooling {#lesson-7}

### Overview

**A4 Phase Focus**: Security testing processes and analysis necessities

**QA Testing**: Occurs throughout the entire SDLC (not just testing phase)

### Three Test Type Categories

1. **Unit Testing**: Individual components
2. **Integration Testing**: Component interactions
3. **System Testing**: Complete system

### Code Review

**Purpose**: Helps catch bugs early to decrease fix cost

**Benefits**: Early detection reduces remediation costs

### Four Basic Techniques for Code Review

1. **Static Analysis**
2. **Manual Code Review**
3. **Automated Scanning**
4. *(Dynamic Analysis)*

*Note: Waterfall planning is NOT a code review technique*

### Application Security (AppSec)

**Definition**: Finding, fixing, preventing vulnerabilities at application level

**Challenge**: Difficult to scale for large organizations

### AppSec Tooling

**Proxy Scripts**
- Used to communicate a web security bug/control effectively
- Testing web applications

**Passive Scanner**
- Silently analyzes HTTP requests/responses passing through tool
- Non-intrusive observation

**Active Scanner**
- Modifies HTTPS inputs and analyzes responses
- Actively probes for vulnerabilities

**Spider**
- Identifies inputs and supplies them to scanning components
- Discovers application structure

### Static Analysis Tools

**SonarQube**
- Primarily for static code analysis across many languages
- Code quality and security

**AST (Abstract Syntax Tree)**
- Basis for software metrics/issues generated later
- Code structure analysis

### Analysis Types

**Control Flow Analysis**
- Step through logical conditions
- Execution path analysis

**Data Flow Analysis**
- Trace data from input points to output points
- Data movement tracking

### Test Categories

**Scheduled Tests**
- Mandatory requirements testing to validate security
- Planned and regular

**Exploratory Tests**
- Done by development tester continually assessing quality
- Ad-hoc testing

**Benchmarks**
- Tests used to compare estimates to actual results
- Performance baselines

### Development Practices

**Pull Request**
- Request to merge code into another branch
- Code review workflow

**ZAP (Zed Attack Proxy)**
- Open-source web application security scanner
- OWASP tool

---

## Lesson 8: SDL Phase A5: Ship (final review + scanning + pen testing) {#lesson-8}

### Overview

**Ship (A5) Phase**: Occurs when security team performs final analysis/security review

**Goal**: Final validation before production release

### Policy Compliance Analysis

**Purpose**: Verifies product meets quality standards before release

**Scope**: Comprehensive security review

### Vulnerability Scanning

**Purpose**: Attempt to identify weakness in applications

**Types of Scans**:

**Authenticated Scans**
- Require software to log onto system
- Uses credentials for deeper analysis

**External Scans**
- Target issues found outside the firewall
- Perimeter security

**Internal Scans**
- Identify issues that could be exploited from inside the network
- Internal threats

**Intrusive Target Search**
- Scans exploit a vulnerability when identified
- Active exploitation

### Penetration Testing

**Definition**: Simulates hacker actions to identify vulnerabilities

**Pen Test Phases**: Assess, identify, evaluate and plan, deploy

### Testing Infrastructure

**Networking Laboratory**
- Helps you test within controlled environment without written authorization/permissions
- Safe testing space

**Range**
- Networking lab to conduct vulnerability analysis testing
- Controlled environment

**Target Machine**
- Virtual space to practice identifying attack surfaces
- Practice environment

**Virtualization**
- Technology to create software services
- Virtual infrastructure

### Security Scanning Tools

**Nmap**
- Used for network scanning and security auditing
- Port scanning and service detection

**Vulnerability Scan**
- Explore apps/databases to identify weaknesses
- Systematic vulnerability detection

**Vulnerability Sites**
- Provide latest known vulnerabilities information
- CVE databases, NVD

### Open Source Considerations

**Open-Source Software License Compliance**
- Regulations regarding licensing of in-house products
- Legal compliance

**Open-Source Software Security**
- Identifying software security within in-house developed software
- Third-party component risks

### Common Vulnerabilities

**SQL Injection**
- Code injection that might destroy software
- Database attack

### Analysis Techniques

**Active and Passive Analysis**
- Useful during vulnerability testing
- Comprehensive testing approach

---

## Lesson 9: Post-release support + PSIRT + CVSS + M&A {#lesson-9}

### Organizational Structure

**Security and Engineering Relationship**
- Having software security experts report to engineering enables stronger relationship during secure development
- Security should report to engineering organization

**Security Integration**
- Quality security is built throughout the entire engineering process
- Not just in one SDLC phase

### Post-Release Security Activities (PRSA)

**Resource Optimization**
- Not every company can include all PRSAs
- Should choose highest value and optimize available tools

**Privacy Issues**
- Post-release privacy issues may need additional development, QA, and/or security resources

**Third-Party Reviews**
- May be necessary when completing post-release review

**Certifications**
- Requirements for post-release certifications should be included before deployment in security/privacy requirements

### PSIRT (Product Security Incident Response Team)

**Definition**: Team that receives/investigates/reports vulnerabilities

**Focus**: PSIRT deals with software product security incidents and vulnerabilities

**Post-Release PSIRT Response**
- Involves external discovery of post-release vulnerabilities
- Incident handling

### Post-Release Support Phase

**Purpose**: When orgs prepare for vulnerabilities after product release

**Scope**: Ongoing monitoring and response

### CVSS (Common Vulnerability Scoring System)

**Purpose**: Used to assess severity of a vulnerability

**Use**: Standardized severity rating

### Legacy Code

**Definition**: Old code no longer supported

**Challenge**: May contain vulnerabilities

### M&A (Merger and Acquisition)

**Definition**: Consolidation of companies

**Security Implications**: During M&A, software security may go under architectural review

### Security Champions

**Software Security Champion (SSC)**
- Expert on promoting security awareness and best practices
- Internal advocate

**Software Security Evangelist (SSE)**
- Expert to promote awareness of products to wider community
- External advocate

### Key Principles

- Strong security relationship is supported when security reports to engineering organization
- Security should be built throughout engineering process
- Post-release privacy issues could require additional QA, security, and development resources

---

## Lesson 10: Modern environments + OpenSAMM + BSIMM categories + STRIDE recap {#lesson-10}

### Modern Deployment Environments

**Current State**: Software is most likely deployed in Agile, DevOps, Digital Enterprise, or combinations

**Agile Development**
- Designed to deliver value faster
- Rapid iteration

**DevOps Teams**
- Work together for ongoing operations, enhancements, defect removal, optimization
- Collaboration between development and operations

**Cloud Technology**
- Has caused a rethinking of how apps are built, deployed, and used
- Moving to public cloud services has increased security challenges

**Digital Enterprises**
- Use technology to enable and improve business activities
- Technology-driven business

### OpenSAMM Business Functions

**Four Core Functions**:
1. **Governance**: How org manages overall software development activities
2. **Construction**: How org defines goals and creates software within projects
3. **Verification**: Checking and testing artifacts produced through development
4. **Deployment**: How org releases software

### OpenSAMM Practices by Function

**Governance Practices**:
- Education and guidance (EG)

**Construction Practices**:
- Threat assessment (TA)

**Verification Practices**:
- Code review (CR)
- Design review (DR)

**Deployment Practices**:
- Environment hardening (EH)
- Vulnerability management (VM)

### BSIMM (Building Security In Maturity Model)

**Definition**: A study of existing software security initiatives in larger development

**Four BSIMM Category Types**:
1. **Governance**: Strategy and metrics
2. **Intelligence**: Attack models and security features
3. **SSDL Touchpoints**: Security practices in SDLC
4. **Deployment**: Software environment and configuration

### STRIDE Threat Model Recap

**All Components Included**:
- **Spoofing**: Identity theft
- **Tampering**: Data manipulation
- **Repudiation**: Denying actions
- **Information Disclosure**: Data leakage
- **Denial of Service**: Availability attacks
- **Elevation of Privilege**: Unauthorized access escalation

### Summary

Modern software development requires:
- Integration of security across all phases
- Adaptation to cloud and DevOps environments
- Use of frameworks like OpenSAMM and BSIMM
- Continuous threat modeling and assessment
- Collaboration across teams and functions

---

## Quick Reference

### Key Acronyms
- **SDLC**: Software Development Life Cycle
- **SDL**: Security Development Life Cycle
- **BSIMM**: Building Security In Maturity Model
- **OWASP**: Open Web Application Security Project
- **SAMM**: Software Assurance Maturity Model
- **NIST**: National Institute of Standards and Technology
- **CVE**: Common Vulnerabilities and Exposures
- **CVSS**: Common Vulnerability Scoring System
- **PSIRT**: Product Security Incident Response Team
- **M&A**: Merger and Acquisition
- **CIA**: Confidentiality, Integrity, Availability
- **STRIDE**: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- **DREAD**: Damage, Reproducibility, Exploitability, Affected users, Discoverability
- **PASTA**: Process for Attack Simulation and Threat Analysis
- **AppSec**: Application Security
- **AST**: Abstract Syntax Tree
- **ZAP**: Zed Attack Proxy
- **XP**: Extreme Programming
- **SSC**: Software Security Champion
- **SSE**: Software Security Evangelist
- **PRSA**: Post-Release Security Activities

### The 8 SDLC Phases
1. Planning
2. Requirements
3. Design
4. Implementation
5. Testing
6. Deployment
7. Maintenance
8. End of Life

### The 5 SDL Phases (A1-A5)
- **A1**: Security Assessment + Requirements
- **A2**: Architecture + Threat Modeling
- **A3**: Design & Development Testing Foundations
- **A4**: Code Review + AppSec Tooling
- **A5**: Ship (Final Review + Scanning + Pen Testing)

### Security Testing Types
- **White Box**: Full knowledge, internal
- **Gray Box**: Partial knowledge
- **Black Box**: No knowledge, external
