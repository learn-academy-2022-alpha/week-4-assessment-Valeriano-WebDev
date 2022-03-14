# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?
                          
  Your answer:
  In React, props (short for properties) are attributes that are passed into classes / different components

  Researched answer:
  Props are read-only data that can only be passed one way, meaning from the parent to the child. It cannot be updated only manipulated. We are able to
  pass properties to children components just like we pass in arguments to functions. If we think of a save point in a video game like saving the "state"
  of the game, then we can look at transferring a weapon with different "properties" from one character to another as passing props from one component to the next.

****  Reference ****
https://dmitripavlutin.com/react-props/


2. What is a DOM event?

  Your answer: 
  A DOM Event is a user or browser initiated action which causes a code block of logic to execute.For example, adding an onClick to a button tag will
  trigger an action to occur when the user clicks the button. This could be anything from changing the background color of the webpage or adding 
  text from an input field to an unordered list.

  Researched answer:
  In the example above, adding an onClick to a button tag would be referred to as adding an event handler. The same output can be accomplished by adding 
  an event listener to an object. For example 
  button.addEventListener("click", () => {
  ** Action to be executed **
  });
  Just like the name implies, the second way, "listens" for an event to occur then executes the code. It is important to note that multiple event listeners
  are allowed while only one event handler for any given even is permittable.

****  Reference ****
https://medium.com/geekculture/event-handlers-vs-event-listeners-in-javascript-b4086b8040b0

3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  I believe object-oriented programming is a set of guidelines many developers use to ensure their code remains consistent
  throughout the entire project. OOP follows a set rubric as opposed to functional programming where there is no set standard
  as long as the end goal of a working product is achieved.

  Researched answer:
  Just like the name implies, OOP uses objects as the focal point in the manipulation of logic. The core pillars of OOP include 
  encapsulation (encapsulating or wrapping all data, so it can only be accessed within its own class.) , abstraction (ensuring of necessary data/information is exposed), inheritance (essentially like creating an instance with objects 
  or passing props from parent to child), polymorphism (multiple ways of data manipulation to attain the same end result)

****  Reference ****
https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/

4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
  In Ruby an integer is a whole number while a float is a fractional number or a decimal number. 

  Researched answer:
  Floats and integers fall under the parent class Numeric. Ihe integer class contains two subclasses fixnum and bignum (larger whole numbers).
  Floats are also known as imprecise decimal numbers, while the BigDecimal class is used for precise decimal numbers.

****  Reference ****
https://www.rubyguides.com/2016/07/numbers-in-ruby/

5. Ruby has an implicit return. What does that mean?

  Your answer:
  I believe implicit return in Ruby, means that an output of a method is expected without the need to declare a return. 

  Researched answer:
  Without an explicitly declared return and expected output, functions in Javascript will fail to execute correctly . In Ruby, 
  a return is 'implied'. Meaning that the output will be the value of the evaluated method. The following example illustrates this concept
  
** JS **
const onePlusTwo = () => {
  return  1 + 2
}

** Ruby **
def one_plus_two
1 + 2
end


****  Reference ****
https://dev.to/ting682/implicit-vs-explicit-returns-14j5

## Looking Ahead: Terms for Next Week

1. Instance Variable: 
   An instance variable is a variable defined with @ which stores data, more specifically attributes.
   https://www.rubyguides.com/2019/07/ruby-instance-variables/

2. PostgreSQL:
   Is an open-sourced system used to manage databases , derived from the Ingres database management system.
   
3. Ruby on Rails:
  While React is a JS based framework focused on the View component of a web-page. Ruby on rails is a framework
   written in Ruby that encompasses the entire (MVC) model, view and controller aspect of an app. One can dynamically combine HTML, CSS and 
   JS while also incorporating the usage of databases to build projects with cover all aspects of MVC.

4. ORM:
   Stands for Object-relational mapping. It is a way to manipulate and incorporate data from other languages to  utilize 
   and display. Essentially linking back-end data with front-end logic.

5. Active Record:
   Allows for users to manipulate and utilize the information from databases using a standard format across 
   all the various management systems.
