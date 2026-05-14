
# M-TASK (PYTHON)

# Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
# MASALAN: palindrom_check("dad") return True;  palindrom_check("son") return False;

#  Masalaning yechimi:

def palindrom_check(a):
    qayt = a[::-1]
    result = qayt == a
    return result


print(palindrom_check("bub"))


#  ------------------------------------------------------

# K-TASK (PYTHON)

# Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
# MASALAN: find_longest("I come from Uzbekistan") return "Uzbekistan"

#  Masalaning yechimi:

# def find_longest(a):
#     b = a.split(" ")
#     uzun = ""
#     for word in b:
#         if len(word) > len(uzun):
#             uzun = word
#     return uzun


# print(find_longest("men nega buni qileppane"))


#  ------------------------------------------------------

# I-TASK (PYTHON)

# Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"

#  Masalaning yechimi:

# def get_digits(a):
#     result = [x for x in a if x.isdigit()]
#     return "".join(result)


# print(get_digits("iasubf8u23923"))  # "141"


#  ------------------------------------------------------

#  G-TASK (PYTHON)

# Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
# MASALAN: get_highest_index([5, 21, 12, 21, 8]) return qiladi 1 sonini.

#  Masalaning yechimi:

# def get_highest_index(intigers) {
#      const max = Math.max(...intigers)
#     const index = intigers.indexOf(max)
#     return index
#  }

# const result = get_highest_index([5, 21, 99, 21, 8])
# console.log("result:", result)
