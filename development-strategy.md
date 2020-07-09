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
    * Collapse navigation bar (`links` to other pages or one page, `sign up`, `sign in buttons`,`tutorials`,`practice-test`,`browse-tests`, `profile`, `free sample test`, `our logo` )
    __Main Section__
    * there is a `video` tag . our app tutorial (short , and it starts automatically when the page loaded)
    * there is a `img` tag for tests. when click the photo then it goes to the test page.
    * there is another `img` tag for practical information. when it is clicked then it goes to the `practical information` page.
    * ...
    __Footer__
    * `Copyright`, `Contact` information...
    * Contact information on the home page.

Ideas about what the page should have..
- A user will know that if he wants to have full access to the sources he has to sign up. So when he enters the page he can easily see and understand that.

## 2. User Story: Sign up

A user can sign up / register online (self-registration).
in the register part we ask the user :
    - name and surname
    - mail
    - country
    - city
    - age
    - create password
    - secret question and answer to reset his password.
    - ...
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
- user can see the results of the test , his correct and incorrect answers.
- user can write comment/questions/feedback

## 8. User Story: Admin Page 

* As an admin user can see a page specialized for him.
* As an admin in the navbar there is an extra link for modifying(add,delete,change..) the sources (tutorials, articles, tests).
    - As an Expert/Admin/Administrator/Teacher user can see all statistics of the students.
        - how many registered students are there ? 
        - how much success do get the students in the tests?
    - As an Expert/Admin/Administrator/Teacher user can access the sources. 
        - Expert/Admin/Administrator/Teacher can add/update/delete exam
        - Expert/Admin/Administrator/Teacher can add/update/delete questions
        - Expert/Admin/Administrator/Teacher can add/update/delete answers
        - Expert/Admin/Administrator/Teacher can view test results
        - Expert/Admin/Administrator/Teacher can grant user to take re-exam

__FRONTEND__
* There is a `modify sources(tests and tutorial)` button , when he clicks, it goes to the another page.
    * There should be 2 `buttons` for `sources` and `tests`.
    * When `sources` clicked he goes to the sources page. there he can  see all the materials and and `add` button to add new material.
    * when he clicks the `add` button it opens `form` for uploading. in the `form` there will be `box?` for uploading pictures or videos and `text area` for text information and `input` for heading.
    * Bottom of each material(video or text) there will be `delete` button and `change` button.
    * when `delete` button clicked then first ask that `are you sure to delete this part?`(for materials)
    * When `tests` clicked he goes to the tests page. there he can see all the tests and and `add` button to add new question.
    * when he click the `add` button then it opens a `form`. in the `form` tag there is `box?` for picture uploading, there are `input`s for subquestions and answers. 
    * Bottom of each test there will be `delete` button and `change` button.
    * when `delete` button clicked then first ask that `are you sure to delete this part?` (for tests)
* There is a `statistics` button. when he clicks the button ,  user sees the statistics. (how many students are enrolled for the course, test success of students , in which courses students have difficulties,... )

__BACKEND__

* when the user `clicked` the `add` button in the sources, run `add.js` , go to `db` and add the uploaded file to the folder.(for materials)
* when the user `clicked` the `add` button in the sources, run `add.js` , go to `db` and add the uploaded file to the folder.(for tests)
* if the user allow to `delete` then run `delete.js` and access to `db` and delete that part.(for materials)
* if the user allow to `delete` then run `delete.js` and access to `db` and delete that part.(for tests)
* when the user clicked the `change` button then run `change.js` and access to `db` and change that part.(for materials)
* when the user clicked the `change` button then run `change.js` and access to `db` and change that part. (for tests)
* when the user click the `statistics` button it gets necessary information from `test` page.

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
- as a user he can see the the solution/corrections at the end of each test.
- as a user if he click any test in the `results` page , he can see the result of his test.
- as an admin he can see the average of the student success in the admin page.(optional)
- as an admin he can see the total number of the students in the admin page.(optional)

__FRONTEND__

* there are `img` tags for each  test. if user is successful in that course image has a `green` border. otherwise it has a `red` border.
* at the bottom of each `img` there are 3 `input` areas, `correct answer` , `incorrect answer` , `total question`
* each `img` has a link for the result of that test. when user click the  test then user see the correct answers of the questions.
    * there are `img` tags for each question. if it is correct answered then the image has a `green` border otherwise it has a `red` border.
    * at the bottom of the image there will be sub-questions with the correct answers.    

__BACKEND__

* to show the correct answer amount for each test, it `render` his answers with the correct answers and save this statistics to `db`.
* it gets the correct answers , user's answers , questions from `db` when the page `loaded`.
* after rendering all user answers , we compute average success of any test and save it in `db`. (optional)
* ...

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
