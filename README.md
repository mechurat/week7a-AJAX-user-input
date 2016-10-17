# Parsing
## Model / View / Controller

## Body Parser
* This is a middleware that parses encoded URL

Puts all of the form into the body

## User interacting with database
### 2 Approaches
#### HTML Form submission

Submits and creates a new page

Makes an action so using it will create a new page

Has an input with a key value PAIR

Has a Submit button to post request

See SLIDES for tutorial and formatting

SEE: new-pets.handlebars in /views for example

#### AJAX

Can do AJAX without reloading the page

JQuery makes it nicer

Provide method and URL, followed by data and key-value pairs

Submission function for callback

#### Slugs
Use Mongoose slug plugins using 'mongoose-url-slugs'

CMD: In your directory with package.json, use: 
* npm install mongoose-url-slug

See Slides and models/pet.js for example of utilization

## Uploads
Every form has an "enctype"

This goes in the form creation. See /views/new-pet.handlebars

