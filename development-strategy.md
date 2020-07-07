#  Driving Licence App: Development Strategy

Building this app one step at a time.

## 0. Setup

* Filled-out [planning document](https://cloud.openknowledge.be/s/Zq54xpbkNxE5aZc)
* Define first communication plan.
* Set up the starter project.
    * Identify the main repository owner.
    * Add each other as collaborators.
    * Set up the project board.
* Fork the [organized-for-deployment](https://github.com/HackYourFutureBelgium/organized-for-deployment).
* Make a search about app and think on the samples.
* Define user stories.
* Write a first-draft development strategy.
* Deploy the starter code.
* Update `readme.md`
* Begin planning the data tables for the application.
* Update existing files according to requirements.
* Create issues, assign issues, create milestones and labels.
* Begin wireframing

## 1. User Story: Home Page - Overview

A user can overview a sample tutorial, and can see overview of the page
*** This user story can be divided into pieces as Header, Main Section Footer or Contact page, About page...
labels: `init`, `view`, `style`, `frontend`

__FRONTEND__
* Create `init.js` to declare home page for initialization.
* Render UI. Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method and use it for rendering/initializing.
* Create `style.css`, use bootstrap. (this section will be updated)
* Home page needs
    * Responsive website
    __Header__
    * Collapse navigation bar (`links` to other pages or one page, `sign up`, `sign in buttons`,`tutorials`,`practice-test`,`browse-tests`, `profile`)
    __Main Section__
    * ...
    __Footer__
    * `Copyright`, `Contact` information...
    * Contact information on the home page.

Ideas about what the page should have..
- A user will know that if he wants to have full access to the sources he has to sign up. So when he enters the page he can easily see and understand that.

## 2. User Story: Sign up

A user can sign up / register online (self-registration).

labels: `frontend`, `view`, `style`, `backend`, `route`

__FRONTEND__
* Create an interface for user to sign up.
* Render UI. When user clicks `sign up button` it will be `render`ed.  Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.

__BACKEND__
* Access to `db`... Write new user to `db`.
* Build `route`. Send confirmation/error `response` (`Successfully signed up`).
* Open `welcome page`.

## 3. User Story: Login

A user can login.

labels: `frontend`, `view`, `style`, `backend`, `route`

__FRONTEND__
* Create an interface for user to login.
* Render UI. When user clicks `login button` it will be `render`ed.  Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.

__BACKEND__
* Access to `db`... Check the user if exists or not.
* Write table user as online.
*  Build `route`. Send confirmation/error `response` (`Successfully signed in`).

## 4. User Story: Logout

A user can logout.

labels: `frontend`, `view`, `style`, `backend`, `route`

__FRONTEND__
* Render UI. When user clicks `logout button` it will be `render`ed.  Create/work on `view.js`, create/work on a class named `UI`, create/work on `render` method.
* `User name` `div` `text` will be changed as `blank('')`.

__BACKEND__
* Access to `db`... Check the user if exists or not.
==>>  * Write table user as offline.
*  Build `route`. Send confirmation/error `response`.

## 5. User Story: Recover/Reset Password

* If a user forget his/her password he can recover/reset his password (he will be asked some special questions to reset).

## 6. User Story: Reset Password

* If a user successfully signs in, he can go to his home page by clicking his name.

## 7. User Story: User Page 

* As an registered user can see a page specialized for him after logged in.

Ideas about what the page should have..
- user can get reading materials/resources.
- user can take practice test
- user can enroll for test
- user can take exam
- user can write comment/questions/feedback

## 8. User Story: Admin Page 

* As an admin user can see a page specialized for him.

Ideas about what the page should have..
- As an Expert/Admin/Administrator/Teacher user can see all statistics of the students.
- how many registered students are there ? 
- how much success do get the students in the tests?
- in the administrator page there will be 2 parts. one is for access the sources. So he can add , change or delete. The other for the statistics of the students.
- Expert/Admin/Administrator/Teacher can add/update/delete exam
- Expert/Admin/Administrator/Teacher can add/update/delete questions
- Expert/Admin/Administrator/Teacher can add/update/delete answers
- Expert/Admin/Administrator/Teacher can view test results
- Expert/Admin/Administrator/Teacher can grant user to take re-exam

## 9. User Story: Test Page

* As an registered user can reach tests.

Ideas about what the page should have..
- when a user click for the tests he can see all the tests title.
- when a user click for the tests he can see his result for any test separately.
- when a user click a test to solve he can see only one question in main section and he can see all the question in the side bar. So he can easily jump any question he wants.
- if a user don't finish the test and later he wants to solve remaining questions, the test will continue where he stopt.
- user can take driving practice test
- user can apply for theory test online
- user can get his candidate number to take the online test
- user can take online theory test
- user can take re-exam(re-test)

## 10. User Story: Results

* A registered user can reach his results/scores.

Ideas about what the page should have..
- a user can see test result at the end of each  test and he can also see his wrong questions with the correct answers. 
- user can view his result after he complete the test
- user can see the solution/corrections

## 11. User Story: Tutorials

* A registered user can see tutorials.

## 12. User Story: Comments

* A registered user can add comment and see all the comments.
* A registered user with admin/expert role can reply to comment/feedbacks.
Ideas about what the page should have..
- user can post comment, question, feedback

## 13. User Story: Add Tutorial Materials

* A registered user with admin/expert role can add practice test questions and tutorials.

## 14. User Story: Update Tutorial Materials

* A registered user with admin/expert role can update practice test questions and tutorials.

## 15. User Story: Delete Tutorial Materials

* A registered user with admin/expert role can delete practice test questions and tutorials.


## 16. Testing

* Be sure all app sections works properly. Making sure your deployed app works for the live demo.

## 17. Deploying App

* Deploy app to make it online and accessible for the users. Use `Heroku` or another method.

## 18. Complete readme.md

* Complete readme.md for more details about the app.

Ideas about what the page should have..
- Contributions,
- All the contact infos about team members.
- ! This section can be updated always to make a perfect readme.

## 19. Presentation

* Preparing a presentation where everyone in the team will speak.

## 20. Video

* A short video add for the project.
