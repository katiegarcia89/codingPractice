# Six-Language Coding Practice Cheat Sheet

Quick syntax reference for solving the same interview-style problems in:

- JavaScript
- Python
- Java
- C++
- C#
- PHP

Use this as a reference when you remember the logic but forget the language syntax. Looking up syntax is normal; try to write the solution yourself before looking at a completed solution.

## Fast Comparison

| Concept | JavaScript | Python | Java | C++ | C# | PHP |
|---|---|---|---|---|---|---|
| True | `true` | `True` | `true` | `true` | `true` | `true` |
| False | `false` | `False` | `false` | `false` | `false` | `false` |
| And | `&&` | `and` | `&&` | `&&` | `&&` | `&&` |
| Or | `\|\|` | `or` | `\|\|` | `\|\|` | `\|\|` | `\|\|` |
| Not | `!value` | `not value` | `!value` | `!value` | `!value` | `!$value` |
| Equal values | `===` | `==` | `==` or `.equals()` | `==` | `==` | `===` |
| Not equal | `!==` | `!=` | `!=` or `!x.equals()` | `!=` | `!=` | `!==` |
| String length | `s.length` | `len(s)` | `s.length()` | `s.length()` | `s.Length` | `strlen($s)` |
| First character | `s[0]` | `s[0]` | `s.charAt(0)` | `s[0]` | `s[0]` | `$s[0]` |
| Comment | `//` | `#` | `//` | `//` | `//` | `//` or `#` |

## 1. JavaScript

### Run

```bash
node filename.js
```

### Variables and output

```javascript
const name = "Katie"; // cannot be reassigned
let count = 0;        // can be reassigned

console.log(name);
console.log(count);
```

`const` objects may still have their contents changed:

```javascript
const counts = {};
counts["a"] = 1; // allowed
```

### Function, condition, and loops

```javascript
function example(s) {
    if (s.length === 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }

    for (const letter of s) {
        console.log(letter);
    }

    return true;
}
```

### Arrays

```javascript
const numbers = [1, 2, 3];

numbers.push(4);
numbers.pop();

console.log(numbers.length);
console.log(numbers[0]);
```

### Object as a frequency counter

```javascript
const counts = {};

for (const letter of word) {
    if (counts[letter] === undefined) {
        counts[letter] = 1;
    } else {
        counts[letter] += 1;
    }
}
```

Shorter version:

```javascript
for (const letter of word) {
    counts[letter] = (counts[letter] || 0) + 1;
}
```

Useful checks:

```javascript
if (counts[letter] !== undefined) {
    console.log("Key exists");
}

if (!counts[letter]) {
    console.log("Missing or zero");
}
```

### Strings and sorting

```javascript
const lower = word.toLowerCase();
const characters = word.split("");
const sorted = word.split("").sort().join("");
```

## 2. Python

### Run

```bash
python3 filename.py
```

### Indentation

Python uses indentation instead of braces. A colon starts an indented block. Use four spaces per level.

```python
def example(s):
    if len(s) == 0:
        return False

    for letter in s:
        print(letter)

    return True
```

### Variables and output

```python
name = "Katie"
count = 0

print(name)
print(count)
```

### Loops

```python
for i in range(len(s)):
    print(s[i])

for letter in s:
    print(letter)

i = 0
while i < len(s):
    print(s[i])
    i += 1
```

### Lists

```python
numbers = [1, 2, 3]

numbers.append(4)
numbers.pop()

print(len(numbers))
print(numbers[0])
```

### Dictionary as a frequency counter

```python
counts = {}

for letter in word:
    if letter not in counts:
        counts[letter] = 1
    else:
        counts[letter] += 1
```

Shorter version:

```python
for letter in word:
    counts[letter] = counts.get(letter, 0) + 1
```

Useful dictionary syntax:

```python
if letter in counts:
    print("Key exists")

if letter not in counts:
    print("Key is missing")

value = counts.get(letter, 0)

for key, value in counts.items():
    print(key, value)
```

### Strings and sorting

```python
lower = word.lower()
characters = list(word)
sorted_word = "".join(sorted(word))
```

## 3. Java

### Compile and run

The filename must match the public class name.

```bash
javac Main.java
java Main
```

### Basic program

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}
```

### Function, condition, and loops

```java
public static boolean example(String s) {
    if (s.length() == 0) {
        return false;
    }

    for (int i = 0; i < s.length(); i++) {
        System.out.println(s.charAt(i));
    }

    for (char letter : s.toCharArray()) {
        System.out.println(letter);
    }

    return true;
}
```

### Arrays and ArrayList

```java
int[] numbers = {1, 2, 3};
System.out.println(numbers.length);
System.out.println(numbers[0]);
```

```java
import java.util.ArrayList;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(1);
numbers.add(2);
numbers.remove(numbers.size() - 1);

System.out.println(numbers.size());
System.out.println(numbers.get(0));
```

### HashMap as a frequency counter

```java
import java.util.HashMap;

HashMap<Character, Integer> counts = new HashMap<>();

for (char letter : word.toCharArray()) {
    if (!counts.containsKey(letter)) {
        counts.put(letter, 1);
    } else {
        counts.put(letter, counts.get(letter) + 1);
    }
}
```

Shorter version:

```java
for (char letter : word.toCharArray()) {
    counts.put(letter, counts.getOrDefault(letter, 0) + 1);
}
```

Useful HashMap syntax:

```java
counts.containsKey(letter);
counts.get(letter);
counts.put(letter, 1);
counts.remove(letter);
```

### String comparison and sorting

Use `.equals()` for string contents:

```java
if (s.equals(t)) {
    System.out.println("Equal strings");
}
```

```java
import java.util.Arrays;

char[] letters = word.toCharArray();
Arrays.sort(letters);
String sortedWord = new String(letters);
```

## 4. C++

### Compile and run

```bash
g++ filename.cpp -o program
./program
```

### Basic program

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello" << endl;
    return 0;
}
```

### Function, condition, and loops

```cpp
bool example(const string& s) {
    if (s.length() == 0) {
        return false;
    }

    for (int i = 0; i < s.length(); i++) {
        cout << s[i] << endl;
    }

    for (char letter : s) {
        cout << letter << endl;
    }

    return true;
}
```

### Vectors

```cpp
#include <vector>

vector<int> numbers = {1, 2, 3};
numbers.push_back(4);
numbers.pop_back();

cout << numbers.size() << endl;
cout << numbers[0] << endl;
```

### unordered_map as a frequency counter

```cpp
#include <unordered_map>

unordered_map<char, int> counts;

for (char letter : word) {
    if (counts.find(letter) == counts.end()) {
        counts[letter] = 1;
    } else {
        counts[letter] += 1;
    }
}
```

Shorter version:

```cpp
for (char letter : word) {
    counts[letter]++;
}
```

`counts[letter]` automatically creates a missing key with an integer value of `0`.

Useful map syntax:

```cpp
if (counts.find(letter) != counts.end()) {
    cout << "Key exists" << endl;
}

counts.erase(letter);
```

### String sorting

```cpp
#include <algorithm>

string sortedWord = word;
sort(sortedWord.begin(), sortedWord.end());
```

## 5. C#

### Run

For a .NET console project:

```bash
dotnet run
```

### Basic program

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello");
    }
}
```

### Function, condition, and loops

```csharp
static bool Example(string s)
{
    if (s.Length == 0)
    {
        return false;
    }

    for (int i = 0; i < s.Length; i++)
    {
        Console.WriteLine(s[i]);
    }

    foreach (char letter in s)
    {
        Console.WriteLine(letter);
    }

    return true;
}
```

### Arrays and List

```csharp
int[] numbers = { 1, 2, 3 };
Console.WriteLine(numbers.Length);
Console.WriteLine(numbers[0]);
```

```csharp
using System.Collections.Generic;

List<int> numbers = new List<int> { 1, 2, 3 };
numbers.Add(4);
numbers.RemoveAt(numbers.Count - 1);

Console.WriteLine(numbers.Count);
Console.WriteLine(numbers[0]);
```

### Dictionary as a frequency counter

```csharp
using System.Collections.Generic;

Dictionary<char, int> counts = new Dictionary<char, int>();

foreach (char letter in word)
{
    if (!counts.ContainsKey(letter))
    {
        counts[letter] = 1;
    }
    else
    {
        counts[letter] += 1;
    }
}
```

Useful Dictionary syntax:

```csharp
counts.ContainsKey(letter);
counts[letter] = 1;
counts.Remove(letter);

if (counts.TryGetValue(letter, out int value))
{
    Console.WriteLine(value);
}
```

### String sorting

```csharp
using System.Linq;

string sortedWord = new string(word.OrderBy(letter => letter).ToArray());
```

## 6. PHP

### Run

```bash
php filename.php
```

### Basic syntax

```php
<?php

$name = "Katie";
$count = 0;

echo $name . PHP_EOL;
echo $count . PHP_EOL;
```

PHP variables begin with `$`.

### Function, condition, and loops

```php
function example($s) {
    if (strlen($s) === 0) {
        return false;
    }

    for ($i = 0; $i < strlen($s); $i++) {
        echo $s[$i] . PHP_EOL;
    }

    foreach (str_split($s) as $letter) {
        echo $letter . PHP_EOL;
    }

    return true;
}
```

### Arrays

```php
$numbers = [1, 2, 3];

$numbers[] = 4;
array_pop($numbers);

echo count($numbers) . PHP_EOL;
echo $numbers[0] . PHP_EOL;
```

### Associative array as a frequency counter

```php
$counts = [];

foreach (str_split($word) as $letter) {
    if (!array_key_exists($letter, $counts)) {
        $counts[$letter] = 1;
    } else {
        $counts[$letter] += 1;
    }
}
```

Shorter version:

```php
foreach (str_split($word) as $letter) {
    $counts[$letter] = ($counts[$letter] ?? 0) + 1;
}
```

Useful associative-array syntax:

```php
if (array_key_exists($letter, $counts)) {
    echo "Key exists" . PHP_EOL;
}

$value = $counts[$letter] ?? 0;
unset($counts[$letter]);
```

### String sorting

```php
$letters = str_split($word);
sort($letters);
$sortedWord = implode("", $letters);
```

## Frequency-Counter Pattern Across All Six Languages

The algorithm stays the same even when the syntax changes:

1. Create an empty map/dictionary.
2. Loop through the first string.
3. Add one to the count for each character.
4. Loop through the second string.
5. Return `false` if a character is missing or has no remaining count.
6. Otherwise subtract one.
7. Return `true` after the second loop finishes.

| Language | Frequency-counter structure |
|---|---|
| JavaScript | Object `{}` or `Map` |
| Python | Dictionary `{}` |
| Java | `HashMap<Character, Integer>` |
| C++ | `unordered_map<char, int>` |
| C# | `Dictionary<char, int>` |
| PHP | Associative array `[]` |

## Scope Reminder

Temporary data for one function call usually belongs inside that function:

```javascript
function validAnagram(s, t) {
    const counts = {};
}
```

A global variable is useful when the information is intentionally shared or should persist across calls:

```javascript
let problemsAttempted = 0;
```

## Practice Method

1. Read the problem and identify the algorithm without choosing a language yet.
2. Write the solution using the syntax you remember.
3. Use this sheet only to retrieve missing syntax.
4. Run the program and read the error message.
5. Correct the code yourself when possible.
6. Ask AI to review the finished attempt.
7. Record one sentence about what you needed to look up.

Example review note:

> I remembered the frequency-counter approach but reviewed Python dictionary membership syntax and indentation.

## Official References

- [JavaScript reference - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Python tutorial](https://docs.python.org/3/tutorial/)
- [Java documentation](https://docs.oracle.com/en/java/)
- [C++ reference](https://en.cppreference.com/w/)
- [C# documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [PHP manual](https://www.php.net/manual/en/)
