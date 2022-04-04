# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN
#Matz is nice so we are nice ;)
# --------------------1) Create a method that takes in a number and determines if the number is even or odd.
# Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_or_odd(num)
  if num % 2 == 0
    p "#{num} is even"
  else
    p "#{num} is odd"
  end
end

even_or_odd 7
even_or_odd 42
even_or_odd 221

# -------------------2) Create a method that takes in a string and removes all the vowels from the string.
# Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def delete_vowel(str)
  p str.delete 'aeiouAEIOU'
end

delete_vowel 'Rubber Soul'
delete_vowel 'Sgt Pepper'
delete_vowel 'Abbey Road'

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome.
# A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome(str)
  if str == str.reverse
    p "#{str} is a palindrome"
  else
    p "#{str} is not a palindrome"
  end
end

is_palindrome 'racecar'
is_palindrome 'LEARN'
is_palindrome 'Rotator'

