# resource: https://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js
# script.py
my_name = 'Wanlipa Thongsuntia'
my_age = 28 # not a lie
my_height = 164 # cm
my_weight = 54 # kg
my_eyes = 'Brown'
my_teeth = 'White'
my_hair = 'Black'

print ("Let's talk about %s." % my_name)
print ("She's %d centimeters tall." % my_height)
print ("She's %d kilograms heavy." % my_weight)
print ("Actually that's not too heavy.")
print ("She's got %s eyes and %s hair." % (my_eyes, my_hair))
print ("Her teeth are usually %s depending on the coffee." % my_teeth)

# this line is tricky, try to get it exactly right
print ("If I add %d, %d, and %d I get %d. I don't know what that means but, whatever." % (
    my_age, my_height, my_weight, my_age + my_height + my_weight))