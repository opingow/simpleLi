# SimpleLi Plugin

## A plugin to select &lt;li> elements easily.

The plugin requires an object that may contain keys:

+ option      (expect a string)
+ start_at  (expect an integer)
+ each         (expect a boolean)

---

#### The *option* key decides which option will be used to select the elements.

Options:

+ all
+ even
+ odd
+ only-[number]   (ex: only-2)
+ every-[number]  (ex: every-5)
+ first-[number]  (ex: first-3)
+ last-[number]   (ex: last-2)

**ATENTION:** The *every* option uses nth-child, which starts with index 1, instead of 0

---

#### The *start_at* key tells from which element to start the selection.

Options:

+ number (by default it is zero)

**ATENTION:** The options *even*, *odd* and *last* ignores the start_at

---

#### The *each* key serves to iterate separately or grab the entire collection of elements.

Options:

+ boolean (by default it is false)

---

Examples on the index file, just clone the repo and use it. :)



