print("====== number ========")
# in JAVA, Variable is a name of storage location !
# in Python, variable is named reference !

count = 100
count_type = type(count)
print(f"the count: {count} and type: {count_type}")

result1 = count.bit_count()  # method
result2 = count.numerator  # state
print(result1, result2)

print("====== string ========")
# METHODS: upper() lower() title() find() replace()

course = "AI Python Fullstack"
result = type(course)
print(f"the result (1): {result}")

result = course.title()
print(f"the result (2): {result}")

result = course.upper()
print(f"the result (3): {result}")

result = course.replace("Fullstack", "Masterclass")
print(f"the result (3): {result}")

print("======  boolean ========")
# functions > type() input() bool() int() string()
y = input("Give your vslur got y:")
print("y:", y)

result = y.isnumeric()
print(f"the input value is numeric: {result}")

# TRUTHY vs FALSY value
# TRUTHY: True 100 -100 "" "MIT" #bool
# FALSY: False 0 "" None #bool

test_falsy = "" or False or None or 100
print("the FALSY:", bool(test_falsy))

test_truthy = "" or 100 or -100
print("the TRUTHY:", bool(test_truthy))
