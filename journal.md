Phase 1 
What did you accomplish in this phase? In your own words, what is the difference between the Pet class itself and an “instance” of that class?

I successfully created a Pet class with a describe() method, instantiated two separate pets, and logged their output to the console. The Pet class is a blueprint, which means it will define how pets are built, whereas an instance of the class will be a specific object created from the blueprint. I like ot think of the class as a cookie cutter and the instance as the individual cookies created from the cookie cutter. 




Phase 2 
What was the process of connecting your JavaScript class method to an HTML button? What part of the DOM manipulation felt most intuitive, and what part was confusing?

To connect my JavaScript object to the HTML page, I used document.getElementById() to reference the elements. Then, I added a click listener to the button so that when clicked, it triggers the pet's method and updates the text displayed on the screen.

Targeting the elements felt intuitive because it reads like natural instructions. Syncing the JavaScript data to update the webpage was a bit confusing at first, but with the hint to use .textContent, I was able to get it working.




Phase 3 
How did your mental model change when moving from a single static pet to a dynamic list of pet objects? How does the Pet class make it easier to handle multiple pets compared to creating individual objects manually?

My mental model switched from a hardcoded object to a reusable blueprint. Instead of focusing on one specific variable at a time, I shifted to thinking about the overall rules that govern each pet. 

The Pet class makes organizing the program much easier than manually tracking individual objects. It provides encapsulation, allowing the feed() method to target a specific pet instance independently.

