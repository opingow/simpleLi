# SimpleLi Plugin

## A plugin to select &lt;li> elements easily.

The plugin requires an object that may contain keys:

+ option      (expect a string)
+ start_at  (expect an integer)
+ each         (expect a boolean)
+ action (expects a string)
+ order (expects a string)
+ separator (expects a string)

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

** The *every* option uses nth-child, which starts with index 1, instead of 0 **

---

#### The *start_at* key tells from which element to start the selection.

Options:

+ number (by default it is zero)

** The options *even*, *odd* and *last* ignores the start_at**

---

#### The *each* key serves to iterate separately or grab the entire collection of elements.

Options:

+ boolean (by default it is false)

---

#### The *action* key serves to specify an action to the elements selected.

Options:

+ remove
+ reverse
+ show
+ hide
+ sort_letter (sort alphabetically)
+ sort_number (sort by number)
+ sort_money  (sort by money values)

**The *sort* actions works with the option *all*.**

---

#### The *order* key serves to tell the order of the sort action.

Options:

+ asc (default)
+ desc

*It will be ignored if not used in a sort action.*
---

#### The *separator* key serves to tell which character is used to separate the decimal places in a value. 

Options:

+ string (the default is the character '.')

Ex: R$ 15,25 has separator *','* 

*It will be ignored if not used in a sort action.*

---

Examples on the index file, just clone the repo and use it. :)



