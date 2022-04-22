// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Analysis of Requirements
// Design
// Implementation
// Maintain
// Planning
// Testing & Integration

//This should be the correct order
//Planning
// Analysis of Requirements
// Design
// Implementation
// Testing & Integration
// Maintain

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
const analysisOfRequirment = "This is the second step in which the dev team, manager or ticket reporter (person or department requesting work done) outlines the coding and changes needed to be done. Writing a descriptive ticket, possibly including screenshots or info such as prefered language script or work is done in."
const design = "Developer is assigned to said project and begins to code according to the requirements outline in planning and analysis"
const implementation = "Developer usually commits their changes (after their own personal review) to a work repo (could use github or other service) and has a senior or other developer review changes before merging into a Devlopement or testing branch"
const testingAndIntegration = "Usually QA will handle this part and pull the code written by a Devolper and try to break it and test it in every scenario, once it passes they will pass the work to an implementation team or move to staging"
const maintain = "Once code has passed QA and gone into production, it may need updates and other changes made later on and Dev's are responsilbe for writing code that can be easily read and understood so other Dev's on the team can help maintain in the future."