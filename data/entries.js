// STAT 2102 study guide data. Replace this file with the one you download from the site.
window.ENTRIES_SAVED = "2026-10-15T18:30:00Z";
window.ENTRIES = {
 "hw-01": {
  "type": "hw",
  "num": "01",
  "title": "Vectors, lists, data frames, loops and functions",
  "date": "2026-09-27",
  "exams": [],
  "topics": [
   "vectors",
   "lists",
   "data frames",
   "factors",
   "for loops",
   "while loops",
   "functions"
  ],
  "pdfs": [
   {
    "name": "Homework Assignment 1.pdf",
    "size": 126764,
    "type": "application/pdf"
   },
   {
    "name": "Homework 1 Solutions.pdf",
    "size": 264428,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "c075",
    "label": "Problem 1 [7pt] · Part 1 · Create vectors containing {2.5, 4.5, 6.5, 8.5, 10.5, 12.5,…",
    "code": "vector1 <- c(2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5)\nvector1\n#> [1]  2.5  4.5  6.5  8.5 10.5 12.5 14.5\nvector2 <- seq(2.5, 14.5, by = 2)\nvector2\n#> [1]  2.5  4.5  6.5  8.5 10.5 12.5 14.5\nvector3 <- seq(2.5, 14.5, length.out = 7)\nvector3\n#> [1]  2.5  4.5  6.5  8.5 10.5 12.5 14.5",
    "comment": "**Three ways to make the same vector**\n\n- `c()` types every value out.\n- `seq(from, to, by = 2)` sets the **step size**; R works out how many values that takes.\n- `seq(from, to, length.out = 7)` sets **how many values**; R works out the step.\n\nAll three give `2.5 4.5 6.5 8.5 10.5 12.5 14.5`. Use `by` when you know the gap and `length.out` when you know the count.",
    "key": false,
    "question": "Create vectors containing {2.5, 4.5, 6.5, 8.5, 10.5, 12.5, 14.5} elements in three different ways, using the following functions: c(), seq() with the by argument, and seq() with the length.out argument. Name them vector1, vector2, and vector3, respectively."
   },
   {
    "id": "c076",
    "label": "Problem 1 [7pt] · Part 2 · Append four additional elements to vector2: 10, 20, 30, and…",
    "code": "vector2 <- append(vector2, 10, after = 1)\nvector2 <- append(vector2, 20, after = 0)\nvector2 <- append(vector2, 30, after = 6)\nvector2 <- append(vector2, 40)\nvector2\n#>  [1] 20.0  2.5 10.0  4.5  6.5  8.5 30.0 10.5 12.5 14.5 40.0",
    "comment": "**How `append()` positions work**\n\n`append(x, value, after = k)` puts the value **right after position k**, so it lands in position k + 1. `after = 0` puts it first; leaving `after` out puts it last.\n\nThe order matters because each line changes `vector2` before the next one runs:\n1. `after = 1`: 10 becomes the 2nd element.\n2. `after = 0`: 20 goes to the front, pushing everything (including 10) one spot right.\n3. `after = 6`: 30 becomes the 7th element of the now-longer vector.\n4. No `after`: 40 goes on the end.\n\nCorrect result: `20.0 2.5 10.0 4.5 6.5 8.5 30.0 10.5 12.5 14.5 40.0` (11 numbers).\n\n**If your numbers repeat:** you ran these lines more than once. Each `append` builds on whatever `vector2` is *now*, so re-running adds 10, 20, 30, 40 again (the Environment pane shows `vector2` longer than `num [1:11]`, e.g. `[1:15]` after one extra run). Fix: reset with `vector2 <- seq(2.5, 14.5, by = 2)`, then run the chunk once. Better: put that reset line at the top of this chunk. Before handing in, use **Session → Restart R**, then **Run → Run All**.",
    "key": false,
    "question": "Append four additional elements to vector2: 10, 20, 30, and 40. Ensure that 10 becomes the second element in the updated vector2, 20 is the first element considering that 10 has been already added, 30 occupies the 7th position given the presence of 10 and 20, and 40 is positioned as the last element after including all the other numbers."
   },
   {
    "id": "c077",
    "label": "Problem 1 [7pt] · Part 3 · Form a new vector encompassing {2, 3, 6, 10, 15, 18, 22, 25,…",
    "code": "vector4 <- c(2, 3, 6, 10, 15, 18, 22, 25, 27, 30, 31, 35, 42)\nvector4\n#>  [1]  2  3  6 10 15 18 22 25 27 30 31 35 42\nvector5 <- vector4[vector4 > 15 & vector4 %% 2 != 0]\nvector5\n#> [1] 25 27 31 35\n27 %in% vector5\n#> [1] TRUE",
    "comment": "**Filtering a vector with two conditions**\n\n`vector4[vector4 > 15 & vector4 %% 2 != 0]` reads as \"keep values greater than 15 **and** with a remainder when divided by 2\" (odd numbers). Result: `25 27 31 35`.\n\n- `%%` is the remainder: `x %% 2 != 0` means odd, `x %% 2 == 0` means even.\n- `&` needs both conditions TRUE.\n- `27 %in% vector5` asks \"is 27 anywhere in vector5?\" and returns a single TRUE/FALSE.",
    "key": false,
    "question": "Form a new vector encompassing {2, 3, 6, 10, 15, 18, 22, 25, 27, 30, 31, 35, 42} elements and label it vector4. Extract elements greater than 15 and not divisible by 2 through a logical statement, generating a new vector named vector5. Verify the presence of the number 27 within vector5 using a logical operator."
   },
   {
    "id": "c078",
    "label": "Problem 2 [9pt] · Part 1 · Create a list listX with the following elements:",
    "code": "listX <- list(\n  \"Data Science\",\n  100,\n  c(-3, 0, 3, 6),\n  TRUE,\n  list(c(\"A\", \"B\", \"C\"), c(2.5, 5.5, 7.5))\n)\nlistX\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 100\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5",
    "comment": "**A list can hold anything, including another list**\n\n`listX` has 5 elements of different types: text, a number, a vector, a logical, and a **sublist** (`list(c(\"A\",\"B\",\"C\"), c(2.5,5.5,7.5))`).\n\nThat's the point of a list: vectors must be all one type, lists don't. To reach the \"B\" inside the sublist you'd go two levels deep: `listX[[5]][[1]][2]`.",
    "key": false,
    "question": "Create a list listX with the following elements:\n• A character string “Data Science”\n• A numeric value 100\n• A vector {-3, 0, 3, 6}\n• A logical value TRUE\n• A sublist containing vectors {“A”, “B”, “C”} and {2.5, 5.5, 7.5}"
   },
   {
    "id": "c079",
    "label": "Problem 2 [9pt] · Part 2 · Extract the third element of listX and assign it to vector6.",
    "code": "vector6 <- listX[[3]]\nvector6\n#> [1] -3  0  3  6",
    "comment": "**Why double brackets here**\n\nThe question says to extract the third element and **assign it to vector6**, so `vector6` should be the vector `-3 0 3 6` itself. Only `[[ ]]` gives you that.\n\nThink of a list as a train and each element as a car with cargo inside:\n- `listX[3]` (**single**) unhooks car 3 and gives you a **smaller train** with one car. It's still a list.\n- `listX[[3]]` (**double**) opens car 3 and gives you **the cargo**: the numeric vector.\n\n| | `listX[3]` | `listX[[3]]` |\n|---|---|---|\n| `class()` | `\"list\"` | `\"numeric\"` |\n| `length()` | 1 (one element) | 4 (four numbers) |\n| Prints as | `[[1]]` then `[1] -3 0 3 6` | `[1] -3 0 3 6` |\n| `mean()` | `NA` with a warning | `1.5` |\n| `+ 1` | Error: non-numeric argument | `-2 1 4 7` |\n\nSo with single brackets, `vector6` would be a list and any math on it fails.\n\n**When to use single brackets `[ ]` on a list:** when you want to keep it a list, usually because you're taking **more than one** element:\n- `listX[c(1, 3)]` gives a new list with elements 1 and 3. (`listX[[c(1, 3)]]` does **not** do this; it gives an error.)\n- `listX[-5]` gives the list without element 5.\n\n**After `[[ ]]`, use single brackets inside the vector:** `listX[[3]][2]` gives `0`, the 2nd number. Single brackets on a plain vector already return the value.\n\n**Rule:** `[[ ]]` for one element to work with; `[ ]` to keep a smaller list.",
    "key": false,
    "question": "Extract the third element of listX and assign it to vector6."
   },
   {
    "id": "c080",
    "label": "Problem 2 [9pt] · Part 3 · Convert listX into a single vector using unlist(). Explain…",
    "code": "unlist(listX)\n#>  [1] \"Data Science\" \"100\"          \"-3\"           \"0\"            \"3\"\n#>  [6] \"6\"            \"TRUE\"         \"A\"            \"B\"            \"C\"\n#> [11] \"2.5\"          \"5.5\"          \"7.5\"\n# By applying unlist() to listX, we obtain a character vector. From the R documentation for unlist():\n# Given a list structure x, unlist() simplifies it to produce a vector which contains all the atomic\n# components which occur in x. Where possible the list elements are coerced to a common mode\n# during the unlisting, and so the result often ends up as a character vector. Vectors will be coerced\n# to the highest type of the components in the hierarchy:\n#>      NULL<  raw< logical < integer < double < complex< character < list < expression\n# Under the above hierarchy, the highest data type of an atomic element inside listX is “character”, so all\n# other elements are coerced to be of class “character” as well. The result thus becomes a character vector.",
    "comment": "**Why everything turns into text**\n\n`unlist()` flattens the list into **one vector**, and a vector can only hold one type. R picks the most general type present and converts everything to it:\n\nlogical < integer < double < character\n\n`listX` contains text (\"Data Science\", \"A\"...), so **all** values become character: `100` becomes `\"100\"` and `TRUE` becomes `\"TRUE\"`. That's what the question means by explaining the structure.",
    "key": false,
    "question": "Convert listX into a single vector using unlist(). Explain why the resulting structure appears as it does."
   },
   {
    "id": "c081",
    "label": "Problem 2 [9pt] · Part 4 · Modify listX by replacing the second element with a new…",
    "code": "listX[[2]] <- 200\nlistX\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 200\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5",
    "comment": "**Replacing a list element**\n\n`listX[[2]] <- 200` overwrites the 2nd element (100 becomes 200). Use `[[ ]]` on the left side to change one element. The list keeps the same length; only that value changes.",
    "key": false,
    "question": "Modify listX by replacing the second element with a new value: 200."
   },
   {
    "id": "c082",
    "label": "Problem 2 [9pt] · Part 5 · Create a new list listY by merging listXwith another list…",
    "code": "listY <- c(listX, list(\"Statistics\", 50, FALSE))\nlistY\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 200\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5\n#> [[6]]\n#> [1] \"Statistics\"\n#> [[7]]\n#> [1] 50\n#> [[8]]\n#> [1] FALSE\n# The structure of listY differs from that of listX in that it is longer by 3 elements.",
    "comment": "**`c()` merges lists**\n\n`c(listX, list(\"Statistics\", 50, FALSE))` lays the 3 new elements on the end of `listX`, so `listY` has 5 + 3 = **8** elements. `listX` itself is unchanged.\n\nIf you used `list(listX, ...)` instead, you'd get a list of 2 nested lists, not 8 elements (see Recitation 1, Problem 2 Part 10).",
    "key": false,
    "question": "Create a new list listY by merging listXwith another list containing “Statistics”, 50, and FALSE. Compare the structures of listX and listY."
   },
   {
    "id": "c083",
    "label": "Problem 3 [9pt] · Part 1 · Create a data frame dfA with the following variables:",
    "code": "Team <- c(\"Alpha\", \"Beta\", \"Gamma\", \"Delta\", \"Epsilon\",\n          \"Beta\", \"Alpha\", \"Gamma\", \"Delta\", \"Epsilon\")\nRole <- c(\"Analyst\", \"Manager\", \"Developer\", \"Analyst\", \"Manager\",\n          \"Developer\", \"Analyst\", \"Manager\", \"Developer\", \"Analyst\")\nScore <- c(82, 90, 75, 88, 79, 95, 80, 85, 76, 89)\nCertified <- c(\"Yes\", \"No\", \"Yes\", \"No\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\", \"Yes\")\nExperience <- c(3, 5, 7, 2, 6, 8, 4, 3, 5, 9)\ndfA <- data.frame(Team, Role, Score, Certified, Experience)\ndfA\n#>       Team      Role Score Certified Experience\n#> 1    Alpha   Analyst    82       Yes          3\n#> 2     Beta   Manager    90        No          5\n#> 3    Gamma Developer    75       Yes          7\n#> 4    Delta   Analyst    88        No          2\n#> 5  Epsilon   Manager    79       Yes          6\n#> 6     Beta Developer    95       Yes          8\n#> 7    Alpha   Analyst    80        No          4\n#> 8    Gamma   Manager    85       Yes          3\n#> 9    Delta Developer    76        No          5\n#> 10 Epsilon   Analyst    89       Yes          9",
    "comment": "**Building a data frame from vectors**\n\nMake one vector per column, then `data.frame(Team, Role, Score, Certified, Experience)`. The vector names become the column names.\n\nEvery vector must have the **same length** (10 here), or R gives an error. Each position is one row: Team[1], Role[1], Score[1]... all describe the first person.",
    "key": false,
    "question": "Create a data frame dfA with the following variables:\n• Team - {“Alpha”, “Beta”, “Gamma”, “Delta”, “Epsilon”, “Beta”, “Alpha”, “Gamma”, “Delta”, “Epsilon”}\n• Role - {“Analyst”, “Manager”, “Developer”, “Analyst”, “Manager”, “Developer”, “Analyst”, “Manager”, “Developer”, “Analyst”}\n• Score - {82, 90, 75, 88, 79, 95, 80, 85, 76, 89}\n• Certified - {“Yes”, “No”, “Yes”, “No”, “Yes”, “Yes”, “No”, “Yes”, “No”, “Yes”}\n• Experience - {3, 5, 7, 2, 6, 8, 4, 3, 5, 9}"
   },
   {
    "id": "c084",
    "label": "Problem 3 [9pt] · Part 2 · Compute summary statistics for the Score variable.",
    "code": "summary(dfA$Score)\n#>    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.\n#>   75.00   79.25   83.50   83.90   88.75   95.00",
    "comment": "**`summary()` on a numeric column**\n\n`summary(dfA$Score)` gives six numbers: Min, 1st Quartile (25%), Median, Mean, 3rd Quartile (75%), Max.\n\nUse `$` to pick the one column. `summary(dfA)` would summarize every column at once.",
    "key": false,
    "question": "Compute summary statistics for the Score variable."
   },
   {
    "id": "c085",
    "label": "Problem 3 [9pt] · Part 3 · Convert Certified into a factor if it is not already. Display…",
    "code": "dfA$Certified <- factor(dfA$Certified)\ndfA$Certified\n#>  [1] Yes No  Yes No  Yes Yes No  Yes No  Yes\n#> Levels: No Yes\n# NOTE: The function as.factor() also works here:\ndfA$Certified <- as.factor(dfA$Certified)\ndfA$Certified\n#>  [1] Yes No  Yes No  Yes Yes No  Yes No  Yes\n#> Levels: No Yes\ntable(dfA$Certified)\n#>  No Yes\n#>   4   6",
    "comment": "**Factors and frequency tables**\n\n`factor()` (or `as.factor()`) turns the text \"Yes\"/\"No\" into a categorical variable with **levels**. Printing it shows `Levels: No Yes`, in alphabetical order by default.\n\n`table(dfA$Certified)` counts how many of each level. That's the \"frequency table\" the question asks for.\n\nIf you read the data with `read.csv(..., stringsAsFactors = TRUE)`, text columns are already factors.",
    "key": false,
    "question": "Convert Certified into a factor if it is not already. Display the frequency table of its values."
   },
   {
    "id": "c086",
    "label": "Problem 3 [9pt] · Part 4 · Add a new column High_Performer, which is TRUE if Score is…",
    "code": "dfA$High_Performer <- dfA$Score > 85 & dfA$Experience > 4\ndfA$High_Performer\n#>  [1] FALSE  TRUE FALSE FALSE FALSE  TRUE FALSE FALSE FALSE  TRUE\n# NOTE: Your first instinct might be to use ifelse() for this question, like so:\ndfA$High_Performer <- ifelse(dfA$Score > 85 & dfA$Experience > 4, TRUE, FALSE)\n# This is not incorrect. However, using ifelse() is redundant if you want to create a logical vector (i.e. a\n# vector containing TRUE and FALSE values) – so instead of writing x <- ifelse(condition, TRUE, FALSE)\n# you can just write x <- condition.",
    "comment": "**A TRUE/FALSE column without `ifelse()`**\n\n`dfA$Score > 85 & dfA$Experience > 4` checks both conditions for every row at once and returns one TRUE/FALSE per row, which becomes the new column.\n\n`ifelse(condition, TRUE, FALSE)` gives the same thing but is redundant. Use `ifelse()` only when you want other labels, like `\"High\"` / `\"Not high\"`. Note it's `>` (more than) for both, so a score of exactly 85 is FALSE.",
    "key": false,
    "question": "Add a new column High_Performer, which is TRUE if Score is greater than 85 and Experience is more than 4, otherwise FALSE."
   },
   {
    "id": "c087",
    "label": "Problem 3 [9pt] · Part 5 · Extract all employees who belong to the “Gamma” team and are…",
    "code": "dfA[dfA$Team == \"Gamma\" & dfA$Certified == \"Yes\", ]\n#>    Team      Role Score Certified Experience High_Performer\n#> 3 Gamma Developer    75       Yes          7          FALSE\n#> 8 Gamma   Manager    85       Yes          3          FALSE\n# Solution #2 (using the subset() function)\nsubset(dfA, Team == \"Gamma\" & Certified == \"Yes\")\n#>    Team      Role Score Certified Experience High_Performer\n#> 3 Gamma Developer    75       Yes          7          FALSE\n#> 8 Gamma   Manager    85       Yes          3          FALSE",
    "comment": "**Filtering rows of a data frame**\n\n`dfA[dfA$Team == \"Gamma\" & dfA$Certified == \"Yes\", ]`\n- The condition goes **before** the comma (it picks rows).\n- Nothing after the comma means keep **all columns**.\n- Use `==` to compare (a single `=` is assignment), and the text must match exactly, capitals included.\n\n`subset(dfA, Team == \"Gamma\" & Certified == \"Yes\")` does the same and lets you skip the `dfA$`.",
    "key": false,
    "question": "Extract all employees who belong to the “Gamma” team and are certified."
   },
   {
    "id": "c088",
    "label": "Problem 4 [9pt] · Part 1 · Generate a matrix named matrix1 with 5 columns, filled…",
    "code": "elements <- c(10, 3, 6, 23, -5, -4, 13, 17, 5, 6, -7, -10,\n              13, 39, 20, 2, 1, 9, 11, -22, 23, -15, -3, 6, 12)\nmatrix1 <- matrix(elements, ncol = 5, byrow = TRUE)\nmatrix1\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]   10    3    6   23   -5\n#> [2,]   -4   13   17    5    6\n#> [3,]   -7  -10   13   39   20\n#> [4,]    2    1    9   11  -22\n#> [5,]   23  -15   -3    6   12",
    "comment": "**Making a matrix row by row**\n\n`matrix(elements, ncol = 5, byrow = TRUE)` fills across each row first. 25 values with 5 columns gives 5 rows automatically.\n\nWithout `byrow = TRUE`, R fills **down the columns** first and the numbers end up in different places. Always check the first row matches the first 5 numbers in the question.",
    "key": false,
    "question": "Generate a matrix named matrix1 with 5 columns, filled row-wise with the elements: 10, 3, 6, 23, -5, -4, 13, 17, 5, 6, -7, -10, 13, 39, 20, 2, 1, 9, 11, -22, 23, -15, -3, 6, 12."
   },
   {
    "id": "c089",
    "label": "Problem 4 [9pt] · Part 2 · Employ a for loop to update the elements of matrix1 according…",
    "code": "for (i in 1:nrow(matrix1)) {\n  for (j in 1:ncol(matrix1)) {\n    if (matrix1[i, j] < 0) {\n      matrix1[i, j] <- 0\n    } else if (matrix1[i, j] >= 0 & matrix1[i, j] < 5) {\n      matrix1[i, j] <- 5\n    } else if (matrix1[i, j] > 10 & matrix1[i, j] < 15) {\n      matrix1[i, j] <- 10\n    } else {\n      matrix1[i, j] <- 100\n    }\n  }\n}\nmatrix1\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]  100    5  100  100    0\n#> [2,]    0   10  100  100  100\n#> [3,]    0    0   10  100  100\n#> [4,]    5    5  100   10    0\n#> [5,]  100    0    0  100   10",
    "comment": "**Nested for loops over every element**\n\n`i` walks the rows and `j` walks the columns, so `matrix1[i, j]` visits every cell once. The `if / else if / else` chain decides each new value:\n- negative → 0\n- 0 to 4.99 → 5\n- above 10 and below 15 → 10\n- **everything else → 100** (so 5–10 and 15 or more all become 100; exactly 10 also becomes 100 because the rule says *above* 10)\n\n**Same re-run trap as Problem 1:** this loop changes `matrix1` itself. Run it twice and the values change again (0s become 5s, 5s become 100s). Re-create `matrix1` from Part 1 before re-running.",
    "key": false,
    "question": "Employ a for loop to update the elements of matrix1 according to the following criteria: replace negative values with 0; for elements greater than or equal to 0 but less than 5, replace them with 5; for elements less than 15 but greater than 10, replace them with 10; for elements that do not meet the specified conditions, substitute them with 100."
   },
   {
    "id": "c090",
    "label": "Problem 4 [9pt] · Part 3 · Initiate an empty vector vector7. Utilize a while loop to…",
    "code": "vector7 <- vector(mode = \"numeric\")\ni <- 1\nwhile (i < 30) {\n  if (i %% 2 == 1 & i %% 3 != 0) {\n    vector7 <- c(vector7, i)\n  }\n  i <- i + 1\n}\nvector7\n#>  [1]  1  5  7 11 13 17 19 23 25 29",
    "comment": "**Roadmap: from the question to the code**\n\n**Step 1. Break the question into pieces.** Each phrase becomes one piece of code:\n\n| Question says | Code piece |\n|---|---|\n| \"Initiate an empty vector vector7\" | `vector7 <- vector(mode = \"numeric\")` (or `c()`) |\n| \"Utilize a while loop\" | `while (condition) { ... }` |\n| \"greater than 0\" | start counting at 1: `i <- 1` |\n| \"less than 30\" | keep looping while `i < 30` |\n| \"odd numbers\" | `i %% 2 == 1` (remainder 1 when divided by 2) |\n| \"excluding those divisible by 3\" | `i %% 3 != 0` (remainder is **not** 0) |\n| \"fill vector7\" | `vector7 <- c(vector7, i)` |\n\n**Step 2. Set up before the loop.**\n- An empty `vector7` so there's somewhere to put the answers.\n- A counter `i <- 1`, the number being checked right now.\n\n**Step 3. Write the loop condition.** `while (i < 30)` means \"keep going as long as i is under 30.\" When `i` hits 30 the loop stops, so 30 is never checked.\n\n**Step 4. Inside the loop, test the current number.** `if (i %% 2 == 1 & i %% 3 != 0)` asks both rules at once; `&` means **both** must be TRUE.\n\n**Step 5. If it passes, add it.** `vector7 <- c(vector7, i)` sticks `i` on the end of whatever `vector7` already holds.\n\n**Step 6. Move to the next number.** `i <- i + 1` is **outside** the `if`, so it runs every time. Without it, `i` stays 1 forever and the loop never ends (RStudio freezes; press Esc to stop it).\n\n**Step 7. Print the result.** `vector7` gives `1 5 7 11 13 17 19 23 25 29`.\n\n**Trace of the first few passes:**\n\n| i | odd? | not divisible by 3? | kept? | vector7 after |\n|---|---|---|---|---|\n| 1 | yes | yes | yes | 1 |\n| 2 | no | | no | 1 |\n| 3 | yes | **no** (3 %% 3 = 0) | no | 1 |\n| 4 | no | | no | 1 |\n| 5 | yes | yes | yes | 1 5 |\n| 7 | yes | yes | yes | 1 5 7 |\n| 9 | yes | **no** | no | 1 5 7 |\n| … | | | | |\n| 30 | loop stops | | | final |\n\n**Same thing with a for loop** (exam questions use for loops). The `for` handles the counting, so there's no `i <- 1` and no `i <- i + 1`:\n```r\nvector7 <- c()\nfor (i in 1:29) {\n  if (i %% 2 == 1 & i %% 3 != 0) {\n    vector7 <- c(vector7, i)\n  }\n}\nvector7\n```\n\n**Pattern to reuse:** empty result → loop over the numbers → `if` test → add with `c(result, i)` → print the result.",
    "key": false,
    "question": "Initiate an empty vector vector7. Utilize a while loop to fill vector7 with odd numbers greater than 0 and less than 30, excluding those odd numbers divisible by 3."
   },
   {
    "id": "c091",
    "label": "Problem 5 [9pt] · Part 1 · Write a function categorize_numbers() that takes a numeric…",
    "code": "categorize_numbers <- function(vec) {\n  labels <- vector(mode = \"character\", length = length(vec))\n  for (i in 1:length(vec)) {\n    if (vec[i] < 10) {\n      labels[i] <- \"Small\"\n    } else if (vec[i] >= 10 & vec[i] <= 20) {\n      labels[i] <- \"Medium\"\n    } else {\n      labels[i] <- \"Large\"\n    }\n  }\n  labels\n}\ntest_vec <- c(4, 10, 15, 22, 8, 18, 27, 5, 12)\ncategorize_numbers(test_vec)\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\"\n#> [9] \"Medium\"\n# Solution #2 (without using a for loop)\ncategorize_numbers <- function(vec) {\n  labels <- ifelse(vec < 10, \"Small\", ifelse(vec >= 10 & vec <= 20, \"Medium\", \"Large\"))\n  labels\n}\ntest_vec <- c(4, 10, 15, 22, 8, 18, 27, 5, 12)\ncategorize_numbers(test_vec)\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\"\n#> [9] \"Medium\"\n# NOTE: This solution is a lot more compact because it uses the ifelse() function instead of if statements.\n# An if statement only works on one element at a time, but ifelse() can deal with a whole vector (or a\n# whole matrix) at once. This can helps us avoid for loops, making our code a lot shorter and simpler.\n# Notice the use of two ifelse() functions, one nested inside the other.\n# The first ifelse() corresponds to the if part that checks whether an element is less than 10:\n# If the element is less than 10 return “Small” as the corresponding category label.\n# If the element is NOT less than 10 we enter the second ifelse(). This corresponds to the\n# else if part that checks whether an element is between 10 and 20 (inclusive).\n# If the element is between 10 and 20 (inclusive) return “Medium” as the category\n# label.\n# If the element is NOT between 10 and 20 (inclusive), meaning that it is\n# greater than 20, return “Large” 10 as the category label. This final piece corresponds\n# to what the else part was handling.",
    "comment": "**Roadmap: from the question to the code**\n\n**Step 1. Break the question into pieces.**\n\n| Question says | Code piece |\n|---|---|\n| \"Write a function categorize_numbers()\" | `categorize_numbers <- function(...) { }` |\n| \"takes a numeric vector as input\" | one argument: `function(vec)` |\n| \"classifies each element\" | loop over every position: `for (i in 1:length(vec))` |\n| \"Small if less than 10\" | `if (vec[i] < 10)` |\n| \"Medium if between 10 and 20 (inclusive)\" | `else if (vec[i] >= 10 & vec[i] <= 20)` |\n| \"Large if greater than 20\" | `else` (the only numbers left) |\n| \"return a character vector of labels\" | build `labels`, end with `return(labels)` |\n| \"Test with {4, 10, 15, ...}\" | call it: `categorize_numbers(c(4, 10, 15, 22, 8, 18, 27, 5, 12))` |\n\n**Step 2. Name the function and its input.** `categorize_numbers <- function(vec) {`. Inside the function, `vec` stands for whatever vector you pass in later.\n\n**Step 3. Make an empty container for the answers.** `labels <- vector(mode = \"character\", length = length(vec))` creates a text vector with one blank slot per number (`\"\" \"\" \"\"...`). `labels <- c()` also works.\n\n**Step 4. Loop over every position.** `for (i in 1:length(vec))` makes `i` go 1, 2, 3 ... 9. Using the **position** lets you read `vec[i]` and write `labels[i]` in the same spot.\n\n**Step 5. Decide the label with if / else if / else.** R checks top to bottom and stops at the first TRUE:\n- `< 10` → \"Small\"\n- otherwise `>= 10 & <= 20` → \"Medium\" (\"inclusive\" means 10 and 20 count, so `>=` and `<=`)\n- otherwise → \"Large\"\n\n**Step 6. Store it in the matching slot.** `labels[i] <- \"Small\"` (etc.) puts the label in position `i`, lined up with `vec[i]`.\n\n**Step 7. Return the result.** After the loop ends, `return(labels)`. The posted solution just writes `labels` on the last line, which also works, but your review session said to use `return()`.\n\n**Step 8. Test it with the given vector.**\n\n**Trace of the loop with the test vector:**\n\n| i | vec[i] | < 10? | 10 to 20? | label |\n|---|---|---|---|---|\n| 1 | 4 | yes | | Small |\n| 2 | 10 | no | yes | Medium |\n| 3 | 15 | no | yes | Medium |\n| 4 | 22 | no | no | Large |\n| 5 | 8 | yes | | Small |\n| 6 | 18 | no | yes | Medium |\n| 7 | 27 | no | no | Large |\n| 8 | 5 | yes | | Small |\n| 9 | 12 | no | yes | Medium |\n\n**Solution #2, the no-loop version:** `ifelse(vec < 10, \"Small\", ifelse(vec >= 10 & vec <= 20, \"Medium\", \"Large\"))` follows the same if → else if → else order. The first `ifelse` is the `if`; the second one, tucked in its \"no\" slot, is the `else if` / `else`. It works on the whole vector at once, so there's no `[i]`.\n\n**Pattern to reuse:** function(input) → empty result → `for (i in 1:length(input))` → if / else if / else → `result[i] <- ...` → `return(result)` → test it.",
    "key": false,
    "question": "Write a function categorize_numbers() that takes a numeric vector as input and classifies each element into one of three categories:\n• \"Small\" if the number is less than 10\n• \"Medium\" if the number is between 10 and 20 (inclusive)\n• \"Large\" if the number is greater than 20 The function should return a character vector with the corresponding category labels. Test your function with the vector: {4, 10, 15, 22, 8, 18, 27, 5, 12}."
   },
   {
    "id": "c092",
    "label": "Problem 5 [9pt] · Part 2 · Create a function matrix_summary() that accepts a numeric…",
    "code": "matrix_summary <- function(mat) {\n  # row sums\n  row_sums <- vector(mode = \"numeric\", length = nrow(mat))\n  for (i in 1:nrow(mat)) {\n    row_sums[i] <- sum(mat[i, ])\n  }\n  # column means\n  col_means <- vector(mode = \"numeric\", length = ncol(mat))\n  for (i in 1:ncol(mat)) {\n    col_means[i] <- mean(mat[ , i])\n  }\n  # maximum value\n  max_val <- max(mat)\n  # minimum value\n  min_val <- min(mat)\n  # package everything up in a list\n  summary <- list(\n    \"Row Sums\" = row_sums,\n    \"Column Means\" = col_means,\n    \"Max Value\" = max_val,\n    \"Min Value\" = min_val\n  )\n  summary\n}\ntest_mat <- matrix(c(5, 12, 18, 7, 14, 22, 9, 10, 25, 6, 17, 30), ncol = 3, byrow = TRUE)\nmatrix_summary(test_mat)\n#> $`Row Sums`\n#> [1] 35 43 44 53\n#> $`Column Means`\n#> [1]  6.75 13.25 23.75\n#> $`Max Value`\n#> [1] 30\n#> $`Min Value`\n#> [1] 5\n# Solution #2\n# R has many in-built functions that simplify common operations, so you might have stumbled upon the\n# rowSums and colMeans functions (the corresponding functions rowMeans and colSums also exist).\nmatrix_summary <- function(mat) {\n  summary <- list(\n    \"Row Sums\" = rowSums(mat),\n    \"Column Means\" = colMeans(mat),\n    \"Max Value\" = max(mat),\n    \"Min Value\" = min(mat)\n  )\n  summary\n}\ntest_mat <- matrix(c(5, 12, 18, 7, 14, 22, 9, 10, 25, 6, 17, 30), ncol = 3, byrow = TRUE)\nmatrix_summary(test_mat)\n#> $`Row Sums`\n#> [1] 35 43 44 53\n#> $`Column Means`\n#> [1]  6.75 13.25 23.75\n#> $`Max Value`\n#> [1] 30\n#> $`Min Value`\n#> [1] 5",
    "comment": "**Roadmap: from the question to the code**\n\n**Step 1. Break the question into pieces.**\n\n| Question says | Code piece |\n|---|---|\n| \"Create a function matrix_summary()\" | `matrix_summary <- function(...) { }` |\n| \"accepts a numeric matrix\" | one argument: `function(mat)` |\n| \"Row Sums: sum of each row\" | loop over rows, `sum(mat[i, ])` |\n| \"Column Means: mean of each column\" | loop over columns, `mean(mat[, i])` |\n| \"Max Value in the entire matrix\" | `max(mat)` |\n| \"Min Value in the entire matrix\" | `min(mat)` |\n| \"returns a list containing ...\" | `return(list(\"Row Sums\" = ..., ...))` |\n| \"Test on the matrix 5 12 18 / 7 14 22 / ...\" | build it with `matrix(..., ncol = 3, byrow = TRUE)` and call the function |\n\n**Step 2. Name the function and its input.** `matrix_summary <- function(mat) {`.\n\n**Step 3. Row sums: one answer per row.**\n- Make a container with one slot per row: `row_sums <- vector(mode = \"numeric\", length = nrow(mat))`.\n- Loop over rows: `for (i in 1:nrow(mat))`.\n- `mat[i, ]` is all of row `i` (blank after the comma = every column), so `row_sums[i] <- sum(mat[i, ])`.\n\n**Step 4. Column means: one answer per column.** Same idea, flipped:\n- Container sized by `ncol(mat)`.\n- Loop `for (i in 1:ncol(mat))`.\n- `mat[, i]` is all of column `i` (blank before the comma = every row), so `col_means[i] <- mean(mat[, i])`.\n\nReusing `i` is fine because the first loop is finished before the second starts.\n\n**Step 5. Max and min: one number each.** `max(mat)` and `min(mat)` look at every value in the matrix, so no loop is needed.\n\n**Step 6. Package everything in a named list.** The question asks for **one** returned object holding four results of different sizes (two vectors, two single numbers). Only a list can hold that, and naming each piece makes the output labeled:\n```r\nresult <- list(\"Row Sums\" = row_sums, \"Column Means\" = col_means,\n               \"Max Value\" = max_val, \"Min Value\" = min_val)\nreturn(result)\n```\nNames with spaces need quotes; to pull one out later use backticks: `` out$`Max Value` ``.\n\n**Step 7. Build the test matrix and call the function.** `byrow = TRUE` makes the rows read 5 12 18 / 7 14 22 / 9 10 25 / 6 17 30, matching the question.\n\n**What each loop computes on the test matrix:**\n\n| | Values | Result |\n|---|---|---|\n| Row 1 | 5 + 12 + 18 | 35 |\n| Row 2 | 7 + 14 + 22 | 43 |\n| Row 3 | 9 + 10 + 25 | 44 |\n| Row 4 | 6 + 17 + 30 | 53 |\n| Column 1 | (5 + 7 + 9 + 6) / 4 | 6.75 |\n| Column 2 | (12 + 14 + 10 + 17) / 4 | 13.25 |\n| Column 3 | (18 + 22 + 25 + 30) / 4 | 23.75 |\n| Max | whole matrix | 30 |\n| Min | whole matrix | 5 |\n\n**Solution #2, the shortcut:** `rowSums(mat)` and `colMeans(mat)` replace both loops, and `apply(mat, 1, sum)` / `apply(mat, 2, mean)` also work (1 = rows, 2 = columns). If the exam says \"use a for loop\", use the Solution #1 version.\n\n**The posted solution names its list `summary`.** That works, but it hides R's built-in `summary()` function inside this function. A name like `result` is safer.\n\n**Pattern to reuse:** function(input) → compute each piece (loop when you need one answer per row/column) → `return(list(Name = piece, ...))` → test it.",
    "key": false,
    "question": "Create a function matrix_summary() that accepts a numeric matrix and returns a list containing the following elements:\n• Row Sums - a vector with the sum of each row\n• Column Means - a vector with the mean of each column\n• Max Value - the maximum value in the entire matrix\n• Min Value - the minimum value in the entire matrix Hint: sum(), mean(), max(), min() functions will come in handy.\nTest your function on the matrix:\n  5 12 18 7 14 22   9 10 25 6 17 30"
   }
  ],
  "notes": "Due September 27, 11:59 PM. Five problems: building vectors with `c()` and `seq()`, `append()` and logical filtering; lists and `unlist()` coercion; the `dfA` data frame with factors and a `High_Performer` column; a for loop and a while loop over `matrix1`; and the functions `categorize_numbers()` and `matrix_summary()`.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-13T22:35:00Z"
 },
 "hw-02": {
  "type": "hw",
  "num": "02",
  "title": "Simulation with apply functions and the carseats data",
  "date": "2026-10-11",
  "exams": [],
  "topics": [
   "apply family",
   "mapply",
   "simulation",
   "functions",
   "tapply",
   "boxplots",
   "barplots",
   "scatterplots"
  ],
  "pdfs": [
   {
    "name": "Homework Assignment 2.pdf",
    "size": 119885,
    "type": "application/pdf"
   },
   {
    "name": "Homework 2 Solutions.pdf",
    "size": 232194,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "hw-02-p1_1",
    "label": "Problem 1 [20pt] · Part 1 · fun1: roll two dice and compare with mapply()",
    "question": "Develop a function named fun1 that takes one parameter, n, denoting the number of trials in your simulation. The function should simulate the process of rolling two fair dice and report the outcomes of n trials. It should return vectors for the outcomes of both dice, labeled as Die1 and Die2, respectively, along with a vector named comparison. The comparison vector is generated using mapply() and is a factor with three levels: \"Die1 > Die2\", \"Die1 < Die2\", and \"Die1 = Die2\". For example, if the result of Die1 is 5 and the result of Die2 is 4, the comparison should be \"Die1 > Die2\". Test the function with n = 30.\n(Use functions from the apply() family whenever you would otherwise need loops.)",
    "code": "fun1 <- function(n) {\n  Die1 <- sample(1:6, size = n, replace = TRUE)\n  Die2 <- sample(1:6, size = n, replace = TRUE)\n  compare_dice <- function(Die1, Die2) {\n    ifelse(Die1 > Die2, \"Die1 > Die2\", ifelse(Die1 < Die2, \"Die1 < Die2\", \"Die1 = Die2\"))\n  }\n  comparison <- factor(mapply(compare_dice, Die1, Die2))\n  data.frame(\"trial\" = 1:n, Die1, Die2, comparison)\n}\nfun1(30)\n#>    trial Die1 Die2  comparison\n#> 1      1    1    1 Die1 = Die2\n#> 2      2    4    4 Die1 = Die2\n#> 3      3    1    3 Die1 < Die2\n#> 4      4    2    6 Die1 < Die2\n#> 5      5    5    2 Die1 > Die2\n#> 6      6    3    2 Die1 > Die2\n#> 7      7    6    6 Die1 = Die2\n#> 8      8    2    4 Die1 < Die2\n#> 9      9    3    4 Die1 < Die2\n#> 10    10    3    4 Die1 < Die2\n#> 11    11    1    2 Die1 < Die2\n#> 12    12    5    4 Die1 > Die2\n#> 13    13    5    1 Die1 > Die2\n#> 14    14    2    6 Die1 < Die2\n#> 15    15    6    1 Die1 > Die2\n#> 16    16    6    4 Die1 > Die2\n#> 17    17    2    1 Die1 > Die2\n#> 18    18    1    6 Die1 < Die2\n#> 19    19    5    2 Die1 > Die2\n#> 20    20    5    3 Die1 > Die2\n#> 21    21    1    2 Die1 < Die2\n#> 22    22    1    6 Die1 < Die2\n#> 23    23    6    6 Die1 = Die2\n#> 24    24    5    2 Die1 > Die2\n#> 25    25    5    5 Die1 = Die2\n#> 26    26    2    2 Die1 = Die2\n#> 27    27    2    6 Die1 < Die2\n#> 28    28    6    6 Die1 = Die2\n#> 29    29    1    6 Die1 < Die2\n#> 30    30    4    1 Die1 > Die2",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"function named fun1 … parameter n\" | `fun1 <- function(n) { }` |\n| roll two fair dice n times | `Die1 <- sample(1:6, size = n, replace = TRUE)`, same for `Die2` |\n| compare each pair \"using mapply()\" | `mapply(compare_dice, Die1, Die2)` |\n| \"a factor with three levels\" | `factor(...)` |\n| return Die1, Die2, comparison | a `data.frame(...)` with those columns |\n| \"Test with n = 30\" | `fun1(30)` |\n\n**Why `mapply()`:** you need to compare Die1[1] with Die2[1], Die1[2] with Die2[2], and so on, i.e. a function applied to **pairs**. `mapply(f, x, y)` does exactly that (the function goes first, then the vectors).\n\n**Reading the helper:** `compare_dice(a, b)` returns one of the three labels with a nested `ifelse()`: \"greater?\" → else \"smaller?\" → else \"equal\".\n\n**Watch out**\n- The question says the factor has **three levels**, but `factor(...)` only creates levels that actually occur. With a small n (say 3 rolls that are all \"Die1 > Die2\") you'd get one level. Set them explicitly: `factor(x, levels = c(\"Die1 > Die2\", \"Die1 < Die2\", \"Die1 = Die2\"))` (Solution #2).\n- No `set.seed()`, so your numbers will differ from these. Add `set.seed(1)` if the question asks for reproducible results.\n\n**Similar problems:** any \"compare two vectors element by element\" → `mapply()` with a small function, or a for loop over `1:n` (Rev 05, mapply on pairs).",
    "key": true
   },
   {
    "id": "hw-02-p1_1-sol2",
    "label": "Problem 1 [20pt] · Part 1 · Solution #2 (mapply with a small inline function, explicit levels)",
    "question": "Develop a function named fun1 that takes one parameter, n, denoting the number of trials in your simulation. The function should simulate the process of rolling two fair dice and report the outcomes of n trials. It should return vectors for the outcomes of both dice, labeled as Die1 and Die2, respectively, along with a vector named comparison. The comparison vector is generated using mapply() and is a factor with three levels: \"Die1 > Die2\", \"Die1 < Die2\", and \"Die1 = Die2\". For example, if the result of Die1 is 5 and the result of Die2 is 4, the comparison should be \"Die1 > Die2\". Test the function with n = 30.\n(Use functions from the apply() family whenever you would otherwise need loops.)",
    "code": "fun1b <- function(n) {\n  set.seed(1)\n  Die1 <- sample(1:6, size = n, replace = TRUE)\n  Die2 <- sample(1:6, size = n, replace = TRUE)\n  comparison <- mapply(function(a, b) {\n    if (a > b) \"Die1 > Die2\" else if (a < b) \"Die1 < Die2\" else \"Die1 = Die2\"\n  }, Die1, Die2)\n  comparison <- factor(comparison, levels = c(\"Die1 > Die2\", \"Die1 < Die2\", \"Die1 = Die2\"))\n  return(data.frame(trial = 1:n, Die1, Die2, comparison))\n}\n\nresult <- fun1b(30)\nhead(result)\n#>   trial Die1 Die2  comparison\n#> 1     1    1    1 Die1 = Die2\n#> 2     2    4    4 Die1 = Die2\n#> 3     3    1    3 Die1 < Die2\n#> 4     4    2    6 Die1 < Die2\n#> 5     5    5    2 Die1 > Die2\n#> 6     6    3    2 Die1 > Die2\ntable(result$comparison)          # all three levels always listed\n#> Die1 > Die2 Die1 < Die2 Die1 = Die2 \n#>          11          12           7 \nlevels(fun1b(3)$comparison)       # still 3 levels with only 3 rolls\n#> [1] \"Die1 > Die2\" \"Die1 < Die2\" \"Die1 = Die2\"",
    "comment": "**What's different**\n- **`if / else if / else` inside `mapply`**: `mapply` hands the function **one pair at a time**, so a plain `if` works and reads like the rule. No nested `ifelse` needed.\n- **`levels = ...`** guarantees the factor has all three levels in a sensible order, even when an outcome never happens (`table()` then shows 0 instead of leaving it out). This is what \"a factor with three levels\" asks for.\n- **`set.seed(1)`** inside the function → same rolls every call.\n- **`return()`**, as the review session asks.\n\nGives the same comparisons as the posted solution for the same rolls (checked in R).\n\n**Why it works:** `mapply(f, Die1, Die2)` calls `f(Die1[1], Die2[1])`, `f(Die1[2], Die2[2])`, … and collects the n answers into a vector.",
    "key": false
   },
   {
    "id": "hw-02-p1_1-prac",
    "label": "Problem 1 · Part 1 · Practice: a problem just like it (D4 vs D6 with mapply)",
    "question": "Write a function dice_duel(n) that rolls a 4-sided die and a 6-sided die n times. Use mapply() to label each trial \"D4 wins\", \"D6 wins\" or \"Tie\", stored as a factor with all three levels. Return a data frame with columns trial, D4, D6 and result. Test with n = 10, then show how often each result happened.",
    "code": "dice_duel <- function(n) {\n  D4 <- sample(1:4, n, replace = TRUE)\n  D6 <- sample(1:6, n, replace = TRUE)\n  who_wins <- function(a, b) {\n    if (a > b) \"D4 wins\" else if (a < b) \"D6 wins\" else \"Tie\"\n  }\n  result <- factor(mapply(who_wins, D4, D6),\n                   levels = c(\"D4 wins\", \"D6 wins\", \"Tie\"))\n  data.frame(trial = 1:n, D4, D6, result)\n}\n\nset.seed(2)\nduel <- dice_duel(10)\nduel\n#>    trial D4 D6  result\n#> 1      1  1  5 D6 wins\n#> 2      2  3  1 D4 wins\n#> 3      3  2  2     Tie\n#> 4      4  2  3 D6 wins\n#> 5      5  4  1 D4 wins\n#> 6      6  4  3 D4 wins\n#> 7      7  1  6 D6 wins\n#> 8      8  1  2 D6 wins\n#> 9      9  1  3 D6 wins\n#> 10    10  4  1 D4 wins\ntable(duel$result)          # all three levels show, even one with 0\n#> D4 wins D6 wins     Tie \n#>       4       5       1 ",
    "comment": "**Same skeleton as fun1, new details:**\n\n| Homework | Practice |\n|---|---|\n| two 6-sided dice | a 4-sided and a 6-sided die → `sample(1:4, ...)`, `sample(1:6, ...)` |\n| \"Die1 > Die2\" / \"Die1 < Die2\" / \"Die1 = Die2\" | \"D4 wins\" / \"D6 wins\" / \"Tie\" |\n| `mapply` + nested `ifelse` | `mapply` + `if / else if / else` (works because mapply hands over **one pair at a time**) |\n\n**Recipe for \"compare two simulated vectors pair by pair\"**\n1. Simulate both vectors with `sample(..., n, replace = TRUE)`.\n2. Write a small function that takes **one value from each** and returns a label.\n3. `mapply(that_function, vector1, vector2)` runs it on pair 1, pair 2, ….\n4. Wrap it in `factor(..., levels = c(...))` so every category exists, even ones with zero counts.\n5. Return a `data.frame` (or a list) with the pieces the question names.\n\n**Without mapply** (if allowed): the vectorized line `ifelse(D4 > D6, \"D4 wins\", ifelse(D4 < D6, \"D6 wins\", \"Tie\"))` does the same in one step.",
    "key": true
   },
   {
    "id": "hw-02-p1_2",
    "label": "Problem 1 [20pt] · Part 2 · fun2: unfair die frequency table",
    "question": "Construct a function named fun2 with a single argument, n, representing the number of trials in your simulation. The function should simulate the process of rolling an unfair die with the following probability distribution: \"1\" - 0.1, \"2\" - 0.3, \"3\" - 0.2, \"4\" - 0.05, \"5\" - 0.3, \"6\" - 0.05. It should report the results of the n trials by returning a frequency table of the outcomes, indicating how many times each outcome (e.g., \"1\", \"2\", etc.) occurs. Test the function with n = 100.",
    "code": "fun2 <- function(n) {\n  outcomes <- sample(1:6, size = n, replace = TRUE, prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))\n  counts <- table(outcomes)\n  data.frame(cbind(\"outcome\" = 1:6, \"count\" = counts))\n}\nfun2(100)\n#>   outcome count\n#> 1       1     9\n#> 2       2    34\n#> 3       3    23\n#> 4       4     5\n#> 5       5    27\n#> 6       6     2",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| unfair die with probabilities 0.1, 0.3, … | `sample(1:6, n, replace = TRUE, prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))` |\n| \"frequency table … how many times each outcome occurs\" | `table(outcomes)` |\n\n**`prob =`** gives one probability per face, **in the same order** as `1:6`. They must add up to 1.\n\n**⚠ Hidden bug in this posted solution (checked in R).** `table(outcomes)` only lists faces that actually came up. Faces 4 and 6 have probability 0.05, so with few rolls one can be missing. Then `table()` has fewer than 6 counts, `cbind(1:6, counts)` recycles values, and **counts end up next to the wrong faces** (with only a warning). See Solution #2 for the fix and a demonstration with n = 10.\n\n**With n = 100 it happened to work**, because every face came up at least once.\n\n**Similar problems:** \"simulate an unfair ___\" → `sample(outcomes, n, replace = TRUE, prob = ...)`; \"how many times each\" → `table()`, made safe with `factor(x, levels = ...)`.",
    "key": true
   },
   {
    "id": "hw-02-p1_2-sol2",
    "label": "Problem 1 [20pt] · Part 2 · Solution #2 (safe frequency table with factor levels)",
    "question": "Construct a function named fun2 with a single argument, n, representing the number of trials in your simulation. The function should simulate the process of rolling an unfair die with the following probability distribution: \"1\" - 0.1, \"2\" - 0.3, \"3\" - 0.2, \"4\" - 0.05, \"5\" - 0.3, \"6\" - 0.05. It should report the results of the n trials by returning a frequency table of the outcomes, indicating how many times each outcome (e.g., \"1\", \"2\", etc.) occurs. Test the function with n = 100.",
    "code": "fun2b <- function(n) {\n  outcomes <- sample(1:6, size = n, replace = TRUE,\n                     prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))\n  counts <- table(factor(outcomes, levels = 1:6))   # every face listed, even with 0\n  return(data.frame(outcome = 1:6, count = as.vector(counts)))\n}\n\nset.seed(1)\nfun2b(100)\n#>   outcome count\n#> 1       1    11\n#> 2       2    33\n#> 3       3    26\n#> 4       4     2\n#> 5       5    24\n#> 6       6     4\n\n# Why the fix matters: with 10 rolls, face 4 never comes up\nfun2 <- function(n) {\n  outcomes <- sample(1:6, size = n, replace = TRUE, prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))\n  counts <- table(outcomes)\n  data.frame(cbind(\"outcome\" = 1:6, \"count\" = counts))\n}\nset.seed(1); sort(sample(1:6, 10, replace = TRUE, prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05)))\n#>  [1] 1 2 2 3 3 5 5 5 6 6\nset.seed(1); fun2(10)     # posted version: counts shifted onto the wrong faces\n#>   outcome count\n#> 1       1     1\n#> 2       2     2\n#> 3       3     2\n#> 4       4     3\n#> 5       5     2\n#> 6       6     1\n#> Warning message: number of rows of result is not a multiple of vector length (arg 2)\nset.seed(1); fun2b(10)    # fixed version: face 4 correctly shows 0\n#>   outcome count\n#> 1       1     1\n#> 2       2     2\n#> 3       3     2\n#> 4       4     0\n#> 5       5     3\n#> 6       6     2",
    "comment": "**The fix:** `table(factor(outcomes, levels = 1:6))`. Turning the rolls into a factor with **all six levels** makes `table()` report every face, including ones that never came up (count 0). The counts can then never shift.\n\n**The demonstration (same 10 rolls for both):** the rolls are `1 2 2 3 3 5 5 5 6 6`, so no 4.\n- Posted `fun2`: shows face 4 = **3**, face 5 = **2**, face 6 = **1** (wrong: it shifted the counts up a row and recycled, with only a warning).\n- `fun2b`: face 4 = **0**, face 5 = **3**, face 6 = **2** (correct).\n\n**Also works:** `tabulate(outcomes, nbins = 6)` returns the 6 counts directly.\n\n**Remember:** whenever you `table()` something that might be missing a category, give it the levels first.",
    "key": false
   },
   {
    "id": "hw-02-p1_2-prac",
    "label": "Problem 1 · Part 2 · Practice: a problem just like it (unfair marble draws)",
    "question": "Write a function draw_marbles(n) that draws n marbles with replacement from a bag where P(red) = 0.5, P(blue) = 0.3, P(green) = 0.15 and P(gold) = 0.05. Return a data frame with each color, its count and its proportion, including colors that were never drawn. Test with n = 12.",
    "code": "draw_marbles <- function(n) {\n  colors <- c(\"red\", \"blue\", \"green\", \"gold\")\n  draws <- sample(colors, n, replace = TRUE, prob = c(0.5, 0.3, 0.15, 0.05))\n  counts <- table(factor(draws, levels = colors))       # keep all 4 colors\n  data.frame(color = colors,\n             count = as.vector(counts),\n             proportion = as.vector(counts) / n)\n}\n\nset.seed(4)\ndraw_marbles(12)\n#>   color count proportion\n#> 1   red     6       0.50\n#> 2  blue     3       0.25\n#> 3 green     3       0.25\n#> 4  gold     0       0.00",
    "comment": "**Same skeleton as fun2:**\n\n| Homework | Practice |\n|---|---|\n| faces `1:6` | colors `c(\"red\", \"blue\", \"green\", \"gold\")` |\n| `prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05)` | `prob = c(0.5, 0.3, 0.15, 0.05)` |\n| frequency table | counts **and** proportions |\n\n**The trap is the same:** a rare outcome (gold, 5%) often never shows up in a small sample. `table(draws)` would then have only 3 columns and the data frame would break or misalign. `factor(draws, levels = colors)` keeps all four, with 0 for missing ones. In this run, gold didn't come up and still shows 0.\n\n**`as.vector(counts)`** strips the table's names, so the data frame gets clean numbers.\n\n**Recipe for \"simulate an unfair ___ and report how often each outcome happened\"**\n1. `outcomes <- c(...)` and `probs <- c(...)` in the **same order**.\n2. `sample(outcomes, n, replace = TRUE, prob = probs)`.\n3. `table(factor(x, levels = outcomes))` for counts; divide by n for proportions.\n4. Return a `data.frame(outcome = ..., count = ...)` or just the table, whichever the question asks.",
    "key": true
   },
   {
    "id": "hw-02-p1_3",
    "label": "Problem 1 [20pt] · Part 3 · fun3: reorder a list by its means",
    "question": "Create a function named fun3 that takes a list as input and performs the following operations:\n• Calculate the mean value for each element in the input list.\n• Reorder the elements in the list based on their mean values, arranging them in ascending order.\n• Return the newly rearranged list.\nTest your function with the following list: list([20, 13, 34, 2], [2, 3], [45, 65, 78], [43, 98, 1, 22], [3, 5, 10], [13, 19, 14]).",
    "code": "fun3 <- function(list) {\n    means <- sapply(list, mean)\n    sorted_indices <- order(means)\n    list[sorted_indices]\n}\ntest_list <- list(\n  c(20, 13, 34, 2),\n  c(2, 3), c(45, 65, 78),\n  c(43, 98, 1, 22),\n  c(3, 5, 10),\n  c(13, 19, 14)\n)\nfun3(test_list)\n#> [[1]]\n#> [1] 2 3\n#> [[2]]\n#> [1]  3  5 10\n#> [[3]]\n#> [1] 13 19 14\n#> [[4]]\n#> [1] 20 13 34  2\n#> [[5]]\n#> [1] 43 98  1 22\n#> [[6]]\n#> [1] 45 65 78",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"mean value for each element in the list\" | `sapply(list, mean)` → one mean per element |\n| \"reorder … ascending\" | `order(means)` → positions from smallest to largest |\n| \"return the rearranged list\" | `list[order(means)]` |\n\n**How `order()` works:** the means are 17.25, 2.5, 62.67, 41, 6, 15.33. `order()` returns **positions**, not values: `2 5 6 1 4 3` (\"the 2nd is smallest, then the 5th, …\"). Indexing the list with those positions rearranges it.\n\n**`sort()` vs `order()`:** `sort(means)` would give the sorted **means**; you need `order()` to rearrange **another** object (the list) by them.\n\n**Single brackets** `list[...]` because you want a (reordered) **list** back, not one element.\n\n**Watch out:** naming the argument `list` works but hides R's `list()` function inside the function. Safer: `lst`.\n\n**Similar problems:** \"sort rows of a data frame by a column\" uses the same idea: `df[order(df$col), ]`.",
    "key": true
   },
   {
    "id": "hw-02-p1_3-sol2",
    "label": "Problem 1 [20pt] · Part 3 · Solution #2 (one line, plus a for-loop version)",
    "question": "Create a function named fun3 that takes a list as input and performs the following operations:\n• Calculate the mean value for each element in the input list.\n• Reorder the elements in the list based on their mean values, arranging them in ascending order.\n• Return the newly rearranged list.\nTest your function with the following list: list([20, 13, 34, 2], [2, 3], [45, 65, 78], [43, 98, 1, 22], [3, 5, 10], [13, 19, 14]).",
    "code": "fun3b <- function(lst) {\n  return(lst[order(sapply(lst, mean))])\n}\n\n# for-loop version (if the exam asks for a loop)\nfun3_loop <- function(lst) {\n  means <- numeric(length(lst))\n  for (i in 1:length(lst)) {\n    means[i] <- mean(lst[[i]])\n  }\n  return(lst[order(means)])\n}\n\ntest_list <- list(c(20, 13, 34, 2), c(2, 3), c(45, 65, 78),\n                  c(43, 98, 1, 22), c(3, 5, 10), c(13, 19, 14))\nsapply(test_list, mean)\n#> [1] 17.25000  2.50000 62.66667 41.00000  6.00000 15.33333\norder(sapply(test_list, mean))\n#> [1] 2 5 6 1 4 3\nidentical(fun3b(test_list), fun3_loop(test_list))\n#> [1] TRUE",
    "comment": "**One line:** compute the means, get the order, index the list. Read it inside out: `sapply(lst, mean)` → `order(...)` → `lst[...]`.\n\n**Loop version:** `numeric(length(lst))` makes an empty slot per element; `lst[[i]]` (double brackets) pulls out the i-th **vector** so `mean()` can use it. Same result (`identical(...)` is TRUE).\n\n**The two printed lines show the mechanism:** means `17.25 2.5 62.67 41 6 15.33`, order `2 5 6 1 4 3`.\n\n**Argument named `lst`** so R's `list()` function isn't hidden.",
    "key": false
   },
   {
    "id": "hw-02-p1_3-prac",
    "label": "Problem 1 · Part 3 · Practice: a problem just like it (reorder a list by spread)",
    "question": "Write a function reorder_by_sd(lst) that computes the standard deviation of each element of a list and returns the list reordered from the LARGEST to the smallest standard deviation. Test it with a named list of scores for four players.",
    "code": "reorder_by_sd <- function(lst) {\n  sds <- sapply(lst, sd)\n  lst[order(sds, decreasing = TRUE)]\n}\n\nscores <- list(Ana = c(10, 12, 11, 13),\n               Ben = c(2, 20, 8, 15),\n               Cal = c(7, 7, 8, 7),\n               Dee = c(5, 15, 10, 12))\nsapply(scores, sd)                     # check the spreads first\n#>      Ana      Ben      Cal      Dee \n#> 1.290994 7.889867 0.500000 4.203173 \nreorder_by_sd(scores)\n#> $Ben\n#> [1]  2 20  8 15\n#> $Dee\n#> [1]  5 15 10 12\n#> $Ana\n#> [1] 10 12 11 13\n#> $Cal\n#> [1] 7 7 8 7\nnames(reorder_by_sd(scores))           # just the new order\n#> [1] \"Ben\" \"Dee\" \"Ana\" \"Cal\"",
    "comment": "**Same skeleton as fun3, two changes:**\n\n| Homework | Practice |\n|---|---|\n| `sapply(list, mean)` | `sapply(lst, sd)`: any summary works (`max`, `length`, `median`, …) |\n| ascending: `order(means)` | **descending**: `order(sds, decreasing = TRUE)` (or `order(-sds)`) |\n\n**Recipe for \"reorder a list by some summary of its elements\"**\n1. `stat <- sapply(lst, FUN)`: one number per element.\n2. `idx <- order(stat)`: positions from smallest to largest (add `decreasing = TRUE` for largest first).\n3. `lst[idx]`: **single brackets**, so the result is still a list. Names travel with the elements.\n\n**Check the stat first:** printing `sapply(scores, sd)` shows Ben is the most spread out and Cal the least, so you can verify the new order: Ben, Dee, Ana, Cal.\n\n**Same idea elsewhere:** sort a vector by another vector → `x[order(y)]`. Sort data frame rows by a column → `df[order(df$col), ]`.",
    "key": true
   },
   {
    "id": "hw-02-p1_4",
    "label": "Problem 1 [20pt] · Part 4 · fun4: rnorm into a matrix, then summarize",
    "question": "Create a function called fun4 with three parameters: n, mu, and sigma. The function performs the following tasks:\n• Generate n random numbers from a Normal distribution with mean mu and standard deviation sigma.\n• Populate an empty matrix: if n is divisible by 2 but not by 3, fill by rows with 2 rows and n/2 columns. If n is divisible by 3 but not by 2, fill by columns with 3 columns and n/3 rows. If n is divisible by both 2 and 3, fill by rows with 6 rows and n/6 columns. Otherwise, fill by rows with only one column.\n• Return a vector of the mean of each column if none of the numbers are negative. If some are negative, return a vector of the median of each row.\nTest the function with (n = 50, mu = 0.5, sigma = 2).",
    "code": "fun4 <- function(n, mu, sigma) {\n    random_nums <- rnorm(n, mean = mu, sd = sigma)\n    if (n %% 2 == 0 & n %% 3 == 0) {\n      mat <- matrix(random_nums, nrow = 6, byrow = TRUE)\n    } else if (n %% 2 == 0) {\n      mat <- matrix(random_nums, nrow = 2, byrow = TRUE)\n    } else if (n %% 3 == 0) {\n      mat <- matrix(random_nums, ncol = 3, byrow = FALSE)\n    } else {\n      mat <- matrix(random_nums, ncol = 1, byrow = TRUE)\n    }\n    if (all(mat >= 0)) {\n      apply(mat, MARGIN = 2, FUN = mean)\n    } else {\n      apply(mat, MARGIN = 1, FUN = median)\n    }\n}\nfun4(n = 50, mu = 0.5, sigma = 2)\n#> [1] 0.5931606 0.5507657",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| generate n normal numbers | `rnorm(n, mean = mu, sd = sigma)` |\n| divisible by 2 / by 3 | `n %% 2 == 0`, `n %% 3 == 0` |\n| \"fill by rows with 2 rows\" | `matrix(x, nrow = 2, byrow = TRUE)` |\n| \"fill by columns with 3 columns\" | `matrix(x, ncol = 3, byrow = FALSE)` |\n| \"none … negative\" | `all(mat >= 0)` |\n| mean of each column / median of each row | `apply(mat, 2, mean)` / `apply(mat, 1, median)` |\n\n**Why check \"both\" first:** n = 12 is divisible by 2 **and** 3. If the \"divisible by 2\" branch came first, 12 would wrongly get 2 rows. Put the most specific condition first; the `else if` chain stops at the first TRUE. \"Divisible by 2 but not by 3\" is then automatic.\n\n**Test case n = 50:** divisible by 2, not 3 → 2 rows × 25 columns. With mean 0.5 and sd 2 some numbers are almost certainly negative → **row medians** → 2 numbers. That's why the answer has length 2.\n\n**`apply(mat, 1, f)` = rows, `apply(mat, 2, f)` = columns.**\n\n**Watch out:** no `set.seed()`, so your two numbers will differ.\n\n**Similar problems:** \"if ___ then shape it this way\" → compute the condition with `%%`, build the matrix in each branch, then one final `if` for what to return.",
    "key": true
   },
   {
    "id": "hw-02-p1_4-sol2",
    "label": "Problem 1 [20pt] · Part 4 · Solution #2 (named conditions, any() and colMeans())",
    "question": "Create a function called fun4 with three parameters: n, mu, and sigma. The function performs the following tasks:\n• Generate n random numbers from a Normal distribution with mean mu and standard deviation sigma.\n• Populate an empty matrix: if n is divisible by 2 but not by 3, fill by rows with 2 rows and n/2 columns. If n is divisible by 3 but not by 2, fill by columns with 3 columns and n/3 rows. If n is divisible by both 2 and 3, fill by rows with 6 rows and n/6 columns. Otherwise, fill by rows with only one column.\n• Return a vector of the mean of each column if none of the numbers are negative. If some are negative, return a vector of the median of each row.\nTest the function with (n = 50, mu = 0.5, sigma = 2).",
    "code": "fun4b <- function(n, mu, sigma) {\n  x <- rnorm(n, mean = mu, sd = sigma)\n  by2 <- n %% 2 == 0\n  by3 <- n %% 3 == 0\n  if (by2 & by3) {\n    mat <- matrix(x, nrow = 6, byrow = TRUE)\n  } else if (by2) {\n    mat <- matrix(x, nrow = 2, byrow = TRUE)\n  } else if (by3) {\n    mat <- matrix(x, ncol = 3, byrow = FALSE)\n  } else {\n    mat <- matrix(x, ncol = 1)\n  }\n  if (any(x < 0)) {\n    return(apply(mat, 1, median))     # some negative -> row medians\n  } else {\n    return(colMeans(mat))             # none negative -> column means\n  }\n}\n\nset.seed(1)\nfun4b(n = 50, mu = 0.5, sigma = 2)\n#> [1] 1.2796865 0.3813732\nset.seed(1)\nfun4b(n = 12, mu = 20, sigma = 2)     # divisible by 2 and 3, all positive -> 2 column means\n#> [1] 20.48081 20.59375",
    "comment": "**What's different**\n- **`by2` and `by3`**: naming the conditions makes the `if` chain read like the question.\n- **`any(x < 0)`** asks the question directly (\"are some negative?\"). It's the same as `!all(mat >= 0)`. Putting the \"some negative\" case first matches the wording.\n- **`colMeans(mat)`** = `apply(mat, 2, mean)`, shorter.\n\nChecked in R: same results as the posted solution for n = 50, 12, 9, 7, 30 and 4, with both negative and all-positive data.\n\n**Second test (n = 12, mean 20):** divisible by both → 6 rows × 2 columns; all values positive → **2 column means**, so you can see the other branch work.",
    "key": false
   },
   {
    "id": "hw-02-p1_4-prac",
    "label": "Problem 1 · Part 4 · Practice: a problem just like it (runif into a matrix)",
    "question": "Write a function shape_it(n, lo, hi) that generates n uniform random numbers between lo and hi and fills a matrix: if n is divisible by both 4 and 5, use 4 rows filled by rows; if only by 4, use 4 columns filled by columns; if only by 5, use 5 rows filled by rows; otherwise one row. If any value is above 0.9 * hi, return the maximum of each column; otherwise return the mean of each row. Test with n = 20, 8, 15 and 7.",
    "code": "shape_it <- function(n, lo, hi) {\n  x <- runif(n, min = lo, max = hi)\n  if (n %% 4 == 0 && n %% 5 == 0) {          # check \"both\" FIRST\n    m <- matrix(x, nrow = 4, byrow = TRUE)\n  } else if (n %% 4 == 0) {\n    m <- matrix(x, ncol = 4)                 # byrow = FALSE is the default (by columns)\n  } else if (n %% 5 == 0) {\n    m <- matrix(x, nrow = 5, byrow = TRUE)\n  } else {\n    m <- matrix(x, nrow = 1)\n  }\n  if (any(m > 0.9 * hi)) {\n    apply(m, 2, max)                         # 2 = columns\n  } else {\n    apply(m, 1, mean)                        # 1 = rows\n  }\n}\n\nset.seed(5)\nshape_it(20, 0, 10)      # 4 x 5 matrix\n#> [1] 7.010575 6.852186 9.168758 9.565001 8.421794\nshape_it(8, 0, 10)       # 2 x 4 matrix\n#> [1] 8.902071 2.257173 4.799139 9.659641\nshape_it(15, 0, 10)      # 5 x 3 matrix\n#> [1] 8.160761 9.549789 8.268702\nshape_it(7, 0, 10)       # 1 x 7 matrix\n#> [1] 5.3347593 9.2894271 5.4979473 7.6014253 0.6850976 7.9360934 6.3280343",
    "comment": "**Same skeleton as fun4:**\n\n| Homework | Practice |\n|---|---|\n| `rnorm(n, mu, sigma)` | `runif(n, lo, hi)` |\n| divisible by 2 / 3 / both | divisible by 4 / 5 / both |\n| \"none negative\" → `all(mat >= 0)` | \"any value above 0.9·hi\" → `any(m > 0.9 * hi)` |\n| column means / row medians | column maxima / row means |\n\n**The most important rule: check \"both\" first.** 20 is divisible by 4 **and** 5. If `n %% 4 == 0` came first, 20 would take the \"4 only\" branch and never reach \"both\". In an `if / else if` chain, the **most specific** condition goes on top.\n\n**Reading the outputs:** each call returns one number per column (if a big value appeared) or per row (if not). The **length tells you which**: e.g. 5 numbers from the 4 × 5 matrix = column maxima.\n\n**Recipe for \"shape the data depending on n, then return a summary depending on the values\"**\n1. Generate the numbers (`rnorm`, `runif`, `sample`).\n2. `if / else if / else` on `n %% k == 0`, with the combined condition first; each branch builds `matrix(x, nrow/ncol = ..., byrow = ...)`.\n3. A second `if` on the values: `all(...)` for \"none / every\", `any(...)` for \"some / at least one\".\n4. `apply(m, 1, f)` for rows, `apply(m, 2, f)` for columns (or `rowMeans`, `colMeans`).",
    "key": true
   },
   {
    "id": "hw-02-p2_0",
    "label": "Problem 2 [25pt] · Setup · import carseats",
    "question": "Download the carseats dataset from Courseworks and import it into R (ensure to convert all character variables into factors). 400 stores; variables: Sales, Advertising, Population, Price, ShelveLoc (Bad, Good, Medium), Age, Urban (No, Yes), US (No, Yes).",
    "code": "carseats <- read.csv(\"carseats.csv\", stringsAsFactors = TRUE)\nstr(carseats)     # check: 400 obs, ShelveLoc / Urban / US are Factor",
    "comment": "**`stringsAsFactors = TRUE`** turns `ShelveLoc`, `Urban` and `US` into factors, which `aggregate()`, `tapply()`, `boxplot(y ~ group)` and `barplot(table(...))` need.\n\n**Check right after importing:** `str(carseats)` should show `Factor` for those three columns and 400 obs. If `read.csv` can't find the file, see **Everyday code → Import data**.",
    "key": false
   },
   {
    "id": "hw-02-p2_0-prac",
    "label": "Problem 2 · Practice setup: a data set just like carseats (mtcars)",
    "question": "Practice Problem 2 with a data set that is built into R, so it runs anywhere: mtcars (32 cars). Make transmission (am), cylinders (cyl) and engine shape (vs) into factors with readable labels.",
    "code": "cars <- mtcars                                   # built into R: 32 cars, no file needed\ncars$trans <- factor(cars$am, levels = c(0, 1), labels = c(\"Automatic\", \"Manual\"))\ncars$cyl   <- factor(cars$cyl)                   # 4, 6, 8 cylinders as categories\ncars$engine <- factor(cars$vs, levels = c(0, 1), labels = c(\"V-shaped\", \"Straight\"))\nstr(cars[, c(\"mpg\", \"hp\", \"wt\", \"cyl\", \"trans\", \"engine\")])\n#> 'data.frame':\t32 obs. of  6 variables:\n#>  $ mpg   : num  21 21 22.8 21.4 18.7 18.1 14.3 24.4 22.8 19.2 ...\n#>  $ hp    : num  110 110 93 110 175 105 245 62 95 123 ...\n#>  $ wt    : num  2.62 2.88 2.32 3.21 3.44 ...\n#>  $ cyl   : Factor w/ 3 levels \"4\",\"6\",\"8\": 2 2 1 2 3 2 3 1 1 2 ...\n#>  $ trans : Factor w/ 2 levels \"Automatic\",\"Manual\": 2 2 2 1 1 1 1 1 1 1 ...\n#>  $ engine: Factor w/ 2 levels \"V-shaped\",\"Straight\": 1 1 2 2 1 2 1 2 2 2 ...\nhead(cars[, c(\"mpg\", \"hp\", \"cyl\", \"trans\")], 4)\n#>                 mpg  hp cyl     trans\n#> Mazda RX4      21.0 110   6    Manual\n#> Mazda RX4 Wag  21.0 110   6    Manual\n#> Datsun 710     22.8  93   4    Manual\n#> Hornet 4 Drive 21.4 110   6 Automatic",
    "comment": "**Why this data:** like carseats, it has numeric columns (`mpg`, `hp`, `wt`, like Sales, Price, Age) and categorical ones (`cyl`, `trans`, `engine`, like ShelveLoc, Urban, US). Every carseats question has a twin below.\n\n**Turning 0/1 codes into factors:** `factor(x, levels = c(0, 1), labels = c(\"Automatic\", \"Manual\"))` maps 0 → Automatic and 1 → Manual. `labels` must follow the order of `levels`. This is the same job `stringsAsFactors = TRUE` does for carseats' text columns.\n\n**Row names are the car names:** `rownames(cars)` holds \"Mazda RX4\" and so on, which is useful for \"which car\" questions (practice Part 2).\n\n**Run this chunk first;** every practice chunk in Problem 2 uses `cars`.",
    "key": true
   },
   {
    "id": "hw-02-p2_1",
    "label": "Problem 2 [25pt] · Part 1 · average price overall, US vs non-US, rural",
    "question": "What is the average price the company charges for car seats? How does the average price for car seats in the US compare to that in non-US stores? Additionally, what is the average price for car seats in rural US stores compared to those in rural areas outside of the US?",
    "code": "# average price\nmean(carseats$Price)\n#> [1] 115.795\n\f# average price in US vs. non-US stores\naggregate(Price ~ US, FUN = mean, data = carseats)\n#>    US    Price\n#> 1 No 113.9507\n#> 2 Yes 116.8101\ncarseats_rural <- carseats[carseats$Urban == \"No\", ]\n# average price in rural US vs. rural non-US\naggregate(Price ~ US, FUN = mean, data = carseats_rural)\n#>    US    Price\n#> 1 No 113.5000\n#> 2 Yes 114.4444\n# NOTE: The tapply() function also works here. See notes on Problem 2.3 for an extended discussion on\n# the differences between aggregate() and tapply().",
    "comment": "**Three questions, three tools**\n1. Overall average → `mean(carseats$Price)` = **115.8**.\n2. US vs non-US → a **group** average: `aggregate(Price ~ US, FUN = mean, data = carseats)` → No 113.95, Yes 116.81. US stores charge about $3 more on average.\n3. Rural only → **filter first** (`carseats[carseats$Urban == \"No\", ]`), then the same group average → No 113.50, Yes 114.44.\n\n**Formula `Price ~ US`:** read it as \"Price, split by US\". Left = the number to summarize, right = the grouping.\n\n**Answer the question in words, too:** e.g. \"US stores charge slightly more on average than non-US stores (116.81 vs 113.95), and the gap is smaller among rural stores (114.44 vs 113.50).\"\n\n**Similar problems:** \"average ___ for each ___\" → `aggregate(y ~ group, FUN = mean, data = df)` or `tapply(df$y, df$group, mean)`; \"among ___ only\" → subset rows first.",
    "key": true
   },
   {
    "id": "hw-02-p2_1-sol2",
    "label": "Problem 2 [25pt] · Part 1 · Solution #2 (tapply() and subsetting)",
    "question": "What is the average price the company charges for car seats? How does the average price for car seats in the US compare to that in non-US stores? Additionally, what is the average price for car seats in rural US stores compared to those in rural areas outside of the US?",
    "code": "# overall\nmean(carseats$Price)\n\n# US vs non-US: tapply returns a named vector\ntapply(carseats$Price, carseats$US, mean)\n\n# or one group at a time with logical subsetting\nmean(carseats$Price[carseats$US == \"Yes\"])\nmean(carseats$Price[carseats$US == \"No\"])\n\n# rural stores only, without making a new data frame\nrural <- carseats$Urban == \"No\"\ntapply(carseats$Price[rural], carseats$US[rural], mean)",
    "comment": "**Same numbers as the posted solution** (checked on a data set with the same columns; run it on carseats to see 115.795, 113.95/116.81 and 113.50/114.44).\n\n- `tapply(values, groups, mean)` gives a named vector: `No 113.95  Yes 116.81`.\n- `x[condition]` keeps only the values where the condition is TRUE, so `mean(carseats$Price[carseats$US == \"Yes\"])` is the US average.\n- `rural` is a TRUE/FALSE vector; using it on **both** the values and the groups keeps them lined up.",
    "key": false
   },
   {
    "id": "hw-02-p2_1-prac",
    "label": "Problem 2 · Part 1 · Practice: a problem just like it (average mpg by group)",
    "question": "What is the average mpg of all cars? How does the average mpg of manual cars compare to automatic cars? Among 4-cylinder cars only, how do manual and automatic cars compare?",
    "code": "mean(cars$mpg)                                         # overall\n#> [1] 20.09062\naggregate(mpg ~ trans, data = cars, FUN = mean)        # manual vs automatic\n#>       trans      mpg\n#> 1 Automatic 17.14737\n#> 2    Manual 24.39231\nfour_cyl <- cars[cars$cyl == \"4\", ]                    # subset first: 4-cylinder only\naggregate(mpg ~ trans, data = four_cyl, FUN = mean)\n#>       trans    mpg\n#> 1 Automatic 22.900\n#> 2    Manual 28.075\n\n# same answers with tapply\ntapply(cars$mpg, cars$trans, mean)\n#> Automatic    Manual \n#>  17.14737  24.39231 \ntapply(four_cyl$mpg, four_cyl$trans, mean)\n#> Automatic    Manual \n#>    22.900    28.075 ",
    "comment": "**Exactly the homework's three steps:**\n\n| Homework | Practice |\n|---|---|\n| `mean(carseats$Price)` | `mean(cars$mpg)` |\n| `aggregate(Price ~ US, ...)` | `aggregate(mpg ~ trans, ...)` |\n| rural stores only: `carseats[carseats$Urban == \"No\", ]` | 4-cylinder only: `cars[cars$cyl == \"4\", ]` |\n\n**Answer in words:** manual cars average **24.4 mpg** vs **17.1** for automatics. Among 4-cylinder cars the gap is much smaller (**28.1 vs 22.9**), because many automatics in this data are big 8-cylinder cars. Restricting to one group changes the comparison.\n\n**Recipe for \"average of Y overall, by group, and by group within a subset\"**\n1. Overall: `mean(df$Y)`.\n2. By group: `aggregate(Y ~ G, data = df, FUN = mean)` or `tapply(df$Y, df$G, mean)`.\n3. \"Among ___ only\": make the subset **first** (`sub <- df[condition, ]`), then repeat step 2 with `data = sub`.\n4. Write one sentence comparing the numbers.",
    "key": true
   },
   {
    "id": "hw-02-p2_2",
    "label": "Problem 2 [25pt] · Part 2 · store with the highest / lowest price",
    "question": "Which store has the highest charge (provide the index number in the dataset)? Conversely, which store has the lowest charge?",
    "code": "# highest charge\nwhich.max(carseats$Price)\n#> [1] 166\n# lowest charge\nwhich.min(carseats$Price)\n#> [1] 43",
    "comment": "**`which.max(x)` / `which.min(x)` give the position (row number)** of the largest / smallest value: store **166** charges the most, store **43** the least.\n\n**Watch out:** if two stores tie for the highest price, `which.max()` only returns the **first** one. `which(x == max(x))` returns **all** of them (Solution #2).\n\n**To see that store's whole row:** `carseats[which.max(carseats$Price), ]`.\n\n**Solve similar problems:** \"which ___ has the highest / lowest ___\" → `which.max(df$col)` / `which.min(df$col)` for the row number; `df[which.max(df$col), ]` for the whole row; `which(df$col == max(df$col))` if there may be ties. Practice version below.",
    "key": false
   },
   {
    "id": "hw-02-p2_2-sol2",
    "label": "Problem 2 [25pt] · Part 2 · Solution #2 (which() for ties, and show the whole row)",
    "question": "Which store has the highest charge (provide the index number in the dataset)? Conversely, which store has the lowest charge?",
    "code": "which(carseats$Price == max(carseats$Price))   # ALL stores with the top price\nwhich(carseats$Price == min(carseats$Price))\n\ncarseats[which.max(carseats$Price), ]          # the full row for that store\nmax(carseats$Price); min(carseats$Price)       # the prices themselves",
    "comment": "**`which(x == max(x))`** returns every position that equals the maximum, so ties aren't hidden. If there's no tie it gives the same 166 / 43 as `which.max()`/`which.min()`.\n\n**Show the row and the value** in your answer: \"Store 166 charges the most ($___)\". `carseats[166, ]` shows everything about it.",
    "key": false
   },
   {
    "id": "hw-02-p2_2-prac",
    "label": "Problem 2 · Part 2 · Practice: a problem just like it (most / least of something)",
    "question": "Which car has the highest horsepower (give the row number and the car name)? Which car has the lowest mpg? Are there ties?",
    "code": "which.max(cars$hp)                          # row number\n#> [1] 31\nrownames(cars)[which.max(cars$hp)]          # car name\n#> [1] \"Maserati Bora\"\ncars[which.max(cars$hp), c(\"hp\", \"mpg\", \"cyl\")]\n#>                hp mpg cyl\n#> Maserati Bora 335  15   8\n\nwhich.min(cars$mpg)\n#> [1] 15\nrownames(cars)[which.min(cars$mpg)]\n#> [1] \"Cadillac Fleetwood\"\nwhich(cars$mpg == min(cars$mpg))            # ALL cars tied for the lowest\n#> [1] 15 16",
    "comment": "**Same as the homework:** `which.max()` / `which.min()` return the **position** (row number) of the largest / smallest value.\n\n**New here: ties.** The lowest mpg (10.4) is shared by **two** cars. `which.min()` only reports the first (row 15), while `which(x == min(x))` returns **both** (15 and 16). If a question says \"which store(s)\", use `which()`.\n\n**Getting the name instead of the number:** mtcars stores the names as **row names**, so use `rownames(cars)[position]`. In carseats, rows only have numbers, so the position **is** the answer.\n\n**Recipe for \"which ___ has the highest / lowest ___\"**\n1. `i <- which.max(df$col)` (or `which.min`).\n2. Report `i` (the index), and if useful the whole row: `df[i, ]`.\n3. Check for ties: `which(df$col == max(df$col))`.\n4. \"Top 3\" instead of the top 1 → `head(df[order(df$col, decreasing = TRUE), ], 3)`.",
    "key": true
   },
   {
    "id": "hw-02-p2_3",
    "label": "Problem 2 [25pt] · Part 3 · median sales by shelf location (and Urban)",
    "question": "What is the median number of unit sales for various quality levels of shelving locations? Now, respond to the same question by incorporating the Urban variable, resulting in six combinations.",
    "code": "# median number of unit sales by shelving location quality\naggregate(Sales ~ ShelveLoc, FUN = median, data = carseats)\n#>     ShelveLoc Sales\n#> 1         Bad 5.21\n#> 2        Good 10.50\n#> 3      Medium 7.38\n# median number of unit sales by shelving location quality and by urban/rural divide\naggregate(Sales ~ ShelveLoc + Urban, FUN = median, data = carseats)\n#>     ShelveLoc Urban Sales\n#> 1         Bad    No 5.140\n#> 2        Good    No 9.740\n#> 3      Medium    No 7.455\n#> 4         Bad   Yes 5.295\n#> 5        Good   Yes 10.960\n#> 6      Medium   Yes 7.370\n# NOTE: You can also use tapply() here. A key difference between the two functions is that aggregate()\n# returns a data frame, while tapply() returns a vector/matrix:\ntapply(carseats$Sales, carseats$ShelveLoc, FUN = median)\n#>    Bad    Good Medium\n#>   5.21   10.50   7.38\ntapply(carseats$Sales, list(carseats$ShelveLoc, carseats$Urban), FUN = median)\n#>           No    Yes\n#> Bad    5.140 5.295\n#> Good   9.740 10.960\n#> Medium 7.455 7.370\n# Also, unlike aggregate(), tapply() does not allow you to use formulas (e.g. Sales ~ ShelveLoc + Urban),\n# so if you want to avoid writing the name of the data frame for every variable, you need to wrap the call to\n# tapply() inside a with() like this:\nwith(carseats, tapply(Sales, ShelveLoc, FUN = median))\n#>    Bad    Good Medium\n#>   5.21   10.50   7.38\nwith(carseats, tapply(Sales, list(ShelveLoc, Urban), FUN = median))\n#>           No    Yes\n#> Bad    5.140 5.295\n#> Good   9.740 10.960\n#> Medium 7.455 7.370",
    "comment": "**`aggregate(Sales ~ ShelveLoc, FUN = median, data = carseats)`** → one median per shelf quality: Bad 5.21, Medium 7.38, Good 10.50. Better shelf placement goes with higher sales.\n\n**Two grouping variables:** `Sales ~ ShelveLoc + Urban` → every combination (3 × 2 = **6** rows).\n\n**`aggregate()` vs `tapply()` (the note in the solution):**\n- `aggregate()` uses a formula and returns a **data frame** (long format, one row per combination).\n- `tapply()` returns a **vector** (one grouping) or a **table/matrix** (two groupings: rows = first, columns = second), often easier to read.\n- `with(carseats, ...)` lets you skip writing `carseats$` each time.\n\n**Similar problems:** \"median/mean/count of ___ for each ___ (and ___)\" → add each grouping variable with `+` in `aggregate`, or put them in `list(...)` in `tapply`.",
    "key": true
   },
   {
    "id": "hw-02-p2_3-sol2",
    "label": "Problem 2 [25pt] · Part 3 · Solution #2 (tapply() table, or dplyr)",
    "question": "What is the median number of unit sales for various quality levels of shelving locations? Now, respond to the same question by incorporating the Urban variable, resulting in six combinations.",
    "code": "# one grouping: named vector\ntapply(carseats$Sales, carseats$ShelveLoc, median)\n\n# two groupings: 3 x 2 table (rows = ShelveLoc, columns = Urban)\ntapply(carseats$Sales, list(carseats$ShelveLoc, carseats$Urban), median)\n\n# dplyr version (Lecture 11), needs library(dplyr)\nlibrary(dplyr)\ncarseats %>%\n  group_by(ShelveLoc, Urban) %>%\n  summarise(median_sales = median(Sales))",
    "comment": "**All three give the same six medians** (the `aggregate()` and `tapply()` versions were checked against each other in R):\n- `tapply(..., list(a, b), median)` → a table you can read across: Good shelves have the highest median sales in both rural and urban stores.\n- `group_by(ShelveLoc, Urban) %>% summarise(...)` → the dplyr way from Lecture 11; one row per combination, like `aggregate()`.\n\n**Pick by what's easiest to read for the question.** For \"compare across two factors\", the `tapply` table is usually clearest.",
    "key": false
   },
   {
    "id": "hw-02-p2_3-prac",
    "label": "Problem 2 · Part 3 · Practice: a problem just like it (median by one and two groups)",
    "question": "What is the median horsepower for each number of cylinders? Answer again by also splitting by transmission, giving six combinations.",
    "code": "aggregate(hp ~ cyl, data = cars, FUN = median)               # one grouping\n#>   cyl    hp\n#> 1   4  91.0\n#> 2   6 110.0\n#> 3   8 192.5\naggregate(hp ~ cyl + trans, data = cars, FUN = median)       # two groupings -> 6 rows\n#>   cyl     trans    hp\n#> 1   4 Automatic  95.0\n#> 2   6 Automatic 116.5\n#> 3   8 Automatic 180.0\n#> 4   4    Manual  78.5\n#> 5   6    Manual 110.0\n#> 6   8    Manual 299.5\n\n# tapply version: a table, rows = cyl, columns = trans\ntapply(cars$hp, list(cars$cyl, cars$trans), median)\n#>   Automatic Manual\n#> 4      95.0   78.5\n#> 6     116.5  110.0\n#> 8     180.0  299.5\nwith(cars, tapply(hp, list(cyl, trans), median))             # same, without cars$\n#>   Automatic Manual\n#> 4      95.0   78.5\n#> 6     116.5  110.0\n#> 8     180.0  299.5",
    "comment": "**Exactly the homework's pattern:**\n\n| Homework | Practice |\n|---|---|\n| `aggregate(Sales ~ ShelveLoc, ...)` | `aggregate(hp ~ cyl, ...)` |\n| `... ~ ShelveLoc + Urban` (6 combos) | `... ~ cyl + trans` (3 × 2 = 6 combos) |\n| `tapply(Sales, list(ShelveLoc, Urban), median)` | `tapply(hp, list(cyl, trans), median)` |\n\n**Reading the two outputs:** `aggregate` gives one **row** per combination (long format). `tapply` with `list()` gives a **grid** (cylinders down, transmission across), which is easier to compare at a glance: 8-cylinder manuals have a median of **299.5 hp** vs **180** for 8-cylinder automatics.\n\n**Recipe for \"median / mean / count of Y for each level of A (and B)\"**\n- One grouping: `aggregate(Y ~ A, data = df, FUN = f)` or `tapply(df$Y, df$A, f)`.\n- Two groupings: add `+ B` in the formula, or `list(df$A, df$B)` in tapply.\n- Count instead of a statistic → `table(df$A, df$B)`.",
    "key": true
   },
   {
    "id": "hw-02-p2_4",
    "label": "Problem 2 [25pt] · Part 4 · boxplots of Age: US vs non-US",
    "question": "Contrast the mean age of the local population between US and non-US stores by presenting boxplots. Customize the boxplots by incorporating labels, modifying colors, and adding notches for enhanced clarity.",
    "code": "boxplot(\n  Age ~ US,\n  data = carseats,\n  horizontal = TRUE,\n  col = c(\"lightsteelblue1\", \"wheat1\"),\n  names = c(\"Non-US\", \"US\"),\n  notch = TRUE,\n  xlab = \"Age of Local Population (in years)\",\n  ylab = \"Store Location\",\n  main = \"Average Age of Local Population at US vs. Non-US Stores\"\n)\n# (draws a plot)",
    "comment": "**Reading the call**\n- `Age ~ US`: one box of Age per US group.\n- `horizontal = TRUE`: boxes lie sideways, so the **x-axis is Age** and the y-axis is the group (that's why `xlab` is the age label here).\n- `names = c(\"Non-US\", \"US\")`: relabels the groups **in factor order** (No, Yes).\n- `notch = TRUE`: the notches show uncertainty around each **median**; if two notches don't overlap, the medians likely differ.\n\n**Watch out:** a boxplot's middle line is the **median**, not the mean. The question says \"contrast the mean age\", so Solution #2 adds the means as points. Also describe what you see in a sentence (which group is older, and by how much).\n\n**Similar problems:** any \"compare a number across groups with boxplots\" → `boxplot(y ~ group, data = df, ...)` plus labels, colors and `notch = TRUE` if asked.",
    "key": true
   },
   {
    "id": "hw-02-p2_4-sol2",
    "label": "Problem 2 [25pt] · Part 4 · Solution #2 (vertical boxplot with the means marked)",
    "question": "Contrast the mean age of the local population between US and non-US stores by presenting boxplots. Customize the boxplots by incorporating labels, modifying colors, and adding notches for enhanced clarity.",
    "code": "boxplot(Age ~ US, data = carseats,\n        notch = TRUE,\n        col = c(\"lightsteelblue1\", \"wheat1\"),\n        names = c(\"Non-US\", \"US\"),\n        xlab = \"Store Location\",\n        ylab = \"Age of Local Population (in years)\",\n        main = \"Age of Local Population: US vs. Non-US Stores\")\n\ngroup_means <- tapply(carseats$Age, carseats$US, mean)\npoints(1:2, group_means, pch = 18, cex = 1.5, col = \"red\")   # mean of each group\ngroup_means",
    "comment": "**Why add the means:** the question says \"contrast the **mean** age\", but a boxplot shows the **median**. `points()` adds a red diamond at each group's mean on top of the boxes, and printing `group_means` gives the numbers for your written answer.\n\n**Vertical (default):** no `horizontal = TRUE`, so the x-axis is the group and the y-axis is age, and `xlab`/`ylab` swap compared to the posted version.\n\n`points(1:2, ...)`: boxes sit at x = 1 and x = 2, in factor order (No, Yes). (The plot code was test-run in R.)",
    "key": false
   },
   {
    "id": "hw-02-p2_4-prac",
    "label": "Problem 2 · Part 4 · Practice: a problem just like it (boxplots by group)",
    "question": "Compare petal length across the three iris species with boxplots. Add labels, colors and notches, and mark each group mean.",
    "code": "boxplot(Petal.Length ~ Species, data = iris,\n        notch = TRUE,\n        col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n        names = c(\"Setosa\", \"Versicolor\", \"Virginica\"),\n        xlab = \"Species\", ylab = \"Petal length (cm)\",\n        main = \"Petal Length by Iris Species\")\ngroup_means <- tapply(iris$Petal.Length, iris$Species, mean)\npoints(1:3, group_means, pch = 18, cex = 1.5, col = \"red\")   # red diamonds = means\ngroup_means\n#>     setosa versicolor  virginica \n#>      1.462      4.260      5.552 ",
    "comment": "[![Problem 2 · Part 4 · Practice: a problem just like it (boxplots by group)](files/plots/hw2-prac-box.png)](files/plots/hw2-prac-box.png)\n\n**Same request as the homework:** boxplot + labels + colors + notches, comparing a number across groups.\n\n| Homework | Practice |\n|---|---|\n| `boxplot(Age ~ US, data = carseats, ...)` | `boxplot(Petal.Length ~ Species, data = iris, ...)` |\n| 2 groups, 2 colors, `names = c(\"Non-US\", \"US\")` | 3 groups, 3 colors, 3 names (in level order) |\n| `horizontal = TRUE` | vertical (the default); xlab is the group, ylab the number |\n\n**\"Mean\" vs the box line:** the thick line is the **median**. The question says compare the mean, so the means are added with `points(1:3, means)`. Boxes sit at x = 1, 2, 3 in level order.\n\n**Answer in words:** setosa petals are much shorter (mean 1.5 cm) than versicolor (4.3) and virginica (5.6). The notches don't overlap, so the medians clearly differ.\n\n**Recipe for \"compare Y across groups with boxplots\"**\n1. `boxplot(Y ~ G, data = df, ...)`.\n2. Tick off the customizations: `main`, `xlab`, `ylab`, `col` (one per box), `names`, `notch = TRUE`, `horizontal = TRUE` if asked (then swap xlab and ylab).\n3. If asked about means: `points(1:k, tapply(df$Y, df$G, mean), pch = 18)`.\n4. One sentence: which group is higher, and is there overlap?",
    "key": true
   },
   {
    "id": "hw-02-p2_5",
    "label": "Problem 2 [25pt] · Part 5 · barplot of shelving location quality",
    "question": "Provide an overview of the quality of shelving locations using a barplot. Customize the presentation as outlined in the preceding question, excluding notches in this case.",
    "code": "# reorder factor levels\ncarseats$ShelveLoc <- factor(carseats$ShelveLoc, levels = c(\"Bad\", \"Medium\", \"Good\"))\nbarplot(\n  table(carseats$ShelveLoc),\n  horiz = TRUE,\n  col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n  xlab = \"Number of Stores\",\n  ylab = \"Quality of Shelving Location\",\n  main = \"Number of Stores by Shelving Location Quality\"\n)\n# (draws a plot)",
    "comment": "**`barplot()` needs counts**, so wrap the factor in `table()`.\n\n**Reordering levels first:** factor levels are alphabetical by default (Bad, Good, Medium). `factor(..., levels = c(\"Bad\", \"Medium\", \"Good\"))` puts them in a logical order so the bars read low → high.\n\n**`horiz = TRUE`** (note: `horiz` for barplot, `horizontal` for boxplot) flips the bars sideways, so x = number of stores.\n\n**\"Customize as in the preceding question\"** = labels (`xlab`, `ylab`, `main`) and colors (`col`, one per bar).\n\n**Watch out:** reordering changes `carseats$ShelveLoc` for every later part too (Part 6 uses this order).\n\n**Solve similar problems:** \"overview of a categorical variable\" → (optional) set the order with `factor(x, levels = ...)`, then `barplot(table(x), ...)` with `main`, `xlab`, `ylab`, `col`, `horiz = TRUE` if asked. Practice version below.",
    "key": false
   },
   {
    "id": "hw-02-p2_5-sol2",
    "label": "Problem 2 [25pt] · Part 5 · Solution #2 (vertical bars with counts on top)",
    "question": "Provide an overview of the quality of shelving locations using a barplot. Customize the presentation as outlined in the preceding question, excluding notches in this case.",
    "code": "counts <- table(factor(carseats$ShelveLoc, levels = c(\"Bad\", \"Medium\", \"Good\")))\nbars <- barplot(counts,\n                col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n                xlab = \"Quality of Shelving Location\",\n                ylab = \"Number of Stores\",\n                main = \"Number of Stores by Shelving Location Quality\",\n                ylim = c(0, max(counts) * 1.15))\ntext(bars, counts, labels = counts, pos = 3)    # print each count above its bar\ncounts",
    "comment": "**What's different**\n- Reorders the levels **inside** this call, so `carseats$ShelveLoc` itself isn't changed for later parts.\n- Vertical bars (the default).\n- `barplot()` returns the x-positions of the bars; `text(bars, counts, labels = counts, pos = 3)` writes each count just above its bar. `ylim` leaves room for the labels.\n- Printing `counts` gives the numbers for your written answer (Medium is the most common shelf location).",
    "key": false
   },
   {
    "id": "hw-02-p2_5-prac",
    "label": "Problem 2 · Part 5 · Practice: a problem just like it (barplot of one factor)",
    "question": "Give an overview of how many cars have 4, 6 and 8 cylinders with a horizontal barplot, ordered from 8 to 4 cylinders, with labels and colors.",
    "code": "cyl_ordered <- factor(cars$cyl, levels = c(\"8\", \"6\", \"4\"))      # choose the bar order\ncounts <- table(cyl_ordered)\ncounts\n#> cyl_ordered\n#>  8  6  4 \n#> 14  7 11 \nbarplot(counts,\n        horiz = TRUE,\n        col = c(\"tomato\", \"gold\", \"seagreen3\"),\n        names.arg = c(\"8 cyl\", \"6 cyl\", \"4 cyl\"),\n        las = 1,                                                 # horizontal axis labels\n        xlab = \"Number of cars\", ylab = \"Cylinders\",\n        main = \"Cars by Number of Cylinders\")",
    "comment": "[![Problem 2 · Part 5 · Practice: a problem just like it (barplot of one factor)](files/plots/hw2-prac-bar.png)](files/plots/hw2-prac-bar.png)\n\n**Same request as the homework:** a barplot of **one categorical variable**, customized, in a chosen order.\n\n| Homework | Practice |\n|---|---|\n| reorder: `factor(ShelveLoc, levels = c(\"Bad\", \"Medium\", \"Good\"))` | `factor(cyl, levels = c(\"8\", \"6\", \"4\"))` |\n| `barplot(table(carseats$ShelveLoc), horiz = TRUE, ...)` | `barplot(table(cyl_ordered), horiz = TRUE, ...)` |\n\n**Order trick:** bars follow the **factor levels**. With `horiz = TRUE`, the first level is drawn at the **bottom**. Here \"8 cyl\" is at the bottom and \"4 cyl\" at the top.\n\n**Practice saves the reordered factor in a new variable** (`cyl_ordered`), so later parts aren't affected. The homework overwrote `carseats$ShelveLoc`, which changes every later plot.\n\n**Recipe for \"overview of a categorical variable with a barplot\"**\n1. Optional: set the order with `factor(x, levels = c(...))`.\n2. `barplot(table(x), ...)`, never `barplot(x)`.\n3. Customize: `main`, `xlab`, `ylab`, `col`, `names.arg`, `horiz = TRUE` (horizontal; xlab is then the count).\n4. One sentence: which category is most / least common (here 8-cylinder: 14 of 32).",
    "key": true
   },
   {
    "id": "hw-02-p2_6",
    "label": "Problem 2 [25pt] · Part 6 · side-by-side barplots: ShelveLoc by Urban",
    "question": "Create side-by-side barplots illustrating the frequency of the ShelveLoc variable in both urban and rural areas. Tailor your plot according to the previous discussion.",
    "code": "barplot(\n  table(carseats$ShelveLoc, carseats$Urban),\n  beside = TRUE,\n  horiz = TRUE,\n  legend.text = levels(carseats$ShelveLoc),\n  args.legend = list(\n     x = 150,\n     y = 2.1,\n     horiz = TRUE,\n     cex = 0.75,\n     title = \"Quality of Shelving Location\"\n  ),\n  col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n  xlab = \"Number of Stores\",\n  ylab = \"Location of Store\",\n  names.arg = c(\"Rural\", \"Urban\"),\n  main = \"Quality of Shelving Location for Urban vs. Rural Stores\"\n)\n# (draws a plot)",
    "comment": "**Two-way table → grouped bars**\n- `table(carseats$ShelveLoc, carseats$Urban)`: rows = shelf quality, columns = rural/urban.\n- `beside = TRUE`: bars **side by side** within each group. Without it you get **stacked** bars.\n- Each column of the table (Rural, Urban) becomes a group, and each row (Bad/Medium/Good) a bar inside it.\n\n**Legend:** `legend.text` gives the bar labels; `args.legend = list(...)` passes extra settings to the legend (position `x`, `y`, `horiz`, size `cex`, `title`). Exact `x`/`y` coordinates take trial and error; Solution #2 uses `x = \"topright\"`-style keywords instead.\n\n**`names.arg = c(\"Rural\", \"Urban\")`** relabels the groups (factor order No, Yes).\n\n**Solve similar problems:** \"side-by-side barplots of A for each level of B\" → `barplot(table(df$A, df$B), beside = TRUE, col = <one per level of A>, legend.text = TRUE, args.legend = list(x = \"topright\"))`. Rows of the table = bars, columns = groups. Practice version below.",
    "key": false
   },
   {
    "id": "hw-02-p2_6-sol2",
    "label": "Problem 2 [25pt] · Part 6 · Solution #2 (simpler legend with a position keyword)",
    "question": "Create side-by-side barplots illustrating the frequency of the ShelveLoc variable in both urban and rural areas. Tailor your plot according to the previous discussion.",
    "code": "tab <- table(carseats$ShelveLoc, carseats$Urban)\ntab                                  # check the counts first\n\nbarplot(tab,\n        beside = TRUE,\n        names.arg = c(\"Rural\", \"Urban\"),\n        col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n        legend.text = TRUE,                       # use the row names as labels\n        args.legend = list(x = \"topleft\", title = \"Shelving Location\", cex = 0.8),\n        xlab = \"Location of Store\",\n        ylab = \"Number of Stores\",\n        main = \"Shelving Location Quality: Urban vs. Rural\")",
    "comment": "**`legend.text = TRUE`** uses the table's row names (the shelf levels) as legend labels automatically.\n\n**`x = \"topleft\"`** (or `\"topright\"`, `\"top\"`, …) places the legend with a keyword instead of guessing coordinates like `x = 150, y = 2.1`.\n\n**Print the table first:** it's the data behind the bars, and it's easy to sanity-check against the bar heights. (The plot code was test-run in R.)",
    "key": false
   },
   {
    "id": "hw-02-p2_6-prac",
    "label": "Problem 2 · Part 6 · Practice: a problem just like it (side-by-side barplots)",
    "question": "Create side-by-side barplots of the number of cylinders for automatic and manual cars, with colors, a legend, axis labels and a title.",
    "code": "tab <- table(cars$cyl, cars$trans)       # rows = cylinders (bars), columns = transmission (groups)\ntab\n#>     Automatic Manual\n#>   4         3      8\n#>   6         4      3\n#>   8        12      2\nbarplot(tab,\n        beside = TRUE,\n        col = c(\"seagreen3\", \"gold\", \"tomato\"),\n        legend.text = c(\"4 cyl\", \"6 cyl\", \"8 cyl\"),\n        args.legend = list(x = \"topright\", title = \"Cylinders\", cex = 0.85),\n        names.arg = c(\"Automatic\", \"Manual\"),\n        ylim = c(0, 15),\n        xlab = \"Transmission\", ylab = \"Number of cars\",\n        main = \"Cylinders by Transmission\")",
    "comment": "[![Problem 2 · Part 6 · Practice: a problem just like it (side-by-side barplots)](files/plots/hw2-prac-bar2.png)](files/plots/hw2-prac-bar2.png)\n\n**Same request as the homework:** frequencies of one factor, shown side by side for each level of a second factor.\n\n| Homework | Practice |\n|---|---|\n| `table(ShelveLoc, Urban)` | `table(cyl, trans)` |\n| bars = shelf quality, groups = rural/urban | bars = cylinders, groups = automatic/manual |\n| legend placed with `x = 150, y = 2.1` | legend placed with `x = \"topright\"` (no trial and error) |\n\n**Which variable goes where:** in `table(A, B)`, **A (rows)** becomes the bars inside each group, colored in order, and **B (columns)** becomes the groups along the axis. To swap them, use `table(B, A)` or `t(tab)`.\n\n**Answer in words:** most automatics have 8 cylinders (12 of 19), while most manuals have 4 (8 of 13).\n\n**Recipe for \"side-by-side barplots of A for each level of B\"**\n1. `tab <- table(df$A, df$B)`.\n2. `barplot(tab, beside = TRUE, col = <one per level of A>)`.\n3. Legend: `legend.text = TRUE` (uses the row names) or your own labels, placed with `args.legend = list(x = \"topright\")`.\n4. `names.arg =` for the group names, `ylim =` for room above the bars, plus `main`, `xlab`, `ylab`.",
    "key": true
   },
   {
    "id": "hw-02-p2_7",
    "label": "Problem 2 [25pt] · Part 7 · scatterplot Sales vs Price colored by Urban",
    "question": "Generate a plot of the Sales variable against the Price variable. Properly label the plot and axes. Adjust the point shape to triangular, with points colored in orange for urban stores and green for rural stores. Include a legend on the plot to indicate the respective areas. Modify the point size to 0.9 for clarity.",
    "code": "colors <- c(\"olivedrab\", \"tan2\")\nplot(\n  x = carseats$Price,\n  y = carseats$Sales,\n  col = colors[carseats$Urban],\n  xlab = \"Sale Price (in USD)\",\n  ylab = \"Number of Sales\",\n  main = \"Number of Sales vs. Sale Price\\n(for Stores in Rural and Urban Areas)\",\n  pch = 17,\n  cex = 0.9\n)\nlegend(x = 20, y = 16.5, legend = c(\"Rural\", \"Urban\"), cex = 0.9, pch = 17, col = colors)\n# (draws a plot)",
    "comment": "**Reading the call**\n- `plot(x = Price, y = Sales)`: the variable named \"against\" goes on the **x-axis** (\"Sales against Price\" → Price on x).\n- `pch = 17`: filled triangles. `cex = 0.9`: point size.\n- `col = colors[carseats$Urban]`: a factor used as an index becomes 1 (No) or 2 (Yes), so rural points get `colors[1]` (olivedrab = green) and urban points `colors[2]` (tan2 = orange).\n- `legend(...)` must list labels and colors **in the same order** as the colors were assigned.\n\n**The note in the solution is the main trap:** levels are alphabetical (No, Yes), so the **first** color goes with **rural**. Swap them and the plot is wrong with no error. Solution #2 avoids this with `ifelse()`.\n\n**`\\n` in `main`** starts a second line in the title.\n\n**Solve similar problems:** \"plot Y against X, colored by group, with a legend\" → `cols <- ifelse(df$G == \"level\", \"color1\", \"color2\")`, then `plot(df$X, df$Y, col = cols, pch = ..., cex = ...)` and `legend(..., col = c(\"color1\", \"color2\"))` in the same order. Practice version below.",
    "key": true
   },
   {
    "id": "hw-02-p2_7-sol2",
    "label": "Problem 2 [25pt] · Part 7 · Solution #2 (colors with ifelse() so the order can't go wrong)",
    "question": "Generate a plot of the Sales variable against the Price variable. Properly label the plot and axes. Adjust the point shape to triangular, with points colored in orange for urban stores and green for rural stores. Include a legend on the plot to indicate the respective areas. Modify the point size to 0.9 for clarity.",
    "code": "point_col <- ifelse(carseats$Urban == \"Yes\", \"orange\", \"darkgreen\")\n\nplot(carseats$Price, carseats$Sales,\n     col = point_col, pch = 17, cex = 0.9,\n     xlab = \"Sale Price (in USD)\",\n     ylab = \"Unit Sales (in thousands)\",\n     main = \"Sales vs. Price for Urban and Rural Stores\")\n\nlegend(\"topright\", legend = c(\"Urban\", \"Rural\"),\n       col = c(\"orange\", \"darkgreen\"), pch = 17, cex = 0.9)",
    "comment": "**Why this is safer:** `ifelse(Urban == \"Yes\", \"orange\", \"darkgreen\")` names the color for each group directly, so there's no need to remember that factor levels are alphabetical. The legend lists the same pairs.\n\n**`legend(\"topright\", ...)`**: position keyword instead of exact coordinates. Move it to `\"topleft\"` etc. if it covers points.\n\nSame plot otherwise: triangles (`pch = 17`), size 0.9. (Test-run in R.)",
    "key": false
   },
   {
    "id": "hw-02-p2_7-prac",
    "label": "Problem 2 · Part 7 · Practice: a problem just like it (scatterplot colored by group)",
    "question": "Plot mpg against weight. Use triangle points of size 0.9, colored blue for manual cars and red for automatic cars, with labels, a title and a legend.",
    "code": "point_cols <- ifelse(cars$trans == \"Manual\", \"blue\", \"red\")\nplot(cars$wt, cars$mpg,\n     pch = 17, cex = 0.9,\n     col = point_cols,\n     xlab = \"Weight (1000 lbs)\", ylab = \"Miles per gallon\",\n     main = \"Fuel Efficiency vs Weight\\n(by transmission)\")\nlegend(\"topright\", legend = c(\"Manual\", \"Automatic\"),\n       col = c(\"blue\", \"red\"), pch = 17, cex = 0.9)",
    "comment": "[![Problem 2 · Part 7 · Practice: a problem just like it (scatterplot colored by group)](files/plots/hw2-prac-scatter.png)](files/plots/hw2-prac-scatter.png)\n\n**Same request as the homework, piece by piece:**\n\n| Homework asks | Code |\n|---|---|\n| Sales **against** Price | `plot(x = Price, y = Sales)`: the \"against\" variable goes on **x** |\n| triangle points | `pch = 17` |\n| size 0.9 | `cex = 0.9` |\n| orange for urban, green for rural | a color per point: `ifelse(df$group == \"Yes\", \"orange\", \"green\")` |\n| legend | `legend(\"topright\", legend = ..., col = ..., pch = 17)` with the **same** colors and order |\n\n**Practice uses `ifelse()` for colors:** each point gets its color by name, so a wrong level order can't swap them. The homework's `colors[carseats$Urban]` depends on the levels being No, Yes.\n\n**Answer in words:** heavier cars get fewer miles per gallon (a clear negative trend). Manual cars are mostly the lighter, more efficient ones.\n\n**Recipe for \"plot Y against X, colored by group, with a legend\"**\n1. `cols <- ifelse(df$G == \"level1\", \"color1\", \"color2\")`.\n2. `plot(df$X, df$Y, col = cols, pch = ..., cex = ..., main, xlab, ylab)`.\n3. `legend(\"position\", legend = c(\"level1\", \"level2\"), col = c(\"color1\", \"color2\"), pch = ...)`, matching step 1.",
    "key": true
   },
   {
    "id": "hw-02-p2_8",
    "label": "Problem 2 [25pt] · Part 8 · histogram + boxplot in one image",
    "question": "Integrate the histogram of the Price variable and the boxplot of the Population variable into a single image. Personalize both plots as detailed in part 4, excluding notches in the histogram.",
    "code": "layout(matrix(c(1, 1, 1, 1, 2, 2), nrow = 1, ncol = 6, byrow = TRUE))\nhist(\n  carseats$Price,\n  breaks = 13,\n  col = \"lightsteelblue1\",\n  xlab = \"Sale Price (in USD)\",\n  ylab = \"Number of Stores\",\n  main = \"Histogram of Sale Price\",\n  xlim = c(0, round(max(carseats$Price), -2))\n)\nboxplot(\n  carseats$Population,\n  col = \"wheat1\",\n  notch = TRUE,\n  ylab = \"Population (in thousands)\",\n  main = \"Boxplot of Population\"\n)\n# (draws a plot)",
    "comment": "**Two plots in one image**\n- `layout(matrix(c(1, 1, 1, 1, 2, 2), nrow = 1))` splits the window into 6 slots in one row: plot 1 takes 4, plot 2 takes 2, so the histogram is twice as wide as the boxplot.\n- Then each plotting call fills the next panel.\n\n**Histogram details:** `breaks = 13` asks for about 13 bins (R may adjust). `xlim = c(0, round(max(...), -2))` sets the x-axis from 0 to the max rounded to the nearest hundred.\n\n**Simpler and more common:** `par(mfrow = c(1, 2))` = 1 row, 2 equal panels (Solution #2). Reset with `par(mfrow = c(1, 1))` afterwards so later plots aren't squeezed.\n\n**The question says \"no notches in the histogram\"**: notches only exist for boxplots, so `notch = TRUE` goes on the boxplot only.\n\n**Solve similar problems:** \"put plot A and plot B in one image\" → `par(mfrow = c(1, 2))`, draw both with their customizations, then `par(mfrow = c(1, 1))`. Use `layout()` only if the panels need different widths. Practice version below.",
    "key": false
   },
   {
    "id": "hw-02-p2_8-sol2",
    "label": "Problem 2 [25pt] · Part 8 · Solution #2 (par(mfrow) for two panels)",
    "question": "Integrate the histogram of the Price variable and the boxplot of the Population variable into a single image. Personalize both plots as detailed in part 4, excluding notches in the histogram.",
    "code": "par(mfrow = c(1, 2))          # 1 row, 2 plots side by side\n\nhist(carseats$Price,\n     col = \"lightsteelblue1\",\n     xlab = \"Sale Price (in USD)\",\n     ylab = \"Number of Stores\",\n     main = \"Histogram of Sale Price\")\n\nboxplot(carseats$Population,\n        col = \"wheat1\",\n        notch = TRUE,\n        ylab = \"Population (in thousands)\",\n        main = \"Boxplot of Population\")\n\npar(mfrow = c(1, 1))          # reset",
    "comment": "**`par(mfrow = c(rows, cols))`** is the standard way to put several plots in one image; plots fill the grid in order. Both panels get equal width (the posted `layout()` made the histogram wider).\n\n**Always reset** with `par(mfrow = c(1, 1))`, or every later plot stays squeezed into half the window.\n\nSame customizations as Part 4: labels, colors, notch on the boxplot only. (Test-run in R.)",
    "key": false
   },
   {
    "id": "hw-02-p2_8-prac",
    "label": "Problem 2 · Part 8 · Practice: a problem just like it (histogram + boxplot in one image)",
    "question": "Put a histogram of mpg and a boxplot of horsepower into a single image, with labels, colors and a notch on the boxplot only.",
    "code": "par(mfrow = c(1, 2))                       # 1 row, 2 panels\nhist(cars$mpg,\n     breaks = 8,\n     col = \"lightsteelblue1\",\n     xlab = \"Miles per gallon\", ylab = \"Number of cars\",\n     main = \"Histogram of MPG\")\nboxplot(cars$hp,\n        col = \"wheat1\",\n        notch = TRUE,\n        ylab = \"Horsepower\",\n        main = \"Boxplot of Horsepower\")\npar(mfrow = c(1, 1))                       # reset",
    "comment": "[![Problem 2 · Part 8 · Practice: a problem just like it (histogram + boxplot in one image)](files/plots/hw2-prac-two.png)](files/plots/hw2-prac-two.png)\n\n**Same request as the homework:** two **different** plots of two **different** variables, in one image.\n\n| Homework | Practice |\n|---|---|\n| `hist(carseats$Price, breaks = 13, ...)` | `hist(cars$mpg, breaks = 8, ...)` |\n| `boxplot(carseats$Population, notch = TRUE, ...)` | `boxplot(cars$hp, notch = TRUE, ...)` |\n| `layout(matrix(c(1,1,1,1,2,2), nrow = 1))`: unequal widths | `par(mfrow = c(1, 2))`: two equal panels |\n\n**`layout()` vs `par(mfrow)`:** `layout` lets panels have different sizes (the homework gave the histogram 4/6 of the width). `par(mfrow)` is simpler and almost always enough. Reset with `par(mfrow = c(1, 1))`; `layout` resets with `layout(1)`.\n\n**Notch only on the boxplot:** histograms have no notches (as the homework question warns).\n\n**Recipe for \"combine plot A and plot B into one image\"**\n1. `par(mfrow = c(1, 2))` for side by side, `c(2, 1)` for stacked.\n2. Draw plot A fully (all its customizations), then plot B.\n3. Reset: `par(mfrow = c(1, 1))`.",
    "key": true
   }
  ],
  "notes": "Due October 11, 11:59 PM. **Problem 1 (20 pt):** four functions: dice comparison with `mapply()`, an unfair-die frequency table, reordering a list by means, and `rnorm()` into a matrix. **Problem 2 (25 pt):** the carseats data: group averages and medians, which store charges the most, and customized boxplots, barplots, a scatterplot and a two-panel plot.\n\nEach part has the posted solution with a walkthrough, followed by a **Solution #2** that also works and explains why. Problem 1 alternatives show real R output; Problem 2 alternatives give the same numbers as the posted solution (checked in R on a data set with the same columns; run them on carseats for the actual values).\n\n**Bug in the posted Part 1.2 (`fun2`):** if a face never comes up, its count is missing and the other counts shift onto the wrong faces. Solution #2 fixes it with `table(factor(x, levels = 1:6))`.\n\n**Practice: a problem just like it.** After each part's Solution #2 there's a practice problem built the same way as the homework question, with new numbers or a new data set: dice, marbles, lists and matrices for Problem 1, and R's built-in `mtcars`/`iris` data for Problem 2, so it runs without any file. Each one shows the homework-to-practice mapping in a table and ends with a step-by-step recipe. Plot practice problems include the picture they make.",
  "takeaways": [
   "mapply(f, x, y) applies a function to pairs: x[1] with y[1], x[2] with y[2], …",
   "factor(x, levels = ...) before table() so categories with 0 counts still appear.",
   "order(sapply(lst, mean)) gives the positions to reorder a list (or data frame rows) by.",
   "Check the most specific condition first (divisible by 2 AND 3) in an if / else if chain.",
   "aggregate(y ~ group, FUN = mean, data = df) returns a data frame; tapply(df$y, df$group, mean) returns a vector or table.",
   "Factor levels are alphabetical (No, Yes): match colors/labels to that order, or use ifelse() to set colors by name.",
   "par(mfrow = c(1, 2)) puts two plots side by side; reset with par(mfrow = c(1, 1)).",
   "Every Problem 2 question has a twin in the practice chunks: mtcars (cyl, trans) plays carseats (ShelveLoc, Urban, US).",
   "In if / else if chains, put the combined condition ('divisible by both') FIRST."
  ],
  "updatedAt": "2026-10-15T18:10:00Z"
 },
 "lec-01": {
  "type": "lec",
  "num": "01",
  "title": "R basics: calculator, help, variables and the environment",
  "date": "2026-09-09",
  "exams": [],
  "topics": [
   "arithmetic",
   "assignment",
   "environment",
   "working directory"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c001",
    "label": "Using R as a calculator",
    "code": "3 + 2\n\n3 - 2\n\n3*2\n\n3/2\n\n(2+3)*4 - (3-7)/5\n\n3^2\n\nsqrt(100)\n\nlog(16, base = 4)\n\nsin(pi/2)\n\n5 == 5                 # logical operator; think of it as a question: is 5 equal to 5? Output: TRUE or FALSE\n\nplot(1:10)             # plotting numbers from 1 to 10",
    "comment": "",
    "key": false
   },
   {
    "id": "c002",
    "label": "Getting help",
    "code": "?sin                   # Displays all information about this function in the output pane (bottom right corner, help tab)\n\n?mean",
    "comment": "",
    "key": false
   },
   {
    "id": "c003",
    "label": "Assigning variables",
    "code": "x <- 4\n\ny <- 5\n\nx - y                          # applies operations on these variables\n\nx*y",
    "comment": "",
    "key": false
   },
   {
    "id": "c004",
    "label": "Working Environment",
    "code": "ls()                  # lists all variables in the global environment\n\nrm()                  # removes certain variables from the global environment (should list those variables in the parentheses) \n\nrm(list = ls())       # removes all variables from the global environment \n\nsave.image()          # saves information stored in the global environment",
    "comment": "",
    "key": false
   },
   {
    "id": "c005",
    "label": "Working Directory",
    "code": "getwd()               # path to the working directory (place where R stores saved files) ",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_01.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-01.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-02": {
  "type": "lec",
  "num": "02",
  "title": "Data types, vectors and lists",
  "date": "2026-09-14",
  "exams": [],
  "topics": [
   "data types",
   "type conversion",
   "vectors",
   "lists"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c006",
    "label": "Numeric Data",
    "code": "x_num <- 1\n\nprint(x_num)\n\ny_num <- -2.35\n\nprint(y_num)\n\nclass(x_num)  #checking the type of data\n\nclass(y_num)  #checking the type of data",
    "comment": "",
    "key": false
   },
   {
    "id": "c007",
    "label": "Logical Data",
    "code": "x_logical <- TRUE\n\nprint(x_logical)\n\nclass(x_logical)\n\ny_logical <- FALSE\n\nprint(y_logical)\n\nclass(y_logical)\n\nz_logical <- T\n\nprint(z_logical)\n\nclass(z_logical)",
    "comment": "",
    "key": false
   },
   {
    "id": "c008",
    "label": "Character Data (Strings)",
    "code": "x_char <- \"2102\"\n\nprint(x_char)\n\nclass(x_char)\n\ny_char <- \"Welcome to STAT 2102!\"\n\nprint(y_char)\n\nclass(y_char)",
    "comment": "",
    "key": false
   },
   {
    "id": "c009",
    "label": "Converting Data Types",
    "code": "## Converting into Numeric\n\n# Converting Logical Data into Numeric\n\nis.numeric(x_logical)\n\nlogical1 <- as.numeric(x_logical)\n\nclass(logical1)\n\nprint(logical1)\n\nlogical2 <- as.numeric(y_logical)\n\nprint(logical2)\n\n# Converting Character Data into Numeric\n\nis.numeric(y_char)\n\nchar1 <- as.numeric(y_char)\n\nclass(char1)\n\nprint(char1)\n\nis.numeric(x_char)\n\nchar2 <- as.numeric(x_char)\n\nclass(char2)\n\nprint(char2)\n\n## Converting into Logical\n\n# Converting Numeric Data into Logical Data\n\n# as.logical() function converts 0s to FALSE and any other numeric value\n# into TRUEs\n\nis.logical(x_num)\n\nlogi1 <- as.logical(x_num)\n\nclass(logi1)\n\nprint(logi1)\n\n## Converting into Character\n\n# Any Data Type can be converted into Character\n\nis.character(x_num)\n\nchar3 <- as.character(x_num)\n\nclass(char3)\n\nprint(char3)",
    "comment": "",
    "key": false
   },
   {
    "id": "c010",
    "label": "Data Structures › Vectors",
    "code": "# Creating vectors using c() function\n\nvec1 <- c(1, 2, 3, 4, 5)\n\nprint(vec1)\n\nvec2 <- c(\"fall\", \"winter\", \"spring\", \"summer\")\n\nprint(vec2)\n\n# Creating vectors using \":\" operator\n\nvec3 <- 3:11\n\nprint(vec3)\n\n# Creating vectors using seq() function\n\nvec4 <- seq(from = 1, to = 5, by = 0.7)\n\nprint(vec4)\n\n# Creating vectors using rep() function\n\nvec5 <- rep(5, times = 3)\n\nprint(vec5)\n\nvec6 <- rep(c(1,3,4), times = 2)\n\nprint(vec6)\n\nvec7 <- rep(c(1,2,3),times = 2, each = 3)\n\nprint(vec7)\n\n# length of the vector\n\nlength(vec1) # shows how many elements vec1 contains\n\nlength(vec7) # shows how many elements vec7 contains\n\n# Adding elements to the vector\n\nvec8 <- c(vec1, c(15, 3, 4))\n\nprint(vec8)\n\nvec9 <- c(vec1, vec3)\n\nprint(vec9)\n\nvec1 <- append(vec1, 55, after = 1) # Add 55 as a second element to the vector\n\nprint(vec1)\n\n# Subsetting (Indexing) vectors using square brackets []\n\nvec1[1]                 # selects the first element of the vec1\n\nvec9[c(1,5,8)]          # selects the 1st, 5th, and 8th elements of the vec9\n\nvec9[6:8]          # selects the 6th, 7th, and 8th elements of the vec9\n\nvec1[c(T, T, F, F, F, F)]  # selects the first and second elements of vec1\n\nvec1[vec1 > 2.5]        # select all elements of vec1 that are greater than 2.5\n\nvec1[vec1 != 3]         # select all elements of vec1 that are not equal to 3\n\nvec2[-4]                # selects all elements in the vec1 except 4th one\n\nvec2[c(-1, -2)]                # selects all elements in the vec1 except the 1st and 2nd ones\n\n# Assigning new values to the elements of the vector\n\nvec1[1] <- 100\n\nprint(vec1)\n\n# Operations on vectors\n\nvec1 + 1                 # adds 1 to each element of vec1\n\n2^(1:3)                  # for each element of the vector, raises 2 to the power of its elements\n\nc(1, 2, 3) + c(4, 5, 6)  # does the elementwise addition\n\nc(1, 2, 3) + c(4, 5, 6, 7)  # Be careful!! vectors should have the same length\n\n# Vectors are homogeneous (vector's elements should be of the same type)\n\nvec8 <- c(2, 3.5, \"fall\", 2.7)   #it works, but now all elements are converted into characters \n\nprint(vec8)\n\nclass(vec8)    ",
    "comment": "",
    "key": false
   },
   {
    "id": "c011",
    "label": "Data Structures › Lists",
    "code": "# Creating lists using list() function\n\nlist1 <- list(2, 3.5, \"fall\", 2.7)\n\nprint(list1)\n\nlist2 <- list(c(2,4,10), c(\"one\", \"two\", \"three\"), 45)\n\nprint(list2)\n\n# Subsetting/Indexing lists using square brackets (single and double), [] and [[]]\n\nlist2[1]                                      # Selecting the first element of the list2 as a list\n\nlist2[[1]]                                    # Selecting the first element of the list2 as an element (as it is)\n\nlist2[[1]][2]                                 # Selecting the second element of the first element of the list2\n\n# Merging lists\n\na <- list(1, 2, 3)\n\nb <- list (4, 5, 6)\n\nc <- c(a, b)               # merges a and b list into one list, which contains 6 elements (elements of the list a and list b combined)\n\nd <- list(a, b)            # merges a and b list into one list, which contains 2 elements (list a and list b)\n\n# Flatten a list into a vector\n\nlist3 <- list (c(1,2,3), 45, c(20, -5))\n\nunlist(list3)                              # converting list3 into a vector\n\n# Adding and removing elements from a list; manipulating elements in the list\n\nlist3[4] <- 100                            # adding an element to the list\n\nprint(list3)\n\nlist3[2] <- NULL                           # removing the second element in the list3\n\nprint(list3)\n\nlist3[[1]][3] <- 70                        # changing the second element of the first element of the list3\n\nprint(list3)",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_02.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-02.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-03": {
  "type": "lec",
  "num": "03",
  "title": "Matrices and data frames",
  "date": "2026-09-16",
  "exams": [],
  "topics": [
   "matrices",
   "data frames",
   "subsetting"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c012",
    "label": "Matrices",
    "code": "### Creating Matrices\n\n## Elements are arranged sequentially by row\n\nmatrix_1 <- matrix(1:12, nrow = 4, byrow = TRUE)\n\nprint(matrix_1)\n\n## Elements are arranged sequentially by column\n\nmatrix_2 <- matrix(1:12, nrow = 4, byrow = FALSE)\n\nprint(matrix_2)\n\n## Specifying the number of columns instead\n\nmatrix_3 <- matrix(1:12, ncol = 4, byrow = TRUE)\n\nprint(matrix_3)\n\n### Accessing Matrix Elements \n\n## Accessing the element in the 3rd columns and 1st row\n\nmatrix_1[1, 3]\n\n## Accessing the element in the 2nd column and 4th row\n\nmatrix_1[4, 2]\n\n## Accessing only the 2nd row\n\nmatrix_1[2, ]\n\n## Accessing only the 3rd column\n\nmatrix_1[ ,3]\n\n## Accessing only the 2nd and 3rd rows \n\nmatrix_1[c(2,3), ]\n\n### Adding and Removing Rows & Columns \n\nprint(matrix_1)\n\n## Adding a column \n\nmatrix_5 <- cbind(matrix_1, c(10, 20, 30, 40))\n\nprint(matrix_5)\n\n## Adding a row\n\nmatrix_6 <- rbind(matrix_1, c(10, 20, 30))\n\nprint(matrix_6)\n\n# Removing the 1st and 2nd rows and the 1st column from a matrix\n\nmatrix_7 <- matrix_1[c(-1, -2), -1]\n\nmatrix_7\n\n### Assigning Values to Matrix Elements \n\n## Assigning a single value\n\nmatrix_1[1, 1] <- 100\n\nprint(matrix_1)\n\n## Assigning a row\n\nmatrix_1[2, ] <- c(11, 22, 33)\n\nprint(matrix_1)\n\n## Replace elements that are equal to 8 with 0\n\nmatrix_1[matrix_1 == 8] <- 0\n\nprint(matrix_1)\n\n### Matrix Dimensions \n\n## Matrix dimensions\n\ndim(matrix_1)\n\n## Number of elements stored in a matrix\n\nlength(matrix_1)",
    "comment": "",
    "key": false
   },
   {
    "id": "c013",
    "label": "Data Frames › Creating a data frame",
    "code": "Name <- c(\"James\", \"Linda\", \"Stacy\", \"Mary\", \"Tom\", \"Anna\", \"Bob\", \"Jeniffer\", \"Lucas\", \"Amy\")\n\nAge <- c(22, 56, 34, 48, 19, 31, 68, 72, 39, 52)\n\nState <- c(\"California\", \"New York\", \"New York\", \"Michigan\", \"Texas\", \"Ohio\", \n           \n           \"Arizona\", \"Florida\", \"Nebraska\", \"Indiana\")\n\nSalary <- c(30000, 96500, 72000, 54300, 25000, 61000, 74700, 40000, 83000, 92400)\n\ndf <- data.frame(Name, Age, State, Salary)\n\nprint(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c014",
    "label": "Data Frames › Data frame structure",
    "code": "str(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c015",
    "label": "Data Frames › Summary of variables stored in a data frame",
    "code": "summary(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c016",
    "label": "Data Frames › Taking a look at your data",
    "code": "head(df)\n\ntail(df)\n\nhead(df, 3)",
    "comment": "",
    "key": false
   },
   {
    "id": "c017",
    "label": "Data Frames › Column names",
    "code": "colnames(df)\n\ncolnames(df)[1] <- \"NAME\"\n\nprint(df)\n\ncolnames(df) <- c(\"NAME\", \"AGE\", \"STATE\", \"SALARY\")\n\nprint(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c018",
    "label": "Data Frames › Subsetting/Extracting  Elements/Columns/Rows from a Data Frame",
    "code": "## Extracting the first column using its position; output: data frame\n\ndf[1]\n\n## Extracting the first column using its position; output: vector\n\ndf[[1]]\n\n## Extracting a column using its name; output: data frame\n\ndf[\"AGE\"]\n\ndf[c(\"AGE\", \"STATE\")]\n\n## Extracting a column using its name; output: vector\n\ndf[[\"AGE\"]]\n\n## Extracting a column using its name and '$' operator; output: vector\n\ndf$AGE\n\n## Extracting a single element\n\ndf[1, 2]\n\n## Extracting multiple elements\n\ndf[1:4, c(1, 3)]\n\n## Extracting the first row only\n\ndf[1, ]\n\n## Extracting the third column only\n\ndf[, 3]\n\n## Extracting all elements except the second column\n\ndf[, -2]\n\n## Extracting elements using logical operator\n\ndf[df$AGE < 50, ]",
    "comment": "",
    "key": false
   },
   {
    "id": "c019",
    "label": "Data Frames › Assigning new value to data frame elements",
    "code": "df[1, 4] <- 100000\n\nprint(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c020",
    "label": "Data Frames › Adding/Removing Columns/Rows",
    "code": "## Adding a new column using `$` operator\n\ndf$EXPERIENCE <- c(2, 30, 10, 22, 1, 12, 40, 55, 15, 22)\n\nprint(df)\n\n## Adding a new column using `cbind()` function\n\nSex <- c(\"Male\", \"Female\", \"Female\", \"Female\", \"Male\", \"Female\", \"Male\",\n         \n         \"Female\", \"Male\", \"Female\")\n\ndf_2 <- cbind(df, Sex)\n\nprint(df_2)\n\n## Adding a new row using `rbind()` function\n\nnew_obs <- data.frame(NAME = \"Jack\", AGE = 41, STATE = \"Texas\", SALARY = 150000, EXPERIENCE = 20)\n\ndf_3 <- rbind(df, new_obs)\n\nprint(df_3)\n\n## Removing columns from a data frame using a `[]` function\n\ndf_4 <- df_3[, -4]\n\nprint(df_4)\n\n## Removing columns by assigning a `NULL` value\n\ndf_3[\"SALARY\"] <- NULL\n\nprint(df_3)\n\n## Removing rows from a data frame\n\ndf_3[-11, ]",
    "comment": "",
    "key": false
   },
   {
    "id": "c021",
    "label": "Data Frames › Re-ordering columns/rows in a data frame",
    "code": "## Re-ordering columns in a data frame\n\ndf_3 <- df_3[, c(\"EXPERIENCE\", \"NAME\", \"STATE\", \"AGE\")]\n\n## Re-ordering rows in a data frame\n\ndf_3[order(df_3$EXPERIENCE), ]     # Ascending order\n\ndf_3[order(df_3$EXPERIENCE, decreasing = TRUE), ] # Descending order",
    "comment": "",
    "key": false
   },
   {
    "id": "c022",
    "label": "Data Frames › Checking dimensions of a data frame",
    "code": "## Data frame dimensions\n\ndim(df)\n\n## Number of columns in a data frame\n\nncol(df)\n\n## Number of rows in a data frame\n\nnrow(df)",
    "comment": "",
    "key": false
   },
   {
    "id": "c023",
    "label": "Factors",
    "code": "### Creating Factors \n\nvec1 <- c(\"YES\", \"NO\", \"YES\", \"YES\", \"YES\", \"NO\", \"NO\", \"YES\")\n\nprint(vec1)\n\nis.factor(vec1)\n\nfac1 <- factor(vec1)\n\nprint(fac1)\n\nis.factor(fac1)\n\n#####\n\nvec2 <- c(\"Jazz\", \"Rock\", \"Classic\", \"Pop\", \"Classic\", \"Jazz\", \"Jazz\", \"Rock\")\n\nfac2 <- factor(vec2)\n\nprint(fac2)\n\n####\n\nvec3 <- c(1, 2, 3, 2, 2, 3, 1, 3, 2, 3, 1, 1)\n\nfac3 <- factor(vec3)\n\nprint(fac3)",
    "comment": "",
    "key": false
   },
   {
    "id": "c024",
    "label": "Segmenting a numerical variable into intervals",
    "code": "age_factored <- cut(df_3$AGE, 3)\n\nprint(age_factored)\n\nage_factored <- cut(df_3$AGE, 3, labels = c(\"Group1\", \"Group2\", \"Group3\"))\n\nprint(age_factored)\n\n### Levels of a Factor\n\nlevels(fac1)\n\nlevels(fac2)\n\nlevels(fac3)\n\n### Counting Elements of a Factor/Frequency of levels\n\n# Calculating the number of elements stored in a factor\n\nlength(fac2)\n\n# Displaying the frequency of each level of a factor\n\ntable(fac2)\n\n### Converting Numeric Data into Factors \n\n# Converting numeric data into factors using as.factor() function\n\nvec3 <- c(0, 1, 2, 2, 1, 0, 2, 1, 0)\n\nfac9 <- as.factor(vec3)\n\nprint(fac9)",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_03.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-03.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-05": {
  "type": "lec",
  "num": "05",
  "title": "Comparison and logical operators, if-else, for and while loops",
  "date": "2026-09-21",
  "exams": [],
  "topics": [
   "operators",
   "if-else",
   "ifelse()",
   "for loops",
   "while loops"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c025",
    "label": "Setup",
    "code": "x <- c(1, 2, 3, 4)\n\ny <- c(4, 2, 3, 1)",
    "comment": "",
    "key": false
   },
   {
    "id": "c026",
    "label": "Comparison Operators",
    "code": "###   == (Equal)\n\nprint (5 == 5)\n\nprint(5 == 7)\n\nprint(x == y)\n\n###   != (Not equal)\n\nprint(5 != 5)\n\nprint(5 != 10)\n\nprint( x != y)\n\n###   > (Greater than)\n\nprint(5 > 2)\n\nprint(x > y)\n\n###   < (Less than)\n\nprint(5 < 2)\n\nprint(x < y)\n\n###   >= (Greater than or equal to)\n\nprint(5 >= 5)\n\nprint(5 >= 1)\n\nprint(x >= y)\n\n###   <= (Less than or equal to)\n\nprint(5 <= 10)\n\nprint(5 <= 4)\n\nprint(x <= y)",
    "comment": "",
    "key": false
   },
   {
    "id": "c027",
    "label": "Logical Operators",
    "code": "### & (Element-wise logical AND operator. It returns TRUE if both elements are TRUE)\n\nprint(TRUE & TRUE)\n\nprint (TRUE & FALSE)\n\nprint(FALSE & FALSE)\n\nprint (5 == 5 & 10 < 6)\n\nprint(4!= 3 & 2 < 9)\n\nprint(x == y & x < y)\n\n###  |  (Element-wise logical OR operator. It returns TRUE if one of the elements is TRUE)\n\nprint(TRUE | TRUE)\n\nprint (TRUE | FALSE)\n\nprint(FALSE | FALSE)\n\nprint (5 == 5 | 10 < 6)\n\nprint(4!= 3 | 2 < 9)\n\nprint(x == y | x < y)\n\n### ! (Logical NOT (!) operator. It return FALSE if a statement is TRUE)\n\nprint (!TRUE)\n\nprint(!FALSE)\n\nprint(!(4<2))\n\nprint(!(2 == 2 & 3 < 4))",
    "comment": "",
    "key": false
   },
   {
    "id": "c028",
    "label": "IF Statement",
    "code": "### If Statement with a TRUE condition\n\nif (5 > 2) {\n  \n  print(\"5 is greater than 2\")\n  \n}\n\n### If Statement with a FALSE condition (it will not execute the command inside the brackets)\n\nif (5 < 2) {\n  \n  print(\"5 is greater than 2\")\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c029",
    "label": "IF - ELSE Statement",
    "code": "a <- 5 ; b <- 2\n\nif (b > a) {\n  \n  print (\"b is greater than a\")\n  \n} else {\n  \n  print(\"b is not greater than a\")\n}\n\na <- 2 ; b <- 5   # try again the above conditional statement",
    "comment": "",
    "key": false
   },
   {
    "id": "c030",
    "label": "Else if Statement",
    "code": "if (b > a) {\n  \n  print (\"b is greater than a\")\n  \n} else if (a == b) {\n  \n  print (\"a and b are equal\")\n  \n} else {\n  \n  print (\"a is greater than b\")\n  \n}\n\na <- 2; b <- 2 # try again the above conditional statement",
    "comment": "",
    "key": false
   },
   {
    "id": "c031",
    "label": "Nested IF - ELSE Statements",
    "code": "x <- 50\n\nif (x > 10) {\n  \n  print(\"Above ten\")\n  \n  if (x > 20) {\n    \n    print(\"and also above 20!\")\n    \n  } else {\n    \n    print(\"but not above 20.\")\n    \n  }\n  \n} else {\n  \n  print(\"below 10.\")\n  \n}\n\nx <- 15    # try again the above conditional statement\n\nx <- 5     # try again the above conditional statement",
    "comment": "",
    "key": false
   },
   {
    "id": "c032",
    "label": "Condition Statements with & and | operators",
    "code": "a <- 200; b <- 33; c <- 500\n\n##  &\n\nif (a > b & c == a) {\n  \n  print(\"Both conditions are true\")\n  \n} else {\n  \n  print (\"At least one is false\")\n}\n\n##  |\n\nif (a > b | c == a) {\n  \n  print(\"At least one is true\")\n  \n} else {\n  \n  print (\"Both conditions are false\")\n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c033",
    "label": "ifelse() Statement: Working with vectors",
    "code": "x <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n\n## check if the below statement works\n\nif(x %% 2 == 0) {\n  \n  print (\"even\")\n  \n}  else {\n  \n  print (\"odd\")\n  \n}\n\n##\n\nifelse(x %% 2 == 0, \"even\", \"odd\")\n\n### Useful functions: all(), any()\n\nx <- c(-2, -1, 0, 1, 2)\n\n## all(). It return TRUE if all elements of a vector satisfy the condition\n\nif(all(x < 0)) {\n  \n  print(\"all are negative\")\n  \n} else {\n  \n  print (\"not all of them are negative\")\n  \n}\n\n## any(). It return TRUE if at least one of elements in a vector satisfies the condition\n\nif(any(x < 0)) {\n  \n  print(\"some are negative\")\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c034",
    "label": "FOR Loops",
    "code": "###\n\nfor (i in 1:10){\n  \n  print (i)\n  \n}\n\n###\n\nx <- c(10, 20, 30, 40, 50)\n\nfor (i in 1:length(x)){\n  \n  print(x[i])\n  \n}\n\n###\n\nz <- c()   # creating an empty vector.\n\nfor (i in 1:5){\n  \n  z[i] <- 2*i\n  \n}\n\nprint(z)\n\n###\n\na <- list()   # creating an empty list\n\nfor (i in 1:4){\n  \n  a[[i]] <- rnorm(i)\n  \n}\n\nprint(a)\n\n### \n\nx <- c(1, 2, 3, 4, 5)\n\nfor (i in 1:length(x)){\n  \n  x[i] <- x[i] ^ 2\n  \n}\n\nprint(x)\n\n### \n\ncurrent.sum <- 0\n\nfor(i in 1:100) {\n  \n  current.sum <- current.sum + i\n  \n}\n\n### Break Statement\n\nfor(i in 1:100) {\n  \n  if(i > 50){\n    \n    break\n    \n  }\n  \n  print(i)\n  \n}\n\n### Next Statement\n\nfor(i in 1:100) {\n  \n  if(i %% 2 == 0){\n    \n    next\n    \n  }\n  \n  print(i)\n  \n}\n\n### For Loop with If-Else combined\n\nx <- 10:19\n\nfor (i in 1:length(x)){\n  \n  if(x[i] %% 2 == 0){\n    \n    print(paste(\"The number\", x[i], \"is even\"))\n    \n  } else {\n    \n    print(paste(\"The number\", x[i], \"is odd\"))\n    \n  }\n  \n}\n\n### Nested For Loop\n\nmatrix1 <- matrix(ncol = 4, nrow = 5)\n\nfor (i in 1:nrow(matrix1)){\n  \n  for (j in 1:ncol(matrix1)){\n    \n    matrix1[i, j] <- i*j\n    \n  }\n}\n\nprint(matrix1)",
    "comment": "",
    "key": false
   },
   {
    "id": "c035",
    "label": "While Loops",
    "code": "###\n\ni <- 1\n\nwhile (i < 10){\n  \n  print(i)\n  \n  i <- i + 1\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c036",
    "label": "While Loops › Version 1: Works fine",
    "code": "i <- 0\n\nwhile (i < 15){\n  \n  i <- i + 1\n  \n  if(i %% 2 == 0){\n    \n    next\n  }\n  \n  print(i)\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c037",
    "label": "While Loops › Version 2: there is a problem.",
    "code": "i <- 1\n\nwhile (i < 15){\n  \n  if(i %% 2 == 0){\n    \n    next\n  }\n\n  print(i)\n    \n  i <- i + 1\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c038",
    "label": "While Loops › Version 3: there is a problem.",
    "code": "i <- 1\n\nwhile (i < 15){\n  \n  print(i)\n  \n  if(i %% 2 == 0){\n    \n    next\n  }\n  \n  i <- i + 1\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c039",
    "label": "While Loops › Version 4: there is a problem.",
    "code": "i <- 1\n\nwhile (i < 15){\n  \n  print(i)\n  \n  i <- i + 1\n  \n  if(i %% 2 == 0){\n    \n    next\n  }\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c040",
    "label": "While Loops › While Loop with Break Statement",
    "code": "i <- 1\n\nwhile (i < 20){\n  \n  print (i)\n  \n  i <- i + 1\n  \n  if (i == 5){\n    \n    break\n    \n  }\n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c041",
    "label": "While Loops › What would the output be?",
    "code": "i <- 1\n\nwhile (i < 20){\n  \n  print (i)\n  \n  if (i == 5){\n    \n    break\n    \n  }\n  \n  i <- i + 1\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c042",
    "label": "While Loops › What would the output be?",
    "code": "i <- 1\n\nwhile (i < 20){\n  \n  if (i == 5){\n    \n    break\n    \n  }\n  \n  print (i)\n  \n  i <- i + 1\n  \n}",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_05.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-05.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-06": {
  "type": "lec",
  "num": "06",
  "title": "Writing functions",
  "date": "2026-09-23",
  "exams": [],
  "topics": [
   "functions",
   "default arguments",
   "lazy evaluation",
   "scope"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c043",
    "label": "Creating a function",
    "code": "# Creating a simple function with no arguments\n\nfirst_function <- function() { \n  \n  print(\"Hello class 2102!\")\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c044",
    "label": "Calling a function: to call a function, use the function name followed by parenthesis",
    "code": "first_function()",
    "comment": "",
    "key": false
   },
   {
    "id": "c045",
    "label": "Another example of a function with no arguments",
    "code": "new_function <- function(){\n  \n  for(i in 1:5) {\n    \n    print(i^2)\n    \n  }\n  \n}\n\nnew_function()\n\nnew_function          # allows you to see the function body\n\n# Creating a function with arguments",
    "comment": "",
    "key": false
   },
   {
    "id": "c046",
    "label": "a function with one argument",
    "code": "fun_1 <- function(x){\n  \n  return(x^2)\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c047",
    "label": "calling a function with argument",
    "code": "fun_1(x = 5)\n\nfun_1(5)",
    "comment": "",
    "key": false
   },
   {
    "id": "c048",
    "label": "a function with multiple arguments",
    "code": "fun_2 <- function(x, y){\n  \n  return(x - y)\n  \n}",
    "comment": "",
    "key": false
   },
   {
    "id": "c049",
    "label": "Calling a function with multiple arguments",
    "code": " \nfun_2(x = 5, y = 7)\n\nfun_2(y = 7, x = 5)\n\nfun_2(5, 7)  \n\nfun_2(7, 5)\n\nfun_2(7)    ## ERROR! Wrong number of arguments.\n\nfun_2(7, 5, 3)  ## ERROR! Wrong number of arguments.",
    "comment": "",
    "key": false
   },
   {
    "id": "c050",
    "label": "Functions with default parameter values",
    "code": "fun_3 <- function(x = 2, y){\n  \n  return (x - y)\n  \n}\n\nfun_3(y = 4)\n\nfun_3(x = 10, y = 3)  # but you can still assign new values to default parameters if you want to",
    "comment": "",
    "key": false
   },
   {
    "id": "c051",
    "label": "Vectors as arguments of a function",
    "code": "vec1 <- c(1, 2, 3, 4)\n\nvec2 <- 1:5\n\nfun_4 <- function(x, y){\n  \n  return(x + y)\n  \n}\n\nfun_4(x = vec1, y = vec2)\n\n# Lazy Evaluation of functions",
    "comment": "",
    "key": false
   },
   {
    "id": "c052",
    "label": "when needed by the function body.",
    "code": "fun_5 <- function(x, y){\n  \n  return(x + 2)\n}\n\nfun_5(x = 3)          # Works just fine.\n\nfun_5(y = 3)          # ERROR! Missing \"x\" argument.",
    "comment": "",
    "key": false
   },
   {
    "id": "c053",
    "label": "Consider the following examples. What will be the output of these functions?",
    "code": "##\n\na <- 5                        # this variable exists in the global environment\n\nfun_6 <- function(x){\n  \n  return(x + a)\n  \n}\n\nfun_6(x = 2)\n\n##\n\nfun_7 <- function(x){\n  \n  a <- 10                    # this variable exists in the environment of fun_7\n  \n  return(x + a)\n  \n}\n\nfun_7(x = 2)\n\n##\n\nfun_8 <- function(x){\n  \n  a <- 10                   # this variable exists in the environment of fun_8\n  \n  b <- 20                   # this variable exists in the environment of fun_8\n  \n  return(x + a + b)\n  \n}\n\nfun_8(x = 30)",
    "comment": "",
    "key": false
   },
   {
    "id": "c054",
    "label": "Global Variables",
    "code": "fun_9 <- function(x){\n  \n  a <<- 10                # this variable will exist in both global and functional environments\n  \n  return(x + a)\n  \n}\n\nfun_9(x = 2)",
    "comment": "",
    "key": false
   },
   {
    "id": "c055",
    "label": "Nested Functions",
    "code": "fun_10 <- function(x, y){\n  \n  func_11 <- function(){\n    \n    return(x + y)\n    \n  }\n  \n  return(2*func_11())\n  \n}\n\nfun_10(2, 3)",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_06.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-06.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-07": {
  "type": "lec",
  "num": "07",
  "title": "Importing data, summary statistics and the apply family",
  "date": "2026-09-28",
  "exams": [],
  "topics": [
   "read.csv",
   "summary statistics",
   "apply",
   "lapply",
   "sapply",
   "mapply"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c056",
    "label": "Importing Data into R",
    "code": "## read.table() function\n\n## Using the file path\n\ndata1 <- read.table(file = \"C:/Users/alexp/OneDrive/Desktop/lung_capacity.txt\",\n                    \n                    header = T, sep = \"\")\n\n## Checking your imported data\n\nView(data1)\n\n## Working Directory\n\ngetwd()\n\n## Changing the Working Directory\n\nsetwd(\"C:/Users/alexp/OneDrive/Desktop\")\n\n## Importing data using the file name only\n\ndata1 <- read.table(file = \"lung_capacity.txt\", header = T, sep = \"\")\n\n## read.csv() function\n\ndata2 <- read.csv(file = \"C:/Users/alexp/OneDrive/Desktop/lung_capacity_2.csv\",\n                  \n                  header = T)\n\n# Exporting Data from R \n\n## write.table() function\n\nwrite.table(data2, file = \"new_data.csv\", col.names = TRUE, row.names = FALSE,\n            \n            sep = \",\")\n\n## write.csv() function\n\nwrite.csv(data2, file = \"new_data_2.csv\", row.names = FALSE)",
    "comment": "",
    "key": false
   },
   {
    "id": "c057",
    "label": "Basic Statistics Built-in Functions",
    "code": "## Summary\n\nsummary(data1$Age)\n\n## Central Tendency\n\n## Mean\n\nmean(data1$Age)\n\n## Median\n\nmedian(data1$Age)\n\n## Spread\n\n## Variance\n\nvar(data1$Age)\n\n## Standard Deviation\n\nsd(data1$Age)\n\nsqrt(var(data1$Age))\n\n## Quantiles\n\nquantile(data1$Age)\n\nquantile(data1$Age, c(0.3, 0.8))\n\n## Inverse Quantiles\n\nmean(data1$Age < 11)\n\n## IQR\n\nIQR(data1$Age)\n\nquantile(data1$Age, 0.75) - quantile(data1$Age, 0.25)\n\n## Minimum\n\nmin(data1$Age)\n\n## which.min()\n\nwhich.min(data1$Age)\n\n## Maximum\n\nmax(data1$Age)\n\n## which.max()\n\nwhich.max(data1$Age)\n\n## Range\n\nrange(data1$Age)\n\nmax(data1$Age) - min(data1$Age)\n\n## Summation\n\nsum(data1$Age)\n\nsum(data1$Age)/length(data1$Age)   #average\n\n## Cumulative Summation\n\nx <- c(2, 4, 3, 5, 10)\n\ncumsum(x)",
    "comment": "",
    "key": false
   },
   {
    "id": "c058",
    "label": "Functional Programming: apply() Family of Functions",
    "code": "## apply() Function\n\nmatrix1 <- matrix(1:20, nrow = 5, byrow = T)\n\napply(matrix1, 2, mean)\n\napply(matrix1, 1, mean)\n\nfunction_1 <- function(x){\n  \n  range <- max(x) - min(x)\n  \n  return(range)\n}\n\napply(matrix1, 2, function_1)\n\n## lapply() Function\n\nlist1 <- list(c(1, 4, 10), 24, 1:5)\n\napply(list1, 2, length)\n\nlapply(list1, length)\n\n## sapply() Function\n\nsapply(list1, length)\n\n## mapply() Function\n\nlist(rep(1, 4), rep(2, 3), rep(3, 2), rep(4, 1))\n\nmapply(rep, 1:4, 4:1)",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_07.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-07.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-08": {
  "type": "lec",
  "num": "08",
  "title": "tapply, aggregate and base R plots",
  "date": "2026-09-30",
  "exams": [],
  "topics": [
   "tapply",
   "aggregate",
   "histograms",
   "barplots",
   "boxplots",
   "scatterplots"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c059",
    "label": "Importing Lung Capacity Data into R",
    "code": "data <- read.table(file = \"C:/Users/alexp/OneDrive/Desktop/lung_capacity.txt\", header = T,\n                   \n                   sep = \"\", stringsAsFactors = TRUE)",
    "comment": "",
    "key": false
   },
   {
    "id": "c060",
    "label": "Applying functions over subsets/groups of a vector",
    "code": "### tapply() function\n\n##\n\ntapply(data$Age, data$Sex, mean)\n\n##\n\nfunction_1 <- function(x){\n  \n  return(c(Mean = mean(x), Median = median(x)))\n  \n}\n\ntapply(data$Age, data$Sex, function_1)\n\n##\n\ntapply(data$Age, list(data$Sex, data$Smoke), mean)\n\n##\n\ntapply(data$Age, list(data$Sex, data$Smoke, data$Status), mean)\n\n### aggregate() function\n\n##\n\naggregate(data$LungCap, list(data$Smoke), median)\n\n##\n\naggregate(data$LungCap, list(data$Smoke, data$Sex), median)\n\n##\n\naggregate(data$LungCap, list(data$Smoke, data$Sex, data$Status), median)\n\n##\n\naggregate(data$LungCap, list(data$Smoke, data$Sex, data$Status), function_1)\n\n##\n\naggregate(data[ ,c(\"Age\", \"LungCap\")], list(data$Smoke), median)",
    "comment": "",
    "key": false
   },
   {
    "id": "c061",
    "label": "Data Visualization in R (Base R) › Histograms",
    "code": "hist(data$Age)\n\n## Adding labels\n\nhist(data$Age,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"FREQUENCY\",\n     \n     main = \"Histogram of AGE\")\n\n## Changing a number of bins\n\nhist(data$Age,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"FREQUENCY\",\n     \n     main = \"Histogram of AGE\",\n     \n     breaks = seq(0, 20, 2)\n     \n     )\n\n## Changing the color of bins and borders\n\nhist(data$Age,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"FREQUENCY\",\n     \n     main = \"Histogram of AGE\",\n     \n     breaks = seq(0, 20, 2),\n     \n     col = \"lightpink\",\n     \n     border = \"black\")\n\n## zooming in and out\n\nhist(data$Age,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"FREQUENCY\",\n     \n     main = \"Histogram of AGE\",\n     \n     breaks = seq(0, 20, 2),\n     \n     col = \"lightpink\",\n     \n     border = \"black\",\n     \n     xlim = c(0, 10)\n     \n     )",
    "comment": "",
    "key": false
   },
   {
    "id": "c062",
    "label": "Data Visualization in R (Base R) › Barplots",
    "code": "barplot(table(data$Status))\n\n## Adding labels\n\nbarplot(table(data$Status),\n        \n        xlab = \"Disease Stage\",\n        \n        ylab = \"Frequences\",\n        \n        main = \"Disease Status\",\n        \n        names.arg = c(\"Healthy\", \"Stage 1\", \"Stage 2\", \"Stage 3\"))\n\n## Changing the color of bins and borders\n\nbarplot(table(data$Status),\n        \n        xlab = \"Disease Stage\",\n        \n        ylab = \"Frequences\",\n        \n        main = \"Disease Status\",\n        \n        names.arg = c(\"Healthy\", \"Stage 1\", \"Stage 2\", \"Stage 3\"),\n        \n        col = \"orange\",\n        \n        border = \"blue\")\n\n## Horizontal barplots\n\nbarplot(table(data$Status),\n        \n        xlab = \"Frequences\",\n        \n        ylab = \"Disease Stage\",\n        \n        main = \"Disease Status\",\n        \n        names.arg = c(\"Healthy\", \"Stage 1\", \"Stage 2\", \"Stage 3\"),\n        \n        col = \"orange\",\n        \n        border = \"blue\",\n        \n        horiz = TRUE)\n\n## Clustered barplots\n\nbarplot(table(data[, c(\"Sex\", \"Status\")]),\n        \n        legend.text = TRUE,\n        \n        ylab = \"Frequences\",\n        \n        xlab = \"Disease Stage\",\n        \n        main = \"Disease Status vs Sex\",\n        \n        names.arg = c(\"Healthy\", \"Stage 1\", \"Stage 2\", \"Stage 3\"),\n        \n        col = c(\"orange\", \"red\"))\n\n## Side-by-side barplots\n\nbarplot(table(data[, c(\"Sex\", \"Status\")]),\n        \n        beside = TRUE,\n        \n        legend.text = TRUE,\n        \n        ylab = \"Frequences\",\n        \n        xlab = \"Disease Stage\",\n        \n        main = \"Disease Status vs Sex\",\n        \n        names.arg = c(\"Healthy\", \"Stage 1\", \"Stage 2\", \"Stage 3\"),\n        \n        col = c(\"orange\", \"red\"))",
    "comment": "",
    "key": false
   },
   {
    "id": "c063",
    "label": "Data Visualization in R (Base R) › Boxplots",
    "code": "boxplot(data$LungCap)\n\n## adding labels\n\nboxplot(data$LungCap,\n        \n        xlab = \"AGE\",\n        \n        ylab = \"Values\",\n        \n        main = \"Boxplot of AGE\")\n\n## Changing Colors\n\nboxplot(data$LungCap,\n        \n        xlab = \"Lung Capacity\",\n        \n        ylab = \"Values\",\n        \n        main = \"Boxplot of Lung Capacity\",\n        \n        col = \"darkorange\",\n        \n        border = \"dodgerblue\")\n        \n        \n\n## Adding a notch\n\nboxplot(data$LungCap,\n        \n        xlab = \"AGE\",\n        \n        ylab = \"Values\",\n        \n        main = \"Boxplot of AGE\",\n        \n        col = \"darkorange\",\n        \n        border = \"dodgerblue\",\n        \n        notch = T)\n        \n      \n  \n\n## Changing the size and shape of dots\n\nboxplot(data$LungCap,\n        \n        xlab = \"AGE\",\n        \n        ylab = \"Values\",\n        \n        main = \"Boxplot of AGE\",\n        \n        col = \"darkorange\",\n        \n        border = \"dodgerblue\",\n        \n        notch = T,\n        \n        pch = 18,\n        \n        cex  = 2,\n        \n        horizontal = T)\n        \n\n## Grouped boxplots based on a factor variable\n\nboxplot(data$LungCap ~ data$Sex,\n        \n        xlab = \"SEX\",\n        \n        ylab = \"Lung Capacity\",\n        \n        main = \"Grouped Boxplots\",\n        \n        col = c(\"darkorange\", \"red\"),\n        \n        border = c(\"dodgerblue\", \"black\"),\n        \n        notch = T)\n\n        \nboxplot(data$LungCap ~ data$Sex:data$Smoke,\n        \n        xlab = \"COMBINATION OF SEX AND SMOKE VARIABLES\",\n        \n        ylab = \"Lung Capacity\",\n        \n        main = \"Grouped Boxplots\",\n        \n        names = c(\"Female_Nonsmokers\",\"Male_Nonsmokers\", \"Female_Smokers\", \"Male_Smokers\"),\n        \n        col = c(\"darkorange\", \"red\"),\n        \n        border = c(\"dodgerblue\", \"black\"),\n        \n        notch = T)     ",
    "comment": "",
    "key": false
   },
   {
    "id": "c064",
    "label": "Data Visualization in R (Base R) › Scatterplots",
    "code": "plot(x = data$Age, y = data$LungCap)\n\n## Adding labels\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\")\n\n## Changing the color, shape, and size of dots\n\n#\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\",\n     \n     col = \"dodgerblue\",\n     \n     pch = 20,\n     \n     cex  = 0.5)\n\n#\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\",\n     \n     col = \"dodgerblue\",\n     \n     pch = 5,\n     \n     cex  = 0.5)\n\n## zooming in and out\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\",\n     \n     col = \"dodgerblue\",\n     \n     pch = 20,\n     \n     cex  = 1,\n     \n     xlim = c(0, 10))\n\n## Changing colors of the points based on a factor variable\n\ncolors <- c(\"red\", \"blue\")\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\",\n     \n     col = colors[data$Sex],\n     \n     pch = 20,\n     \n     cex  = 1)\n\nlegend(\"topleft\", legend = c(\"FEMALE\", \"MALE\"), pch = 20, col = colors)\n\n## Plotting multiple scatterplots\n\npar(mfrow = c(1, 2))\n\nboxplot(data$LungCap ~ data$Sex,\n        \n        xlab = \"SEX\",\n        \n        ylab = \"AGE\",\n        \n        main = \"Grouped Boxplots\",\n        \n        col = c(\"darkorange\", \"red\"),\n        \n        border = c(\"dodgerblue\", \"black\"),\n        \n        notch = T)\n\nplot(x = data$Age,\n     \n     y = data$LungCap,\n     \n     xlab = \"AGE\",\n     \n     ylab = \"Lung Capacity\",\n     \n     main = \"Lung Capacity vs Age\",\n     \n     col = colors[data$Sex],\n     \n     pch = 20,\n     \n     cex  = 1)\n\nlegend(\"topleft\", legend = c(\"FEMALE\", \"MALE\"), pch = 20, col = colors)",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_08.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-08.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "lec-10": {
  "type": "lec",
  "num": "10",
  "title": "tidyverse: dplyr verbs, group_by and across",
  "date": "2026-10-12",
  "exams": [],
  "topics": [
   "tidyverse",
   "dplyr",
   "filter",
   "mutate",
   "group_by",
   "summarise",
   "across"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "c065",
    "label": "Importing flights Data into R",
    "code": "flights <- read.csv(file = \"nyc_flights.csv\", header = T)\n\n### Activating tidyverse packages\n\nlibrary(\"tidyverse\")",
    "comment": "",
    "key": false
   },
   {
    "id": "c066",
    "label": "Creating a tibble data frame",
    "code": "flights <- as_tibble(flights)",
    "comment": "",
    "key": false
   },
   {
    "id": "c067",
    "label": "filter() Function",
    "code": "filter(flights, month == 1, day == 1)\n\njan1 <- filter(flights, month == 1, day == 1)\n\nfilter(flights, month == 11 | month == 12)\n\nfilter(flights, month %in% c(11, 12))",
    "comment": "",
    "key": false
   },
   {
    "id": "c068",
    "label": "slice() Function",
    "code": "slice(flights, 5:10)\n\nslice(flights, -(1:4))\n\nslice_head(flights, n = 3)\n\nslice_tail(flights, n = 3)\n\nslice_sample(flights, n = 10)\n\nslice_sample(flights, prop = 0.001)",
    "comment": "",
    "key": false
   },
   {
    "id": "c069",
    "label": "arrange() Function",
    "code": "arrange(flights, year)\n\narrange(flights, year, month, day)\n\narrange(flights, desc(dep_delay))",
    "comment": "",
    "key": false
   },
   {
    "id": "c070",
    "label": "select() Function",
    "code": "select(flights, year, month, day)\n\nselect(flights, year:day)\n\nselect(flights, -(year:day))\n\nselect(flights, !(year:day))\n\nselect(flights, c(1, 5, 8))\n\nselect(flights, starts_with(\"sched\"))\n\nselect(flights, ends_with(\"time\"))\n\nselect(flights, contains(\"ar\"))\n\nselect(flights, starts_with(\"sched\") & ends_with(\"time\"))",
    "comment": "",
    "key": false
   },
   {
    "id": "c071",
    "label": "rename() Function",
    "code": "rename(flights, YEAR = year, MONTH = month)",
    "comment": "",
    "key": false
   },
   {
    "id": "c072",
    "label": "relocate() Function",
    "code": "relocate(flights, year, .after = month)\n\nrelocate(flights, c(year, month), .before = dep_delay)\n\nrelocate(flights, c(year, month), .after = last_col())\n\nrelocate(flights, dep_delay, .before = everything())",
    "comment": "",
    "key": false
   },
   {
    "id": "c073",
    "label": "mutate() Function",
    "code": "flights_2 <- select(flights, month, ends_with(\"delay\"), distance, air_time)\n\nmutate(flights_2, gain = dep_delay - arr_delay, speed = distance / air_time * 60)\n\nmutate(flights_2, gain = dep_delay - arr_delay, hours = air_time/60, gain_per_hour = gain/hours)",
    "comment": "",
    "key": false
   },
   {
    "id": "c074",
    "label": "transmute() Function",
    "code": "transmute(flights_2, gain = dep_delay - arr_delay, hours = air_time/60, gain_per_hour = gain/hours)\n\n#### %>% Pipe operator\n\nselect(filter(flights, month == 11 | month == 12), starts_with(\"sched\") & ends_with(\"time\"))\n\nflights %>% \n  \n  filter(month == 11 | month == 12) %>%\n  \n  select(starts_with(\"sched\") & ends_with(\"time\"))\n\nflights %>% \n  \n  filter(month %in% c(10, 11, 12), arr_delay < 10) %>%\n  \n  slice(1:30) %>%\n  \n  arrange(desc(arr_delay)) %>%\n  \n  select(-c(1,4))\n\n### group_by(), summarise(), and across() functions\n\n## Grouping by origin\n\nby_origin <- flights %>% group_by(origin)\n\n## Grouping by origin and carrier\n\nby_origin_carrier <- flights %>% group_by(origin, carrier)\n\n## Calculating the average arrival delay time for groups grouped by origin\n\nby_origin %>% summarise(Mean = mean(arr_delay, na.rm = T))\n\n## Calculating the mean and median of arrival delay time for groups grouped by origin and their frequency\n\nby_origin %>% \n  \n  summarise(Mean = mean(arr_delay, na.rm = T),\n            \n            Median = median(arr_delay, na.rm = T),\n            \n            Count = n())\n\n## Combining group_by() and summarize() function with other dplyr verbs\n\nby_carrier <- flights %>% group_by(carrier)\n\nby_carrier %>%\n  \n  summarise(Count = n(), Distance_sd = sd(distance)) %>%\n  \n  filter(Count < 10000) %>%\n  \n  arrange(desc(Distance_sd))\n\n## Ungrouping the groups\n\nby_carrier %>%\n  \n  ungroup() %>%\n  \n  summarise(flights = n())\n\n## across() function\n\n## why do we need the across() function?\n\nflights %>% \n  \n  group_by(origin, carrier) %>%\n  \n  summarise(Mean_dep_delay = mean(dep_delay, na.rm = T),\n            \n            Mean_arrival_delay = mean(arr_delay, na.rm = T),\n            \n            Mean_air_time = mean(air_time, na.rm = T))\n\n## using across() function for the previous case\n\nflights %>% \n  \n  group_by(origin, carrier) %>%\n  \n  summarise(across(\n    \n    c(dep_delay, arr_delay, air_time),\n    \n    ~ mean(.x, na.rm = T)\n    \n  ))\n\n## across() function: Example 1\n\nflights %>% \n  \n  summarise(across(where(is.factor), n_distinct))\n\n## across() function: Example 2\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), ~ mean(.x, na.rm = TRUE)))\n\n## across() function: Example 3\n\nmin_max <- list(\n  \n  min = ~min(.x, na.rm = TRUE), \n  \n  max = ~max(.x, na.rm = TRUE)\n)\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), min_max))\n\n## across() function: Example 4\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), min_max,\n                   \n                   .names = \"{.fn}.{.col}\"))",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Code from `Lecture_10.R`. Course notes for this lecture: https://ap4347.github.io/2102/lecture-10.html",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 },
 "rec-01": {
  "type": "rec",
  "num": "01",
  "title": "Vectors, lists, matrices and data frames",
  "date": "",
  "exams": [],
  "topics": [
   "vectors",
   "indexing",
   "lists",
   "matrices",
   "data frames"
  ],
  "pdfs": [
   {
    "name": "Recitation 1.pdf",
    "size": 118992,
    "type": "application/pdf"
   },
   {
    "name": "Recitation 1 Solutions.pdf",
    "size": 174732,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "c093",
    "label": "Problem 1 - Vectors · Part 1 · Create a vector called orders containing these values.",
    "code": "orders <- c(18, 24, 15, 31, 27, 22, 35, 19, 28, 40, 26, 33)\nprint(orders)\n#>  [1] 18 24 15 31 27 22 35 19 28 40 26 33",
    "comment": "",
    "key": false,
    "question": "Create a vector called orders containing these values."
   },
   {
    "id": "c094",
    "label": "Problem 1 - Vectors · Part 2 · Use indexing to extract:",
    "code": "orders[1:4]\n#> [1] 18 24 15 31",
    "comment": "",
    "key": false,
    "question": "Use indexing to extract:\n• the first four observations"
   },
   {
    "id": "c095",
    "label": "Problem 1 - Vectors · Part 2 · the 3rd, 6th, 9th, and 12th observations",
    "code": "orders[c(3, 6, 9, 12)]\n#> [1] 15 22 28 33",
    "comment": "",
    "key": false,
    "question": "Use indexing to extract:\n• the 3rd, 6th, 9th, and 12th observations"
   },
   {
    "id": "c096",
    "label": "Problem 1 - Vectors · Part 2 · all observations except the first and last",
    "code": "orders[-c(1, 12)]\n#>  [1] 24 15 31 27 22 35 19 28 40 26",
    "comment": "",
    "key": false,
    "question": "Use indexing to extract:\n• all observations except the first and last"
   },
   {
    "id": "c097",
    "label": "Problem 1 - Vectors · Part 3 · Create a new vector called high_orders containing only values…",
    "code": "high_orders <- orders[orders > 25]\nprint(high_orders)\n#> [1] 31 27 35 28 40 26 33",
    "comment": "",
    "key": false,
    "question": "Create a new vector called high_orders containing only values from orders that are greater than 25."
   },
   {
    "id": "c098",
    "label": "Problem 1 - Vectors · Part 4 · The store later discovers that the 4th recorded value should…",
    "code": "orders[4] <- 29\nprint(orders)\n#>  [1] 18 24 15 29 27 22 35 19 28 40 26 33",
    "comment": "",
    "key": false,
    "question": "The store later discovers that the 4th recorded value should have been 29 rather than 31. Modify orders accordingly."
   },
   {
    "id": "c099",
    "label": "Problem 1 - Vectors · Part 5 · Insert the value 21 immediately after the second observation…",
    "code": "#>      order_updated.\norders_updated <- append(orders, 21, after = 2)\nprint(orders_updated)\n#>  [1] 18 24 21 15 29 27 22 35 19 28 40 26 33",
    "comment": "",
    "key": false,
    "question": "Insert the value 21 immediately after the second observation and save the resulting vector as order_updated."
   },
   {
    "id": "c100",
    "label": "Problem 1 - Vectors · Part 6 · Using a vectorized operation, create a vector called…",
    "code": "adjusted_orders <- orders_updated * 1.10\nprint(adjusted_orders)\n#>  [1] 19.8 26.4 23.1 16.5 31.9 29.7 24.2 38.5 20.9 30.8 44.0 28.6 36.3",
    "comment": "",
    "key": false,
    "question": "Using a vectorized operation, create a vector called adjusted_orders in which every value of ordered_updated is increased by 10%."
   },
   {
    "id": "c101",
    "label": "Problem 1 - Vectors · Part 7 · Create the following vector without typing every element…",
    "code": "targets <- seq(from = 5, to = 40, by = 5)\nprint(targets)\n#> [1]  5 10 15 20 25 30 35 40",
    "comment": "",
    "key": false,
    "question": "Create the following vector without typing every element individually: 5, 10, 15, 20, 25, 30, 35, 40."
   },
   {
    "id": "c102",
    "label": "Problem 2 - Lists · Part 1 · create course_info.",
    "code": "course_info <- list(\"Applied Statistical Computing\", 35, c(\"R\", \"Python\"),\n                    c(88, 92, 79, 95, 84), list(\"Fall 2026\", TRUE))\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 35\n#> \n#> [[3]]\n#> [1] \"R\"      \"Python\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE",
    "comment": "",
    "key": false,
    "question": "create course_info."
   },
   {
    "id": "c103",
    "label": "Problem 2 - Lists · Part 2 · Display the third element of course info using single ([])…",
    "code": "course_info[3]\n#> [[1]]\n#> [1] \"R\"      \"Python\"\ncourse_info[[3]]\n#> [1] \"R\"      \"Python\"\n# Single brackets produce a list and double brackets produce a vector.",
    "comment": "",
    "key": false,
    "question": "Display the third element of course info using single ([]) and double ([[]]) brackets. Examine the outputs. What is the difference?"
   },
   {
    "id": "c104",
    "label": "Problem 2 - Lists · Part 3 · Extract Python directly from course_info.",
    "code": "course_info[[3]][2]\n#> [1] \"Python\"",
    "comment": "",
    "key": false,
    "question": "Extract Python directly from course_info."
   },
   {
    "id": "c105",
    "label": "Problem 2 - Lists · Part 4 · Extract the value 95 directly from course_info.",
    "code": "course_info[[4]][4]\n#> [1] 95",
    "comment": "",
    "key": false,
    "question": "Extract the value 95 directly from course_info."
   },
   {
    "id": "c106",
    "label": "Problem 2 - Lists · Part 5 · Extract Fall 2026 directly from course_info.",
    "code": "course_info[[5]][[1]]\n#> [1] \"Fall 2026\"",
    "comment": "**Why two sets of double brackets:** \"Fall 2026\" is inside a list that is itself inside `course_info`.\n\n- Element 5 of `course_info` is `list(\"Fall 2026\", TRUE)`, a list inside the list.\n- `course_info[[5]]` opens the outer list and hands you that inner list.\n- The second `[[1]]` opens the inner list and hands you its first item, the text `\"Fall 2026\"`.\n\nIf the second step uses single brackets, `course_info[[5]][1]`, you get a **list** that contains \"Fall 2026\". That's why R prints an extra `[[1]]` line above it.\n\nCompare with Part 4: `course_info[[4]][4]` gives 95 directly because element 4 is a plain vector, and single brackets on a vector return the value itself.\n\nRule: use `[[ ]]` each time you go one level deeper into a list.",
    "key": false,
    "question": "Extract Fall 2026 directly from course_info."
   },
   {
    "id": "c107",
    "label": "Problem 2 - Lists · Part 6 · Change the second element of course_info from 35 to 40.",
    "code": "course_info[[2]] <- 40\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"      \"Python\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE",
    "comment": "",
    "key": false,
    "question": "Change the second element of course_info from 35 to 40."
   },
   {
    "id": "c108",
    "label": "Problem 2 - Lists · Part 7 · Change the second programming language from “Python” to “SQL”.",
    "code": "course_info[[3]][2] <- \"SQL\"\nprint(course_info[[3]])\n#> [1] \"R\"   \"SQL\"",
    "comment": "",
    "key": false,
    "question": "Change the second programming language from “Python” to “SQL”."
   },
   {
    "id": "c109",
    "label": "Problem 2 - Lists · Part 8 · Add “Statistics Department” as a new sixth element of…",
    "code": "course_info[[6]] <- \"Statistics Department\"\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[6]]\n#> [1] \"Statistics Department\"",
    "comment": "",
    "key": false,
    "question": "Add “Statistics Department” as a new sixth element of course_info."
   },
   {
    "id": "c110",
    "label": "Problem 2 - Lists · Part 9 · Remove the fourth element of the list.",
    "code": "course_info[[4]] <- NULL\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[5]]\n#> [1] \"Statistics Department\"",
    "comment": "",
    "key": false,
    "question": "Remove the fourth element of the list."
   },
   {
    "id": "c111",
    "label": "Problem 2 - Lists · Part 10 · Create another list called instructor_info containing “Dr.…",
    "code": "instructor_info <- list(\"Dr. Smith\", \"Columbia University\")\ncombined1 <- c(course_info, instructor_info)\nprint(combined1)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[5]]\n#> [1] \"Statistics Department\"\n#> \n#> [[6]]\n#> [1] \"Dr. Smith\"\n#> \n#> [[7]]\n#> [1] \"Columbia University\"\ncombined2 <- list(course_info, instructor_info)\nprint(combined2)\n#> [[1]]\n#> [[1]][[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[1]][[2]]\n#> [1] 40\n#> \n#> [[1]][[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[1]][[4]]\n#> [[1]][[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[1]][[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[1]][[5]]\n#> [1] \"Statistics Department\"\n#> \n#> \n#> [[2]]\n#> [[2]][[1]]\n#> [1] \"Dr. Smith\"\n#> \n#> [[2]][[2]]\n#> [1] \"Columbia University\"",
    "comment": "**`c()` vs `list()`: same two lists, different shapes.**\n\n- `combined1 <- c(course_info, instructor_info)` **merges** them. The 5 elements of `course_info` and the 2 of `instructor_info` are laid end to end in one flat list, so `length(combined1)` is **7**. \"Dr. Smith\" is just element 6: `combined1[[6]]`.\n- `combined2 <- list(course_info, instructor_info)` **nests** them. It makes a new list whose two elements are the original lists, untouched, so `length(combined2)` is **2**. \"Dr. Smith\" is now one level deeper: `combined2[[2]][[1]]`.\n\n**How to tell from the printout:** `combined1` labels go `[[1]]` … `[[7]]`. `combined2` labels go `[[1]][[1]]`, `[[1]][[2]]` … `[[2]][[1]]`, `[[2]][[2]]`. The extra `[[ ]]` in front is the extra layer of nesting.\n\n**Rule:** `c()` = combine into one longer list. `list()` = put the lists inside a new list as separate items.",
    "key": false,
    "question": "Create another list called instructor_info containing “Dr. Smith” and “Columbia University”. Combine course_info and instructor_info using c() and save the result as combined1. Next, combine course_info and instructor_info using list() and save the result as combined2.Compare combined1 and combined2. How many elements does each contain?"
   },
   {
    "id": "c112",
    "label": "Problem 3 - Matrices · Part 1 · Create a matrix called scores with 4 rows and 3 columns,…",
    "code": "scores <- matrix( c(82, 75, 91, 68, 84, 79, 95, 88, 93, 76, 81, 87), nrow = 4,\n                  byrow = TRUE)\nprint(scores)\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   68   84   79\n#> [3,]   95   88   93\n#> [4,]   76   81   87",
    "comment": "",
    "key": false,
    "question": "Create a matrix called scores with 4 rows and 3 columns, arranging the values by row."
   },
   {
    "id": "c113",
    "label": "Problem 3 - Matrices · Part 2 · Extract:",
    "code": "scores[3, 2]\n#> [1] 88",
    "comment": "",
    "key": false,
    "question": "Extract:\n• Student 3’s Quiz 2 score;"
   },
   {
    "id": "c114",
    "label": "Problem 3 - Matrices · Part 2 · all scores for Student 2;",
    "code": "scores[2, ]\n#> [1] 68 84 79",
    "comment": "",
    "key": false,
    "question": "Extract:\n• all scores for Student 2;"
   },
   {
    "id": "c115",
    "label": "Problem 3 - Matrices · Part 2 · all Quiz 3 scores;",
    "code": "scores[, 3]\n#> [1] 91 79 93 87",
    "comment": "",
    "key": false,
    "question": "Extract:\n• all Quiz 3 scores;"
   },
   {
    "id": "c116",
    "label": "Problem 3 - Matrices · Part 2 · the scores for Students 1 and 4 on Quizzes 1 and 3.",
    "code": "scores[c(1, 4), c(1, 3)]\n#>      [,1] [,2]\n#> [1,]   82   91\n#> [2,]   76   87",
    "comment": "",
    "key": false,
    "question": "Extract:\n• the scores for Students 1 and 4 on Quizzes 1 and 3."
   },
   {
    "id": "c117",
    "label": "Problem 3 - Matrices · Part 3 · Student 2’s Quiz 1 score was entered incorrectly. Replace 68…",
    "code": "scores[2, 1] <- 73\nprint(scores)\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   73   84   79\n#> [3,]   95   88   93\n#> [4,]   76   81   87",
    "comment": "",
    "key": false,
    "question": "Student 2’s Quiz 1 score was entered incorrectly. Replace 68 with 73."
   },
   {
    "id": "c118",
    "label": "Problem 3 - Matrices · Part 4 · Add a fourth quiz using the scores 90, 85, 96, 82.",
    "code": "scores <- cbind(scores, c(90, 85, 96, 82))\nprint(scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   73   84   79   85\n#> [3,]   95   88   93   96\n#> [4,]   76   81   87   82",
    "comment": "",
    "key": false,
    "question": "Add a fourth quiz using the scores 90, 85, 96, 82."
   },
   {
    "id": "c119",
    "label": "Problem 3 - Matrices · Part 5 · A fifth student joins the dataset with scores 80, 77, 89. Add…",
    "code": "scores2 <- rbind(scores, c(80, 77, 89, 91))\nprint(scores2)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   73   84   79   85\n#> [3,]   95   88   93   96\n#> [4,]   76   81   87   82\n#> [5,]   80   77   89   91",
    "comment": "",
    "key": false,
    "question": "A fifth student joins the dataset with scores 80, 77, 89. Add this student as a new row to scores and call the resulting matrix scores2."
   },
   {
    "id": "c120",
    "label": "Problem 3 - Matrices · Part 6 · Create a new matrix called bonus_scores by adding 3 points to…",
    "code": "bonus_scores <- scores2 + 3\nprint(bonus_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   78   94   93\n#> [2,]   76   87   82   88\n#> [3,]   98   91   96   99\n#> [4,]   79   84   90   85\n#> [5,]   83   80   92   94",
    "comment": "",
    "key": false,
    "question": "Create a new matrix called bonus_scores by adding 3 points to every score in scores2. Do this using a vectorized matrix operation."
   },
   {
    "id": "c121",
    "label": "Problem 3 - Matrices · Part 7 · In bonus_scores, replace every score greater than 95 with 100.",
    "code": "bonus_scores[bonus_scores > 95] <- 100\nprint(bonus_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   78   94   93\n#> [2,]   76   87   82   88\n#> [3,]  100   91  100  100\n#> [4,]   79   84   90   85\n#> [5,]   83   80   92   94",
    "comment": "",
    "key": false,
    "question": "In bonus_scores, replace every score greater than 95 with 100."
   },
   {
    "id": "c122",
    "label": "Problem 3 - Matrices · Part 8 · Extract only those elements of bonus_scores that are at least…",
    "code": "bonus_scores[bonus_scores >= 90]\n#> [1] 100  91  94 100  90  92  93 100  94",
    "comment": "",
    "key": false,
    "question": "Extract only those elements of bonus_scores that are at least 90."
   },
   {
    "id": "c123",
    "label": "Problem 3 - Matrices · Part 9 · Remove Student 2 and Quiz 1 from bonus_scores and save the…",
    "code": "reduced_scores <- bonus_scores[-2, -1]\nprint(reduced_scores)\n#>      [,1] [,2] [,3]\n#> [1,]   78   94   93\n#> [2,]   91  100  100\n#> [3,]   84   90   85\n#> [4,]   80   92   94",
    "comment": "**Removing rows and columns from a matrix:** use a minus sign inside one pair of brackets, `[rows, columns]`, and save the result.\n\n| Goal | Code |\n|---|---|\n| Drop row 2 | `m[-2, ]` |\n| Drop column 1 | `m[, -1]` |\n| Drop both | `m[-2, -1]` |\n| Drop rows 1 and 3 | `m[-c(1, 3), ]` |\n\n**Why `reduced_scores <- [c(2, ), c( , 1)] <- NULL` doesn't work:**\n\n- The brackets must come right after the object: `bonus_scores[...]`.\n- A matrix takes **one** pair of brackets with a comma: `[rows, columns]`, not two separate `c()` pieces.\n- `c(2, )` has an empty slot; inside `c()` every comma needs a value. The empty spot only works directly in the matrix brackets (`m[2, ]` = all columns).\n- `<- NULL` deletes **list** elements, not matrix rows or columns.\n\n**Rule:** lists use `<- NULL` to delete; matrices and data frames use a minus sign inside `[rows, columns]`.",
    "key": false,
    "question": "Remove Student 2 and Quiz 1 from bonus_scores and save the resulting matrix as reduced_scores."
   },
   {
    "id": "c124",
    "label": "Problem 4 - Data Frames · Part 1 · Use these vectors to create a data frame called employees.",
    "code": "Employee <- c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\",\n              \"Henry\")\nDepartment <- c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\", \"Marketing\",\n                \"Analytics\", \"Finance\", \"Analytics\")\nExperience <- c(2, 7, 5, 9, 3, 6, 8, 4)\nSalary <- c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000)\nRemote <- c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\nemployees <- data.frame(Employee, Department, Experience, Salary, Remote)\nprint(employees)\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 5     Emma  Marketing          3  72000   TRUE\n#> 6    Frank  Analytics          6  92000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE",
    "comment": "",
    "key": false,
    "question": "Use these vectors to create a data frame called employees."
   },
   {
    "id": "c125",
    "label": "Problem 4 - Data Frames · Part 2 · Use appropriate R commands to examine:",
    "code": "str(employees)\n#> ’data.frame’:    8 obs. of  5 variables:\n#>  $ Employee  : chr  \"Anna\" \"Ben\" \"Carla\" \"David\" ...\n#>  $ Department: chr  \"Analytics\" \"Marketing\" \"Analytics\" \"Finance\" ...\n#>  $ Experience: num  2 7 5 9 3 6 8 4\n#>  $ Salary    : num  68000 85000 79000 105000 72000 92000 99000 76000\n#>  $ Remote    : logi  TRUE FALSE TRUE FALSE TRUE FALSE ...",
    "comment": "",
    "key": false,
    "question": "Use appropriate R commands to examine:\n• the structure of employees;"
   },
   {
    "id": "c126",
    "label": "Problem 4 - Data Frames · Part 2 · a summary of its variables;",
    "code": "summary(employees)\n#>    Employee          Department          Experience       Salary\n#>  Length:8           Length:8           Min.   :2.00   Min.   : 68000\n#>  Class :character   Class :character   1st Qu.:3.75   1st Qu.: 75000\n#>  Mode  :character   Mode  :character   Median :5.50   Median : 82000\n#>                                        Mean   :5.50   Mean   : 84500\n#>                                        3rd Qu.:7.25   3rd Qu.: 93750\n#>                                        Max.   :9.00   Max.   :105000\n#>    Remote\n#>  Mode :logical\n#>  FALSE:3\n#>  TRUE :5\n#> \n#> \n#> ",
    "comment": "",
    "key": false,
    "question": "Use appropriate R commands to examine:\n• a summary of its variables;"
   },
   {
    "id": "c127",
    "label": "Problem 4 - Data Frames · Part 2 · the first three rows;",
    "code": "head(employees, 3)\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE",
    "comment": "",
    "key": false,
    "question": "Use appropriate R commands to examine:\n• the first three rows;"
   },
   {
    "id": "c128",
    "label": "Problem 4 - Data Frames · Part 2 · its dimensions.",
    "code": "dim(employees)\n#> [1] 8 5",
    "comment": "",
    "key": false,
    "question": "Use appropriate R commands to examine:\n• its dimensions."
   },
   {
    "id": "c129",
    "label": "Problem 4 - Data Frames · Part 3 · Extract the Salary variable in three different ways so that:",
    "code": "employees[\"Salary\"]\n#>   Salary\n#> 1  68000\n#> 2  85000\n#> 3  79000\n#> 4 105000\n#> 5  72000\n#> 6  92000\n#> 7  99000\n#> 8  76000",
    "comment": "",
    "key": false,
    "question": "Extract the Salary variable in three different ways so that:\n• one result is a data frame;"
   },
   {
    "id": "c130",
    "label": "Problem 4 - Data Frames · Part 3 · the other two results are vectors;",
    "code": "employees[[\"Salary\"]]\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000\n#or\nemployees$Salary\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000",
    "comment": "",
    "key": false,
    "question": "Extract the Salary variable in three different ways so that:\n• the other two results are vectors;"
   },
   {
    "id": "c131",
    "label": "Problem 4 - Data Frames · Part 4 · Extract only the Employee, Department, and Salary columns.",
    "code": "employees[, c(\"Employee\", \"Department\", \"Salary\")]\n#>   Employee Department Salary\n#> 1     Anna  Analytics  68000\n#> 2      Ben  Marketing  85000\n#> 3    Carla  Analytics  79000\n#> 4    David    Finance 105000\n#> 5     Emma  Marketing  72000\n#> 6    Frank  Analytics  92000\n#> 7    Grace    Finance  99000\n#> 8    Henry  Analytics  76000",
    "comment": "",
    "key": false,
    "question": "Extract only the Employee, Department, and Salary columns."
   },
   {
    "id": "c132",
    "label": "Problem 4 - Data Frames · Part 5 · Extract rows 2 through 6 and only the Employee and Experience…",
    "code": "employees[2:6, c(\"Employee\", \"Experience\")]\n#>   Employee Experience\n#> 2      Ben          7\n#> 3    Carla          5\n#> 4    David          9\n#> 5     Emma          3\n#> 6    Frank          6",
    "comment": "",
    "key": false,
    "question": "Extract rows 2 through 6 and only the Employee and Experience columns."
   },
   {
    "id": "c133",
    "label": "Problem 4 - Data Frames · Part 6 · Extract all employees who have at least 5 years of experience.",
    "code": "employees[employees$Experience >= 5, ]\n#>   Employee Department Experience Salary Remote\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE",
    "comment": "",
    "key": false,
    "question": "Extract all employees who have at least 5 years of experience."
   },
   {
    "id": "c134",
    "label": "Problem 4 - Data Frames · Part 7 · Add a new variable called Salary_K that contains salaries…",
    "code": "employees$Salary_K <- employees$Salary / 1000\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K\n#> 1     Anna  Analytics          2  68000   TRUE       68\n#> 2      Ben  Marketing          7  85000  FALSE       85\n#> 3    Carla  Analytics          5  79000   TRUE       79\n#> 4    David    Finance          9 105000  FALSE      105\n#> 5     Emma  Marketing          3  72000   TRUE       72\n#> 6    Frank  Analytics          6  92000  FALSE       92\n#> 7    Grace    Finance          8  99000   TRUE       99\n#> 8    Henry  Analytics          4  76000   TRUE       76",
    "comment": "",
    "key": false,
    "question": "Add a new variable called Salary_K that contains salaries expressed in thousands of dollars. For example, 68000 becomes 68."
   },
   {
    "id": "c135",
    "label": "Problem 4 - Data Frames · Part 8 · Add another variable called Senior that takes the value TRUE…",
    "code": "employees$Senior <- employees$Experience >= 6\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K Senior\n#> 1     Anna  Analytics          2  68000   TRUE       68  FALSE\n#> 2      Ben  Marketing          7  85000  FALSE       85   TRUE\n#> 3    Carla  Analytics          5  79000   TRUE       79  FALSE\n#> 4    David    Finance          9 105000  FALSE      105   TRUE\n#> 5     Emma  Marketing          3  72000   TRUE       72  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE       92   TRUE\n#> 7    Grace    Finance          8  99000   TRUE       99   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE       76  FALSE",
    "comment": "**Why `employees$Experience >= 6` gives a TRUE/FALSE column**\n\nA comparison like `>=` is a **question**, and R asks it of **every element** of the vector at once (it's vectorized). Each answer is TRUE or FALSE, so 8 employees give back 8 answers:\n\n| Employee | Experience | `>= 6`? |\n|---|---|---|\n| Anna | 2 | FALSE |\n| Ben | 7 | TRUE |\n| Carla | 5 | FALSE |\n| David | 9 | TRUE |\n| Emma | 3 | FALSE |\n| Frank | 6 | TRUE |\n| Grace | 8 | TRUE |\n| Henry | 4 | FALSE |\n\n`employees$Senior <- ...` then stores that logical vector as a new column, one value per row. Frank is TRUE because 6 counts when the question says \"at least 6\" (`>=`); with `>` he'd be FALSE.\n\n**No `ifelse()` needed:** `ifelse(employees$Experience >= 6, TRUE, FALSE)` gives the exact same column, because the comparison already produces TRUE/FALSE. Use `ifelse()` when you want **other** labels, e.g. `ifelse(employees$Experience >= 6, \"Senior\", \"Junior\")`.\n\n**Bonus:** TRUE counts as 1 and FALSE as 0, so `sum(employees$Senior)` counts seniors (4) and `mean(employees$Senior)` gives the proportion (0.5).",
    "key": false,
    "question": "Add another variable called Senior that takes the value TRUE when Experience is at least 6 years and FALSE otherwise."
   },
   {
    "id": "c136",
    "label": "Problem 4 - Data Frames · Part 9 · Carla’s salary should be 82,000 instead of 79,000. Modify the…",
    "code": "employees[3, \"Salary\"] <- 82000",
    "comment": "",
    "key": false,
    "question": "Carla’s salary should be 82,000 instead of 79,000. Modify the appropriate element of the data frame."
   },
   {
    "id": "c137",
    "label": "Problem 4 - Data Frames · Part 10 · Add the following employee as a new row: Employee - Irene;…",
    "code": "Irene <- data.frame(Employee = \"Irene\", Department = \"Marketing\",\n                    Experience = 10, Salary = 110000, Remote = FALSE,\n                    Salary_K = 110, Senior = TRUE)\nemployees <- rbind(employees, Irene)\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K Senior\n#> 1     Anna  Analytics          2  68000   TRUE       68  FALSE\n#> 2      Ben  Marketing          7  85000  FALSE       85   TRUE\n#> 3    Carla  Analytics          5  82000   TRUE       79  FALSE\n#> 4    David    Finance          9 105000  FALSE      105   TRUE\n#> 5     Emma  Marketing          3  72000   TRUE       72  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE       92   TRUE\n#> 7    Grace    Finance          8  99000   TRUE       99   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE       76  FALSE\n#> 9    Irene  Marketing         10 110000  FALSE      110   TRUE",
    "comment": "",
    "key": false,
    "question": "Add the following employee as a new row: Employee - Irene; Department - Marketing; Experience - 10; Salary - 110000; Remote - FALSE."
   }
  ],
  "notes": "Online store orders vector, the `course_info` list, the quiz `scores` matrix, and the `employees` data frame.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-13T01:45:00Z"
 },
 "rec-02": {
  "type": "rec",
  "num": "02",
  "title": "If-else, loops and functions",
  "date": "",
  "exams": [],
  "topics": [
   "if-else",
   "ifelse()",
   "for loops",
   "while loops",
   "functions"
  ],
  "pdfs": [
   {
    "name": "Recitation 2.pdf",
    "size": 179192,
    "type": "application/pdf"
   },
   {
    "name": "Recitation 2 Solutions.pdf",
    "size": 213179,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "c138",
    "label": "If-Else Statements · Problem 1 · Part I",
    "code": "exam_score <- 84\nhomework_rate <- 0.92\nif (exam_score >= 90 & homework_rate >= 0.90) {\n  status <- \"Excellent Standing\"\n} else if (exam_score >= 80 & homework_rate >= 0.80) {\n  status <- \"Good Standing\"\n} else if (exam_score >= 70 | homework_rate >= 0.95) {\n  status <- \"Conditional Pass\"\n} else {\n  status <- \"Fail\"\n}\nprint(status)\n#> [1] \"Good Standing\"",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| test with exam_score = 84, homework_rate = 0.92 | set both variables first |\n| \"Excellent Standing if … ≥ 90 **and** … ≥ 0.9\" | `if (exam_score >= 90 & homework_rate >= 0.90)` |\n| next rules | `else if (...)` |\n| \"Fail otherwise\" | `else` |\n| \"assigns a value to a variable called status\" | `status <- \"...\"` inside each branch |\n| \"prints the value of status\" | `print(status)` |\n\n**Steps**\n1. Create the two input variables.\n2. Write the rules **in the order given**. R checks top to bottom and stops at the first TRUE, so the strictest rule goes first.\n3. In every branch, assign to the **same** variable name, `status`.\n4. Print it once at the end. Result: **\"Good Standing\"**. 84 fails the 90 check, then 84 ≥ 80 and 0.92 ≥ 0.80 both pass.\n\n**Watch out**\n- Every rule says \"**and**\", so use `&`. This posted solution uses `|` in the third rule, which doesn't match the question. It still gives the right answer for 84 / 0.92, but `&` is correct. See Solution #2 below.\n- `if` handles **one** student. For a vector of students, use `ifelse()` (Part II).\n- \"greater than or equal to\" = `>=`.",
    "key": false,
    "question": "Suppose a course assigns a final status to each student based on both the exam score and homework completion rate. Write an if–else statement that assigns a value to a variable called status according to the following rules:\n• Excellent Standing if the exam_score is greater than or equal to 90 and the homework_rate is greater than or equal to 0.9\n• Good Standing if the exam_score is greater than or equal to 80 and the homework_rate is greater than or equal to 0.80\n• Conditional Pass if the exam_score is greater than or equal to 70 and the homework_rate is greater than or equal to 0.95\n• Fail otherwise.\nTest your code with exam_score = 84 and homework_rate = 0.92. Make sure your code prints the value of status."
   },
   {
    "id": "rec-02-sol2-p1",
    "label": "If-Else Statements · Problem 1 · Part I · Solution #2 (as a function)",
    "question": "Suppose a course assigns a final status to each student based on both the exam score and homework completion rate. Write an if–else statement that assigns a value to a variable called status according to the following rules:\n• Excellent Standing if the exam_score is greater than or equal to 90 and the homework_rate is greater than or equal to 0.9\n• Good Standing if the exam_score is greater than or equal to 80 and the homework_rate is greater than or equal to 0.80\n• Conditional Pass if the exam_score is greater than or equal to 70 and the homework_rate is greater than or equal to 0.95\n• Fail otherwise.\nTest your code with exam_score = 84 and homework_rate = 0.92. Make sure your code prints the value of status.",
    "code": "get_status <- function(exam_score, homework_rate) {\n  if (exam_score >= 90 & homework_rate >= 0.90) {\n    return(\"Excellent Standing\")\n  } else if (exam_score >= 80 & homework_rate >= 0.80) {\n    return(\"Good Standing\")\n  } else if (exam_score >= 70 & homework_rate >= 0.95) {\n    return(\"Conditional Pass\")\n  } else {\n    return(\"Fail\")\n  }\n}\n\nstatus <- get_status(exam_score = 84, homework_rate = 0.92)\nprint(status)\n#> [1] \"Good Standing\"\n\n# Extra checks\nget_status(95, 0.95)\n#> [1] \"Excellent Standing\"\nget_status(75, 0.97)\n#> [1] \"Conditional Pass\"\nget_status(50, 0.85)\n#> [1] \"Fail\"",
    "key": false,
    "comment": "**Same rules, written as a function.** Every rule says \"**and**\", so each condition uses `&`: both parts must be TRUE.\n\n**Why `|` gives the wrong answer:** with `|` only one part has to be TRUE. For the test values (84, 0.92), `84 >= 90 | 0.92 >= 0.90` is `FALSE | TRUE` = TRUE, so `|` returns \"Excellent\" even though the exam score is only 84. With `&` it's FALSE, R moves on, and the second rule gives **\"Good Standing\"**.\n\n**Things to get right:**\n- Labels must match the question exactly: \"Excellent Standing\", not \"Excellent Score\".\n- The question wants a **variable** called `status`, so call the function and save the result: `status <- get_status(84, 0.92)`, then `print(status)`.\n- Don't name the function `status`. Saving the result into `status` would overwrite the function.\n\n**Note on Solution #1:** its third rule uses `|` (`exam_score >= 70 | homework_rate >= 0.95`), but the question says **and**. It doesn't change the answer for 84 / 0.92, but `&` matches the rule. With `&`, (75, 0.97) is a Conditional Pass and (75, 0.90) is a Fail.\n\n**Reading tip:** \"and / both\" → `&`; \"or / either / at least one\" → `|`."
   },
   {
    "id": "c139",
    "label": "If-Else Statements · Problem 1 · Part II",
    "code": "exam_scores <- c(94, 82, 76, 68, 88, 91, 73, 59)\nhomework_rates <- c(0.95, 0.84, 0.98, 0.90, 0.72, 0.88, 0.79, 1.00)\n# Use ifelse() to create a logical vector called eligible that is TRUE if a student:\n\neligible <- ifelse(exam_scores >= 75 & homework_rates >= 0.80,\n                   TRUE, FALSE)\nprint(eligible)\n#> [1]  TRUE  TRUE  TRUE FALSE FALSE  TRUE FALSE FALSE",
    "comment": "**Roadmap: from the question to the code**\n\n**Step 1. Break the question into pieces.**\n\n| Question says | Code piece |\n|---|---|\n| two vectors of 8 students | `exam_scores <- c(...)`, `homework_rates <- c(...)` |\n| \"Use ifelse()\" | `ifelse(test, value_if_TRUE, value_if_FALSE)` |\n| \"a logical vector called eligible\" | `eligible <- ...` holding TRUE/FALSE |\n| \"exam score of at least 75\" | `exam_scores >= 75` (\"at least\" = `>=`) |\n| \"**and** completed at least 80% of the homework\" | `& homework_rates >= 0.80` (80% = 0.80) |\n| \"Otherwise, FALSE\" | the third argument of `ifelse()` |\n\n**Step 2. Why `ifelse()` and not `if`.** `if ()` answers **one** yes/no question. Here you have 8 students, so you need 8 answers. `ifelse()` checks every position at once and gives one answer per student. Putting the whole vector in `if (exam_scores >= 75)` gives an error (\"the condition has length > 1\").\n\n**Step 3. How R lines up the two vectors.** It compares them **position by position**: student 1's score goes with student 1's rate, student 2's with student 2's, and so on. Both vectors must be the same length.\n\n**Step 4. Trace every student:**\n\n| Student | Score | ≥ 75? | Rate | ≥ 0.80? | Both (`&`)? |\n|---|---|---|---|---|---|\n| 1 | 94 | TRUE | 0.95 | TRUE | **TRUE** |\n| 2 | 82 | TRUE | 0.84 | TRUE | **TRUE** |\n| 3 | 76 | TRUE | 0.98 | TRUE | **TRUE** |\n| 4 | 68 | FALSE | 0.90 | TRUE | FALSE |\n| 5 | 88 | TRUE | 0.72 | FALSE | FALSE |\n| 6 | 91 | TRUE | 0.88 | TRUE | **TRUE** |\n| 7 | 73 | FALSE | 0.79 | FALSE | FALSE |\n| 8 | 59 | FALSE | 1.00 | TRUE | FALSE |\n\nResult: `TRUE TRUE TRUE FALSE FALSE TRUE FALSE FALSE`. Students 4 and 5 show why it's `&`: each passes one rule but not both. With `|` they'd wrongly be TRUE.\n\n**Step 5. Shortcut.** Since you want TRUE/FALSE anyway, `ifelse(..., TRUE, FALSE)` is optional: `eligible <- exam_scores >= 75 & homework_rates >= 0.80` gives the same vector. Use `ifelse()` when the question asks for it or wants other labels: `ifelse(..., \"Eligible\", \"Not eligible\")`.\n\n**What to remember**\n- `if` = one value; `ifelse()` = a whole vector.\n- `ifelse(test, yes, no)`: the test first, then what to give when TRUE, then when FALSE.\n- Comparisons on vectors go position by position and return one TRUE/FALSE each.\n- \"at least\" = `>=`, \"more than\" = `>`; percentages become decimals (80% = 0.80).\n- \"and\" → `&`, \"or\" → `|`.\n- A logical vector is useful afterwards: `sum(eligible)` counts the TRUEs (4), and `exam_scores[eligible]` keeps only eligible students' scores (94 82 76 91).",
    "key": false,
    "question": "Now consider:\nexam_scores <- c(94, 82, 76, 68, 88, 91, 73, 59)\nhomework_rates <- c(0.95, 0.84, 0.98, 0.90, 0.72, 0.88, 0.79, 1.00)\nUse ifelse() to create a logical vector called eligible that is TRUE if a student:\n• has an exam score of at least 75, and\n• has completed at least 80% of the homework.\nOtherwise, the value should be FALSE."
   },
   {
    "id": "rec-02-q901",
    "label": "For Loops · Problem 2 · Setup",
    "question": "Consider the following matrix of quiz scores (the rows represent students and the columns represent quizzes):",
    "code": "scores <- matrix(c(82, 76, 91, 88,\n                   67, 85, 79, 92,\n                   95, 89, 84, 90,\n                   73, 68, 81, 77),\n                 nrow = 4,\n                 byrow = TRUE)",
    "comment": "**Reading the setup matrix**\n\n- `matrix(c(...), nrow = 4, byrow = TRUE)` fills **across each row first**, so each line of numbers in the code is one row.\n- The question says rows = students and columns = quizzes. So `scores[2, 1]` = student 2, quiz 1 = **67**.\n- `scores[i, ]` is one student's quizzes; `scores[, j]` is one quiz for every student.\n\n**Check it:** print `scores` and confirm the first row reads `82 76 91 88`. Without `byrow = TRUE`, R fills down the columns and every later answer is wrong.\n\nRun this chunk before Part I and Part II; both use `scores`.",
    "key": false
   },
   {
    "id": "rec-02-q902",
    "label": "For Loops · Problem 2 · Part I",
    "question": "Create a matrix called adjusted_scores with the same dimensions as scores. Using nested for loops, examine every element of scores and apply the following rules:\n• if the score is below 70, add 5 points;\n• if the score is between 70 and 89 inclusive, add 3 points;\n• if the score is 90 or higher, leave it unchanged.\nStore the results in adjusted_scores.",
    "code": "adjusted_scores <- matrix(0, nrow = nrow(scores), ncol = ncol(scores))\nfor (i in 1:nrow(scores)) {\n  for (j in 1:ncol(scores)) {\n    if (scores[i, j] < 70) {\n      adjusted_scores[i, j] <- scores[i, j] + 5\n    } else if (scores[i, j] >= 70 & scores[i, j] <= 89) {\n      adjusted_scores[i, j] <- scores[i, j] + 3\n    } else {\n      adjusted_scores[i, j] <- scores[i, j]\n    }\n  }\n}\nprint(adjusted_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   79   91   91\n#> [2,]   72   88   82   92\n#> [3,]   95   92   87   90\n#> [4,]   76   73   84   80",
    "comment": "**Why the matrix starts full of 0s**\n\n`adjusted_scores <- matrix(0, nrow = nrow(scores), ncol = ncol(scores))` builds an **empty container** the same size as `scores` (4 × 4) before the loop runs:\n```\n     [,1] [,2] [,3] [,4]\n[1,]    0    0    0    0\n...\n```\nThe 0s are **placeholders**, not real values. Every cell gets overwritten inside the loop, so none of the 0s survive to the final answer.\n\n**Why you need it at all:** the loop writes one cell at a time with `adjusted_scores[i, j] <- ...`. You can only fill a cell of something that already exists:\n- No `adjusted_scores` yet → error: *object 'adjusted_scores' not found*.\n- `adjusted_scores <- c()` (an empty vector) → error: *incorrect number of subscripts on matrix*, because `[i, j]` needs rows and columns.\n\nSo the matrix gives the loop a 4 × 4 grid of slots to fill. `nrow(scores)` and `ncol(scores)` make it match the input's size automatically, so it still works if `scores` changes size.\n\n**Why 0 and not something else:** any filler works because it all gets replaced. Other choices:\n- `matrix(NA, nrow = ..., ncol = ...)`: safer for checking your work, since any cell the loop forgot to fill shows up as `NA` instead of a believable 0.\n- `adjusted_scores <- scores`: start from a copy and change it in place.\n\n**Walk through one cell (row 2, column 1):** `scores[2, 1]` is 67. That's below 70, so `adjusted_scores[2, 1] <- 67 + 5` replaces the 0 with **72**. The double loop does this for all 16 cells.\n\n**Same pattern elsewhere:** Part II starts with `logical(nrow(adjusted_scores))` (a vector of FALSEs, one per student), and Homework 1, Problem 5 starts with `vector(mode = \"character\", length = ...)`. **Make the empty container first, then fill it in the loop.**",
    "key": false
   },
   {
    "id": "rec-02-q903",
    "label": "For Loops · Problem 2 · Part II",
    "question": "Create a logical vector called all_passed. For each student, determine whether all adjusted quiz scores are at least 70.",
    "code": "all_passed <- logical(nrow(adjusted_scores))\nfor (i in 1:nrow(adjusted_scores)) {\n  all_passed[i] <- all(adjusted_scores[i, ] >= 70)\n}\nprint(all_passed)\n#> [1] TRUE TRUE TRUE TRUE",
    "comment": "**Roadmap: from the question to the code**\n\n| Question says | Code piece |\n|---|---|\n| \"a logical vector called all_passed\" | `all_passed <- logical(...)` |\n| \"For each student\" (each **row**) | `for (i in 1:nrow(adjusted_scores))` |\n| \"**all** adjusted quiz scores\" | `all(...)` on that student's row `adjusted_scores[i, ]` |\n| \"are at least 70\" | `>= 70` |\n\n**Step 1. Make the empty container.** `logical(nrow(adjusted_scores))` makes `FALSE FALSE FALSE FALSE`, one slot per student. Same idea as the 0-matrix in Part I: build it first, fill it in the loop.\n\n**Step 2. Loop over students = rows.** In `scores`, rows are students and columns are quizzes, so \"for each student\" means `i` goes over `1:nrow(...)`.\n\n**Step 3. Grab one student's whole row.** `adjusted_scores[i, ]`: the blank after the comma means every quiz. For student 2 that's `72 88 82 92`.\n\n**Step 4. Check each quiz, then combine.**\n- `adjusted_scores[2, ] >= 70` → `TRUE TRUE TRUE TRUE` (one answer per quiz).\n- `all(...)` squeezes those into **one** answer: TRUE only if every quiz passed.\n\n**Step 5. Store it in that student's slot.** `all_passed[i] <- ...`.\n\n**Result:** `TRUE TRUE TRUE TRUE`. Every student passes after the Part I bonus. On the **original** `scores`, the same code gives `TRUE FALSE TRUE FALSE`: student 2 has a 67 and student 4 a 68. That's a good way to check the code actually does something.\n\n**The one-line version:** `apply(adjusted_scores >= 70, 1, all)` gives the same vector (`1` = do it for each row). Use the loop if the question says \"for loop\".\n\n---\n\n**How to solve similar problems**\n\n1. **\"For each ___\"** tells you what to loop over: student → row (`1:nrow`, `m[i, ]`), quiz → column (`1:ncol`, `m[, j]`), element of a vector → `1:length(x)`, `x[i]`.\n2. **What kind of answer per item?**\n   - yes/no → `logical(n)` container, fill with TRUE/FALSE\n   - a number → `numeric(n)` (or `vector(mode = \"numeric\", length = n)`)\n   - a label → `character(n)`\n3. **Which summary word?**\n\n| Question word | Function | Example |\n|---|---|---|\n| \"all\", \"every\", \"none below\" | `all()` | did the student pass every quiz? |\n| \"any\", \"at least one\" | `any()` | did the student score 90+ on any quiz? → `TRUE TRUE TRUE FALSE` (original scores) |\n| \"how many\" | `sum()` | how many quizzes 90+? → `1 1 2 0` |\n| \"what proportion\" | `mean()` | share of quizzes passed |\n| \"highest / average / total\" | `max()`, `mean()`, `sum()` | best quiz per student |\n\n4. **Template:**\n```r\nresult <- logical(nrow(m))          # or numeric(...)\nfor (i in 1:nrow(m)) {\n  result[i] <- all(m[i, ] >= 70)    # swap all/any/sum/mean and the condition\n}\nprint(result)\n```\nFor **each quiz** instead of each student, change `nrow` → `ncol` and `m[i, ]` → `m[, i]`: \"did every student pass quiz j?\" on the original scores gives `FALSE FALSE TRUE TRUE`.",
    "key": false
   },
   {
    "id": "rec-02-q904",
    "label": "While Loops · Problem 3 · Setup",
    "question": "Suppose a process starts with value <- 5 and changes according to the following rule:\n• if value is even, divide it by 2;\n• if value is odd, multiply it by 3 and add 1.\nThis is repeated until the value becomes 1.",
    "code": "value <- 5\n# and changes according to the following rule:",
    "comment": "**The rule, in R terms**\n\n| Words | R |\n|---|---|\n| \"if value is even\" | `value %% 2 == 0` (remainder 0 when divided by 2) |\n| \"divide it by 2\" | `value <- value / 2` |\n| \"if value is odd\" | `else` (anything not even) |\n| \"multiply by 3 and add 1\" | `value <- 3 * value + 1` |\n| \"repeated until the value becomes 1\" | `while (value != 1)` |\n\nStarting from 5: 5 → 16 → 8 → 4 → 2 → 1.\n\n**Re-run tip:** the loop changes `value`, so after running Part I, `value` is 1 and the loop won't run again. Reset `value <- 5` (or 3 for Part II) at the top of each part's chunk.",
    "key": false
   },
   {
    "id": "rec-02-q905",
    "label": "While Loops · Problem 3 · Part I",
    "question": "Create an empty vector called sequence_values. Using a while loop:\n• store each value in sequence_values;\n• update value using the rule above;\n• stop when value becomes 1.\nMake sure that 1 is also included as the last element of sequence_values.",
    "code": "sequence_values <- c()\nwhile (value != 1) {\n  sequence_values <- c(sequence_values, value)\n  if (value %% 2 == 0) {\n    value <- value / 2\n  } else {\n    value <- 3 * value + 1\n  }\n}\nsequence_values <- c(sequence_values, 1)\nprint(sequence_values)\n#> [1]  5 16  8  4  2  1",
    "comment": "**Why `c()`?**\n\n`sequence_values <- c()` makes an **empty vector** (R prints it as `NULL`). It's the container the loop fills. Each pass, `sequence_values <- c(sequence_values, value)` means \"take everything collected so far, add the current value on the end, and save it back under the same name\":\n\n| Pass | value | sequence_values after |\n|---|---|---|\n| start | 5 | (empty) |\n| 1 | 5 → 16 | 5 |\n| 2 | 16 → 8 | 5 16 |\n| 3 | 8 → 4 | 5 16 8 |\n| 4 | 4 → 2 | 5 16 8 4 |\n| 5 | 2 → 1 | 5 16 8 4 2 |\n| loop stops (value is 1) | | then `c(sequence_values, 1)` → **5 16 8 4 2 1** |\n\n**Why `c()` here but `logical(n)` or `matrix(0, ...)` in Problem 2:** there you knew the size ahead of time (4 students, 4 × 4 scores), so you made a container with that many slots and filled `[i]`. Here you **don't know** how many steps the sequence will take, so you start empty and grow it with `c(old, new)`.\n\n**Why add 1 after the loop:** `while (value != 1)` checks **before** each pass. Once `value` becomes 1, the loop stops without storing it, so 1 has to be added afterwards.\n\n---\n\n**Common mistake: a typo in the name inside the loop**\n\n```r\nsequence_value <- c(sequence_values, value)    # missing \"s\" on the left\n```\nR treats `sequence_value` and `sequence_values` as **two different variables**. Each pass saves into the new `sequence_value`, while `sequence_values` never changes and stays empty. After the loop, `c(empty, 1)` prints just **`1`**. The Environment pane shows the giveaway: a `sequence_value` holding `2` (the last value saved) next to `sequence_values` holding `1`.\n\n**Rule:** in a \"grow\" line, the name on the left of `<-` must be **exactly** the same as the first name inside `c( )`. If the output is shorter than expected or empty, check the Environment pane for a near-duplicate name.\n\n---\n\n**Related problems (same \"grow a vector\" pattern)**\n- **Homework 1, Problem 4 Part 3:** fill `vector7` with odd numbers using `vector7 <- c(vector7, i)`.\n- **Recitation 2, Problem 3 Part II:** same loop plus a counter, `steps <- steps + 1`.\n- **Recitation 4 simulations** (streak game, random walk, rainy days): keep going until a condition, collecting results along the way.\n- **Rev 01, \"Repeat until something happens\":** the for-loop + `break` version.\n\n**How to solve similar problems**\n1. Is the final length known? **No** → start with `result <- c()`. **Yes** → `result <- numeric(n)` (or `logical(n)`, `character(n)`) and fill `result[i]`.\n2. Set the starting value (`value <- 5`).\n3. Write the stopping rule as the loop condition: \"until value becomes 1\" → `while (value != 1)`.\n4. Inside the loop, in this order: **save** the current value (`result <- c(result, value)`), then **update** it using the rule.\n5. After the loop, add anything the condition skipped (here the final 1), then `print(result)`.\n6. Check by tracing 2–3 passes by hand, like the table above.",
    "key": false
   },
   {
    "id": "rec-02-q906",
    "label": "While Loops · Problem 3 · Part II",
    "question": "Add a variable steps <- 0.\nModify the loop so that steps counts how many updates were required before the sequence reached 1.",
    "code": "steps <- 0\n# Modify the loop so that steps counts how many updates were required before the sequence reached 1.\nvalue <- 3\nsequence_values <- c()\nsteps <- 0\nwhile (value != 1) {\n  sequence_values <- c(sequence_values, value)\n  if (value %% 2 == 0) {\n    value <- value / 2\n  } else {\n    value <- 3 * value + 1\n  }\n  steps <- steps + 1\n}\nsequence_values <- c(sequence_values, 1)\nprint(sequence_values)\n#> [1]  3 10  5 16  8  4  2  1\nprint(steps)\n#> [1] 7",
    "comment": "**Roadmap: add a counter to the Part I loop**\n\n| Question says | Code |\n|---|---|\n| \"Add a variable steps <- 0\" | `steps <- 0` **before** the loop |\n| \"counts how many updates\" | `steps <- steps + 1` **inside** the loop, once per update |\n\n**Steps**\n1. Reset the start: `value <- 3`, `sequence_values <- c()`, `steps <- 0`.\n2. Same loop as Part I.\n3. After updating `value`, add 1 to `steps`. It goes inside the loop but **outside** the if/else, so it counts every pass, whether the value was even or odd.\n4. Print both.\n\n**Trace from 3:**\n\n| Pass | value before → after | steps |\n|---|---|---|\n| 1 | 3 → 10 | 1 |\n| 2 | 10 → 5 | 2 |\n| 3 | 5 → 16 | 3 |\n| 4 | 16 → 8 | 4 |\n| 5 | 8 → 4 | 5 |\n| 6 | 4 → 2 | 6 |\n| 7 | 2 → 1 | 7 |\n\nResult: `3 10 5 16 8 4 2 1` and **7 steps**. Steps is always one less than the number of values, since the last value (1) didn't need an update.\n\n**Counter pattern (reuse everywhere):** `count <- 0` before the loop → `count <- count + 1` inside → print/return after. If `steps <- 0` were inside the loop, it would reset every pass and end at 1.",
    "key": false
   },
   {
    "id": "rec-02-q907",
    "label": "Functions · Problem 4",
    "question": "Create a function named function1 with a single argument x that counts the number of even and odd numbers in the input list. The function should return a list with two elements: Even representing the count of even numbers and Odd representing the count of odd numbers. Test the function with the following input list: [ [1, 3.4, 2, -5], [2.2, 16, -3, 7], [“final”, “any”, “can”, “maybe”, “world”] ].",
    "code": "list1 <- list(c(1, 3.4, 2, -5), c(2.2, 16, -3, 7), c(\"final\", \"any\", \"can\", \"maybe\", \"world\"))\nfunction1 <- function(x){\nEven <- c(); Odd <- c()\nfor (i in 1:length(x)){\n  if(is.numeric(x[[i]])){\n   for (j in 1:length(x[[i]])) {\n     if(x[[i]][j] %% 2 == 0){\n       Even = c(Even, x[[i]][j])\n     } else if (x[[i]][j] %% 2 == 1){\n       Odd = c(Odd, x[[i]][j])\n     }\n   }\n  }\n}\nreturn(list(Even = length(Even), Odd = length(Odd)))\n}\nfunction1(list1)\n#> $Even\n#> [1] 2\n#> \n#> $Odd\n#> [1] 4",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"function named function1 with a single argument x\" | `function1 <- function(x) { }` |\n| \"input list\" with 3 vectors | loop over list elements: `for (i in 1:length(x))`, use `x[[i]]` |\n| one vector is text | skip it: `if (is.numeric(x[[i]]))` |\n| look at each number in that vector | inner loop: `for (j in 1:length(x[[i]]))`, number = `x[[i]][j]` |\n| even / odd | `%% 2 == 0` / `%% 2 == 1` |\n| \"return a list with Even and Odd\" | `return(list(Even = ..., Odd = ...))` |\n\n**Steps**\n1. Start two empty collectors: `Even <- c()`, `Odd <- c()`.\n2. **Outer loop** over the 3 vectors in the list (`[[i]]` gets the vector itself).\n3. Skip anything that isn't numeric.\n4. **Inner loop** over each number; add it to `Even` or `Odd`.\n5. Return the **counts** with `length(Even)`, `length(Odd)`.\n\n**Result:** Even = 2 (2, 16), Odd = 4 (1, −5, −3, 7). 3.4 and 2.2 are **neither**: `3.4 %% 2` is 1.4, which isn't 0 or 1, so they fall through both checks. In R, `-5 %% 2` is 1, so negatives work.\n\n**Simpler alternative:** use counters instead of collecting numbers: `even <- 0` … `even <- even + 1`. Same answer, less to keep track of.\n\n**Pattern:** list of vectors → outer loop with `[[i]]`, inner loop with `[j]`.",
    "key": false
   },
   {
    "id": "rec-02-p4-sol2",
    "label": "Functions · Problem 4 · Solution #2 (counters, for loops over values)",
    "question": "Create a function named function1 with a single argument x that counts the number of even and odd numbers in the input list. The function should return a list with two elements: Even representing the count of even numbers and Odd representing the count of odd numbers. Test the function with the following input list: [ [1, 3.4, 2, -5], [2.2, 16, -3, 7], [“final”, “any”, “can”, “maybe”, “world”] ].",
    "code": "list1 <- list(c(1, 3.4, 2, -5), c(2.2, 16, -3, 7),\n              c(\"final\", \"any\", \"can\", \"maybe\", \"world\"))\n\ncount_even_odd <- function(x) {\n  even <- 0                              # counters instead of collecting numbers\n  odd <- 0\n  for (vec in x) {                       # each vector in the list\n    if (!is.numeric(vec)) {\n      next                               # skip the text vector\n    }\n    for (num in vec) {                   # each number in that vector\n      if (num %% 2 == 0) {\n        even <- even + 1\n      } else if (num %% 2 == 1) {        # 3.4 and 2.2 are neither\n        odd <- odd + 1\n      }\n    }\n  }\n  return(list(Even = even, Odd = odd))\n}\n\ncount_even_odd(list1)\n#> $Even\n#> [1] 2\n#> $Odd\n#> [1] 4",
    "key": false,
    "comment": "**What's different from Solution #1**\n\n- **Counters instead of collecting.** Solution #1 builds vectors `Even` and `Odd`, then takes `length()` of each at the end. Here `even <- even + 1` counts directly, so there's less to track and no `length()` step.\n- **Loops over values, not positions.** `for (vec in x)` hands you each vector itself (no `x[[i]]`), and `for (num in vec)` hands you each number (no `x[[i]][j]`). Use this style when you don't need the position number.\n- **`next` to skip text.** Instead of wrapping everything in `if (is.numeric(...)) { ... }`, it skips non-numeric elements up front, which keeps the loop body flatter.\n\n**Steps**\n1. `even <- 0`, `odd <- 0`.\n2. Outer loop over the vectors in the list; `next` if it isn't numeric.\n3. Inner loop over the numbers; add 1 to the right counter.\n4. `return(list(Even = even, Odd = odd))` → Even 2, Odd 4.\n\n**Remember:** `for (v in x)` gives values; `for (i in 1:length(x))` gives positions. Use positions when you need to write into `result[i]` or look at a neighbor `x[i - 1]`."
   },
   {
    "id": "rec-02-p4-sol3",
    "label": "Functions · Problem 4 · Solution #3 (no loops: sapply + unlist)",
    "question": "Create a function named function1 with a single argument x that counts the number of even and odd numbers in the input list. The function should return a list with two elements: Even representing the count of even numbers and Odd representing the count of odd numbers. Test the function with the following input list: [ [1, 3.4, 2, -5], [2.2, 16, -3, 7], [“final”, “any”, “can”, “maybe”, “world”] ].",
    "code": "list1 <- list(c(1, 3.4, 2, -5), c(2.2, 16, -3, 7),\n              c(\"final\", \"any\", \"can\", \"maybe\", \"world\"))\n\ncount_even_odd2 <- function(x) {\n  keep <- sapply(x, is.numeric)          # TRUE TRUE FALSE: which elements are numbers\n  nums <- unlist(x[keep])                # one numeric vector of all the numbers\n  return(list(Even = sum(nums %% 2 == 0),\n              Odd  = sum(nums %% 2 == 1)))\n}\n\ncount_even_odd2(list1)\n#> $Even\n#> [1] 2\n#> $Odd\n#> [1] 4\n\n# Why the sapply step matters: unlisting everything turns it all into text\nunlist(list1)[1:4]\n#> [1] \"1\"   \"3.4\" \"2\"   \"-5\" ",
    "key": false,
    "comment": "**The no-loop version, step by step**\n\n1. **`sapply(x, is.numeric)`** asks each list element \"are you numbers?\" → `TRUE TRUE FALSE`.\n2. **`x[keep]`** keeps only the numeric elements (single brackets, because you want a smaller **list**).\n3. **`unlist(...)`** flattens them into one vector: `1 3.4 2 -5 2.2 16 -3 7`.\n4. **`nums %% 2 == 0`** checks every number at once → TRUE/FALSE vector. **`sum()`** counts the TRUEs (TRUE = 1). Same for `== 1`.\n\n**Why step 1 matters:** if you `unlist(list1)` without removing the text vector first, **everything** becomes text (`\"1\" \"3.4\" \"2\" \"-5\"`), because a vector can only hold one type, and `%%` then gives an error. The last lines of the code show this.\n\n**When to use which:**\n- Exam says \"use a for loop\" → Solution #1 or #2.\n- No loop requirement → this one is shortest. It's the same counting idea as `sum(eligible)` in Problem 1 Part II.\n\n**Pieces worth remembering:** `sapply(list, function)` = one answer per element; `unlist()` = flatten a list into a vector; `sum(condition)` = count how many are TRUE."
   },
   {
    "id": "rec-02-q908",
    "label": "Functions · Problem 5",
    "question": "Write a function neighbor_matrix(n, m) that creates and returns an n x m numeric matrix filled according to the following rules:\n1. The top-left entry (row 1, column 1) should start with the value 1.\n2. Each subsequent entry is filled using the following rule:\n• The value of a cell is equal to the sum of its immediate top and left neighbors (if they exist).\n• If a neighbor does not exist (for example, for the first row or first column), treat that neighbor as 0.\nTest your function with n = 4 and m = 5.",
    "code": "neighbor_matrix <- function(n, m) {\n  mat <- matrix(0, nrow = n, ncol = m)\n  for (i in 1:n) {\n    for (j in 1:m) {\n      if (i == 1 & j == 1) {\n        mat[i, j] <- 1\n      } else {\n        top <- ifelse(i > 1, mat[i - 1, j], 0)\n        left <- ifelse(j > 1, mat[i, j - 1], 0)\n        mat[i, j] <- top + left\n      }\n    }\n  }\n  return(mat)\n}\nprint(neighbor_matrix(4, 5))\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]    1    1    1    1    1\n#> [2,]    1    2    3    4    5\n#> [3,]    1    3    6   10   15\n#> [4,]    1    4   10   20   35",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"neighbor_matrix(n, m) … returns an n x m matrix\" | `function(n, m)`, `mat <- matrix(0, nrow = n, ncol = m)`, `return(mat)` |\n| fill every cell | nested loops: `i` over rows, `j` over columns |\n| \"top-left entry is 1\" | `if (i == 1 & j == 1) mat[i, j] <- 1` |\n| \"sum of top and left neighbors\" | top = `mat[i - 1, j]`, left = `mat[i, j - 1]` |\n| \"if a neighbor doesn't exist, treat it as 0\" | top only if `i > 1`, left only if `j > 1` |\n\n**Steps**\n1. Make an n × m container of 0s (same idea as Problem 2 Part I).\n2. Loop rows, then columns, so cells fill left-to-right, top-to-bottom. That order matters: when you fill a cell, its top and left neighbors are already done.\n3. Corner cell = 1.\n4. Every other cell: `top + left`, using 0 at the edges. `ifelse(i > 1, mat[i - 1, j], 0)` means \"the cell above if there is one, otherwise 0\".\n\n**Check a few cells:** row 1 is all 1s (nothing above, 1 on the left). Column 1 is all 1s. `mat[2, 2]` = top 1 + left 1 = **2**. `mat[3, 3]` = 3 + 3 = **6**. Bottom-right = 15 + 20 = **35**.\n\n**Pattern:** \"each cell depends on cells before it\" → nested loops in reading order, with edge checks `i > 1`, `j > 1`, `i < nrow`, `j < ncol`.",
    "key": false
   },
   {
    "id": "rec-02-p5-sol2",
    "label": "Functions · Problem 5 · Solution #2 (simpler: start with 1s)",
    "question": "Write a function neighbor_matrix(n, m) that creates and returns an n x m numeric matrix filled according to the following rules:\n1. The top-left entry (row 1, column 1) should start with the value 1.\n2. Each subsequent entry is filled using the following rule:\n• The value of a cell is equal to the sum of its immediate top and left neighbors (if they exist).\n• If a neighbor does not exist (for example, for the first row or first column), treat that neighbor as 0.\nTest your function with n = 4 and m = 5.",
    "code": "neighbor_matrix2 <- function(n, m) {\n  mat <- matrix(1, nrow = n, ncol = m)   # start with every cell = 1\n  for (i in 2:n) {                       # skip row 1: it stays all 1s\n    for (j in 2:m) {                     # skip column 1: it stays all 1s\n      mat[i, j] <- mat[i - 1, j] + mat[i, j - 1]   # cell above + cell to the left\n    }\n  }\n  return(mat)\n}\n\nprint(neighbor_matrix2(4, 5))\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]    1    1    1    1    1\n#> [2,]    1    2    3    4    5\n#> [3,]    1    3    6   10   15\n#> [4,]    1    4   10   20   35\n\n# Same answer as the posted solution?\nneighbor_matrix <- function(n, m) {\n  mat <- matrix(0, nrow = n, ncol = m)\n  for (i in 1:n) {\n    for (j in 1:m) {\n      if (i == 1 & j == 1) {\n        mat[i, j] <- 1\n      } else {\n        top <- ifelse(i > 1, mat[i - 1, j], 0)\n        left <- ifelse(j > 1, mat[i, j - 1], 0)\n        mat[i, j] <- top + left\n      }\n    }\n  }\n  return(mat)\n}\nidentical(neighbor_matrix2(4, 5), neighbor_matrix(4, 5))\n#> [1] TRUE",
    "key": true,
    "comment": "**The trick: the edges are always 1, so fill them first and skip them.**\n\n- **Row 1:** nothing above (counts as 0), so each cell = 0 + the cell to its left. The left one is 1, so the whole row is 1s.\n- **Column 1:** nothing to the left (0), so each cell = the cell above + 0. The whole column is 1s.\n\nSo start with **every** cell = 1: `matrix(1, nrow = n, ncol = m)`. Then only the inside cells need work, and every inside cell **always** has a cell above and a cell to its left, so no `if`, no `ifelse`, and no edge checks.\n\n**Steps**\n1. `mat <- matrix(1, nrow = n, ncol = m)`, a grid of 1s.\n2. Loop rows from **2** and columns from **2** (row 1 and column 1 are already right).\n3. Each cell = cell above `mat[i - 1, j]` + cell to the left `mat[i, j - 1]`.\n4. `return(mat)`.\n\n**Fill order (4 × 5):** each number is above + left:\n```\n1  1  1  1  1\n1  2  3  4  5      2 = 1 + 1,  3 = 1 + 2,  4 = 1 + 3 ...\n1  3  6 10 15      6 = 3 + 3, 10 = 4 + 6 ...\n1  4 10 20 35     35 = 15 + 20\n```\nThe loops go left to right, top to bottom, so the cell above and the cell to the left are always finished before they're needed.\n\n**Comparison with Solution #1:** same answer (`identical()` is TRUE in the code), but Solution #1 starts with 0s and has to handle the corner and the edges inside the loop with `if` and `ifelse`. Here the starting value does that work.\n\n**Limit:** this assumes at least 2 rows and 2 columns. With `n = 1`, `2:1` counts **down** (`2 1`), so the loop would break. Solution #1 handles that case.\n\n**Pattern to reuse:** if the edges follow a simple rule, set them up **before** the loop, then loop only over the cells that need the real calculation."
   },
   {
    "id": "rec-02-q909",
    "label": "Extra practice · Problem 6",
    "question": "Write a function largest_odd(x) that takes a numeric vector x and returns the largest odd number in the vector. If there are no odd numbers, return NULL. Test your function with the following vector: [10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17, 21, 1, 31, 36]",
    "code": " x <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17, 21, 1, 31, 36)\nlargest_odd <- function(x) {\n  odd_numbers <- c()\n  for (i in 1:length(x)) {\n    if (x[i] %% 2 != 0) {\n      odd_numbers <- c(odd_numbers, x[i])\n    }\n  }\n  if (length(odd_numbers) == 0) {\n    return(NULL)\n  }\n  largest <- odd_numbers[1]\n  for (i in 1:length(odd_numbers)) {\n    if (odd_numbers[i] > largest) {\n      largest <- odd_numbers[i]\n    }\n  }\n  return(largest)\n}\nlargest_odd(x)\n#> [1] 31",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"largest_odd(x) takes a numeric vector\" | `function(x)` |\n| find the odd numbers | loop + `if (x[i] %% 2 != 0)` → collect with `c()` |\n| \"If there are no odd numbers, return NULL\" | `if (length(odd_numbers) == 0) return(NULL)` |\n| \"returns the largest odd number\" | find the max of the collected odds |\n\n**Steps**\n1. Start `odd_numbers <- c()`.\n2. Loop over `x`; keep each odd value.\n3. **Guard case first:** none found → `return(NULL)`.\n4. Find the largest. The solution uses a running-max loop: start `largest` at the first odd, replace it whenever a bigger one appears. `max(odd_numbers)` does the same in one line.\n5. `return(largest)`. Result: **31**.\n\n**One-line version:** `max(x[x %% 2 != 0])`. It filters to odds, then takes the max (it warns on an empty vector, which is why the question wants the NULL check).\n\n**Pattern:** filter (loop + if + `c()`) → handle the empty case → summarize (`max`, `min`, `sum`, `length`).",
    "key": false
   },
   {
    "id": "rec-02-p6-sol2",
    "label": "Extra practice · Problem 6 · Solution #2 (filter first, then max())",
    "question": "Write a function largest_odd(x) that takes a numeric vector x and returns the largest odd number in the vector. If there are no odd numbers, return NULL. Test your function with the following vector: [10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17, 21, 1, 31, 36]",
    "code": "largest_odd2 <- function(x) {\n  odds <- x[x %% 2 != 0]          # keep only the odd numbers\n  if (length(odds) == 0) {\n    return(NULL)                  # none found\n  }\n  return(max(odds))\n}\n\nx <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17, 21, 1, 31, 36)\nlargest_odd2(x)\n#> [1] 31\nlargest_odd2(c(2, 4, 6))          # no odds\n#> NULL",
    "comment": "**Why it's simpler:** Solution #1 uses two loops: one to collect the odd numbers and one to find the biggest by hand. This version does each step with one tool:\n1. `x[x %% 2 != 0]` keeps only the odd numbers (the same filter as `vector4[vector4 > 15]` in Homework 1).\n2. Empty → `return(NULL)`.\n3. `max()` finds the largest. No running-max loop needed.\n\n**Result:** 31, and `NULL` for `c(2, 4, 6)`.\n\n**Remember:** \"find the ___ of the values that ___\" → filter with `x[condition]`, then summarize with `max`, `min`, `sum`, `mean` or `length`.",
    "key": false
   },
   {
    "id": "rec-02-q910",
    "label": "Extra practice · Problem 7",
    "question": "Write a function first_repeated(x) that takes a numeric vector x and returns the first repeated element. If no element repeats, return NULL. Test your function with the following vector: [10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17]",
    "code": "x <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17)\nfirst_repeated <- function(x) {\n  for (i in 2:length(x)) {\n    for (j in 1:(i - 1)) {\n      if (x[i] == x[j]) {\n        return(x[i])\n      }\n    }\n  }\n  return(NULL)\n}\nfirst_repeated(x)\n#> [1] 4",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"first_repeated(x)\" | `function(x)` |\n| \"returns the first repeated element\" | for each position, check whether that value appeared **earlier** |\n| \"If no element repeats, return NULL\" | `return(NULL)` after the loops finish |\n\n**Steps**\n1. Outer loop `i` from **2** (position 1 has nothing before it).\n2. Inner loop `j` over every earlier position `1:(i - 1)`.\n3. If `x[i] == x[j]`, the value at `i` is a repeat. `return(x[i])` **immediately**: `return` exits the whole function, so you get the first one found.\n4. If both loops finish without returning, nothing repeated → `return(NULL)`.\n\n**Trace:** scanning 10, 15, 11, 4, 3, 8, 17, 34, then position 9 is **4**, which matches position 4. Result: **4**. (11 and 17 also repeat, but later.)\n\n**`return` inside a loop** is the clean way to say \"stop as soon as you find it.\"\n\n**One-line version:** `x[duplicated(x)][1]`. `duplicated()` marks values seen before.",
    "key": false
   },
   {
    "id": "rec-02-p7-sol2",
    "label": "Extra practice · Problem 7 · Solution #2 (one loop with a \"seen\" list)",
    "question": "Write a function first_repeated(x) that takes a numeric vector x and returns the first repeated element. If no element repeats, return NULL. Test your function with the following vector: [10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17]",
    "code": "first_repeated2 <- function(x) {\n  seen <- c()                     # values we've already passed\n  for (value in x) {\n    if (value %in% seen) {\n      return(value)               # seen before = first repeat\n    }\n    seen <- c(seen, value)\n  }\n  return(NULL)\n}\n\nx <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17)\nfirst_repeated2(x)\n#> [1] 4\nfirst_repeated2(c(1, 2, 3))       # no repeats\n#> NULL",
    "comment": "**Why it's simpler:** Solution #1 uses two nested loops, comparing each value to every earlier one. This version walks through once and keeps a list of values already passed:\n1. `seen <- c()`, empty to start.\n2. For each value: is it already in `seen`? (`%in%` checks the whole vector at once.) Yes → that's the first repeat, return it.\n3. No → add it to `seen` and keep going.\n4. Loop finishes → no repeats → `NULL`.\n\n**Trace:** 10, 15, 11, 4, 3, 8, 17, 34 all get added. The next 4 is already in `seen` → return **4**.\n\n**Remember:** `value %in% vector` replaces an inner loop whenever you're asking \"have I seen this?\" or \"is this in the list?\"",
    "key": false
   },
   {
    "id": "rec-02-q911",
    "label": "Extra practice · Problem 8",
    "question": "Write a function generate_custom_sequence(n) that generates a sequence of numbers where each number is the sum of the previous two numbers, starting with 1 and 2. The function should return the first n numbers in the sequence. Test your function with n = 10.",
    "code": "n <- 10\ngenerate_custom_sequence <- function(n) {\n  sequence <- c(1, 2)\n  for (i in 3:n) {\n    sequence[i] <- sequence[i - 1] + sequence[i - 2]\n  }\n  return(sequence)\n}\ngenerate_custom_sequence(10)\n#>  [1]  1  2  3  5  8 13 21 34 55 89",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"starting with 1 and 2\" | `sequence <- c(1, 2)` |\n| \"each number is the sum of the previous two\" | `sequence[i] <- sequence[i - 1] + sequence[i - 2]` |\n| \"return the first n numbers\" | loop `i` from 3 to n, then `return(sequence)` |\n\n**Steps**\n1. Put the two given starting values in the vector.\n2. Loop from position **3**: positions 1 and 2 are already filled.\n3. Each new position = the one before + the one before that.\n4. Return the vector. For n = 10: `1 2 3 5 8 13 21 34 55 89`.\n\n**Trace:** position 3 = 2 + 1 = 3; position 4 = 3 + 2 = 5; position 5 = 5 + 3 = 8 …\n\n**Watch out:** if n is 1 or 2, `3:n` counts **down** (`3:1` is `3 2 1`) and breaks. Safe version: add `if (n <= 2) return(sequence[1:n])` before the loop.\n\n**Pattern:** \"each value depends on the previous ones\" → start with the given values, loop from the first unknown position, use `[i - 1]`, `[i - 2]`.",
    "key": false
   },
   {
    "id": "rec-02-p8-sol2",
    "label": "Extra practice · Problem 8 · Solution #2 (grow until long enough)",
    "question": "Write a function generate_custom_sequence(n) that generates a sequence of numbers where each number is the sum of the previous two numbers, starting with 1 and 2. The function should return the first n numbers in the sequence. Test your function with n = 10.",
    "code": "generate_custom_sequence2 <- function(n) {\n  sequence <- c(1, 2)\n  while (length(sequence) < n) {\n    last_two <- sequence[length(sequence)] + sequence[length(sequence) - 1]\n    sequence <- c(sequence, last_two)       # add the next number on the end\n  }\n  return(sequence[1:n])                     # also works for n = 1\n}\n\ngenerate_custom_sequence2(10)\n#>  [1]  1  2  3  5  8 13 21 34 55 89\ngenerate_custom_sequence2(1)\n#> [1] 1",
    "comment": "**Why it's simpler (and safer):** instead of filling positions 3 to n, keep adding the sum of the last two numbers until the vector is long enough.\n1. Start with `c(1, 2)`.\n2. While it's shorter than n: last + second-to-last, add it on the end with `c()`.\n3. Return `sequence[1:n]`.\n\n**Fixes a hidden problem:** Solution #1 uses `for (i in 3:n)`, and when n is 1 or 2, `3:n` counts **down** and breaks. Here the `while` just doesn't run, and `[1:n]` trims it. `generate_custom_sequence2(1)` gives `1`.\n\n**Remember:** `x[length(x)]` is the last value and `x[length(x) - 1]` the one before it. \"Grow until long enough\" = `while (length(x) < n)`.",
    "key": false
   },
   {
    "id": "rec-02-q912",
    "label": "Extra practice · Problem 9",
    "question": "Write a function longest_run(x) that takes a numeric vector x and returns the longest consecutive sequence of repeated numbers along with its length. Test your function with x = c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6).",
    "code": "x <- c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6)\nlongest_run <- function(x) {\n  current_length <- 1\n  longest_length <- 1\n  longest_value <- x[1]\n  for (i in 2:length(x)) {\n    if (x[i] == x[i - 1]) {\n      current_length <- current_length + 1\n    } else {\n      current_length <- 1\n    }\n    if (current_length > longest_length) {\n      longest_length <- current_length\n      longest_value <- x[i]\n    }\n  }\n  return(c(longest_value, longest_length))\n}\nlongest_run(x)\n#> [1] 4 4",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"longest consecutive sequence of repeated numbers\" | compare each value to the **one before it** |\n| track the current run and the best run | `current_length`, `longest_length`, `longest_value` |\n| \"along with its length\" | `return(c(longest_value, longest_length))` |\n\n**Steps**\n1. Start everything at the first element: current run = 1, best run = 1, best value = `x[1]`.\n2. Loop from position 2.\n3. Same as the previous value (`x[i] == x[i - 1]`)? Run grows: `current_length + 1`. Different? Run restarts at 1.\n4. If the current run beats the best, update the best length **and** value.\n5. Return value and length.\n\n**Trace on 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6:** the run of 2s reaches 3 (new best), the 3s reach 2 (not better), the 4s reach 4 (new best). Result: **4 4** (the value 4, run length 4).\n\n**Pattern: \"running best\"**: keep a current count plus a best-so-far, and update the best only when the current one beats it. Problem 16 uses the same idea.",
    "key": false
   },
   {
    "id": "rec-02-p9-sol2",
    "label": "Extra practice · Problem 9 · Solution #2 (rle() does the counting)",
    "question": "Write a function longest_run(x) that takes a numeric vector x and returns the longest consecutive sequence of repeated numbers along with its length. Test your function with x = c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6).",
    "code": "longest_run2 <- function(x) {\n  runs <- rle(x)                  # run lengths: each value and how many times in a row\n  best <- which.max(runs$lengths) # position of the longest run\n  return(c(runs$values[best], runs$lengths[best]))\n}\n\nx <- c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6)\nrle(x)                            # what rle() gives back\n#> Run Length Encoding\n#>   lengths: int [1:6] 1 3 2 4 1 1\n#>   values : num [1:6] 1 2 3 4 5 6\nlongest_run2(x)\n#> [1] 4 4",
    "comment": "**Why it's simpler:** R has a built-in function for exactly this. `rle()` (\"run length encoding\") turns a vector into its runs:\n```\nlengths: 1 3 2 4 1 1\nvalues : 1 2 3 4 5 6\n```\nwhich reads \"one 1, three 2s, two 3s, four 4s, one 5, one 6\".\n\n1. `runs <- rle(x)`.\n2. `which.max(runs$lengths)` → position of the longest run (the 4th run).\n3. Return that run's value and length → **4 4**.\n\n**Use the loop version (Solution #1) if the exam says \"use a for loop.\"** Knowing `rle()` still helps you check your answer. It solves Problem 16 too: the first run with `lengths >= 3`.\n\n**Remember:** `which.max()` gives the **position** of the biggest value; use it to pick the matching item from another vector.",
    "key": false
   },
   {
    "id": "rec-02-q913",
    "label": "Extra practice · Problem 10",
    "question": "Write a function sum_of_unique(x) that returns the sum of the elements in a numeric vector x that appear only once. Test your function with c(2, 3, 4, 3, 5, 2, 7).",
    "code": "x <- c(2, 3, 4, 3, 5, 2, 7)\nsum_of_unique <- function(x) {\n  unique_values <- c()\n  for (i in 1:length(x)) {\n    count <- 0\n    for (j in 1:length(x)) {\n      if (x[i] == x[j]) {\n        count <- count + 1\n      }\n    }\n    if (count == 1) {\n      unique_values <- c(unique_values, x[i])\n    }\n  }\n  return(sum(unique_values))\n}\nsum_of_unique(x)\n#> [1] 16",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"elements that appear only once\" | for each element, count how many times it appears |\n| \"sum of\" those | collect them, then `sum()` |\n\n**Steps**\n1. Start `unique_values <- c()`.\n2. Outer loop `i`: pick one element.\n3. Reset `count <- 0` **inside** the outer loop (fresh count for each element).\n4. Inner loop `j`: compare `x[i]` to every element (including itself), add 1 on each match.\n5. `count == 1` means it only matched itself → keep it.\n6. Return `sum(unique_values)`.\n\n**Trace on 2, 3, 4, 3, 5, 2, 7:** 2 appears twice, 3 twice, 4 once, 5 once, 7 once → 4 + 5 + 7 = **16**.\n\n**Watch out:** if `count <- 0` sat outside the outer loop, counts would pile up across elements and nothing would ever equal 1.\n\n**Shortcut:** `table(x)` counts every value at once.\n\n**Pattern: \"count occurrences\"** → nested loop comparing each element to all others, counter reset per element.",
    "key": false
   },
   {
    "id": "rec-02-p10-sol2",
    "label": "Extra practice · Problem 10 · Solution #2 (count with sum(x == value))",
    "question": "Write a function sum_of_unique(x) that returns the sum of the elements in a numeric vector x that appear only once. Test your function with c(2, 3, 4, 3, 5, 2, 7).",
    "code": "sum_of_unique2 <- function(x) {\n  total <- 0\n  for (value in x) {\n    if (sum(x == value) == 1) {   # how many times does this value appear?\n      total <- total + value\n    }\n  }\n  return(total)\n}\n\nx <- c(2, 3, 4, 3, 5, 2, 7)\nsum_of_unique2(x)\n#> [1] 16\nx == 3                            # what the check looks at for value 3\n#> [1] FALSE  TRUE FALSE  TRUE FALSE FALSE FALSE",
    "comment": "**Why it's simpler:** Solution #1 counts each value's appearances with an inner loop. `sum(x == value)` does the same in one step:\n- `x == 3` → `FALSE TRUE FALSE TRUE FALSE FALSE FALSE` (TRUE wherever x is 3)\n- `sum()` counts the TRUEs → 2 → appears twice → skip.\n\n1. `total <- 0`.\n2. For each value: appears exactly once? Add it to `total`.\n3. Return `total` → 4 + 5 + 7 = **16**.\n\nIt also adds as it goes, so there's no extra vector to collect and sum at the end.\n\n**Remember:** `sum(condition)` = \"how many are TRUE.\" It replaces an inner counting loop almost every time.",
    "key": false
   },
   {
    "id": "rec-02-q914",
    "label": "Extra practice · Problem 11",
    "question": "Create a function that takes a list of numeric vectors as input and rotates each vector clockwise by one position [for example (1, 2, 3) becomes (3, 1, 2)]. The function should return a new list with the rotated vectors. Test your function with the following input list: [(3, 5, 7, 9), (10, 20, 30), (2, 4, 6, 8, 10)]",
    "code": "input_list <- list(c(3, 5, 7, 9), c(10, 20, 30), c(2, 4, 6, 8, 10))\nrotate_vectors <- function(x) {\n  result <- list()\n  for (i in 1:length(x)) {\n    current_vector <- x[[i]]\n    last_value <- current_vector[length(current_vector)]\n    remaining_values <- current_vector[-length(current_vector)]\n    result[[i]] <- c(last_value, remaining_values)\n  }\n  return(result)\n}\nrotate_vectors(input_list)\n#> [[1]]\n#> [1] 9 3 5 7\n#> \n#> [[2]]\n#> [1] 30 10 20\n#> \n#> [[3]]\n#> [1] 10  2  4  6  8",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"takes a list of numeric vectors\" | loop over the list: `x[[i]]` |\n| \"rotates each vector by one: (1,2,3) → (3,1,2)\" | last value goes to the front |\n| \"return a new list\" | `result <- list()`, fill `result[[i]]`, `return(result)` |\n\n**Steps**\n1. Start an empty **list**: `result <- list()` (a list because the vectors have different lengths).\n2. Loop over each vector with `[[i]]`.\n3. Last value: `v[length(v)]`. Everything except the last: `v[-length(v)]`.\n4. Glue them: `c(last_value, remaining_values)` and store in `result[[i]]`.\n5. Return the list.\n\n**Example:** `c(3, 5, 7, 9)` → last = 9, rest = `3 5 7` → **9 3 5 7**.\n\n**Remember:** `v[length(v)]` = last element; negative index `v[-k]` = everything except position k. Use `[[i]] <-` to put something into a list slot.",
    "key": false
   },
   {
    "id": "rec-02-p11-sol2",
    "label": "Extra practice · Problem 11 · Solution #2 (lapply() instead of the loop)",
    "question": "Create a function that takes a list of numeric vectors as input and rotates each vector clockwise by one position [for example (1, 2, 3) becomes (3, 1, 2)]. The function should return a new list with the rotated vectors. Test your function with the following input list: [(3, 5, 7, 9), (10, 20, 30), (2, 4, 6, 8, 10)]",
    "code": "rotate_vectors2 <- function(x) {\n  rotate_one <- function(v) {\n    return(c(v[length(v)], v[-length(v)]))   # last value first, then the rest\n  }\n  return(lapply(x, rotate_one))              # do it to every vector in the list\n}\n\ninput_list <- list(c(3, 5, 7, 9), c(10, 20, 30), c(2, 4, 6, 8, 10))\nrotate_vectors2(input_list)\n#> [[1]]\n#> [1] 9 3 5 7\n#> [[2]]\n#> [1] 30 10 20\n#> [[3]]\n#> [1] 10  2  4  6  8",
    "comment": "**Why it's simpler:** write the rotation for **one** vector as a small function, then let `lapply()` apply it to every vector in the list. `lapply()` always returns a list, which is what the question asks for.\n\n1. `rotate_one(v)`: `c(v[length(v)], v[-length(v)])` → last value, then everything except the last.\n2. `lapply(x, rotate_one)` → runs it on each vector, collects the results in a list.\n\n**Result:** `9 3 5 7`, `30 10 20`, `10 2 4 6 8`.\n\n**Pattern to reuse:** \"do ___ to each vector in a list\" → solve it for one vector first, then `lapply(list, that_function)`. This is also the easiest way to write it on an exam: get one case working, then apply it.",
    "key": false
   },
   {
    "id": "rec-02-q915",
    "label": "Extra practice · Problem 12",
    "question": "Create a function named classify_numbers with a single argument num_list that categorizes numbers in the input list into different groups. The function should perform the following steps:\n1. Iterate through each element in the input list and check if it is a number. If it is a number, determine whether it is positive, negative, even, or odd.\n2. Return a list containing four elements:\n• PositiveEven: Count of positive even numbers\n• PositiveOdd: Count of positive odd numbers\n• NegativeEven: Count of negative even numbers\n• NegativeOdd: Count of negative odd numbers\nTest your function with the following input list:\nnum_list <- list(1, -2, 3, c(4, -3), -5, 6, c(\"text\", \"dot\", \"period\"), -8, 9)",
    "code": "num_list <- list(1, -2, 3, c(4, -3), -5, 6, c(\"text\", \"dot\", \"period\"), -8, 9)\nclassify_numbers <- function(num_list) {\n  PositiveEven <- 0\n  PositiveOdd <- 0\n  NegativeEven <- 0\n  NegativeOdd <- 0\n  for (i in 1:length(num_list)) {\n    if (is.numeric(num_list[[i]])) {\n      current_element <- num_list[[i]]\n      for (j in 1:length(current_element)) {\n        current_number <- current_element[j]\n        if (current_number > 0 & current_number %% 2 == 0) {\n          PositiveEven <- PositiveEven + 1\n        } else if (current_number > 0 & current_number %% 2 != 0) {\n          PositiveOdd <- PositiveOdd + 1\n        } else if (current_number < 0 & current_number %% 2 == 0) {\n          NegativeEven <- NegativeEven + 1\n        } else if (current_number < 0 & current_number %% 2 != 0) {\n          NegativeOdd <- NegativeOdd + 1\n        }\n      }\n    }\n  }\n  return(list(PositiveEven = PositiveEven, PositiveOdd = PositiveOdd,\n              NegativeEven = NegativeEven, NegativeOdd = NegativeOdd))\n}\nclassify_numbers(num_list)\n#> $PositiveEven\n#> [1] 2\n#> \n#> $PositiveOdd\n#> [1] 3\n#> \n#> $NegativeEven\n#> [1] 2\n#> \n#> $NegativeOdd\n#> [1] 2",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"classify_numbers with argument num_list\" | `function(num_list)` |\n| four categories to count | four counters, all starting at 0 |\n| \"check if it is a number\" | `if (is.numeric(num_list[[i]]))` |\n| some list elements hold 2 numbers (`c(4, -3)`) | inner loop over that element |\n| positive/negative and even/odd | combine with `&`: `> 0 & %% 2 == 0`, etc. |\n| \"return a list containing four elements\" | `return(list(PositiveEven = ..., ...))` |\n\n**Steps**\n1. Four counters at 0.\n2. Outer loop over the list with `[[i]]`; skip non-numeric elements (the text vector).\n3. Inner loop over the numbers inside that element (handles `c(4, -3)`).\n4. if / else if chain with 4 branches → add 1 to the matching counter.\n5. Return a named list of the 4 counts.\n\n**Result:** PositiveEven 2 (4, 6), PositiveOdd 3 (1, 3, 9), NegativeEven 2 (−2, −8), NegativeOdd 2 (−3, −5).\n\n**Remember:** in R, `-2 %% 2` is 0 and `-3 %% 2` is 1, so even/odd checks work on negatives. Zero would match none of the branches (neither positive nor negative).\n\n**Same pattern as Problem 4:** list → `[[i]]` outer loop → `is.numeric` check → inner loop → counters → named list.",
    "key": false
   },
   {
    "id": "rec-02-p12-sol2",
    "label": "Extra practice · Problem 12 · Solution #2 (no loops: unlist + sum(conditions))",
    "question": "Create a function named classify_numbers with a single argument num_list that categorizes numbers in the input list into different groups. The function should perform the following steps:\n1. Iterate through each element in the input list and check if it is a number. If it is a number, determine whether it is positive, negative, even, or odd.\n2. Return a list containing four elements:\n• PositiveEven: Count of positive even numbers\n• PositiveOdd: Count of positive odd numbers\n• NegativeEven: Count of negative even numbers\n• NegativeOdd: Count of negative odd numbers\nTest your function with the following input list:\nnum_list <- list(1, -2, 3, c(4, -3), -5, 6, c(\"text\", \"dot\", \"period\"), -8, 9)",
    "code": "classify_numbers2 <- function(num_list) {\n  nums <- unlist(num_list[sapply(num_list, is.numeric)])   # all numbers, text dropped\n  return(list(PositiveEven = sum(nums > 0 & nums %% 2 == 0),\n              PositiveOdd  = sum(nums > 0 & nums %% 2 != 0),\n              NegativeEven = sum(nums < 0 & nums %% 2 == 0),\n              NegativeOdd  = sum(nums < 0 & nums %% 2 != 0)))\n}\n\nnum_list <- list(1, -2, 3, c(4, -3), -5, 6, c(\"text\", \"dot\", \"period\"), -8, 9)\nclassify_numbers2(num_list)\n#> $PositiveEven\n#> [1] 2\n#> $PositiveOdd\n#> [1] 3\n#> $NegativeEven\n#> [1] 2\n#> $NegativeOdd\n#> [1] 2",
    "comment": "**Why it's simpler:** four counters and a nested loop become four `sum()` lines.\n1. `sapply(num_list, is.numeric)` → which elements are numbers. `num_list[...]` keeps those, and `unlist()` flattens them into one vector: `1 -2 3 4 -3 -5 6 -8 9`.\n2. Each category is one condition, and `sum()` counts the TRUEs:\n   - `nums > 0 & nums %% 2 == 0` → positive even → 2\n   - `nums > 0 & nums %% 2 != 0` → positive odd → 3\n   - `nums < 0 & nums %% 2 == 0` → negative even → 2\n   - `nums < 0 & nums %% 2 != 0` → negative odd → 2\n\n**Why drop the text first:** `unlist()` on everything would turn all the numbers into text (a vector holds one type), and `%%` would fail.\n\nSame idea as Problem 4, Solution #3. Use Solution #1 if the exam asks for loops.",
    "key": false
   },
   {
    "id": "rec-02-q916",
    "label": "Extra practice · Problem 13",
    "question": "Create a function named update_sensor_readings that takes two arguments: a matrix representing sensor readings from multiple machines across several days, and a vector containing specific outlier values to be removed. The function should replace all occurrences of each value in the vector with the average of its immediate neighboring values (up, down, left, right) in the matrix. If the outlier is on the edge or corner of the matrix and doesn’t have four neighbors, only use the available neighbors to compute the average. For instance, test your function with the following matrix and outlier vector:",
    "code": "sensor_matrix <- matrix(c(23.2, 12, 10, 15, 32, 55, 10, 4, 56, 45, 10, 30),\n                        nrow=3, byrow=TRUE)\noutliers <- c(10, 55)\n# Specifically, you should remove all occurrences of the outliers (10 and 55) by replacing them with the average\n# of their neighboring values.\nupdate_sensor_readings <- function(sensor_matrix, outliers) {\n  updated_matrix <- sensor_matrix\n  for (i in 1:nrow(sensor_matrix)) {\n    for (j in 1:ncol(sensor_matrix)) {\n      if (sensor_matrix[i, j] %in% outliers) {\n        neighbors <- c()\n        # Up\n        if (i > 1) {\n          neighbors <- c(neighbors, sensor_matrix[i - 1, j])\n        }\n        # Down\n        if (i < nrow(sensor_matrix)) {\n          neighbors <- c(neighbors, sensor_matrix[i + 1, j])\n        }\n        # Left\n        if (j > 1) {\n          neighbors <- c(neighbors, sensor_matrix[i, j - 1])\n        }\n        # Right\n        if (j < ncol(sensor_matrix)) {\n          neighbors <- c(neighbors, sensor_matrix[i, j + 1])\n        }\n        updated_matrix[i, j] <- mean(neighbors)\n      }\n    }\n  }\n  return(updated_matrix)\n}\nupdate_sensor_readings(sensor_matrix, outliers)\n#>      [,1]  [,2]     [,3] [,4]\n#> [1,] 23.2 12.00 12.33333   15\n#> [2,] 32.0 24.75 19.75000    4\n#> [3,] 56.0 45.00 28.33333   30",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| matrix + vector of outliers | `function(sensor_matrix, outliers)` |\n| check every cell | nested loops `i`, `j` |\n| \"replace all occurrences of each value in the vector\" | `if (sensor_matrix[i, j] %in% outliers)` |\n| \"average of up, down, left, right\" | collect neighbors with `c()`, then `mean()` |\n| \"only use the available neighbors\" at edges | check `i > 1`, `i < nrow`, `j > 1`, `j < ncol` before each |\n\n**Steps**\n1. Copy the matrix: `updated_matrix <- sensor_matrix`. Read from the original and write to the copy, so a replaced value doesn't affect later averages.\n2. Loop over every cell.\n3. Is it an outlier? `%in%` checks against the whole outlier vector at once.\n4. Start `neighbors <- c()` and add each neighbor **only if it exists**:\n   - up `[i - 1, j]` if `i > 1`\n   - down `[i + 1, j]` if `i < nrow`\n   - left `[i, j - 1]` if `j > 1`\n   - right `[i, j + 1]` if `j < ncol`\n5. Replace with `mean(neighbors)`.\n\n**Check two cells:**\n- `[2, 2]` = 55: up 12, down 45, left 32, right 10 → (12 + 45 + 32 + 10) / 4 = **24.75**.\n- `[1, 3]` = 10 (top edge, no up): down 10, left 12, right 15 → 37 / 3 = **12.33**.\n\nNeighbors use the **original** values, outliers included. That's how the posted answer works.\n\n**Pattern:** edge checks `i > 1`, `i < nrow(m)`, `j > 1`, `j < ncol(m)` are the same as Problem 5.",
    "key": false
   },
   {
    "id": "rec-02-p13-sol2",
    "label": "Extra practice · Problem 13 · Solution #2 (one edge check instead of four)",
    "question": "Create a function named update_sensor_readings that takes two arguments: a matrix representing sensor readings from multiple machines across several days, and a vector containing specific outlier values to be removed. The function should replace all occurrences of each value in the vector with the average of its immediate neighboring values (up, down, left, right) in the matrix. If the outlier is on the edge or corner of the matrix and doesn’t have four neighbors, only use the available neighbors to compute the average. For instance, test your function with the following matrix and outlier vector:",
    "code": "update_sensor_readings2 <- function(sensor_matrix, outliers) {\n  updated <- sensor_matrix\n  moves <- list(c(-1, 0), c(1, 0), c(0, -1), c(0, 1))      # up, down, left, right\n  for (i in 1:nrow(sensor_matrix)) {\n    for (j in 1:ncol(sensor_matrix)) {\n      if (sensor_matrix[i, j] %in% outliers) {\n        neighbors <- c()\n        for (move in moves) {\n          r <- i + move[1]\n          k <- j + move[2]\n          inside <- r >= 1 & r <= nrow(sensor_matrix) & k >= 1 & k <= ncol(sensor_matrix)\n          if (inside) {\n            neighbors <- c(neighbors, sensor_matrix[r, k])\n          }\n        }\n        updated[i, j] <- mean(neighbors)\n      }\n    }\n  }\n  return(updated)\n}\n\nsensor_matrix <- matrix(c(23.2, 12, 10, 15, 32, 55, 10, 4, 56, 45, 10, 30),\n                        nrow = 3, byrow = TRUE)\nupdate_sensor_readings2(sensor_matrix, outliers = c(10, 55))\n#>      [,1]  [,2]     [,3] [,4]\n#> [1,] 23.2 12.00 12.33333   15\n#> [2,] 32.0 24.75 19.75000    4\n#> [3,] 56.0 45.00 28.33333   30",
    "comment": "**Why it's simpler:** Solution #1 writes four separate `if` blocks (up, down, left, right), each with its own edge check. This version lists the four directions once and loops over them:\n- `moves`: up = `(-1, 0)`, down = `(1, 0)`, left = `(0, -1)`, right = `(0, 1)` (row change, column change).\n- For each move: neighbor position `r = i + row change`, `k = j + column change`.\n- **One** check: is that position inside the matrix (`r` between 1 and nrow, `k` between 1 and ncol)? If yes, add it.\n\nEverything else is the same: copy the matrix, loop over every cell, `%in% outliers`, average the neighbors. Same result (24.75, 19.75, 12.33, 28.33).\n\n**Why `k` and not `c`:** naming a variable `c` would hide the `c()` function you're using on the next line.\n\n**Pattern to reuse:** whenever you'd write the same `if` four times with small changes, put the changes in a list and loop over it.",
    "key": false
   },
   {
    "id": "rec-02-q917",
    "label": "Extra practice · Problem 14",
    "question": "Write a function iterative_trim(x, k) that repeatedly removes the element farthest from the median until k elements remain. Note, after removing each element, you must recalculate the median of the remaining vector before deciding which element to remove next. Test your function with x = (1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4) and k = 5.",
    "code": "iterative_trim <- function(x, k) {\n  if (k >= length(x)) {\n    return(x)\n  }\n  remaining <- x\n  while (length(remaining) > k) {\n    med <- median(remaining)\n    dist <- abs(remaining - med)\n    farthest_idx <- which.max(dist)\n    remaining <- remaining[-farthest_idx]\n  }\n  return(remaining)\n}\nx = c(1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4); k = 5\niterative_trim(x, k)\n#> [1] 1 2 5 5 0",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"repeatedly … until k elements remain\" | `while (length(remaining) > k)` |\n| \"element farthest from the median\" | `abs(remaining - median(remaining))`, then `which.max()` |\n| \"removes\" it | `remaining <- remaining[-farthest_idx]` |\n| \"recalculate the median\" each time | compute `median()` **inside** the loop |\n\n**Steps**\n1. Edge case: if `k >= length(x)`, nothing to remove → return `x`.\n2. Copy `x` into `remaining`.\n3. Loop while too many are left:\n   - median of what's left\n   - distance of each value from it (`abs` makes all distances positive)\n   - position of the biggest distance (`which.max`)\n   - drop that position with a negative index\n4. Return `remaining`.\n\n**Trace (k = 5):**\n\n| Median | Removed |\n|---|---|\n| 5 | 40 |\n| 3.5 | 15 |\n| 2 | 10 |\n| 1.5 | 7 (tied with −4; `which.max` takes the first one) |\n| 1 | −4 |\n| 1.5 | −3 |\n\nResult: **1 2 5 5 0**.\n\n**Remember:** `which.max()` gives the **position**, not the value, which is what you need to remove it. A `while` fits here because you don't know the number of passes in advance. The for-loop version: `for (step in 1:(length(x) - k))`.",
    "key": false
   },
   {
    "id": "rec-02-p14-sol2",
    "label": "Extra practice · Problem 14 · Solution #2 (shorter while loop)",
    "question": "Write a function iterative_trim(x, k) that repeatedly removes the element farthest from the median until k elements remain. Note, after removing each element, you must recalculate the median of the remaining vector before deciding which element to remove next. Test your function with x = (1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4) and k = 5.",
    "code": "iterative_trim2 <- function(x, k) {\n  while (length(x) > k) {\n    distance <- abs(x - median(x))       # how far each value is from the median\n    x <- x[-which.max(distance)]         # drop the farthest one\n  }\n  return(x)\n}\n\nx <- c(1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4)\niterative_trim2(x, k = 5)\n#> [1] 1 2 5 5 0\niterative_trim2(c(1, 2), k = 5)          # already small enough\n#> [1] 1 2",
    "comment": "**Why it's simpler:** same idea as Solution #1, with less setup.\n- No separate `remaining` copy: inside a function, changing `x` doesn't change the original outside, so you can work on `x` directly.\n- No `if (k >= length(x))` check needed: if `x` is already short enough, the `while` never runs and `x` comes back unchanged (`c(1, 2)` with k = 5 gives `1 2`).\n- Two lines per pass: distances from the median, then drop the farthest with `x[-which.max(distance)]`.\n\n**Result:** 1 2 5 5 0 (the same 40, 15, 10, 7, −4, −3 get removed in the same order).\n\n**Remember:** the median is recalculated every pass because it's inside the loop. Putting `median(x)` before the loop would give a different (wrong) answer.",
    "key": false
   },
   {
    "id": "rec-02-q918",
    "label": "Extra practice · Problem 15",
    "question": "Write a function count_sign_changes(x) that counts how many times a numeric vector changes sign (from positive to negative or vice versa). For example, it should return 3 for x = c(-2, -1, 1, 3, -4, 5). Test your function with x = c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9).",
    "code": "count_sign_changes <- function(x) {\n  count <- 0\n  for (i in 1:(length(x) - 1)) {\n    if ((x[i] > 0 & x[i + 1] < 0) | (x[i] < 0 & x[i + 1] > 0)) {\n      count <- count + 1\n    }\n  }\n  return(count)\n}\nx <- c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9)\ncount_sign_changes(x)\n#> [1] 6",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"how many times … changes sign\" | compare each value with the **next** one |\n| \"from positive to negative or vice versa\" | `(x[i] > 0 & x[i + 1] < 0) \\| (x[i] < 0 & x[i + 1] > 0)` |\n| count them | `count <- 0`, `count <- count + 1` |\n\n**Steps**\n1. `count <- 0`.\n2. Loop `i` from 1 to `length(x) - 1`. Stop one early because you look at `x[i + 1]`; going to `length(x)` would compare against an element that doesn't exist.\n3. If the pair goes + → − **or** − → +, add 1.\n4. Return `count`.\n\n**Trace on −10, 1, 3, −5, −4, 2, 3, −1, 6, −9:** changes at −10→1, 3→−5, −4→2, 3→−1, −1→6, 6→−9 = **6**.\n\n**Pattern: \"compare neighbors\"** → loop to `length(x) - 1` and use `x[i]` with `x[i + 1]`. Problems 9 and 16 do the same with `x[i - 1]` (loop starting at 2).",
    "key": false
   },
   {
    "id": "rec-02-p15-sol2",
    "label": "Extra practice · Problem 15 · Solution #2 (multiply neighbors: negative = sign change)",
    "question": "Write a function count_sign_changes(x) that counts how many times a numeric vector changes sign (from positive to negative or vice versa). For example, it should return 3 for x = c(-2, -1, 1, 3, -4, 5). Test your function with x = c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9).",
    "code": "count_sign_changes2 <- function(x) {\n  count <- 0\n  for (i in 1:(length(x) - 1)) {\n    if (x[i] * x[i + 1] < 0) {           # negative product = signs are different\n      count <- count + 1\n    }\n  }\n  return(count)\n}\n\nx <- c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9)\ncount_sign_changes2(x)\n#> [1] 6\ncount_sign_changes2(c(-2, -1, 1, 3, -4, 5))   # example from the question\n#> [1] 3\n\n# One-line version: multiply each value by the next one\nsum(x[-1] * x[-length(x)] < 0)\n#> [1] 6",
    "comment": "**Why it's simpler:** two numbers have different signs exactly when their **product is negative** (positive × negative < 0). That replaces Solution #1's long condition\n`(x[i] > 0 & x[i + 1] < 0) | (x[i] < 0 & x[i + 1] > 0)` with `x[i] * x[i + 1] < 0`.\n\n**Results:** 6 for the test vector, and 3 for the question's example `c(-2, -1, 1, 3, -4, 5)`.\n\n**One-line version:** `sum(x[-1] * x[-length(x)] < 0)`\n- `x[-1]` = every value except the first; `x[-length(x)]` = every value except the last. Lined up, those are each value and the one after it.\n- Multiply them pairwise, check `< 0`, and count with `sum()`.\n\n**Bonus:** a 0 in the data gives a product of 0, which isn't negative, so it doesn't count as a sign change. The original condition treats 0 the same way.",
    "key": false
   },
   {
    "id": "rec-02-q919",
    "label": "Extra practice · Problem 16",
    "question": "Write a function find_plateau(x) that detects the first flat region in a numeric vector, meaning consecutive equal values of length ≥ 3. The function should return the start and end indices of that plateau, or NULL if no plateau exists. Test your function with x = (1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2).",
    "code": "find_plateau <- function(x) {\n  n <- length(x); start <- NULL; count <- 1\n  for (i in 2:n) {\n    if (x[i] == x[i - 1]) {\n      count <- count + 1\n      if (count == 3 & is.null(start)) {\n        start <- i - 2\n      }\n    } else {\n      if (!is.null(start) & count >= 3) {\n        end <- i - 1\n        return(c(start = start, end = end))\n      }\n      count <- 1\n      start <- NULL\n    }\n  }\n  if (!is.null(start) & count >= 3) {\n    end <- n\n    return(c(start = start, end = end))\n  }\n  return(NULL)\n}\nx <- c(1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2)\nfind_plateau(x)\n#> start   end\n#>     9    11",
    "comment": "**Roadmap**\n\n| Question says | Code |\n|---|---|\n| \"consecutive equal values\" | compare `x[i]` with `x[i - 1]` |\n| \"of length ≥ 3\" | count the current run |\n| \"the first flat region\" | return as soon as one is found |\n| \"start and end indices\" | `return(c(start = ..., end = ...))` |\n| \"or NULL if no plateau exists\" | `return(NULL)` at the very end |\n\n**Steps**\n1. `count <- 1` (current run length) and `start <- NULL` (no plateau yet).\n2. Loop from position 2:\n   - Same as before → `count + 1`. When `count` hits 3, the plateau started 2 positions back: `start <- i - 2`.\n   - Different → if a plateau was running, it ended at `i - 1` → return start and end. Otherwise reset `count <- 1`.\n3. After the loop: a plateau may run to the very end of the vector, so check once more (end = `n`).\n4. Nothing found → `return(NULL)`.\n\n**Trace on 1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2:** the 3s only reach a run of 2 (not a plateau). The 5s at positions 9–11 reach 3, then position 12 is different → **start 9, end 11**.\n\n**Same \"running count\" idea as Problem 9.** The extra check after the loop handles a run that's still going when the vector ends.",
    "key": false
   },
   {
    "id": "rec-02-p16-sol2",
    "label": "Extra practice · Problem 16 · Solution #2 (look for 3 in a row, then stretch)",
    "question": "Write a function find_plateau(x) that detects the first flat region in a numeric vector, meaning consecutive equal values of length ≥ 3. The function should return the start and end indices of that plateau, or NULL if no plateau exists. Test your function with x = (1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2).",
    "code": "find_plateau2 <- function(x) {\n  n <- length(x)\n  for (i in 1:(n - 2)) {\n    if (x[i] == x[i + 1] & x[i] == x[i + 2]) {   # first 3 in a row starts at i\n      end <- i + 2\n      while (end < n) {                          # stretch it while it keeps going\n        if (x[end + 1] == x[i]) {\n          end <- end + 1\n        } else {\n          break\n        }\n      }\n      return(c(start = i, end = end))\n    }\n  }\n  return(NULL)\n}\n\nx <- c(1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2)\nfind_plateau2(x)\n#> start   end \n#>     9    11 \nfind_plateau2(c(1, 4, 4, 4, 4, 2))      # longer plateau\n#> start   end \n#>     2     5 \nfind_plateau2(c(1, 2, 2, 3))            # no plateau\n#> NULL",
    "comment": "**Why it's simpler:** Solution #1 tracks a running count, a start that resets, and a special check after the loop. This version reads like the definition:\n1. Walk through positions `i` (stopping 2 early so `i + 2` exists).\n2. Are `x[i]`, `x[i + 1]` and `x[i + 2]` all equal? That's the **first** plateau, starting at `i`.\n3. Stretch the end forward while the next value is the same (stop at the end of the vector or the first different value).\n4. Return start and end. If the loop finishes, there's no plateau → `NULL`.\n\n**Results:** start 9, end 11 for the test vector. `c(1, 4, 4, 4, 4, 2)` → 2 to 5 (stretches past 3). `c(1, 2, 2, 3)` → `NULL`.\n\n**Why `break`:** the inner `while (end < n)` keeps the stretch from running past the last position, and `break` stops it at the first different value.\n\n**Remember:** \"first ___ in the vector\" → loop and `return()` as soon as you find it (same as Problem 7).",
    "key": false
   }
  ],
  "notes": "Assigning student `status` with if-else, `ifelse()` eligibility, nested for loops over a scores matrix, a while loop sequence, then function practice problems.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-14T01:30:00Z"
 },
 "rec-03": {
  "type": "rec",
  "num": "03",
  "title": "Employee survey analysis",
  "date": "",
  "exams": [],
  "topics": [
   "read.csv",
   "subsetting",
   "tapply",
   "quantile",
   "factors",
   "barplots",
   "boxplots",
   "histograms"
  ],
  "pdfs": [
   {
    "name": "Recitation 3.pdf",
    "size": 145161,
    "type": "application/pdf"
   },
   {
    "name": "Recitation 3 Solutions.pdf",
    "size": 200079,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "c151",
    "label": "Problem 1",
    "code": "employees <- read.csv(\"employee_survey_data.csv\", stringsAsFactors = TRUE)",
    "comment": "**What this line does:** reads the CSV into a data frame called `employees` (700 rows, 10 columns).\n\n**Why `stringsAsFactors = TRUE`:** text columns (Sex, Department, Job_Satisfaction, Education_Level, Turnover_Risk) become **factors**, so `levels()`, `table()`, `tapply()` and `boxplot(y ~ group)` treat them as categories. Without it they stay plain text. Most of this recitation still works, but `levels()` returns `NULL`.\n\n**Check it loaded right:** `str(employees)` (types and levels), `head(employees)`, `dim(employees)` should be `700 10`.\n\n**Where the file goes:** in Quarto, put the CSV in the **same folder as your `.qmd`**. Otherwise give the full path, e.g. `read.csv(\"~/Downloads/employee_survey_data.csv\", stringsAsFactors = TRUE)` (see Everyday code).\n\n**Heads-up on names:** the PDF's list says *Turnout_Risk*, but the column in the data is **`Turnover_Risk`**. Always copy names from `str()` or `names()`, not from the question text.",
    "key": false,
    "question": "Consider the “employee_survey_data.csv” dataset available on Courseworks. The data was collected by the HR department of a mid-sized tech company with around 1,000 employees. The survey was part of an internal initiative to understand employee satisfaction, retention, and performance across various departments. It was intended to help HR and management identify factors that might influence turnover rates and develop targeted retention strategies. HR used this dataset to investigate relationships between factors such as salary, job satisfaction, work hours, and turnover risk. The goal was to find patterns that could guide future decisions about work policies, benefits, and employee development programs. The dataset consists of 700 observations across 10 variables, with both numerical and categorical features. The features are:\n• Employee_ID (Numeric) - Unique identifier for each employee\n• Age (Numeric) - Age of employees (in years)\n• Sex (Categorical) - Sex of the employee [Levels: Female, Male]\n• Department (Categorical) - Department where the employee works [Levels: Sales, Engineering, HR, Marketing, Finance]\n• Years_at_Company (Numeric) - Number of years the employee has been with the company\n• Salary (Numeric) - Annual salary of the employee (USD)\n• Job_Satisfaction (Categorical) - Employee’s self-reported job satisfaction [Levels: Low, Medium, High]\n• Work_Hours (Numeric) - Average number of hours worked per week\n• Education_Level (Categorical) - Highest level of education attained by the employee [Levels: High School, Bachelor’s, Master’s, PhD]\n• Turnout_Risk (Categorical) - Whether the employee is at risk of leaving the company [Levels: Yes, No]"
   },
   {
    "id": "c152",
    "label": "Problem 1 · Question 1 · How many employees are Female, have a Master’s degree, and…",
    "code": "nrow(employees[employees$Sex == \"Female\" & employees$Education_Level == \"Master's\" &\n          employees$Salary > 80000, ])\n#> [1] 0\n\n# Solution #2: same count, no nrow() needed\nsum(employees$Sex == \"Female\" & employees$Education_Level == \"Master's\" &\n      employees$Salary > 80000)\n\n# If you get 0, check how the level is spelled in the data:\nlevels(employees$Education_Level)",
    "comment": "**Why `nrow()` comes first: read it from the inside out.** R runs the innermost part first, and `nrow()` is the last step even though it's written first.\n\n1. **Build the TRUE/FALSE test** (one TRUE/FALSE per employee):\n   `employees$Sex == \"Female\" & employees$Education_Level == \"Master's\" & employees$Salary > 80000`\n   `&` because the question says Female **and** Master's **and** above $80,000. All three must be TRUE.\n2. **Keep those rows:** `employees[ test , ]`. The test goes **before** the comma (rows), and nothing after the comma means \"keep all columns\". The result is a smaller data frame with only the matching employees.\n3. **Count them:** the question asks **\"How many employees\"**, and each employee is one row, so `nrow()` of that smaller data frame is the answer.\n\nSo the line is just `nrow( filtered data frame )`. You could write it in two lines to see it more clearly:\n\n```r\nfem_masters <- employees[employees$Sex == \"Female\" & employees$Education_Level == \"Master's\" & employees$Salary > 80000, ]\nnrow(fem_masters)\n```\n\n**Solution #2, `sum()` of the test:** TRUE counts as 1 and FALSE as 0, so `sum(test)` counts the TRUEs directly. There's no data frame and no comma to forget, and you get the same number.\n\n**Common mistakes**\n- Forgetting the comma, as in `employees[test]`. Without it R treats the test as picking **columns**, and you get an error or the wrong thing.\n- Using `length()` instead of `nrow()`. `length()` of a data frame is the number of **columns** (10), not rows.\n- Using `|` (or) instead of `&` (and).\n\n**About the 0:** the answer key gets **0** too, so 0 is the expected answer. To make sure it's a real 0 (nobody fits all three) and not a typo, check each condition alone:\n\n```r\nsum(employees$Sex == \"Female\")                  # should be > 0\nsum(employees$Education_Level == \"Master's\")    # should be > 0\nsum(employees$Salary > 80000)                   # should be > 0\n```\n\nIf all three are above 0, nobody fits **all three at once**, so 0 is correct. If the Master's line is 0, the data uses a curly apostrophe (’), which doesn't equal a straight one ('). Use `levels(employees$Education_Level)[3]` or `grepl(\"Master\", employees$Education_Level)` instead of typing it.\n\n**Solve similar questions like this:** \"How many ___ are A and B and C?\" → `nrow(df[cond1 & cond2 & cond3, ])` or `sum(cond1 & cond2 & cond3)`. \"What proportion …?\" → swap `sum` for `mean` (as in the High job satisfaction question below).",
    "key": false,
    "question": "• How many employees are Female, have a Master’s degree, and earn a Salary above $80,000?"
   },
   {
    "id": "c153",
    "label": "Problem 1 · Question 1 · What is the median Work_Hours for employees in the Marketing…",
    "code": "median_workhours <- tapply(employees$Work_Hours, employees$Department, median)\nmedian_workhours[\"Marketing\"]\n#> Marketing\n#>        45\nmedian_workhours[\"Sales\"]\n#> Sales\n#>    44\n\n# Other code that works\n# (a) subset the column, then take the median\nmedian(employees$Work_Hours[employees$Department == \"Marketing\"])\nmedian(employees$Work_Hours[employees$Department == \"Sales\"])\n\n# (b) every department at once, as a data frame\naggregate(Work_Hours ~ Department, data = employees, FUN = median)",
    "comment": "**Why the answer key works:** `tapply(X, GROUP, FUN)` splits `X` (Work_Hours) by `GROUP` (Department) and runs `FUN` (median) on each piece. The result is a **named vector**, one median per department:\n\n`Engineering  Finance  HR  Marketing  Sales`\n\nBecause it's named, `median_workhours[\"Marketing\"]` pulls out one value **by name**. Answer: Marketing **45** vs Sales **44** hours, so Marketing is one hour higher.\n\n**Other code that works**\n- **(a)** `x[condition]` keeps only Marketing's hours, then `median()`. This is good when you need just one or two groups.\n- **(b)** `aggregate(y ~ group, data = , FUN = )` gives the same numbers as a data frame. It reads nicely and handles two grouping variables (`y ~ g1 + g2`).\n\n**Solve similar problems:** \"What is the [mean / median / sd / max] of **Y** for each **group**?\" → `tapply(df$Y, df$group, FUN)`. Then:\n- one group → `result[\"name\"]`\n- the biggest → `which.max(result)`\n- in order → `sort(result)`",
    "key": false,
    "question": "• What is the median Work_Hours for employees in the Marketing department versus the Sales department?"
   },
   {
    "id": "c154",
    "label": "Problem 1 · Question 1 · What proportion of employees with High job satisfaction are…",
    "code": "high_js <- employees[employees$Job_Satisfaction == \"High\", ]\nmean(high_js$Turnover_Risk == \"Yes\")\n#> [1] 0.4920635\n\n# Other code that works\n# (a) count / total, written out\nsum(high_js$Turnover_Risk == \"Yes\") / nrow(high_js)\n\n# (b) one line, no new data frame\nmean(employees$Turnover_Risk[employees$Job_Satisfaction == \"High\"] == \"Yes\")\n\n# (c) a full table of proportions; read the High row, Yes column\nprop.table(table(employees$Job_Satisfaction, employees$Turnover_Risk), 1)",
    "comment": "**Why the answer key works (two steps):**\n1. `high_js <- employees[employees$Job_Satisfaction == \"High\", ]` keeps only the High-satisfaction employees. The **\"of employees with High satisfaction\"** part means they are the denominator.\n2. `mean(high_js$Turnover_Risk == \"Yes\")` makes a TRUE/FALSE vector. TRUE = 1 and FALSE = 0, so the **mean of a TRUE/FALSE vector is the proportion of TRUEs**. Answer: **0.492**, about 49%.\n\n**Other code that works**\n- **(a)** `sum(...) / nrow(...)` is the same thing written out, which helps if `mean()` of TRUE/FALSE feels like magic.\n- **(b)** Filter the column instead of the whole data frame, all in one line.\n- **(c)** `prop.table(table(A, B), 1)` gives proportions **within each row** (the `1`). One table answers the question for every satisfaction level. Use `2` for within each column.\n\n**Watch the wording:** \"proportion **of High-satisfaction employees** who are at risk\" (High is the denominator, this question) is not the same as \"proportion **of at-risk employees** who have High satisfaction\" (at-risk is the denominator). Whatever comes after \"of\" is what you filter on first.\n\n**Solve similar problems:** \"What proportion of [group] are [condition]?\" → `mean(df$col[df$group == \"X\"] == \"value\")`. \"How many?\" → swap `mean` for `sum`.",
    "key": false,
    "question": "• What proportion of employees with High job satisfaction are at risk of turnover?"
   },
   {
    "id": "c155",
    "label": "Problem 1 · Question 1 · Identify the department with the largest proportion of…",
    "code": "turnover <- ifelse(employees$Turnover_Risk == \"Yes\", 1, 0)\ndept_prop <- tapply(turnover, employees$Department, mean)\nnames(which.max(dept_prop))\n#> [1] \"Engineering\"\n\n# Other code that works\n# (a) skip ifelse: TRUE/FALSE already works as 1/0\ndept_prop2 <- tapply(employees$Turnover_Risk == \"Yes\", employees$Department, mean)\nnames(which.max(dept_prop2))\n\n# (b) sort and look at the top\nsort(dept_prop2, decreasing = TRUE)\n\n# (c) table of proportions within each department\nprop.table(table(employees$Department, employees$Turnover_Risk), 1)",
    "comment": "**Why the answer key works (3 steps):**\n1. `turnover <- ifelse(employees$Turnover_Risk == \"Yes\", 1, 0)` turns Yes/No into 1/0.\n2. `tapply(turnover, employees$Department, mean)` gives the mean of 1/0 per department, which is the **proportion at risk** in each one.\n3. `which.max(dept_prop)` returns the **position** of the largest value, with its name attached. `names(...)` keeps just the name, so the answer prints as **\"Engineering\"**.\n\n**Other code that works**\n- **(a)** The `ifelse` step is optional: `employees$Turnover_Risk == \"Yes\"` is already TRUE/FALSE, and `mean()` treats it as 1/0. Same numbers, one line shorter.\n- **(b)** `sort(..., decreasing = TRUE)` shows **all** departments ranked, so you can also see how close second place is. It's good for \"rank the departments\" questions.\n- **(c)** `prop.table(table(...), 1)` gives every department's Yes **and** No proportions; read the Yes column.\n\n**`which.max` vs `max`:** `max()` gives the biggest **value** (the proportion). `which.max()` gives **where** it is, and `names(which.max())` gives **which group**. \"Identify the department\" → you want the name.\n\n**Solve similar problems:** \"Which group has the highest/lowest [rate / average]?\" → `stat <- tapply(df$y, df$group, FUN)`, then `names(which.max(stat))` or `names(which.min(stat))`.",
    "key": false,
    "question": "• Identify the department with the largest proportion of employees at risk of turnover."
   },
   {
    "id": "c156",
    "label": "Problem 1 · Question 1 · For each department, calculate the ratio of High job…",
    "code": "high_count <- tapply(employees$Job_Satisfaction == \"High\", employees$Department, sum)\nlow_count <- tapply(employees$Job_Satisfaction == \"Low\", employees$Department, sum)\nratios <- high_count / low_count\nprint(ratios)\n#> Engineering     Finance          HR   Marketing       Sales\n#>   1.5135135   1.2272727   0.9333333   1.1395349   0.9807692\n\n# Other code that works: one two-way table, then divide two columns\ntab <- table(employees$Department, employees$Job_Satisfaction)\ntab                                   # counts: departments x satisfaction levels\ntab[, \"High\"] / tab[, \"Low\"]",
    "comment": "**Why the answer key works:**\n- `employees$Job_Satisfaction == \"High\"` is TRUE/FALSE per employee.\n- `tapply(that, Department, sum)` **sums the TRUEs** in each department, which is the **count** of High employees per department. The same goes for Low.\n- `high_count / low_count` divides the two named vectors **element by element**, matched by position (same department order, because both come from `tapply` on the same grouping).\n\n**Reading it:** Engineering **1.51** means about 1.5 High-satisfaction employees for every Low one. HR (0.93) and Sales (0.98) are below 1, so they have **more Low than High**.\n\n**Other code that works:** `table(Department, Job_Satisfaction)` builds one table of counts (rows = departments, columns = levels). `tab[, \"High\"]` takes the High column, so `tab[, \"High\"] / tab[, \"Low\"]` gives the same ratios. Printing `tab` first also shows the counts, which helps you sanity-check the answer.\n\n**Solve similar problems:** \"For each group, compare count of A to count of B\" → `tab <- table(df$group, df$category)`, then `tab[, \"A\"] / tab[, \"B\"]` (ratio) or `tab[, \"A\"] - tab[, \"B\"]` (difference). Counting with `tapply(df$col == \"A\", df$group, sum)` works anywhere you need \"how many per group\".",
    "key": false,
    "question": "• For each department, calculate the ratio of High job satisfaction to Low job satisfaction employees."
   },
   {
    "id": "c157",
    "label": "Problem 1 · Question 2 · Find the top 5 highest paid employees in each department.…",
    "code": "depts <- unique(employees$Department)\ntop5_all <- data.frame()\nfor (d in depts) {\n  dept_data <- employees[employees$Department == d, ]\n  dept_sorted <- dept_data[order(dept_data$Salary, decreasing = TRUE), ]\n  top5 <- head(dept_sorted, 5)\n  top5_all <- rbind(top5_all, top5)\n}\nmean(top5_all$Age)\n#> [1] 41.2\n\n# Other code that works\n# (a) split by department, take the top 5 Ages in each, then average\ntop5_ages <- sapply(split(employees, employees$Department), function(dd)\n  head(dd[order(dd$Salary, decreasing = TRUE), \"Age\"], 5))\ntop5_ages            # 5 x 5 matrix: rows = rank 1..5, columns = departments\nmean(top5_ages)\n\n# (b) no loop: sort by department then salary, keep ranks 1-5 in each department\ns <- employees[order(employees$Department, -employees$Salary), ]\nrank_in_dept <- ave(s$Salary, s$Department, FUN = seq_along)\nmean(s$Age[rank_in_dept <= 5])\n\n# (c) My way: sort once, split, then average the first 5 in each department\n# Step 1: Sort everyone by salary, highest first.\nsorted <- employees[order(employees$Salary, decreasing = TRUE), ]\n\n# Step 2: Split into departments.\nby_dept <- split(sorted, sorted$Department)\n\n# Step 3: Average the ages of the first 5 rows in each department.\ntop5_age <- sapply(by_dept, function(d) mean(d$Age[1:5]))\ntop5_age          # average age of top 5 earners, per department\nmean(top5_age)    # overall average across all 25 top earners",
    "comment": "**Why the answer key works:** it's the \"loop over groups, collect results\" pattern.\n1. `depts <- unique(employees$Department)` lists the 5 departments to loop over.\n2. `top5_all <- data.frame()` is an **empty box** to collect results in.\n3. Inside the loop, for one department `d`:\n   - `dept_data <- employees[employees$Department == d, ]` keeps that department's rows.\n   - `order(dept_data$Salary, decreasing = TRUE)` gives the row order from highest to lowest salary, and `dept_data[ that , ]` sorts the rows.\n   - `head(dept_sorted, 5)` takes the top 5.\n   - `rbind(top5_all, top5)` **stacks** them under what's already collected.\n4. After the loop, `top5_all` has 5 × 5 = **25 rows**, and `mean(top5_all$Age)` = **41.2**.\n\n**Why `order()` and not `sort()`:** `sort()` sorts **one vector** (just the salaries) and loses which employee each salary belongs to. `order()` returns **row positions**, so you can reorder the whole data frame and the Age stays with its salary.\n\n**Other code that works**\n- **(a)** `split(employees, employees$Department)` makes a **list** of 5 data frames, one per department. `sapply` runs the function on each and returns the top-5 Ages as a 5×5 matrix. The mean of the matrix is the mean of all 25.\n- **(b)** Sort once by department, then by salary (the `-` means descending). `ave(..., FUN = seq_along)` numbers the rows 1, 2, 3… **within** each department, so `rank_in_dept <= 5` keeps the top 5 of each.\n\n- **(c) My way: sort first, then split.**\n  1. `order(employees$Salary, decreasing = TRUE)` sorts **everyone** once, highest salary first.\n  2. `split(sorted, sorted$Department)` makes a list of 5 data frames. `split()` **keeps the row order**, so each department's data frame is still sorted from highest to lowest salary.\n  3. `sapply(by_dept, function(d) mean(d$Age[1:5]))`: in each department, rows `1:5` are the top 5 earners, so `d$Age[1:5]` is their ages, and `mean()` averages them. You get a named vector with one average per department (a bonus: it also shows which departments have older top earners).\n  4. `mean(top5_age)` averages the 5 department averages. **This equals the answer key's 41.2 only because every department has exactly 5 top earners** (equal group sizes). Checked in R: same number as the loop, overall and per department.\n\n  **Why it's nice:** sorting once up front means no `order()` inside the function and no `rbind()`. **One catch:** if a department had fewer than 5 employees, `d$Age[1:5]` would include `NA` and the mean would be `NA`. Use `head(d$Age, 5)` instead of `d$Age[1:5]` to be safe.\n\n**Note:** the average is over the 25 top earners, **not** the average of the 5 department averages. Here they're equal because every group has exactly 5, but if groups had different sizes they wouldn't be.\n\n**Solve similar problems:** \"Top/bottom k in each group\" → loop over `unique(group)` (or `split`), `order()` the subset, `head(k)` (or `tail(k)` for the bottom), `rbind` the results. Then compute whatever the question asks on the combined data.",
    "key": false,
    "question": "• Find the top 5 highest paid employees in each department. What is the average Age of these top earners?"
   },
   {
    "id": "c158",
    "label": "Problem 1 · Question 2 · Compare the average Work_Hours of employees with Salary above…",
    "code": "q25 <- quantile(employees$Salary, 0.25)\nq75 <- quantile(employees$Salary, 0.75)\nlow_group  <- employees[employees$Salary < q25, ]\nhigh_group <- employees[employees$Salary > q75, ]\nmean_low  <- mean(low_group$Work_Hours)\nmean_high <- mean(high_group$Work_Hours)\nc(\"Below 25th\" = mean_low, \"Above 75th\" = mean_high)\n#> Below 25th Above 75th\n#>   45.26857   45.35429\n\n# Other code that works: index the column directly (no new data frames)\nmean(employees$Work_Hours[employees$Salary < q25])\nmean(employees$Work_Hours[employees$Salary > q75])\n\n# see the cut-offs\nquantile(employees$Salary, c(0.25, 0.75))",
    "comment": "**Why the answer key works:**\n1. `quantile(employees$Salary, 0.25)` is the salary that **25%** of employees are below (the 25th percentile). Same with 0.75 for the 75th.\n2. Filter rows below `q25` (the low earners, the bottom quarter) and above `q75` (the high earners, the top quarter).\n3. `mean(...$Work_Hours)` for each group, then `c(\"Below 25th\" = ..., \"Above 75th\" = ...)` prints both with labels.\n\n**Answer:** 45.27 vs 45.35 hours, **almost identical**. Top and bottom earners work about the same hours. Say this in a sentence; the comparison is the answer.\n\n**Other code that works:** `df$col[condition]` keeps only the values you need, so there's no extra data frame. You can also pass two probabilities at once: `quantile(x, c(.25, .75))` returns both cut-offs.\n\n**Strict vs not strict:** the question says \"above\" and \"below\", so `>` and `<` are used. `>=` / `<=` would also include anyone sitting exactly on a cut-off. Use what the wording says.\n\n**Solve similar problems:** \"Compare Y for the top X% vs bottom X% of Z\" → `cut <- quantile(df$Z, c(X, 1 - X))`, then `mean(df$Y[df$Z < cut[1]])` vs `mean(df$Y[df$Z > cut[2]])`. \"Above the median\" → `median()` or `quantile(x, 0.5)`.",
    "key": false,
    "question": "• Compare the average Work_Hours of employees with Salary above the 75th percentile versus below the 25th percentile."
   },
   {
    "id": "c159",
    "label": "Problem 1 · Question 2 · Compute the variance and standard deviation of Salary for…",
    "code": "group1 <- employees[employees$Years_at_Company <= 5, \"Salary\"]\ngroup2 <- employees[employees$Years_at_Company > 10, \"Salary\"]\nresults <- data.frame(\n  Group = c(\"<= 5 years\", \"> 10 years\"),\n  Variance = c(var(group1), var(group2)),\n  StdDev   = c(sd(group1), sd(group2)))\nprint(results)\n#>        Group   Variance   StdDev\n#> 1 <= 5 years 1299548258 36049.25\n#> 2 > 10 years 1152605489 33950.04\n\n# Other code that works\n# (a) the $ / [condition] way\ngroup1 <- employees$Salary[employees$Years_at_Company <= 5]\ngroup2 <- employees$Salary[employees$Years_at_Company > 10]\n\n# (b) a quick check of the relationship: sd is the square root of var\nsqrt(var(group1)) == sd(group1)",
    "comment": "**Why the answer key works:**\n- `employees[condition, \"Salary\"]` puts rows before the comma and the column name after it, so you get **just the Salary values** of those employees as a **vector**.\n- `var()` and `sd()` on each vector, then `data.frame(Group = , Variance = , StdDev = )` builds a small table so the two groups sit side by side.\n\n**Reading it:** the ≤5-year group has sd **36,049** vs **33,950** for >10 years. Newer employees' salaries are **a bit more spread out**. Variance is in squared dollars (hard to interpret), so quote the **sd**, which is in dollars.\n\n**Who's left out:** employees with **6–10 years** are in neither group. That's fine; the question only asks about the two extremes.\n\n**Other code that works**\n- **(a)** `df$col[condition]` gives the same vector as `df[condition, \"col\"]`; use whichever you find easier to read.\n- **(b)** `sd(x)` is always `sqrt(var(x))`, so if you forget one you can get it from the other.\n\n**Solve similar problems:** \"Compute stat for group A vs group B\" → make one vector per group with `df$col[condition]`, apply the function, and put the results in a `data.frame` or a named `c()`. For **many** groups, use `tapply(df$col, df$group, sd)` instead.",
    "key": false,
    "question": "• Compute the variance and standard deviation of Salary for employees with ≤ 5 years versus > 10 years at the company."
   },
   {
    "id": "c160",
    "label": "Problem 1 · Question 2 · Compute the number of employees with Low job satisfaction and…",
    "code": "med <- median(employees$Salary)\nlow_med <- employees[employees$Job_Satisfaction == \"Low\" & employees$Salary < med, ]\nnrow(low_med)\n#> [1] 112\n\n# Other code that works: count the TRUEs directly\nsum(employees$Job_Satisfaction == \"Low\" & employees$Salary < med)",
    "comment": "**Why the answer key works:** it's the same pattern as Question 1's first part, with one extra step at the start.\n1. `med <- median(employees$Salary)` computes the cut-off **first** and saves it, so it isn't recomputed inside the filter.\n2. Filter with **two** conditions joined by `&`: Low satisfaction **and** salary below the median.\n3. `nrow()` counts the remaining rows, giving **112**.\n\n**Other code that works:** `sum(cond1 & cond2)` counts the TRUEs directly. It's shorter, with no data frame and no comma to forget.\n\n**Sanity check:** about half of all employees earn below the median by definition, so 112 out of the Low group's size should look reasonable. Check it with `sum(employees$Job_Satisfaction == \"Low\")`.\n\n**Solve similar problems:** \"How many [group] have [numeric] below/above [statistic]?\" → save the statistic first (`median`, `mean`, `quantile`), then `sum(df$group == \"X\" & df$num < stat)`.",
    "key": false,
    "question": "• Compute the number of employees with Low job satisfaction and Salary below the median salary."
   },
   {
    "id": "c161",
    "label": "Problem 1 · Question 3 · Add a new factor variable named tenure_groups with levels…",
    "code": "yrs <- employees$Years_at_Company\ngroups <- ifelse(yrs <= 5, \"Short\", ifelse(yrs <= 15, \"Medium\", \"Long\"))\nemployees$tenure_groups <- factor(groups, levels = c(\"Short\", \"Medium\", \"Long\"))\ntable(employees$tenure_groups)        # check: every employee got a group\n\n# Other code that works\n# (a) cut(): turns numbers into labelled intervals\nemployees$tenure_groups <- cut(employees$Years_at_Company,\n                               breaks = c(-Inf, 5, 15, Inf),\n                               labels = c(\"Short\", \"Medium\", \"Long\"))\n\n# (b) start empty, then fill each group by condition\ntg <- rep(NA, nrow(employees))\ntg[employees$Years_at_Company <= 5] <- \"Short\"\ntg[employees$Years_at_Company > 5 & employees$Years_at_Company <= 15] <- \"Medium\"\ntg[employees$Years_at_Company > 15] <- \"Long\"\nemployees$tenure_groups <- factor(tg, levels = c(\"Short\", \"Medium\", \"Long\"))",
    "comment": "**Why the answer key works: nested `ifelse`.**\n- `ifelse(yrs <= 5, \"Short\", ...)`: if 5 years or less, Short. Otherwise R goes to the **inner** `ifelse`.\n- `ifelse(yrs <= 15, \"Medium\", \"Long\")`: the inner one only sees people with **more than 5** years, so `<= 15` here means 6–15 = Medium, and the rest (16+) = Long.\n- `factor(groups, levels = c(\"Short\", \"Medium\", \"Long\"))` turns the text into a factor and sets the **order**. Without `levels =`, R sorts alphabetically (Long, Medium, Short), and the barplot and boxplot would come out in the wrong order.\n- Saving it as `employees$tenure_groups` **adds a new column**; `Years_at_Company` isn't touched, as the question asks.\n\n**Other code that works**\n- **(a) `cut()`** is made for this. `breaks = c(-Inf, 5, 15, Inf)` creates the intervals (−∞, 5], (5, 15], (15, ∞), so the right end is **included**: 5 → Short, 15 → Medium, 16 → Long. `labels =` names them in order, and the result is already a factor with the right level order. Verified: it gives exactly the same column as the `ifelse` version.\n- **(b) Fill by condition:** start with all NA, then assign each group with `vector[condition] <- \"label\"`. It's longer, but each group's rule is written out plainly, and it's easy for 4+ groups.\n\n**Check it:** `table(employees$tenure_groups)`. The counts should add up to 700 with no `NA`.\n\n**Solve similar problems:** \"Create a categorical variable from a numeric one\" →\n- 2 groups → one `ifelse`\n- 3+ groups → nested `ifelse` or `cut(x, breaks = c(-Inf, b1, b2, Inf), labels = ...)`\n\nAlways wrap it in `factor(..., levels = c(...))` (or use `cut`) so the order is right.",
    "key": false,
    "question": "• Add a new factor variable named tenure_groups with levels Short, Medium, and Long. Generate this variable based on the Years_at_Company variable without modifying the original Years_at_Company variable. The grouping is done as follows: employees with 0-5 years of tenure belong to the Short group, employees with 6-15 years of tenure belong to the Medium group, and employees with 16+ years belong to the Long group."
   },
   {
    "id": "c162",
    "label": "Problem 1 · Question 3 · Create a barplot to showcase the distribution of the…",
    "code": "barplot(\ntable(employees$tenure_groups),\ncol = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\nborder = \"grey50\",\nxlab = \"Tenure Group\",\nylab = \"Number of Employees\",\nnames.arg = c(\"SHORT\", \"MEDIUM\", \"LONG\"),\nmain = \"Number of Employees by Tenure Group\"\n)\n\n# Other code that works: rename the factor levels, then plot\ncounts <- table(employees$tenure_groups)\nnames(counts) <- toupper(names(counts))     # \"SHORT\" \"MEDIUM\" \"LONG\"\nbarplot(counts, col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"), border = \"grey50\",\n        xlab = \"Tenure Group\", ylab = \"Number of Employees\",\n        main = \"Number of Employees by Tenure Group\")",
    "comment": "**Why the answer key works:**\n- `table(employees$tenure_groups)` **counts** employees in each group. `barplot()` needs counts, not the raw column.\n- Each argument ticks off one requirement in the question:\n\n| Requirement | Argument |\n|---|---|\n| title | `main =` |\n| axis labels | `xlab =`, `ylab =` |\n| bar colors | `col = c(...)` (one color per bar) |\n| border color | `border =` |\n| bar names SHORT/MEDIUM/LONG | `names.arg = c(...)` |\n\n**Order matters:** `names.arg` labels bars **in the table's order**, which is the factor level order (Short, Medium, Long) from Question 3. That's why setting `levels =` there mattered. If the levels were alphabetical, \"SHORT\" would be written on the Long bar.\n\n**Other code that works:** rename the table's names before plotting (`toupper()` capitalizes), then you don't need `names.arg`.\n\n**Solve similar problems:** \"Barplot of a categorical variable\" → `barplot(table(df$cat), main =, xlab =, ylab =, col =, border =, names.arg =)`. For proportions instead of counts, use `barplot(prop.table(table(df$cat)))`. For a side-by-side 2-variable barplot, use `barplot(table(df$a, df$b), beside = TRUE, legend.text = TRUE)`.",
    "key": false,
    "question": "• Create a barplot to showcase the distribution of the tenure_groups variable. Properly label the plot and axes, change the colors of bars and borders. Also, change the bar names to “SHORT”, “MEDIUM”, and “LONG”."
   },
   {
    "id": "c163",
    "label": "Problem 1 · Question 3 · Create a boxplot illustrating the distribution of Salary…",
    "code": "boxplot(employees$Salary ~ employees$tenure_groups, horizontal = TRUE, notch = TRUE,\ncol = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"), xlab = \"Salary (in USD)\",\nylab = \"Tenure Group\", main = \"Distribution of Salary by Tenure Group\")\n# There are no outliers.\n\n# Other code that works: data = version (shorter, nicer axis labels)\nboxplot(Salary ~ tenure_groups, data = employees, horizontal = TRUE, notch = TRUE,\n        col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n        xlab = \"Salary (in USD)\", ylab = \"Tenure Group\",\n        main = \"Distribution of Salary by Tenure Group\")\n\n# check for outliers with code instead of by eye\nboxplot(Salary ~ tenure_groups, data = employees, plot = FALSE)$out   # numeric(0) = none",
    "comment": "**Why the answer key works:**\n- `Salary ~ tenure_groups` is a **formula**: \"Salary, split by tenure group\". You get one box per group.\n- `notch = TRUE` adds the notches the question asks for. `horizontal = TRUE` lays the boxes sideways, which is optional.\n- With `horizontal = TRUE` the axes swap: Salary runs along the **x**-axis, so `xlab = \"Salary (in USD)\"` and `ylab = \"Tenure Group\"`.\n\n**Are there outliers?** Outliers show up as **separate dots** beyond the whiskers. A point counts as an outlier if it's more than 1.5 × IQR past the box. The answer key's plot shows **no dots**, so: **no outliers**.\n\n**Other code that works**\n- **`data = employees`:** write `Salary ~ tenure_groups` without `employees$` each time. The default axis labels are cleaner too.\n- **Check with code:** `boxplot(..., plot = FALSE)$out` returns the outlier values without drawing; `numeric(0)` means none. Another option is `boxplot.stats(x)$out` for one vector.\n\n**Reading notches:** if two boxes' notches **don't overlap**, that's rough evidence their medians differ. If they overlap, the medians are not clearly different.\n\n**Solve similar problems:** \"Boxplot of numeric Y across categories of G\" → `boxplot(Y ~ G, data = df, main =, xlab =, ylab =, col =, notch =)`. \"Any outliers?\" → look for dots, or check `$out`.",
    "key": false,
    "question": "• Create a boxplot illustrating the distribution of Salary across different categories of the tenure_groups variable. Label the plot and axes appropriately, add a notch to each boxplot. Are there any outliers?"
   },
   {
    "id": "c164",
    "label": "Problem 1 · Question 4 · Compare the mean Salary values across various levels of…",
    "code": "aggregate(Salary ~ Job_Satisfaction, data = employees, FUN = mean)\n#>   Job_Satisfaction   Salary\n#> 1             High 90316.90\n#> 2              Low 89527.42\n#> 3           Medium 91402.17\ndoesnt_exceed_50hrs <- employees$Work_Hours <= 50\nfiltered_employees <- employees[doesnt_exceed_50hrs, ]\naggregate(Salary ~ Job_Satisfaction, data = filtered_employees, FUN = mean)\n#>   Job_Satisfaction   Salary\n#> 1             High 92815.84\n#> 2              Low 89829.69\n#> 3           Medium 90482.96\n# The average salary of employees with high or low levels of job satisfaction tends to be slightly higher than\n# the overall average among those working at most 50 hours per week. However, for employees with medium\n# levels of job satisfaction who do not exceed 50 hours per week of work, the average salary is slightly lower.\n\n# Other code that works\n# (a) tapply gives the same means as a named vector\nbefore <- tapply(employees$Salary, employees$Job_Satisfaction, mean)\nafter  <- tapply(filtered_employees$Salary, filtered_employees$Job_Satisfaction, mean)\nround(after - before)            # how much each group changed\n\n# (b) subset() is another way to filter rows\nfiltered_employees <- subset(employees, Work_Hours <= 50)\nsum(employees$Work_Hours > 50)   # how many employees were removed",
    "comment": "**Why the answer key works:**\n- `aggregate(Salary ~ Job_Satisfaction, data = employees, FUN = mean)` means \"mean Salary for each Job_Satisfaction level\", returned as a small data frame.\n- **\"Eliminate observations where Work_Hours exceeds 50\"** means **keep** those with `Work_Hours <= 50`. The answer key saves the TRUE/FALSE test as `doesnt_exceed_50hrs`, then uses it to pick rows: `employees[doesnt_exceed_50hrs, ]`.\n- Run the same `aggregate()` on the filtered data and compare.\n\n**What changed (after − before):**\n\n| Satisfaction | Before | After | Change |\n|---|---|---|---|\n| High | 90,317 | 92,816 | **+2,499** |\n| Low | 89,527 | 89,830 | +302 |\n| Medium | 91,402 | 90,483 | **−919** |\n\n**How to explain the impact:**\n- **Size:** all changes are small (under 3%) compared with salaries around $90,000, so the filter doesn't change the overall picture much.\n- **Order:** the **ranking changes**. Before, Medium had the highest mean. After removing the >50-hour employees, High has the highest. So the employees working over 50 hours were pulling the High group's average **down** and the Medium group's average **up**.\n- Low barely moved.\n\n**Other code that works**\n- **(a)** `tapply()` gives the same means. Saving before/after lets you **subtract** them, which is the quickest way to describe the impact.\n- **(b)** `subset(df, condition)` filters rows without `df$` and without the comma. Also report **how many rows were removed**; it gives the reader context.\n\n**Solve similar problems:** \"Compare [stat] across groups, then filter and repeat\" → `aggregate(Y ~ G, data = df, FUN = f)` or `tapply`, then filter with `df[condition, ]` or `subset()`, repeat, and **subtract**. In the written answer, cover the direction, the size and whether the ranking changed.",
    "key": false,
    "question": "• Compare the mean Salary values across various levels of Job_Satisfaction. Subsequently, eliminate all observations where Work_Hours exceeds 50 hours per week and repeat the preceding analysis.\nElaborate on the impact of this filtering on the results."
   },
   {
    "id": "c165",
    "label": "Problem 1 · Question 4 · Plot a histogram of the Salary feature before and after…",
    "code": "par(mfrow = c(1, 2))\nhist(\nemployees$Salary,\nbreaks = 10,\ncol = \"lightsteelblue1\",\nxlab = \"Salary (in USD)\",\nylab = \"Number of Employees\",\nmain = \"All Employees\",\nylim = c(0, 70)\n)\nhist(\nfiltered_employees$Salary,\nbreaks = 10,\ncol = \"lightsteelblue1\",\nxlab = \"Salary (in USD)\",\nylab = \"Number of Employees\",\nmain = \"Employees Working\\nAt Most 50 Hours/Week\",\nylim = c(0, 70)\n)\n# The shapes of the distributions don’t seem to differ significantly before and after filtering.\npar(mfrow = c(1, 1))     # reset to one plot per window afterwards\n\n# Other code that works: identical bins in both, so the shapes are directly comparable\nbr <- seq(min(employees$Salary), max(employees$Salary), length.out = 11)   # 10 equal bins\npar(mfrow = c(1, 2))\nhist(employees$Salary, breaks = br, col = \"lightsteelblue1\", main = \"All Employees\",\n     xlab = \"Salary (in USD)\", ylab = \"Number of Employees\")\nhist(filtered_employees$Salary, breaks = br, col = \"wheat1\",\n     main = \"At Most 50 Hours/Week\", xlab = \"Salary (in USD)\", ylab = \"Number of Employees\")\npar(mfrow = c(1, 1))",
    "comment": "**Needs Question 4's first part first:** `filtered_employees` is created in the previous chunk.\n\n**Why the answer key works:**\n- `par(mfrow = c(1, 2))` splits the plot window into **1 row, 2 columns**, so the next two plots appear side by side.\n- `breaks = 10` asks for about 10 bins. R treats it as a **suggestion** and picks round numbers near it.\n- `ylim = c(0, 70)` gives **both** histograms the same y-axis. Without it, each one scales itself and the bars look similar even when the counts aren't. Same axes are what make a side-by-side comparison fair.\n- `main = \"...\\n...\"`: `\\n` breaks the title onto two lines.\n\n**Reading it:** the filtered data has fewer employees, so its bars are **shorter**, but the **shape** (where the peak is, how spread out, how symmetric) looks about the same. Answer: **the shape doesn't change significantly**.\n\n**Other code that works:** to guarantee **exactly** 10 bins at identical places in both plots, give `breaks` a vector of 11 cut points. `seq(min, max, length.out = 11)` does that. Identical bins make the comparison exact, not just \"about 10\".\n\n**Remember to reset:** `par(mfrow = c(1, 1))` afterwards, or every later plot keeps squeezing into half the window.\n\n**Solve similar problems:** \"Show two plots side by side / compare before and after\" → `par(mfrow = c(1, 2))`, make the two plots with the **same** `xlim`/`ylim`/`breaks`, then `par(mfrow = c(1, 1))`. For a 2×2 grid, use `c(2, 2)`. When comparing shape, talk about the center, the spread and symmetry/skew.",
    "key": false,
    "question": "• Plot a histogram of the Salary feature before and after eliminating all observations where Work_Hours exceeds 50 hours per week, and display both histograms side by side. Analyze whether the shape of the distributions differ significantly after filtering. Customize the histograms by adding appropriate labels and a title, changing the colors of the bins, and setting the number of bins in each histogram to 10."
   }
  ],
  "notes": "Analysis of `employee_survey_data.csv` (700 employees, 10 variables): counts and proportions by group, top earners per department, a `tenure_groups` factor, and barplots, notched boxplots and side-by-side histograms.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [
   "Count rows that meet conditions: nrow(df[c1 & c2, ]) or sum(c1 & c2). Proportion: mean(condition).",
   "Per-group statistic: tapply(df$y, df$group, FUN); which group is biggest: names(which.max(...)).",
   "Numeric to groups: nested ifelse or cut(x, breaks = c(-Inf, b1, b2, Inf), labels = ...), then set the factor level order.",
   "Side-by-side plots: par(mfrow = c(1, 2)), same ylim/breaks for a fair comparison, then reset with par(mfrow = c(1, 1))."
  ],
  "updatedAt": "2026-10-14T17:58:00Z"
 },
 "rec-04": {
  "type": "rec",
  "num": "04",
  "title": "Simulation functions with while loops",
  "date": "",
  "exams": [],
  "topics": [
   "simulation",
   "while loops",
   "sample()",
   "rnorm()",
   "functions"
  ],
  "pdfs": [
   {
    "name": "Recitation 4.pdf",
    "size": 122474,
    "type": "application/pdf"
   },
   {
    "name": "Recitation 4 Solutions.pdf",
    "size": 199948,
    "type": "application/pdf"
   }
  ],
  "chunks": [
   {
    "id": "c166",
    "label": "Problem 1",
    "code": "fun1 <- function(sum, n) {\n  n_trials <- 0\n  n_successes <- 0\n  while (n_successes < n) {\n    n_trials <- n_trials + 1\n    die_1 <- sample(1:6, size = 1, prob = c(0.1, 0.25, 0.2, 0.1, 0.25, 0.1))\n    die_2 <- sample(1:6, size = 1, prob = c(0.15, 0.15, 0.1, 0.15, 0.35, 0.1))\n    if (die_1 + die_2 == sum) {\n      n_successes <- n_successes + 1\n    }\n  }\n  n_trials\n}\nfun1(sum = 10, n = 4)\n#> [1] 39\n\n# Other code that works: repeat + break, probabilities saved once\nfun1b <- function(target, n) {\n  p1 <- c(0.1, 0.25, 0.2, 0.1, 0.25, 0.1)\n  p2 <- c(0.15, 0.15, 0.1, 0.15, 0.35, 0.1)\n  rolls <- 0\n  hits <- 0\n  repeat {\n    rolls <- rolls + 1\n    total <- sample(1:6, 1, prob = p1) + sample(1:6, 1, prob = p2)\n    if (total == target) hits <- hits + 1\n    if (hits == n) break          # stop once the sum has appeared n times\n  }\n  rolls\n}\nfun1b(target = 10, n = 4)\n\n# Check: on average, how many rolls should it take?\nmean(replicate(1000, fun1(sum = 10, n = 4)))",
    "comment": "**Walking through the answer key:**\n1. **Two counters:** `n_trials` counts **every** roll (the answer), and `n_successes` counts rolls where the sum hit the target.\n2. **`while (n_successes < n)`** means \"keep rolling while we have fewer than n successes\". The loop condition is the **opposite** of the stopping rule (\"stop when we reach n\").\n3. **Each pass:** add 1 to `n_trials`, roll each die with `sample(1:6, size = 1, prob = ...)` (the `prob` vector gives the unfair probabilities, in order for faces 1–6), then `if` the two faces add up to `sum`, add 1 to `n_successes`.\n4. When the loop stops, `n_trials` is returned (the last line of a function is its output). One run gave **39**.\n\n**Why the answer changes every run:** it's random. Use `set.seed(1)` before the call if you need the same number each time.\n\n**Watch out:** the argument is called **`sum`**, which is also the name of R's `sum()` function. It works here because the function never calls `sum()`, but it's a bad habit: if you later write `sum(x)` inside, it gets confusing. Prefer names like `target`.\n\n**Other code that works:** `repeat { ... if (hits == n) break }` uses the same logic with the stopping rule written **as itself** instead of flipped. Both versions give identical results with the same seed (checked in R). Saving the probability vectors as `p1`/`p2` also makes the `sample()` lines shorter.\n\n**Check your answer makes sense:** P(sum = 10) for these dice is 0.1125, so 4 successes should take about 4 / 0.1125 ≈ **36 rolls on average**. `mean(replicate(1000, fun1(10, 4)))` gives about 36. A single run of 39 is very normal.\n\n**The \"simulate until\" template** (most of this recitation is this shape):\n```r\nmy_sim <- function(args) {\n  counter <- 0                 # 1. start every counter at 0\n  while (keep_going) {         # 2. condition = the OPPOSITE of the stopping rule\n    counter <- counter + 1     # 3. count this attempt\n    x <- sample(...)           # 4. one random draw\n    # 5. update the tracker(s) with if/else\n  }\n  counter                      # 6. return what the question asks for\n}\n```\n\n**Solve similar problems:** \"Repeat X until Y happens **n times**, return how many tries\" → one counter for tries, one for successes, `while (successes < n)`. \"Until it happens **once**\" → the same with n = 1, or `repeat` + `break`.",
    "key": true,
    "question": "Develop a function named fun1 that takes two arguments, sum and n, and uses a while loop to simulate rolling two unfair six-sided dice. The function should continue rolling the dice until a certain sum (summation of the values shown on the faces of these dice) is reached for n times. The probabilities of each face for both dice are not uniform and are given as follows: Die1: {1 - 0.1, 2 - 0.25, 3 - 0.2, 4 - 0.1, 5 - 0.25, 6 - 0.1} and Die2: {1 - 0.15, 2 - 0.15, 3 - 0.1, 4 - 0.15, 5 - 0.35, 6 - 0.1}. The function must return the number of rolls it took to reach the specified sum n times. Test your function with sum = 10 and n = 4."
   },
   {
    "id": "c167",
    "label": "Problem 2",
    "code": "function2 <- function(n, mu, sd) {\n  obs <- rnorm(n, mu, sd)\n  for (sample_size in 1:100) {\n    sample <- sample(obs, size = sample_size)\n    sum <- sum(sample)\n    if (sum > 10) break\n  }\n  means <- c(\"sample\" = mean(sample), \"initial observations\" = mean(obs), \"mu\" = mu)\n  sorted_means <- sort(means, decreasing = TRUE)\n  sorted_means[1]\n  }\nfunction2(n = 500, mu = 3, sd = 2)\n#>   sample\n#> 3.522471\n\n# Other code that works: while loop with the 100-try cap in the condition\nfunction2b <- function(n, mu, sd) {\n  obs <- rnorm(n, mu, sd)\n  size <- 1\n  smp <- sample(obs, size)\n  while (sum(smp) <= 10 && size < 100) {   # keep going while NOT done AND under 100\n    size <- size + 1\n    smp <- sample(obs, size)\n  }\n  means <- c(\"sample\" = mean(smp), \"initial observations\" = mean(obs), \"mu\" = mu)\n  means[which.max(means)]                  # largest value, name included\n}\nfunction2b(n = 500, mu = 3, sd = 2)\n\n# Printing it as a message instead\nbest <- function2b(500, 3, 2)\ncat(\"Largest mean:\", names(best), \"=\", round(best, 3), \"\\n\")",
    "comment": "**Walking through the answer key:**\n1. `obs <- rnorm(n, mu, sd)` generates the n \"initial observations\".\n2. `for (sample_size in 1:100)` tries sample sizes 1, 2, 3, … up to **100**, so the 100-iteration cap is built in.\n3. Each pass: draw a **new** sample of that size from `obs`, add it up, and `if (sum > 10) break` jumps out of the loop as soon as the sum passes 10.\n   - If it never passes 10, the loop just ends at 100, and `sample` holds the 100th sample, as the question asks.\n4. Put the three means in a **named vector**: `c(\"sample\" = ..., \"initial observations\" = ..., \"mu\" = mu)`.\n5. `sort(means, decreasing = TRUE)[1]`: the biggest is first, and because the vector is named, the **name comes along**. That's the \"annotation\". Output: `sample 3.52`.\n\n**Why \"sample\" usually wins:** the loop **stops the moment the sum passes 10**, so it tends to stop right after drawing big values. That pushes the sample mean above 3. `mean(obs)` and `mu` are both close to 3.\n\n**Watch out:** the answer key names variables `sample` and `sum`, the same as R's functions. R still finds the functions when you call `sample(...)`, but it's confusing; prefer names like `smp` and `total`.\n\n**Other code that works**\n- **`while` with two conditions:** `sum(smp) <= 10 && size < 100` means keep going while **not done AND under the cap**. Writing the cap in the condition is the usual way to stop \"if not done within 100 tries\". Checked in R: same output as the `for` + `break` version with the same seed.\n- **`means[which.max(means)]`** picks the largest without sorting everything. Use `names(...)` if you only want the label.\n- **A message:** `cat(\"Largest mean:\", names(best), \"=\", round(best, 3))`.\n\n**`for` + `break` vs `while`:** use `for (i in 1:max)` + `break` when there's a **maximum** number of tries, and `while` when there isn't (or put the max in the `while` condition).\n\n**Solve similar problems:** \"Keep increasing / trying until condition, but stop after K tries\" → `for (i in 1:K) { ...; if (condition) break }`. \"Return the largest/smallest of several values with its label\" → put them in a named vector, then `v[which.max(v)]`.",
    "key": true,
    "question": "Create a function (name it function2) that takes on three arguments (n, mu, and sd) and does the following:\n• first it generates n observations from a normal distribution with mean mu and standard deviation sd\n• subsequently, it takes random samples from these n observations until the summation of the selected observations exceeds 10 (you start with a random sample of size 1 and if the condition is not met, you keep increasing the sample size by 1 until the condition is satisfied)\n• afterward, the function compares three mean values: the mean of the sample obtained from the preceding step (if the condition is not satisfied within 100 iterations, it uses the sample from the 100th iteration), the mean of the initial n observations, and the specified value mu\n• lastly, it returns the largest mean value with the corresponding annotation/message (either “mu”, “initial observations”, or “sample”) Test your function with n = 500, mu = 3, and sd = 2"
   },
   {
    "id": "c168",
    "label": "Problem 3",
    "code": "test_scores_variation <- function(mean_score, score_sd) {\n  sapply(1:50, function(n) {\n    random_scores <- rnorm(n, mean = mean_score, sd = score_sd)\n    avg_score <- mean(random_scores)\n    avg_score - mean_score\n  })\n}\ntest_scores_variation(mean_score = 75, score_sd = 10)\n#>  [1] -12.64409851   9.70199161  -5.75691013  -4.28736600  -1.86974128\n#>  [6]   2.93686700   3.30605257   4.33152065  -1.23431712   2.12729701\n#> [11]  -0.46846167   0.41788839   2.26722691   1.58314752   3.06432672\n#> [16]   2.13383378  -2.31369253  -0.03942969  -5.06356508  -0.64496237\n#> [21]   1.24021453  -2.35888903   0.83767381   1.02459248  -1.47622519\n#> [26]   3.04871278   2.53970353   3.21171776   3.59730338   3.37157542\n#> [31]   1.40653652  -2.46270541  -0.14602967   1.05530973   0.32727020\n#> [36]  -0.88144472  -0.04266774  -0.30452008   0.75034830  -0.34420266\n#> [41]   0.55788285   0.83988132  -1.28698689   0.32728714   0.50088404\n#> [46]  -0.55681227  -2.02808449   1.08785088   0.03232265   1.44790219\n\n# Other code that works: for loop filling a vector\ntest_scores_variation2 <- function(mean_score, score_sd) {\n  diffs <- numeric(50)                      # empty vector with 50 slots\n  for (n in 1:50) {\n    diffs[n] <- mean(rnorm(n, mean = mean_score, sd = score_sd)) - mean_score\n  }\n  diffs\n}\n\n# See the pattern: differences shrink as n grows\nd <- test_scores_variation(75, 10)\nplot(1:50, d, type = \"h\", xlab = \"Sample size n\", ylab = \"Average - 75\",\n     main = \"Bigger samples land closer to the true mean\")\nabline(h = 0, col = \"red\")",
    "comment": "**Walking through the answer key:**\n- `sapply(1:50, function(n) { ... })` runs the inside **once for each n = 1, 2, …, 50** and collects the 50 results into a vector.\n- Inside, for one n: draw n scores with `rnorm(n, mean = mean_score, sd = score_sd)`, take their `mean()`, and subtract `mean_score`. The **last line** (`avg_score - mean_score`) is what gets returned for that n.\n- The function returns the vector of 50 differences.\n\n**What the output shows:** early values are big (n = 1: −12.6, n = 2: +9.7) and later ones are small (mostly within ±2). **Bigger samples give averages closer to the true mean.** That's the law of large numbers. The typical size of the difference is about `score_sd / sqrt(n)`: 10 when n = 1, about 1.4 when n = 50.\n\n**Other code that works:** a `for` loop that fills a pre-made vector: `diffs <- numeric(50)`, then `diffs[n] <- ...` inside the loop. Checked in R: exactly the same 50 numbers as the `sapply` version with the same seed. The plot with `abline(h = 0)` is a quick way to **show** the shrinking pattern if a question asks you to comment on it.\n\n**`sapply` vs `for` loop:**\n- `sapply(1:k, function(i) ...)` → shorter, and it builds the vector for you.\n- `for (i in 1:k)` + `result[i] <- ...` → easier to read and debug; you must create the empty vector first.\n\n**Solve similar problems:** \"For each value of n from 1 to K, do X and return a vector of results\" → `sapply(1:K, function(n) { ... last line = result })`. **This is not a `while` problem:** the number of repetitions is known in advance (50), so use `sapply` or `for`.",
    "key": true,
    "question": "Create a function named test_scores_variation that takes two input arguments, mean_score and score_sd, and performs the following simulation: for each integer n between 1 and 50, it generates a sample of size n from a normal distribution with a mean of mean_score and a standard deviation of score_sd. For each sample, the function calculates the average test score and finds the difference between the average score and the mean_score argument. The test_scores_variation function should return a vector containing these differences. Test your function with mean_score = 75 and score_sd = 10."
   },
   {
    "id": "c169",
    "label": "Problem 4",
    "code": "streak_game <- function() {\n  sequence <- c()\n  heads_streak <- 0\n  tails_streak <- 0\n  repeat {\n    flip <- sample(c(\"H\", \"T\"), size = 1)\n    sequence <- c(sequence, flip)\n    if (flip == \"H\") {\n      heads_streak <- heads_streak + 1\n      tails_streak <- 0\n    } else {\n      tails_streak <- tails_streak + 1\n      heads_streak <- 0\n    }\n    if (heads_streak == 3) {\n      winner <- \"3 heads in a row\"\n      break\n    }\n    if (tails_streak == 4) {\n      winner <- \"4 tails in a row\"\n      break\n    }\n  }\n  return(list(\n    sequence = sequence,\n    winner = winner,\n    num_flips = length(sequence)))\n}\nstreak_game()\n#> $sequence\n#>  [1] \"H\" \"T\" \"T\" \"H\" \"H\" \"T\" \"T\" \"H\" \"T\" \"H\" \"H\" \"H\"\n#> \n#> $winner\n#> [1] \"3 heads in a row\"\n#> \n#> $num_flips\n#> [1] 12\n\n# Other code that works (a): while loop, decide the winner after\nstreak_game2 <- function() {\n  flips <- c(); heads <- 0; tails <- 0\n  while (heads < 3 && tails < 4) {\n    flip <- sample(c(\"H\", \"T\"), 1)\n    flips <- c(flips, flip)\n    if (flip == \"H\") { heads <- heads + 1; tails <- 0 } else { tails <- tails + 1; heads <- 0 }\n  }\n  winner <- if (heads == 3) \"3 heads in a row\" else \"4 tails in a row\"\n  list(sequence = flips, winner = winner, num_flips = length(flips))\n}\n\n# Other code that works (b): look at the last few flips instead of counting\nstreak_game3 <- function() {\n  flips <- c()\n  repeat {\n    flips <- c(flips, sample(c(\"H\", \"T\"), 1))\n    k <- length(flips)\n    if (k >= 3 && all(flips[(k-2):k] == \"H\")) { winner <- \"3 heads in a row\"; break }\n    if (k >= 4 && all(flips[(k-3):k] == \"T\")) { winner <- \"4 tails in a row\"; break }\n  }\n  list(sequence = flips, winner = winner, num_flips = length(flips))\n}",
    "comment": "**Walking through the answer key:**\n1. **Start empty:** `sequence <- c()` (no flips yet), and both streak counters at 0.\n2. **`repeat { }`** loops forever until a `break`.\n3. Each flip: `sample(c(\"H\",\"T\"), size = 1)` (fair, so no `prob` needed), then **append** it: `sequence <- c(sequence, flip)` glues the new flip onto the end.\n4. **Streak counters (the key idea):** on H, `heads_streak + 1` and **reset** `tails_streak` to 0; on T, the opposite. A streak counts flips **in a row**, so any different flip resets it.\n5. Two `if` checks: 3 heads → save the message and `break`; 4 tails → same.\n6. **Return a list** because the three outputs are different types (a character vector, one string, one number), and a list can hold mixed types. `length(sequence)` = number of flips.\n\n**Other code that works**\n- **(a) `while (heads < 3 && tails < 4)`** keeps going while **neither** streak is complete, then `if (heads == 3)` decides who won **after** the loop. No `break` needed.\n- **(b) Check the last k flips:** `flips[(k-2):k]` gets the last 3 flips; `all(... == \"H\")` is TRUE if they're all heads. There are no counters to reset, but you need `k >= 3` so you don't index before the start.\n\nAll three versions give identical results with the same seed (checked in R). Over many games, heads wins about **67%** of the time, because 3 in a row is easier than 4 in a row.\n\n**`return()` vs last line:** `return(list(...))` and just writing `list(...)` as the last line do the same thing.\n\n**Solve similar problems:** \"Until k in a row\" → a streak counter that does **+1 on a match, reset to 0 otherwise**. Two competing streaks → two counters, each resetting the other. Several outputs → `list(name1 = ..., name2 = ...)`.",
    "key": true,
    "question": "Write a function streak_game() that simulates flipping a fair coin repeatedly until either 3 heads in a row or 4 tails in a row occur. The function should return a list containing the full sequence of flips, a string indicating which condition was met (\"3 heads in a row\" or \"4 tails in a row\"), and the total number of flips performed."
   },
   {
    "id": "c170",
    "label": "Problem 5",
    "code": "rainy_days_sim <- function(p) {\n  consecutive_rain <- 0\n  total_days <- 0\n  while (consecutive_rain < 3) {\n    total_days <- total_days + 1\n    today <- sample(c(\"rainy\", \"sunny\"), size = 1, prob = c(p, 1 - p))\n    if (today == \"rainy\") {\n      consecutive_rain <- consecutive_rain + 1\n    } else {\n      consecutive_rain <- 0\n    }\n  }\n  return(total_days)\n}\nrainy_days_sim(0.4)\n#> [1] 43\n\n# Other code that works: runif() < p is TRUE with probability p\nrainy_days_sim2 <- function(p) {\n  streak <- 0\n  days <- 0\n  while (streak < 3) {\n    days <- days + 1\n    rain <- runif(1) < p                      # TRUE with probability p\n    streak <- if (rain) streak + 1 else 0     # +1 on rain, reset on sun\n  }\n  days\n}\n\n# Check: average over many runs (theory for p = 0.4: 1/p + 1/p^2 + 1/p^3 = 24.4)\nmean(replicate(10000, rainy_days_sim(0.4)))",
    "comment": "**Walking through the answer key:** it's the streak pattern from Problem 4, with just **one** streak.\n1. `consecutive_rain` = current streak of rainy days; `total_days` = days simulated (the answer).\n2. `while (consecutive_rain < 3)` keeps going until 3 in a row.\n3. Each day: `+1` day, then draw `\"rainy\"` with probability `p` and `\"sunny\"` with `1 - p` (`prob = c(p, 1 - p)` matches the order of `c(\"rainy\", \"sunny\")`).\n4. Rainy → streak + 1. Sunny → **reset the streak to 0**.\n5. Return `total_days`. One run gave **43**.\n\n**Other code that works:** `runif(1) < p` is TRUE with probability p: a random number between 0 and 1 falls below p exactly p of the time. It's a common shortcut for a yes/no event with probability p. `rbinom(1, 1, p) == 1` also works. These use the random numbers differently, so the single-run result won't match the answer key's, but the **average** is the same (both about 24.4 days over 10,000 runs; checked in R).\n\n**Is 43 reasonable?** The long-run average for p = 0.4 is **24.4 days**, and single runs vary a lot, so 43 is fine. **Checking a simulation:** `mean(replicate(10000, my_sim(...)))` gives the average and tells you whether your function is in the right range.\n\n**Solve similar problems:** \"Until k [events] in a row with probability p\" → `streak <- if (event) streak + 1 else 0` inside `while (streak < k)`. Count the days/tries separately.",
    "key": true,
    "question": "Write a function rainy_days_sim(p) that simulates weather: each day has probability p of being rainy, otherwise sunny. The simulation continues until 3 rainy days in a row occur. The function should return the number of days simulated. Test with p = 0.4."
   },
   {
    "id": "c171",
    "label": "Problem 6",
    "code": "light_bulb_sim <- function(n, p) {\n  time <- 0\n  while (n > 0) {\n    time <- time + 1\n    outcome <- sample(c(\"lit\", \"burnt\"), size = n, prob = c(1 - p, p), replace = TRUE)\n    n <- sum(outcome == \"lit\")\n  }\nreturn(time)\n}\nlight_bulb_sim(n = 6, p = 0.6)\n#> [1] 5\n\n# Other code that works (a): the number still lit is Binomial(n, 1 - p)\nlight_bulb_sim2 <- function(n, p) {\n  time <- 0\n  while (n > 0) {\n    time <- time + 1\n    n <- rbinom(1, size = n, prob = 1 - p)   # how many of the n bulbs survive this step\n  }\n  time\n}\n\n# Other code that works (b): each bulb survives if its random number is above p\nlight_bulb_sim3 <- function(n, p) {\n  time <- 0\n  while (n > 0) {\n    time <- time + 1\n    n <- sum(runif(n) > p)\n  }\n  time\n}\n\nmean(replicate(10000, light_bulb_sim(6, 0.6)))   # about 3.2 time steps on average",
    "comment": "**Walking through the answer key:**\n1. `time` counts time steps (the answer). `n` = bulbs still lit.\n2. `while (n > 0)` runs until every bulb is out.\n3. Each step: `sample(c(\"lit\",\"burnt\"), size = n, prob = c(1 - p, p), replace = TRUE)` gives each of the n bulbs its own outcome. **`replace = TRUE` is required**: you're drawing n outcomes from only 2 options, so options must be reusable.\n4. `n <- sum(outcome == \"lit\")` counts the survivors. Burnt bulbs are \"removed\" just by not being counted. **Updating `n` itself** is what moves the loop toward stopping.\n5. Return `time`. One run gave **5**.\n\n**Other code that works**\n- **(a) `rbinom(1, size = n, prob = 1 - p)`:** the number of survivors out of n, each surviving with probability 1 − p, is a **binomial** count. One call replaces the `sample` + `sum` lines.\n- **(b) `sum(runif(n) > p)`:** each bulb survives if its random number is above p, which happens with probability 1 − p.\n\nAll three average about **3.2 steps** for n = 6, p = 0.6 (checked in R over 20,000 runs each).\n\n**Common mistakes:** forgetting `replace = TRUE` (error: \"cannot take a sample larger than the population\"), or never updating `n` (an infinite loop).\n\n**Solve similar problems:** \"n items each fail/leave with probability p per round, until none left\" → `while (n > 0) { time <- time + 1; n <- rbinom(1, n, 1 - p) }`. For \"how many rounds until fewer than k remain\", change the condition to `n >= k`.",
    "key": true,
    "question": "Write a function light_bulb_sim(n, p) that simulates n light bulbs, each having a probability p of burning out at each time step. Each bulb has the same chance of burning out at each time step, and when a bulb is burned out, it is removed from the sample. You continue the simulation until all bulbs are burned out. The function should return the number of time steps before all bulbs burn out. Test your function with n = 6 and p = 0.6."
   },
   {
    "id": "c172",
    "label": "Problem 7",
    "code": "simulate_quiz <- function(num_questions, base_prob = 0.7) {\n  prob <- base_prob\n  correct <- 0\n  for (i in 1:num_questions) {\n    answer <- sample(c(TRUE, FALSE), size = 1, prob = c(prob, 1 - prob))\n    if (answer) {\n      correct <- correct + 1\n      prob <- min(prob + 0.05, 0.95)\n    } else {\n      prob <- max(prob - 0.05, 0.3)\n    }\n  }\n  score <- correct / num_questions\n  outcome <- ifelse(score >= 0.6, \"pass\", \"fail\")\n  return(list(result = outcome, total_correct = correct))\n}\nsimulate_quiz(num_questions = 20)\n#> $result\n#> [1] \"pass\"\n#> \n#> $total_correct\n#> [1] 19\n\n# Other code that works: store every answer, then sum / mean\nsimulate_quiz2 <- function(num_questions, base_prob = 0.7) {\n  prob <- base_prob\n  answers <- logical(num_questions)          # FALSE x num_questions, filled in below\n  for (i in 1:num_questions) {\n    answers[i] <- sample(c(TRUE, FALSE), 1, prob = c(prob, 1 - prob))\n    prob <- if (answers[i]) min(prob + 0.05, 0.95) else max(prob - 0.05, 0.3)\n  }\n  list(result = if (mean(answers) >= 0.6) \"pass\" else \"fail\",\n       total_correct = sum(answers))\n}\nsimulate_quiz2(num_questions = 20)",
    "comment": "**Walking through the answer key:**\n1. **`base_prob = 0.7` in the function definition** is a **default**: if you don't give `base_prob`, it's 0.7. That's why `simulate_quiz(num_questions = 20)` works with one argument.\n2. `for (i in 1:num_questions)`: the number of questions is known, so use `for`, not `while`.\n3. Each question: `sample(c(TRUE, FALSE), 1, prob = c(prob, 1 - prob))` → TRUE = correct, with the **current** probability.\n4. **Update the probability:**\n   - Correct → `min(prob + 0.05, 0.95)`: add 0.05, but **never above 0.95** (`min` picks the smaller, so 0.95 is a ceiling).\n   - Wrong → `max(prob - 0.05, 0.3)`: subtract 0.05, but **never below 0.3** (`max` acts as a floor).\n5. After the loop: `score <- correct / num_questions`, then `\"pass\"` if ≥ 0.6. Return both in a list.\n\n**`min()` caps from above, `max()` caps from below.** \"Up to a maximum of X\" → `min(new, X)`. \"Down to a minimum of X\" → `max(new, X)`. They're easy to mix up: the **maximum** limit uses **`min()`**.\n\n**Other code that works:** save every answer in a logical vector (`answers[i] <- ...`). Then `sum(answers)` = number correct and `mean(answers)` = score, since TRUE = 1. You also keep the full answer history if a question asks for it. Checked in R: same result as the answer key with the same seed.\n\n**`ifelse()` vs `if/else`:** for one TRUE/FALSE, `if (score >= 0.6) \"pass\" else \"fail\"` is the usual choice. `ifelse()` is for **vectors**; it works here but isn't needed.\n\n**Solve similar problems:** \"Probability changes based on the last outcome\" → keep `prob` as a variable **outside** the loop, use it in `sample(..., prob = c(prob, 1 - prob))`, and update it at the end of each pass with `min`/`max` for limits.",
    "key": true,
    "question": "Write a function simulate_quiz(num_questions, base_prob = 0.7) that simulates a quiz where each question’s probability of being answered correctly depends on the student’s previous performance:\n• The first question has probability base_prob of being answered correctly.\n• If the student answers correctly, their probability for the next question increases by 0.05, up to a maximum of 0.95.\n• If they answer incorrectly, their probability for the next question decreases by 0.05, down to a minimum of 0.3.\n• The student passes if their final score is at least 60%.\nThe function should return \"pass\" or \"fail\", and the total number of correct answers. Test your function with num_questions = 20 (number of questions)."
   },
   {
    "id": "c173",
    "label": "Problem 8",
    "code": "random_walk <- function(target) {\n  position <- 0; steps <- 0\n  while (abs(position) < target) {\n    step <- sample(c(-1, 1), size = 1)\n    position <- position + step\n    steps <- steps + 1\n  }\noutcome <- ifelse(position == target, \"positive_target\", \"negative_target\")\n  return(list(total_steps = steps, outcome = outcome))\n}\nrandom_walk(target = 15)\n#> $total_steps\n#> [1] 213\n#> \n#> $outcome\n#> [1] \"negative_target\"\n\n# Other code that works: two-sided condition, keep the whole path\nrandom_walk2 <- function(target) {\n  position <- 0\n  path <- c()\n  while (position > -target && position < target) {\n    position <- position + sample(c(-1, 1), 1)\n    path <- c(path, position)\n  }\n  list(total_steps = length(path),\n       outcome = if (position == target) \"positive_target\" else \"negative_target\")\n}\n\n# See the walk\nset.seed(1)\nw <- random_walk2(15)\nw$total_steps",
    "comment": "**Walking through the answer key:**\n1. Start at `position <- 0` with `steps <- 0`. (The `;` lets you put two commands on one line.)\n2. **`while (abs(position) < target)`**: `abs()` removes the sign, so this means \"−target < position < target\" in one test, i.e. keep walking while you haven't hit **either** end.\n3. Each step: `sample(c(-1, 1), size = 1)` gives −1 or +1 with equal chance. Add it to `position` and count the step.\n4. After the loop you're at +target or −target: `ifelse(position == target, ...)` says which one.\n5. Return a list. One run: **213 steps**, reached −15.\n\n**Other code that works:** write both sides out, `position > -target && position < target`. It means the same thing as `abs(position) < target` but may be easier to read. Saving the `path` lets you plot the walk (`plot(path, type = \"l\")`), and `length(path)` = number of steps. Checked in R: same results as the answer key with the same seed.\n\n**Is 213 reasonable?** For a fair ±1 walk, the average number of steps to reach ±target is **target²** = 225 for 15. Very variable, but 213 is right in range.\n\n**Solve similar problems:** \"Until you reach A or B\" → `while (x > lower && x < upper)` (or `abs(x) < k` when symmetric). Decide which end was reached **after** the loop with `if`. For \"+1 with probability p\", use `sample(c(-1, 1), 1, prob = c(1 - p, p))`.",
    "key": true,
    "question": "Write a function random_walk(target) that simulates a random walk starting from 0, where each step is +1 or -1 with equal probability. The function continues until the position reaches target or -target. It should return a list with the total number of steps and whether the walker reached the positive or negative target first. Test your function with target = 15."
   },
   {
    "id": "c174",
    "label": "Problem 9",
    "code": "fishing_trip <- function() {\n  attempt <- 0\n  big_fishies <- 0\n  accum_small_fishies <- 0\n  outcome <- \"lose\"\n  while (big_fishies < 5 && accum_small_fishies < 10) {\n    attempt <- attempt + 1\n    fishy <- sample(c(\"big\", \"small\"), size = 1, prob = c(0.2, 0.8))\n    big_fishies <- big_fishies + 1 * (fishy == \"big\")\n    accum_small_fishies <- (accum_small_fishies + 1) * (fishy == \"small\")\n## The cat() function is optional here and is used to make the output more\n## readable\n    cat(paste0(\n      \"Attempt #\", attempt, \"... \",\n      \"Total big fish: \", big_fishies, \", \",\n      \"Accummulated small fish: \", accum_small_fishies, \"\\n\"))\n    if (big_fishies == 5) {\n      outcome <- \"win\"\n    }\n    }\n  return(list(\"attempts\" = attempt, \"outcome\" = outcome))\n  }\nfishing_trip()\n#> Attempt #1... Total big fish: 0, Accummulated small fish: 1\n#> Attempt #2... Total big fish: 0, Accummulated small fish: 2\n#> Attempt #3... Total big fish: 0, Accummulated small fish: 3\n#> Attempt #4... Total big fish: 0, Accummulated small fish: 4\n#> Attempt #5... Total big fish: 0, Accummulated small fish: 5\n#> Attempt #6... Total big fish: 0, Accummulated small fish: 6\n#> Attempt #7... Total big fish: 0, Accummulated small fish: 7\n#> Attempt #8... Total big fish: 0, Accummulated small fish: 8\n#> Attempt #9... Total big fish: 1, Accummulated small fish: 0\n#> Attempt #10... Total big fish: 1, Accummulated small fish: 1\n#> Attempt #11... Total big fish: 2, Accummulated small fish: 0\n#> Attempt #12... Total big fish: 2, Accummulated small fish: 1\n#> Attempt #13... Total big fish: 2, Accummulated small fish: 2\n#> Attempt #14... Total big fish: 2, Accummulated small fish: 3\n#> Attempt #15... Total big fish: 2, Accummulated small fish: 4\n#> Attempt #16... Total big fish: 2, Accummulated small fish: 5\n#> Attempt #17... Total big fish: 3, Accummulated small fish: 0\n#> Attempt #18... Total big fish: 3, Accummulated small fish: 1\n#> Attempt #19... Total big fish: 3, Accummulated small fish: 2\n#> Attempt #20... Total big fish: 3, Accummulated small fish: 3\n#> Attempt #21... Total big fish: 4, Accummulated small fish: 0\n#> Attempt #22... Total big fish: 4, Accummulated small fish: 1\n#> Attempt #23... Total big fish: 4, Accummulated small fish: 2\n#> Attempt #24... Total big fish: 4, Accummulated small fish: 3\n#> Attempt #25... Total big fish: 4, Accummulated small fish: 4\n#> Attempt #26... Total big fish: 4, Accummulated small fish: 5\n#> Attempt #27... Total big fish: 4, Accummulated small fish: 6\n#> Attempt #28... Total big fish: 4, Accummulated small fish: 7\n#> Attempt #29... Total big fish: 4, Accummulated small fish: 8\n#> Attempt #30... Total big fish: 4, Accummulated small fish: 9\n#> Attempt #31... Total big fish: 5, Accummulated small fish: 0\n#> $attempts\n#> [1] 31\n#> \n#> $outcome\n#> [1] \"win\"\n\n# Other code that works: plain if/else instead of the multiply-by-TRUE trick\nfishing_trip2 <- function() {\n  attempts <- 0\n  big <- 0\n  small_streak <- 0                    # small fish since the last big fish\n  while (big < 5 && small_streak < 10) {\n    attempts <- attempts + 1\n    catch <- sample(c(\"big\", \"small\"), 1, prob = c(0.2, 0.8))\n    if (catch == \"big\") {\n      big <- big + 1\n      small_streak <- 0                # a big fish resets the small-fish count\n    } else {\n      small_streak <- small_streak + 1\n    }\n  }\n  list(attempts = attempts, outcome = if (big == 5) \"win\" else \"lose\")\n}\nfishing_trip2()",
    "comment": "**Walking through the answer key:**\n1. Counters: `attempt`, `big_fishies` (total big fish), `accum_small_fishies` (small fish **since the last big fish**). `outcome <- \"lose\"` is set first as the default.\n2. **`while (big_fishies < 5 && accum_small_fishies < 10)`**: keep fishing while **both** \"not won yet\" and \"not lost yet\" hold. `&&` = and; the loop stops as soon as **either** one fails.\n3. Each attempt: catch big (0.2) or small (0.8).\n4. **The tricky lines (multiplying by TRUE/FALSE):**\n   - `big_fishies + 1 * (fishy == \"big\")`: TRUE = 1 and FALSE = 0, so this adds 1 only if big.\n   - `(accum_small_fishies + 1) * (fishy == \"small\")`: if small, × 1 → count goes up by 1. If big, × 0 → **resets to 0**. That's how \"10 small fish **without** a big fish\" is tracked: a big fish wipes the count.\n5. `if (big_fishies == 5) outcome <- \"win\"`. Otherwise it stays \"lose\".\n6. `cat(paste0(...))` only prints progress. It's optional and doesn't change the result.\n\n**Other code that works:** the same logic with a normal `if/else`: on big, +1 big **and** reset the small streak; on small, +1 small streak. The outcome is decided **after** the loop: `if (big == 5) \"win\" else \"lose\"`. Checked in R: same results as the answer key with the same seed. Over many games the player wins about **57%** of the time.\n\n**Reading \"without catching a big fish\":** it means a **streak**, so the small count resets on every big fish (the same pattern as Problems 4 and 5). If it said \"10 small fish in total\", you would **not** reset.\n\n**Solve similar problems:** \"Win if A reaches k₁, lose if B reaches k₂\" → `while (A < k1 && B < k2)`, update both counters each pass, decide win/lose after the loop. A starting default (`outcome <- \"lose\"`) is handy when only one case needs an `if`.",
    "key": true,
    "question": "Simulate a fishing game where a player tries to catch a specific type of fish:\n• Each turn, they have a 20% chance of catching a “big fish” and an 80% chance of catching a “small fish”.\n• If they catch 5 big fish, they win immediately.\n• If they catch 10 small fish without catching a big fish, they lose immediately.\n• Otherwise, they keep fishing until they either:\n– Reach 5 big fish and win. – Accumulate 10 small fish without a big fish and lose. The function, named fishing_trip, should return the number of attempts made and the outcome (“win” or “lose”). It takes no arguments but simulates one game per function call."
   },
   {
    "id": "c175",
    "label": "Problem 10",
    "code": "charge_devices <- function(required_charge, attempted_rounds) {\n  phone <- list(\"pcts\" = seq(5, 30, by = 5), \"probs\" = c(0.2, 0.3, 0.2, 0.15, 0.1, 0.05))\n  laptop <- list(\"pcts\" = seq(10, 30, by = 5), \"probs\" = c(0.3, 0.25, 0.2, 0.15, 0.1))\n  attempts_per_round <- replicate(n = attempted_rounds, {\n    attempts <- 0\n    total_charge <- 0\n    while (total_charge < required_charge) {\n      phone_charge <- sample(phone$pcts, size = 1, prob = phone$probs)\n      laptop_charge <- sample(laptop$pcts, size = 1, prob = laptop$probs)\n      total_charge <- total_charge + (phone_charge + laptop_charge)\n      attempts <- attempts + 1\n    }\n    attempts\n    })\n  names(attempts_per_round) <- paste(\"round\", 1:attempted_rounds)\n  return(attempts_per_round)\n  }\ncharge_devices(required_charge = 40, attempted_rounds = 5)\n#> round 1 round 2 round 3 round 4 round 5\n#>       1       3       2       2       2\n\n# Other code that works: one helper for a single round, then a loop\none_round <- function(required_charge) {\n  attempts <- 0\n  total <- 0\n  while (total < required_charge) {\n    phone  <- sample(seq(5, 30, by = 5),  1, prob = c(0.2, 0.3, 0.2, 0.15, 0.1, 0.05))\n    laptop <- sample(seq(10, 30, by = 5), 1, prob = c(0.3, 0.25, 0.2, 0.15, 0.1))\n    total <- total + phone + laptop\n    attempts <- attempts + 1\n  }\n  attempts\n}\n\ncharge_devices2 <- function(required_charge, attempted_rounds) {\n  rounds <- numeric(attempted_rounds)\n  for (r in 1:attempted_rounds) rounds[r] <- one_round(required_charge)\n  names(rounds) <- paste(\"round\", 1:attempted_rounds)\n  rounds\n}\ncharge_devices2(required_charge = 40, attempted_rounds = 5)\n\n# or with sapply\nsapply(1:5, function(r) one_round(40))",
    "comment": "**Walking through the answer key:**\n1. **Store each device's options as a list:** `phone$pcts` = charge amounts (`seq(5, 30, by = 5)` = 5, 10, …, 30) and `phone$probs` = their probabilities, **in the same order**. The same goes for the laptop.\n2. **`replicate(n = attempted_rounds, { ... })`** runs the whole `{ }` block that many times and collects each block's **last value** into a vector.\n3. Inside **one round**: start with `attempts = 0` and `total_charge = 0`. `while (total_charge < required_charge)`: draw a phone charge and a laptop charge, add **both** to the running total, and count the attempt. The block ends with `attempts`, which is that round's result.\n4. `names(...) <- paste(\"round\", 1:attempted_rounds)` labels them \"round 1\", …, \"round 5\".\n5. Output: `1 3 2 2 2`. With a required total of 40% and each attempt adding 15–60%, most rounds take 1–3 attempts.\n\n**Other code that works:** split it into **two functions**: `one_round()` does one round, then a `for` loop (or `sapply`) calls it `attempted_rounds` times. It's easier to test (`one_round(40)` on its own) and easier to read. Checked in R: identical to the answer key with the same seed.\n\n**`replicate` vs `sapply` vs `for`:**\n- `replicate(k, expr)`: run the same thing k times (no index needed).\n- `sapply(1:k, function(i) ...)`: the same, but you get the index i.\n- `for` + `result[i] <- ...`: the same, written out.\n\n**Solve similar problems:** \"Run a simulation for R rounds and return a vector of results\" → write **one round** first (a `while` loop that returns one number), then `replicate(R, one_round(...))`. Add labels with `names(x) <- paste(\"round\", 1:R)`.",
    "key": true,
    "question": "Write a function named charge_devices that models charging two different devices (e.g., a phone and a laptop) with a portable battery pack. The function takes two arguments, required_charge (the target total charge in percentage for both devices combined) and attempted_rounds (how many rounds of attempts you want to simulate). The function should simulate charging the devices multiple times until the combined battery percentage reaches or exceeds required_charge in each of the attempted_rounds. The charging efficiency for each device is not constant and is modeled as follows:\n• Phone: {5% - 0.2, 10% - 0.3, 15% - 0.2, 20% - 0.15, 25% - 0.1, 30% - 0.05}\n• Laptop: {10% - 0.3, 15% - 0.25, 20% - 0.2, 25% - 0.15, 30% - 0.1} The function should return a vector of the total number of charge attempts it took in each round to meet or exceed the required_charge for all attempted_rounds.\nTest your function with required_charge = 40 and attempted_rounds = 5."
   },
   {
    "id": "c176",
    "label": "Problem 11",
    "code": "stock_price_simulator <- function(days, start_price, mean_up, mean_down, p_up) {\n  day_means <- sample(c(mean_up, mean_down), size = days, prob = c(p_up, 1 - p_up), replace = TRUE)\n  day_changes <- sapply(day_means, function(day_mean) rnorm(1, mean = day_mean, sd = 1))\n  day_prices <- cumsum(c(start_price, day_changes))[-1]\n  data.frame(\"Day\" = 1:days, \"Price\" = day_prices, \"Change\" = day_changes)\n}\nstock_price_simulator(days = 30, start_price = 100, mean_up = 4, mean_down = -5, p_up = 0.55)\n#>    Day     Price    Change\n#> 1    1 103.87908  3.879076\n#> 2    2  99.70630 -4.172778\n#> 3    3  93.85007 -5.856232\n#> 4    4  88.68780 -5.162262\n#> 5    5  81.99771 -6.690089\n#> 6    6  85.59094  3.593226\n#> 7    7  87.75200  2.161056\n#> 8    8  82.27764 -5.474355\n#> 9    9  79.07776 -3.199879\n#> 10  10  73.09697 -5.980793\n#> 11  11  69.25286 -3.844109\n#> 12  12  74.04248  4.789618\n#> 13  13  79.24507  5.202594\n#> 14  14  74.77343 -4.471645\n#> 15  15  78.67459  3.901159\n#> 16  16  72.32262 -6.351967\n#> 17  17  66.13791 -6.184715\n#> 18  18  70.47056  4.332652\n#> 19  19  74.22709  3.756528\n#> 20  20  78.25655  4.029460\n#> 21  21  72.35124 -5.905303\n#> 22  22  66.49079 -5.860448\n#> 23  23  61.05028 -5.440511\n#> 24  24  54.15146 -6.898822\n#> 25  25  59.27038  5.118918\n#> 26  26  54.94183 -4.328549\n#> 27  27  48.57692 -6.364905\n#> 28  28  52.50854  3.931613\n#> 29  29  47.50999 -4.998544\n#> 30  30  42.69657 -4.813422\n\n# Other code that works (a): rnorm() takes a whole vector of means\nstock_price_simulator2 <- function(days, start_price, mean_up, mean_down, p_up) {\n  day_means <- sample(c(mean_up, mean_down), size = days, prob = c(p_up, 1 - p_up), replace = TRUE)\n  changes <- rnorm(days, mean = day_means, sd = 1)       # one draw per day, each with its own mean\n  data.frame(Day = 1:days, Price = start_price + cumsum(changes), Change = changes)\n}\n\n# Other code that works (b): day-by-day for loop\nstock_price_simulator3 <- function(days, start_price, mean_up, mean_down, p_up) {\n  up <- sample(c(TRUE, FALSE), size = days, prob = c(p_up, 1 - p_up), replace = TRUE)\n  price <- numeric(days); change <- numeric(days)\n  current <- start_price\n  for (d in 1:days) {\n    change[d] <- if (up[d]) rnorm(1, mean_up, 1) else rnorm(1, mean_down, 1)\n    current <- current + change[d]\n    price[d] <- current\n  }\n  data.frame(Day = 1:days, Price = price, Change = change)\n}\n\nsim <- stock_price_simulator2(30, 100, 4, -5, 0.55)\nplot(sim$Day, sim$Price, type = \"l\", xlab = \"Day\", ylab = \"Price\")",
    "comment": "**Walking through the answer key:** no loop at all. Everything is done for all days at once.\n1. **Up or down for every day:** `sample(c(mean_up, mean_down), size = days, prob = c(p_up, 1 - p_up), replace = TRUE)` gives each day the mean of its change (4 for up days, −5 for down days).\n2. **The actual change:** `sapply(day_means, function(day_mean) rnorm(1, mean = day_mean, sd = 1))` draws one normal per day around that day's mean.\n3. **Prices:** `cumsum()` is a **running total**. `cumsum(c(start_price, day_changes))` = 100, 100 + change₁, 100 + change₁ + change₂, …, and `[-1]` drops the first element (the starting price), leaving one price **per day**.\n4. Return `data.frame(Day = 1:days, Price = ..., Change = ...)`, three columns as asked.\n\n**Other code that works**\n- **(a)** `rnorm(days, mean = day_means, sd = 1)` uses a **vector** of means and draws one value per mean, so `sapply` isn't needed. `start_price + cumsum(changes)` gives the same prices without the `c()` and `[-1]` step. Checked in R: identical output with the same seed.\n- **(b)** A `for` loop over days, keeping a running `current` price. It's longer, but it reads like the story (\"each day, …\") and gives the same numbers with the same seed.\n\n**Why the price fell in the sample output:** the expected daily change is 0.55 × 4 + 0.45 × (−5) = **−0.05**, so it's almost flat on average. A 30-day run can easily drift a lot either way.\n\n**Solve similar problems:** \"Simulate a value that changes each step and record it\" → simulate all the **changes** first, then `start + cumsum(changes)` for the running value. Return a `data.frame` when the question lists columns. If each step's rule depends on the **current** value (e.g., \"stop if the price drops below 50\"), use a `for`/`while` loop instead.",
    "key": true,
    "question": "Create a function stock_price_simulator that simulates daily stock price changes over days. Each day, the stock has a probability p_up of increasing in value, with the increase drawn from a normal distribution with mean mean_up and standard deviation 1. If the stock decreases, the change is drawn form a normal distribution with mean mean_down and standard deviation 1. The initial stock price is given by start_price. The function should accept parameters: days, start_price, mean_up, mean_down, and p_up. It should return a dataframe with three columns:\n• Day - The day number\n• Price - The stock price at the end of each day\n• Change - The daily gain or loss Test your function with days = 30, start_price = 100, mean_up = 4, mean_down = -5, and p_up = 0.55."
   }
  ],
  "notes": "Unfair dice, sampling until a sum passes 10, `test_scores_variation`, coin streaks, rainy days, light bulbs, an adaptive quiz, a random walk and more simulation functions.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.\n\n**Every problem here has the same skeleton:** counters start at 0 → a loop (`while` when you don't know how many tries, `for`/`sapply`/`replicate` when you do) → one random draw per pass with `sample()`, `rnorm()` or `runif()` → update counters with `if/else` → return the answer (a `list()` if there are several outputs). Each problem has a walkthrough, other code that works (checked in R), and how to solve similar problems. Run `set.seed(1)` first if you want the same numbers each time.",
  "takeaways": [
   "while (not done) when the number of tries is unknown; for / sapply / replicate when it's known.",
   "k in a row: streak <- if (event) streak + 1 else 0, inside while (streak < k).",
   "Stop at A or B: while (a < A && b < B), then decide which happened after the loop with if.",
   "Caps: 'up to a maximum of X' uses min(new, X); 'down to a minimum of X' uses max(new, X).",
   "Several outputs of different types: return list(name1 = ..., name2 = ...).",
   "Check a simulation: mean(replicate(1000, my_sim(...))) and compare with what you expect."
  ],
  "updatedAt": "2026-10-15T00:40:00Z"
 },
 "rev-00": {
  "type": "prac",
  "num": "00",
  "title": "Review session notes and exam plan",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "exam format",
   "functions",
   "data set",
   "visualization"
  ],
  "pdfs": [],
  "chunks": [],
  "notes": "**From the review session**\n\n- You can use solutions from homework and recitation sessions.\n- The exam has two parts: **(1) create a function** and **(2) work with a data set**, including visualization.\n\n**Topics to know**\n\n- Data structures: vectors, lists, matrices, data frames, factors. `length()` can be used as an input. Adding elements to a vector. Subsetting.\n- Lists hold mixed (heterogeneous) data. Single brackets `[ ]` give back a **list**; double brackets `[[ ]]` give back the **element itself** (a vector, a number, etc.).\n- Matrices: `matrix(data, ncol = , byrow = TRUE)`. Access with `[row, column]`. Use logical conditions to change elements, for example every 8 becomes 0.\n- Data frames: `str(df)`, `summary(df)`, `colnames(df)`, use `head()` to show a manipulation, subset with `[ ]` or `$` (e.g. `df[df$Age < 50, ]`), add columns (`df$Experience <- c(...)`), `cbind()` and `rbind()`.\n- Convert character columns into factors and define their levels.\n- Filtering with `&` and `|`.\n- `if`/`else` and nested if-else; `ifelse()` (Lecture 5).\n- For loops with `next` and `break`. **Only for loops in the questions.**\n- Functions (Lecture 6): always use `return()`. Functions with sampling, like the simpler homework problems.\n- `read.table()` is more general; `read.csv()` is for CSV files. Use `stringsAsFactors = TRUE`.\n- `quantile(data1$Age, c(0.3, 0.8))`.\n- Apply functions: `apply(data, 1 or 2, function)`, `lapply()`, `sapply()`, `mapply()`, `tapply()` for subgroup analysis (means and medians across groups).\n- Visualization: histograms and boxplots; make sure the inputs are the right type.\n- Probability: only the normal distribution (`rnorm()`) and `sample()`. Use `set.seed(1)` **inside** the function.\n\n**Fixes to my notes** (these would cause errors or wrong answers)\n\n- `matrix_8 <- matrix_8[matrix_8 == 8] <- 0` overwrites the whole matrix with `0`. Write `matrix_8[matrix_8 == 8] <- 0` on its own line.\n- The function is `quantile()`, not `quantiles()`, and it needs both closing parentheses: `quantile(data1$Age, c(0.3, 0.8))`.\n- R is case-sensitive: `stringsAsFactors = TRUE` and `length()`, not `STRINGSASFACTORS` or `Length()`.\n- Column names are case-sensitive too: `df$Experience` and `df$EXPERIENCE` are different columns.\n\nThe other review sheets (Rev 01–06) have a tested template for each topic.",
  "takeaways": [
   "Part 1 is writing a function; Part 2 is working with a data set plus a plot.",
   "Homework and recitation solutions are allowed: use \"Find code for a question\" to locate the closest one.",
   "Every function ends with return(...).",
   "Put set.seed(1) inside the function, before sample() or rnorm().",
   "Questions use for loops (with next and break), not while loops.",
   "matrix_8[matrix_8 == 8] <- 0 on its own line; never assign it back to matrix_8.",
   "quantile(), stringsAsFactors = TRUE and length() are spelled exactly like that.",
   "[ ] on a list gives a list; [[ ]] gives the element itself."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-01": {
  "type": "prac",
  "num": "01",
  "title": "Functions: templates to adapt",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "functions",
   "return",
   "if-else",
   "for loops",
   "next",
   "break",
   "sample()",
   "rnorm()",
   "set.seed",
   "lists"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-01-c01",
    "label": "Function anatomy",
    "question": "Write a function named ___ that takes ___ and returns ___.",
    "code": "# name <- function(argument1, argument2 = default) {\n#   ...work with the arguments...\n#   return(result)\n# }\n\nadd_tax <- function(price, rate = 0.08) {\n  total <- price * (1 + rate)\n  return(total)\n}\n\nadd_tax(100)               # uses the default rate\n#> [1] 108\nadd_tax(100, rate = 0.10)  # overrides the default\n#> [1] 110\nadd_tax(c(10, 20, 30))     # vectors work too\n#> [1] 10.8 21.6 32.4",
    "comment": "- Arguments are the inputs the question lists, in the same order.\n- `rate = 0.08` is a **default**: used when you don't pass a rate.\n- Objects created inside the function (like `total`) don't exist outside it.",
    "key": true
   },
   {
    "id": "rev-01-c02",
    "label": "if / else if / else on one value",
    "question": "Write a function that assigns a status (or category) to a single value based on rules.",
    "code": "grade_status <- function(score, homework_rate) {\n  if (score >= 90 & homework_rate >= 0.9) {\n    status <- \"Excellent\"\n  } else if (score >= 80 & homework_rate >= 0.8) {\n    status <- \"Good\"\n  } else if (score >= 70) {\n    status <- \"Pass\"\n  } else {\n    status <- \"Fail\"\n  }\n  return(status)\n}\n\ngrade_status(84, 0.92)\n#> [1] \"Good\"\ngrade_status(65, 1)\n#> [1] \"Fail\"",
    "comment": "- Check the strictest condition first; R stops at the first TRUE.\n- `&` means both must be TRUE, `|` means at least one.\n- `if ()` only takes **one** TRUE/FALSE. For a vector, see the next chunk.",
    "key": true
   },
   {
    "id": "rev-01-c03",
    "label": "Classify every element of a vector (for loop + if)",
    "question": "Write a function that takes a numeric vector and labels each element (e.g. Small / Medium / Large).",
    "code": "categorize <- function(x) {\n  labels <- c()                        # start empty, fill in the loop\n  for (i in 1:length(x)) {\n    if (x[i] < 10) {\n      labels[i] <- \"Small\"\n    } else if (x[i] <= 20) {\n      labels[i] <- \"Medium\"\n    } else {\n      labels[i] <- \"Large\"\n    }\n  }\n  return(labels)\n}\n\ncategorize(c(4, 10, 15, 22, 8, 18, 27, 5, 12))\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\" \n#> [9] \"Medium\"\n\n# Same result in one line with nested ifelse()\ncategorize2 <- function(x) {\n  return(ifelse(x < 10, \"Small\", ifelse(x <= 20, \"Medium\", \"Large\")))\n}\ncategorize2(c(4, 10, 15, 22, 8, 18, 27, 5, 12))\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\" \n#> [9] \"Medium\"",
    "comment": "- `for (i in 1:length(x))` loops over **positions**, so you can write `labels[i]`.\n- \"Between 10 and 20 inclusive\" means `>= 10` and `<= 20`; the `else if` order handles the `>= 10` part.\n- This is Homework 1, Problem 5 Part 1.",
    "key": true
   },
   {
    "id": "rev-01-c04",
    "label": "Count things with a for loop (counters, next)",
    "question": "Write a function that counts how many elements meet a condition (even/odd, positive/negative) and returns the counts.",
    "code": "count_even_odd <- function(x) {\n  even <- 0\n  odd <- 0\n  for (value in x) {\n    if (!is.numeric(value)) {\n      next                             # skip anything that isn't a number\n    }\n    if (value %% 2 == 0) {\n      even <- even + 1\n    } else if (value %% 2 == 1) {      # decimals like 3.4 are neither\n      odd <- odd + 1\n    }\n  }\n  return(list(Even = even, Odd = odd))\n}\n\ncount_even_odd(c(1, 3.4, 2, -5, 16, 7))\n#> $Even\n#> [1] 2\n#> $Odd\n#> [1] 3",
    "comment": "- `x %% 2 == 0` is even. In R, `-5 %% 2` is `1`, so negatives work too.\n- `for (value in x)` loops over **values**; use it when you don't need the position.\n- `next` jumps to the next element; `break` stops the loop entirely.",
    "key": true
   },
   {
    "id": "rev-01-c05",
    "label": "Loop over a matrix (nested for loops)",
    "question": "Write a function (or loop) that goes through every element of a matrix and replaces values according to rules.",
    "code": "adjust_matrix <- function(m) {\n  result <- m                               # same size as the input\n  for (i in 1:nrow(m)) {                    # rows\n    for (j in 1:ncol(m)) {                  # columns\n      if (m[i, j] < 0) {\n        result[i, j] <- 0\n      } else if (m[i, j] < 5) {\n        result[i, j] <- 5\n      } else if (m[i, j] > 10 & m[i, j] < 15) {\n        result[i, j] <- 10\n      } else {\n        result[i, j] <- 100\n      }\n    }\n  }\n  return(result)\n}\n\nm <- matrix(c(10, 3, 6, 23, -5,\n              -4, 13, 17, 5, 6), ncol = 5, byrow = TRUE)\nadjust_matrix(m)\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]  100    5  100  100    0\n#> [2,]    0   10  100  100  100",
    "comment": "- `i` walks the rows and `j` the columns, so the element is `m[i, j]`.\n- Copy the input first (`result <- m`) or make an empty one: `matrix(0, nrow = nrow(m), ncol = ncol(m))`.\n- Close to Homework 1, Problem 4 Part 2.",
    "key": true
   },
   {
    "id": "rev-01-c06",
    "label": "Return several results in a list",
    "question": "Write a function that returns a list containing several summaries (sums, means, max, min...).",
    "code": "matrix_summary <- function(m) {\n  result <- list(\n    RowSums     = rowSums(m),\n    ColumnMeans = colMeans(m),\n    MaxValue    = max(m),\n    MinValue    = min(m)\n  )\n  return(result)\n}\n\nout <- matrix_summary(matrix(c(5, 7, 9, 6, 12, 14), nrow = 2, byrow = TRUE))\nout\n#> $RowSums\n#> [1] 21 32\n#> $ColumnMeans\n#> [1]  5.5  9.5 11.5\n#> $MaxValue\n#> [1] 14\n#> $MinValue\n#> [1] 5\nout$MaxValue       # pull out one piece\n#> [1] 14",
    "comment": "- Name every list element (`RowSums = ...`) so the output is labeled.\n- Without `rowSums()`: `apply(m, 1, sum)` for rows, `apply(m, 2, mean)` for columns.\n- Homework 1, Problem 5 Part 2.",
    "key": false
   },
   {
    "id": "rev-01-c07",
    "label": "Simulation with sample() and set.seed()",
    "question": "Write a function that simulates rolling dice (fair or unfair) n times and returns the outcomes or a frequency table.",
    "code": "roll_two_dice <- function(n) {\n  set.seed(1)                                   # same results every run\n  die1 <- sample(1:6, size = n, replace = TRUE)\n  die2 <- sample(1:6, size = n, replace = TRUE)\n  return(data.frame(Die1 = die1, Die2 = die2, Sum = die1 + die2))\n}\nroll_two_dice(5)\n#>   Die1 Die2 Sum\n#> 1    1    3   4\n#> 2    4    6  10\n#> 3    1    2   3\n#> 4    2    3   5\n#> 5    5    3   8\n\n# Unfair die: prob = goes in the same order as the faces 1:6\nunfair_die <- function(n) {\n  set.seed(1)\n  rolls <- sample(1:6, size = n, replace = TRUE,\n                  prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))\n  return(table(rolls))\n}\nunfair_die(100)\n#> rolls\n#>  1  2  3  4  5  6 \n#> 11 33 26  2 24  4 ",
    "comment": "- `replace = TRUE` is required when you take more draws than there are faces.\n- The probabilities must add up to 1.\n- `table()` turns the results into a frequency table (how many 1s, 2s, ...).\n- Close to Homework 2, Problem 1 Parts 1–2.",
    "key": true
   },
   {
    "id": "rev-01-c08",
    "label": "Repeat until something happens (for loop + break)",
    "question": "Write a function that keeps simulating until a condition is met and returns how many tries it took.",
    "code": "rolls_until_sum <- function(target, max_rolls = 1000) {\n  set.seed(1)\n  for (i in 1:max_rolls) {\n    total <- sample(1:6, 1) + sample(1:6, 1)\n    if (total == target) {\n      break                        # stop as soon as we hit the target\n    }\n  }\n  return(i)                        # i is the number of rolls it took\n}\n\nrolls_until_sum(7)\n#> [1] 7\nrolls_until_sum(12)\n#> [1] 8",
    "comment": "- Since exam questions use **for loops**, this is the for-loop way to \"keep going until\": loop up to a big number and `break`.\n- After `break`, `i` still holds the step where the loop stopped.\n- Recitation 4 solves similar problems with `while`; either works if allowed.",
    "key": true
   },
   {
    "id": "rev-01-c09",
    "label": "Normal distribution with rnorm()",
    "question": "Write a function that generates n observations from a normal distribution with mean mu and standard deviation sigma and returns summaries.",
    "code": "normal_summary <- function(n, mu, sigma) {\n  set.seed(1)\n  x <- rnorm(n, mean = mu, sd = sigma)\n  result <- list(\n    SampleMean   = mean(x),\n    SampleSD     = sd(x),\n    ShareAboveMu = mean(x > mu),               # mean of TRUE/FALSE = proportion\n    Quartiles    = quantile(x, c(0.25, 0.75)),\n    AnyNegative  = any(x < 0)\n  )\n  return(result)\n}\n\nnormal_summary(n = 500, mu = 3, sigma = 2)\n#> $SampleMean\n#> [1] 3.045288\n#> $SampleSD\n#> [1] 2.023857\n#> $ShareAboveMu\n#> [1] 0.478\n#> $Quartiles\n#>      25%      75% \n#> 1.757506 4.357126 \n#> $AnyNegative\n#> [1] TRUE",
    "comment": "- `rnorm(n, mean, sd)`: the third argument is the **standard deviation**, not the variance.\n- `mean(x > mu)` gives the proportion of values above `mu`.\n- `any()` and `all()` check a whole vector at once (Homework 2, Problem 1 Part 4 uses this).",
    "key": true
   },
   {
    "id": "rev-01-c10",
    "label": "rnorm() into a matrix, then summarize",
    "question": "Generate n random normal numbers, fill a matrix with them, and return column means or row medians depending on a condition.",
    "code": "fill_and_summarize <- function(n, mu, sigma) {\n  set.seed(1)\n  x <- rnorm(n, mean = mu, sd = sigma)\n  if (n %% 2 == 0) {\n    m <- matrix(x, nrow = 2, byrow = TRUE)     # 2 rows, n/2 columns\n  } else {\n    m <- matrix(x, ncol = 1)\n  }\n  if (all(x >= 0)) {\n    return(apply(m, 2, mean))                  # column means\n  } else {\n    return(apply(m, 1, median))                # row medians\n  }\n}\n\nfill_and_summarize(n = 10, mu = 0.5, sigma = 2)\n#> [1] 0.8672866 1.4748581",
    "comment": "- `n %% 2 == 0` checks divisibility; `n %% 3 == 0` for 3.\n- `apply(m, 1, f)` = by **row**, `apply(m, 2, f)` = by **column**.\n- Pattern from Homework 2, Problem 1 Part 4.",
    "key": false
   },
   {
    "id": "rev-01-c11",
    "label": "Function that works on a data frame",
    "question": "Write a function that takes a data frame, filters it, and returns a group summary.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\ndept_report <- function(df, min_salary) {\n  high <- df[df$Salary > min_salary, ]                    # rows that pass\n  avg_by_dept <- tapply(high$Salary, high$Department, mean)\n  return(list(Count = nrow(high), AverageByDept = avg_by_dept))\n}\n\ndept_report(employees, 75000)\n#> $Count\n#> [1] 6\n#> $AverageByDept\n#> Analytics   Finance Marketing \n#>  82333.33 102000.00  85000.00 ",
    "comment": "- `df[condition, ]` keeps the rows where the condition is TRUE; the empty spot after the comma keeps all columns.\n- `tapply(values, groups, function)` is the subgroup summary from the review session.",
    "key": true
   },
   {
    "id": "rev-01-c12",
    "label": "Use sapply instead of a loop",
    "question": "Write a function that takes a list, computes the mean of each element, and reorders the list by those means.",
    "code": "order_by_mean <- function(lst) {\n  means <- sapply(lst, mean)           # one mean per list element\n  return(lst[order(means)])            # smallest mean first\n}\n\norder_by_mean(list(c(20, 13, 34, 2), c(2, 3), c(45, 65, 78), c(3, 5, 10)))\n#> [[1]]\n#> [1] 2 3\n#> [[2]]\n#> [1]  3  5 10\n#> [[3]]\n#> [1] 20 13 34  2\n#> [[4]]\n#> [1] 45 65 78",
    "comment": "- `sapply()` returns a vector; `lapply()` returns a list.\n- `order()` gives the positions in sorted order; use them as an index.\n- Homework 2, Problem 1 Part 3.",
    "key": false
   }
  ],
  "notes": "Start from the template that matches the question, rename things, and change the body.\n\n**How to read a function question**\n\n1. The **name** and **arguments** are given: `fun2 <- function(n) { }`.\n2. Underline what it must **return**. One thing goes in `return(x)`; several things go in `return(list(A = a, B = b))`.\n3. If it says \"simulate\", \"random\" or \"roll\", you need `set.seed(1)` and `sample()` or `rnorm()`.\n4. If it says \"for each element\", \"every value\" or \"repeat\", you need a `for` loop.\n5. Finish by **calling it with the test values** the question gives, so the output is printed.\n\n**Debugging checklist**\n\n- Every `(`, `{` and `\"` is closed.\n- The object you build inside the loop was created **before** the loop (`result <- c()`, `count <- 0`).\n- You return the object you built, not the input.\n- `if ()` gets one TRUE/FALSE. To test a whole vector, use `ifelse()` or a loop.\n- Run the function with a tiny input you can check by hand.",
  "takeaways": [
   "Template: name <- function(arg1, arg2 = default) { ...; return(result) }",
   "Create the result object (c(), 0, matrix(0, ...)) before the loop, then fill it inside the loop.",
   "Several outputs: return(list(Name1 = a, Name2 = b)).",
   "Simulation: set.seed(1) first, then sample(1:6, n, replace = TRUE) or rnorm(n, mean, sd).",
   "Use next to skip an element and break to stop the loop early."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-02": {
  "type": "prac",
  "num": "02",
  "title": "Vectors, lists, matrices and factors",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "vectors",
   "subsetting",
   "append",
   "lists",
   "matrices",
   "factors",
   "cbind",
   "rbind"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-02-c01",
    "label": "Vectors: create, length, append",
    "question": "Create a vector in several ways and add elements at specific positions.",
    "code": "v1 <- c(2.5, 4.5, 6.5, 8.5)\nv2 <- seq(2.5, 8.5, by = 2)\nv3 <- seq(2.5, 8.5, length.out = 4)\nv4 <- 1:5\nv5 <- rep(c(\"A\", \"B\"), times = 3)\nlength(v1)\n#> [1] 4\n\nv2 <- append(v2, 10, after = 1)     # 10 becomes the 2nd element\nv2 <- append(v2, 20, after = 0)     # 20 becomes the 1st element\nv2 <- c(v2, 40)                     # 40 at the end\nv2\n#> [1] 20.0  2.5 10.0  4.5  6.5  8.5 40.0",
    "comment": "- `after = 0` puts the value first; `after = length(v)` puts it last.\n- Homework 1, Problem 1.",
    "key": true
   },
   {
    "id": "rev-02-c02",
    "label": "Vectors: subsetting and changing values",
    "question": "Extract elements by position or by a condition, and replace values.",
    "code": "orders <- c(18, 24, 15, 31, 27, 22, 35, 19, 28, 40, 26, 33)\n\norders[1:4]                    # first four\n#> [1] 18 24 15 31\norders[c(3, 6, 9, 12)]         # specific positions\n#> [1] 15 22 28 33\norders[-c(1, length(orders))]  # all except first and last\n#>  [1] 24 15 31 27 22 35 19 28 40 26\norders[orders > 25]            # only values above 25\n#> [1] 31 27 35 28 40 26 33\norders[orders > 25 & orders %% 2 != 0]   # above 25 AND odd\n#> [1] 31 27 35 33\n\norders[4] <- 29                # replace one value\n27 %in% orders                 # is 27 in the vector?\n#> [1] TRUE\nwhich(orders == max(orders))   # position of the largest\n#> [1] 10\norders * 1.10                  # vectorized: every value +10%\n#>  [1] 19.8 26.4 16.5 31.9 29.7 24.2 38.5 20.9 30.8 44.0 28.6 36.3",
    "comment": "- Negative indexes **remove**; logical conditions **filter**.\n- Recitation 1, Problem 1.",
    "key": true
   },
   {
    "id": "rev-02-c03",
    "label": "Lists: [ ] vs [[ ]] and $",
    "question": "Create a list with mixed elements and extract or change parts of it.",
    "code": "course <- list(\"Applied Statistical Computing\", 35, c(\"R\", \"Python\"),\n               c(88, 92, 79, 95, 84), list(\"Fall 2026\", TRUE))\n\ncourse[3]            # single brackets: a list\n#> [[1]]\n#> [1] \"R\"      \"Python\"\nclass(course[3])\n#> [1] \"list\"\ncourse[[3]]          # double brackets: the vector itself\n#> [1] \"R\"      \"Python\"\nclass(course[[3]])\n#> [1] \"character\"\ncourse[[3]][2]       # \"Python\"\n#> [1] \"Python\"\ncourse[[4]][4]       # 95\n#> [1] 95\ncourse[[5]][[1]]     # \"Fall 2026\"\n#> [1] \"Fall 2026\"\n\ncourse[[2]] <- 40                    # change an element\ncourse[[3]][2] <- \"SQL\"\ncourse[[6]] <- \"Statistics Department\"   # add a 6th element\ncourse[[4]] <- NULL                  # remove the 4th element\nlength(course)\n#> [1] 5",
    "comment": "- Think of `[ ]` as \"a smaller train\" and `[[ ]]` as \"the cargo in one car\".\n- Setting an element to `NULL` deletes it.\n- Recitation 1, Problem 2.",
    "key": true
   },
   {
    "id": "rev-02-c04",
    "label": "Lists: names, combine, unlist",
    "question": "Combine lists and flatten a list into a vector; explain the result.",
    "code": "info <- list(Name = \"Data Science\", Value = 100, Flag = TRUE)\ninfo$Name                       # $ works when elements have names\n#> [1] \"Data Science\"\n\nextra <- list(\"Statistics\", 50, FALSE)\ncombined1 <- c(info, extra)     # one list with 6 elements\ncombined2 <- list(info, extra)  # a list holding 2 lists\nlength(combined1)\n#> [1] 6\nlength(combined2)\n#> [1] 2\n\nunlist(info)                    # everything becomes character\n#>           Name          Value           Flag \n#> \"Data Science\"          \"100\"         \"TRUE\" ",
    "comment": "- `c()` merges lists; `list()` nests them.\n- `unlist()` coerces to the highest type: logical < integer < double < character.",
    "key": false
   },
   {
    "id": "rev-02-c05",
    "label": "Matrices: create, access, logical replace",
    "question": "Create a matrix by row, extract rows/columns/elements, and replace every element equal to a value.",
    "code": "scores <- matrix(c(82, 75, 91,\n                   68, 88, 8,\n                   8, 70, 95,\n                   77, 8, 84), ncol = 3, byrow = TRUE)\nscores\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   68   88    8\n#> [3,]    8   70   95\n#> [4,]   77    8   84\n\nscores[3, 2]         # row 3, column 2\n#> [1] 70\nscores[2, ]          # all of row 2\n#> [1] 68 88  8\nscores[, 3]          # all of column 3\n#> [1] 91  8 95 84\nscores[c(1, 4), c(1, 3)]\n#>      [,1] [,2]\n#> [1,]   82   91\n#> [2,]   77   84\n\nscores[scores == 8] <- 0      # every 8 becomes 0 (one line, no assignment in front)\nscores\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   68   88    0\n#> [3,]    0   70   95\n#> [4,]   77    0   84\n\nscores[scores >= 90]          # elements that pass a condition\n#> [1] 91 95\ndim(scores); nrow(scores); ncol(scores)\n#> [1] 4 3\n#> [1] 4\n#> [1] 3",
    "comment": "- Your note had `matrix_8 <- matrix_8[matrix_8 == 8] <- 0`, which replaces the whole matrix with 0. Use the single line shown here.\n- `byrow = TRUE` fills across rows first.",
    "key": true
   },
   {
    "id": "rev-02-c06",
    "label": "Matrices: add and remove rows and columns",
    "question": "Add a column or a row to a matrix and remove rows or columns.",
    "code": "scores <- matrix(c(82, 75, 91, 68, 88, 79), ncol = 3, byrow = TRUE)\n\nscores <- cbind(scores, c(90, 85))          # new column (one value per row)\nscores <- rbind(scores, c(80, 77, 89, 92))  # new row (one value per column)\nscores\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   68   88   79   85\n#> [3,]   80   77   89   92\n\nscores[-2, ]          # drop row 2\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   80   77   89   92\nscores[, -1]          # drop column 1\n#>      [,1] [,2] [,3]\n#> [1,]   75   91   90\n#> [2,]   88   79   85\n#> [3,]   77   89   92\nscores[-2, -1]        # both\n#>      [,1] [,2] [,3]\n#> [1,]   75   91   90\n#> [2,]   77   89   92\nscores + 3            # add 3 to every element\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   78   94   93\n#> [2,]   71   91   82   88\n#> [3,]   83   80   92   95",
    "comment": "- A new column needs as many values as there are **rows**; a new row needs as many as there are **columns**.",
    "key": false
   },
   {
    "id": "rev-02-c07",
    "label": "Factors: levels, counts, groups",
    "question": "Convert a character variable into a factor with specific levels, count its values, or make groups from numbers.",
    "code": "satisfaction <- c(\"High\", \"Low\", \"Medium\", \"High\", \"Low\", \"High\")\nsat <- factor(satisfaction, levels = c(\"Low\", \"Medium\", \"High\"))\nsat\n#> [1] High   Low    Medium High   Low    High  \n#> Levels: Low Medium High\nlevels(sat)\n#> [1] \"Low\"    \"Medium\" \"High\"  \ntable(sat)                       # counts, in level order\n#> sat\n#>    Low Medium   High \n#>      2      1      3 \n\nyears <- c(1, 4, 7, 12, 16, 22)\ntenure <- cut(years, breaks = c(-Inf, 5, 15, Inf),\n              labels = c(\"Short\", \"Medium\", \"Long\"))\ntable(tenure)\n#> tenure\n#>  Short Medium   Long \n#>      2      2      2 ",
    "comment": "- Without `levels =`, R sorts them alphabetically.\n- `cut()` makes groups from a number; `breaks` are the boundaries (Recitation 3, Question 3).",
    "key": true
   }
  ],
  "notes": "Vectors, matrices and factors hold **one type** (homogeneous). Lists and data frames can mix types (heterogeneous).",
  "takeaways": [
   "seq(2.5, 14.5, by = 2) and seq(2.5, 14.5, length.out = 7) make the same vector.",
   "append(x, value, after = k) puts the value in position k + 1.",
   "x[-c(1, 12)] drops elements; x[x > 25] keeps the ones that pass.",
   "list[[2]] gives the element; list[2] gives a one-element list.",
   "unlist() turns everything into the most general type (often character).",
   "Matrix: m[row, column]; m[2, ] is a whole row, m[, 3] a whole column.",
   "factor(x, levels = c(...)) sets the order of the categories."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-03": {
  "type": "prac",
  "num": "03",
  "title": "Data frames: the data set question",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "data frames",
   "read.csv",
   "str",
   "summary",
   "subsetting",
   "tapply",
   "quantile",
   "factors",
   "order"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-03-c01",
    "label": "Import a CSV (stringsAsFactors)",
    "question": "Import the data set into R, making sure character variables become factors.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\nwrite.csv(employees, \"employees.csv\", row.names = FALSE)   # (makes a file to practice on)\n\ndf <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\nstr(df)\n#> 'data.frame':\t8 obs. of  5 variables:\n#>  $ Employee  : Factor w/ 8 levels \"Anna\",\"Ben\",\"Carla\",..: 1 2 3 4 5 6 7 8\n#>  $ Department: Factor w/ 3 levels \"Analytics\",\"Finance\",..: 1 3 1 2 3 1 2 1\n#>  $ Experience: int  2 7 5 9 3 6 8 4\n#>  $ Salary    : int  68000 85000 79000 105000 72000 92000 99000 76000\n#>  $ Remote    : logi  TRUE FALSE TRUE FALSE TRUE FALSE ...\n\n# read.table() is the general version: say there is a header and what separates values\ndf2 <- read.table(\"employees.csv\", header = TRUE, sep = \",\", stringsAsFactors = TRUE)\ndim(df2)\n#> [1] 8 5",
    "comment": "- On the exam, put the CSV in your working directory (`getwd()` shows it) or use the full path.\n- `str()` should show `Factor` for text columns. If it says `chr`, you forgot `stringsAsFactors = TRUE`.",
    "key": true
   },
   {
    "id": "rev-03-c02",
    "label": "Look at the data",
    "question": "Examine the structure, a summary of variables, the first rows and the dimensions.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nstr(employees)\n#> 'data.frame':\t8 obs. of  5 variables:\n#>  $ Employee  : chr  \"Anna\" \"Ben\" \"Carla\" \"David\" ...\n#>  $ Department: chr  \"Analytics\" \"Marketing\" \"Analytics\" \"Finance\" ...\n#>  $ Experience: num  2 7 5 9 3 6 8 4\n#>  $ Salary    : num  68000 85000 79000 105000 72000 92000 99000 76000\n#>  $ Remote    : logi  TRUE FALSE TRUE FALSE TRUE FALSE ...\nsummary(employees)\n#>    Employee          Department          Experience       Salary      \n#>  Length:8           Length:8           Min.   :2.00   Min.   : 68000  \n#>  Class :character   Class :character   1st Qu.:3.75   1st Qu.: 75000  \n#>  Mode  :character   Mode  :character   Median :5.50   Median : 82000  \n#>                                        Mean   :5.50   Mean   : 84500  \n#>                                        3rd Qu.:7.25   3rd Qu.: 93750  \n#>                                        Max.   :9.00   Max.   :105000  \n#>    Remote       \n#>  Mode :logical  \n#>  FALSE:3        \n#>  TRUE :5        \nhead(employees, 3)\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\ndim(employees)\n#> [1] 8 5\ncolnames(employees)\n#> [1] \"Employee\"   \"Department\" \"Experience\" \"Salary\"     \"Remote\"    ",
    "comment": "- Use `head()` after each change to show the manipulation worked, as mentioned in the review session.",
    "key": true
   },
   {
    "id": "rev-03-c03",
    "label": "Subset columns and rows",
    "question": "Extract a column (as a data frame and as a vector), specific rows and columns, or rows meeting conditions.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nemployees[\"Salary\"]                 # data frame\n#>   Salary\n#> 1  68000\n#> 2  85000\n#> 3  79000\n#> 4 105000\n#> 5  72000\n#> 6  92000\n#> 7  99000\n#> 8  76000\nemployees[[\"Salary\"]]               # vector\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000\nemployees$Salary                    # vector\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000\n\nemployees[, c(\"Employee\", \"Department\", \"Salary\")]\n#>   Employee Department Salary\n#> 1     Anna  Analytics  68000\n#> 2      Ben  Marketing  85000\n#> 3    Carla  Analytics  79000\n#> 4    David    Finance 105000\n#> 5     Emma  Marketing  72000\n#> 6    Frank  Analytics  92000\n#> 7    Grace    Finance  99000\n#> 8    Henry  Analytics  76000\nemployees[2:6, c(\"Employee\", \"Experience\")]\n#>   Employee Experience\n#> 2      Ben          7\n#> 3    Carla          5\n#> 4    David          9\n#> 5     Emma          3\n#> 6    Frank          6\n\nemployees[employees$Experience >= 5, ]                           # one condition\n#>   Employee Department Experience Salary Remote\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE\nemployees[employees$Department == \"Analytics\" & employees$Remote, ]   # AND\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE\nemployees[employees$Salary > 95000 | employees$Experience < 3, ]   # OR\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE\nemployees[employees$Department %in% c(\"Finance\", \"Marketing\"), ]\n#>   Employee Department Experience Salary Remote\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 4    David    Finance          9 105000  FALSE\n#> 5     Emma  Marketing          3  72000   TRUE\n#> 7    Grace    Finance          8  99000   TRUE",
    "comment": "- Inside `[rows, columns]`, the condition goes **before** the comma.\n- Text must match exactly, including capitals: `\"Analytics\"`.",
    "key": true
   },
   {
    "id": "rev-03-c04",
    "label": "Add and change columns and rows",
    "question": "Add new variables, change a specific value, and add a new row.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nemployees$Salary_K <- employees$Salary / 1000\nemployees$Senior <- ifelse(employees$Experience >= 6, TRUE, FALSE)\nemployees[employees$Employee == \"Carla\", \"Salary\"] <- 82000\n\nnew_row <- data.frame(Employee = \"Irene\", Department = \"Marketing\", Experience = 10,\n                      Salary = 101000, Remote = FALSE, Salary_K = 101, Senior = TRUE)\nemployees <- rbind(employees, new_row)\ntail(employees, 3)\n#>   Employee Department Experience Salary Remote Salary_K Senior\n#> 7    Grace    Finance          8  99000   TRUE       99   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE       76  FALSE\n#> 9    Irene  Marketing         10 101000  FALSE      101   TRUE\n\nbonus <- c(1, 2, 1, 3, 2, 1, 2, 1, 3)\nemployees <- cbind(employees, Bonus = bonus)    # add a column with cbind\nhead(employees, 3)\n#>   Employee Department Experience Salary Remote Salary_K Senior Bonus\n#> 1     Anna  Analytics          2  68000   TRUE       68  FALSE     1\n#> 2      Ben  Marketing          7  85000  FALSE       85   TRUE     2\n#> 3    Carla  Analytics          5  82000   TRUE       79  FALSE     1",
    "comment": "- A new row from `rbind()` needs **every** column, with the same names.\n- Recitation 1, Problem 4.",
    "key": true
   },
   {
    "id": "rev-03-c05",
    "label": "Convert character columns to factors with levels",
    "question": "Convert each character variable into a factor and define its levels.",
    "code": "df <- data.frame(Dept = c(\"HR\", \"Sales\", \"HR\", \"IT\"),\n                 Level = c(\"Low\", \"High\", \"Medium\", \"Low\"),\n                 Pay = c(50, 70, 55, 65))\n\ndf$Dept  <- factor(df$Dept)                                   # levels in alphabetical order\ndf$Level <- factor(df$Level, levels = c(\"Low\", \"Medium\", \"High\"))  # your own order\nstr(df)\n#> 'data.frame':\t4 obs. of  3 variables:\n#>  $ Dept : Factor w/ 3 levels \"HR\",\"IT\",\"Sales\": 1 3 1 2\n#>  $ Level: Factor w/ 3 levels \"Low\",\"Medium\",..: 1 3 2 1\n#>  $ Pay  : num  50 70 55 65\n\n# Every character column at once\ndf2 <- data.frame(A = c(\"x\", \"y\"), B = c(\"u\", \"v\"), C = 1:2)\nchar_cols <- sapply(df2, is.character)\ndf2[char_cols] <- lapply(df2[char_cols], factor)\nstr(df2)\n#> 'data.frame':\t2 obs. of  3 variables:\n#>  $ A: Factor w/ 2 levels \"x\",\"y\": 1 2\n#>  $ B: Factor w/ 2 levels \"u\",\"v\": 1 2\n#>  $ C: int  1 2",
    "comment": "- Define levels when the order means something (Low < Medium < High) so tables and plots come out in that order.",
    "key": false
   },
   {
    "id": "rev-03-c06",
    "label": "Group summaries: tapply, table, proportions",
    "question": "Compute the mean (or median, count, proportion) of a variable for each group.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\ntapply(employees$Salary, employees$Department, mean)\n#> Analytics   Finance Marketing \n#>     78750    102000     78500 \ntapply(employees$Salary, employees$Department, median)\n#> Analytics   Finance Marketing \n#>     77500    102000     78500 \ntable(employees$Department)                  # counts per group\n#> Analytics   Finance Marketing \n#>         4         2         2 \nprop.table(table(employees$Department))      # proportions per group\n#> Analytics   Finance Marketing \n#>      0.50      0.25      0.25 \n\n# Proportion of a condition within each group\ntapply(employees$Remote, employees$Department, mean)\n#> Analytics   Finance Marketing \n#>      0.75      0.50      0.50 \n\n# Which group has the largest mean?\ndept_means <- tapply(employees$Salary, employees$Department, mean)\nnames(which.max(dept_means))\n#> [1] \"Finance\"",
    "comment": "- `tapply(what, by, function)`: the first argument is the number you summarize, the second is the group.\n- The mean of TRUE/FALSE values is the proportion TRUE.\n- Recitation 3, Question 1.",
    "key": true
   },
   {
    "id": "rev-03-c07",
    "label": "Sort, top n, percentiles, spread",
    "question": "Find the top n rows, compare groups above/below a percentile, or compute variance and standard deviation.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nsorted <- employees[order(employees$Salary, decreasing = TRUE), ]\nhead(sorted, 3)                                   # top 3 earners\n#>   Employee Department Experience Salary Remote\n#> 4    David    Finance          9 105000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE\n#> 6    Frank  Analytics          6  92000  FALSE\n\nquantile(employees$Salary, c(0.3, 0.8))           # 30th and 80th percentiles\n#>   30%   80% \n#> 76300 96200 \nq75 <- quantile(employees$Salary, 0.75)\nemployees[employees$Salary > q75, \"Employee\"]\n#> [1] \"David\" \"Grace\"\n\nvar(employees$Salary)\n#> [1] 1.74e+08\nsd(employees$Salary)\n#> [1] 13190.91\nmean(employees$Experience[employees$Salary < median(employees$Salary)])\n#> [1] 3.5",
    "comment": "- `order()` sorts the **rows**; `sort()` only sorts a single vector.\n- Recitation 3, Question 2.",
    "key": true
   }
  ],
  "notes": "For Part 2 of the exam: import, look at the data, filter, summarize by group, then plot (see Rev 06).",
  "takeaways": [
   "read.csv(\"file.csv\", stringsAsFactors = TRUE) turns text columns into factors.",
   "Look first: str(df), summary(df), head(df), colnames(df), dim(df).",
   "Rows that pass a filter: df[df$Age < 50 & df$Dept == \"HR\", ]",
   "df[\"Salary\"] is a data frame; df$Salary and df[[\"Salary\"]] are vectors.",
   "New column: df$New <- ...; conditional column: ifelse(test, yes, no).",
   "Group summary: tapply(df$Salary, df$Department, mean).",
   "Top 5 by salary: head(df[order(df$Salary, decreasing = TRUE), ], 5).",
   "quantile(df$Age, c(0.3, 0.8)) for the 30th and 80th percentiles."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-04": {
  "type": "prac",
  "num": "04",
  "title": "if-else, ifelse() and for loops",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "if-else",
   "nested if-else",
   "ifelse()",
   "for loops",
   "next",
   "break",
   "logical operators"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-04-c01",
    "label": "Nested if-else",
    "question": "Write nested if-else statements that check one condition inside another.",
    "code": "temperature <- 72\nraining <- FALSE\n\nif (raining) {\n  plan <- \"Stay in\"\n} else {\n  if (temperature > 85) {\n    plan <- \"Pool\"\n  } else if (temperature > 60) {\n    plan <- \"Practice outside\"\n  } else {\n    plan <- \"Gym\"\n  }\n}\nprint(plan)\n#> [1] \"Practice outside\"",
    "comment": "- Every `{` needs its `}`; indenting helps you see which `else` belongs to which `if`.",
    "key": false
   },
   {
    "id": "rev-04-c02",
    "label": "ifelse() on a vector",
    "question": "Use ifelse() to create a vector that is TRUE/FALSE (or labels) for every element.",
    "code": "exam_scores <- c(94, 82, 76, 68, 88, 91, 73, 59)\nhomework_rates <- c(0.95, 0.84, 0.98, 0.90, 0.72, 0.88, 0.79, 1.00)\n\neligible <- ifelse(exam_scores >= 75 & homework_rates >= 0.80, TRUE, FALSE)\neligible\n#> [1]  TRUE  TRUE  TRUE FALSE FALSE  TRUE FALSE FALSE\n\ngrade <- ifelse(exam_scores >= 90, \"A\",\n          ifelse(exam_scores >= 80, \"B\", \"C or below\"))\ngrade\n#> [1] \"A\"          \"B\"          \"C or below\" \"C or below\" \"B\"         \n#> [6] \"A\"          \"C or below\" \"C or below\"",
    "comment": "- `ifelse()` is the vector version of `if`.\n- Recitation 2, Problem 1 Part II.",
    "key": true
   },
   {
    "id": "rev-04-c03",
    "label": "for loop with next and break",
    "question": "Use a for loop that skips some values (next) and stops early (break).",
    "code": "values <- c(3, -2, 8, 0, 5, 12, 7)\nkept <- c()\n\nfor (v in values) {\n  if (v <= 0) {\n    next                 # skip zero and negatives\n  }\n  if (v > 10) {\n    break                # stop completely at the first value over 10\n  }\n  kept <- c(kept, v)\n}\nkept\n#> [1] 3 8 5",
    "comment": "- Build the result by starting empty (`c()`) and adding with `c(kept, v)`.",
    "key": true
   },
   {
    "id": "rev-04-c04",
    "label": "for loop that fills a vector of odd numbers",
    "question": "Use a loop to fill a vector with numbers meeting conditions (e.g. odd numbers under 30 not divisible by 3).",
    "code": "vector7 <- c()\nfor (n in 1:29) {\n  if (n %% 2 == 1 & n %% 3 != 0) {\n    vector7 <- c(vector7, n)\n  }\n}\nvector7\n#>  [1]  1  5  7 11 13 17 19 23 25 29",
    "comment": "- Homework 1, Problem 4 Part 3 (asked with a while loop there; here the for-loop version).",
    "key": false
   }
  ],
  "notes": "Lecture 5 covers these. Exam questions use **for loops** only.",
  "takeaways": [
   "if (one TRUE/FALSE) { } else if (...) { } else { }",
   "ifelse(vector_test, value_if_true, value_if_false) works on a whole vector.",
   "for (i in 1:length(x)) gives positions; for (value in x) gives values.",
   "next skips to the next iteration; break exits the loop.",
   "Comparisons: == != < <= > >=; combine with & (and), | (or), ! (not)."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-05": {
  "type": "prac",
  "num": "05",
  "title": "apply, lapply, sapply, mapply and tapply",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "apply",
   "lapply",
   "sapply",
   "mapply",
   "tapply",
   "apply family"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-05-c01",
    "label": "apply on rows and columns",
    "question": "Use apply() to compute a summary for each row or each column of a matrix.",
    "code": "m <- matrix(c(5, 7, 9, 6, 12, 14, 10, 17, 3), nrow = 3, byrow = TRUE)\napply(m, 1, sum)        # row sums\n#> [1] 21 32 30\napply(m, 2, mean)       # column means\n#> [1]  7.000000 12.000000  8.666667\napply(m, 1, function(row) max(row) - min(row))   # your own function\n#> [1]  4  8 14",
    "comment": "- The `1`/`2` is the MARGIN: 1 = rows, 2 = columns.",
    "key": true
   },
   {
    "id": "rev-05-c02",
    "label": "lapply and sapply on a list",
    "question": "Apply a function to every element of a list.",
    "code": "scores <- list(c(20, 13, 34, 2), c(2, 3), c(45, 65, 78))\nlapply(scores, mean)     # list output\n#> [[1]]\n#> [1] 17.25\n#> [[2]]\n#> [1] 2.5\n#> [[3]]\n#> [1] 62.66667\nsapply(scores, mean)     # vector output\n#> [1] 17.25000  2.50000 62.66667\nsapply(scores, length)\n#> [1] 4 2 3\nsapply(scores, function(x) x[x > 10])   # can return different lengths\n#> [[1]]\n#> [1] 20 13 34\n#> [[2]]\n#> numeric(0)\n#> [[3]]\n#> [1] 45 65 78",
    "comment": "- If each result has a different length, `sapply()` gives back a list anyway.",
    "key": true
   },
   {
    "id": "rev-05-c03",
    "label": "mapply on pairs (dice comparison)",
    "question": "Compare two vectors element by element with mapply and return a factor with set levels.",
    "code": "set.seed(1)\ndie1 <- sample(1:6, 8, replace = TRUE)\ndie2 <- sample(1:6, 8, replace = TRUE)\n\ncompare <- mapply(function(a, b) {\n  if (a > b) \"Die1 > Die2\" else if (a < b) \"Die1 < Die2\" else \"Die1 = Die2\"\n}, die1, die2)\n\ncomparison <- factor(compare, levels = c(\"Die1 > Die2\", \"Die1 < Die2\", \"Die1 = Die2\"))\ndata.frame(die1, die2, comparison)\n#>   die1 die2  comparison\n#> 1    1    3 Die1 < Die2\n#> 2    4    3 Die1 > Die2\n#> 3    1    1 Die1 = Die2\n#> 4    2    5 Die1 < Die2\n#> 5    5    5 Die1 = Die2\n#> 6    3    2 Die1 > Die2\n#> 7    6    6 Die1 = Die2\n#> 8    2    6 Die1 < Die2\ntable(comparison)\n#> comparison\n#> Die1 > Die2 Die1 < Die2 Die1 = Die2 \n#>           2           3           3 ",
    "comment": "- In `mapply()` the **function comes first**, then the vectors.\n- Homework 2, Problem 1 Part 1.",
    "key": true
   },
   {
    "id": "rev-05-c04",
    "label": "tapply for subgroup analysis",
    "question": "Break down means and medians of a variable across groups.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\ntapply(employees$Salary, employees$Department, mean)\n#> Analytics   Finance Marketing \n#>     78750    102000     78500 \ntapply(employees$Salary, employees$Department, median)\n#> Analytics   Finance Marketing \n#>     77500    102000     78500 \ntapply(employees$Salary, list(employees$Department, employees$Remote), mean)   # two groupings\n#>            FALSE     TRUE\n#> Analytics  92000 74333.33\n#> Finance   105000 99000.00\n#> Marketing  85000 72000.00",
    "comment": "- Two groupings give a table (NA means that combination doesn't exist).\n- `aggregate(Salary ~ Department, data = employees, FUN = mean)` gives the same as a data frame.",
    "key": true
   }
  ],
  "notes": "| Function | Input | Does | Output |\n|---|---|---|---|\n| `apply(m, 1, f)` | matrix | f on each **row** | vector |\n| `apply(m, 2, f)` | matrix | f on each **column** | vector |\n| `lapply(lst, f)` | list/vector | f on each element | **list** |\n| `sapply(lst, f)` | list/vector | f on each element | vector |\n| `mapply(f, x, y)` | 2+ vectors | f on pairs x[1],y[1]; x[2],y[2]... | vector |\n| `tapply(x, group, f)` | vector + group | f within each group | named vector |",
  "takeaways": [
   "apply(m, 1, f) = rows; apply(m, 2, f) = columns.",
   "lapply returns a list; sapply simplifies to a vector.",
   "mapply(function(a, b) ..., x, y) works on pairs of elements.",
   "tapply(values, groups, f) is subgroup analysis."
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "rev-06": {
  "type": "prac",
  "num": "06",
  "title": "Plots, rnorm() and sample()",
  "date": "",
  "exams": [
   "Midterm 1"
  ],
  "topics": [
   "histograms",
   "boxplots",
   "barplots",
   "scatterplots",
   "par",
   "rnorm",
   "sample",
   "set.seed"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "rev-06-c01",
    "label": "Histogram",
    "question": "Plot a histogram of a numeric variable with labels, colors and a set number of bins.",
    "code": "set.seed(1)\nsalary <- rnorm(200, mean = 80000, sd = 12000)\nhist(salary, breaks = 10,\n     main = \"Distribution of Salary\", xlab = \"Salary (USD)\", ylab = \"Frequency\",\n     col = \"lightblue\", border = \"darkblue\")",
    "comment": "- `breaks = 10` suggests about 10 bins; R may adjust slightly.",
    "key": true
   },
   {
    "id": "rev-06-c02",
    "label": "Boxplot by group (with notch)",
    "question": "Create boxplots of a numeric variable across categories, with labels, colors and notches.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nboxplot(Salary ~ Department, data = employees,\n        main = \"Salary by Department\", xlab = \"Department\", ylab = \"Salary (USD)\",\n        col = c(\"salmon\", \"lightgreen\", \"lightblue\"), border = \"gray30\",\n        notch = TRUE)",
    "comment": "- Formula `y ~ group`: the number on the left, the grouping factor on the right.\n- Points beyond the whiskers are outliers.\n- R warns that notches go outside the hinges when groups are small; the plot still works.",
    "key": true
   },
   {
    "id": "rev-06-c03",
    "label": "Barplot (and side-by-side)",
    "question": "Show counts of a categorical variable with a barplot, including side-by-side bars for two variables.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\ncounts <- table(employees$Department)\nbarplot(counts, main = \"Employees per Department\", xlab = \"Department\", ylab = \"Count\",\n        col = \"orange\", names.arg = c(\"ANALYTICS\", \"FINANCE\", \"MARKETING\"))\n\ntwo_way <- table(employees$Remote, employees$Department)\nbarplot(two_way, beside = TRUE, col = c(\"gray\", \"steelblue\"),\n        main = \"Remote by Department\", legend.text = c(\"On site\", \"Remote\"))",
    "comment": "- `names.arg` renames the bars (Recitation 3, Question 3).\n- `horiz = TRUE` makes horizontal bars.",
    "key": true
   },
   {
    "id": "rev-06-c04",
    "label": "Scatterplot colored by group",
    "question": "Plot one variable against another with point shape, size and color by group, plus a legend.",
    "code": "employees <- data.frame(\n  Employee   = c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\", \"Henry\"),\n  Department = c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\",\n                 \"Marketing\", \"Analytics\", \"Finance\", \"Analytics\"),\n  Experience = c(2, 7, 5, 9, 3, 6, 8, 4),\n  Salary     = c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000),\n  Remote     = c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\n)\n\nplot(employees$Experience, employees$Salary,\n     main = \"Salary vs Experience\", xlab = \"Years of experience\", ylab = \"Salary (USD)\",\n     pch = 17, cex = 0.9,\n     col = ifelse(employees$Remote, \"orange\", \"darkgreen\"))\nlegend(\"topleft\", legend = c(\"Remote\", \"On site\"), col = c(\"orange\", \"darkgreen\"), pch = 17)",
    "comment": "- `pch = 17` is a filled triangle; `cex` sets point size.\n- Homework 2, Problem 2 Part 7 asks for exactly this kind of plot.",
    "key": false
   },
   {
    "id": "rev-06-c05",
    "label": "Two plots side by side",
    "question": "Put two plots (e.g. histograms before and after filtering) next to each other in one image.",
    "code": "set.seed(1)\nhours <- rnorm(200, mean = 45, sd = 6)\npar(mfrow = c(1, 2))\nhist(hours, main = \"All employees\", xlab = \"Hours\", col = \"lightblue\", breaks = 10)\nhist(hours[hours <= 50], main = \"50 hours or less\", xlab = \"Hours\", col = \"lightpink\", breaks = 10)\npar(mfrow = c(1, 1))     # reset",
    "comment": "- `c(1, 2)` = 1 row, 2 columns of plots. Reset afterwards so later plots aren't squeezed.",
    "key": false
   },
   {
    "id": "rev-06-c06",
    "label": "rnorm, sample and set.seed basics",
    "question": "Generate random normal data or random samples reproducibly.",
    "code": "set.seed(1)\nx <- rnorm(5, mean = 10, sd = 2)       # 5 draws from Normal(10, sd 2)\nx\n#> [1]  8.747092 10.367287  8.328743 13.190562 10.659016\n\nset.seed(1)\nsample(1:6, 3)                         # 3 rolls, no repeats\n#> [1] 1 4 3\nsample(1:6, 10, replace = TRUE)        # 10 rolls, repeats allowed\n#>  [1] 1 2 5 3 6 2 3 3 1 5\nsample(c(\"H\", \"T\"), 5, replace = TRUE, prob = c(0.7, 0.3))   # unfair coin\n#> [1] \"T\" \"H\" \"T\" \"T\" \"H\"\n\nset.seed(1)\nrnorm(5, mean = 10, sd = 2)            # same seed, same numbers as x\n#> [1]  8.747092 10.367287  8.328743 13.190562 10.659016",
    "comment": "- Same seed and same code give the same numbers, which is why the exam asks for `set.seed(1)`.\n- Put `set.seed(1)` **inside** the function so every call matches.",
    "key": true
   }
  ],
  "notes": "**Right input for each plot**\n\n- `hist(x)`: one **numeric** vector.\n- `boxplot(y ~ group, data = df)`: numeric `y` split by a factor.\n- `barplot(table(f))`: **counts**, so wrap a factor in `table()` first.\n- `plot(x, y)`: two numeric vectors of the same length.\n\nAlways add `main =`, `xlab =`, `ylab =` and colors when the question asks you to customize.",
  "takeaways": [
   "hist(x, main, xlab, col, border, breaks = 10)",
   "boxplot(Salary ~ Group, data = df, notch = TRUE, col = ...)",
   "barplot(table(f), names.arg = ..., col = ...); beside = TRUE for side-by-side bars.",
   "par(mfrow = c(1, 2)) puts two plots next to each other.",
   "set.seed(1); rnorm(n, mean, sd); sample(x, size, replace = TRUE, prob = ...)"
  ],
  "updatedAt": "2026-10-12T17:45:00Z"
 },
 "lec-04": {
  "type": "lec",
  "num": "04",
  "title": "R Markdown: writing and knitting homework files",
  "date": "",
  "exams": [],
  "topics": [
   "R Markdown",
   "knitting",
   "chunk options",
   "markdown formatting"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "lec-04-c01",
    "label": "Creating and knitting an R Markdown file",
    "question": "R Markdown files (.Rmd) combine text, code and results. Homework is submitted as a PDF, which needs a LaTeX distribution (TinyTeX). The YAML header stores the title, author and output format.",
    "code": "# Run once in the Console (installs LaTeX so you can knit to PDF)\ntinytex::install_tinytex()\n\n# New file: File > New File > R Markdown...\n# The YAML header at the top of the file looks like this:\n# ---\n# title: \"Homework Assignment 2\"\n# author: \"Your Name\"\n# output: pdf_document\n# ---\n\n# Knit: click the Knit button (top of the editor)\n#   - HTML while you are fixing errors (shows in the Viewer tab)\n#   - PDF for the final version you submit",
    "comment": "**Workflow for every homework**\n1. **Once per computer:** run `tinytex::install_tinytex()` in the Console. Without it, knitting to PDF fails.\n2. **New file:** File → New File → R Markdown…, then delete the example text below the YAML header.\n3. **YAML header** (between the `---` lines): title, author, `output: pdf_document`.\n4. Write each question as a header, put the code in chunks, and add any explanation as plain text.\n5. **Knit to HTML** while you're working: it's faster and errors are easier to spot.\n6. **Knit to PDF** for the final version and submit that.\n\n**Why knitting catches the repeat-run problem:** knitting runs the whole file **once, top to bottom, in a fresh session**. If your code only works because of something you ran earlier in the Console, the knit fails. That's what the grader sees, so knit early.\n\n**If knitting fails:** read the line number in the error, then run the chunks above it in order (Run → Run All) to find the one that breaks.",
    "key": false
   },
   {
    "id": "lec-04-c02",
    "label": "Text formatting with Markdown",
    "question": "Markdown is the plain-text formatting used in the text parts of an R Markdown file: headers, bold and italics, lists, tables, links, equations and line breaks.",
    "code": "# Top Level Header (for example, Question 1)\n## Second Level Header (for example, Question 1 part a)\n### Third Level Header\n\n**bold**   _italics_   ~~crossed out~~\n\n> A block quote\n\n* Bullet point 1\n* Bullet point 2\n  * bullet point 2a\n\n1. Numbered point 1\n2. Numbered point 2\n\nFirst Header  | Second Header\n------------- | -------------\nContent Cell  | Content Cell\n\n[Your first link](http://posit.co)\n\nInline equation: $A = \\pi*r^{2}$\n\n***            (horizontal line)\n\\newpage       (start a new page in the PDF)",
    "comment": "**What you'll actually use in homework**\n- `#` / `##` headers for each question and part, so the PDF is easy to grade.\n- `**bold**` for the answer sentence when a question asks you to explain.\n- Plain sentences under the code to interpret the output (\"The mean salary is higher in…\").\n\n**Spacing rules that trip people up**\n- A blank line is needed **between paragraphs**. Two lines with no blank line between them run together.\n- A blank line is needed **before a list** or the bullets won't render.\n- A header needs a space after the `#`: `# Question 1`, not `#Question 1`.\n\n**Careful:** inside an R chunk, `#` starts a **comment**, not a header. Headers only work in the text parts, outside the ```{r} ``` fences.",
    "key": false
   },
   {
    "id": "lec-04-c03",
    "label": "R chunks and chunk options",
    "question": "Code runs inside chunks that start with ```{r} and end with ```. Chunk options (eval, include, echo, results) control whether the code runs and whether the code and output appear in the final document.",
    "code": "```{r}\nprint(2 + 2)\n```\n#> [1] 4\n\n```{r, eval = FALSE}\nprint(2 + 2)        # shown, NOT run, no output\n```\n\n```{r, include = FALSE}\nprint(2 + 2)        # run, but neither code nor output shown\n```\n\n```{r, echo = FALSE}\nprint(2 + 2)        # output shown, code hidden\n```\n\n```{r, results = 'hide'}\nprint(2 + 2)        # code shown, output hidden\n```",
    "comment": "**Default: always show code and output.** The course says to include the code in every homework answer unless told otherwise, so most chunks are plain ```{r}.\n\n| Option | Runs the code? | Shows code? | Shows output? | Use it for |\n|---|---|---|---|---|\n| (none) | yes | yes | yes | almost every answer |\n| `eval = FALSE` | **no** | yes | no | showing code that would break or take forever |\n| `include = FALSE` | yes | no | no | setup, e.g. `library(dplyr)` |\n| `echo = FALSE` | yes | **no** | yes | showing only a plot/result |\n| `results = 'hide'` | yes | yes | **no** | hiding a long printout |\n\n**Shortcuts:** insert a chunk with **Cmd + Option + I** (Mac). Run the current line with **Cmd + Enter**, the whole chunk with **Cmd + Shift + Enter**.\n\n**Watch out:** `eval = FALSE` code never runs, so any object it would have created doesn't exist for later chunks.",
    "key": false
   }
  ],
  "notes": "How to build homework files in R Markdown (`.Rmd`): text + R code + output in one PDF. Course notes: https://ap4347.github.io/2102/lecture-04.html",
  "takeaways": [
   "Homework is submitted as a knitted PDF; install TinyTeX once with tinytex::install_tinytex().",
   "Code goes inside ```{r} ... ``` chunks; the output appears under it when you knit.",
   "Knit to HTML while fixing errors, then knit to PDF at the end.",
   "Chunk options: eval = FALSE (show, do not run), echo = FALSE (hide code), include = FALSE (run, hide all), results = \"hide\" (hide output)."
  ],
  "updatedAt": "2026-10-14T16:30:00Z"
 },
 "lec-09": {
  "type": "lec",
  "num": "09",
  "title": "Probability: binomial, geometric and normal distributions; random data",
  "date": "",
  "exams": [],
  "topics": [
   "probability",
   "dbinom",
   "pbinom",
   "dgeom",
   "pgeom",
   "dnorm",
   "pnorm",
   "qnorm",
   "rnorm",
   "set.seed",
   "sample"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "lec-09-c01",
    "label": "Binomial: dbinom() for exactly x successes",
    "question": "Your train is on time with probability 0.7 each day, independently, for 5 days (n = 5, p = 0.7). What is the probability you attend exactly 3 meetings?",
    "code": "dbinom(x = 3, size = 5, prob = 0.7)\n#> [1] 0.3087\n\nchoose(n = 5, k = 3)*(0.7^3)*(0.3^2)\n#> [1] 0.3087",
    "comment": "**Is it binomial?** Check the 4 conditions: a **fixed** number of trials (5 days), each trial is success/failure (on time or late), trials are **independent**, and the **same** probability each time (0.7). All four hold → `binom`.\n\n**Reading the call:** `dbinom(x = 3, size = 5, prob = 0.7)`\n- `x` = number of successes you're asking about\n- `size` = number of trials (n)\n- `prob` = success probability per trial (p)\n\n**Result:** 0.3087. The second line checks it by hand with the formula C(5,3) × 0.7³ × 0.3².\n\n**\"Exactly\" → `d`.** For \"at most\" or \"at least\", see `pbinom()` below.",
    "key": false
   },
   {
    "id": "lec-09-c02",
    "label": "Binomial: pbinom() for at most x successes",
    "question": "What is the probability you attend at most 4 meetings (0, 1, 2, 3 or 4)?",
    "code": "pbinom(q = 4, size = 5, prob = 0.7)\n#> [1] 0.83193\n\ndbinom(x = 0, size = 5, prob = 0.7) +\ndbinom(x = 1, size = 5, prob = 0.7) + \ndbinom(x = 2, size = 5, prob = 0.7) + \ndbinom(x = 3, size = 5, prob = 0.7) + \ndbinom(x = 4, size = 5, prob = 0.7)\n#> [1] 0.83193",
    "comment": "**\"At most 4\" = P(X ≤ 4) → `pbinom(q = 4, size = 5, prob = 0.7)` = 0.83193.** The second block shows it's just `dbinom()` for 0, 1, 2, 3 and 4 added up.\n\n**Turning other wordings into `pbinom()`** (n = 5, p = 0.7):\n\n| Question | Math | R |\n|---|---|---|\n| at most 4 | P(X ≤ 4) | `pbinom(4, 5, 0.7)` |\n| fewer than 4 | P(X ≤ 3) | `pbinom(3, 5, 0.7)` |\n| at least 3 | 1 − P(X ≤ 2) | `1 - pbinom(2, 5, 0.7)` = 0.83692 |\n| more than 4 | 1 − P(X ≤ 4) | `1 - pbinom(4, 5, 0.7)` |\n\n**Trap:** for counts, \"at least 3\" means 3 is included, so subtract `pbinom(2, ...)`, not `pbinom(3, ...)`.",
    "key": false
   },
   {
    "id": "lec-09-c03",
    "label": "Geometric: dgeom() (read the warning)",
    "question": "Each newborn is a girl with probability 0.55, independently. Find the probability for the number of children observed until the first girl is born.",
    "code": "dgeom(x = 6, prob = 0.55)\n#> [1] 0.004567071",
    "comment": "**Geometric = how long until the first success** (one parameter, `prob`).\n\n**⚠ Important: R counts *failures before* the first success, not the total number of children.**\n- `dgeom(x = 6, prob = 0.55)` = P(6 boys, then a girl) = 0.45⁶ × 0.55 = **0.004567**. That's the first girl being the **7th** child.\n- The lecture describes this as \"observe 6 children to get the first girl\", but that would be **`dgeom(5, 0.55)`** = 0.45⁵ × 0.55 = **0.0101** (5 boys, then a girl on child 6).\n\n(Both checked in R: `dgeom(6, 0.55)` equals `0.45^6 * 0.55`, and `dgeom(5, 0.55)` equals `0.45^5 * 0.55`.)\n\n**Rule:** if the question counts **trials** (children, rolls, attempts) up to and including the success, use `x = trials - 1` in `dgeom()` and `pgeom()`.",
    "key": false
   },
   {
    "id": "lec-09-c04",
    "label": "Geometric: pgeom() for at most",
    "question": "What is the probability that the first girl is born within the first few children (cumulative)?",
    "code": "pgeom(q = 5, prob = 0.55)\n#> [1] 0.9916962",
    "comment": "**`pgeom(q, prob)` = P(at most q failures before the first success).**\n\n- `pgeom(q = 5, prob = 0.55)` = **0.9917** = P(at most 5 boys before the first girl) = first girl is among the first **6** children. (Check: 1 − 0.45⁶ = 0.9917.)\n- For \"first girl within at most **5** children\" (as the lecture words it), use `pgeom(4, 0.55)` = 1 − 0.45⁵ = **0.9815**.\n\n**Same rule as `dgeom()`:** subtract 1 from a number of trials to get R's number of failures.",
    "key": false
   },
   {
    "id": "lec-09-c05",
    "label": "Normal: dnorm() draws the bell curve",
    "question": "For a normal distribution with mean 2.5 and standard deviation 0.5, compute the height of the density curve over a range of x values and plot it.",
    "code": "x <- seq(-10, 10, by = .1)\n\n\ny <- dnorm(x, mean = 2.5, sd = 0.5)\n\n\nplot(x,y)",
    "comment": "**`dnorm(x, mean, sd)` = height of the bell curve at x.** For a continuous distribution this is **not** a probability (P(X = exactly 2.5) is 0). It's used for drawing the curve.\n\n**Reading the code**\n1. `x <- seq(-10, 10, by = .1)`: a fine grid of x values.\n2. `y <- dnorm(x, mean = 2.5, sd = 0.5)`: the curve's height at each.\n3. `plot(x, y)`: the bell shape, centered at 2.5, narrow because sd is small.\n\n**For probabilities with a normal distribution, use `pnorm()`**, not `dnorm()`.",
    "key": false
   },
   {
    "id": "lec-09-c06",
    "label": "Normal: pnorm() for probabilities",
    "question": "For X ~ Normal(mean = 2, sd = 5): what is the probability that X is less than 3? Between 1.5 and 3?",
    "code": "pnorm(q = 3, mean = 2, sd = 5)\n#> [1] 0.5792597\n\npnorm(q = 3, mean = 2, sd = 5) - pnorm(q = 1.5, mean = 2, sd = 5)\n#> [1] 0.1190875",
    "comment": "**`pnorm(q, mean, sd)` = P(X < q)**, the area to the **left** of q.\n\n**Three shapes of question:**\n\n| Question | R |\n|---|---|\n| less than 3 | `pnorm(3, mean = 2, sd = 5)` = 0.5793 |\n| more than 3 | `1 - pnorm(3, mean = 2, sd = 5)` |\n| between 1.5 and 3 | `pnorm(3, 2, 5) - pnorm(1.5, 2, 5)` = 0.1191 |\n\n**\"Between\":** area left of the bigger value minus area left of the smaller value.\n\n**With continuous distributions, < and ≤ give the same answer**, unlike `pbinom()`, so you don't need the \"subtract 1\" adjustment.\n\n**Check with simulation (ties to `rnorm()`):** `mean(rnorm(100000, 2, 5) < 3)` comes out close to 0.579.",
    "key": true
   },
   {
    "id": "lec-09-c07",
    "label": "Normal: qnorm() for percentiles",
    "question": "Find the 60th percentile (0.6 quantile) of a normal distribution with mean 2 and sd 5.",
    "code": "qnorm(p = 0.6, mean = 2, sd = 5)\n#> [1] 3.266736\n\nqnorm(p = 0.6, mean = 2, sd = 5)\n#> [1] 3.266736\n\npnorm(q = 3.266736, mean = 2, sd = 5)\n#> [1] 0.6",
    "comment": "**`qnorm(p, mean, sd)` goes the other way from `pnorm()`:** you give a probability and get the value.\n- `qnorm(0.6, 2, 5)` = 3.2667, so 60% of values are below 3.27.\n- `pnorm(3.266736, 2, 5)` = 0.6 brings you back, which is why `qnorm` is called the inverse of `pnorm`.\n\n**Common uses**\n- \"Top 10% cutoff\" → `qnorm(0.9, mean, sd)`.\n- Median of a normal → `qnorm(0.5, mean, sd)` = the mean.\n\n**Don't mix it up with `quantile()`:** `quantile(data, 0.6)` finds a percentile of **actual data**. `qnorm(0.6, ...)` finds it for the **theoretical** normal distribution.",
    "key": false
   },
   {
    "id": "lec-09-c08",
    "label": "Normal: rnorm() generates data",
    "question": "Generate 50 observations from a normal distribution with mean 2 and sd 5 and draw a histogram of them.",
    "code": "x <- rnorm(n = 50, mean = 2, sd = 5)\n\nhist(x,\n     \n     xlab = \"VALUES\",\n     \n     ylab = \"FREQUENCY\",\n     \n     main = \"Generating Values from a  Normal Distribution\",\n     \n     col = \"orange\",\n     \n     border = \"black\")",
    "comment": "**`rnorm(n, mean, sd)`: n random values.** This is the one the review session said to focus on.\n\n**Reading the code:** 50 draws → `hist()` with labels, title and colors (the same customization asked for on homework).\n\n**What the exam can ask you to do with the draws:**\n- `mean(x)`, `sd(x)`: close to 2 and 5, not exact (random sample).\n- `mean(x > 3)`: share of values above 3.\n- `any(x < 0)`, `all(x > 0)`: yes/no checks (Homework 2, Problem 1 Part 4).\n- Fill a matrix: `matrix(x, nrow = 2)`.\n\n**Always `set.seed(1)` first** (see the next chunk) so your numbers match every time, and put it **inside** the function if the question asks for a function.\n\n**Third argument = standard deviation.** If a question gives a variance of 25, use `sd = 5`.",
    "key": true
   },
   {
    "id": "lec-09-c09",
    "label": "set.seed() makes random numbers repeatable",
    "question": "Generate 10 random values from Normal(3, 4) several times. Why are they different each time, and how can you get the same values every time?",
    "code": "rnorm(n = 10, mean = 3, sd = 4)\n#>  [1]  8.0432676 -0.7824982  3.5421453  0.0409310  5.2319814\n#>  [6] -0.3997414  0.3470129  2.2136478  1.9628163 -0.4032279\n\nrnorm(n = 10, mean = 3, sd = 4)\n#>  [1]  8.2843920 -2.5887828  5.8872710  1.3211625 -6.9323006\n#>  [6]  1.7536471  0.2038652  0.1838746 -1.1442351 -4.5612113\n\nrnorm(n = 10, mean = 3, sd = 4)\n#>  [1] -0.5264196  4.6432254  9.3326611  1.8002603 12.3218438\n#>  [6]  5.0916077  3.8303269  6.2587804 -4.5151450  6.3218954\n\nset.seed(1)    # Initialize generator to known state\n\nrnorm(n = 10, mean = 3, sd = 4)   # Generate ten random numbers\n#>  [1]  0.4941848  3.7345733 -0.3425144  9.3811232  4.3180311\n#>  [6] -0.2818735  4.9497162  5.9532988  5.3031254  1.7784465\n\nset.seed(1)    # Reinitialize to the same known state\n\nrnorm(n = 10, mean = 3, sd = 4)   # Generate the same ten \"random\" numbers\n#>  [1]  0.4941848  3.7345733 -0.3425144  9.3811232  4.3180311\n#>  [6] -0.2818735  4.9497162  5.9532988  5.3031254  1.7784465",
    "comment": "**Without a seed:** each `rnorm()` call gives new numbers (the first three blocks).\n\n**With `set.seed(1)`:** R's random number generator restarts from the same point, so the same code gives the **same** numbers (last block: both calls print identical values).\n\n**Rules**\n- Call `set.seed(1)` **right before** the random code, every time you want to reproduce it.\n- Inside a function: put `set.seed(1)` as the **first line of the body**, so every call of the function gives the same result.\n- The seed number doesn't matter, but the exam will tell you which one. Different seeds give different numbers.\n- Your numbers will only match the key if you run the same random calls **in the same order** after the seed.",
    "key": true
   },
   {
    "id": "lec-09-c10",
    "label": "sample(): random samples with and without replacement",
    "question": "Randomly select 6 values from 1 to 20, first without replacement and then with replacement.",
    "code": "x <- 1:20\n\nsample(x, 6)\n#> [1]  9 15  5 20 17 14\n\nx <- 1:20\n\nsample(x, 6, replace = TRUE)\n#> [1]  5  5  2 10 12 15",
    "comment": "**`sample(x, size)`**\n- **Without replacement** (default): each value can be picked at most once. Like dealing cards.\n- **`replace = TRUE`:** values can repeat (`5 5` in the output). Like rolling a die.\n\n**Which one?**\n- Rolling dice, flipping coins, repeated trials → `replace = TRUE`.\n- Picking people, drawing a sample of rows → no replacement.\n\n**Error to recognize:** `sample(1:6, 10)` fails (\"cannot take a sample larger than the population\") because you can't pick 10 different values from 6 without replacement.\n\n**Random rows of a data frame:** `df[sample(1:nrow(df), 5), ]`.",
    "key": true
   },
   {
    "id": "lec-09-c11",
    "label": "Random sequences: coins and weighted outcomes",
    "question": "Simulate 15 fair coin tosses. Then simulate 20 tosses of a biased coin that lands heads with probability 0.8.",
    "code": "sample(c(\"H\", \"T\"), 15, replace = TRUE)\n#>  [1] \"H\" \"T\" \"H\" \"T\" \"T\" \"T\" \"T\" \"H\" \"T\" \"T\" \"T\" \"T\" \"T\" \"H\"\n#> [15] \"H\"\n\nsample(c(\"H\", \"T\"), 20, replace = TRUE, prob = c(0.8, 0.2))\n#>  [1] \"H\" \"T\" \"H\" \"H\" \"H\" \"H\" \"H\" \"H\" \"H\" \"H\" \"T\" \"H\" \"H\" \"H\"\n#> [15] \"H\" \"H\" \"H\" \"H\" \"H\" \"T\"",
    "comment": "**Simulating any experiment = `sample(outcomes, number_of_trials, replace = TRUE)`.**\n\n**Weights with `prob =`:** one probability per outcome, **in the same order** as the outcomes:\n`sample(c(\"H\", \"T\"), 20, replace = TRUE, prob = c(0.8, 0.2))` → mostly H.\n\n**Same pattern as the homework/recitation dice problems:**\n- Unfair die: `sample(1:6, n, replace = TRUE, prob = c(0.1, 0.3, 0.2, 0.05, 0.3, 0.05))`\n- Count outcomes: `table(...)`; share of heads: `mean(tosses == \"H\")`.\n\n**Check:** the probabilities must add up to 1 and have the same length as the outcomes.",
    "key": false
   },
   {
    "id": "lec-09-c12",
    "label": "sample(x) shuffles a vector",
    "question": "Generate random permutations (shuffles) of the numbers 1 to 10.",
    "code": "x <- 1:10\n\nprint(x)\n#>  [1]  1  2  3  4  5  6  7  8  9 10\n\nsample(x)             # permutation 1\n#>  [1]  6  1  3  8 10  4  2  7  9  5\n\nsample(x)             # permutation 2\n#>  [1]  4  8  1  9  6 10  3  7  5  2",
    "comment": "**`sample(x)` with no size = shuffle all of x**, each value once in a random order. Each call gives a new order (unless you set a seed).\n\n**Uses**\n- Randomly reorder rows: `df[sample(nrow(df)), ]`.\n- Random assignment: shuffle names, then split into groups.",
    "key": false
   }
  ],
  "notes": "**The d / p / q / r naming pattern** (works for every distribution: `binom`, `geom`, `norm`, `pois`, `unif`, …)\n\n| Prefix | Gives you | Question it answers |\n|---|---|---|\n| `d` | density / probability of **exactly** x | \"probability of exactly 3\" |\n| `p` | cumulative probability **≤ x** | \"probability of at most 4\", \"less than 3\" |\n| `q` | the **value** for a given probability (inverse of `p`) | \"60th percentile\" |\n| `r` | **random** draws | \"generate 50 observations\" |\n\nThe review session said to focus on the **normal distribution and `rnorm()`**, plus `sample()` and `set.seed()`. Course notes: https://ap4347.github.io/2102/lecture-09.html",
  "takeaways": [
   "d = exactly x, p = at most x (≤), q = value for a probability, r = random draws.",
   "P(X > x) = 1 - pnorm(x, mean, sd); P(a < X < b) = pnorm(b, ...) - pnorm(a, ...).",
   "rnorm(n, mean, sd): the third argument is the standard deviation, not the variance.",
   "set.seed(1) before random code makes the results repeat exactly.",
   "sample(x, n, replace = TRUE, prob = ...) for dice, coins and weighted draws.",
   "R's dgeom/pgeom count failures before the first success, not total trials."
  ],
  "updatedAt": "2026-10-14T16:30:00Z"
 },
 "lec-11": {
  "type": "lec",
  "num": "11",
  "title": "dplyr: group_by, summarise, across and joining two tables",
  "date": "",
  "exams": [],
  "topics": [
   "dplyr",
   "group_by",
   "summarise",
   "across",
   "inner_join",
   "left_join",
   "right_join",
   "full_join",
   "semi_join",
   "anti_join",
   "set operations"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "lec-11-c01",
    "label": "group_by(): grouping a data frame",
    "question": "Group the flights data by origin airport, and by origin and carrier.",
    "code": "by_origin <- flights %>% group_by(origin)\n\nby_origin\n#> # A tibble: 336,776 × 19\n#> # Groups:   origin [3]\n#>     year month   day dep_time sched_dep_time dep_delay\n#>    <int> <int> <int>    <int>          <int>     <int>\n#>  1  2013     1     1      517            515         2\n#>  2  2013     1     1      533            529         4\n#>  3  2013     1     1      542            540         2\n#>  4  2013     1     1      544            545        -1\n#>  5  2013     1     1      554            600        -6\n#>  6  2013     1     1      554            558        -4\n#>  7  2013     1     1      555            600        -5\n#>  8  2013     1     1      557            600        -3\n#>  9  2013     1     1      557            600        -3\n#> 10  2013     1     1      558            600        -2\n#> # ℹ 336,766 more rows\n#> # ℹ 13 more variables: arr_time <int>,\n#> #   sched_arr_time <int>, arr_delay <int>, carrier <fct>,\n#> #   flight <int>, tailnum <fct>, origin <fct>, dest <fct>,\n#> #   air_time <int>, distance <int>, hour <int>,\n#> #   minute <int>, time_hour <fct>\n\nby_origin_carrier <- flights %>% group_by(origin, carrier)\n\nby_origin_carrier\n#> # A tibble: 336,776 × 19\n#> # Groups:   origin, carrier [35]\n#>     year month   day dep_time sched_dep_time dep_delay\n#>    <int> <int> <int>    <int>          <int>     <int>\n#>  1  2013     1     1      517            515         2\n#>  2  2013     1     1      533            529         4\n#>  3  2013     1     1      542            540         2\n#>  4  2013     1     1      544            545        -1\n#>  5  2013     1     1      554            600        -6\n#>  6  2013     1     1      554            558        -4\n#>  7  2013     1     1      555            600        -5\n#>  8  2013     1     1      557            600        -3\n#>  9  2013     1     1      557            600        -3\n#> 10  2013     1     1      558            600        -2\n#> # ℹ 336,766 more rows\n#> # ℹ 13 more variables: arr_time <int>,\n#> #   sched_arr_time <int>, arr_delay <int>, carrier <fct>,\n#> #   flight <int>, tailnum <fct>, origin <fct>, dest <fct>,\n#> #   air_time <int>, distance <int>, hour <int>,\n#> #   minute <int>, time_hour <fct>",
    "comment": "**`group_by()` doesn't change the data.** It only tags it: notice `# Groups: origin [3]` (3 airports) and `# Groups: origin, carrier [35]` (35 combinations). The rows are the same.\n\n**The point is what comes next:** any `summarise()`, `mutate()` or `filter()` after `group_by()` runs **separately for each group**.\n\n**Base R equivalent you already know:** `tapply(flights$arr_delay, flights$origin, mean, na.rm = TRUE)`. `group_by` + `summarise` is the dplyr way, and it can do many summaries at once.",
    "key": false
   },
   {
    "id": "lec-11-c02",
    "label": "summarise(): one row per group",
    "question": "Calculate the average arrival delay for each origin airport. Then add the median and the number of flights.",
    "code": "by_origin %>% summarise(Mean = mean(arr_delay, na.rm = T))\n#> # A tibble: 3 × 2\n#>   origin  Mean\n#>   <fct>  <dbl>\n#> 1 EWR     9.11\n#> 2 JFK     5.55\n#> 3 LGA     5.78\n\nby_origin %>% \n  \n  summarise(Mean = mean(arr_delay, na.rm = T),\n            \n            Median = median(arr_delay, na.rm = T),\n            \n            Count = n())\n#> # A tibble: 3 × 4\n#>   origin  Mean Median  Count\n#>   <fct>  <dbl>  <dbl>  <int>\n#> 1 EWR     9.11     -4 120835\n#> 2 JFK     5.55     -6 111279\n#> 3 LGA     5.78     -5 104662",
    "comment": "**`group_by(origin) %>% summarise(Mean = mean(arr_delay, na.rm = T))`** → 3 rows (one per airport), 2 columns (the group + the summary).\n\n**Pieces**\n- `Mean = ...`: you choose the new column's name.\n- `na.rm = T`: **needed**. `arr_delay` has missing values, and without it the mean comes out `NA`.\n- `n()`: counts rows in each group (no argument).\n\n**Useful summary functions:** `mean`, `median`, `sd`, `IQR`, `min`, `max`, `n()`, `n_distinct()`, `first()`, `last()`.\n\n**Exam translation:** \"average ___ for each ___\" → `group_by(each) %>% summarise(avg = mean(___, na.rm = TRUE))`.",
    "key": true
   },
   {
    "id": "lec-11-c03",
    "label": "Combining summarise() with filter() and arrange(); ungroup()",
    "question": "For each carrier, count the flights and the standard deviation of distance; keep carriers with fewer than 10,000 flights and sort by the standard deviation (largest first). Then remove grouping.",
    "code": "by_carrier <- flights %>% group_by(carrier)\n\nby_carrier %>%\n  \n  summarise (Count = n(), Distance_sd = sd(distance)) %>%\n  \n  filter(Count < 10000) %>%\n  \n  arrange(desc(Distance_sd))\n#> # A tibble: 7 × 3\n#>   carrier Count Distance_sd\n#>   <fct>   <int>       <dbl>\n#> 1 OO         32       206. \n#> 2 FL       3260       161. \n#> 3 YV        601       160. \n#> 4 VX       5162        88.0\n#> 5 AS        714         0  \n#> 6 F9        685         0  \n#> 7 HA        342         0\n\nby_carrier %>%\n  \n  ungroup() %>%\n  \n  summarise(flights = n())\n#> # A tibble: 1 × 1\n#>   flights\n#>     <int>\n#> 1  336776",
    "comment": "**Read the pipe as steps:**\n1. `group_by(carrier)`\n2. `summarise(Count = n(), Distance_sd = sd(distance))`: one row per carrier.\n3. `filter(Count < 10000)`: filters the **summary** rows, not the flights. You can filter on columns you just created.\n4. `arrange(desc(Distance_sd))`: largest first.\n\n**`ungroup()`:** removes the grouping so the next summary uses all rows: `ungroup() %>% summarise(flights = n())` gives one row with the total count. If a later step gives oddly grouped results, an `ungroup()` usually fixes it.",
    "key": false
   },
   {
    "id": "lec-11-c04",
    "label": "across(): the same summary on many columns",
    "question": "Compute the mean departure delay, arrival delay and air time for each origin/carrier without writing mean() three times. Then apply summaries to all numeric or factor columns.",
    "code": "flights %>% \n  \n  group_by(origin, carrier) %>%\n  \n  summarise(Mean_dep_delay = mean(dep_delay, na.rm = T),\n            \n            Mean_arrival_delay = mean(arr_delay, na.rm = T),\n            \n            Mean_air_time = mean(air_time, na.rm = T))\n#> `summarise()` has grouped output by 'origin'. You can\n#> override using the `.groups` argument.\n#> # A tibble: 35 × 5\n#> # Groups:   origin [3]\n#>    origin carrier Mean_dep_delay Mean_arrival_delay\n#>    <fct>  <fct>            <dbl>              <dbl>\n#>  1 EWR    9E                5.95              1.62 \n#>  2 EWR    AA               10.0               0.978\n#>  3 EWR    AS                5.80             -9.93 \n#>  4 EWR    B6               13.1               9.39 \n#>  5 EWR    DL               12.1               8.78 \n#>  6 EWR    EV               20.2              17.0  \n#>  7 EWR    MQ               17.5              16.3  \n#>  8 EWR    OO               20.8              21.5  \n#>  9 EWR    UA               12.5               3.48 \n#> 10 EWR    US                3.74              0.977\n#> # ℹ 25 more rows\n#> # ℹ 1 more variable: Mean_air_time <dbl>\n\nflights %>% \n  \n  group_by(origin, carrier) %>%\n  \n  summarise(across(\n    \n    c(dep_delay, arr_delay, air_time),\n    \n    ~ mean(.x, na.rm = T)\n    \n  ))\n#> `summarise()` has grouped output by 'origin'. You can\n#> override using the `.groups` argument.\n#> # A tibble: 35 × 5\n#> # Groups:   origin [3]\n#>    origin carrier dep_delay arr_delay air_time\n#>    <fct>  <fct>       <dbl>     <dbl>    <dbl>\n#>  1 EWR    9E           5.95     1.62     103. \n#>  2 EWR    AA          10.0      0.978    196. \n#>  3 EWR    AS           5.80    -9.93     326. \n#>  4 EWR    B6          13.1      9.39     118. \n#>  5 EWR    DL          12.1      8.78     125. \n#>  6 EWR    EV          20.2     17.0       94.0\n#>  7 EWR    MQ          17.5     16.3      112. \n#>  8 EWR    OO          20.8     21.5      137. \n#>  9 EWR    UA          12.5      3.48     207. \n#> 10 EWR    US           3.74     0.977    138. \n#> # ℹ 25 more rows\n\nflights %>% \n  \n  summarise(across(where(is.factor), n_distinct))\n#> # A tibble: 1 × 5\n#>   carrier tailnum origin  dest time_hour\n#>     <int>   <int>  <int> <int>     <int>\n#> 1      16    4044      3   105      6936\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), ~ mean(.x, na.rm = TRUE)))\n#> # A tibble: 3 × 15\n#>   origin  year month   day dep_time sched_dep_time dep_delay\n#>   <fct>  <dbl> <dbl> <dbl>    <dbl>          <dbl>     <dbl>\n#> 1 EWR     2013  6.49  15.7    1337.          1322.      15.1\n#> 2 JFK     2013  6.50  15.7    1399.          1402.      12.1\n#> 3 LGA     2013  6.67  15.7    1310.          1308.      10.3\n#> # ℹ 8 more variables: arr_time <dbl>, sched_arr_time <dbl>,\n#> #   arr_delay <dbl>, flight <dbl>, air_time <dbl>,\n#> #   distance <dbl>, hour <dbl>, minute <dbl>\n\nmin_max <- list(\n  \n  min = ~min(.x, na.rm = TRUE), \n  \n  max = ~max(.x, na.rm = TRUE)\n)\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), min_max))\n#> # A tibble: 3 × 29\n#>   origin year_min year_max month_min month_max day_min\n#>   <fct>     <int>    <int>     <int>     <int>   <int>\n#> 1 EWR        2013     2013         1        12       1\n#> 2 JFK        2013     2013         1        12       1\n#> 3 LGA        2013     2013         1        12       1\n#> # ℹ 23 more variables: day_max <int>, dep_time_min <int>,\n#> #   dep_time_max <int>, sched_dep_time_min <int>,\n#> #   sched_dep_time_max <int>, dep_delay_min <int>,\n#> #   dep_delay_max <int>, arr_time_min <int>,\n#> #   arr_time_max <int>, sched_arr_time_min <int>,\n#> #   sched_arr_time_max <int>, arr_delay_min <int>,\n#> #   arr_delay_max <int>, flight_min <int>, …\n\nflights %>% \n  \n  group_by(origin) %>%\n  \n  summarise(across(where(is.numeric), min_max,\n                   \n                   .names = \"{.fn}.{.col}\"\n                   \n                   ))\n#> # A tibble: 3 × 29\n#>   origin min.year max.year min.month max.month min.day\n#>   <fct>     <int>    <int>     <int>     <int>   <int>\n#> 1 EWR        2013     2013         1        12       1\n#> 2 JFK        2013     2013         1        12       1\n#> 3 LGA        2013     2013         1        12       1\n#> # ℹ 23 more variables: max.day <int>, min.dep_time <int>,\n#> #   max.dep_time <int>, min.sched_dep_time <int>,\n#> #   max.sched_dep_time <int>, min.dep_delay <int>,\n#> #   max.dep_delay <int>, min.arr_time <int>,\n#> #   max.arr_time <int>, min.sched_arr_time <int>,\n#> #   max.sched_arr_time <int>, min.arr_delay <int>,\n#> #   max.arr_delay <int>, min.flight <int>, …",
    "comment": "**Problem:** copying `mean(..., na.rm = T)` for each column is long and error-prone.\n\n**`across(columns, function)`** inside `summarise()` applies one function to several columns:\n- `across(c(dep_delay, arr_delay, air_time), ~ mean(.x, na.rm = T))`\n- `~ mean(.x, na.rm = T)` is a short function: `.x` stands for \"the current column\".\n\n**Picking columns:**\n- by name: `c(dep_delay, arr_delay)`\n- by type: `where(is.numeric)`, `where(is.factor)`\n\n**Several functions:** give a named list, `list(min = ~min(.x, na.rm = TRUE), max = ~max(.x, na.rm = TRUE))`. Columns get names like `year_min`. Change the pattern with `.names = \"{.fn}.{.col}\"` → `min.year`.\n\n**Message you'll see:** \"`summarise()` has grouped output by 'origin'\". With two grouping variables, the result stays grouped by the first one. It's informational, not an error.",
    "key": false
   },
   {
    "id": "lec-11-c05",
    "label": "Joins: the toy tables df1 and df2",
    "question": "Mutating joins match rows by key and copy columns from one table to the other. Arguments: x (primary table), y (secondary table), by (the key), keep (keep both key columns).",
    "code": "df1 <- data.frame(\n  \n  a = c(1, 2, 3, 2, 4),\n  \n  b = c(10, 20, 30, 35, 40),\n  \n  c  = c(100, 200, 300, 350, 400)\n  \n)\n\nprint(df1)\n#>   a  b   c\n#> 1 1 10 100\n#> 2 2 20 200\n#> 3 3 30 300\n#> 4 2 35 350\n#> 5 4 40 400\n\ndf2 <- data.frame(\n  \n  a =  c(1, 2, 5, 4, 6, 2),\n  \n  b  =  c(10, 40, 50, 40, 60, 50),\n  \n  x = c(15, 25, 35, 45, 55, 65),\n  \n  z = c(150, 200, 350, 400, 550, 270)\n\n)\n\nprint(df2)\n#>   a  b  x   z\n#> 1 1 10 15 150\n#> 2 2 40 25 200\n#> 3 5 50 35 350\n#> 4 4 40 45 400\n#> 5 6 60 55 550\n#> 6 2 50 65 270",
    "comment": "**Words to know**\n- **x** = first/primary table (left of `%>%`), **y** = second table.\n- **key (`by`)** = the column(s) used to match rows.\n- If a row of x matches **several** rows of y, it appears once **per match**.\n\n**Look at the keys before joining:** in `df1`, `a = 2` appears twice; in `df2`, `a = 2` also appears twice. Joining by `a` alone will multiply those rows (2 × 2 = 4 rows for a = 2). That's the many-to-many warning you'll see next.\n\n**Run this chunk before the join examples.**",
    "key": false
   },
   {
    "id": "lec-11-c06",
    "label": "inner_join(): only matching rows",
    "question": "Join df1 and df2 keeping only rows whose keys match in both, by a; by a and b; and by c = z (different names), with and without keep = T.",
    "code": "# Merging tables by the \"a\" variable\n\ndf1 %>%\n  \n  inner_join(df2, by = \"a\")\n#> Warning in inner_join(., df2, by = \"a\"): Detected an unexpected many-to-many relationship between\n#> `x` and `y`.\n#> ℹ Row 2 of `x` matches multiple rows in `y`.\n#> ℹ Row 2 of `y` matches multiple rows in `x`.\n#> ℹ If a many-to-many relationship is expected, set\n#>   `relationship = \"many-to-many\"` to silence this warning.\n#>   a b.x   c b.y  x   z\n#> 1 1  10 100  10 15 150\n#> 2 2  20 200  40 25 200\n#> 3 2  20 200  50 65 270\n#> 4 2  35 350  40 25 200\n#> 5 2  35 350  50 65 270\n#> 6 4  40 400  40 45 400\n\n# Merging tables by the \"a\" and \"b\" variable\n\ndf1 %>%\n  \n  inner_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c  x   z\n#> 1 1 10 100 15 150\n#> 2 4 40 400 45 400\n\n## Merging tables by the \"c\" and \"z\" variable (Have different variable names)\n\ndf1 %>%\n  \n  inner_join(df2, by = c(\"c\" = \"z\"))\n#>   a.x b.x   c a.y b.y  x\n#> 1   2  20 200   2  40 25\n#> 2   2  35 350   5  50 35\n#> 3   4  40 400   4  40 45\n\n## Merging tables by the \"c\" and \"z\" variable (Have different variable names) and keeping both key variables in the output table\n\ndf1 %>%\n  \n  inner_join(df2, by = c(\"c\" = \"z\"), keep = T)\n#>   a.x b.x   c a.y b.y  x   z\n#> 1   2  20 200   2  40 25 200\n#> 2   2  35 350   5  50 35 350\n#> 3   4  40 400   4  40 45 400",
    "comment": "**Rule:** an inner join keeps only rows whose key exists in **both** tables.\n\n**Example by example**\n1. `by = \"a\"`: a = 3 (only in df1) and a = 5, 6 (only in df2) disappear. a = 2 appears 2 × 2 = 4 times → **many-to-many warning**. `b` is in both but isn't a key → `b.x` (df1) and `b.y` (df2).\n2. `by = c(\"a\", \"b\")`: **both** must match → only (1, 10) and (4, 40) → 2 rows. No suffixes, because the shared columns were keys.\n3. `by = c(\"c\" = \"z\")`: different names. Matches df1's `c` with df2's `z`. Output keeps the name `c`.\n4. `keep = T`: keeps **both** key columns (`c` and `z`).\n\n**Takeaway:** more keys → stricter matching → fewer rows and no duplicates.",
    "key": true
   },
   {
    "id": "lec-11-c07",
    "label": "left_join(): keep everything from x",
    "question": "Join df1 and df2 keeping every row of df1.",
    "code": "# Merging tables by the \"a\" variable\n\ndf1 %>%\n  \n  left_join(df2, by = \"a\")\n#> Warning in left_join(., df2, by = \"a\"): Detected an unexpected many-to-many relationship between\n#> `x` and `y`.\n#> ℹ Row 2 of `x` matches multiple rows in `y`.\n#> ℹ Row 2 of `y` matches multiple rows in `x`.\n#> ℹ If a many-to-many relationship is expected, set\n#>   `relationship = \"many-to-many\"` to silence this warning.\n#>   a b.x   c b.y  x   z\n#> 1 1  10 100  10 15 150\n#> 2 2  20 200  40 25 200\n#> 3 2  20 200  50 65 270\n#> 4 3  30 300  NA NA  NA\n#> 5 2  35 350  40 25 200\n#> 6 2  35 350  50 65 270\n#> 7 4  40 400  40 45 400\n\n# Merging tables by the \"a\" and \"b\" variable\n\ndf1 %>%\n  \n  left_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c  x   z\n#> 1 1 10 100 15 150\n#> 2 2 20 200 NA  NA\n#> 3 3 30 300 NA  NA\n#> 4 2 35 350 NA  NA\n#> 5 4 40 400 45 400\n\n## Merging tables by the \"c\" and \"z\" variable (Have different variable names)\n\ndf1 %>%\n  \n  left_join(df2, by = c(\"c\" = \"z\"))\n#>   a.x b.x   c a.y b.y  x\n#> 1   1  10 100  NA  NA NA\n#> 2   2  20 200   2  40 25\n#> 3   3  30 300  NA  NA NA\n#> 4   2  35 350   5  50 35\n#> 5   4  40 400   4  40 45",
    "comment": "**Rule:** every row of x (df1) stays. Where there's no match in y, the y columns are `NA`.\n\n- `by = \"a\"`: a = 3 has no match → kept with `NA` in `b.y`, `x`, `z`. a = 2 still multiplies (4 rows).\n- `by = c(\"a\", \"b\")`: all 5 rows of df1, only 2 with real values from df2.\n- `by = c(\"c\" = \"z\")`: all 5 rows; 3 matched.\n\n**Most common join**, because you never lose your main data. Use it when the question says \"add ___ to the data\".\n\n**Count check:** a left join always has **at least** as many rows as x. More than x means the key isn't unique in y.",
    "key": true
   },
   {
    "id": "lec-11-c08",
    "label": "right_join(): keep everything from y",
    "question": "Join df1 and df2 keeping every row of df2.",
    "code": "# Merging tables by the \"a\" variable\n\ndf1 %>%\n  \n  right_join(df2, by = \"a\")\n#> Warning in right_join(., df2, by = \"a\"): Detected an unexpected many-to-many relationship between\n#> `x` and `y`.\n#> ℹ Row 2 of `x` matches multiple rows in `y`.\n#> ℹ Row 2 of `y` matches multiple rows in `x`.\n#> ℹ If a many-to-many relationship is expected, set\n#>   `relationship = \"many-to-many\"` to silence this warning.\n#>   a b.x   c b.y  x   z\n#> 1 1  10 100  10 15 150\n#> 2 2  20 200  40 25 200\n#> 3 2  20 200  50 65 270\n#> 4 2  35 350  40 25 200\n#> 5 2  35 350  50 65 270\n#> 6 4  40 400  40 45 400\n#> 7 5  NA  NA  50 35 350\n#> 8 6  NA  NA  60 55 550\n\n# Merging tables by the \"a\" and \"b\" variable\n\ndf1 %>%\n  \n  right_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c  x   z\n#> 1 1 10 100 15 150\n#> 2 4 40 400 45 400\n#> 3 2 40  NA 25 200\n#> 4 5 50  NA 35 350\n#> 5 6 60  NA 55 550\n#> 6 2 50  NA 65 270\n\n## Merging tables by the \"c\" and \"z\" variable (Have different variable names)\n\ndf1 %>%\n  \n  right_join(df2, by = c(\"c\" = \"z\"))\n#>   a.x b.x   c a.y b.y  x\n#> 1   2  20 200   2  40 25\n#> 2   2  35 350   5  50 35\n#> 3   4  40 400   4  40 45\n#> 4  NA  NA 150   1  10 15\n#> 5  NA  NA 550   6  60 55\n#> 6  NA  NA 270   2  50 65",
    "comment": "**Rule:** every row of y (df2) stays. Matched rows come first (in df1's order), then df2's unmatched rows with `NA` in df1's columns.\n\n- `by = \"a\"`: a = 5 and a = 6 appear at the bottom with `NA` for `b.x` and `c`.\n- `by = c(\"c\" = \"z\")`: unmatched df2 rows keep their `z` value in the `c` column.\n\n**Same rows as `left_join` with the tables swapped:** `df1 %>% right_join(df2)` keeps the same rows as `df2 %>% left_join(df1)` (column order differs). Many people just always use `left_join` and put the table they want to keep first.",
    "key": false
   },
   {
    "id": "lec-11-c09",
    "label": "full_join(): keep everything",
    "question": "Join df1 and df2 keeping all rows from both tables.",
    "code": "# Merging tables by the \"a\" variable\n\ndf1 %>%\n  \n  full_join(df2, by = \"a\")\n#> Warning in full_join(., df2, by = \"a\"): Detected an unexpected many-to-many relationship between\n#> `x` and `y`.\n#> ℹ Row 2 of `x` matches multiple rows in `y`.\n#> ℹ Row 2 of `y` matches multiple rows in `x`.\n#> ℹ If a many-to-many relationship is expected, set\n#>   `relationship = \"many-to-many\"` to silence this warning.\n#>   a b.x   c b.y  x   z\n#> 1 1  10 100  10 15 150\n#> 2 2  20 200  40 25 200\n#> 3 2  20 200  50 65 270\n#> 4 3  30 300  NA NA  NA\n#> 5 2  35 350  40 25 200\n#> 6 2  35 350  50 65 270\n#> 7 4  40 400  40 45 400\n#> 8 5  NA  NA  50 35 350\n#> 9 6  NA  NA  60 55 550\n\n# Merging tables by the \"a\" and \"b\" variable\n\ndf1 %>%\n  \n  full_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c  x   z\n#> 1 1 10 100 15 150\n#> 2 2 20 200 NA  NA\n#> 3 3 30 300 NA  NA\n#> 4 2 35 350 NA  NA\n#> 5 4 40 400 45 400\n#> 6 2 40  NA 25 200\n#> 7 5 50  NA 35 350\n#> 8 6 60  NA 55 550\n#> 9 2 50  NA 65 270\n\n## Merging tables by the \"c\" and \"z\" variable (Have different variable names)\n\ndf1 %>%\n  \n  full_join(df2, by = c(\"c\" = \"z\"))\n#>   a.x b.x   c a.y b.y  x\n#> 1   1  10 100  NA  NA NA\n#> 2   2  20 200   2  40 25\n#> 3   3  30 300  NA  NA NA\n#> 4   2  35 350   5  50 35\n#> 5   4  40 400   4  40 45\n#> 6  NA  NA 150   1  10 15\n#> 7  NA  NA 550   6  60 55\n#> 8  NA  NA 270   2  50 65",
    "comment": "**Rule:** all matches + unmatched rows from x + unmatched rows from y. `NA` fills in whatever side is missing.\n\n**Counting rows (`by = c(\"a\", \"b\")`):** 2 matched + 3 only in df1 + 4 only in df2 = **9**.\n\n**When to use:** \"combine all the information from both tables\" or \"show everything, matched or not\".",
    "key": false
   },
   {
    "id": "lec-11-c10",
    "label": "Filtering joins: semi_join() and anti_join()",
    "question": "Keep rows of df1 that have a match in df2 (semi_join), and rows of df1 that have no match (anti_join).",
    "code": "df1 %>%\n  \n  semi_join(df2, by = \"a\")\n#>   a  b   c\n#> 1 1 10 100\n#> 2 2 20 200\n#> 3 2 35 350\n#> 4 4 40 400\n\ndf1 %>%\n  \n  semi_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c\n#> 1 1 10 100\n#> 2 4 40 400\n\ndf1 %>%\n  \n  anti_join(df2, by = \"a\")\n#>   a  b   c\n#> 1 3 30 300\n\ndf1 %>%\n  \n  anti_join(df2, by = c(\"a\", \"b\"))\n#>   a  b   c\n#> 1 2 20 200\n#> 2 3 30 300\n#> 3 2 35 350",
    "comment": "**Filtering joins never add columns. They only keep or drop rows of x.**\n- `semi_join(df2, by = \"a\")` → df1 rows whose `a` appears in df2 (4 rows). a = 2 is **not** duplicated, unlike `inner_join`.\n- `anti_join(df2, by = \"a\")` → df1 rows with no match: only a = 3.\n\n**Typical questions**\n- \"Which ___ appear in both?\" → `semi_join`\n- \"Which ___ have no match / are missing?\" → `anti_join`\n\n`semi_join` + `anti_join` together always give back all of x.",
    "key": true
   },
   {
    "id": "lec-11-c11",
    "label": "Set operations: intersect(), union(), setdiff()",
    "question": "For two tables with the same columns, find rows in both, rows in either, and rows in one but not the other.",
    "code": "df1 <- data.frame(\n  \n  a = c(1, 2, 3, 4, 5),\n  \n  b = c(10, 20, 30, 40, 50)\n  \n)\n\ndf1\n#>   a  b\n#> 1 1 10\n#> 2 2 20\n#> 3 3 30\n#> 4 4 40\n#> 5 5 50\n\ndf2 <- data.frame(\n  \n  a = c(1, 2, 3, 4, 5),\n  \n  b = c(10, 15, 30, 45, 65)\n  \n)\n\ndf2\n#>   a  b\n#> 1 1 10\n#> 2 2 15\n#> 3 3 30\n#> 4 4 45\n#> 5 5 65\n\nintersect(df1, df2)\n#>   a  b\n#> 1 1 10\n#> 2 3 30\n\nunion(df1, df2)\n#>   a  b\n#> 1 1 10\n#> 2 2 20\n#> 3 3 30\n#> 4 4 40\n#> 5 5 50\n#> 6 2 15\n#> 7 4 45\n#> 8 5 65\n\nsetdiff(df1, df2)\n#>   a  b\n#> 1 2 20\n#> 2 4 40\n#> 3 5 50\n\nsetdiff(df2, df1)\n#>   a  b\n#> 1 2 15\n#> 2 4 45\n#> 3 5 65",
    "comment": "**Set operations compare whole rows** and need the **same columns** in both tables.\n- `intersect(df1, df2)` → rows in both: (1, 10), (3, 30).\n- `union(df1, df2)` → all distinct rows from either (duplicates appear once): 8.\n- `setdiff(df1, df2)` → in df1 but not df2. **Order matters:** `setdiff(df2, df1)` is the opposite question.\n\n**vs joins:** joins match on **key columns** and can bring in new columns. Set operations need identical columns and match on **every** column.\n\n**If tables have extra columns,** `select()` the shared ones first (see Practice 9).",
    "key": false
   },
   {
    "id": "lec-11-p00",
    "label": "Practice · Setup: the two data sets",
    "question": "Here are two data sets that you can use to practice two-table verbs: data1 (13 people: Name, Age, State, state_abr, City, Salary) and data2 (14 cities: State, state_abbriviation, City, Average_salary).",
    "code": "library(dplyr)\n\ndata1 <- data.frame(\n  Name = c(\"James\", \"Linda\", \"Jim\", \"Margo\", \"Nick\", \"Stacy\", \"Mary\", \"Tom\", \"Anna\", \"Bob\", \"Jeniffer\", \"Lucas\", \"Amy\"),\n  Age = c(22, 56, 34, 48, 19, 25, 31, 68, 72, 42, 39, 52, 39),\n  State = c(\"California\", \"New York\", \"New York\", \"California\", \"Michigan\", \"Texas\", \"Ohio\", \"Arizona\", \"Texas\", \"Florida\", \"Nebraska\", \"Indiana\", \"Florida\"),\n  state_abr = c(\"CA\", \"NY\", \"NY\", \"CA\", \"MI\", \"TX\", \"OH\", \"AZ\", \"TX\", \"FL\", \"NE\", \"IN\", \"FL\"),\n  City = c(\"Los Angeles\", \"New York\", \"Buffalo\", \"San Diego\", \"Detroit\", \"Austin\", \"Cleveland\", \"Phoenix\", \"Houston\", \"Tampa\", \"Lincoln\", \"Indianapolis\", \"Miami\"),\n  Salary = c(30000, 96500, 72000, 59000, 54300, 25000, 61000, 64000, 74700, 40000, 83000, 92400, 82000)\n)\n\ndata2 <- data.frame(\n  State = c(\"Washington\", \"Florida\", \"Nebraska\", \"Indiana\", \"Florida\",\"California\", \"New York\", \"New York\", \"California\", \"Michigan\", \"Texas\", \"Ohio\", \"Arizona\", \"Utah\"),\n  state_abbriviation = c(\"WA\", \"FL\", \"NE\", \"IN\", \"FL\",\"CA\", \"NY\", \"NY\", \"CA\", \"MI\", \"TX\", \"OH\", \"AZ\", \"UT\"),\n  City = c( \"Seatle\", \"Tampa\", \"Lincoln\", \"Indianapolis\", \"Miami\",\"Los Angeles\", \"New York\", \"Ithaca\", \"San Francisco\", \"Detroit\", \"Dallas\", \"Cleveland\", \"Phoenix\", \"Salt Lake City\"),\n  Average_salary = c(63500, 53900, 59900, 59800, 57900, 79000, 80000, 75000, 85000, 54000, 63800, 57000, 61000, 58600)\n)\n\ndata1\n#>        Name Age      State state_abr         City Salary\n#> 1     James  22 California        CA  Los Angeles  30000\n#> 2     Linda  56   New York        NY     New York  96500\n#> 3       Jim  34   New York        NY      Buffalo  72000\n#> 4     Margo  48 California        CA    San Diego  59000\n#> 5      Nick  19   Michigan        MI      Detroit  54300\n#> 6     Stacy  25      Texas        TX       Austin  25000\n#> 7      Mary  31       Ohio        OH    Cleveland  61000\n#> 8       Tom  68    Arizona        AZ      Phoenix  64000\n#> 9      Anna  72      Texas        TX      Houston  74700\n#> 10      Bob  42    Florida        FL        Tampa  40000\n#> 11 Jeniffer  39   Nebraska        NE      Lincoln  83000\n#> 12    Lucas  52    Indiana        IN Indianapolis  92400\n#> 13      Amy  39    Florida        FL        Miami  82000\ndata2\n#>         State state_abbriviation           City Average_salary\n#> 1  Washington                 WA         Seatle          63500\n#> 2     Florida                 FL          Tampa          53900\n#> 3    Nebraska                 NE        Lincoln          59900\n#> 4     Indiana                 IN   Indianapolis          59800\n#> 5     Florida                 FL          Miami          57900\n#> 6  California                 CA    Los Angeles          79000\n#> 7    New York                 NY       New York          80000\n#> 8    New York                 NY         Ithaca          75000\n#> 9  California                 CA  San Francisco          85000\n#> 10   Michigan                 MI        Detroit          54000\n#> 11      Texas                 TX         Dallas          63800\n#> 12       Ohio                 OH      Cleveland          57000\n#> 13    Arizona                 AZ        Phoenix          61000\n#> 14       Utah                 UT Salt Lake City          58600",
    "comment": "**What each table is**\n- `data1`: one row per **person**: their state, city and salary.\n- `data2`: one row per **city**: its state and the average salary there.\n\n**Before any join, ask two questions:**\n1. **What links a row in one table to a row in the other?** Here that's the place the person lives: State + City. (The abbreviations link too, but the columns have **different names**: `state_abr` vs `state_abbriviation`.)\n2. **Which table is my \"main\" one (x)?** If the question is about people, put `data1` first; if it's about cities, put `data2` first.\n\n**Spot the traps now:** several states appear more than once in **both** tables (California, New York, Florida), and some cities appear in only one table (Buffalo, Seatle…). Both matter for the joins below.\n\nRun this chunk first; every practice chunk below uses `data1` and `data2`.",
    "key": false
   },
   {
    "id": "lec-11-p01",
    "label": "Practice 1 · Find the common columns",
    "question": "Which variables do data1 and data2 have in common? Which of them should be used as the join key?",
    "code": "names(data1)\n#> [1] \"Name\"      \"Age\"       \"State\"     \"state_abr\" \"City\"      \"Salary\"   \nnames(data2)\n#> [1] \"State\"              \"state_abbriviation\" \"City\"              \n#> [4] \"Average_salary\"    \nintersect(names(data1), names(data2))\n#> [1] \"State\" \"City\" ",
    "comment": "**How to read it:** `intersect()` on two vectors of names returns the names in both: **State** and **City**.\n\n**Choosing the key:**\n- A key should identify **one** row in the other table. `State` alone doesn't (data2 has two Florida, two California, two New York rows) → Practice 2 shows what goes wrong.\n- `State` + `City` together does: each city/state pair appears once in data2.\n- `state_abr` and `state_abbriviation` hold the same information under different names → Practice 6 shows how to join on columns with different names.\n\n**Exam habit:** run `names()` (or `str()`) on both tables before writing a join.",
    "key": false
   },
   {
    "id": "lec-11-p02",
    "label": "Practice 2 · Join by State only (and why it goes wrong)",
    "question": "Join data1 and data2 by State. How many rows does the result have, and why is it more than 13?",
    "code": "by_state <- data1 %>% inner_join(data2, by = \"State\")\n#> Warning: Detected an unexpected many-to-many relationship between `x` and `y`.\nnrow(by_state)\n#> [1] 19\nhead(by_state[, c(\"Name\", \"State\", \"City.x\", \"City.y\")], 6)\n#>    Name      State      City.x        City.y\n#> 1 James California Los Angeles   Los Angeles\n#> 2 James California Los Angeles San Francisco\n#> 3 Linda   New York    New York      New York\n#> 4 Linda   New York    New York        Ithaca\n#> 5   Jim   New York     Buffalo      New York\n#> 6   Jim   New York     Buffalo        Ithaca",
    "comment": "**What happened:** 13 people went in, **19 rows** came out, plus a *many-to-many* warning (R's full warning has a few more lines than shown here).\n\n**Why:** a join pairs **every** matching row. James lives in California, and data2 has **two** California rows (Los Angeles and San Francisco), so James appears twice, once next to each city. Same for every California, New York and Florida person:\n\n| State | people in data1 | rows in data2 | rows out |\n|---|---|---|---|\n| California | 2 | 2 | 4 |\n| New York | 2 | 2 | 4 |\n| Florida | 2 | 2 | 4 |\n| Texas | 2 | 1 | 2 |\n| others (5 states) | 1 each | 1 each | 5 |\n\n4 + 4 + 4 + 2 + 5 = **19**.\n\n**Clues that the key is wrong:**\n- the many-to-many warning\n- more rows out than you expected\n- `City.x` and `City.y` columns that disagree (Los Angeles next to San Francisco)\n\n**`.x` / `.y`:** both tables have a `City` column that wasn't used as a key, so R keeps both and adds `.x` (from data1) and `.y` (from data2).\n\n**Fix:** use a key that identifies one row → Practice 3.",
    "key": true
   },
   {
    "id": "lec-11-p03",
    "label": "Practice 3 · inner_join by State and City",
    "question": "Combine the two tables so that each person is matched with the average salary of their own city. Keep only people whose city appears in data2.",
    "code": "matched <- data1 %>% inner_join(data2, by = c(\"State\", \"City\"))\nmatched\n#>       Name Age      State state_abr         City Salary state_abbriviation\n#> 1    James  22 California        CA  Los Angeles  30000                 CA\n#> 2    Linda  56   New York        NY     New York  96500                 NY\n#> 3     Nick  19   Michigan        MI      Detroit  54300                 MI\n#> 4     Mary  31       Ohio        OH    Cleveland  61000                 OH\n#> 5      Tom  68    Arizona        AZ      Phoenix  64000                 AZ\n#> 6      Bob  42    Florida        FL        Tampa  40000                 FL\n#> 7 Jeniffer  39   Nebraska        NE      Lincoln  83000                 NE\n#> 8    Lucas  52    Indiana        IN Indianapolis  92400                 IN\n#> 9      Amy  39    Florida        FL        Miami  82000                 FL\n#>   Average_salary\n#> 1          79000\n#> 2          80000\n#> 3          54000\n#> 4          57000\n#> 5          61000\n#> 6          53900\n#> 7          59900\n#> 8          59800\n#> 9          57900\nnrow(matched)\n#> [1] 9",
    "comment": "**Steps**\n1. Primary table `data1` (people) on the left of `%>%`.\n2. `inner_join()` because the question says keep **only** people whose city is in data2.\n3. `by = c(\"State\", \"City\")`: **both** must match.\n\n**Result:** 9 of 13 people. Each row now has their `Salary` **and** the city's `Average_salary`.\n\n**Who's missing and why:** Jim (Buffalo), Margo (San Diego), Stacy (Austin) and Anna (Houston): their cities aren't in data2, and an inner join drops unmatched rows from **both** sides.\n\n**Column order:** all of data1's columns, then data2's columns that weren't keys (`state_abbriviation`, `Average_salary`). No `.x`/`.y` this time, because the only shared columns were the keys.",
    "key": true
   },
   {
    "id": "lec-11-p04",
    "label": "Practice 4 · left_join: keep every person",
    "question": "Add each city's average salary to data1, but keep all 13 people even if their city is not in data2.",
    "code": "all_people <- data1 %>% left_join(data2, by = c(\"State\", \"City\"))\nall_people\n#>        Name Age      State state_abr         City Salary state_abbriviation\n#> 1     James  22 California        CA  Los Angeles  30000                 CA\n#> 2     Linda  56   New York        NY     New York  96500                 NY\n#> 3       Jim  34   New York        NY      Buffalo  72000               <NA>\n#> 4     Margo  48 California        CA    San Diego  59000               <NA>\n#> 5      Nick  19   Michigan        MI      Detroit  54300                 MI\n#> 6     Stacy  25      Texas        TX       Austin  25000               <NA>\n#> 7      Mary  31       Ohio        OH    Cleveland  61000                 OH\n#> 8       Tom  68    Arizona        AZ      Phoenix  64000                 AZ\n#> 9      Anna  72      Texas        TX      Houston  74700               <NA>\n#> 10      Bob  42    Florida        FL        Tampa  40000                 FL\n#> 11 Jeniffer  39   Nebraska        NE      Lincoln  83000                 NE\n#> 12    Lucas  52    Indiana        IN Indianapolis  92400                 IN\n#> 13      Amy  39    Florida        FL        Miami  82000                 FL\n#>    Average_salary\n#> 1           79000\n#> 2           80000\n#> 3              NA\n#> 4              NA\n#> 5           54000\n#> 6              NA\n#> 7           57000\n#> 8           61000\n#> 9              NA\n#> 10          53900\n#> 11          59900\n#> 12          59800\n#> 13          57900\nsum(is.na(all_people$Average_salary))\n#> [1] 4",
    "comment": "**`left_join()` keeps every row of the left table (x).** People with no matching city still appear, with `NA` in the columns that came from data2.\n\n**Result:** 13 rows. `sum(is.na(...))` counts the 4 people without a match (Jim, Margo, Stacy, Anna).\n\n**inner vs left, in one line:** inner = only matches; left = everything from x, matches filled in where they exist.\n\n**When the question says** \"keep all ___\", \"add information to\", or \"don't lose any observations\" → `left_join()` with that table first. This is the most common join.",
    "key": true
   },
   {
    "id": "lec-11-p05",
    "label": "Practice 5 · Join, then compare (mutate, filter, arrange)",
    "question": "Which people earn more than the average salary in their city? Show their name, city, salary, the city average and the difference, sorted from the largest difference.",
    "code": "data1 %>%\n  inner_join(data2, by = c(\"State\", \"City\")) %>%\n  mutate(Difference = Salary - Average_salary) %>%\n  filter(Difference > 0) %>%\n  select(Name, City, Salary, Average_salary, Difference) %>%\n  arrange(desc(Difference))\n#>       Name         City Salary Average_salary Difference\n#> 1    Lucas Indianapolis  92400          59800      32600\n#> 2      Amy        Miami  82000          57900      24100\n#> 3 Jeniffer      Lincoln  83000          59900      23100\n#> 4    Linda     New York  96500          80000      16500\n#> 5     Mary    Cleveland  61000          57000       4000\n#> 6      Tom      Phoenix  64000          61000       3000\n#> 7     Nick      Detroit  54300          54000        300",
    "comment": "**This is the typical exam shape: join first, then use single-table verbs.** Read the pipe top to bottom:\n\n1. `inner_join(...)`: put each person's salary next to their city's average (9 people).\n2. `mutate(Difference = Salary - Average_salary)`: new column, computed row by row.\n3. `filter(Difference > 0)`: keep people above their city average.\n4. `select(...)`: keep only the columns asked for.\n5. `arrange(desc(Difference))`: biggest gap first.\n\n**Result:** 7 people, biggest gap first: Lucas (+32,600), Amy (+24,100), Jeniffer (+23,100), Linda (+16,500), Mary, Tom, and Nick (+300). James and Bob earn less than their city average, so `filter()` drops them.\n\n**Why join first:** `Salary` and `Average_salary` live in different tables. You can only subtract them once they're in the same row.\n\n**Template:** `x %>% join(y, by = ...) %>% mutate(...) %>% filter(...) %>% select(...) %>% arrange(...)`",
    "key": true
   },
   {
    "id": "lec-11-p06",
    "label": "Practice 6 · Keys with different names",
    "question": "Join data1 and data2 using the state abbreviation and the city. The abbreviation column is called state_abr in data1 and state_abbriviation in data2.",
    "code": "data1 %>%\n  inner_join(data2, by = c(\"state_abr\" = \"state_abbriviation\", \"City\"))\n#>       Name Age    State.x state_abr         City Salary    State.y\n#> 1    James  22 California        CA  Los Angeles  30000 California\n#> 2    Linda  56   New York        NY     New York  96500   New York\n#> 3     Nick  19   Michigan        MI      Detroit  54300   Michigan\n#> 4     Mary  31       Ohio        OH    Cleveland  61000       Ohio\n#> 5      Tom  68    Arizona        AZ      Phoenix  64000    Arizona\n#> 6      Bob  42    Florida        FL        Tampa  40000    Florida\n#> 7 Jeniffer  39   Nebraska        NE      Lincoln  83000   Nebraska\n#> 8    Lucas  52    Indiana        IN Indianapolis  92400    Indiana\n#> 9      Amy  39    Florida        FL        Miami  82000    Florida\n#>   Average_salary\n#> 1          79000\n#> 2          80000\n#> 3          54000\n#> 4          57000\n#> 5          61000\n#> 6          53900\n#> 7          59900\n#> 8          59800\n#> 9          57900",
    "comment": "**Syntax for different names:** `by = c(\"name_in_x\" = \"name_in_y\")`. Mix it with same-name keys by just listing them: `c(\"state_abr\" = \"state_abbriviation\", \"City\")`.\n\n**Result:** the same 9 people as Practice 3. The output keeps data1's name (`state_abr`) for the key.\n\n**Why `State.x` and `State.y` appear:** `State` is in both tables but **wasn't** a key this time, so R keeps both copies and adds suffixes (`.x` from data1, `.y` from data2).\n\n**Add `keep = TRUE`** if you want both key columns (`state_abr` and `state_abbriviation`) in the output, like the `c = z` example in the lecture.",
    "key": false
   },
   {
    "id": "lec-11-p07",
    "label": "Practice 7 · semi_join and anti_join: who has a match?",
    "question": "Which people live in a city that appears in data2? Which people do not?",
    "code": "# people whose city IS in data2 (no columns added)\ndata1 %>% semi_join(data2, by = c(\"State\", \"City\"))\n#>       Name Age      State state_abr         City Salary\n#> 1    James  22 California        CA  Los Angeles  30000\n#> 2    Linda  56   New York        NY     New York  96500\n#> 3     Nick  19   Michigan        MI      Detroit  54300\n#> 4     Mary  31       Ohio        OH    Cleveland  61000\n#> 5      Tom  68    Arizona        AZ      Phoenix  64000\n#> 6      Bob  42    Florida        FL        Tampa  40000\n#> 7 Jeniffer  39   Nebraska        NE      Lincoln  83000\n#> 8    Lucas  52    Indiana        IN Indianapolis  92400\n#> 9      Amy  39    Florida        FL        Miami  82000\n\n# people whose city is NOT in data2\ndata1 %>% anti_join(data2, by = c(\"State\", \"City\"))\n#>    Name Age      State state_abr      City Salary\n#> 1   Jim  34   New York        NY   Buffalo  72000\n#> 2 Margo  48 California        CA San Diego  59000\n#> 3 Stacy  25      Texas        TX    Austin  25000\n#> 4  Anna  72      Texas        TX   Houston  74700",
    "comment": "**Filtering joins only keep or drop rows of x. They never add columns.**\n- `semi_join()` = keep x rows that **have** a match → 9 people, still only data1's 6 columns.\n- `anti_join()` = keep x rows that **don't** have a match → Jim, Margo, Stacy, Anna.\n\n**Compare with Practice 3:** `inner_join` gives the same 9 people but also adds data2's columns. Use `semi_join` when the question only asks *which* rows match.\n\n**`anti_join` is the go-to for checking problems:** \"which observations have no match / are missing from the other table?\" One line, no NAs to count.",
    "key": true
   },
   {
    "id": "lec-11-p08",
    "label": "Practice 8 · right_join and full_join: the other side",
    "question": "Which cities in data2 have no matching person in data1? How many rows does a full join of the two tables have?",
    "code": "# cities with nobody from data1\ndata2 %>% anti_join(data1, by = c(\"State\", \"City\"))\n#>        State state_abbriviation           City Average_salary\n#> 1 Washington                 WA         Seatle          63500\n#> 2   New York                 NY         Ithaca          75000\n#> 3 California                 CA  San Francisco          85000\n#> 4      Texas                 TX         Dallas          63800\n#> 5       Utah                 UT Salt Lake City          58600\n\n# full join keeps everything from both tables\neverything <- data1 %>% full_join(data2, by = c(\"State\", \"City\"))\nnrow(everything)\n#> [1] 18\n\n# right_join keeps every row of data2 (y)\nnrow(data1 %>% right_join(data2, by = c(\"State\", \"City\")))\n#> [1] 14",
    "comment": "**Flip the table order to ask about the other side:** `data2 %>% anti_join(data1, ...)` lists the 5 cities with no person (Seatle, Ithaca, San Francisco, Dallas, Salt Lake City).\n\n**Counting a full join:** 9 matched rows + 4 people with no city (Jim, Margo, Stacy, Anna) + 5 cities with no person = **18**. Unmatched rows get `NA` on the side they're missing.\n\n**right_join:** keeps all 14 rows of data2 (9 matched + 5 unmatched cities). `data1 %>% right_join(data2)` keeps the same rows as `data2 %>% left_join(data1)`; only the column order differs. Most people just use `left_join` with the tables swapped.\n\n| Join | Keeps |\n|---|---|\n| `inner_join(x, y)` | only matches |\n| `left_join(x, y)` | all of x |\n| `right_join(x, y)` | all of y |\n| `full_join(x, y)` | all of both |",
    "key": false
   },
   {
    "id": "lec-11-p09",
    "label": "Practice 9 · Set operations on states",
    "question": "Which states appear in both data sets? Which states appear in data2 but not in data1?",
    "code": "states1 <- data1 %>% select(State)\nstates2 <- data2 %>% select(State)\n\nintersect(states1, states2)   # in both\n#>        State\n#> 1 California\n#> 2   New York\n#> 3   Michigan\n#> 4      Texas\n#> 5       Ohio\n#> 6    Arizona\n#> 7    Florida\n#> 8   Nebraska\n#> 9    Indiana\nsetdiff(states2, states1)     # in data2 only\n#>        State\n#> 1 Washington\n#> 2       Utah\nsetdiff(states1, states2)     # in data1 only\n#> [1] State\n#> <0 rows> (or 0-length row.names)",
    "comment": "**Set operations need tables with the same columns**, so first `select()` just the `State` column from each.\n\n- `intersect()` → states in both: 9 states, each listed once.\n- `setdiff(states2, states1)` → in data2 but not data1: **Washington** and **Utah**.\n- `setdiff(states1, states2)` → in data1 but not data2: none (0 rows).\n\n**Order matters for `setdiff()`:** it's \"first minus second\", so swapping the tables answers the opposite question.\n\n**Set operations vs joins:** set operations compare **whole rows** of tables with identical columns; joins match on key columns and can combine different columns.",
    "key": false
   }
  ],
  "notes": "Continues the `flights` data from Lecture 10, then covers combining two tables. Course notes: https://ap4347.github.io/2102/lecture-11.html\n\n**Join cheat sheet**\n\n| Function | Keeps | Adds columns? |\n|---|---|---|\n| `inner_join(x, y)` | rows with a match in both | yes |\n| `left_join(x, y)` | all of x | yes (NA where no match) |\n| `right_join(x, y)` | all of y | yes |\n| `full_join(x, y)` | everything | yes |\n| `semi_join(x, y)` | x rows **with** a match | no |\n| `anti_join(x, y)` | x rows **without** a match | no |\n\nThe **Practice** chunks at the bottom walk through the lecture's practice data sets (`data1`, `data2`) step by step.\n\n*Note: the practice outputs were generated with a base-R stand-in for the join functions, checked to reproduce all 25 join outputs printed in this lecture exactly. Your RStudio output should match.*",
  "takeaways": [
   "group_by() + summarise() = one row per group; add n() for counts and na.rm = TRUE for missing values.",
   "across(columns, ~ mean(.x, na.rm = TRUE)) applies the same summary to many columns.",
   "by = c(\"x_name\" = \"y_name\") joins on columns with different names.",
   "A many-to-many warning or more rows than expected means the join key is not unique: add another key column.",
   "left_join keeps every row of the first table; anti_join finds rows with no match.",
   "Non-key columns with the same name get .x (first table) and .y (second table)."
  ],
  "updatedAt": "2026-10-14T16:30:00Z"
 },
 "lec-12": {
  "type": "lec",
  "num": "12",
  "title": "tidyr: tidy data, pivoting, separating and missing values",
  "date": "",
  "exams": [],
  "topics": [
   "tidyr",
   "tidy data",
   "pivot_longer",
   "pivot_wider",
   "separate",
   "unite",
   "complete",
   "fill",
   "replace_na",
   "drop_na"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "lec-12-c01",
    "label": "What tidy data looks like (table1 to table4)",
    "question": "The same data (country, year, cases, population) organised five different ways. Which one is tidy?",
    "code": "print(table1)\n#> # A tibble: 6 × 4\n#>   country      year  cases population\n#>   <chr>       <dbl>  <dbl>      <dbl>\n#> 1 Afghanistan  1999    745   19987071\n#> 2 Afghanistan  2000   2666   20595360\n#> 3 Brazil       1999  37737  172006362\n#> 4 Brazil       2000  80488  174504898\n#> 5 China        1999 212258 1272915272\n#> 6 China        2000 213766 1280428583\n\nprint(table2)\n#> # A tibble: 12 × 4\n#>    country      year type            count\n#>    <chr>       <dbl> <chr>           <dbl>\n#>  1 Afghanistan  1999 cases             745\n#>  2 Afghanistan  1999 population   19987071\n#>  3 Afghanistan  2000 cases            2666\n#>  4 Afghanistan  2000 population   20595360\n#>  5 Brazil       1999 cases           37737\n#>  6 Brazil       1999 population  172006362\n#>  7 Brazil       2000 cases           80488\n#>  8 Brazil       2000 population  174504898\n#>  9 China        1999 cases          212258\n#> 10 China        1999 population 1272915272\n#> 11 China        2000 cases          213766\n#> 12 China        2000 population 1280428583\n\nprint(table3)\n#> # A tibble: 6 × 3\n#>   country      year rate             \n#>   <chr>       <dbl> <chr>            \n#> 1 Afghanistan  1999 745/19987071     \n#> 2 Afghanistan  2000 2666/20595360    \n#> 3 Brazil       1999 37737/172006362  \n#> 4 Brazil       2000 80488/174504898  \n#> 5 China        1999 212258/1272915272\n#> 6 China        2000 213766/1280428583\n\nprint(table4a) # cases\n#> # A tibble: 3 × 3\n#>   country     `1999` `2000`\n#>   <chr>        <dbl>  <dbl>\n#> 1 Afghanistan    745   2666\n#> 2 Brazil       37737  80488\n#> 3 China       212258 213766\n\nprint(table4b) # population\n#> # A tibble: 3 × 3\n#>   country         `1999`     `2000`\n#>   <chr>            <dbl>      <dbl>\n#> 1 Afghanistan   19987071   20595360\n#> 2 Brazil       172006362  174504898\n#> 3 China       1272915272 1280428583",
    "comment": "**Three rules of tidy data**\n1. Each **variable** has its own column.\n2. Each **observation** has its own row.\n3. Each **value** has its own cell.\n\n**Check each table**\n- `table1` → **tidy**: country, year, cases, population are all columns; one row per country-year.\n- `table2` → each country-year is split over **two rows** (`type` = cases / population) → fix with `pivot_wider()`.\n- `table3` → `rate` holds **two values** in one cell (\"745/19987071\") → fix with `separate()`.\n- `table4a`/`4b` → years are **column names** → fix with `pivot_longer()`.\n\n**Why it matters:** dplyr functions (`filter`, `mutate`, `group_by`, joins) and plots all expect tidy data.",
    "key": false
   },
   {
    "id": "lec-12-c02",
    "label": "pivot_longer(): column names that are really values",
    "question": "In table4a the columns 1999 and 2000 are years (values), not variables. Reshape table4a and table4b into tidy form and join them.",
    "code": "print(table4a) # cases\n#> # A tibble: 3 × 3\n#>   country     `1999` `2000`\n#>   <chr>        <dbl>  <dbl>\n#> 1 Afghanistan    745   2666\n#> 2 Brazil       37737  80488\n#> 3 China       212258 213766\n\ntable4a %>% \n  \n  pivot_longer(c(`1999`, `2000`), names_to = \"year\", values_to = \"cases\")\n#> # A tibble: 6 × 3\n#>   country     year   cases\n#>   <chr>       <chr>  <dbl>\n#> 1 Afghanistan 1999     745\n#> 2 Afghanistan 2000    2666\n#> 3 Brazil      1999   37737\n#> 4 Brazil      2000   80488\n#> 5 China       1999  212258\n#> 6 China       2000  213766\n\ntable4b %>%\n  \n  pivot_longer(c(`1999`, `2000`), names_to = \"year\", values_to = \"population\")\n#> # A tibble: 6 × 3\n#>   country     year  population\n#>   <chr>       <chr>      <dbl>\n#> 1 Afghanistan 1999    19987071\n#> 2 Afghanistan 2000    20595360\n#> 3 Brazil      1999   172006362\n#> 4 Brazil      2000   174504898\n#> 5 China       1999  1272915272\n#> 6 China       2000  1280428583\n\ntidy4a <- table4a %>% \n  \n  pivot_longer(c(`1999`, `2000`), names_to = \"year\", values_to = \"cases\")\n\n\n\ntidy4b <- table4b %>% \n  \n  pivot_longer(c(`1999`, `2000`), names_to = \"year\", values_to = \"population\")\n\n\ntidy_4a_4b <- left_join(tidy4a, tidy4b)\n#> Joining with `by = join_by(country, year)`\n\nprint(tidy_4a_4b)\n#> # A tibble: 6 × 4\n#>   country     year   cases population\n#>   <chr>       <chr>  <dbl>      <dbl>\n#> 1 Afghanistan 1999     745   19987071\n#> 2 Afghanistan 2000    2666   20595360\n#> 3 Brazil      1999   37737  172006362\n#> 4 Brazil      2000   80488  174504898\n#> 5 China       1999  212258 1272915272\n#> 6 China       2000  213766 1280428583",
    "comment": "**Three things to tell `pivot_longer()`:**\n1. **Which columns** to stack: `c(\\`1999\\`, \\`2000\\`)`. Backticks are needed because the names start with numbers.\n2. **`names_to`**: new column for the old column **names** → `\"year\"`.\n3. **`values_to`**: new column for the **values** → `\"cases\"`.\n\n3 rows × 2 year columns → **6 rows**, one per country-year.\n\n**Then join:** both tidy tables share `country` and `year`, so `left_join(tidy4a, tidy4b)` lines up cases and population (\"Joining with `by = join_by(country, year)`\" = it found the shared columns itself).\n\n**Picking columns other ways:** `-country` (everything except country), `starts_with(\"wk\")`, `new_sp_m014:newrel_f65` (a range).",
    "key": true
   },
   {
    "id": "lec-12-c03",
    "label": "pivot_wider(): one observation over several rows",
    "question": "In table2 each country-year appears in two rows (type = cases or population). Spread type into its own columns.",
    "code": "print(table2)\n#> # A tibble: 12 × 4\n#>    country      year type            count\n#>    <chr>       <dbl> <chr>           <dbl>\n#>  1 Afghanistan  1999 cases             745\n#>  2 Afghanistan  1999 population   19987071\n#>  3 Afghanistan  2000 cases            2666\n#>  4 Afghanistan  2000 population   20595360\n#>  5 Brazil       1999 cases           37737\n#>  6 Brazil       1999 population  172006362\n#>  7 Brazil       2000 cases           80488\n#>  8 Brazil       2000 population  174504898\n#>  9 China        1999 cases          212258\n#> 10 China        1999 population 1272915272\n#> 11 China        2000 cases          213766\n#> 12 China        2000 population 1280428583\n\ntable2 %>%\n  \n  pivot_wider(names_from = type, values_from = count)\n#> # A tibble: 6 × 4\n#>   country      year  cases population\n#>   <chr>       <dbl>  <dbl>      <dbl>\n#> 1 Afghanistan  1999    745   19987071\n#> 2 Afghanistan  2000   2666   20595360\n#> 3 Brazil       1999  37737  172006362\n#> 4 Brazil       2000  80488  174504898\n#> 5 China        1999 212258 1272915272\n#> 6 China        2000 213766 1280428583",
    "comment": "**Two things to tell `pivot_wider()`:**\n- **`names_from = type`**: which column holds the **new column names** (cases, population).\n- **`values_from = count`**: which column holds the **values** to fill them.\n\n12 rows → **6 rows**, now tidy (same as table1).\n\n**Longer vs wider:** `pivot_longer` = more rows, fewer columns (names → values). `pivot_wider` = fewer rows, more columns (values → names). They undo each other.",
    "key": true
   },
   {
    "id": "lec-12-c04",
    "label": "separate(): split one column into several",
    "question": "In table3 the rate column holds cases and population as \"745/19987071\". Split it into two columns. Also split year into century and year by position.",
    "code": "print(table3)\n#> # A tibble: 6 × 3\n#>   country      year rate             \n#>   <chr>       <dbl> <chr>            \n#> 1 Afghanistan  1999 745/19987071     \n#> 2 Afghanistan  2000 2666/20595360    \n#> 3 Brazil       1999 37737/172006362  \n#> 4 Brazil       2000 80488/174504898  \n#> 5 China        1999 212258/1272915272\n#> 6 China        2000 213766/1280428583\n\ntable3 %>%\n  \n  separate(rate, into = c(\"cases\", \"population\"), sep = \"/\")\n#> # A tibble: 6 × 4\n#>   country      year cases  population\n#>   <chr>       <dbl> <chr>  <chr>     \n#> 1 Afghanistan  1999 745    19987071  \n#> 2 Afghanistan  2000 2666   20595360  \n#> 3 Brazil       1999 37737  172006362 \n#> 4 Brazil       2000 80488  174504898 \n#> 5 China        1999 212258 1272915272\n#> 6 China        2000 213766 1280428583\n\ntable3 %>% \n  \n  separate(rate, into = c(\"cases\", \"population\"), convert = TRUE)\n#> # A tibble: 6 × 4\n#>   country      year  cases population\n#>   <chr>       <dbl>  <int>      <int>\n#> 1 Afghanistan  1999    745   19987071\n#> 2 Afghanistan  2000   2666   20595360\n#> 3 Brazil       1999  37737  172006362\n#> 4 Brazil       2000  80488  174504898\n#> 5 China        1999 212258 1272915272\n#> 6 China        2000 213766 1280428583\n\ntable3 %>% \n  \n  separate(year, into = c(\"century\", \"year\"), sep = 2)\n#> # A tibble: 6 × 4\n#>   country     century year  rate             \n#>   <chr>       <chr>   <chr> <chr>            \n#> 1 Afghanistan 19      99    745/19987071     \n#> 2 Afghanistan 20      00    2666/20595360    \n#> 3 Brazil      19      99    37737/172006362  \n#> 4 Brazil      20      00    80488/174504898  \n#> 5 China       19      99    212258/1272915272\n#> 6 China       20      00    213766/1280428583\n\ntable3 %>% \n  \n  separate(year, into = c(\"century\", \"year\"), sep = 3)\n#> # A tibble: 6 × 4\n#>   country     century year  rate             \n#>   <chr>       <chr>   <chr> <chr>            \n#> 1 Afghanistan 199     9     745/19987071     \n#> 2 Afghanistan 200     0     2666/20595360    \n#> 3 Brazil      199     9     37737/172006362  \n#> 4 Brazil      200     0     80488/174504898  \n#> 5 China       199     9     212258/1272915272\n#> 6 China       200     0     213766/1280428583\n\ntable3 %>% \n  \n  separate(year, into = c(\"century\", \"year\"), sep = -3)\n#> # A tibble: 6 × 4\n#>   country     century year  rate             \n#>   <chr>       <chr>   <chr> <chr>            \n#> 1 Afghanistan 1       999   745/19987071     \n#> 2 Afghanistan 2       000   2666/20595360    \n#> 3 Brazil      1       999   37737/172006362  \n#> 4 Brazil      2       000   80488/174504898  \n#> 5 China       1       999   212258/1272915272\n#> 6 China       2       000   213766/1280428583",
    "comment": "**`separate(col, into = c(\"new1\", \"new2\"), sep = ...)`**\n- `sep = \"/\"` → split at the slash.\n- No `sep` → splits at any non-letter/number character (worked here too).\n\n**`convert = TRUE`:** after splitting, the pieces are **text** (`<chr>`), so math on them fails. `convert = TRUE` turns them into numbers (`<int>`).\n\n**Splitting by position (`sep = number`):**\n- `sep = 2` → after the 2nd character: \"1999\" → \"19\" + \"99\".\n- `sep = -3` → 3 characters from the right: \"1999\" → \"1\" + \"999\".\n\n**Use it when** one cell holds two pieces of information (a date like \"2024-05\", \"Smith, John\", \"m014\" = sex + age).",
    "key": false
   },
   {
    "id": "lec-12-c05",
    "label": "unite(): combine columns into one",
    "question": "In table5 the year is split into century (\"19\") and year (\"99\"). Combine them back into one column.",
    "code": "print(table5)\n#> # A tibble: 6 × 4\n#>   country     century year  rate             \n#>   <chr>       <chr>   <chr> <chr>            \n#> 1 Afghanistan 19      99    745/19987071     \n#> 2 Afghanistan 20      00    2666/20595360    \n#> 3 Brazil      19      99    37737/172006362  \n#> 4 Brazil      20      00    80488/174504898  \n#> 5 China       19      99    212258/1272915272\n#> 6 China       20      00    213766/1280428583\n\ntable5 %>% \n  \n  unite(new, century, year)\n#> # A tibble: 6 × 3\n#>   country     new   rate             \n#>   <chr>       <chr> <chr>            \n#> 1 Afghanistan 19_99 745/19987071     \n#> 2 Afghanistan 20_00 2666/20595360    \n#> 3 Brazil      19_99 37737/172006362  \n#> 4 Brazil      20_00 80488/174504898  \n#> 5 China       19_99 212258/1272915272\n#> 6 China       20_00 213766/1280428583\n\ntable5 %>% \n  \n  unite(new, century, year, sep = \"\")\n#> # A tibble: 6 × 3\n#>   country     new   rate             \n#>   <chr>       <chr> <chr>            \n#> 1 Afghanistan 1999  745/19987071     \n#> 2 Afghanistan 2000  2666/20595360    \n#> 3 Brazil      1999  37737/172006362  \n#> 4 Brazil      2000  80488/174504898  \n#> 5 China       1999  212258/1272915272\n#> 6 China       2000  213766/1280428583",
    "comment": "**`unite(new_name, col1, col2, sep = ...)`** is the opposite of `separate()`.\n- Default `sep` is `\"_\"` → \"19_99\".\n- `sep = \"\"` → \"1999\".\n\n**Order of arguments:** the **new** column name comes first, then the columns to combine.",
    "key": false
   },
   {
    "id": "lec-12-c06",
    "label": "Missing values: complete(), fill(), replace_na(), drop_na()",
    "question": "The stocks data has an explicit missing value (NA for 2015 Q4) and an implicit one (2016 Q1 is not in the data at all). Make missing values explicit and then fill, replace or drop them.",
    "code": "stocks <- data.frame(\n  \n  year   = c(2015, 2015, 2015, 2015, 2016, 2016, 2016),\n  \n  qtr    = c(   1,    2,    3,    4,    2,    3,    4),\n  \n  return = c(1.88, 0.59, 0.35,   NA, 0.92, 0.17, 2.66)\n)\n\nprint(stocks)\n#>   year qtr return\n#> 1 2015   1   1.88\n#> 2 2015   2   0.59\n#> 3 2015   3   0.35\n#> 4 2015   4     NA\n#> 5 2016   2   0.92\n#> 6 2016   3   0.17\n#> 7 2016   4   2.66\n\nstocks %>% \n  \n  pivot_wider(names_from = year, values_from = return)\n#> # A tibble: 4 × 3\n#>     qtr `2015` `2016`\n#>   <dbl>  <dbl>  <dbl>\n#> 1     1   1.88  NA   \n#> 2     2   0.59   0.92\n#> 3     3   0.35   0.17\n#> 4     4  NA      2.66\n\nstocks %>% \n  \n  complete(year, qtr)\n#> # A tibble: 8 × 3\n#>    year   qtr return\n#>   <dbl> <dbl>  <dbl>\n#> 1  2015     1   1.88\n#> 2  2015     2   0.59\n#> 3  2015     3   0.35\n#> 4  2015     4  NA   \n#> 5  2016     1  NA   \n#> 6  2016     2   0.92\n#> 7  2016     3   0.17\n#> 8  2016     4   2.66\n\nstocks %>% \n  \n  complete(year, qtr) %>%\n  \n  fill(return)\n#> # A tibble: 8 × 3\n#>    year   qtr return\n#>   <dbl> <dbl>  <dbl>\n#> 1  2015     1   1.88\n#> 2  2015     2   0.59\n#> 3  2015     3   0.35\n#> 4  2015     4   0.35\n#> 5  2016     1   0.35\n#> 6  2016     2   0.92\n#> 7  2016     3   0.17\n#> 8  2016     4   2.66\n\nstocks %>% \n  \n  complete(year, qtr) %>%\n  \n  fill(return, .direction = \"up\")\n#> # A tibble: 8 × 3\n#>    year   qtr return\n#>   <dbl> <dbl>  <dbl>\n#> 1  2015     1   1.88\n#> 2  2015     2   0.59\n#> 3  2015     3   0.35\n#> 4  2015     4   0.92\n#> 5  2016     1   0.92\n#> 6  2016     2   0.92\n#> 7  2016     3   0.17\n#> 8  2016     4   2.66\n\nstocks %>% \n  \n  complete(year, qtr) %>%\n  \n  replace_na(list(return = 0))\n#> # A tibble: 8 × 3\n#>    year   qtr return\n#>   <dbl> <dbl>  <dbl>\n#> 1  2015     1   1.88\n#> 2  2015     2   0.59\n#> 3  2015     3   0.35\n#> 4  2015     4   0   \n#> 5  2016     1   0   \n#> 6  2016     2   0.92\n#> 7  2016     3   0.17\n#> 8  2016     4   2.66\n\nstocks %>% \n  \n  complete(year, qtr) %>%\n  \n  drop_na()\n#> # A tibble: 6 × 3\n#>    year   qtr return\n#>   <dbl> <dbl>  <dbl>\n#> 1  2015     1   1.88\n#> 2  2015     2   0.59\n#> 3  2015     3   0.35\n#> 4  2016     2   0.92\n#> 5  2016     3   0.17\n#> 6  2016     4   2.66",
    "comment": "**Two kinds of missing**\n- **Explicit:** the row is there with `NA` (2015 Q4).\n- **Implicit:** the row is just absent (2016 Q1). You can't see it with `is.na()`.\n\n**Tools**\n- `complete(year, qtr)`: adds every year × quarter combination, so the 2016 Q1 row appears with `NA` (7 → 8 rows).\n- `pivot_wider()`: also exposes it, as a table with a gap.\n- `fill(return)`: replaces `NA` with the **previous** value (down). `.direction = \"up\"` uses the **next** value.\n- `replace_na(list(return = 0))`: replaces `NA` with a fixed value.\n- `drop_na()`: removes rows with any `NA` (8 → 6 rows).\n\n**Which to use:** filling makes sense for things that carry forward (a price, a status); 0 only when missing really means none; dropping when the row is useless without the value. When in doubt, say what you chose in a sentence on the homework.",
    "key": false
   },
   {
    "id": "lec-12-c07",
    "label": "Practice: religion and income (pivot_longer)",
    "question": "relig_income has one column per income bracket. Reshape it so each row is a religion × income bracket with its frequency.",
    "code": "relig_income %>% \n  \n  pivot_longer(-religion, names_to = \"income\", values_to = \"frequency\")\n#> # A tibble: 180 × 3\n#>    religion income             frequency\n#>    <chr>    <chr>                  <dbl>\n#>  1 Agnostic <$10k                     27\n#>  2 Agnostic $10-20k                   34\n#>  3 Agnostic $20-30k                   60\n#>  4 Agnostic $30-40k                   81\n#>  5 Agnostic $40-50k                   76\n#>  6 Agnostic $50-75k                  137\n#>  7 Agnostic $75-100k                 122\n#>  8 Agnostic $100-150k                109\n#>  9 Agnostic >150k                     84\n#> 10 Agnostic Don't know/refused        96\n#> # ℹ 170 more rows",
    "comment": "**Spot the problem:** the income brackets (`<$10k`, `$10-20k`…) are column **names** but they're really values of an \"income\" variable → `pivot_longer()`.\n\n**`-religion`** = \"stack every column except religion\". Shorter than listing all 10 brackets.\n\n18 religions × 10 brackets = **180 rows**.",
    "key": false
   },
   {
    "id": "lec-12-c08",
    "label": "Practice: WHO tuberculosis data (pivot + separate)",
    "question": "The who data stores type of diagnosis, sex and age group in column names such as new_sp_m014. Tidy it step by step.",
    "code": "who1 <- who %>%\n  \n    pivot_longer(\n    \n    cols = new_sp_m014:newrel_f65,\n    \n    names_to = \"key\",\n    \n    values_to = \"cases\", \n    \n    values_drop_na = TRUE)\n\nprint(who1)\n#> # A tibble: 76,046 × 6\n#>    country     iso2  iso3   year key          cases\n#>    <chr>       <chr> <chr> <dbl> <chr>        <dbl>\n#>  1 Afghanistan AF    AFG    1997 new_sp_m014      0\n#>  2 Afghanistan AF    AFG    1997 new_sp_m1524    10\n#>  3 Afghanistan AF    AFG    1997 new_sp_m2534     6\n#>  4 Afghanistan AF    AFG    1997 new_sp_m3544     3\n#>  5 Afghanistan AF    AFG    1997 new_sp_m4554     5\n#>  6 Afghanistan AF    AFG    1997 new_sp_m5564     2\n#>  7 Afghanistan AF    AFG    1997 new_sp_m65       0\n#>  8 Afghanistan AF    AFG    1997 new_sp_f014      5\n#>  9 Afghanistan AF    AFG    1997 new_sp_f1524    38\n#> 10 Afghanistan AF    AFG    1997 new_sp_f2534    36\n#> # ℹ 76,036 more rows\n\n## just run this code\n\nwho2 <- who1 %>% \n  \n  mutate(key = stringr::str_replace(key, \"newrel\", \"new_rel\"))\n\nwho3 <- who2 %>% \n  \n  separate(key, c(\"new\", \"type\", \"sexage\"), sep = \"_\")\n\nprint(who3)\n#> # A tibble: 76,046 × 8\n#>    country     iso2  iso3   year new   type  sexage cases\n#>    <chr>       <chr> <chr> <dbl> <chr> <chr> <chr>  <dbl>\n#>  1 Afghanistan AF    AFG    1997 new   sp    m014       0\n#>  2 Afghanistan AF    AFG    1997 new   sp    m1524     10\n#>  3 Afghanistan AF    AFG    1997 new   sp    m2534      6\n#>  4 Afghanistan AF    AFG    1997 new   sp    m3544      3\n#>  5 Afghanistan AF    AFG    1997 new   sp    m4554      5\n#>  6 Afghanistan AF    AFG    1997 new   sp    m5564      2\n#>  7 Afghanistan AF    AFG    1997 new   sp    m65        0\n#>  8 Afghanistan AF    AFG    1997 new   sp    f014       5\n#>  9 Afghanistan AF    AFG    1997 new   sp    f1524     38\n#> 10 Afghanistan AF    AFG    1997 new   sp    f2534     36\n#> # ℹ 76,036 more rows\n\nwho4 <- who3 %>%\n  \n  separate(sexage, c(\"sex\", \"age\"), sep = 1)\n\nprint(who4)\n#> # A tibble: 76,046 × 9\n#>    country   iso2  iso3   year new   type  sex   age   cases\n#>    <chr>     <chr> <chr> <dbl> <chr> <chr> <chr> <chr> <dbl>\n#>  1 Afghanis… AF    AFG    1997 new   sp    m     014       0\n#>  2 Afghanis… AF    AFG    1997 new   sp    m     1524     10\n#>  3 Afghanis… AF    AFG    1997 new   sp    m     2534      6\n#>  4 Afghanis… AF    AFG    1997 new   sp    m     3544      3\n#>  5 Afghanis… AF    AFG    1997 new   sp    m     4554      5\n#>  6 Afghanis… AF    AFG    1997 new   sp    m     5564      2\n#>  7 Afghanis… AF    AFG    1997 new   sp    m     65        0\n#>  8 Afghanis… AF    AFG    1997 new   sp    f     014       5\n#>  9 Afghanis… AF    AFG    1997 new   sp    f     1524     38\n#> 10 Afghanis… AF    AFG    1997 new   sp    f     2534     36\n#> # ℹ 76,036 more rows",
    "comment": "**A real cleaning pipeline: one problem at a time.**\n1. **`pivot_longer(new_sp_m014:newrel_f65, names_to = \"key\", values_to = \"cases\", values_drop_na = TRUE)`**: 56 code columns → one `key` column. `values_drop_na = TRUE` drops the empty cells.\n2. **`str_replace(key, \"newrel\", \"new_rel\")`**: fixes inconsistent names so every key has two underscores (given code, \"just run this\").\n3. **`separate(key, c(\"new\", \"type\", \"sexage\"), sep = \"_\")`**: \"new_sp_m014\" → \"new\", \"sp\", \"m014\".\n4. **`separate(sexage, c(\"sex\", \"age\"), sep = 1)`**: \"m014\" → \"m\" + \"014\" (split after the 1st character).\n\n**Pattern:** look at the messy column names, write down what each piece means, then pivot first and separate after.",
    "key": false
   },
   {
    "id": "lec-12-c09",
    "label": "Practice: Billboard charts (pivot_longer with starts_with)",
    "question": "The billboard data has one column per week on the chart (wk1, wk2, …). Reshape it so each row is a song in a week with its rank.",
    "code": "billboard2 <- billboard %>% \n  \n  pivot_longer(\n    \n    cols = starts_with(\"wk\"), \n    \n    names_to = \"week\",\n    \n    values_to = \"rank\", \n    \n    values_drop_na = TRUE)\n\nprint(billboard2)\n#> # A tibble: 5,307 × 5\n#>    artist  track                   date.entered week   rank\n#>    <chr>   <chr>                   <date>       <chr> <dbl>\n#>  1 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk1      87\n#>  2 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk2      82\n#>  3 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk3      72\n#>  4 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk4      77\n#>  5 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk5      87\n#>  6 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk6      94\n#>  7 2 Pac   Baby Don't Cry (Keep... 2000-02-26   wk7      99\n#>  8 2Ge+her The Hardest Part Of ... 2000-09-02   wk1      91\n#>  9 2Ge+her The Hardest Part Of ... 2000-09-02   wk2      87\n#> 10 2Ge+her The Hardest Part Of ... 2000-09-02   wk3      92\n#> # ℹ 5,297 more rows\n\nbillboard3 <- billboard %>% \n  \n  pivot_longer(\n    \n    cols = starts_with(\"wk\"), \n    \n    names_to = \"week\",\n    \n    names_prefix = \"wk\",\n    \n    names_transform = as.integer,\n    \n    values_to = \"rank\", \n    \n    values_drop_na = TRUE)\n\n\nprint(billboard3)\n#> # A tibble: 5,307 × 5\n#>    artist  track                   date.entered  week  rank\n#>    <chr>   <chr>                   <date>       <int> <dbl>\n#>  1 2 Pac   Baby Don't Cry (Keep... 2000-02-26       1    87\n#>  2 2 Pac   Baby Don't Cry (Keep... 2000-02-26       2    82\n#>  3 2 Pac   Baby Don't Cry (Keep... 2000-02-26       3    72\n#>  4 2 Pac   Baby Don't Cry (Keep... 2000-02-26       4    77\n#>  5 2 Pac   Baby Don't Cry (Keep... 2000-02-26       5    87\n#>  6 2 Pac   Baby Don't Cry (Keep... 2000-02-26       6    94\n#>  7 2 Pac   Baby Don't Cry (Keep... 2000-02-26       7    99\n#>  8 2Ge+her The Hardest Part Of ... 2000-09-02       1    91\n#>  9 2Ge+her The Hardest Part Of ... 2000-09-02       2    87\n#> 10 2Ge+her The Hardest Part Of ... 2000-09-02       3    92\n#> # ℹ 5,297 more rows\n\nbillboard3 %>%\n  \n  arrange(artist, track, week)\n#> # A tibble: 5,307 × 5\n#>    artist  track                   date.entered  week  rank\n#>    <chr>   <chr>                   <date>       <int> <dbl>\n#>  1 2 Pac   Baby Don't Cry (Keep... 2000-02-26       1    87\n#>  2 2 Pac   Baby Don't Cry (Keep... 2000-02-26       2    82\n#>  3 2 Pac   Baby Don't Cry (Keep... 2000-02-26       3    72\n#>  4 2 Pac   Baby Don't Cry (Keep... 2000-02-26       4    77\n#>  5 2 Pac   Baby Don't Cry (Keep... 2000-02-26       5    87\n#>  6 2 Pac   Baby Don't Cry (Keep... 2000-02-26       6    94\n#>  7 2 Pac   Baby Don't Cry (Keep... 2000-02-26       7    99\n#>  8 2Ge+her The Hardest Part Of ... 2000-09-02       1    91\n#>  9 2Ge+her The Hardest Part Of ... 2000-09-02       2    87\n#> 10 2Ge+her The Hardest Part Of ... 2000-09-02       3    92\n#> # ℹ 5,297 more rows",
    "comment": "**`cols = starts_with(\"wk\")`** picks all 76 week columns without typing them.\n\n**`values_drop_na = TRUE`**: most songs drop off the chart early, so most week cells are `NA`; this keeps only the weeks each song was ranked.\n\n**Next steps you might be asked for:**\n- turn \"wk1\" into the number 1 (`readr::parse_number(week)`), then `group_by(track)` and `summarise(best = min(rank))`.",
    "key": false
   }
  ],
  "notes": "Reshaping data so each variable is a column and each observation is a row. Course notes: https://ap4347.github.io/2102/lecture-12.html\n\n**Which function?**\n\n| Problem in the data | Function |\n|---|---|\n| column **names** are values (`1999`, `2000`) | `pivot_longer()` |\n| one observation spread over several **rows** | `pivot_wider()` |\n| two values in one cell (`\"745/19987071\"`) | `separate()` |\n| one value split across columns | `unite()` |\n| missing combinations / `NA`s | `complete()`, `fill()`, `replace_na()`, `drop_na()` |",
  "takeaways": [
   "Tidy: each variable a column, each observation a row, each value a cell.",
   "pivot_longer(cols, names_to = \"new name col\", values_to = \"new value col\") makes data longer.",
   "pivot_wider(names_from = col, values_from = col) makes data wider.",
   "separate(col, into = c(...), sep = \"/\") splits; convert = TRUE turns text numbers into numbers.",
   "complete() makes implicit missing values explicit; fill(), replace_na(), drop_na() handle NAs."
  ],
  "updatedAt": "2026-10-14T16:30:00Z"
 },
 "kit-01": {
  "type": "kit",
  "num": "",
  "title": "Files, setup and quick checks",
  "date": "",
  "exams": [],
  "topics": [
   "read.csv",
   "read.table",
   "write.csv",
   "setwd",
   "library",
   "str",
   "summary",
   "missing values",
   "types",
   "table"
  ],
  "pdfs": [],
  "chunks": [
   {
    "id": "kit-01-c01",
    "label": "Start of every R file / session",
    "question": "Clear the workspace, check where R is looking for files, set the folder, and load packages.",
    "code": "rm(list = ls())                  # clear everything from the Environment\n\ngetwd()                          # which folder is R using right now?\nsetwd(\"~/Desktop/STAT2102\")      # point R at your class folder (Mac path)\n# Session > Set Working Directory > Choose Directory...  does the same with clicks\n\ninstall.packages(\"dplyr\")        # ONCE per computer (in the Console, not in your .qmd)\nlibrary(dplyr)                   # EVERY session / at the top of every .qmd\nlibrary(tidyverse)               # loads dplyr, tidyr, ggplot2 ... all at once",
    "comment": "**Order that avoids most errors:** clear → set folder → load packages → import data.\n\n- **`setwd()`**: R looks for files in this folder. If `read.csv()` says *cannot open file*, the folder is wrong. Check with `getwd()` and `list.files()`.\n- **`install.packages()` vs `library()`**: install once (downloads it); `library()` every session (turns it on). Don't put `install.packages()` in a homework `.qmd`, because it re-installs every time you render.\n- **Error \"could not find function `%>%`\" or \"`filter`\"** → you forgot `library(dplyr)`.\n\n**In Quarto:** the folder is automatically the one the `.qmd` file is saved in, so keep the data file **next to** the `.qmd` and you won't need `setwd()`.",
    "key": true
   },
   {
    "id": "kit-01-c02",
    "label": "Import data: read.csv() and read.table()",
    "question": "Import a data set into R so that text columns become factors.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\nstr(df)\n#> 'data.frame':\t6 obs. of  4 variables:\n#>  $ Employee  : Factor w/ 6 levels \"Anna\",\"Ben\",\"Carla\",..: 1 2 3 4 5 6\n#>  $ Department: Factor w/ 3 levels \"Analytics\",\"Finance\",..: 1 3 1 2 3 1\n#>  $ Experience: int  2 7 5 NA 3 6\n#>  $ Salary    : int  68000 85000 NA 105000 72000 92000\n\n# read.table() is the general version: say there's a header and what separates values\ndf_tab <- read.table(\"employees.txt\", header = TRUE, sep = \"\\t\", stringsAsFactors = TRUE)\ndim(df_tab)\n#> [1] 6 4\n\n# Can't find the path? Pick the file in a window instead:\n# df <- read.csv(file.choose(), stringsAsFactors = TRUE)",
    "comment": "**Which one?**\n- `.csv` file → `read.csv(\"file.csv\", stringsAsFactors = TRUE)`. It already knows there's a header and that values are separated by commas.\n- Anything else (`.txt`, tab- or space-separated) → `read.table(\"file.txt\", header = TRUE, sep = \"\\t\")`. `sep = \",\"` for commas, `sep = \"\"` (default) for spaces.\n\n**`stringsAsFactors = TRUE`**: text columns become **factors** (check: `str()` says `Factor`). The review session said to use this; it's what `tapply()`, `table()`, `boxplot(y ~ group)` and `barplot()` expect.\n\n**Common errors**\n- *cannot open file … No such file or directory* → wrong folder or misspelled name (check `getwd()` and `list.files()`).\n- Everything ends up in one column → wrong `sep`.\n- First row of data became the column names (or the other way around) → fix `header =`.",
    "key": true
   },
   {
    "id": "kit-01-c02b",
    "label": "Read a file straight from Downloads (full path)",
    "key": true,
    "question": "Import a CSV that is sitting in your Downloads folder without moving it or changing the working directory.",
    "code": "carseats <- read.csv(\"~/Downloads/carseats.csv\", stringsAsFactors = TRUE)\nstr(carseats)\n\n# same idea for other files / folders\nemployees <- read.csv(\"~/Downloads/employee_survey_data.csv\", stringsAsFactors = TRUE)\ndf_txt    <- read.table(\"~/Downloads/data.txt\", header = TRUE, sep = \"\\t\", stringsAsFactors = TRUE)\ndf_desk   <- read.csv(\"~/Desktop/STAT2102/data.csv\", stringsAsFactors = TRUE)\n\n# not sure of the exact name? list what's in Downloads\nlist.files(\"~/Downloads\", pattern = \"csv\")",
    "comment": "**How the path works (Mac)**\n- `~` = your home folder, so `\"~/Downloads/carseats.csv\"` = the file `carseats.csv` inside **Downloads**.\n- The whole path goes **inside quotes**, with forward slashes `/`.\n- **Capital D** in `Downloads` and `Desktop`, and the file name must match exactly, including `.csv`.\n\n**If you get \"cannot open file … No such file or directory\":**\n1. Run `list.files(\"~/Downloads\", pattern = \"csv\")` and copy the name exactly as it prints (browsers sometimes save a second copy as `carseats (1).csv`).\n2. Or skip typing the path: `read.csv(file.choose(), stringsAsFactors = TRUE)` opens a window to pick the file.\n\n**For homework you render:** it's safer to move the CSV into the **same folder as your `.qmd`** and use just `read.csv(\"carseats.csv\", ...)`. A Downloads path works on your computer only, and breaks if the file is moved or renamed.\n\n**Windows:** the path looks like `\"C:/Users/YourName/Downloads/carseats.csv\"` (forward slashes, or double backslashes `\\\\`)."
   },
   {
    "id": "kit-01-c03",
    "label": "Save data: write.csv() and write.table()",
    "question": "Export a data frame to a file.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\ndf$Salary_K <- df$Salary / 1000\n\nwrite.csv(df, \"employees_clean.csv\", row.names = FALSE)\nwrite.table(df, \"employees_clean.txt\", sep = \"\\t\", row.names = FALSE)\n\nlist.files(pattern = \"clean\")     # check the files were created\n#> [1] \"employees_clean.csv\" \"employees_clean.txt\"",
    "comment": "**Always add `row.names = FALSE`.** Without it R writes an extra unnamed first column (1, 2, 3…), which shows up as `X` when you read the file back in.\n\nThe file is saved in the **working directory** (`getwd()`). Give a full path to save somewhere else.",
    "key": false
   },
   {
    "id": "kit-01-c04",
    "label": "First look at a data set",
    "question": "Examine the structure, a summary of the variables, the first rows and the dimensions of a data frame.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\n\nstr(df)          # column names, types, first values\n#> 'data.frame':\t6 obs. of  4 variables:\n#>  $ Employee  : Factor w/ 6 levels \"Anna\",\"Ben\",\"Carla\",..: 1 2 3 4 5 6\n#>  $ Department: Factor w/ 3 levels \"Analytics\",\"Finance\",..: 1 3 1 2 3 1\n#>  $ Experience: int  2 7 5 NA 3 6\n#>  $ Salary    : int  68000 85000 NA 105000 72000 92000\nsummary(df)      # min / median / mean / max, counts for factors, NA's\n#>   Employee     Department   Experience      Salary      \n#>  Anna :1   Analytics:3    Min.   :2.0   Min.   : 68000  \n#>  Ben  :1   Finance  :1    1st Qu.:3.0   1st Qu.: 72000  \n#>  Carla:1   Marketing:2    Median :5.0   Median : 85000  \n#>  David:1                  Mean   :4.6   Mean   : 84400  \n#>  Emma :1                  3rd Qu.:6.0   3rd Qu.: 92000  \n#>  Frank:1                  Max.   :7.0   Max.   :105000  \n#>                           NA's   :1     NA's   :1       \nhead(df, 3)      # first 3 rows   (tail(df, 3) = last 3)\n#>   Employee Department Experience Salary\n#> 1     Anna  Analytics          2  68000\n#> 2      Ben  Marketing          7  85000\n#> 3    Carla  Analytics          5     NA\ndim(df)          # rows, columns\n#> [1] 6 4\nnrow(df); ncol(df)\n#> [1] 6\n#> [1] 4\nnames(df)        # same as colnames(df)\n#> [1] \"Employee\"   \"Department\" \"Experience\" \"Salary\"    \nlevels(df$Department)\n#> [1] \"Analytics\" \"Finance\"   \"Marketing\"\n# View(df)       # opens a spreadsheet-style tab (RStudio only, not in a rendered file)",
    "comment": "**Run these right after importing, every time.** They answer the questions you need before writing any code:\n- What are the column names exactly (capitals, underscores)? → `names()`\n- Are text columns factors and numbers numeric? → `str()`\n- Are there missing values? → `summary()` shows `NA's`\n- How big is it? → `dim()`\n\n**Use `head()` after each change** (new column, filter) to show the manipulation worked, as the review session suggested.\n\n**`View()` doesn't work when rendering**, so leave it out of homework files.",
    "key": true
   },
   {
    "id": "kit-01-c05",
    "label": "Missing values (NA)",
    "question": "Find and handle missing values: count them, ignore them in calculations, or remove rows that have them.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\n\nis.na(df$Salary)              # TRUE where missing\n#> [1] FALSE FALSE  TRUE FALSE FALSE FALSE\nsum(is.na(df$Salary))         # how many missing\n#> [1] 1\ncolSums(is.na(df))            # missing per column\n#>   Employee Department Experience     Salary \n#>          0          0          1          1 \n\nmean(df$Salary)               # NA: one missing value spoils the result\n#> [1] NA\nmean(df$Salary, na.rm = TRUE) # ignore the NAs\n#> [1] 84400\n\ncomplete <- na.omit(df)       # drop rows with ANY missing value\nnrow(complete)\n#> [1] 4\ndf[!is.na(df$Salary), ]       # drop rows missing just Salary\n#>   Employee Department Experience Salary\n#> 1     Anna  Analytics          2  68000\n#> 2      Ben  Marketing          7  85000\n#> 4    David    Finance         NA 105000\n#> 5     Emma  Marketing          3  72000\n#> 6    Frank  Analytics          6  92000",
    "comment": "**Rule:** any calculation that touches an `NA` returns `NA`. Add **`na.rm = TRUE`** to `mean()`, `median()`, `sum()`, `sd()`, `min()`, `max()`, and inside `tapply(..., mean, na.rm = TRUE)` and `summarise(m = mean(x, na.rm = TRUE))`.\n\n**Don't test with `== NA`**. It always gives NA. Use `is.na(x)`; `!is.na(x)` means \"not missing\".\n\n**Removing:** `na.omit(df)` drops a row if **any** column is missing (here 6 → 4 rows). To only drop rows missing one variable, filter on that column.",
    "key": true
   },
   {
    "id": "kit-01-c06",
    "label": "Check and convert types",
    "question": "Check what type a variable is and convert between numeric, character and factor.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\n\nclass(df$Salary)\n#> [1] \"integer\"\nclass(df$Department)\n#> [1] \"factor\"\n\nas.character(df$Department)          # factor -> text\n#> [1] \"Analytics\" \"Marketing\" \"Analytics\" \"Finance\"   \"Marketing\" \"Analytics\"\nas.numeric(c(\"10\", \"20.5\", \"abc\"))   # text -> numbers (\"abc\" becomes NA, with a warning)\n#> [1] 10.0 20.5   NA\n#> Warning message: NAs introduced by coercion\n\nf <- factor(c(\"10\", \"20\", \"10\"))\nas.numeric(f)                        # WRONG: gives the level codes 1 2 1\n#> [1] 1 2 1\nas.numeric(as.character(f))          # RIGHT: 10 20 10\n#> [1] 10 20 10\n\ndf$Department <- factor(df$Department, levels = c(\"Finance\", \"Marketing\", \"Analytics\"))\nlevels(df$Department)\n#> [1] \"Finance\"   \"Marketing\" \"Analytics\"",
    "comment": "**Most common type problems**\n- Numbers read in as text (because one cell had a typo) → `as.numeric()`. Values that can't convert become `NA`.\n- **Factor of numbers:** `as.numeric(f)` gives the internal codes (1, 2, 1), **not** the values. Always go through `as.character()` first.\n- Want the categories in a specific order (tables, plots)? `factor(x, levels = c(...))`.\n\n`class()` tells you the type: `\"numeric\"`, `\"integer\"`, `\"character\"`, `\"factor\"`, `\"logical\"`, `\"data.frame\"`.",
    "key": false
   },
   {
    "id": "kit-01-c07",
    "label": "Counting, unique values and sorting",
    "question": "Count how many times each value appears, find the distinct values, and sort.",
    "code": "df <- read.csv(\"employees.csv\", stringsAsFactors = TRUE)\n\ntable(df$Department)                          # counts per category\n#> Analytics   Finance Marketing \n#>         3         1         2 \nprop.table(table(df$Department))              # proportions\n#> Analytics   Finance Marketing \n#> 0.5000000 0.1666667 0.3333333 \nsort(table(df$Department), decreasing = TRUE) # most common first\n#> Analytics Marketing   Finance \n#>         3         2         1 \n\nunique(df$Department)                         # distinct values\n#> [1] Analytics Marketing Finance  \n#> Levels: Analytics Finance Marketing\nlength(unique(df$Department))                 # how many distinct\n#> [1] 3\n\nsort(df$Salary, decreasing = TRUE)            # sort a vector (NAs dropped)\n#> [1] 105000  92000  85000  72000  68000\ndf[order(df$Salary, decreasing = TRUE), ]     # sort the ROWS of a data frame\n#>   Employee Department Experience Salary\n#> 4    David    Finance         NA 105000\n#> 6    Frank  Analytics          6  92000\n#> 2      Ben  Marketing          7  85000\n#> 5     Emma  Marketing          3  72000\n#> 1     Anna  Analytics          2  68000\n#> 3    Carla  Analytics          5     NA\nwhich.max(df$Salary); df$Employee[which.max(df$Salary)]\n#> [1] 4\n#> [1] David\n#> Levels: Anna Ben Carla David Emma Frank",
    "comment": "- `table()` counts; `prop.table(table())` turns counts into shares.\n- `sort()` sorts **one vector**; `order()` gives the row order for sorting a **whole data frame**.\n- `which.max()` gives the **position** of the largest value, so use it to look up the matching name in another column.\n- `round(x, 2)` for cleaner printed numbers, e.g. `round(prop.table(table(x)), 2)`.",
    "key": false
   },
   {
    "id": "kit-01-c08",
    "label": "Quarto homework skeleton (.qmd)",
    "question": "The parts every homework .qmd file needs.",
    "code": "---\ntitle: \"Homework Assignment 3\"\nauthor: \"Emelia Davis\"\nformat: pdf\n---\n\n```{r}\n#| label: setup\n#| include: false\nlibrary(dplyr)\ndf <- read.csv(\"data.csv\", stringsAsFactors = TRUE)\n```\n\n# Problem 1\n\n## Part 1\n\n```{r}\n# your code for Part 1\n```\n\nShort sentence interpreting the output.",
    "comment": "**New file:** File → New File → **Quarto Document…** → save it as `hw3.qmd` in the **same folder as your data**.\n\n**Quarto vs the old R Markdown way (what changes):**\n\n| | Quarto (`.qmd`) | R Markdown (`.Rmd`) |\n|---|---|---|\n| Output in the header | `format: pdf` | `output: pdf_document` |\n| Chunk options | `#\\| include: false` lines inside the chunk | `{r setup, include = FALSE}` |\n| Make the PDF | **Render** button (Cmd+Shift+K) | Knit button |\n\nEverything else (the `---` header, `# headings`, ```` ```{r} ```` chunks, Markdown text) is the same.\n\n**Setup chunk with `#| include: false`** loads packages and data without cluttering the PDF. Other handy options: `#| echo: false` (show output, hide code), `#| warning: false`, `#| message: false` (hide the many-to-many / package startup messages).\n\n**PDF needs LaTeX once:** run `quarto install tinytex` in RStudio's **Terminal** tab (or `tinytex::install_tinytex()` in the Console). While fixing errors you can use `format: html`, then switch back to `pdf`.\n\n**Before submitting:** Session → Restart R, then **Render**. Rendering runs everything from the top in a fresh session, the same way your grader sees it, so a missing `library()` or a `View()` will show up here.",
    "key": false
   }
  ],
  "notes": "Code you use in almost every homework and on the exam: setting up, importing and saving data, first checks, missing values, types and counting.\n\n**Add your own:** click **Edit** on this entry and use **+ Add chunk**, or make a new entry with **+ New entry** and pick the type **Everyday code**. Two of these chunks (the setup lines and the Quarto skeleton) are shown without output because they only make sense in your own RStudio.",
  "takeaways": [
   "read.csv(\"file.csv\", stringsAsFactors = TRUE); read.table(\"file.txt\", header = TRUE, sep = \"\\t\").",
   "write.csv(df, \"file.csv\", row.names = FALSE).",
   "After importing: str(), summary(), head(), dim(), names().",
   "Add na.rm = TRUE to mean/sum/median/sd when there are NAs; test with is.na(), never == NA.",
   "Factor of numbers → as.numeric(as.character(f)).",
   "install.packages() once in the Console; library() every session and at the top of every .qmd.",
   "Homework files are Quarto (.qmd): format: pdf in the header, chunk options as #| lines, Render button to make the PDF."
  ],
  "updatedAt": "2026-10-14T17:00:00Z",
  "remember": []
 },
 "core-01": {
  "type": "core",
  "num": "01",
  "title": "Random draws: dice, coins, cards and sample()",
  "date": "",
  "exams": [],
  "topics": [
   "sample",
   "set.seed",
   "dice",
   "coins",
   "cards",
   "deck",
   "urn",
   "replace",
   "prob",
   "table"
  ],
  "pdfs": [],
  "notes": "The building blocks of every simulation question: rolling dice, flipping coins, dealing cards and drawing from an urn, all with `sample()`.\n\n**The one rule to remember:** `sample(x, size, replace = ?, prob = ?)`\n- **replace = TRUE** → things can repeat (dice, coins, anything you \"do again\").\n- **replace = FALSE** (the default) → no repeats (cards, people, balls taken out of an urn).\n- **prob =** → unfair dice/coins: one probability per item in `x`, same order.\n\nRun `set.seed(1)` first if you want the same \"random\" numbers every time (outputs here use it).\n\n**Every chunk ends with \"As a function\".** To turn any code into a function:\n1. Find the numbers and data that would change in a new question (n, p, the target, the title). Those become the **arguments**, with defaults for the usual values.\n2. Put the code inside `name <- function(args) { ... }` and replace those numbers with the argument names.\n3. Make the **last line** what you want back: one value, a named vector `c(a = ..., b = ...)` for several numbers, or a `list()` for mixed things. Plot functions can `invisible()` the numbers.\n4. Call it once to check, then reuse it with new arguments (or run it over many values with `sapply`).",
  "takeaways": [
   "Dice and coins: sample(..., replace = TRUE). Cards, people and urns: replace = FALSE (the default).",
   "Unfair outcomes: prob = c(...), one probability per item, in the same order as x.",
   "Count how many: sum(x == value). Proportion: mean(x == value).",
   "table(factor(x, levels = 1:6)) so faces that never came up still show as 0.",
   "Deal from a deck: build it with rep() or expand.grid(), then sample(deck, 5)."
  ],
  "updatedAt": "2026-10-15T17:30:00Z",
  "remember": [],
  "chunks": [
   {
    "id": "core-01-c01",
    "label": "sample() and set.seed(): the basics",
    "question": "How do I draw random values from a set of options, with or without repeats, and make the result repeatable?",
    "code": "set.seed(1)                         # same random numbers every time you run from here\nsample(1:10, 3)                     # 3 numbers, no repeats (replace = FALSE is the default)\n#> [1] 9 4 7\nsample(1:10, 3, replace = TRUE)     # 3 numbers, repeats allowed\n#> [1] 1 2 7\nsample(c(\"A\", \"B\", \"C\"))            # no size: shuffles the whole vector\n#> [1] \"C\" \"B\" \"A\"\nsample(5)                           # shortcut: shuffles 1:5\n#> [1] 3 5 1 4 2\n\n# ---- As a function ----\ndraw <- function(options, n, replace = FALSE, seed = NULL) {\n  if (!is.null(seed)) set.seed(seed)      # optional: only set a seed if one is given\n  sample(options, n, replace = replace)\n}\ndraw(1:10, 3, seed = 1)\n#> [1] 9 4 7\ndraw(c(\"A\", \"B\", \"C\"), 5, replace = TRUE, seed = 2)\n#> [1] \"A\" \"C\" \"B\" \"B\" \"A\"",
    "comment": "**`sample(x, size, replace, prob)`** picks `size` items from `x`.\n\n| You want | Code |\n|---|---|\n| pick without repeats (cards, people) | `sample(x, k)` |\n| pick with repeats (dice, coins) | `sample(x, k, replace = TRUE)` |\n| unfair / weighted picks | `sample(x, k, replace = TRUE, prob = c(...))` |\n| shuffle everything | `sample(x)` |\n\n**Common error:** `sample(1:6, 10)` fails with \"cannot take a sample larger than the population when 'replace = FALSE'\". You asked for 10 items from 6 without repeats; add `replace = TRUE`.\n\n**`set.seed(any number)`** makes the next random draws repeatable. Use it when a question says \"set the seed to …\" or when you want to check your answer twice. **Trap:** `sample(5)` shuffles 1:5. It doesn't return the number 5.\n\n**As a function (bottom of the code):** **Arguments** are the things that change between questions: what to draw from, how many, with or without replacement. `replace = FALSE` and `seed = NULL` are **defaults**, so you can leave them out. `if (!is.null(seed))` only sets a seed when you pass one. **Returns** the draws (the last line).",
    "key": true
   },
   {
    "id": "core-01-c02",
    "label": "Roll dice: one die, many rolls, counts and proportions",
    "question": "Roll a fair six-sided die 20 times. How often did each face come up? What proportion were sixes? What is the average roll?",
    "code": "set.seed(1)\nsample(1:6, 1)                                # roll one die\n#> [1] 1\n\nrolls <- sample(1:6, 20, replace = TRUE)      # roll a die 20 times\nrolls\n#>  [1] 4 1 2 5 3 6 2 3 3 1 5 5 2 6 6 2 1 5 5 1\ntable(rolls)                                  # how many of each face\n#> rolls\n#> 1 2 3 4 5 6 \n#> 4 4 3 1 5 3 \ntable(factor(rolls, levels = 1:6))            # same, but faces that never came up show 0\n#> 1 2 3 4 5 6 \n#> 4 4 3 1 5 3 \nsum(rolls == 6)                               # how many sixes\n#> [1] 3\nmean(rolls == 6)                              # proportion of sixes\n#> [1] 0.15\nmean(rolls)                                   # average roll (true average is 3.5)\n#> [1] 3.4\n\n# ---- As a function ----\nroll_die <- function(n, sides = 6, target = 6) {\n  rolls <- sample(1:sides, n, replace = TRUE)\n  list(rolls = rolls,\n       counts = table(factor(rolls, levels = 1:sides)),\n       prop_target = mean(rolls == target),\n       average = mean(rolls))\n}\nset.seed(1)\nresult <- roll_die(20)\nresult$counts\n#> 1 2 3 4 5 6 \n#> 4 4 3 1 5 3 \nresult$prop_target\n#> [1] 0.15\nroll_die(1000, sides = 20, target = 20)$average      # a 20-sided die\n#> [1] 10.455",
    "comment": "**The pattern:** roll many times with `sample(1:6, n, replace = TRUE)`, then summarize.\n- `table(rolls)` → counts per face.\n- `sum(rolls == 6)` → **how many** sixes: `rolls == 6` is TRUE/FALSE, and TRUE counts as 1.\n- `mean(rolls == 6)` → **proportion** of sixes, the share of TRUEs.\n- `mean(rolls)` → the average face value. The long-run average of a fair die is 3.5.\n\n**Why `factor(rolls, levels = 1:6)`:** `table()` only lists values that appeared. If no 3 was rolled, the table has 5 columns, so counts end up under the wrong face when you compare tables or divide by 6 probabilities (that bug is in the HW 2 solutions). Setting `levels = 1:6` keeps all six faces, with 0 where needed.\n\n**Similar questions:** \"a 20-sided die\" → `sample(1:20, ...)`. \"Roll until …\" → see the next tab entry. \"Proportion of even rolls\" → `mean(rolls %% 2 == 0)`.\n\n**As a function (bottom of the code):** **Arguments:** `n` (rolls), `sides` (a die with any number of faces) and `target` (the face whose proportion you want), each with a sensible default. **Returns a list** because the pieces are different shapes: a vector of rolls, a table and two single numbers. Grab one piece with `result$counts`, or chain it straight onto the call: `roll_die(...)$average`.",
    "key": true
   },
   {
    "id": "core-01-c03",
    "label": "Two dice: sums, doubles and comparisons",
    "question": "Roll two dice 1,000 times. What is the distribution of the sum? Estimate P(sum = 7) and P(doubles).",
    "code": "set.seed(1)\nn <- 1000\ndie1 <- sample(1:6, n, replace = TRUE)\ndie2 <- sample(1:6, n, replace = TRUE)\ntotal <- die1 + die2                    # adds roll by roll (element-wise)\n\ntable(total)\n#> total\n#>   2   3   4   5   6   7   8   9  10  11  12 \n#>  28  50  79 112 148 167 150 105  82  58  21 \nmean(total == 7)                        # estimate; exact is 6/36 = 0.1667\n#> [1] 0.167\nmean(die1 == die2)                      # doubles; exact is 6/36\n#> [1] 0.14\nmean(total >= 10)                       # sum of 10 or more; exact is 6/36\n#> [1] 0.161\nmean(die1 > die2)                       # first die beats the second; exact is 15/36 = 0.4167\n#> [1] 0.424\n\n# Exact answers by listing all 36 outcomes\nall_rolls <- expand.grid(d1 = 1:6, d2 = 1:6)\nnrow(all_rolls)\n#> [1] 36\nmean(all_rolls$d1 + all_rolls$d2 == 7)\n#> [1] 0.1666667\n\n# ---- As a function ----\ntwo_dice <- function(n, target = 7) {\n  die1 <- sample(1:6, n, replace = TRUE)\n  die2 <- sample(1:6, n, replace = TRUE)\n  total <- die1 + die2\n  c(p_target = mean(total == target),\n    p_doubles = mean(die1 == die2),\n    p_first_wins = mean(die1 > die2))\n}\nset.seed(1)\ntwo_dice(1000)\n#>     p_target    p_doubles p_first_wins \n#>        0.167        0.140        0.424 \ntwo_dice(10000, target = 10)\n#>     p_target    p_doubles p_first_wins \n#>       0.0880       0.1676       0.4175 ",
    "comment": "**Roll each die separately, then combine:** `die1 + die2` adds **position by position**, so `total[1]` is the sum of the first pair of rolls. Any combination works the same way: `die1 * die2`, `pmax(die1, die2)` (the larger of each pair), `die1 == die2` (doubles).\n\n**Estimates vs exact:** with 1,000 rolls, estimates land close to the exact answers but not exactly on them. More rolls → closer.\n\n**Exact answers with `expand.grid()`:** it lists every combination (6 × 6 = 36 rows), so `mean(condition)` over those rows is the **exact** probability. It's a great way to check a simulation.\n\n**Other dice setups**\n- 3 dice: add `die3` the same way. \n- Unfair dice: add `prob =` (see the next chunk).\n- One line: `rowSums(matrix(sample(1:6, 2 * n, replace = TRUE), ncol = 2))`.\n\n**As a function (bottom of the code):** **Returns a named vector** (`c(name = value, ...)`), not a list, because every result is a single number. Named vectors print neatly and you can pick one with `[\"p_doubles\"]`. **The argument `target`** lets the same function answer \"P(sum = 7)\", \"P(sum = 10)\" and so on.",
    "key": true
   },
   {
    "id": "core-01-c04",
    "label": "Unfair (weighted) dice and coins with prob =",
    "question": "A die lands on 6 with probability 0.5 and on each other face with probability 0.1. Roll it 1,000 times. Flip a coin that lands heads 70% of the time 10 times.",
    "code": "set.seed(1)\nprobs <- c(0.1, 0.1, 0.1, 0.1, 0.1, 0.5)       # one probability per face, in order 1..6\nsum(probs)                                     # must add to 1\n#> [1] 1\nloaded <- sample(1:6, 1000, replace = TRUE, prob = probs)\nround(table(loaded) / 1000, 3)                 # observed proportions, close to probs\n#> loaded\n#>     1     2     3     4     5     6 \n#> 0.110 0.088 0.086 0.090 0.106 0.520 \n\ncoin <- sample(c(\"H\", \"T\"), 10, replace = TRUE, prob = c(0.7, 0.3))\ncoin\n#>  [1] \"H\" \"H\" \"H\" \"T\" \"H\" \"H\" \"H\" \"H\" \"T\" \"H\"\nsum(coin == \"H\")\n#> [1] 8\n\n# ---- As a function ----\nroll_unfair <- function(n, faces, probs) {\n  if (abs(sum(probs) - 1) > 1e-8) stop(\"probs must add up to 1\")\n  x <- sample(faces, n, replace = TRUE, prob = probs)\n  prop.table(table(factor(x, levels = faces)))\n}\nset.seed(1)\nround(roll_unfair(1000, faces = 1:6, probs = c(0.1, 0.1, 0.1, 0.1, 0.1, 0.5)), 3)\n#>     1     2     3     4     5     6 \n#> 0.110 0.088 0.086 0.090 0.106 0.520 \nroll_unfair(10, faces = c(\"H\", \"T\"), probs = c(0.7, 0.3))\n#>   H   T \n#> 0.8 0.2 ",
    "comment": "**`prob =` gives one probability per item of `x`, in the same order.** For `sample(1:6, ..., prob = probs)`, `probs[1]` belongs to face 1, …, `probs[6]` to face 6. For `c(\"H\", \"T\")` with `prob = c(0.7, 0.3)`, H gets 0.7.\n\n**Checks that save points**\n- `sum(probs)` should be 1. R rescales if it isn't, but then you've usually typed something wrong.\n- Need `replace = TRUE` whenever you draw more items than there are options.\n- `table(x) / n` (or `prop.table(table(x))`) should look like `probs` for a large n.\n\n**Exam wording:** \"Die1: {1 - 0.1, 2 - 0.25, …}\" → `sample(1:6, 1, prob = c(0.1, 0.25, ...))` (Recitation 4, Problem 1). \"Charge amounts 5, 10, …, 30 with probabilities …\" → `sample(seq(5, 30, by = 5), 1, prob = c(...))`.\n\n**As a function (bottom of the code):** **One function for any unfair die, coin or spinner:** pass the `faces` and their `probs`. **`stop(\"message\")`** ends the function with an error if the input makes no sense. Here, probabilities that don't add to 1 are almost always a typo. (`abs(...) > 1e-8` allows for tiny rounding.) **Returns** the observed proportions.",
    "key": true
   },
   {
    "id": "core-01-c05",
    "label": "Flip coins: count heads (sample vs rbinom)",
    "question": "Flip a fair coin 10 times and count the heads. Repeat the 10-flip experiment 5 times.",
    "code": "set.seed(1)\nflips <- sample(c(\"H\", \"T\"), 10, replace = TRUE)\nflips\n#>  [1] \"H\" \"T\" \"H\" \"H\" \"T\" \"H\" \"H\" \"H\" \"T\" \"T\"\nsum(flips == \"H\")                         # number of heads in these 10 flips\n#> [1] 6\n\n# Shortcut: the number of heads in 10 flips is Binomial(10, 0.5)\nrbinom(1, size = 10, prob = 0.5)          # one experiment of 10 flips -> heads count\n#> [1] 4\nrbinom(5, size = 10, prob = 0.5)          # 5 experiments -> 5 heads counts\n#> [1] 4 6 5 6 5\n\n# 0/1 coding: 1 = heads\ncoin01 <- sample(0:1, 10, replace = TRUE)\nsum(coin01)\n#> [1] 3\n\n# ---- As a function ----\ncount_heads <- function(n_flips, p = 0.5, n_experiments = 1) {\n  replicate(n_experiments,\n            sum(sample(c(\"H\", \"T\"), n_flips, replace = TRUE, prob = c(p, 1 - p)) == \"H\"))\n}\nset.seed(1)\ncount_heads(10)                                  # one experiment\n#> [1] 6\ncount_heads(10, n_experiments = 5)               # five experiments\n#> [1] 5 3 5 8 3\ncount_heads(10, p = 0.8, n_experiments = 5)      # an unfair coin\n#> [1]  8  6 10  8  8",
    "comment": "**Two ways to \"flip\":**\n- `sample(c(\"H\", \"T\"), n, replace = TRUE)` gives the **actual sequence**. Use it when the question cares about order or streaks (\"3 heads in a row\").\n- `rbinom(k, size = n, prob = p)` gives just the **number of heads** in n flips, repeated k times. Use it when only the count matters.\n\n**rbinom's arguments:** the first number is **how many experiments**, `size` is **flips per experiment**, `prob` is P(heads). `rbinom(5, 10, 0.5)` = five numbers, each the heads count from 10 flips. A common mistake is swapping the first argument and `size`.\n\n**Streaks need the sequence:** for \"until 3 heads in a row\", flip one at a time inside a `while` loop (Recitation 4, Problem 4).\n\n**As a function (bottom of the code):** **The body is one experiment wrapped in `replicate()`**, so the same function gives one heads count or many. It does the same job as `rbinom(n_experiments, n_flips, p)`, but built from `sample()` so you can see each step.",
    "key": true
   },
   {
    "id": "core-01-c06",
    "label": "Build a deck of cards and deal a hand",
    "question": "Create a standard 52-card deck, deal a 5-card hand, and count the aces and hearts in it.",
    "code": "ranks <- c(\"A\", 2:10, \"J\", \"Q\", \"K\")\nsuits <- c(\"Hearts\", \"Diamonds\", \"Clubs\", \"Spades\")\n\n# Way 1: a character vector like \"A Hearts\"\ndeck <- paste(rep(ranks, times = 4), rep(suits, each = 13))\nlength(deck)\n#> [1] 52\nhead(deck, 3)\n#> [1] \"A Hearts\" \"2 Hearts\" \"3 Hearts\"\n\n# Way 2: a data frame with rank and suit columns (easier to count)\ndeck_df <- expand.grid(rank = ranks, suit = suits, stringsAsFactors = FALSE)\nnrow(deck_df)\n#> [1] 52\n\nset.seed(1)\nhand <- deck_df[sample(1:52, 5), ]       # deal 5 cards: 5 random ROWS, no repeats\nhand\n#>    rank     suit\n#> 4     4   Hearts\n#> 39    K    Clubs\n#> 1     A   Hearts\n#> 34    8    Clubs\n#> 23   10 Diamonds\nsum(hand$rank == \"A\")                    # aces in the hand\n#> [1] 1\nsum(hand$suit == \"Hearts\")               # hearts in the hand\n#> [1] 2\nany(duplicated(hand$rank))               # TRUE if the hand has at least a pair\n#> [1] FALSE\n\n# ---- As a function ----\nmake_deck <- function() {\n  ranks <- c(\"A\", 2:10, \"J\", \"Q\", \"K\")\n  suits <- c(\"Hearts\", \"Diamonds\", \"Clubs\", \"Spades\")\n  expand.grid(rank = ranks, suit = suits, stringsAsFactors = FALSE)\n}\ndeal_hand <- function(deck, k = 5) {\n  hand <- deck[sample(nrow(deck), k), ]\n  list(hand = hand,\n       aces = sum(hand$rank == \"A\"),\n       hearts = sum(hand$suit == \"Hearts\"),\n       has_pair = any(duplicated(hand$rank)))\n}\nset.seed(3)\ndeal_hand(make_deck())\n#> $hand\n#>    rank   suit\n#> 5     5 Hearts\n#> 12    Q Hearts\n#> 39    K  Clubs\n#> 36   10  Clubs\n#> 40    A Spades\n#> $aces\n#> [1] 1\n#> $hearts\n#> [1] 2\n#> $has_pair\n#> [1] FALSE\ndeal_hand(make_deck(), k = 2)$hearts\n#> [1] 0",
    "comment": "**Building the deck**\n- `rep(ranks, times = 4)` repeats the 13 ranks 4 times, and `rep(suits, each = 13)` repeats each suit 13 times. Lined up together, they give every rank–suit pair exactly once. `paste()` glues them into \"A Hearts\", \"2 Hearts\", ….\n- `expand.grid(rank = ranks, suit = suits)` makes **every combination** as a data frame (52 rows). It's easier to count with `hand$rank == \"A\"`. `stringsAsFactors = FALSE` keeps plain text.\n\n**Dealing = sampling without replacement.** A card can't be dealt twice, so **never** use `replace = TRUE` for cards. For the data frame, sample **row numbers** (`sample(1:52, 5)`), then take those rows.\n\n**Useful checks on a hand**\n- `sum(hand$suit == \"Hearts\")`: how many hearts.\n- `all(hand$suit == hand$suit[1])`: all the same suit (a flush).\n- `any(duplicated(hand$rank))`: at least one pair.\n- `hand$rank %in% c(\"J\", \"Q\", \"K\")`: face cards.\n\n**Only care about one feature?** Build a smaller vector: `ranks_only <- rep(ranks, 4)`, then `sample(ranks_only, 5)`.\n\n**As a function (bottom of the code):** **Two small functions instead of one big one:** `make_deck()` takes **no arguments** (it always builds the same deck) and `deal_hand()` uses it. Splitting the job like this makes each piece easy to test. `nrow(deck)` instead of 52 means it also works with a smaller or bigger deck. **Returns a list:** the hand (a data frame) plus the counts.",
    "key": true
   },
   {
    "id": "core-01-c07",
    "label": "Draw from an urn / bag (without replacement)",
    "question": "A bag has 5 red, 3 blue and 2 green balls. Draw 3 without replacement. Estimate the probability that all 3 are red.",
    "code": "bag <- rep(c(\"red\", \"blue\", \"green\"), times = c(5, 3, 2))\nbag\n#>  [1] \"red\"   \"red\"   \"red\"   \"red\"   \"red\"   \"blue\"  \"blue\"  \"blue\"  \"green\"\n#> [10] \"green\"\ntable(bag)\n#> bag\n#>  blue green   red \n#>     3     2     5 \n\nset.seed(1)\nsample(bag, 3)                                   # one draw of 3 balls\n#> [1] \"green\" \"red\"   \"blue\" \n\n# Probability all three are red: simulate many draws\nall_red <- replicate(10000, all(sample(bag, 3) == \"red\"))\nmean(all_red)\n#> [1] 0.0836\nchoose(5, 3) / choose(10, 3)                     # exact: 10/120 = 0.0833\n#> [1] 0.08333333\n\n# ---- As a function ----\np_all_same <- function(counts, k, color, n_sims = 10000) {\n  bag <- rep(names(counts), times = counts)\n  mean(replicate(n_sims, all(sample(bag, k) == color)))\n}\nset.seed(1)\np_all_same(c(red = 5, blue = 3, green = 2), k = 3, color = \"red\")     # exact 0.0833\n#> [1] 0.0836\np_all_same(c(red = 5, blue = 3, green = 2), k = 2, color = \"blue\")    # exact 3/45 = 0.0667\n#> [1] 0.0662",
    "comment": "**Build the bag with `rep(values, times = counts)`:** `rep(c(\"red\", \"blue\", \"green\"), times = c(5, 3, 2))` gives 5 reds, 3 blues and 2 greens in one vector. Then `sample(bag, k)` draws k balls without replacement, because the default `replace = FALSE` means balls are **not put back**.\n\n**\"With replacement\" (put the ball back)?** Add `replace = TRUE`. Or use `prob =` with the proportions: `sample(c(\"red\", \"blue\", \"green\"), 3, replace = TRUE, prob = c(.5, .3, .2))`.\n\n**Estimating a probability (the key trick):** `replicate(10000, <one experiment that gives TRUE/FALSE>)` repeats the experiment and collects 10,000 TRUE/FALSEs. `mean()` of them is the estimated probability. The next tab entry covers this in detail.\n\n**Exact check with `choose()`:** `choose(n, k)` is the number of ways to pick k from n. P(all 3 red) = ways to pick 3 of the 5 reds ÷ ways to pick any 3 of the 10 = 10 / 120.\n\n**As a function (bottom of the code):** **Pass the bag as a named vector of counts** (`c(red = 5, blue = 3, green = 2)`). `rep(names(counts), times = counts)` rebuilds it inside the function, so the same code works for any bag. **Returns** one number: the estimated probability.",
    "key": true
   },
   {
    "id": "core-01-c08",
    "label": "Random rows, random people and shuffling",
    "question": "Pick 3 random rows from a data frame, pick a random winner from a list of names, and shuffle a vector into random order.",
    "code": "df <- data.frame(name = c(\"Ana\", \"Ben\", \"Cara\", \"Dev\", \"Eli\", \"Fay\"),\n                 score = c(88, 92, 75, 64, 95, 81))\nset.seed(1)\ndf[sample(nrow(df), 3), ]                 # 3 random rows\n#>   name score\n#> 1  Ana    88\n#> 4  Dev    64\n#> 3 Cara    75\nsample(df$name, 1)                        # one random winner\n#> [1] \"Ana\"\nsample(df$name)                           # shuffled order (a random permutation)\n#> [1] \"Ben\"  \"Eli\"  \"Cara\" \"Dev\"  \"Fay\"  \"Ana\" \n\n# Split into two random teams of 3\nshuffled <- sample(df$name)\nteam1 <- shuffled[1:3]\nteam2 <- shuffled[4:6]\nteam1; team2\n#> [1] \"Cara\" \"Fay\"  \"Ana\" \n#> [1] \"Dev\" \"Eli\" \"Ben\"\n\n# ---- As a function ----\nrandom_teams <- function(people, n_teams = 2) {\n  shuffled <- sample(people)\n  split(shuffled, rep(1:n_teams, length.out = length(people)))\n}\nset.seed(1)\nrandom_teams(df$name)\n#> $`1`\n#> [1] \"Ana\"  \"Cara\" \"Ben\" \n#> $`2`\n#> [1] \"Dev\" \"Fay\" \"Eli\"\nrandom_teams(df$name, n_teams = 3)\n#> $`1`\n#> [1] \"Cara\" \"Dev\" \n#> $`2`\n#> [1] \"Ben\" \"Ana\"\n#> $`3`\n#> [1] \"Fay\" \"Eli\"",
    "comment": "**Random rows:** `df[sample(nrow(df), k), ]`. `sample(nrow(df), k)` picks k row **numbers**, and putting them before the comma keeps those rows, all columns.\n\n**Shuffle:** `sample(x)` with no size returns all of x in random order. Use it to split into random groups: shuffle once, then take positions 1–3, 4–6, ….\n\n**Train/test style split:** `idx <- sample(nrow(df), 0.7 * nrow(df))`, then `df[idx, ]` and `df[-idx, ]`. The minus sign means \"all rows except these\".\n\n**As a function (bottom of the code):** **`rep(1:n_teams, length.out = ...)`** makes team labels 1, 2, 1, 2, … (or 1, 2, 3, 1, 2, 3, …) as long as the list of people. **`split(x, labels)`** groups the shuffled names by label. **Returns a list:** one element per team.",
    "key": false
   }
  ]
 },
 "core-02": {
  "type": "core",
  "num": "02",
  "title": "Simulating probabilities: replicate, loops and functions",
  "date": "",
  "exams": [],
  "topics": [
   "simulation",
   "replicate",
   "probability",
   "at least one",
   "while",
   "repeat",
   "for loop",
   "sapply",
   "function",
   "list"
  ],
  "pdfs": [],
  "notes": "How to turn \"what is the probability that …\" or \"on average, how many …\" into code.\n\n**The universal recipe**\n1. Write code for **one** experiment that returns TRUE/FALSE (did the event happen?) or a number.\n2. Repeat it many times: `replicate(10000, ...)`, `sapply(1:10000, function(i) ...)` or a `for` loop.\n3. `mean()` of the TRUE/FALSEs is the **probability**; `mean()` of the numbers is the **average**.\n4. If you can, check against the exact answer.\n\n**Every chunk ends with \"As a function\".** To turn any code into a function:\n1. Find the numbers and data that would change in a new question (n, p, the target, the title). Those become the **arguments**, with defaults for the usual values.\n2. Put the code inside `name <- function(args) { ... }` and replace those numbers with the argument names.\n3. Make the **last line** what you want back: one value, a named vector `c(a = ..., b = ...)` for several numbers, or a `list()` for mixed things. Plot functions can `invisible()` the numbers.\n4. Call it once to check, then reuse it with new arguments (or run it over many values with `sapply`).",
  "takeaways": [
   "Probability by simulation: mean(replicate(10000, <one experiment that returns TRUE/FALSE>)).",
   "Average by simulation: mean(replicate(10000, <one experiment that returns a number>)).",
   "'At least one': any(...). 'All': all(...). 'Exactly k': sum(...) == k.",
   "Until something happens: a while loop with a counter. A known number of repeats: for, sapply or replicate.",
   "Wrap it in a function with arguments so you can rerun it with different n, p or targets."
  ],
  "updatedAt": "2026-10-15T17:30:00Z",
  "remember": [],
  "chunks": [
   {
    "id": "core-02-c01",
    "label": "Template: estimate any probability with replicate()",
    "question": "What is the general way to estimate a probability or an average by simulation?",
    "code": "set.seed(1)\n# 1. ONE experiment -> TRUE/FALSE\none_experiment <- function() {\n  rolls <- sample(1:6, 2, replace = TRUE)\n  sum(rolls) == 7\n}\none_experiment()\n#> [1] FALSE\n\n# 2. Repeat it many times, 3. average\nresults <- replicate(10000, one_experiment())\nhead(results)\n#> [1] FALSE FALSE FALSE FALSE FALSE  TRUE\nmean(results)               # estimated P(sum of two dice = 7); exact 1/6 = 0.1667\n#> [1] 0.1655\n\n# Same thing in one line\nmean(replicate(10000, sum(sample(1:6, 2, replace = TRUE)) == 7))\n#> [1] 0.1684\n\n# ---- As a function ----\nestimate_prob <- function(experiment, n_sims = 10000) {\n  mean(replicate(n_sims, experiment()))\n}\nset.seed(1)\nestimate_prob(one_experiment)                                               # P(sum = 7)\n#> [1] 0.1655\nestimate_prob(function() all(sample(c(\"H\", \"T\"), 3, replace = TRUE) == \"H\"))  # P(3 heads) = 1/8\n#> [1] 0.1222",
    "comment": "**`replicate(n, expr)`** runs `expr` n times and collects the results in a vector. If each run returns TRUE/FALSE, **`mean()` gives the proportion of TRUEs**, which is the estimated probability.\n\n**Write the one-experiment part first and run it a few times by itself.** If one experiment is right, the whole simulation is right.\n\n**More repetitions = more accurate:** 10,000 is a good default. The estimate is usually within about ±0.01 of the truth.\n\n**Same thing, other ways to write it**\n- `sapply(1:10000, function(i) one_experiment())`\n- a `for` loop: `res <- logical(10000); for (i in 1:10000) res[i] <- one_experiment()`, then `mean(res)`\n\n**Turning words into the TRUE/FALSE line**\n\n| Question says | One-experiment line |\n|---|---|\n| \"at least one six\" | `any(rolls == 6)` |\n| \"all heads\" | `all(flips == \"H\")` |\n| \"exactly 2 aces\" | `sum(hand == \"A\") == 2` |\n| \"more than 3 heads\" | `sum(flips == \"H\") > 3` |\n| \"sum is 7\" | `sum(rolls) == 7` |\n\n**As a function (bottom of the code):** **A function that takes a function:** `experiment` is any function returning TRUE/FALSE, and `experiment()` runs it. You can pass a named function (`one_experiment`) or write one on the spot (`function() ...`). That makes this **one reusable tool for every \"estimate the probability\" question**.",
    "key": true
   },
   {
    "id": "core-02-c02",
    "label": "\"At least one\": dice and complement rule",
    "question": "Roll a die 4 times. What is the probability of getting at least one six? Compare the simulation with the exact answer.",
    "code": "set.seed(1)\nat_least_one_six <- replicate(10000, any(sample(1:6, 4, replace = TRUE) == 6))\nmean(at_least_one_six)\n#> [1] 0.5148\n\n1 - (5/6)^4                     # exact: 1 - P(no sixes in 4 rolls)\n#> [1] 0.5177469\n\n# ---- As a function ----\np_at_least_one <- function(n_rolls, face = 6, n_sims = 10000) {\n  sim <- mean(replicate(n_sims, any(sample(1:6, n_rolls, replace = TRUE) == face)))\n  c(simulated = sim, exact = 1 - (5/6)^n_rolls)\n}\nset.seed(1)\np_at_least_one(4)\n#> simulated     exact \n#> 0.5148000 0.5177469 \np_at_least_one(10)\n#> simulated     exact \n#> 0.8413000 0.8384944 ",
    "comment": "**`any()`** is TRUE if at least one element is TRUE, which is exactly \"at least one\".\n\n**Exact answer with the complement rule:** P(at least one) = 1 − P(none). P(no six on one roll) = 5/6, so for 4 independent rolls it's (5/6)⁴, giving **0.518**.\n\n**Similar:** \"at least one head in 5 flips\" → `any(sample(c(\"H\",\"T\"), 5, TRUE) == \"H\")`, exact 1 − 0.5⁵. \"At least one ace in a 5-card hand\" → the next chunk.\n\n**As a function (bottom of the code):** **Returns the simulation and the exact answer side by side**, a habit worth copying: if they disagree, something is wrong. Change `n_rolls` to answer \"at least one six in 10 rolls\" with no new code.",
    "key": true
   },
   {
    "id": "core-02-c03",
    "label": "Cards: probability of a hand",
    "question": "Deal 5 cards from a standard deck. Estimate P(at least one ace), P(all the same suit), and P(the first two cards are both hearts).",
    "code": "ranks <- rep(c(\"A\", 2:10, \"J\", \"Q\", \"K\"), times = 4)\nsuits <- rep(c(\"Hearts\", \"Diamonds\", \"Clubs\", \"Spades\"), each = 13)\n\nset.seed(1)\ndeal <- function() sample(1:52, 5)          # row numbers of the 5 cards\n\n# P(at least one ace)\nmean(replicate(10000, any(ranks[deal()] == \"A\")))\n#> [1] 0.3372\n1 - choose(48, 5) / choose(52, 5)           # exact: 0.341\n#> [1] 0.341158\n\n# P(flush: all five the same suit)\nmean(replicate(10000, { s <- suits[deal()]; all(s == s[1]) }))\n#> [1] 0.0026\n4 * choose(13, 5) / choose(52, 5)           # exact: 0.00198 (rare!)\n#> [1] 0.001980792\n\n# P(first two cards both hearts)\nmean(replicate(10000, all(suits[sample(1:52, 2)] == \"Hearts\")))\n#> [1] 0.0605\n(13/52) * (12/51)                           # exact: 0.0588\n#> [1] 0.05882353\n\n# ---- As a function ----\np_hand <- function(event, k = 5, n_sims = 10000) {\n  ranks <- rep(c(\"A\", 2:10, \"J\", \"Q\", \"K\"), times = 4)\n  suits <- rep(c(\"Hearts\", \"Diamonds\", \"Clubs\", \"Spades\"), each = 13)\n  mean(replicate(n_sims, {\n    idx <- sample(1:52, k)\n    event(ranks[idx], suits[idx])\n  }))\n}\nset.seed(1)\np_hand(function(r, s) any(r == \"A\"))                      # at least one ace (0.341)\n#> [1] 0.3372\np_hand(function(r, s) sum(s == \"Hearts\") >= 3)            # 3 or more hearts (0.093)\n#> [1] 0.0912\np_hand(function(r, s) all(r %in% c(\"J\", \"Q\", \"K\")), k = 2)  # two face cards (0.0498)\n#> [1] 0.0502",
    "comment": "**Trick: deal card positions, then look them up.** `sample(1:52, 5)` picks 5 positions without replacement. `ranks[positions]` and `suits[positions]` give those cards' ranks and suits, kept matched because they use the **same** positions.\n\n**Several lines inside `replicate`:** wrap them in `{ }`. The **last line** is what gets returned (`all(s == s[1])` here).\n\n**Rare events need more repetitions:** a flush happens about 2 times in 1,000 hands, so 10,000 deals gives only about 20 flushes and a rough estimate. Use 100,000 for rare events.\n\n**Exact formulas used**\n- At least one ace: 1 − P(no aces) = 1 − choose(48, 5) / choose(52, 5) (all 5 cards from the 48 non-aces).\n- Flush: 4 suits × choose(13, 5) ways ÷ choose(52, 5) hands.\n- Two hearts in a row: 13/52 for the first × 12/51 for the second (one heart is gone).\n\n**As a function (bottom of the code):** **`event` is a function of the hand's ranks `r` and suits `s`** that returns TRUE/FALSE, so one function answers any card question. Write the condition on the spot, e.g. `function(r, s) any(r == \"A\")`. **`k`** sets the hand size.",
    "key": true
   },
   {
    "id": "core-02-c04",
    "label": "Birthday problem (any duplicates)",
    "question": "In a room of 23 people, what is the probability that at least two share a birthday?",
    "code": "set.seed(1)\nshared <- replicate(10000, {\n  bdays <- sample(1:365, 23, replace = TRUE)\n  any(duplicated(bdays))\n})\nmean(shared)\n#> [1] 0.5026\n\n1 - prod((365:343) / 365)            # exact: 0.507\n#> [1] 0.5072972\n\n# How does it change with group size?\np_shared <- sapply(c(10, 23, 30, 50), function(n)\n  mean(replicate(5000, any(duplicated(sample(1:365, n, replace = TRUE))))))\nround(p_shared, 2)\n#> [1] 0.12 0.51 0.71 0.97\n\n# ---- As a function ----\np_shared_birthday <- function(n_people, n_sims = 5000) {\n  mean(replicate(n_sims, any(duplicated(sample(1:365, n_people, replace = TRUE)))))\n}\nset.seed(1)\np_shared_birthday(23)\n#> [1] 0.5028\nsapply(c(10, 30, 50), p_shared_birthday)\n#> [1] 0.1178 0.7066 0.9684",
    "comment": "**`duplicated(x)`** marks each value that already appeared earlier in x. `any(duplicated(x))` is TRUE if there's **at least one repeat**, so at least two people share a birthday.\n\n**`replace = TRUE`:** two people **can** have the same birthday.\n\n**The `sapply` over group sizes** answers \"how does the probability change with n?\" in one line. Swap in any list of values. The same pattern works for any \"repeat the simulation for several parameter values\" question.\n\n**Exact:** P(all different) = 365/365 × 364/365 × … × 343/365 (23 factors), so P(shared) = 1 − that = **0.507**.\n\n**As a function (bottom of the code):** **Once it's a function, `sapply(values, fun)` runs it for several inputs.** Here that's three group sizes in one line. `sapply` passes each value as the **first** argument (`n_people`).",
    "key": false
   },
   {
    "id": "core-02-c05",
    "label": "Roll until something happens (while loop)",
    "question": "How many rolls does it take to get the first six? How many rolls to see every face at least once? Average over many runs.",
    "code": "set.seed(1)\nrolls_until_six <- function() {\n  rolls <- 0\n  repeat {\n    rolls <- rolls + 1\n    if (sample(1:6, 1) == 6) break\n  }\n  rolls\n}\nrolls_until_six()\n#> [1] 7\nmean(replicate(10000, rolls_until_six()))      # theory: 1/p = 6\n#> [1] 6.0009\n\nrolls_until_all_faces <- function() {\n  seen <- c()\n  rolls <- 0\n  while (length(unique(seen)) < 6) {\n    rolls <- rolls + 1\n    seen <- c(seen, sample(1:6, 1))\n  }\n  rolls\n}\nmean(replicate(10000, rolls_until_all_faces()))   # theory: 6*(1 + 1/2 + ... + 1/6) = 14.7\n#> [1] 14.7568\n\n# ---- As a function ----\nrolls_until <- function(face = 6, sides = 6) {\n  rolls <- 0\n  repeat {\n    rolls <- rolls + 1\n    if (sample(1:sides, 1) == face) break\n  }\n  rolls\n}\nset.seed(1)\nmean(replicate(10000, rolls_until()))                    # about 6\n#> [1] 6.0014\nmean(replicate(10000, rolls_until(face = 1, sides = 4))) # about 4\n#> [1] 3.9885",
    "comment": "**When you don't know how many tries it will take → `while` or `repeat`.**\n- `repeat { ...; if (done) break }` checks the stopping rule **as written**.\n- `while (not done) { ... }` puts the **opposite** of the stopping rule in the condition.\n\n**Always:** start a counter at 0, add 1 each pass, return the counter.\n\n**\"Until every face appears\":** keep a vector of what you've seen; `length(unique(seen)) < 6` means not all faces seen yet.\n\n**Check with theory:** the average wait for an event with probability p is **1/p** (6 rolls for a six). Your simulated mean should be close.\n\n**More \"until\" questions are in Recitation 4:** until a sum shows up n times, until k in a row, until reaching ±target, until all bulbs burn out.\n\n**As a function (bottom of the code):** **Generalize by turning the fixed numbers into arguments:** `6` became `face` and `sides`, with defaults so `rolls_until()` still means \"until a six\". The average wait is `sides` when each face is equally likely.",
    "key": true
   },
   {
    "id": "core-02-c06",
    "label": "Simulation function with arguments, returning a list",
    "question": "Write a function that flips a coin n times with P(heads) = p and returns the flips, the number of heads and the proportion of heads.",
    "code": "flip_coins <- function(n, p = 0.5) {\n  flips <- sample(c(\"H\", \"T\"), n, replace = TRUE, prob = c(p, 1 - p))\n  heads <- sum(flips == \"H\")\n  list(flips = flips, heads = heads, prop_heads = heads / n)\n}\n\nset.seed(1)\nresult <- flip_coins(10, p = 0.7)\nresult\n#> $flips\n#>  [1] \"H\" \"H\" \"H\" \"T\" \"H\" \"T\" \"T\" \"H\" \"H\" \"H\"\n#> $heads\n#> [1] 7\n#> $prop_heads\n#> [1] 0.7\nresult$heads                                   # pull out one part with $\n#> [1] 7\n\n# Run it for several n values at once\nsapply(c(10, 100, 1000, 10000), function(n) flip_coins(n)$prop_heads)\n#> [1] 0.5000 0.4600 0.4830 0.4985\n\n# ---- As a function ----\nheads_in_many_runs <- function(n_runs, n, p = 0.5) {\n  sapply(1:n_runs, function(i) flip_coins(n, p)$heads)   # calls the function above\n}\nset.seed(1)\nheads <- heads_in_many_runs(1000, n = 10)\ntable(heads)\n#> heads\n#>   1   2   3   4   5   6   7   8   9  10 \n#>  11  59 115 195 259 192 114  42  12   1 \nmean(heads)                                              # close to n * p = 5\n#> [1] 4.953",
    "comment": "**Function template for simulation questions**\n```r\nname <- function(arg1, arg2 = default) {\n  # 1. simulate\n  # 2. compute the things asked for\n  list(thing1 = ..., thing2 = ...)     # 3. return them (several outputs -> a list)\n}\n```\n- **Default arguments** (`p = 0.5`) let you call `flip_coins(10)` without giving p.\n- **Return a `list()`** when the outputs are different types or lengths (a vector of flips plus single numbers). Get parts with `result$heads` or `result[[\"heads\"]]`.\n- **One output?** Just make it the last line.\n\n**`sapply` over inputs:** the last line shows the proportion of heads getting closer to 0.5 as n grows (law of large numbers). Swap in any function and any vector of inputs.\n\n**As a function (bottom of the code):** **Functions can call your other functions.** This one runs `flip_coins()` 1,000 times and keeps only the `$heads` part of each result. Build small functions first, then combine them.",
    "key": true
   },
   {
    "id": "core-02-c07",
    "label": "Store results from a loop (for loop vs sapply)",
    "question": "Simulate 1,000 rounds of rolling two dice and record the sum of each round. Then find the most common sum.",
    "code": "set.seed(1)\nn_rounds <- 1000\n\n# for loop: make an empty vector first, then fill slot i\nsums <- numeric(n_rounds)\nfor (i in 1:n_rounds) {\n  sums[i] <- sum(sample(1:6, 2, replace = TRUE))\n}\n\n# sapply: builds the vector for you\nsums2 <- sapply(1:n_rounds, function(i) sum(sample(1:6, 2, replace = TRUE)))\n\n# replicate: when you don't need i at all\nsums3 <- replicate(n_rounds, sum(sample(1:6, 2, replace = TRUE)))\n\ntable(sums)\n#> sums\n#>   2   3   4   5   6   7   8   9  10  11  12 \n#>  30  54  89 108 138 165 143 100  83  61  29 \nnames(which.max(table(sums)))                  # most common sum\n#> [1] \"7\"\n\n# ---- As a function ----\nsimulate_sums <- function(n_rounds, n_dice = 2) {\n  sums <- numeric(n_rounds)\n  for (i in 1:n_rounds) {\n    sums[i] <- sum(sample(1:6, n_dice, replace = TRUE))\n  }\n  list(sums = sums,\n       most_common = as.numeric(names(which.max(table(sums)))),\n       average = mean(sums))\n}\nset.seed(1)\nres <- simulate_sums(1000)\nres$most_common\n#> [1] 7\nres$average\n#> [1] 6.994\nsimulate_sums(1000, n_dice = 3)$average      # 3 dice: about 10.5\n#> [1] 10.617",
    "comment": "**Three ways to repeat and collect** (pick one):\n\n| | Needs | Best when |\n|---|---|---|\n| `for` + `result[i] <- ...` | an empty vector first: `numeric(n)` / `character(n)` / `logical(n)` | the code is long, or step i depends on step i−1 |\n| `sapply(1:n, function(i) ...)` | nothing | you use `i` (e.g. sample size = i) |\n| `replicate(n, ...)` | nothing | each repeat is identical |\n\n**Common mistake in loops:** forgetting the `[i]`, as in `sums <- sum(...)`. That overwrites the whole vector each time, so you end up with one number.\n\n**Most common value:** `names(which.max(table(x)))`. `which.max` finds the biggest count, and `names` gives the value it belongs to (as text; wrap in `as.numeric()` if you need a number).\n\n**As a function (bottom of the code):** **The empty vector, the loop and the summary all go inside the function**, and the list returns everything a question might ask for. Save the result (`res <- ...`) and pull pieces out with `$`, so the 1,000 sums aren't printed.",
    "key": true
   }
  ]
 },
 "core-03": {
  "type": "core",
  "num": "03",
  "title": "Distributions: d / p / q / r for normal, binomial, geometric and uniform",
  "date": "",
  "exams": [],
  "topics": [
   "rnorm",
   "pnorm",
   "qnorm",
   "dnorm",
   "dbinom",
   "pbinom",
   "rbinom",
   "dgeom",
   "pgeom",
   "runif",
   "normal",
   "binomial",
   "geometric",
   "uniform",
   "CLT"
  ],
  "pdfs": [],
  "notes": "Every distribution in R has four functions. The first letter says what you get:\n\n| Letter | Gives | Normal | Binomial | Geometric | Uniform |\n|---|---|---|---|---|---|\n| **d** | height / P(X = x) | `dnorm` | `dbinom` | `dgeom` | `dunif` |\n| **p** | P(X ≤ q), area to the left | `pnorm` | `pbinom` | `pgeom` | `punif` |\n| **q** | the value with area p to its left (percentile) | `qnorm` | `qbinom` | `qgeom` | `qunif` |\n| **r** | random draws | `rnorm` | `rbinom` | `rgeom` | `runif` |\n\n**`p` is always \"less than or equal to\".** For \"greater than\", use `1 - p...()` (or `lower.tail = FALSE`). For \"between a and b\", use `p(b) - p(a)`.\n\n**Every chunk ends with \"As a function\".** To turn any code into a function:\n1. Find the numbers and data that would change in a new question (n, p, the target, the title). Those become the **arguments**, with defaults for the usual values.\n2. Put the code inside `name <- function(args) { ... }` and replace those numbers with the argument names.\n3. Make the **last line** what you want back: one value, a named vector `c(a = ..., b = ...)` for several numbers, or a `list()` for mixed things. Plot functions can `invisible()` the numbers.\n4. Call it once to check, then reuse it with new arguments (or run it over many values with `sapply`).",
  "takeaways": [
   "d = exactly / height, p = at most (area to the left), q = percentile, r = random draws.",
   "Greater than: 1 - pnorm(x, m, s). Between: pnorm(b, m, s) - pnorm(a, m, s).",
   "Binomial 'at least k': 1 - pbinom(k - 1, n, p). Mind the k - 1!",
   "R's geometric counts FAILURES before the first success: first success on try t → dgeom(t - 1, p).",
   "Check a simulation: mean(rnorm(...) > x) should be close to 1 - pnorm(x, ...)."
  ],
  "updatedAt": "2026-10-15T17:30:00Z",
  "remember": [],
  "chunks": [
   {
    "id": "core-03-c01",
    "label": "Normal: rnorm to generate data, then check it",
    "question": "Generate 1,000 test scores from a normal distribution with mean 70 and standard deviation 10. Check the sample mean and sd, and find the proportion above 85.",
    "code": "set.seed(1)\nscores <- rnorm(1000, mean = 70, sd = 10)\nhead(round(scores, 1))\n#> [1] 63.7 71.8 61.6 86.0 73.3 61.8\nmean(scores)                 # close to 70\n#> [1] 69.88352\nsd(scores)                   # close to 10\n#> [1] 10.34916\nmean(scores > 85)            # proportion above 85 in the sample\n#> [1] 0.076\n1 - pnorm(85, 70, 10)        # the exact probability, for comparison\n#> [1] 0.0668072\nsummary(scores)\n#>    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n#>   39.92   63.03   69.65   69.88   76.88  108.10 \n\n# ---- As a function ----\ncheck_normal <- function(n, mu, sigma, cutoff) {\n  x <- rnorm(n, mean = mu, sd = sigma)\n  c(sample_mean = mean(x),\n    sample_sd = sd(x),\n    sample_prop_above = mean(x > cutoff),\n    exact_prop_above = 1 - pnorm(cutoff, mu, sigma))\n}\nset.seed(1)\nround(check_normal(1000, mu = 70, sigma = 10, cutoff = 85), 3)\n#>       sample_mean         sample_sd sample_prop_above  exact_prop_above \n#>            69.884            10.349             0.076             0.067 ",
    "comment": "**`rnorm(n, mean, sd)`:** n random values. The argument is the **standard deviation**, not the variance. If a question gives variance 25, use `sd = 5`.\n\n**The sample won't match exactly:** `mean(scores)` is near 70, not exactly 70. More draws → closer.\n\n**Proportions from data vs probabilities from the formula**\n- `mean(scores > 85)` = share of **your sample** above 85.\n- `1 - pnorm(85, 70, 10)` = exact probability for the **distribution**.\n- They should be close; that's a good sanity check.\n\n**Round if the question wants whole numbers:** `round(rnorm(...))`. A plot of this data is in the Visualizations entry.\n\n**As a function (bottom of the code):** **Argument names `mu` and `sigma`, not `mean` and `sd`:** naming an argument `mean` works, but then `mean(x)` inside reads confusingly (R still finds the function). Clear names avoid that.",
    "key": true
   },
   {
    "id": "core-03-c02",
    "label": "Normal probabilities: less than, greater than, between, percentiles",
    "question": "Heights are normal with mean 170 cm and sd 8 cm. Find P(height < 160), P(height > 185), P(165 < height < 175), and the height that marks the top 10%.",
    "code": "pnorm(160, mean = 170, sd = 8)                          # less than 160\n#> [1] 0.1056498\n1 - pnorm(185, mean = 170, sd = 8)                      # greater than 185\n#> [1] 0.03039636\npnorm(185, mean = 170, sd = 8, lower.tail = FALSE)      # same thing\n#> [1] 0.03039636\npnorm(175, 170, 8) - pnorm(165, 170, 8)                 # between 165 and 175\n#> [1] 0.4680289\nqnorm(0.90, mean = 170, sd = 8)                         # top 10% starts here (90th percentile)\n#> [1] 180.2524\nqnorm(0.25, 170, 8)                                     # 25th percentile\n#> [1] 164.6041\n\n# The 68-95-99.7 rule\npnorm(1) - pnorm(-1)\n#> [1] 0.6826895\npnorm(2) - pnorm(-2)\n#> [1] 0.9544997\n\n# ---- As a function ----\nnormal_probs <- function(mu, sigma, a, b, top = 0.10) {\n  c(below_a = pnorm(a, mu, sigma),\n    above_b = 1 - pnorm(b, mu, sigma),\n    between = pnorm(b, mu, sigma) - pnorm(a, mu, sigma),\n    top_cutoff = qnorm(1 - top, mu, sigma))\n}\nround(normal_probs(mu = 170, sigma = 8, a = 165, b = 175), 4)\n#>    below_a    above_b    between top_cutoff \n#>     0.2660     0.2660     0.4680   180.2524 \nround(normal_probs(mu = 100, sigma = 15, a = 85, b = 130, top = 0.05), 4)\n#>    below_a    above_b    between top_cutoff \n#>     0.1587     0.0228     0.8186   124.6728 ",
    "comment": "**`pnorm(x, mean, sd)` = area to the LEFT of x = P(X ≤ x).** Everything else comes from that:\n\n| Question says | Code |\n|---|---|\n| less than / at most / below x | `pnorm(x, m, s)` |\n| greater than / at least / above x | `1 - pnorm(x, m, s)` |\n| between a and b | `pnorm(b, m, s) - pnorm(a, m, s)` |\n| the value with p of the area below it | `qnorm(p, m, s)` |\n| top 10% / the cut-off for the highest 10% | `qnorm(0.90, m, s)` |\n| bottom 5% | `qnorm(0.05, m, s)` |\n\n**For the normal, `<` and `≤` give the same answer** (continuous, so P(X = x) = 0). That's **not** true for the binomial; see the next chunk.\n\n**`pnorm(1)` with no mean/sd** uses the standard normal (mean 0, sd 1). That's where the 68% / 95% within 1 / 2 sd comes from.\n\n**`qnorm` undoes `pnorm`:** `pnorm(qnorm(0.9, 170, 8), 170, 8)` gives back 0.9.\n\n**As a function (bottom of the code):** **Every normal question in one call:** below a, above b, between a and b, and the cut-off for the top X%. Change the arguments for a new problem. `top = 0.10` means the top 10%, so the cut-off is `qnorm(0.90, ...)`.",
    "key": true
   },
   {
    "id": "core-03-c03",
    "label": "Binomial: exactly, at most, at least, between",
    "question": "A free-throw shooter makes 70% of shots. In 10 shots, find P(exactly 7), P(at most 7), P(at least 8), and P(between 5 and 8). Simulate 1,000 games too.",
    "code": "dbinom(7, size = 10, prob = 0.7)                          # exactly 7\n#> [1] 0.2668279\npbinom(7, size = 10, prob = 0.7)                          # at most 7  (0..7)\n#> [1] 0.6172172\n1 - pbinom(7, size = 10, prob = 0.7)                      # at least 8 (8..10)\n#> [1] 0.3827828\nsum(dbinom(8:10, size = 10, prob = 0.7))                  # same, adding the pieces\n#> [1] 0.3827828\npbinom(8, 10, 0.7) - pbinom(4, 10, 0.7)                   # between 5 and 8 inclusive\n#> [1] 0.8033427\nsum(dbinom(5:8, 10, 0.7))                                 # same\n#> [1] 0.8033427\n\nset.seed(1)\nmade <- rbinom(1000, size = 10, prob = 0.7)               # 1000 games of 10 shots\nhead(made)\n#> [1] 8 8 7 5 8 5\nmean(made)                                                # close to n*p = 7\n#> [1] 6.983\nmean(made >= 8)                                           # close to 1 - pbinom(7, 10, 0.7)\n#> [1] 0.385\n\n# ---- As a function ----\nbinom_probs <- function(k, n, p) {\n  c(exactly   = dbinom(k, n, p),\n    at_most   = pbinom(k, n, p),\n    less_than = pbinom(k - 1, n, p),\n    at_least  = 1 - pbinom(k - 1, n, p),\n    more_than = 1 - pbinom(k, n, p))\n}\nround(binom_probs(k = 7, n = 10, p = 0.7), 4)\n#>   exactly   at_most less_than  at_least more_than \n#>    0.2668    0.6172    0.3504    0.6496    0.3828 ",
    "comment": "**When is it binomial?** A fixed number of tries (n = `size`), each a success or failure with the same probability p, and the question asks **how many successes**.\n\n**The `- 1` trap.** The binomial counts whole numbers, so \"less than\" and \"at most\" are different:\n\n| Question says | Code |\n|---|---|\n| exactly k | `dbinom(k, n, p)` |\n| at most k (≤ k) | `pbinom(k, n, p)` |\n| less than k (< k) | `pbinom(k - 1, n, p)` |\n| at least k (≥ k) | `1 - pbinom(k - 1, n, p)` |\n| more than k (> k) | `1 - pbinom(k, n, p)` |\n| between a and b (inclusive) | `pbinom(b, n, p) - pbinom(a - 1, n, p)` |\n\n**When unsure, add the pieces:** `sum(dbinom(a:b, n, p))` gives P(a ≤ X ≤ b) directly. No `- 1` to think about.\n\n**`rbinom(k, size, prob)`** simulates k experiments. The mean is about n × p and the variance about n × p × (1 − p).\n\n**As a function (bottom of the code):** **The `k - 1` table, written once:** call it with your k, n and p and read off the line the question asks for. `exactly + more_than + less_than` always adds up to 1, a quick check.",
    "key": true
   },
   {
    "id": "core-03-c04",
    "label": "Geometric: waiting for the first success (watch the off-by-one)",
    "question": "Each roll of a die has a 1/6 chance of a six. What is the probability that the first six comes on the 4th roll? Within the first 4 rolls?",
    "code": "p <- 1/6\ndgeom(3, prob = p)          # first six ON roll 4 = 3 failures first\n#> [1] 0.09645062\n(5/6)^3 * (1/6)             # same thing by hand\n#> [1] 0.09645062\n\npgeom(3, prob = p)          # first six WITHIN 4 rolls (0 to 3 failures)\n#> [1] 0.5177469\n1 - (5/6)^4                 # same thing: 1 - P(no six in 4 rolls)\n#> [1] 0.5177469\n\nset.seed(1)\nwaits <- rgeom(10000, prob = p) + 1        # +1 turns \"failures\" into \"roll number\"\nmean(waits)                                # close to 1/p = 6\n#> [1] 6.1004\nmean(waits == 4)                           # close to dgeom(3, p)\n#> [1] 0.0948\n\n# ---- As a function ----\nfirst_success <- function(t, p) {\n  c(on_trial_t = dgeom(t - 1, p),\n    within_t   = pgeom(t - 1, p),\n    after_t    = 1 - pgeom(t - 1, p))\n}\nround(first_success(t = 4, p = 1/6), 4)\n#> on_trial_t   within_t    after_t \n#>     0.0965     0.5177     0.4823 \nround(first_success(t = 6, p = 0.55), 4)       # Lecture 9: first girl on the 6th child (0.0101)\n#> on_trial_t   within_t    after_t \n#>     0.0101     0.9917     0.0083 ",
    "comment": "**R's geometric counts FAILURES before the first success, not the trial number.**\n- \"First success on trial t\" → **`dgeom(t - 1, p)`**\n- \"First success within t trials\" (on or before t) → **`pgeom(t - 1, p)`**\n- \"Takes more than t trials\" → `1 - pgeom(t - 1, p)` = (1 − p)^t\n- Random **trial numbers** → `rgeom(n, p) + 1`\n\nLecture 9's example (`dgeom(6, .55)` for \"the 7th child\") gets this wrong; see the warning in Lecture 09.\n\n**Check by hand:** first six on roll 4 = fail, fail, fail, success = (5/6)³ × (1/6). If R and your hand calculation agree, you've used the right argument.\n\n**Average wait = 1/p.** For a six that's 6 rolls.\n\n**As a function (bottom of the code):** **The off-by-one is handled inside the function:** you pass the **trial number** t, and it converts to R's \"failures before success\" (`t - 1`). Write it once and you can't make the mistake again.",
    "key": true
   },
   {
    "id": "core-03-c05",
    "label": "Uniform: runif for random numbers between a and b",
    "question": "Generate 5 random numbers between 0 and 1, and 5 between 10 and 20. Use runif to make an event happen with probability 0.3.",
    "code": "set.seed(1)\nrunif(5)                          # between 0 and 1\n#> [1] 0.2655087 0.3721239 0.5728534 0.9082078 0.2016819\nrunif(5, min = 10, max = 20)      # between 10 and 20\n#> [1] 18.98390 19.44675 16.60798 16.29114 10.61786\npunif(0.3)                        # P(U <= 0.3) = 0.3\n#> [1] 0.3\n\n# An event with probability 0.3\nhappens <- runif(10) < 0.3\nhappens\n#>  [1]  TRUE  TRUE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE\nmean(runif(10000) < 0.3)          # close to 0.3\n#> [1] 0.3023\n\n# Random whole numbers: use sample, not runif\nsample(1:10, 5, replace = TRUE)\n#> [1]  1  4 10 10  6\n\n# ---- As a function ----\nhappens <- function(n, p) {\n  runif(n) < p                      # n TRUE/FALSE values, each TRUE with probability p\n}\nset.seed(1)\nhappens(10, p = 0.3)\n#>  [1]  TRUE FALSE FALSE FALSE  TRUE FALSE FALSE FALSE FALSE  TRUE\nmean(happens(10000, p = 0.3))\n#> [1] 0.3022",
    "comment": "**`runif(n, min, max)`** gives decimals spread evenly between min and max (default 0 to 1).\n\n**`runif(1) < p` is TRUE with probability p:** a uniform number lands below p exactly p of the time. It's a quick way to simulate any yes/no event, e.g. \"each day rains with probability 0.4\" → `runif(1) < 0.4`.\n\n**Whole numbers?** Use `sample(1:10, ...)`, not `round(runif(...))`. Rounding makes the end values (1 and 10) half as likely as the others.\n\n**As a function (bottom of the code):** **A one-line function is fine** when it gives a clear name to a trick. `happens(n, p)` reads better than `runif(n) < p` inside a bigger simulation.",
    "key": false
   },
   {
    "id": "core-03-c06",
    "label": "Sample means: how the average behaves (CLT)",
    "question": "Take 1,000 samples of size 25 from a normal distribution with mean 70 and sd 10, and compute each sample mean. What are the mean and sd of the sample means?",
    "code": "set.seed(1)\nsample_means <- replicate(1000, mean(rnorm(25, mean = 70, sd = 10)))\nmean(sample_means)            # close to 70\n#> [1] 70.00938\nsd(sample_means)              # close to 10 / sqrt(25) = 2\n#> [1] 1.870706\n\n# Works for non-normal data too: means of 30 die rolls\ndie_means <- replicate(1000, mean(sample(1:6, 30, replace = TRUE)))\nmean(die_means)               # close to 3.5\n#> [1] 3.517733\nsd(die_means)                 # close to sd of one roll / sqrt(30)\n#> [1] 0.3062086\nsd(1:6) * sqrt(5/6) / sqrt(30)\n#> [1] 0.3118048\n\n# ---- As a function ----\nsample_mean_spread <- function(n, mu, sigma, n_sims = 1000) {\n  means <- replicate(n_sims, mean(rnorm(n, mu, sigma)))\n  c(mean_of_means = mean(means), sd_of_means = sd(means), theory_sd = sigma / sqrt(n))\n}\nset.seed(1)\nround(sapply(c(5, 25, 100), function(n) sample_mean_spread(n, mu = 70, sigma = 10)), 3)\n#>                 [,1]   [,2]   [,3]\n#> mean_of_means 69.968 69.994 70.001\n#> sd_of_means    4.632  1.877  0.981\n#> theory_sd      4.472  2.000  1.000",
    "comment": "**One sample mean per repetition:** `replicate(1000, mean(rnorm(25, 70, 10)))`. Each run draws a new sample of 25 and keeps only its average.\n\n**What to say about the result**\n- The sample means are centered at the **true mean** (70).\n- Their spread is **σ / √n** = 10 / 5 = **2**. Bigger samples → less spread.\n- Their histogram looks **normal**, even when the original data isn't (die rolls). That's the Central Limit Theorem.\n\n**Similar question:** \"how does the average change with sample size?\" → `sapply(c(5, 25, 100), function(n) sd(replicate(1000, mean(rnorm(n, 70, 10)))))`. The sd should shrink like 1/√n. Recitation 4, Problem 3 is the same idea.\n\n**As a function (bottom of the code):** **`sapply` with a function that returns a vector gives a matrix:** one column per n (5, 25, 100) and one row per result. The sd of the means drops like σ/√n: about 4.5, 2 and 1.",
    "key": true
   }
  ]
 },
 "core-04": {
  "type": "core",
  "num": "04",
  "title": "Visualizations: every base-R plot you need",
  "date": "",
  "exams": [],
  "topics": [
   "hist",
   "barplot",
   "boxplot",
   "plot",
   "scatterplot",
   "curve",
   "abline",
   "legend",
   "par mfrow",
   "colors"
  ],
  "pdfs": [],
  "notes": "Every plot type from Lecture 8 and the recitations, with the picture it makes. Each chunk makes its own data, so you can run it anywhere.\n\n**Any question asking for a plot is graded on:** a title (`main =`), axis labels (`xlab =`, `ylab =`), and whatever customization it names (colors, bins, notch, horizontal, names). Tick them off one by one. The **Plot options cheat sheet** at the bottom lists every argument.\n\n| Data | Plot |\n|---|---|\n| one numeric variable | `hist()` (shape) or `boxplot()` (spread and outliers) |\n| one categorical variable | `barplot(table(x))` |\n| numeric by group | `boxplot(y ~ group)` |\n| two numeric variables | `plot(x, y)` (scatter) |\n| something over time / steps | `plot(x, y, type = \"l\")` (line) |\n| a distribution's curve | `curve(dnorm(x, m, s), from, to)` |\n\n**Every chunk ends with \"As a function\".** To turn any code into a function:\n1. Find the numbers and data that would change in a new question (n, p, the target, the title). Those become the **arguments**, with defaults for the usual values.\n2. Put the code inside `name <- function(args) { ... }` and replace those numbers with the argument names.\n3. Make the **last line** what you want back: one value, a named vector `c(a = ..., b = ...)` for several numbers, or a `list()` for mixed things. Plot functions can `invisible()` the numbers.\n4. Call it once to check, then reuse it with new arguments (or run it over many values with `sapply`).",
  "takeaways": [
   "Every plot: main =, xlab =, ylab = and the customizations the question names.",
   "barplot needs counts: barplot(table(x)). hist and boxplot take the raw numbers.",
   "Add to an existing plot: abline(), lines(), points(), curve(..., add = TRUE), legend().",
   "Side by side: par(mfrow = c(1, 2)) ... then par(mfrow = c(1, 1)) to reset.",
   "A density curve on a histogram needs hist(..., freq = FALSE) so both use the same y scale."
  ],
  "updatedAt": "2026-10-15T17:30:00Z",
  "remember": [],
  "chunks": [
   {
    "id": "core-04-c01",
    "label": "Histogram (with a normal curve on top)",
    "question": "Simulate 500 normal values (mean 70, sd 10). Draw a histogram with 15 bins, a title, axis labels and colors, and add the normal curve on top.",
    "code": "set.seed(1)\nscores <- rnorm(500, mean = 70, sd = 10)\nhist(scores,\n     breaks = 15,                       # about 15 bins\n     freq = FALSE,                      # y-axis = density, so a curve can be added\n     col = \"lightblue\", border = \"white\",\n     main = \"Simulated Test Scores\",\n     xlab = \"Score\", ylab = \"Density\")\ncurve(dnorm(x, mean = 70, sd = 10), add = TRUE, col = \"red\", lwd = 2)\nabline(v = mean(scores), lty = 2)       # dashed line at the sample mean\n\n# ---- As a function ----\nhist_with_curve <- function(x, title = \"Histogram\", xlab = \"x\", bins = 15, color = \"lightblue\") {\n  m <- mean(x)                       # compute these BEFORE curve():\n  s <- sd(x)                         # inside curve(), \"x\" means the curve's own x-values\n  hist(x, breaks = bins, freq = FALSE, col = color, border = \"white\",\n       main = title, xlab = xlab, ylab = \"Density\")\n  curve(dnorm(x, mean = m, sd = s), add = TRUE, col = \"red\", lwd = 2)\n  invisible(c(mean = m, sd = s))\n}\nset.seed(1)\nhist_with_curve(scores, title = \"Simulated Test Scores\", xlab = \"Score\")\nstats <- hist_with_curve(rnorm(300, 50, 5), title = \"Another sample\", bins = 20)\nstats\n#>      mean        sd \n#> 50.167921  4.818479 ",
    "comment": "[![Histogram (with a normal curve on top)](files/plots/core-hist.png)](files/plots/core-hist.png)\n\n**Histogram = shape of ONE numeric variable.** Give it the raw numbers; don't use `table()`.\n\n**Key arguments**\n- `breaks = 15` → about 15 bins (R rounds to nice numbers). For exact bins, give the cut points: `breaks = seq(30, 110, by = 5)`.\n- `freq = FALSE` → the y-axis shows **density** instead of counts. You need this to draw a density curve on top, because both are then on the same scale. Leave it out (counts) when there's no curve.\n- `col =` fills the bars; `border =` colors the outlines.\n\n**Adding things on top** (after the plot is drawn)\n- `curve(dnorm(x, m, s), add = TRUE)`: the theoretical curve. Write `x` literally; curve fills it in.\n- `abline(v = value)`: a vertical line. `lty = 2` makes it dashed and `lwd = 2` makes it thicker.\n\n**Describing a histogram:** center (where is the peak?), spread (how wide?), shape (symmetric, or a long tail to the right/left?), and any gaps or unusual values.\n\n**As a function (bottom of the code):** **Plot functions take the data plus the parts that change** (title, labels, bins, color). Defaults keep calls short.\n\n**The trap:** inside `curve()`, `x` is curve's own grid of x-values, not your data. So compute `mean(x)` and `sd(x)` **before** calling `curve()` and pass them in.\n\n**`invisible(...)`** returns values without printing them. The plot is the main output, but you can still save the numbers (`stats <- ...`).",
    "key": true
   },
   {
    "id": "core-04-c02",
    "label": "Barplot: counts of a categorical variable (die rolls)",
    "question": "Roll a die 600 times and draw a barplot of how often each face appeared, with colored bars, custom bar names and a line at the expected count.",
    "code": "set.seed(1)\nrolls <- sample(1:6, 600, replace = TRUE)\ncounts <- table(factor(rolls, levels = 1:6))\ncounts\n#>   1   2   3   4   5   6 \n#> 106  95  90 102 109  98 \nbarplot(counts,\n        col = rainbow(6), border = \"grey30\",\n        names.arg = c(\"One\", \"Two\", \"Three\", \"Four\", \"Five\", \"Six\"),\n        main = \"600 Rolls of a Fair Die\",\n        xlab = \"Face\", ylab = \"Count\",\n        ylim = c(0, 130))\nabline(h = 100, lty = 2, col = \"red\")    # expected count: 600/6\n\n# ---- As a function ----\nplot_die_rolls <- function(n, sides = 6, color = \"steelblue\") {\n  rolls <- sample(1:sides, n, replace = TRUE)\n  counts <- table(factor(rolls, levels = 1:sides))\n  barplot(counts, col = color,\n          main = paste(n, \"rolls of a\", sides, \"sided die\"),\n          xlab = \"Face\", ylab = \"Count\", ylim = c(0, max(counts) * 1.2))\n  abline(h = n / sides, lty = 2, col = \"red\")\n  invisible(counts)\n}\nset.seed(1)\ncounts <- plot_die_rolls(600)\ncounts\n#>   1   2   3   4   5   6 \n#> 106  95  90 102 109  98 \nplot_die_rolls(200, sides = 4, color = \"tomato\")",
    "comment": "[![Barplot: counts of a categorical variable (die rolls)](files/plots/core-bar.png)](files/plots/core-bar.png)\n\n**`barplot()` needs the counts:** use `barplot(table(x))`, **not** `barplot(x)`. Plotting the raw rolls draws 600 bars, one per roll.\n\n**Key arguments**\n- `names.arg = c(...)` → bar labels, **in the table's order** (check with `names(counts)`).\n- `col = c(...)` → one color per bar (or one color for all). `rainbow(6)` and `heat.colors(6)` generate colors.\n- `ylim = c(0, max)` → leave room above the tallest bar.\n- `horiz = TRUE` → horizontal bars.\n\n**Proportions instead of counts:** `barplot(prop.table(counts))`. With proportions, the expected line would be at `abline(h = 1/6)`.\n\n**Bar order:** bars follow the **factor level order**. Set it with `factor(x, levels = c(...))` before `table()` (as in Recitation 3's tenure groups).\n\n**As a function (bottom of the code):** **`paste()` builds the title from the arguments**, so the title is always right (\"600 rolls of a 6 sided die\"). **`ylim = c(0, max(counts) * 1.2)`** adapts to any data instead of a fixed 130. Hard-coded numbers are the usual thing that breaks when code becomes a function.",
    "key": true
   },
   {
    "id": "core-04-c03",
    "label": "Side-by-side (grouped) barplot with a legend",
    "question": "For a small survey, draw a grouped barplot of job satisfaction by department, with a legend.",
    "code": "set.seed(1)\ndept <- sample(c(\"Sales\", \"HR\", \"Finance\"), 200, replace = TRUE)\nsatisfaction <- factor(sample(c(\"Low\", \"Medium\", \"High\"), 200, replace = TRUE),\n                       levels = c(\"Low\", \"Medium\", \"High\"))\ntab <- table(satisfaction, dept)          # rows = satisfaction, columns = departments\ntab\n#>             dept\n#> satisfaction Finance HR Sales\n#>       Low         28 34    19\n#>       Medium      17 19    21\n#>       High        21 15    26\nbarplot(tab,\n        beside = TRUE,                    # bars next to each other, not stacked\n        col = c(\"tomato\", \"gold\", \"seagreen3\"),\n        legend.text = TRUE,               # legend from the row names\n        args.legend = list(x = \"topright\", title = \"Satisfaction\"),\n        main = \"Job Satisfaction by Department\",\n        xlab = \"Department\", ylab = \"Number of Employees\",\n        ylim = c(0, 45))                  # extra room on top for the legend\n\n# ---- As a function ----\ngrouped_barplot <- function(bars, groups, title, xlab, ylab = \"Count\", colors = NULL) {\n  tab <- table(bars, groups)\n  if (is.null(colors)) colors <- rainbow(nrow(tab))     # default: one color per bar\n  barplot(tab, beside = TRUE, col = colors,\n          legend.text = TRUE, args.legend = list(x = \"topright\"),\n          main = title, xlab = xlab, ylab = ylab, ylim = c(0, max(tab) * 1.3))\n  invisible(tab)\n}\ngrouped_barplot(satisfaction, dept, title = \"Job Satisfaction by Department\",\n                xlab = \"Department\", colors = c(\"tomato\", \"gold\", \"seagreen3\"))",
    "comment": "[![Side-by-side (grouped) barplot with a legend](files/plots/core-bar2.png)](files/plots/core-bar2.png)\n\n**Two categorical variables → `table(A, B)` → `barplot(tab, beside = TRUE)`.**\n- The table's **columns** become the groups along the x-axis (departments).\n- The **rows** become the bars inside each group (satisfaction levels), colored by `col` in row order.\n- `beside = TRUE` puts bars next to each other. Without it they're **stacked**, which is also a valid plot if the question asks for stacked.\n\n**Legend:** `legend.text = TRUE` uses the row names. `args.legend = list(x = \"topright\")` moves it out of the way.\n\n**Swap which variable is on the axis:** `barplot(t(tab), beside = TRUE)`. `t()` transposes the table.\n\n**As a function (bottom of the code):** **`colors = NULL` as a default, then `if (is.null(colors)) ...`**, is the standard way to make an argument optional when its default depends on the data (one color per row of the table).",
    "key": true
   },
   {
    "id": "core-04-c04",
    "label": "Boxplot by group (notch, horizontal, outliers)",
    "question": "Compare simulated salaries across three departments with a boxplot. Add notches and colors, and check for outliers.",
    "code": "options(scipen = 999)                    # show 100000, not 1e+05, on the axis\nset.seed(1)\ndf <- data.frame(\n  dept = rep(c(\"Sales\", \"HR\", \"Finance\"), each = 60),\n  salary = c(rnorm(60, 60000, 8000), rnorm(60, 55000, 6000), rnorm(60, 75000, 12000)))\ndf$salary[5] <- 100000                   # plant one unusual value\n\nb <- boxplot(salary ~ dept, data = df,\n        notch = TRUE,\n        col = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\n        main = \"Salary by Department\",\n        xlab = \"Department\", ylab = \"Salary (USD)\")\nb$out                                    # the outlier values (the dots)\n#> [1] 101473.2 102695.7 100000.0  42282.4\ntapply(df$salary, df$dept, median)       # the thick middle lines\n#>  Finance       HR    Sales \n#> 73532.46 55210.35 61032.83 \n\n# ---- As a function ----\nbox_by_group <- function(values, groups, title, xlab = \"Group\", ylab = \"Value\", notch = TRUE) {\n  b <- boxplot(values ~ groups, notch = notch,\n               col = rainbow(length(unique(groups)), alpha = 0.4),\n               main = title, xlab = xlab, ylab = ylab)\n  b$out                                  # return the outliers\n}\nbox_by_group(df$salary, df$dept, title = \"Salary by Department\",\n             xlab = \"Department\", ylab = \"Salary (USD)\")\n#> [1] 101473.2 102695.7 100000.0  42282.4",
    "comment": "[![Boxplot by group (notch, horizontal, outliers)](files/plots/core-box.png)](files/plots/core-box.png)\n\n**`boxplot(y ~ group, data = df)`** draws one box per group. A single variable is just `boxplot(df$salary)`.\n\n**Reading a box**\n- **Thick line** = median. **Box** = middle 50% (25th to 75th percentile). Its height is the IQR.\n- **Whiskers** reach the furthest points within 1.5 × IQR of the box.\n- **Dots** beyond the whiskers = **outliers**: the planted 100,000 in Sales, plus a few that random data produces by chance.\n\n**Axis showing 1e+05?** Run `options(scipen = 999)` once to turn off scientific notation.\n\n**Key arguments:** `notch = TRUE` (if two notches don't overlap, the medians likely differ); `horizontal = TRUE` (sideways, and then **swap** xlab/ylab); `col =` (one color per box); `names =` (rename the boxes).\n\n**\"Are there outliers?\"** Look for dots, or use code: save the plot (`b <- boxplot(...)`), then `b$out` lists them. `numeric(0)` means none.\n\n**As a function (bottom of the code):** **Pass the vectors (`df$salary`, `df$dept`)**: `values ~ groups` works with plain vectors too. **Returns the outliers**, so one call draws the plot **and** answers \"are there outliers?\". `alpha = 0.4` makes the colors lighter.",
    "key": true
   },
   {
    "id": "core-04-c05",
    "label": "Scatterplot: two numeric variables, colors by group, trend line",
    "question": "Plot study hours against exam score, color the points by group, add a regression line and a legend.",
    "code": "set.seed(1)\nhours <- runif(80, 0, 10)\ngroup <- sample(c(\"Online\", \"In person\"), 80, replace = TRUE)\nscore <- 55 + 4 * hours + ifelse(group == \"In person\", 5, 0) + rnorm(80, 0, 6)\n\nplot(hours, score,\n     col = ifelse(group == \"Online\", \"steelblue\", \"darkorange\"),\n     pch = 19,                                # solid dots\n     main = \"Exam Score vs Study Hours\",\n     xlab = \"Hours studied\", ylab = \"Exam score\")\nabline(lm(score ~ hours), lwd = 2)            # best-fit line\nlegend(\"topleft\", legend = c(\"Online\", \"In person\"),\n       col = c(\"steelblue\", \"darkorange\"), pch = 19)\ncor(hours, score)                             # strength of the linear relationship\n#> [1] 0.8731183\n\n# ---- As a function ----\nscatter_by_group <- function(x, y, group, title, xlab, ylab) {\n  levs <- sort(unique(group))\n  palette <- c(\"steelblue\", \"darkorange\", \"seagreen\", \"purple\")[1:length(levs)]\n  point_cols <- palette[match(group, levs)]        # each point gets its group's color\n  plot(x, y, col = point_cols, pch = 19, main = title, xlab = xlab, ylab = ylab)\n  abline(lm(y ~ x), lwd = 2)\n  legend(\"topleft\", legend = levs, col = palette, pch = 19)\n  cor(x, y)\n}\nscatter_by_group(hours, score, group, title = \"Exam Score vs Study Hours\",\n                 xlab = \"Hours studied\", ylab = \"Exam score\")\n#> [1] 0.8731183",
    "comment": "[![Scatterplot: two numeric variables, colors by group, trend line](files/plots/core-scatter.png)](files/plots/core-scatter.png)\n\n**`plot(x, y)`:** x goes along the bottom, y up the side. Put the variable that \"explains\" on x.\n\n**Customizing points**\n- `pch =` point shape: 19 = solid dot, 17 = triangle, 1 = open circle (default).\n- `cex =` point size (1 = normal).\n- `col =` color. A **vector** of colors colors each point separately: `ifelse(group == \"A\", \"blue\", \"orange\")`.\n\n**Adding to the plot**\n- `abline(lm(y ~ x))`: the regression (best-fit) line.\n- `abline(h = 70)` / `abline(v = 5)`: horizontal / vertical reference lines.\n- `legend(\"topleft\", legend = labels, col = colors, pch = 19)`: **must match** the colors you used.\n\n**Describing a scatterplot:** direction (positive/negative), form (linear or curved), strength (`cor()`: near ±1 strong, near 0 weak), and outliers.\n\n**As a function (bottom of the code):** **Works for any number of groups (up to 4 colors here):** `match(group, levs)` turns each point's group into a number (1, 2, …), which picks its color from `palette`. The legend uses the same `levs` and `palette`, so colors and labels always match. **Returns** the correlation.",
    "key": true
   },
   {
    "id": "core-04-c06",
    "label": "Line plot: running proportion of heads (law of large numbers)",
    "question": "Flip a coin 1,000 times and plot the proportion of heads after each flip, with a reference line at 0.5.",
    "code": "set.seed(1)\nflips <- sample(c(1, 0), 1000, replace = TRUE)       # 1 = heads\nrunning_prop <- cumsum(flips) / (1:1000)             # proportion after each flip\n\nplot(1:1000, running_prop,\n     type = \"l\",                                    # line instead of points\n     lwd = 2, col = \"purple\",\n     ylim = c(0, 1),\n     main = \"Running Proportion of Heads\",\n     xlab = \"Number of flips\", ylab = \"Proportion of heads\")\nabline(h = 0.5, lty = 2, col = \"red\")\ntail(running_prop, 1)\n#> [1] 0.502\n\n# ---- As a function ----\nplot_running_prop <- function(n, p = 0.5) {\n  flips <- sample(c(1, 0), n, replace = TRUE, prob = c(p, 1 - p))\n  running <- cumsum(flips) / (1:n)\n  plot(1:n, running, type = \"l\", lwd = 2, col = \"purple\", ylim = c(0, 1),\n       main = paste(\"Running proportion of heads, p =\", p),\n       xlab = \"Number of flips\", ylab = \"Proportion of heads\")\n  abline(h = p, lty = 2, col = \"red\")\n  invisible(running)\n}\nset.seed(1)\nr <- plot_running_prop(1000, p = 0.3)\ntail(r, 1)\n#> [1] 0.304",
    "comment": "[![Line plot: running proportion of heads (law of large numbers)](files/plots/core-line.png)](files/plots/core-line.png)\n\n**`type = \"l\"`** draws a line instead of dots. Use it for anything that changes over steps/time: running averages, random walks, stock prices. `type = \"b\"` draws both points and lines.\n\n**`cumsum(x) / (1:n)`** gives the **running average**: `cumsum` adds up as it goes (number of heads so far), divided by how many flips so far.\n\n**What it shows:** the proportion swings wildly at first and then settles near 0.5. That's the **law of large numbers**.\n\n**Same plot for other simulations**\n- Random walk position: `plot(cumsum(sample(c(-1, 1), 500, TRUE)), type = \"l\")`.\n- Stock prices: `plot(sim$Day, sim$Price, type = \"l\")` (Recitation 4, Problem 11).\n\n**As a function (bottom of the code):** **The reference line moves with the argument** (`abline(h = p)`), and so does the title. Use this shape for any \"show the simulation settling down\" question.",
    "key": true
   },
   {
    "id": "core-04-c07",
    "label": "Distribution curves: compare normals with curve() and lines()",
    "question": "Draw the normal curves for N(0, 1), N(0, 2) and N(2, 1) on one plot with a legend. Shade nothing, just compare shapes.",
    "code": "curve(dnorm(x, mean = 0, sd = 1), from = -6, to = 8,\n      lwd = 2, col = \"black\",\n      main = \"Normal Distributions\", xlab = \"x\", ylab = \"Density\")\ncurve(dnorm(x, mean = 0, sd = 2), add = TRUE, lwd = 2, col = \"blue\")\ncurve(dnorm(x, mean = 2, sd = 1), add = TRUE, lwd = 2, col = \"red\", lty = 2)\nlegend(\"topright\", legend = c(\"N(0, 1)\", \"N(0, 2)\", \"N(2, 1)\"),\n       col = c(\"black\", \"blue\", \"red\"), lty = c(1, 1, 2), lwd = 2)\n\n# The Lecture 9 way: make x values, compute heights, plot\nx <- seq(-4, 4, by = 0.1)\ny <- dnorm(x)\nmax(y)                 # peak height of N(0, 1): 0.399\n#> [1] 0.3989423\n\n# ---- As a function ----\ncompare_normals <- function(means, sds, from = -6, to = 8) {\n  cols <- rainbow(length(means))\n  top <- max(dnorm(means, means, sds))                 # tallest peak, for ylim\n  curve(dnorm(x, means[1], sds[1]), from = from, to = to, col = cols[1], lwd = 2,\n        ylim = c(0, top), main = \"Normal Distributions\", xlab = \"x\", ylab = \"Density\")\n  for (i in seq_along(means)[-1]) {\n    curve(dnorm(x, means[i], sds[i]), add = TRUE, col = cols[i], lwd = 2)\n  }\n  legend(\"topright\", legend = paste0(\"N(\", means, \", \", sds, \")\"), col = cols, lwd = 2)\n}\ncompare_normals(means = c(0, 0, 2), sds = c(1, 2, 1))",
    "comment": "[![Distribution curves: compare normals with curve() and lines()](files/plots/core-curves.png)](files/plots/core-curves.png)\n\n**`curve(f(x), from, to)`** draws a function. Write `x` literally inside, and `add = TRUE` draws on top of the existing plot. It's the quickest way to draw a distribution.\n\n**The Lecture 9 way:** `x <- seq(from, to, by = 0.1)`, `y <- dnorm(x, m, s)`, then `plot(x, y, type = \"l\")`. Add more curves with `lines(x, dnorm(x, m2, s2))`.\n\n**What the parameters do:** the **mean** slides the curve left/right (red); a bigger **sd** makes it wider and flatter (blue). The area under each curve is always 1.\n\n**Discrete distributions (binomial):** use bars, not a curve: `barplot(dbinom(0:10, 10, 0.7), names.arg = 0:10)`, or `plot(0:10, dbinom(0:10, 10, 0.7), type = \"h\", lwd = 4)`.\n\n**As a function (bottom of the code):** **A loop inside a plot function:** the first curve draws the plot, then `for (i in seq_along(means)[-1])` adds the rest (`[-1]` skips the first). **`ylim` is computed from the data** so the tallest curve always fits. `paste0()` builds legend labels like \"N(0, 1)\" automatically.",
    "key": true
   },
   {
    "id": "core-04-c08",
    "label": "Several plots in one window: par(mfrow)",
    "question": "Show four plots of the same simulated data in a 2 x 2 grid: histogram, boxplot, barplot of rounded values and a normal Q-Q plot.",
    "code": "set.seed(1)\nx <- rnorm(200, mean = 50, sd = 8)\n\npar(mfrow = c(2, 2))                  # 2 rows, 2 columns\nhist(x, col = \"lightblue\", main = \"Histogram\", xlab = \"x\")\nboxplot(x, horizontal = TRUE, col = \"wheat1\", main = \"Boxplot\", xlab = \"x\")\nbarplot(table(cut(x, breaks = c(-Inf, 40, 50, 60, Inf))),\n        col = \"thistle2\", main = \"Counts by range\", ylab = \"Count\")\nqqnorm(x, main = \"Normal Q-Q plot\"); qqline(x, col = \"red\")\npar(mfrow = c(1, 1))                  # reset to one plot\n\n# ---- As a function ----\nfour_plots <- function(x, name = \"x\") {\n  par(mfrow = c(2, 2))\n  on.exit(par(mfrow = c(1, 1)))        # reset the layout when the function ends, even after an error\n  hist(x, col = \"lightblue\", main = paste(\"Histogram of\", name), xlab = name)\n  boxplot(x, horizontal = TRUE, col = \"wheat1\", main = \"Boxplot\", xlab = name)\n  barplot(table(cut(x, breaks = 4)), col = \"thistle2\", main = \"Counts by range\", ylab = \"Count\")\n  qqnorm(x, main = \"Normal Q-Q plot\"); qqline(x, col = \"red\")\n}\nset.seed(1)\nfour_plots(rnorm(200, 50, 8), name = \"Simulated values\")",
    "comment": "[![Several plots in one window: par(mfrow)](files/plots/core-grid.png)](files/plots/core-grid.png)\n\n**`par(mfrow = c(rows, cols))`** splits the plot window. The next plots fill it **row by row**: `c(1, 2)` = side by side, `c(2, 1)` = stacked, `c(2, 2)` = a 2×2 grid.\n\n**Always reset** with `par(mfrow = c(1, 1))` afterwards, or later plots keep shrinking into the grid.\n\n**Comparing before and after** (as in Recitation 3): use `c(1, 2)` and give both plots the **same** `xlim`, `ylim` and `breaks`, so differences are real and not just axis scaling.\n\n**Q-Q plot (`qqnorm` + `qqline`):** points on the line mean the data looks normal.\n\n**As a function (bottom of the code):** **`on.exit(par(mfrow = c(1, 1)))`** runs the reset automatically when the function finishes, so you can't forget it. **`cut(x, breaks = 4)`** splits any data into 4 equal-width ranges, so the function works for any x.",
    "key": true
   },
   {
    "id": "core-04-c09",
    "label": "Plot options cheat sheet",
    "question": "Which argument changes the title, labels, colors, bins, axis limits, point shapes, line types and legend?",
    "code": "# Works in hist(), barplot(), boxplot(), plot():\n#   main = \"Title\"            xlab = \"x label\"        ylab = \"y label\"\n#   col = \"steelblue\"         (or a vector: one color per bar/box/point)\n#   xlim = c(0, 100)          ylim = c(0, 50)         las = 1  (horizontal axis numbers)\n#\n# hist():    breaks = 10 | breaks = seq(a, b, by = w)   freq = FALSE   border = \"white\"\n# barplot(): names.arg = c(...)   horiz = TRUE   beside = TRUE   legend.text = TRUE\n# boxplot(): notch = TRUE   horizontal = TRUE   names = c(...)   outline = FALSE (hide dots)\n# plot():    type = \"p\" points | \"l\" line | \"b\" both | \"h\" spikes\n#            pch = 19 solid dot | 17 triangle | 1 open circle;   cex = 1.5 (size)\n#            lty = 1 solid | 2 dashed | 3 dotted;   lwd = 2 (line width)\n#\n# Add on top of an existing plot:\n#   abline(h = y) | abline(v = x) | abline(lm(y ~ x)) | abline(a = intercept, b = slope)\n#   lines(x, y)   points(x, y)   text(x, y, \"label\")   curve(f(x), add = TRUE)\n#   legend(\"topright\", legend = c(\"A\", \"B\"), col = c(\"red\", \"blue\"), pch = 19 / lty = 1)\n#\n# Layout:  par(mfrow = c(1, 2)) ... par(mfrow = c(1, 1))\ncolors()[1:8]                         # a few of R's 657 named colors\n#> [1] \"white\"         \"aliceblue\"     \"antiquewhite\"  \"antiquewhite1\"\n#> [5] \"antiquewhite2\" \"antiquewhite3\" \"antiquewhite4\" \"aquamarine\"   \n\n# ---- As a function ----\nmy_hist <- function(x, title, xlab, ...) {\n  hist(x, main = title, xlab = xlab, ylab = \"Frequency\",\n       col = \"lightblue\", border = \"white\", ...)     # ... passes any extra options to hist()\n}\nset.seed(1)\nv <- rnorm(100)\nmy_hist(v, title = \"Default bins\", xlab = \"x\")\nmy_hist(v, title = \"20 bins, wider axis\", xlab = \"x\", breaks = 20, xlim = c(-4, 4))",
    "comment": "**Reading a plot question:** underline every customization it lists, find its argument here, and tick it off. Typical list: title, axis labels, colors, borders, number of bins, bar names, notch, horizontal, side by side.\n\n**Common slips**\n- `names.arg` is for **barplot**, `names` is for **boxplot**.\n- With `horizontal = TRUE`, the numeric axis is x, so **swap** `xlab` and `ylab`.\n- A legend's `col`/`pch`/`lty` must **match** what you drew, in the same order.\n- `abline`, `lines`, `points`, `legend` and `curve(add = TRUE)` only work **after** a plot has been drawn.\n- Colors: names like `\"steelblue\"`, `\"tomato\"` or `\"lightblue\"`, or hex codes like `\"#1f77b4\"`.\n\n**As a function (bottom of the code):** **`...` (\"dots\")** collects any extra arguments and hands them to `hist()`. Your function has the settings you always use, and you can still add `breaks`, `xlim` and so on when a question asks for them. This works for any plot wrapper.",
    "key": true
   }
  ]
 }
};
