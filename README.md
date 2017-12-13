# Interactive educational dashboard

INFSCI 2410\_Final Project

**Group 4:**

**Anping Qi ANQ8**

**Chang Tian CHT97**

**Yunhao Wu YUW122**

**Xinchen Yu XIY82**

**Chi-Heng Hung CHH162**


1. 1.Project Introduction

## 1.1 background

PAWS Lab has several interactive systems that collect information about student progress and show it to students themselves. Mastery Grids that some of us use in Database class, java programming and data structure is an example. The dashboard provides users with Quizzes, Examples, Animated Examples and Coding to help them grasp the knowledge and gain a chance to test learning condition of the class. When students login to the Mastery Grids, they can get an overview of all topics they have finished. All topics are shown as pixels, the shade of green shows the performance students do on the exactly topic. And through the &#39;update other learners&#39; button, a user can see the progress of other students in the class. It is the same as the overall view that what a user have done can be viewed as green pixels and can be compared with other learners. Mastery Grids is quite enough for learners to use. However, we do not have a tool for instructors.


A snapshot of the Mastery Grids System

## 1.2 Goal

The goal of this project is to design and develop an interactive dashboard for instructors to monitor students&#39; usage of the system in a fine-grained way. This tool could also provide reports and visualizations that bring together system usage data and student performance in the class.

## 1.3 Scope

The dashboard that we are working on will focus on the Mastery Grids system and every course that is using the Mastery Grid system.

## 1.4 Clients

The clients for the Interactive educational dashboard is mainly the instructors and teaching assistant of the courses that used the PAWS Lab&#39;s interactive systems

1. 2.User Study

## 2.1Requirements

The main task for us is to design a dashboard for instructors to view the condition of learners about the learning condition of the class.So we contacted with a few instructors and teaching assistants about what they wish to have, and we organized a few points that they wish to have:

1. (1)Knowing the performance of specific student or a group of students.
2. (2)Detailed information of students&#39; performance, for example, how did a student failed, did he try or not?
3. (3)Showing the success rate and progress of different topics and the whole course. Identified what problems have low success rate.
4. (4)A temporary tracking for different situation, for example, participation of normal week and the week before midterm.
5. (5)What students usually do on the system, and how long they stay on the system.
6. (6)Able to point out the misconceptions for topics that students may have.



1. 3.UI design

## 3.1prototype

We organized the requirements into the following major functions:

- Select section

Users can select what kind of data they want to display. They can select from an overall view or just some specific areas of course studies.


Figure 3.1.1 prototype of Select section

- Statistical information

User can select what kind of statistical information they want to display


Figure 3.1.2 prototype of Statistical information

- Student select

User can select the groups they want to display. They can also select on specific student&#39;s information to display.


Figure 3.1.3 prototype of Student select

- Student progress

Showing student&#39;s progress in different color showing different percentage of completion. The group progress is showed under to give the user a view and comparison. We plan to use similar design like Mastery Grid, using different shades to display different success rate or completion rate.


Figure 3.1.4 prototype of Student progress

- Detailed information

By clicking on the topic user is interested in, the dashboard will display more detailed information.


Figure 3.1.5 prototype of Detail information

- Progress comparison

The comparison of the progress between selected student and the group can be shown in graphic.


Figure 3.1.6 Prototype of Progress comparation

- Success rate

The success rate of the selected student and the group can be shown in graphic.


Figure 3.1.7 prototype of Success rate

And the overview of the prototype is shown as below:


Figure 3.1.8 overview of the prototype(1)


Figure 3.1.9 overview of the prototype(2)

## 3.2 evaluation of the prototype

After the design of the first prototype, we made a Heuristic analysis of it. The Heuristic analysis was done in 9 aspects. Including simple and natural dialogue, speak the users&#39; language, minimize user memory load, be consistent, provide feedback, provide clearly marked exits, provide shortcuts, good error messages and prevent Errors.

3.2.1 Simple and natural dialogue

- Good Features:
  - Graph: Using graphs and images to give users a brief information.
- Problems:
  - Not natural: It shows the whole plan in just one page rather than step by step leading users focus on each preparation part according to the requirement.

3.2.2 Speak the user&#39;s language

- Good Features:
  - We use tips to explain some confused vocabulary, which will help users to obtain better experience.
  - Problems:
  - We don&#39;t have enough instructions for users, the label or some instructions are missing. Some users may get confused when they first see some features in our design.

3.2.3 Minimize user memory load

- Good Features:
  - we calculate the progress of each student and display them with graphs. Also, we add some labels ahead or above our graphs to remind users of what these graphs actually mean.

3.2.4 Be consistent

- Good Features:

-
  - For the dashboard of instructors, we design the User interface as the interface for learners, so it is consistent with previous website.

3.2.5 Provide feedback

- Good Features:
- We provide some feedback for users like grids will turn directions when mouse hovers on them or some special effect when users click on some buttons.

3.2.6 Provide clearly marked exits

- Good Features:
  - On the page of the right top, we put the login out button there, so instructors can exit as they want.
  - Problems:
  - We do not have some return buttons between different pages. It will be hard for users to return to home page to redirect to some other pages.

3.2.7 Provide shortcuts

- Good Features:
- We add some shortcut buttons in our design, so users can be redirected to some specific pages quickly.

3.2.8 good error messages

- Problems:
  - We have not designed the good or error messages for the dashboard.

3.2.9 prevent errors

- Good Features:
  - Each button are click button, so users won&#39;t select wrong for topics or students, it is easy to control.

## 3.3 improved draft

After the prototype, we discussed about it with instructors and teaching assistants. We get feedback about the good points and also about the weak points of the prototype. So we developed the improved draft as follows.

3.3.1 Changes:

- We build a page for instructor to login, with this page they can select which course they want to focus.
- We change the green button to gray to make sure users under any circumstances opening this website would not be hurt by the bright light.
- we divide our functions to different pages for instructors to view, so the page can be neat and not crowded.
- Although we still use pixels to show the performance of every subjects, we add gradual change to pixels, so instructors can see the rate of progress of each pixel.
- We add search function so that instructors can find aimed students or aimed topics more easily.
- We change the histogram to curve so it is more directly for instructors to analyze the change of spending time.
- We change some page layouts and integrate some functions together for

   better user experience.

3.3.2 UI of the improved draft


Figure 3.3.1login page of improved draft

We add some charts on our home page to provide intuitive views for teachers. These are courses teachers responsible for current semester. Teachers can click on detail button to jump to detailed pages to get more information.

Figure 3.3.2home page of improved draft

 The home page of our prototype is more similar to Mastery Grids. However, Mastery Grids is designed for students but our dashboard is designed for instructors, which means the overall information of course performance is what they will pay more attention to. So we removed the student grids from our home page and use new design instead. We defined overall grids as overall performance of all parts of all students from course ( readings, examples, quiz, coding). And below are more detailed parts of this course. But they are still performance of all students.




Figure 3.3.3topics page of improved draft




Figure 3.3.4students page of improved draft

We changed several page layouts of our original design. So much information are shown in our original design which makes the whole page crowded and it will be hard for instructors to focus on some specific information. So we separated and then integrated some functions to arrange them in a more orderly way. Also, we remove the histogram in our original design because it does not show enough meaningful information for instructors.

## 3.4 evaluation of the improved draft

| **ID** | **Content** | **Category** | **Good Feature** | **Problem** |
| --- | --- | --- | --- | --- |
| HE 1 | Graph: Using graphs and charts to give users a brief information. | Simple and natural dialogue | ╳ |   |
| HE 2 | Help button: with this page user can get instructions. | Help and Documentation | ╳ |   |
| HE 3 | With clicking on the pixels, users can get detailed data of accurate rate or degree of completion | Provide feedback | ╳ |   |
| HE 4 | We add several labels for instructors. So that they can know what graphs mean or what information they are reading. And this will reduce memory load for instructors. | Minimize user memory load | ╳ |   |
| HE 5 | Visual feedback after clicking: As a feedback method for the user, some visual representations (color and label) of the pixel change from clicking.  | Visibility of system status | ╳ |   |
| HE 6 | Selecting bar: Same bar always appears at the left side so that users can always find the exact function they need.  | Be consistent | ╳ |   |
| HE 7 | Mixed meaning: for examples, readings we use completeness to describe, however, when describing coding and quiz, we use successful rate. It may cause some trouble for users to understand the different meaning. | Be consistent |   |     ╳ |
| HE 8 | Be arranged with the order of letter: names of students and topics are all arranged with the order of letter. | Match between system and the real world |  ╳ |   |



1. 4.Technology used for front-end &amp; back-end

We basically use Html, Css and java script in our front-end. Bootstrap also plays an important role in our front-end coding.

Because some API problems and we cannot get all information we need for current APIs so we choose not to gather data from current Mastery Grids. We use data created by ourselves instead.





1. 5.System implementation overview

## 5.1 login page


Figure 5.1.1 snapshot of login page

This is a login page for instructors, users can look over the courses they teach of this semester. Through the circle, instructors can overview the performance of the whole groups of students. There exists the help button for instructors get some instruction of the dashboard. By clicking the &#39;Details&#39; button, instructors can get more detailed information about specific courses.

## 5.2 help page


Figure 5.2.1snapshot of help page

This is the help page, users can get some instructions from the page about the information introduction. Through the dashboard button, users can get back to the login page.

## 5.3 home page




Figure 5.3.1 snapshot of home page

This is a home page, the instructor can get a overview of the all performance of the students about all topics. Because topics can divide into four small subjects including reading, examples, quiz and coding, we also display the accuracy of all four subjects of each topic, and the color of each pixel is gradual changed based on the successful rate. Instructors can click on each pixel to see the exactly successful rate. We also changed the distance between grids from our former design to reduce illusion made by too close grids.

## 5.4 topics page


Figure 5.4.1 snapshot of topic page

This is the topic page. This page provides more information about topics. Instructors can get a overall view of the all topics through the overall information column. Through the usage timeline, users can see the average usage time of all students, the time will be displayed as a curve, and the X-axis is week, so instructor can analyze which week learners may use systems most. And how much time students investing to studying each week.

At the bottom, there exists four pie charts for user to view completeness of reading section, example section, quiz section and coding section.

On the left side, instructors can select students and topics, the snapshot are shown as below.


Figure 5.4.2 snapshot of topic page

From figure 5.4.2 , instructors can select which student he want to pay attention to. All students who take the topic can be select, however, instructors can only select at most three students because we don&#39;t want too much information which may draw too much attention from instructors. With the selection of students, instructors can compare the completion rate of these selected students. Also the performance of each 4 subjects can be seen on this page.

When instructors just select students without selecting topics, all information shown is based on overall topics. In this page, instructors can also select exactly topics they want to view, the graph is shown as below.


Figure 5.4.3 snapshot of topic page selecting topic

With the selection of topic, the page is changed. The four graphs of pie charts are still the completion rates of four subjects of the topic of all students, but we can have a direct view of selected students of selected topic.

In the selection side, there is an frame for instructors to search aimed topics or aimed students.

## 5.5 student page


Figure 5.5.1 snapshot of students page

This is a page for instructors to view information from student-points. In this page, instructors can select specific students from the sidebar. The page shows all details of performance of the student. For example, on the top of the page, study time by week is shown as a curve, instructors can analyze the spending time to conclude whether the student study hard all semester or just before the exam. Also the largest and the smallest spending time is marked on the curve, there is also a straight line on the graph to show average spending time of this student on Mastery Grids.

On the bottom of the page, the degree of completion is shown of all topics, instructors can click all grids to see the performance of each small subject. The color of pixel is gradual change based on the performance.

1. 6.More to improve

We finish what we planned to design of our prototype and use data visualization to show different performance of students. But we still have much to do to improve our dashboard design.

1. We do not get enough feedback from instructors. We have emailed different professors several times, but none of them replied our emails. So we have to make brainstorm of our own to design and predict what instructors want to see in the dashboard. This means we do not have enough feedback to improve our design and really meet instructors&#39; needs.
2. Because some of APIs are broken and we cannot get all the data we need from APIs provided. So we do not have accurate data of students and information and lack the process of building back-end database.
