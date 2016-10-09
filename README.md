#Lexigram Knowlegde Graph - Search Feature

### Development Environment:

- OS: Linux - Ubutnu
- Text Editor: Sublime
- Main Browser: Chrome


### Technologies:
- HTML
- CSS (including Skeleton library)
- Handelbars
- Javascript / jQuery



### Time Line:
*Total: less than 4hours*

##### 1.studying the api and learning about lexgiram.io's style : ~30 min

my goal was to keep the branding consistent between the main website and this feature. I tried to use the same color scheme that is being used in the main website. Lexigram is using skeleton library for responsive layouts and this was my first time using this library.Therefore I spent about 15 minutes reading/learning Skeleton's guide.

##### 2.brain storming and wireframes: ~ 30 min

used [moqups](https://moqups.com/) to create wireframs ( I dont draw well! needed a good tool to create clean and clear wireframes)
![landing page WF](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/landing-wireframe.png)
![landing page](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/landing.png)
![search and compare WF](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/compare-wireframe.png)
![search and compare](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/compare.png)
![search by keywords WF](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/keyword-wireframe.png)
![search by keywords](https://github.com/Sherri010/Lexigram---KnowlegdeGraph/blob/master/wireframs/keywords.png)
##### 3. Creating basic interface and main ajax calls ~ 1 hour
  created simple forms and used jQuery's $.ajax() method to get data from the api.
  
##### 4. Creating the styled interface( including handlebars) and match that with lexigram.io style ~ 1hour & 30 min
I created separate sections for each search. The results are rendered into a table using handlebar library.
**The reason why** the result table does not disappear when switching to another search feature is to allow the user to use the retrieved info from the previous search in the next one.
**nav bar links** are not linked to any other webpages yet, it's a demonstration of how to navigation would be.

##### 5.Documentation and Optimization ~30 mins
- adding data validation for the fields
- created a separate render function to avoid DRY code.
- creating this readme file


##### 6.Future work:
If I had more time, these would be the parts I would improve:
 - responsive design specially in mobile view ( maybe show brief data about the concepts in small screens)
 - show the selected keyword and types on top the result table
 - changing the alert messages to something better
 
