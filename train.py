
# I-TASK (PYTHON)

# Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"

#  Masalaning yechimi:

def get_digits(a):
    result = [x for x in a if x.isdigit()]
    return "".join(result)


print(get_digits("iasubf8u23923"))  # "141"


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
