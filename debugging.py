''' Packages & Debugging
    (1) Python Packages & Core Package 
    (2) Package Manager & External Package
    (3) Debugging
'''

from PIL import Image
import turtle
print("===== Python Packages & Core Package =====")
'''Python Packages/Modules: Core, File and External'''
# Core Packages > https://docs.python.org/3/library


# Core Package
t = turtle.Turtle()
t.shape("turtle")
t.speed(2)
t.circle(150)
turtle.done

print("-----")
my_file = open("Material/message.txt", "r")
try:
    content = my_file.read()
    print("context:", content)
finally:
    my_file.close()

# with
with open("Material/message.txt", "r") as your_file:
    your_content = your_file.read()
    print("your_content:", your_content)

print('DONE')


print("===== Package Manager & External Package =====")
''' Package Managers
    Python > pip pipenv
    Node.js > npm yarn
    PHP > composer
    MacOS > brew
'''
# External Package > https://pypi.org/

with Image.open("material/lego.png") as img_obj:
    resized_img = img_obj.resize((200, 200))
    resized_img.show()
    resized_img.save("Material/sample.png")

print("===== Debugging =====")


def get_summary(*args):  # DEFINE
    total_amount = 0
    for a in args:
        total_amount += a
        return total_amount  # solved  the bug via debbuging


# CALL
test = 100
result = get_summary(1, 2, 3, 4, 5)  # CALL
print("result:", result)
