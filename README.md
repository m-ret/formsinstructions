# formsinstructions
Register and Contact form

## Register form steps:

You may find the html here: HTML for Register Form

1 - That HTML should be paste it in the body of the register form. Make it fit.

2 - As we suppose to be using Bootstrap, most of the styles are going to adapt themselves to the template. 

3 - You should take care of the button’s style and the other elements which doesn’t look good in order to make it look like according to the template you are using.

4 - Not all templates comes with a pricing table, so in case you need one, check the HTML for Register Form and abstract the one in it which starts in the line 149 like this <section id="pricing-section" class="pricing-section"> and ends in the line 268, then copy and paste this CSS in a CSS file CSS for the Pricing Table in order to stylish it.

5 - In case that the template comes with a pricing table: Remember that when the pricing table is on the register.html, you should change its buttons and place checkboxes instead, remember to change its values to the ones offered by the plan. For example:

<label class="btn">
	<input type="checkbox" name="plan" value="Hourly"> Hourly
</label>

In this case the plan above offers an hourly rate. But if the plan offers a 75$/Monthly Rate, then it should be:

<label class="btn">
	<input type="checkbox" name="plan" value="75Monthly"> 75 $ / Mo
</label>

Or something that reflects the real value of the plan. PLEASE DO NOT CHANGE THE NAME ATTRIBUTE.

6 - You will see this at the end of the html for the register form: <img src="images/cc_logos.png" alt="Cards Logo">
It will only display the alt=”” attribute and not the image, since you have to look for the image of the credit cards on Google or at any other project.

7 - Let’s move to the code that you may find here JS General Code:
For now focus on the code starting in the line 46 and ending in the 146 which is the proper code for the register code. Later I will explain what the rest of the code does.

8 — Please, do not change any of the ids either the name attributes of the inputs, textareas, checkboxes and buttons.

9 - The point 8 is merely because everything in those lines of code is already generic in order to work with the current register form.

10 - In the line 110 of the JS General Code you may see window.location.href = 'confirmation.html'; this is because if everything went fine with the registration, then the user will be redirected to a confirmation page which you should create, and put this in its body/content: Confirmation Page HTML.

11 - In order for this to work I have created a PHP file which works in the backend and connects the backend with the server in order to return an email to the user once the registration went through. Here is: Register PHP. If you properly follow the steps above, everything is going to be fine.
