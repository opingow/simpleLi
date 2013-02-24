# simpleLi Plugin

## A plugin to select &lt;li> elements easily.

---

The plugin requires an object that may contain keys:

+ pattern      (expect a string)
+ starting_at  (expect an integer)
+ each         (expect a boolean)

---

#### The *pattern* key decides which option will be used to select the elements.

Options:

+ all
+ even
+ odd
+ only-[number]   -> only-2
+ every-[number]  -> every-5
+ first-[number]  -> first-3
+ last-[number]   -> last-2

**ATENTION:** The every- option uses nth-child, which starts with index 1, instead of 0


#### The *starting_at* key tells from which element to start the selection.

Options:

+ number (by default it is zero)

#### The *each* key serves to iterate separately or grab the entere collection of elements.

Options:

+ boolean (by default it is false)

---

Examples on the index file, just clone the repo and use it. :)



