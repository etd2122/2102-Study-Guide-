// STAT 2102 study guide data. Replace this file with the one you download from the site.
window.ENTRIES_SAVED = "2026-10-12T15:50:00Z";
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
    "comment": "",
    "key": false
   },
   {
    "id": "c076",
    "label": "Problem 1 [7pt] · Part 2 · Append four additional elements to vector2: 10, 20, 30, and…",
    "code": "vector2 <- append(vector2, 10, after = 1)\nvector2 <- append(vector2, 20, after = 0)\nvector2 <- append(vector2, 30, after = 6)\nvector2 <- append(vector2, 40)\nvector2\n#>  [1] 20.0  2.5 10.0  4.5  6.5  8.5 30.0 10.5 12.5 14.5 40.0",
    "comment": "",
    "key": false
   },
   {
    "id": "c077",
    "label": "Problem 1 [7pt] · Part 3 · Form a new vector encompassing {2, 3, 6, 10, 15, 18, 22, 25,…",
    "code": "vector4 <- c(2, 3, 6, 10, 15, 18, 22, 25, 27, 30, 31, 35, 42)\nvector4\n#>  [1]  2  3  6 10 15 18 22 25 27 30 31 35 42\nvector5 <- vector4[vector4 > 15 & vector4 %% 2 != 0]\nvector5\n#> [1] 25 27 31 35\n27 %in% vector5\n#> [1] TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c078",
    "label": "Problem 2 [9pt] · Part 1 · Create a list listX with the following elements:",
    "code": "listX <- list(\n  \"Data Science\",\n  100,\n  c(-3, 0, 3, 6),\n  TRUE,\n  list(c(\"A\", \"B\", \"C\"), c(2.5, 5.5, 7.5))\n)\nlistX\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 100\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5",
    "comment": "",
    "key": false
   },
   {
    "id": "c079",
    "label": "Problem 2 [9pt] · Part 2 · Extract the third element of listX and assign it to vector6.",
    "code": "vector6 <- listX[[3]]\nvector6\n#> [1] -3  0  3  6",
    "comment": "",
    "key": false
   },
   {
    "id": "c080",
    "label": "Problem 2 [9pt] · Part 3 · Convert listX into a single vector using unlist(). Explain…",
    "code": "unlist(listX)\n#>  [1] \"Data Science\" \"100\"          \"-3\"           \"0\"            \"3\"\n#>  [6] \"6\"            \"TRUE\"         \"A\"            \"B\"            \"C\"\n#> [11] \"2.5\"          \"5.5\"          \"7.5\"\n# By applying unlist() to listX, we obtain a character vector. From the R documentation for unlist():\n# Given a list structure x, unlist() simplifies it to produce a vector which contains all the atomic\n# components which occur in x. Where possible the list elements are coerced to a common mode\n# during the unlisting, and so the result often ends up as a character vector. Vectors will be coerced\n# to the highest type of the components in the hierarchy:\n#>      NULL<  raw< logical < integer < double < complex< character < list < expression\n# Under the above hierarchy, the highest data type of an atomic element inside listX is “character”, so all\n# other elements are coerced to be of class “character” as well. The result thus becomes a character vector.",
    "comment": "",
    "key": false
   },
   {
    "id": "c081",
    "label": "Problem 2 [9pt] · Part 4 · Modify listX by replacing the second element with a new…",
    "code": "listX[[2]] <- 200\nlistX\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 200\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5",
    "comment": "",
    "key": false
   },
   {
    "id": "c082",
    "label": "Problem 2 [9pt] · Part 5 · Create a new list listY by merging listXwith another list…",
    "code": "listY <- c(listX, list(\"Statistics\", 50, FALSE))\nlistY\n#> [[1]]\n#> [1] \"Data Science\"\n#> [[2]]\n#> [1] 200\n#> [[3]]\n#> [1] -3  0  3  6\n#> [[4]]\n#> [1] TRUE\n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"A\" \"B\" \"C\"\n#> [[5]][[2]]\n#> [1] 2.5 5.5 7.5\n#> [[6]]\n#> [1] \"Statistics\"\n#> [[7]]\n#> [1] 50\n#> [[8]]\n#> [1] FALSE\n# The structure of listY differs from that of listX in that it is longer by 3 elements.",
    "comment": "",
    "key": false
   },
   {
    "id": "c083",
    "label": "Problem 3 [9pt] · Part 1 · Create a data frame dfA with the following variables:",
    "code": "Team <- c(\"Alpha\", \"Beta\", \"Gamma\", \"Delta\", \"Epsilon\",\n          \"Beta\", \"Alpha\", \"Gamma\", \"Delta\", \"Epsilon\")\nRole <- c(\"Analyst\", \"Manager\", \"Developer\", \"Analyst\", \"Manager\",\n          \"Developer\", \"Analyst\", \"Manager\", \"Developer\", \"Analyst\")\nScore <- c(82, 90, 75, 88, 79, 95, 80, 85, 76, 89)\nCertified <- c(\"Yes\", \"No\", \"Yes\", \"No\", \"Yes\", \"Yes\", \"No\", \"Yes\", \"No\", \"Yes\")\nExperience <- c(3, 5, 7, 2, 6, 8, 4, 3, 5, 9)\ndfA <- data.frame(Team, Role, Score, Certified, Experience)\ndfA\n#>       Team      Role Score Certified Experience\n#> 1    Alpha   Analyst    82       Yes          3\n#> 2     Beta   Manager    90        No          5\n#> 3    Gamma Developer    75       Yes          7\n#> 4    Delta   Analyst    88        No          2\n#> 5  Epsilon   Manager    79       Yes          6\n#> 6     Beta Developer    95       Yes          8\n#> 7    Alpha   Analyst    80        No          4\n#> 8    Gamma   Manager    85       Yes          3\n#> 9    Delta Developer    76        No          5\n#> 10 Epsilon   Analyst    89       Yes          9",
    "comment": "",
    "key": false
   },
   {
    "id": "c084",
    "label": "Problem 3 [9pt] · Part 2 · Compute summary statistics for the Score variable.",
    "code": "summary(dfA$Score)\n#>    Min. 1st Qu.  Median    Mean 3rd Qu.    Max.\n#>   75.00   79.25   83.50   83.90   88.75   95.00",
    "comment": "",
    "key": false
   },
   {
    "id": "c085",
    "label": "Problem 3 [9pt] · Part 3 · Convert Certified into a factor if it is not already. Display…",
    "code": "dfA$Certified <- factor(dfA$Certified)\ndfA$Certified\n#>  [1] Yes No  Yes No  Yes Yes No  Yes No  Yes\n#> Levels: No Yes\n# NOTE: The function as.factor() also works here:\ndfA$Certified <- as.factor(dfA$Certified)\ndfA$Certified\n#>  [1] Yes No  Yes No  Yes Yes No  Yes No  Yes\n#> Levels: No Yes\ntable(dfA$Certified)\n#>  No Yes\n#>   4   6",
    "comment": "",
    "key": false
   },
   {
    "id": "c086",
    "label": "Problem 3 [9pt] · Part 4 · Add a new column High_Performer, which is TRUE if Score is…",
    "code": "dfA$High_Performer <- dfA$Score > 85 & dfA$Experience > 4\ndfA$High_Performer\n#>  [1] FALSE  TRUE FALSE FALSE FALSE  TRUE FALSE FALSE FALSE  TRUE\n# NOTE: Your first instinct might be to use ifelse() for this question, like so:\ndfA$High_Performer <- ifelse(dfA$Score > 85 & dfA$Experience > 4, TRUE, FALSE)\n# This is not incorrect. However, using ifelse() is redundant if you want to create a logical vector (i.e. a\n# vector containing TRUE and FALSE values) – so instead of writing x <- ifelse(condition, TRUE, FALSE)\n# you can just write x <- condition.",
    "comment": "",
    "key": false
   },
   {
    "id": "c087",
    "label": "Problem 3 [9pt] · Part 5 · Extract all employees who belong to the “Gamma” team and are…",
    "code": "dfA[dfA$Team == \"Gamma\" & dfA$Certified == \"Yes\", ]\n#>    Team      Role Score Certified Experience High_Performer\n#> 3 Gamma Developer    75       Yes          7          FALSE\n#> 8 Gamma   Manager    85       Yes          3          FALSE\n# Solution #2 (using the subset() function)\nsubset(dfA, Team == \"Gamma\" & Certified == \"Yes\")\n#>    Team      Role Score Certified Experience High_Performer\n#> 3 Gamma Developer    75       Yes          7          FALSE\n#> 8 Gamma   Manager    85       Yes          3          FALSE",
    "comment": "",
    "key": false
   },
   {
    "id": "c088",
    "label": "Problem 4 [9pt] · Part 1 · Generate a matrix named matrix1 with 5 columns, filled…",
    "code": "elements <- c(10, 3, 6, 23, -5, -4, 13, 17, 5, 6, -7, -10,\n              13, 39, 20, 2, 1, 9, 11, -22, 23, -15, -3, 6, 12)\nmatrix1 <- matrix(elements, ncol = 5, byrow = TRUE)\nmatrix1\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]   10    3    6   23   -5\n#> [2,]   -4   13   17    5    6\n#> [3,]   -7  -10   13   39   20\n#> [4,]    2    1    9   11  -22\n#> [5,]   23  -15   -3    6   12",
    "comment": "",
    "key": false
   },
   {
    "id": "c089",
    "label": "Problem 4 [9pt] · Part 2 · Employ a for loop to update the elements of matrix1 according…",
    "code": "for (i in 1:nrow(matrix1)) {\n  for (j in 1:ncol(matrix1)) {\n    if (matrix1[i, j] < 0) {\n      matrix1[i, j] <- 0\n    } else if (matrix1[i, j] >= 0 & matrix1[i, j] < 5) {\n      matrix1[i, j] <- 5\n    } else if (matrix1[i, j] > 10 & matrix1[i, j] < 15) {\n      matrix1[i, j] <- 10\n    } else {\n      matrix1[i, j] <- 100\n    }\n  }\n}\nmatrix1\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]  100    5  100  100    0\n#> [2,]    0   10  100  100  100\n#> [3,]    0    0   10  100  100\n#> [4,]    5    5  100   10    0\n#> [5,]  100    0    0  100   10",
    "comment": "",
    "key": false
   },
   {
    "id": "c090",
    "label": "Problem 4 [9pt] · Part 3 · Initiate an empty vector vector7. Utilize a while loop to…",
    "code": "vector7 <- vector(mode = \"numeric\")\ni <- 1\nwhile (i < 30) {\n  if (i %% 2 == 1 & i %% 3 != 0) {\n    vector7 <- c(vector7, i)\n  }\n  i <- i + 1\n}\nvector7\n#>  [1]  1  5  7 11 13 17 19 23 25 29",
    "comment": "",
    "key": false
   },
   {
    "id": "c091",
    "label": "Problem 5 [9pt] · Part 1 · Write a function categorize_numbers() that takes a numeric…",
    "code": "categorize_numbers <- function(vec) {\n  labels <- vector(mode = \"character\", length = length(vec))\n  for (i in 1:length(vec)) {\n    if (vec[i] < 10) {\n      labels[i] <- \"Small\"\n    } else if (vec[i] >= 10 & vec[i] <= 20) {\n      labels[i] <- \"Medium\"\n    } else {\n      labels[i] <- \"Large\"\n    }\n  }\n  labels\n}\ntest_vec <- c(4, 10, 15, 22, 8, 18, 27, 5, 12)\ncategorize_numbers(test_vec)\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\"\n#> [9] \"Medium\"\n# Solution #2 (without using a for loop)\ncategorize_numbers <- function(vec) {\n  labels <- ifelse(vec < 10, \"Small\", ifelse(vec >= 10 & vec <= 20, \"Medium\", \"Large\"))\n  labels\n}\ntest_vec <- c(4, 10, 15, 22, 8, 18, 27, 5, 12)\ncategorize_numbers(test_vec)\n#> [1] \"Small\"  \"Medium\" \"Medium\" \"Large\"  \"Small\"  \"Medium\" \"Large\"  \"Small\"\n#> [9] \"Medium\"\n# NOTE: This solution is a lot more compact because it uses the ifelse() function instead of if statements.\n# An if statement only works on one element at a time, but ifelse() can deal with a whole vector (or a\n# whole matrix) at once. This can helps us avoid for loops, making our code a lot shorter and simpler.\n# Notice the use of two ifelse() functions, one nested inside the other.\n# The first ifelse() corresponds to the if part that checks whether an element is less than 10:\n# If the element is less than 10 return “Small” as the corresponding category label.\n# If the element is NOT less than 10 we enter the second ifelse(). This corresponds to the\n# else if part that checks whether an element is between 10 and 20 (inclusive).\n# If the element is between 10 and 20 (inclusive) return “Medium” as the category\n# label.\n# If the element is NOT between 10 and 20 (inclusive), meaning that it is\n# greater than 20, return “Large” 10 as the category label. This final piece corresponds\n# to what the else part was handling.",
    "comment": "",
    "key": false
   },
   {
    "id": "c092",
    "label": "Problem 5 [9pt] · Part 2 · Create a function matrix_summary() that accepts a numeric…",
    "code": "matrix_summary <- function(mat) {\n  # row sums\n  row_sums <- vector(mode = \"numeric\", length = nrow(mat))\n  for (i in 1:nrow(mat)) {\n    row_sums[i] <- sum(mat[i, ])\n  }\n  # column means\n  col_means <- vector(mode = \"numeric\", length = ncol(mat))\n  for (i in 1:ncol(mat)) {\n    col_means[i] <- mean(mat[ , i])\n  }\n  # maximum value\n  max_val <- max(mat)\n  # minimum value\n  min_val <- min(mat)\n  # package everything up in a list\n  summary <- list(\n    \"Row Sums\" = row_sums,\n    \"Column Means\" = col_means,\n    \"Max Value\" = max_val,\n    \"Min Value\" = min_val\n  )\n  summary\n}\ntest_mat <- matrix(c(5, 12, 18, 7, 14, 22, 9, 10, 25, 6, 17, 30), ncol = 3, byrow = TRUE)\nmatrix_summary(test_mat)\n#> $`Row Sums`\n#> [1] 35 43 44 53\n#> $`Column Means`\n#> [1]  6.75 13.25 23.75\n#> $`Max Value`\n#> [1] 30\n#> $`Min Value`\n#> [1] 5\n# Solution #2\n# R has many in-built functions that simplify common operations, so you might have stumbled upon the\n# rowSums and colMeans functions (the corresponding functions rowMeans and colSums also exist).\nmatrix_summary <- function(mat) {\n  summary <- list(\n    \"Row Sums\" = rowSums(mat),\n    \"Column Means\" = colMeans(mat),\n    \"Max Value\" = max(mat),\n    \"Min Value\" = min(mat)\n  )\n  summary\n}\ntest_mat <- matrix(c(5, 12, 18, 7, 14, 22, 9, 10, 25, 6, 17, 30), ncol = 3, byrow = TRUE)\nmatrix_summary(test_mat)\n#> $`Row Sums`\n#> [1] 35 43 44 53\n#> $`Column Means`\n#> [1]  6.75 13.25 23.75\n#> $`Max Value`\n#> [1] 30\n#> $`Min Value`\n#> [1] 5",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Due September 27, 11:59 PM. Five problems: building vectors with `c()` and `seq()`, `append()` and logical filtering; lists and `unlist()` coercion; the `dfA` data frame with factors and a `High_Performer` column; a for loop and a while loop over `matrix1`; and the functions `categorize_numbers()` and `matrix_summary()`.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
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
   }
  ],
  "chunks": [],
  "notes": "Due October 11, 11:59 PM. Problem 1 (20 pt): dice simulations `fun1`–`fun4` using the apply family instead of loops. Problem 2 (25 pt): the carseats data — average prices by US/rural, highest and lowest price stores, median sales by shelf location and urban, and customized boxplots, barplots and a Sales vs Price scatterplot.\n\nNo solutions in this upload yet. Paste your own code with Edit.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
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
    "key": false
   },
   {
    "id": "c094",
    "label": "Problem 1 - Vectors · Part 2 · Use indexing to extract:",
    "code": "orders[1:4]\n#> [1] 18 24 15 31",
    "comment": "",
    "key": false
   },
   {
    "id": "c095",
    "label": "Problem 1 - Vectors · Part 2 · the 3rd, 6th, 9th, and 12th observations",
    "code": "orders[c(3, 6, 9, 12)]\n#> [1] 15 22 28 33",
    "comment": "",
    "key": false
   },
   {
    "id": "c096",
    "label": "Problem 1 - Vectors · Part 2 · all observations except the first and last",
    "code": "orders[-c(1, 12)]\n#>  [1] 24 15 31 27 22 35 19 28 40 26",
    "comment": "",
    "key": false
   },
   {
    "id": "c097",
    "label": "Problem 1 - Vectors · Part 3 · Create a new vector called high_orders containing only values…",
    "code": "high_orders <- orders[orders > 25]\nprint(high_orders)\n#> [1] 31 27 35 28 40 26 33",
    "comment": "",
    "key": false
   },
   {
    "id": "c098",
    "label": "Problem 1 - Vectors · Part 4 · The store later discovers that the 4th recorded value should…",
    "code": "orders[4] <- 29\nprint(orders)\n#>  [1] 18 24 15 29 27 22 35 19 28 40 26 33",
    "comment": "",
    "key": false
   },
   {
    "id": "c099",
    "label": "Problem 1 - Vectors · Part 5 · Insert the value 21 immediately after the second observation…",
    "code": "#>      order_updated.\norders_updated <- append(orders, 21, after = 2)\nprint(orders_updated)\n#>  [1] 18 24 21 15 29 27 22 35 19 28 40 26 33",
    "comment": "",
    "key": false
   },
   {
    "id": "c100",
    "label": "Problem 1 - Vectors · Part 6 · Using a vectorized operation, create a vector called…",
    "code": "adjusted_orders <- orders_updated * 1.10\nprint(adjusted_orders)\n#>  [1] 19.8 26.4 23.1 16.5 31.9 29.7 24.2 38.5 20.9 30.8 44.0 28.6 36.3",
    "comment": "",
    "key": false
   },
   {
    "id": "c101",
    "label": "Problem 1 - Vectors · Part 7 · Create the following vector without typing every element…",
    "code": "targets <- seq(from = 5, to = 40, by = 5)\nprint(targets)\n#> [1]  5 10 15 20 25 30 35 40",
    "comment": "",
    "key": false
   },
   {
    "id": "c102",
    "label": "Problem 2 - Lists · Part 1 · create course_info.",
    "code": "course_info <- list(\"Applied Statistical Computing\", 35, c(\"R\", \"Python\"),\n                    c(88, 92, 79, 95, 84), list(\"Fall 2026\", TRUE))\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 35\n#> \n#> [[3]]\n#> [1] \"R\"      \"Python\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c103",
    "label": "Problem 2 - Lists · Part 2 · Display the third element of course info using single ([])…",
    "code": "course_info[3]\n#> [[1]]\n#> [1] \"R\"      \"Python\"\ncourse_info[[3]]\n#> [1] \"R\"      \"Python\"\n# Single brackets produce a list and double brackets produce a vector.",
    "comment": "",
    "key": false
   },
   {
    "id": "c104",
    "label": "Problem 2 - Lists · Part 3 · Extract Python directly from course_info.",
    "code": "course_info[[3]][2]\n#> [1] \"Python\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c105",
    "label": "Problem 2 - Lists · Part 4 · Extract the value 95 directly from course_info.",
    "code": "course_info[[4]][4]\n#> [1] 95",
    "comment": "",
    "key": false
   },
   {
    "id": "c106",
    "label": "Problem 2 - Lists · Part 5 · Extract Fall 2026 directly from course_info.",
    "code": "course_info[[5]][[1]]\n#> [1] \"Fall 2026\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c107",
    "label": "Problem 2 - Lists · Part 6 · Change the second element of course_info from 35 to 40.",
    "code": "course_info[[2]] <- 40\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"      \"Python\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c108",
    "label": "Problem 2 - Lists · Part 7 · Change the second programming language from “Python” to “SQL”.",
    "code": "course_info[[3]][2] <- \"SQL\"\nprint(course_info[[3]])\n#> [1] \"R\"   \"SQL\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c109",
    "label": "Problem 2 - Lists · Part 8 · Add “Statistics Department” as a new sixth element of…",
    "code": "course_info[[6]] <- \"Statistics Department\"\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [1] 88 92 79 95 84\n#> \n#> [[5]]\n#> [[5]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[5]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[6]]\n#> [1] \"Statistics Department\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c110",
    "label": "Problem 2 - Lists · Part 9 · Remove the fourth element of the list.",
    "code": "course_info[[4]] <- NULL\nprint(course_info)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[5]]\n#> [1] \"Statistics Department\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c111",
    "label": "Problem 2 - Lists · Part 10 · Create another list called instructor_info containing “Dr.…",
    "code": "instructor_info <- list(\"Dr. Smith\", \"Columbia University\")\ncombined1 <- c(course_info, instructor_info)\nprint(combined1)\n#> [[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[2]]\n#> [1] 40\n#> \n#> [[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[4]]\n#> [[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[5]]\n#> [1] \"Statistics Department\"\n#> \n#> [[6]]\n#> [1] \"Dr. Smith\"\n#> \n#> [[7]]\n#> [1] \"Columbia University\"\ncombined2 <- list(course_info, instructor_info)\nprint(combined2)\n#> [[1]]\n#> [[1]][[1]]\n#> [1] \"Applied Statistical Computing\"\n#> \n#> [[1]][[2]]\n#> [1] 40\n#> \n#> [[1]][[3]]\n#> [1] \"R\"   \"SQL\"\n#> \n#> [[1]][[4]]\n#> [[1]][[4]][[1]]\n#> [1] \"Fall 2026\"\n#> \n#> [[1]][[4]][[2]]\n#> [1] TRUE\n#> \n#> \n#> [[1]][[5]]\n#> [1] \"Statistics Department\"\n#> \n#> \n#> [[2]]\n#> [[2]][[1]]\n#> [1] \"Dr. Smith\"\n#> \n#> [[2]][[2]]\n#> [1] \"Columbia University\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c112",
    "label": "Problem 3 - Matrices · Part 1 · Create a matrix called scores with 4 rows and 3 columns,…",
    "code": "scores <- matrix( c(82, 75, 91, 68, 84, 79, 95, 88, 93, 76, 81, 87), nrow = 4,\n                  byrow = TRUE)\nprint(scores)\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   68   84   79\n#> [3,]   95   88   93\n#> [4,]   76   81   87",
    "comment": "",
    "key": false
   },
   {
    "id": "c113",
    "label": "Problem 3 - Matrices · Part 2 · Extract:",
    "code": "scores[3, 2]\n#> [1] 88",
    "comment": "",
    "key": false
   },
   {
    "id": "c114",
    "label": "Problem 3 - Matrices · Part 2 · all scores for Student 2;",
    "code": "scores[2, ]\n#> [1] 68 84 79",
    "comment": "",
    "key": false
   },
   {
    "id": "c115",
    "label": "Problem 3 - Matrices · Part 2 · all Quiz 3 scores;",
    "code": "scores[, 3]\n#> [1] 91 79 93 87",
    "comment": "",
    "key": false
   },
   {
    "id": "c116",
    "label": "Problem 3 - Matrices · Part 2 · the scores for Students 1 and 4 on Quizzes 1 and 3.",
    "code": "scores[c(1, 4), c(1, 3)]\n#>      [,1] [,2]\n#> [1,]   82   91\n#> [2,]   76   87",
    "comment": "",
    "key": false
   },
   {
    "id": "c117",
    "label": "Problem 3 - Matrices · Part 3 · Student 2’s Quiz 1 score was entered incorrectly. Replace 68…",
    "code": "scores[2, 1] <- 73\nprint(scores)\n#>      [,1] [,2] [,3]\n#> [1,]   82   75   91\n#> [2,]   73   84   79\n#> [3,]   95   88   93\n#> [4,]   76   81   87",
    "comment": "",
    "key": false
   },
   {
    "id": "c118",
    "label": "Problem 3 - Matrices · Part 4 · Add a fourth quiz using the scores 90, 85, 96, 82.",
    "code": "scores <- cbind(scores, c(90, 85, 96, 82))\nprint(scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   73   84   79   85\n#> [3,]   95   88   93   96\n#> [4,]   76   81   87   82",
    "comment": "",
    "key": false
   },
   {
    "id": "c119",
    "label": "Problem 3 - Matrices · Part 5 · A fifth student joins the dataset with scores 80, 77, 89. Add…",
    "code": "scores2 <- rbind(scores, c(80, 77, 89, 91))\nprint(scores2)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   82   75   91   90\n#> [2,]   73   84   79   85\n#> [3,]   95   88   93   96\n#> [4,]   76   81   87   82\n#> [5,]   80   77   89   91",
    "comment": "",
    "key": false
   },
   {
    "id": "c120",
    "label": "Problem 3 - Matrices · Part 6 · Create a new matrix called bonus_scores by adding 3 points to…",
    "code": "bonus_scores <- scores2 + 3\nprint(bonus_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   78   94   93\n#> [2,]   76   87   82   88\n#> [3,]   98   91   96   99\n#> [4,]   79   84   90   85\n#> [5,]   83   80   92   94",
    "comment": "",
    "key": false
   },
   {
    "id": "c121",
    "label": "Problem 3 - Matrices · Part 7 · In bonus_scores, replace every score greater than 95 with 100.",
    "code": "bonus_scores[bonus_scores > 95] <- 100\nprint(bonus_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   78   94   93\n#> [2,]   76   87   82   88\n#> [3,]  100   91  100  100\n#> [4,]   79   84   90   85\n#> [5,]   83   80   92   94",
    "comment": "",
    "key": false
   },
   {
    "id": "c122",
    "label": "Problem 3 - Matrices · Part 8 · Extract only those elements of bonus_scores that are at least…",
    "code": "bonus_scores[bonus_scores >= 90]\n#> [1] 100  91  94 100  90  92  93 100  94",
    "comment": "",
    "key": false
   },
   {
    "id": "c123",
    "label": "Problem 3 - Matrices · Part 9 · Remove Student 2 and Quiz 1 from bonus_scores and save the…",
    "code": "reduced_scores <- bonus_scores[-2, -1]\nprint(reduced_scores)\n#>      [,1] [,2] [,3]\n#> [1,]   78   94   93\n#> [2,]   91  100  100\n#> [3,]   84   90   85\n#> [4,]   80   92   94",
    "comment": "",
    "key": false
   },
   {
    "id": "c124",
    "label": "Problem 4 - Data Frames · Part 1 · Use these vectors to create a data frame called employees.",
    "code": "Employee <- c(\"Anna\", \"Ben\", \"Carla\", \"David\", \"Emma\", \"Frank\", \"Grace\",\n              \"Henry\")\nDepartment <- c(\"Analytics\", \"Marketing\", \"Analytics\", \"Finance\", \"Marketing\",\n                \"Analytics\", \"Finance\", \"Analytics\")\nExperience <- c(2, 7, 5, 9, 3, 6, 8, 4)\nSalary <- c(68000, 85000, 79000, 105000, 72000, 92000, 99000, 76000)\nRemote <- c(TRUE, FALSE, TRUE, FALSE, TRUE, FALSE, TRUE, TRUE)\nemployees <- data.frame(Employee, Department, Experience, Salary, Remote)\nprint(employees)\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 5     Emma  Marketing          3  72000   TRUE\n#> 6    Frank  Analytics          6  92000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c125",
    "label": "Problem 4 - Data Frames · Part 2 · Use appropriate R commands to examine:",
    "code": "str(employees)\n#> ’data.frame’:    8 obs. of  5 variables:\n#>  $ Employee  : chr  \"Anna\" \"Ben\" \"Carla\" \"David\" ...\n#>  $ Department: chr  \"Analytics\" \"Marketing\" \"Analytics\" \"Finance\" ...\n#>  $ Experience: num  2 7 5 9 3 6 8 4\n#>  $ Salary    : num  68000 85000 79000 105000 72000 92000 99000 76000\n#>  $ Remote    : logi  TRUE FALSE TRUE FALSE TRUE FALSE ...",
    "comment": "",
    "key": false
   },
   {
    "id": "c126",
    "label": "Problem 4 - Data Frames · Part 2 · a summary of its variables;",
    "code": "summary(employees)\n#>    Employee          Department          Experience       Salary\n#>  Length:8           Length:8           Min.   :2.00   Min.   : 68000\n#>  Class :character   Class :character   1st Qu.:3.75   1st Qu.: 75000\n#>  Mode  :character   Mode  :character   Median :5.50   Median : 82000\n#>                                        Mean   :5.50   Mean   : 84500\n#>                                        3rd Qu.:7.25   3rd Qu.: 93750\n#>                                        Max.   :9.00   Max.   :105000\n#>    Remote\n#>  Mode :logical\n#>  FALSE:3\n#>  TRUE :5\n#> \n#> \n#> ",
    "comment": "",
    "key": false
   },
   {
    "id": "c127",
    "label": "Problem 4 - Data Frames · Part 2 · the first three rows;",
    "code": "head(employees, 3)\n#>   Employee Department Experience Salary Remote\n#> 1     Anna  Analytics          2  68000   TRUE\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c128",
    "label": "Problem 4 - Data Frames · Part 2 · its dimensions.",
    "code": "dim(employees)\n#> [1] 8 5",
    "comment": "",
    "key": false
   },
   {
    "id": "c129",
    "label": "Problem 4 - Data Frames · Part 3 · Extract the Salary variable in three different ways so that:",
    "code": "employees[\"Salary\"]\n#>   Salary\n#> 1  68000\n#> 2  85000\n#> 3  79000\n#> 4 105000\n#> 5  72000\n#> 6  92000\n#> 7  99000\n#> 8  76000",
    "comment": "",
    "key": false
   },
   {
    "id": "c130",
    "label": "Problem 4 - Data Frames · Part 3 · the other two results are vectors;",
    "code": "employees[[\"Salary\"]]\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000\n#or\nemployees$Salary\n#> [1]  68000  85000  79000 105000  72000  92000  99000  76000",
    "comment": "",
    "key": false
   },
   {
    "id": "c131",
    "label": "Problem 4 - Data Frames · Part 4 · Extract only the Employee, Department, and Salary columns.",
    "code": "employees[, c(\"Employee\", \"Department\", \"Salary\")]\n#>   Employee Department Salary\n#> 1     Anna  Analytics  68000\n#> 2      Ben  Marketing  85000\n#> 3    Carla  Analytics  79000\n#> 4    David    Finance 105000\n#> 5     Emma  Marketing  72000\n#> 6    Frank  Analytics  92000\n#> 7    Grace    Finance  99000\n#> 8    Henry  Analytics  76000",
    "comment": "",
    "key": false
   },
   {
    "id": "c132",
    "label": "Problem 4 - Data Frames · Part 5 · Extract rows 2 through 6 and only the Employee and Experience…",
    "code": "employees[2:6, c(\"Employee\", \"Experience\")]\n#>   Employee Experience\n#> 2      Ben          7\n#> 3    Carla          5\n#> 4    David          9\n#> 5     Emma          3\n#> 6    Frank          6",
    "comment": "",
    "key": false
   },
   {
    "id": "c133",
    "label": "Problem 4 - Data Frames · Part 6 · Extract all employees who have at least 5 years of experience.",
    "code": "employees[employees$Experience >= 5, ]\n#>   Employee Department Experience Salary Remote\n#> 2      Ben  Marketing          7  85000  FALSE\n#> 3    Carla  Analytics          5  79000   TRUE\n#> 4    David    Finance          9 105000  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE\n#> 7    Grace    Finance          8  99000   TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c134",
    "label": "Problem 4 - Data Frames · Part 7 · Add a new variable called Salary_K that contains salaries…",
    "code": "employees$Salary_K <- employees$Salary / 1000\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K\n#> 1     Anna  Analytics          2  68000   TRUE       68\n#> 2      Ben  Marketing          7  85000  FALSE       85\n#> 3    Carla  Analytics          5  79000   TRUE       79\n#> 4    David    Finance          9 105000  FALSE      105\n#> 5     Emma  Marketing          3  72000   TRUE       72\n#> 6    Frank  Analytics          6  92000  FALSE       92\n#> 7    Grace    Finance          8  99000   TRUE       99\n#> 8    Henry  Analytics          4  76000   TRUE       76",
    "comment": "",
    "key": false
   },
   {
    "id": "c135",
    "label": "Problem 4 - Data Frames · Part 8 · Add another variable called Senior that takes the value TRUE…",
    "code": "employees$Senior <- employees$Experience >= 6\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K Senior\n#> 1     Anna  Analytics          2  68000   TRUE       68  FALSE\n#> 2      Ben  Marketing          7  85000  FALSE       85   TRUE\n#> 3    Carla  Analytics          5  79000   TRUE       79  FALSE\n#> 4    David    Finance          9 105000  FALSE      105   TRUE\n#> 5     Emma  Marketing          3  72000   TRUE       72  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE       92   TRUE\n#> 7    Grace    Finance          8  99000   TRUE       99   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE       76  FALSE",
    "comment": "",
    "key": false
   },
   {
    "id": "c136",
    "label": "Problem 4 - Data Frames · Part 9 · Carla’s salary should be 82,000 instead of 79,000. Modify the…",
    "code": "employees[3, \"Salary\"] <- 82000",
    "comment": "",
    "key": false
   },
   {
    "id": "c137",
    "label": "Problem 4 - Data Frames · Part 10 · Add the following employee as a new row: Employee - Irene;…",
    "code": "Irene <- data.frame(Employee = \"Irene\", Department = \"Marketing\",\n                    Experience = 10, Salary = 110000, Remote = FALSE,\n                    Salary_K = 110, Senior = TRUE)\nemployees <- rbind(employees, Irene)\nprint(employees)\n#>   Employee Department Experience Salary Remote Salary_K Senior\n#> 1     Anna  Analytics          2  68000   TRUE       68  FALSE\n#> 2      Ben  Marketing          7  85000  FALSE       85   TRUE\n#> 3    Carla  Analytics          5  82000   TRUE       79  FALSE\n#> 4    David    Finance          9 105000  FALSE      105   TRUE\n#> 5     Emma  Marketing          3  72000   TRUE       72  FALSE\n#> 6    Frank  Analytics          6  92000  FALSE       92   TRUE\n#> 7    Grace    Finance          8  99000   TRUE       99   TRUE\n#> 8    Henry  Analytics          4  76000   TRUE       76  FALSE\n#> 9    Irene  Marketing         10 110000  FALSE      110   TRUE",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Online store orders vector, the `course_info` list, the quiz `scores` matrix, and the `employees` data frame.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
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
    "label": "If-Else Statements · Part I",
    "code": "exam_score <- 84\nhomework_rate <- 0.92\nif (exam_score >= 90 & homework_rate >= 0.90) {\n  status <- \"Excellent Standing\"\n} else if (exam_score >= 80 & homework_rate >= 0.80) {\n  status <- \"Good Standing\"\n} else if (exam_score >= 70 | homework_rate >= 0.95) {\n  status <- \"Conditional Pass\"\n} else {\n  status <- \"Fail\"\n}\nprint(status)\n#> [1] \"Good Standing\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c139",
    "label": "If-Else Statements · Part II",
    "code": "exam_scores <- c(94, 82, 76, 68, 88, 91, 73, 59)\nhomework_rates <- c(0.95, 0.84, 0.98, 0.90, 0.72, 0.88, 0.79, 1.00)\n# Use ifelse() to create a logical vector called eligible that is TRUE if a student:",
    "comment": "",
    "key": false
   },
   {
    "id": "c140",
    "label": "If-Else Statements · Part II · has completed at least 80% of the homework.",
    "code": "eligible <- ifelse(exam_scores >= 75 & homework_rates >= 0.80,\n                   TRUE, FALSE)\nprint(eligible)\n#> [1]  TRUE  TRUE  TRUE FALSE FALSE  TRUE FALSE FALSE",
    "comment": "",
    "key": false
   },
   {
    "id": "c141",
    "label": "For Loops",
    "code": "scores <- matrix(c(82, 76, 91, 88,\n                   67, 85, 79, 92,\n                   95, 89, 84, 90,\n                   73, 68, 81, 77),\n                 nrow = 4,\n                 byrow = TRUE)",
    "comment": "",
    "key": false
   },
   {
    "id": "c142",
    "label": "For Loops · Part I",
    "code": "adjusted_scores <- matrix(0, nrow = nrow(scores), ncol = ncol(scores))\nfor (i in 1:nrow(scores)) {\n  for (j in 1:ncol(scores)) {\n    if (scores[i, j] < 70) {\n      adjusted_scores[i, j] <- scores[i, j] + 5\n    } else if (scores[i, j] >= 70 & scores[i, j] <= 89) {\n      adjusted_scores[i, j] <- scores[i, j] + 3\n    } else {\n      adjusted_scores[i, j] <- scores[i, j]\n    }\n  }\n}\nprint(adjusted_scores)\n#>      [,1] [,2] [,3] [,4]\n#> [1,]   85   79   91   91\n#> [2,]   72   88   82   92\n#> [3,]   95   92   87   90\n#> [4,]   76   73   84   80",
    "comment": "",
    "key": false
   },
   {
    "id": "c143",
    "label": "For Loops · Part II",
    "code": "all_passed <- logical(nrow(adjusted_scores))\nfor (i in 1:nrow(adjusted_scores)) {\n  all_passed[i] <- all(adjusted_scores[i, ] >= 70)\n}\nprint(all_passed)\n#> [1] TRUE TRUE TRUE TRUE",
    "comment": "",
    "key": false
   },
   {
    "id": "c144",
    "label": "While Loops",
    "code": "value <- 5\n# and changes according to the following rule:",
    "comment": "",
    "key": false
   },
   {
    "id": "c145",
    "label": "While Loops · Part I",
    "code": "sequence_values <- c()\nwhile (value != 1) {\n  sequence_values <- c(sequence_values, value)\n  if (value %% 2 == 0) {\n    value <- value / 2\n  } else {\n    value <- 3 * value + 1\n  }\n}\nsequence_values <- c(sequence_values, 1)\nprint(sequence_values)\n#> [1]  5 16  8  4  2  1",
    "comment": "",
    "key": false
   },
   {
    "id": "c146",
    "label": "While Loops · Part II",
    "code": "steps <- 0\n# Modify the loop so that steps counts how many updates were required before the sequence reached 1.\nvalue <- 3\nsequence_values <- c()\nsteps <- 0\nwhile (value != 1) {\n  sequence_values <- c(sequence_values, value)\n  if (value %% 2 == 0) {\n    value <- value / 2\n  } else {\n    value <- 3 * value + 1\n  }\n  steps <- steps + 1\n}\nsequence_values <- c(sequence_values, 1)\nprint(sequence_values)\n#> [1]  3 10  5 16  8  4  2  1\nprint(steps)\n#> [1] 7",
    "comment": "",
    "key": false
   },
   {
    "id": "c147",
    "label": "Functions",
    "code": "list1 <- list(c(1, 3.4, 2, -5), c(2.2, 16, -3, 7), c(\"final\", \"any\", \"can\", \"maybe\", \"world\"))\nfunction1 <- function(x){\nEven <- c(); Odd <- c()\nfor (i in 1:length(x)){\n  if(is.numeric(x[[i]])){\n   for (j in 1:length(x[[i]])) {\n     if(x[[i]][j] %% 2 == 0){\n       Even = c(Even, x[[i]][j])\n     } else if (x[[i]][j] %% 2 == 1){\n       Odd = c(Odd, x[[i]][j])\n     }\n   }\n  }\n}\nreturn(list(Even = length(Even), Odd = length(Odd)))\n}\nfunction1(list1)\n#> $Even\n#> [1] 2\n#> \n#> $Odd\n#> [1] 4\n# Problem 5\n# Write a function neighbor_matrix(n, m) that creates and returns an n x m numeric matrix filled according\n# to the following rules:",
    "comment": "",
    "key": false
   },
   {
    "id": "c148",
    "label": "Functions · Part 2 · Each subsequent entry is filled using the following rule:",
    "code": "neighbor_matrix <- function(n, m) {\n  mat <- matrix(0, nrow = n, ncol = m)\n  for (i in 1:n) {\n    for (j in 1:m) {\n      if (i == 1 & j == 1) {\n        mat[i, j] <- 1\n      } else {\n        top <- ifelse(i > 1, mat[i - 1, j], 0)\n        left <- ifelse(j > 1, mat[i, j - 1], 0)\n        mat[i, j] <- top + left\n      }\n    }\n  }\n  return(mat)\n}\nprint(neighbor_matrix(4, 5))\n#>      [,1] [,2] [,3] [,4] [,5]\n#> [1,]    1    1    1    1    1\n#> [2,]    1    2    3    4    5\n#> [3,]    1    3    6   10   15\n#> [4,]    1    4   10   20   35",
    "comment": "",
    "key": false
   },
   {
    "id": "c149",
    "label": "Additional Practice Problems on Functions",
    "code": " x <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17, 21, 1, 31, 36)\nlargest_odd <- function(x) {\n  odd_numbers <- c()\n  for (i in 1:length(x)) {\n    if (x[i] %% 2 != 0) {\n      odd_numbers <- c(odd_numbers, x[i])\n    }\n  }\n  if (length(odd_numbers) == 0) {\n    return(NULL)\n  }\n  largest <- odd_numbers[1]\n  for (i in 1:length(odd_numbers)) {\n    if (odd_numbers[i] > largest) {\n      largest <- odd_numbers[i]\n    }\n  }\n  return(largest)\n}\nlargest_odd(x)\n#> [1] 31\n# Problem 7\n# Write a function first_repeated(x) that takes a numeric vector x and returns the first repeated element.\n# If no element repeats, return NULL.\n# Test your function with the following vector: [10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17]\nx <- c(10, 15, 11, 4, 3, 8, 17, 34, 4, 11, 12, 17)\nfirst_repeated <- function(x) {\n  for (i in 2:length(x)) {\n    for (j in 1:(i - 1)) {\n      if (x[i] == x[j]) {\n        return(x[i])\n      }\n    }\n  }\n  return(NULL)\n}\nfirst_repeated(x)\n#> [1] 4\n# Problem 8\n# Write a function generate_custom_sequence(n) that generates a sequence of numbers where each number\n# is the sum of the previous two numbers, starting with 1 and 2. The function should return the first n numbers\n# in the sequence.\n# Test your function with n = 10.\nn <- 10\ngenerate_custom_sequence <- function(n) {\n  sequence <- c(1, 2)\n  for (i in 3:n) {\n    sequence[i] <- sequence[i - 1] + sequence[i - 2]\n  }\n  return(sequence)\n}\ngenerate_custom_sequence(10)\n#>  [1]  1  2  3  5  8 13 21 34 55 89\n# Problem 9\n# Write a function longest_run(x) that takes a numeric vector x and returns the longest consecutive sequence\n# of repeated numbers along with its length.\n# Test your function with x = c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6).\nx <- c(1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6)\nlongest_run <- function(x) {\n  current_length <- 1\n  longest_length <- 1\n  longest_value <- x[1]\n  for (i in 2:length(x)) {\n    if (x[i] == x[i - 1]) {\n      current_length <- current_length + 1\n    } else {\n      current_length <- 1\n    }\n    if (current_length > longest_length) {\n      longest_length <- current_length\n      longest_value <- x[i]\n    }\n  }\n  return(c(longest_value, longest_length))\n}\nlongest_run(x)\n#> [1] 4 4\n# Problem 10\n# Write a function sum_of_unique(x) that returns the sum of the elements in a numeric vector x that appear\n# only once.\n# Test your function with c(2, 3, 4, 3, 5, 2, 7).\nx <- c(2, 3, 4, 3, 5, 2, 7)\nsum_of_unique <- function(x) {\n  unique_values <- c()\n  for (i in 1:length(x)) {\n    count <- 0\n    for (j in 1:length(x)) {\n      if (x[i] == x[j]) {\n        count <- count + 1\n      }\n    }\n    if (count == 1) {\n      unique_values <- c(unique_values, x[i])\n    }\n  }\n  return(sum(unique_values))\n}\nsum_of_unique(x)\n#> [1] 16\n# Problem 11\n# Create a function that takes a list of numeric vectors as input and rotates each vector clockwise by one\n# position [for example (1, 2, 3) becomes (3, 1, 2)]. The function should return a new list with the rotated\n# vectors.\n# Test your function with the following input list: [(3, 5, 7, 9), (10, 20, 30), (2, 4, 6, 8, 10)]\ninput_list <- list(c(3, 5, 7, 9), c(10, 20, 30), c(2, 4, 6, 8, 10))\nrotate_vectors <- function(x) {\n  result <- list()\n  for (i in 1:length(x)) {\n    current_vector <- x[[i]]\n    last_value <- current_vector[length(current_vector)]\n    remaining_values <- current_vector[-length(current_vector)]\n    result[[i]] <- c(last_value, remaining_values)\n  }\n  return(result)\n}\nrotate_vectors(input_list)\n#> [[1]]\n#> [1] 9 3 5 7\n#> \n#> [[2]]\n#> [1] 30 10 20\n#> \n#> [[3]]\n#> [1] 10  2  4  6  8\n# Problem 12\n# Create a function named classify_numbers with a single argument num_list that categorizes numbers in\n# the input list into different groups. The function should perform the following steps:",
    "comment": "",
    "key": false
   },
   {
    "id": "c150",
    "label": "Additional Practice Problems on Functions · Part 2 · Return a list containing four elements:",
    "code": "num_list <- list(1, -2, 3, c(4, -3), -5, 6, c(\"text\", \"dot\", \"period\"), -8, 9)\nclassify_numbers <- function(num_list) {\n  PositiveEven <- 0\n  PositiveOdd <- 0\n  NegativeEven <- 0\n  NegativeOdd <- 0\n  for (i in 1:length(num_list)) {\n    if (is.numeric(num_list[[i]])) {\n      current_element <- num_list[[i]]\n      for (j in 1:length(current_element)) {\n        current_number <- current_element[j]\n        if (current_number > 0 & current_number %% 2 == 0) {\n          PositiveEven <- PositiveEven + 1\n        } else if (current_number > 0 & current_number %% 2 != 0) {\n          PositiveOdd <- PositiveOdd + 1\n        } else if (current_number < 0 & current_number %% 2 == 0) {\n          NegativeEven <- NegativeEven + 1\n        } else if (current_number < 0 & current_number %% 2 != 0) {\n          NegativeOdd <- NegativeOdd + 1\n        }\n      }\n    }\n  }\n  return(list(PositiveEven = PositiveEven, PositiveOdd = PositiveOdd,\n              NegativeEven = NegativeEven, NegativeOdd = NegativeOdd))\n}\nclassify_numbers(num_list)\n#> $PositiveEven\n#> [1] 2\n#> \n#> $PositiveOdd\n#> [1] 3\n#> \n#> $NegativeEven\n#> [1] 2\n#> \n#> $NegativeOdd\n#> [1] 2\n# Problem 13\n# Create a function named update_sensor_readings that takes two arguments: a matrix representing sensor\n# readings from multiple machines across several days, and a vector containing specific outlier values to be\n# removed. The function should replace all occurrences of each value in the vector with the average of its\n# immediate neighboring values (up, down, left, right) in the matrix. If the outlier is on the edge or corner of\n# the matrix and doesn’t have four neighbors, only use the available neighbors to compute the average.\n# For instance, test your function with the following matrix and outlier vector:\nsensor_matrix <- matrix(c(23.2, 12, 10, 15, 32, 55, 10, 4, 56, 45, 10, 30),\n                        nrow=3, byrow=TRUE)\noutliers <- c(10, 55)\n# Specifically, you should remove all occurrences of the outliers (10 and 55) by replacing them with the average\n# of their neighboring values.\nupdate_sensor_readings <- function(sensor_matrix, outliers) {\n  updated_matrix <- sensor_matrix\n  for (i in 1:nrow(sensor_matrix)) {\n    for (j in 1:ncol(sensor_matrix)) {\n      if (sensor_matrix[i, j] %in% outliers) {\n        neighbors <- c()\n        # Up\n        if (i > 1) {\n          neighbors <- c(neighbors, sensor_matrix[i - 1, j])\n        }\n        # Down\n        if (i < nrow(sensor_matrix)) {\n          neighbors <- c(neighbors, sensor_matrix[i + 1, j])\n        }\n        # Left\n        if (j > 1) {\n          neighbors <- c(neighbors, sensor_matrix[i, j - 1])\n        }\n        # Right\n        if (j < ncol(sensor_matrix)) {\n          neighbors <- c(neighbors, sensor_matrix[i, j + 1])\n        }\n        updated_matrix[i, j] <- mean(neighbors)\n      }\n    }\n  }\n  return(updated_matrix)\n}\nupdate_sensor_readings(sensor_matrix, outliers)\n#>      [,1]  [,2]     [,3] [,4]\n#> [1,] 23.2 12.00 12.33333   15\n#> [2,] 32.0 24.75 19.75000    4\n#> [3,] 56.0 45.00 28.33333   30\n# Problem 14\n# Write a function iterative_trim(x, k) that repeatedly removes the element farthest from the median until\n# k elements remain. Note, after removing each element, you must recalculate the median of the remaining\n# vector before deciding which element to remove next.\n# Test your function with x = (1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4) and k = 5.\niterative_trim <- function(x, k) {\n  if (k >= length(x)) {\n    return(x)\n  }\n  remaining <- x\n  while (length(remaining) > k) {\n    med <- median(remaining)\n    dist <- abs(remaining - med)\n    farthest_idx <- which.max(dist)\n    remaining <- remaining[-farthest_idx]\n  }\n  return(remaining)\n}\nx = c(1, 40, 2, -3, 10, 15, 7, 5, 5, 0, -4); k = 5\niterative_trim(x, k)\n#> [1] 1 2 5 5 0\n# Problem 15\n# Write a function count_sign_changes(x) that counts how many times a numeric vector changes sign (from\n# positive to negative or vice versa). For example, it should return 3 for x = c(-2, -1, 1, 3, -4, 5).\n# Test your function with x = c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9).\ncount_sign_changes <- function(x) {\n  count <- 0\n  for (i in 1:(length(x) - 1)) {\n    if ((x[i] > 0 & x[i + 1] < 0) | (x[i] < 0 & x[i + 1] > 0)) {\n      count <- count + 1\n    }\n  }\n  return(count)\n}\nx <- c(-10, 1, 3, -5, -4, 2, 3, -1, 6, -9)\ncount_sign_changes(x)\n#> [1] 6\n# Problem 16\n# Write a function find_plateau(x) that detects the first flat region in a numeric vector, meaning consecutive\n# equal values of length ≥ 3. The function should return the start and end indices of that plateau, or NULL if\n# no plateau exists.\n# Test your function with x = (1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2).\nfind_plateau <- function(x) {\n  n <- length(x); start <- NULL; count <- 1\n  for (i in 2:n) {\n    if (x[i] == x[i - 1]) {\n      count <- count + 1\n      if (count == 3 & is.null(start)) {\n        start <- i - 2\n      }\n    } else {\n      if (!is.null(start) & count >= 3) {\n        end <- i - 1\n        return(c(start = start, end = end))\n      }\n      count <- 1\n      start <- NULL\n    }\n  }\n  if (!is.null(start) & count >= 3) {\n    end <- n\n    return(c(start = start, end = end))\n  }\n  return(NULL)\n}\nx <- c(1, 3, 3, 6, 2, 7, 8, 2, 5, 5, 5, 2)\nfind_plateau(x)\n#> start   end\n#>     9    11",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Assigning student `status` with if-else, `ifelse()` eligibility, nested for loops over a scores matrix, a while loop sequence, then function practice problems.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
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
    "comment": "",
    "key": false
   },
   {
    "id": "c152",
    "label": "Problem 1 · Question 1 · How many employees are Female, have a Master’s degree, and…",
    "code": "nrow(employees[employees$Sex == \"Female\" & employees$Education_Level == \"Master's\" &\n          employees$Salary > 80000, ])\n#> [1] 0",
    "comment": "",
    "key": false
   },
   {
    "id": "c153",
    "label": "Problem 1 · Question 1 · What is the median Work_Hours for employees in the Marketing…",
    "code": "median_workhours <- tapply(employees$Work_Hours, employees$Department, median)\nmedian_workhours[\"Marketing\"]\n#> Marketing\n#>        45\nmedian_workhours[\"Sales\"]\n#> Sales\n#>    44",
    "comment": "",
    "key": false
   },
   {
    "id": "c154",
    "label": "Problem 1 · Question 1 · What proportion of employees with High job satisfaction are…",
    "code": "high_js <- employees[employees$Job_Satisfaction == \"High\", ]\nmean(high_js$Turnover_Risk == \"Yes\")\n#> [1] 0.4920635",
    "comment": "",
    "key": false
   },
   {
    "id": "c155",
    "label": "Problem 1 · Question 1 · Identify the department with the largest proportion of…",
    "code": "turnover <- ifelse(employees$Turnover_Risk == \"Yes\", 1, 0)\ndept_prop <- tapply(turnover, employees$Department, mean)\nnames(which.max(dept_prop))\n#> [1] \"Engineering\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c156",
    "label": "Problem 1 · Question 1 · For each department, calculate the ratio of High job…",
    "code": "high_count <- tapply(employees$Job_Satisfaction == \"High\", employees$Department, sum)\nlow_count <- tapply(employees$Job_Satisfaction == \"Low\", employees$Department, sum)\nratios <- high_count / low_count\nprint(ratios)\n#> Engineering     Finance          HR   Marketing       Sales\n#>   1.5135135   1.2272727   0.9333333   1.1395349   0.9807692",
    "comment": "",
    "key": false
   },
   {
    "id": "c157",
    "label": "Problem 1 · Question 2 · Find the top 5 highest paid employees in each department.…",
    "code": "depts <- unique(employees$Department)\ntop5_all <- data.frame()\nfor (d in depts) {\n  dept_data <- employees[employees$Department == d, ]\n  dept_sorted <- dept_data[order(dept_data$Salary, decreasing = TRUE), ]\n  top5 <- head(dept_sorted, 5)\n  top5_all <- rbind(top5_all, top5)\n}\nmean(top5_all$Age)\n#> [1] 41.2",
    "comment": "",
    "key": false
   },
   {
    "id": "c158",
    "label": "Problem 1 · Question 2 · Compare the average Work_Hours of employees with Salary above…",
    "code": "q25 <- quantile(employees$Salary, 0.25)\nq75 <- quantile(employees$Salary, 0.75)\nlow_group  <- employees[employees$Salary < q25, ]\nhigh_group <- employees[employees$Salary > q75, ]\nmean_low  <- mean(low_group$Work_Hours)\nmean_high <- mean(high_group$Work_Hours)\nc(\"Below 25th\" = mean_low, \"Above 75th\" = mean_high)\n#> Below 25th Above 75th\n#>   45.26857   45.35429",
    "comment": "",
    "key": false
   },
   {
    "id": "c159",
    "label": "Problem 1 · Question 2 · Compute the variance and standard deviation of Salary for…",
    "code": "group1 <- employees[employees$Years_at_Company <= 5, \"Salary\"]\ngroup2 <- employees[employees$Years_at_Company > 10, \"Salary\"]\nresults <- data.frame(\n  Group = c(\"<= 5 years\", \"> 10 years\"),\n  Variance = c(var(group1), var(group2)),\n  StdDev   = c(sd(group1), sd(group2)))\nprint(results)\n#>        Group   Variance   StdDev\n#> 1 <= 5 years 1299548258 36049.25\n#> 2 > 10 years 1152605489 33950.04",
    "comment": "",
    "key": false
   },
   {
    "id": "c160",
    "label": "Problem 1 · Question 2 · Compute the number of employees with Low job satisfaction and…",
    "code": "med <- median(employees$Salary)\nlow_med <- employees[employees$Job_Satisfaction == \"Low\" & employees$Salary < med, ]\nnrow(low_med)\n#> [1] 112",
    "comment": "",
    "key": false
   },
   {
    "id": "c161",
    "label": "Problem 1 · Question 3 · Add a new factor variable named tenure_groups with levels…",
    "code": "yrs <- employees$Years_at_Company\ngroups <- ifelse(yrs <= 5, \"Short\", ifelse(yrs <= 15, \"Medium\", \"Long\"))\nemployees$tenure_groups <- factor(groups, levels = c(\"Short\", \"Medium\", \"Long\"))",
    "comment": "",
    "key": false
   },
   {
    "id": "c162",
    "label": "Problem 1 · Question 3 · Create a barplot to showcase the distribution of the…",
    "code": "barplot(\ntable(employees$tenure_groups),\ncol = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"),\nborder = \"grey50\",\nxlab = \"Tenure Group\",\nylab = \"Number of Employees\",\nnames.arg = c(\"SHORT\", \"MEDIUM\", \"LONG\"),\nmain = \"Number of Employees by Tenure Group\"\n)\n# Number of Employees by Tenure Group\n# s 0\n# e 0\n# e 3\n# y\n# o\n# l\n# p\n# m\n# E 0\n# f 2\n# o\n# r\n# e\n# b\n# m 0\n# u 0\n# N 1\n# SHORT MEDIUM LONG\n# Tenure Group",
    "comment": "",
    "key": false
   },
   {
    "id": "c163",
    "label": "Problem 1 · Question 3 · Create a boxplot illustrating the distribution of Salary…",
    "code": "boxplot(employees$Salary ~ employees$tenure_groups, horizontal = TRUE, notch = TRUE,\ncol = c(\"lightsteelblue1\", \"wheat1\", \"thistle2\"), xlab = \"Salary (in USD)\",\nylab = \"Tenure Group\", main = \"Distribution of Salary by Tenure Group\")\n# Distribution of Salary by Tenure Group\n# g\n# n\n# o\n# L\n# p\n# u\n# o\n# r m\n# G u\n# i\n# e d\n# r e\n# u M\n# n\n# e\n# T\n# t\n# r\n# o\n# h\n# S\n# 40000 60000 80000 100000 120000 140000\n# Salary (in USD)\n# There are no outliers.",
    "comment": "",
    "key": false
   },
   {
    "id": "c164",
    "label": "Problem 1 · Question 4 · Compare the mean Salary values across various levels of…",
    "code": "aggregate(Salary ~ Job_Satisfaction, data = employees, FUN = mean)\n#>   Job_Satisfaction   Salary\n#> 1             High 90316.90\n#> 2              Low 89527.42\n#> 3           Medium 91402.17\ndoesnt_exceed_50hrs <- employees$Work_Hours <= 50\nfiltered_employees <- employees[doesnt_exceed_50hrs, ]\naggregate(Salary ~ Job_Satisfaction, data = filtered_employees, FUN = mean)\n#>   Job_Satisfaction   Salary\n#> 1             High 92815.84\n#> 2              Low 89829.69\n#> 3           Medium 90482.96\n# The average salary of employees with high or low levels of job satisfaction tends to be slightly higher than\n# the overall average among those working at most 50 hours per week. However, for employees with medium\n# levels of job satisfaction who do not exceed 50 hours per week of work, the average salary is slightly lower.",
    "comment": "",
    "key": false
   },
   {
    "id": "c165",
    "label": "Problem 1 · Question 4 · Plot a histogram of the Salary feature before and after…",
    "code": "par(mfrow = c(1, 2))\nhist(\nemployees$Salary,\nbreaks = 10,\ncol = \"lightsteelblue1\",\nxlab = \"Salary (in USD)\",\nylab = \"Number of Employees\",\nmain = \"All Employees\",\nylim = c(0, 70)\n)\nhist(\nfiltered_employees$Salary,\nbreaks = 10,\ncol = \"lightsteelblue1\",\nxlab = \"Salary (in USD)\",\nylab = \"Number of Employees\",\nmain = \"Employees Working\\nAt Most 50 Hours/Week\",\nylim = c(0, 70)\n)\n# Employees Working\n# All Employees\n# At Most 50 Hours/Week\n# 0 0\n# 7 7\n# 0 0\n# 6 6\n# s s\n# e e\n# e 0 e 0\n# y 5 y 5\n# o o\n# l l\n# p p\n# m 0 m 0\n# 4 4\n# E E\n# f f\n# o 0 o 0\n# 3 3\n# r r\n# e e\n# b b\n# 0 0\n# m 2 m 2\n# u u\n# N N\n# 0 0\n# 1 1\n# 0 0\n# 40000 80000 140000 40000 80000 140000\n# Salary (in USD) Salary (in USD)\n# The shapes of the distributions don’t seem to differ significantly before and after filtering.",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Analysis of `employee_survey_data.csv` (700 employees, 10 variables): counts and proportions by group, top earners per department, a `tenure_groups` factor, and barplots, notched boxplots and side-by-side histograms.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
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
    "code": "fun1 <- function(sum, n) {\n  n_trials <- 0\n  n_successes <- 0\n  while (n_successes < n) {\n    n_trials <- n_trials + 1\n    die_1 <- sample(1:6, size = 1, prob = c(0.1, 0.25, 0.2, 0.1, 0.25, 0.1))\n    die_2 <- sample(1:6, size = 1, prob = c(0.15, 0.15, 0.1, 0.15, 0.35, 0.1))\n    if (die_1 + die_2 == sum) {\n      n_successes <- n_successes + 1\n    }\n  }\n  n_trials\n}\nfun1(sum = 10, n = 4)\n#> [1] 39",
    "comment": "",
    "key": false
   },
   {
    "id": "c167",
    "label": "Problem 2",
    "code": "function2 <- function(n, mu, sd) {\n  obs <- rnorm(n, mu, sd)\n  for (sample_size in 1:100) {\n    sample <- sample(obs, size = sample_size)\n    sum <- sum(sample)\n    if (sum > 10) break\n  }\n  means <- c(\"sample\" = mean(sample), \"initial observations\" = mean(obs), \"mu\" = mu)\n  sorted_means <- sort(means, decreasing = TRUE)\n  sorted_means[1]\n  }\nfunction2(n = 500, mu = 3, sd = 2)\n#>   sample\n#> 3.522471",
    "comment": "",
    "key": false
   },
   {
    "id": "c168",
    "label": "Problem 3",
    "code": "test_scores_variation <- function(mean_score, score_sd) {\n  sapply(1:50, function(n) {\n    random_scores <- rnorm(n, mean = mean_score, sd = score_sd)\n    avg_score <- mean(random_scores)\n    avg_score - mean_score\n  })\n}\ntest_scores_variation(mean_score = 75, score_sd = 10)\n#>  [1] -12.64409851   9.70199161  -5.75691013  -4.28736600  -1.86974128\n#>  [6]   2.93686700   3.30605257   4.33152065  -1.23431712   2.12729701\n#> [11]  -0.46846167   0.41788839   2.26722691   1.58314752   3.06432672\n#> [16]   2.13383378  -2.31369253  -0.03942969  -5.06356508  -0.64496237\n#> [21]   1.24021453  -2.35888903   0.83767381   1.02459248  -1.47622519\n#> [26]   3.04871278   2.53970353   3.21171776   3.59730338   3.37157542\n#> [31]   1.40653652  -2.46270541  -0.14602967   1.05530973   0.32727020\n#> [36]  -0.88144472  -0.04266774  -0.30452008   0.75034830  -0.34420266\n#> [41]   0.55788285   0.83988132  -1.28698689   0.32728714   0.50088404\n#> [46]  -0.55681227  -2.02808449   1.08785088   0.03232265   1.44790219",
    "comment": "",
    "key": false
   },
   {
    "id": "c169",
    "label": "Problem 4",
    "code": "streak_game <- function() {\n  sequence <- c()\n  heads_streak <- 0\n  tails_streak <- 0\n  repeat {\n    flip <- sample(c(\"H\", \"T\"), size = 1)\n    sequence <- c(sequence, flip)\n    if (flip == \"H\") {\n      heads_streak <- heads_streak + 1\n      tails_streak <- 0\n    } else {\n      tails_streak <- tails_streak + 1\n      heads_streak <- 0\n    }\n    if (heads_streak == 3) {\n      winner <- \"3 heads in a row\"\n      break\n    }\n    if (tails_streak == 4) {\n      winner <- \"4 tails in a row\"\n      break\n    }\n  }\n  return(list(\n    sequence = sequence,\n    winner = winner,\n    num_flips = length(sequence)))\n}\nstreak_game()\n#> $sequence\n#>  [1] \"H\" \"T\" \"T\" \"H\" \"H\" \"T\" \"T\" \"H\" \"T\" \"H\" \"H\" \"H\"\n#> \n#> $winner\n#> [1] \"3 heads in a row\"\n#> \n#> $num_flips\n#> [1] 12",
    "comment": "",
    "key": false
   },
   {
    "id": "c170",
    "label": "Problem 5",
    "code": "rainy_days_sim <- function(p) {\n  consecutive_rain <- 0\n  total_days <- 0\n  while (consecutive_rain < 3) {\n    total_days <- total_days + 1\n    today <- sample(c(\"rainy\", \"sunny\"), size = 1, prob = c(p, 1 - p))\n    if (today == \"rainy\") {\n      consecutive_rain <- consecutive_rain + 1\n    } else {\n      consecutive_rain <- 0\n    }\n  }\n  return(total_days)\n}\nrainy_days_sim(0.4)\n#> [1] 43",
    "comment": "",
    "key": false
   },
   {
    "id": "c171",
    "label": "Problem 6",
    "code": "light_bulb_sim <- function(n, p) {\n  time <- 0\n  while (n > 0) {\n    time <- time + 1\n    outcome <- sample(c(\"lit\", \"burnt\"), size = n, prob = c(1 - p, p), replace = TRUE)\n    n <- sum(outcome == \"lit\")\n  }\nreturn(time)\n}\nlight_bulb_sim(n = 6, p = 0.6)\n#> [1] 5",
    "comment": "",
    "key": false
   },
   {
    "id": "c172",
    "label": "Problem 7",
    "code": "simulate_quiz <- function(num_questions, base_prob = 0.7) {\n  prob <- base_prob\n  correct <- 0\n  for (i in 1:num_questions) {\n    answer <- sample(c(TRUE, FALSE), size = 1, prob = c(prob, 1 - prob))\n    if (answer) {\n      correct <- correct + 1\n      prob <- min(prob + 0.05, 0.95)\n    } else {\n      prob <- max(prob - 0.05, 0.3)\n    }\n  }\n  score <- correct / num_questions\n  outcome <- ifelse(score >= 0.6, \"pass\", \"fail\")\n  return(list(result = outcome, total_correct = correct))\n}\nsimulate_quiz(num_questions = 20)\n#> $result\n#> [1] \"pass\"\n#> \n#> $total_correct\n#> [1] 19",
    "comment": "",
    "key": false
   },
   {
    "id": "c173",
    "label": "Problem 8",
    "code": "random_walk <- function(target) {\n  position <- 0; steps <- 0\n  while (abs(position) < target) {\n    step <- sample(c(-1, 1), size = 1)\n    position <- position + step\n    steps <- steps + 1\n  }\noutcome <- ifelse(position == target, \"positive_target\", \"negative_target\")\n  return(list(total_steps = steps, outcome = outcome))\n}\nrandom_walk(target = 15)\n#> $total_steps\n#> [1] 213\n#> \n#> $outcome\n#> [1] \"negative_target\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c174",
    "label": "Problem 9",
    "code": "fishing_trip <- function() {\n  attempt <- 0\n  big_fishies <- 0\n  accum_small_fishies <- 0\n  outcome <- \"lose\"\n  while (big_fishies < 5 && accum_small_fishies < 10) {\n    attempt <- attempt + 1\n    fishy <- sample(c(\"big\", \"small\"), size = 1, prob = c(0.2, 0.8))\n    big_fishies <- big_fishies + 1 * (fishy == \"big\")\n    accum_small_fishies <- (accum_small_fishies + 1) * (fishy == \"small\")\n## The cat() function is optional here and is used to make the output more\n## readable\n    cat(paste0(\n      \"Attempt #\", attempt, \"... \",\n      \"Total big fish: \", big_fishies, \", \",\n      \"Accummulated small fish: \", accum_small_fishies, \"\\n\"))\n    if (big_fishies == 5) {\n      outcome <- \"win\"\n    }\n    }\n  return(list(\"attempts\" = attempt, \"outcome\" = outcome))\n  }\nfishing_trip()\n#> Attempt #1... Total big fish: 0, Accummulated small fish: 1\n#> Attempt #2... Total big fish: 0, Accummulated small fish: 2\n#> Attempt #3... Total big fish: 0, Accummulated small fish: 3\n#> Attempt #4... Total big fish: 0, Accummulated small fish: 4\n#> Attempt #5... Total big fish: 0, Accummulated small fish: 5\n#> Attempt #6... Total big fish: 0, Accummulated small fish: 6\n#> Attempt #7... Total big fish: 0, Accummulated small fish: 7\n#> Attempt #8... Total big fish: 0, Accummulated small fish: 8\n#> Attempt #9... Total big fish: 1, Accummulated small fish: 0\n#> Attempt #10... Total big fish: 1, Accummulated small fish: 1\n#> Attempt #11... Total big fish: 2, Accummulated small fish: 0\n#> Attempt #12... Total big fish: 2, Accummulated small fish: 1\n#> Attempt #13... Total big fish: 2, Accummulated small fish: 2\n#> Attempt #14... Total big fish: 2, Accummulated small fish: 3\n#> Attempt #15... Total big fish: 2, Accummulated small fish: 4\n#> Attempt #16... Total big fish: 2, Accummulated small fish: 5\n#> Attempt #17... Total big fish: 3, Accummulated small fish: 0\n#> Attempt #18... Total big fish: 3, Accummulated small fish: 1\n#> Attempt #19... Total big fish: 3, Accummulated small fish: 2\n#> Attempt #20... Total big fish: 3, Accummulated small fish: 3\n#> Attempt #21... Total big fish: 4, Accummulated small fish: 0\n#> Attempt #22... Total big fish: 4, Accummulated small fish: 1\n#> Attempt #23... Total big fish: 4, Accummulated small fish: 2\n#> Attempt #24... Total big fish: 4, Accummulated small fish: 3\n#> Attempt #25... Total big fish: 4, Accummulated small fish: 4\n#> Attempt #26... Total big fish: 4, Accummulated small fish: 5\n#> Attempt #27... Total big fish: 4, Accummulated small fish: 6\n#> Attempt #28... Total big fish: 4, Accummulated small fish: 7\n#> Attempt #29... Total big fish: 4, Accummulated small fish: 8\n#> Attempt #30... Total big fish: 4, Accummulated small fish: 9\n#> Attempt #31... Total big fish: 5, Accummulated small fish: 0\n#> $attempts\n#> [1] 31\n#> \n#> $outcome\n#> [1] \"win\"",
    "comment": "",
    "key": false
   },
   {
    "id": "c175",
    "label": "Problem 10",
    "code": "charge_devices <- function(required_charge, attempted_rounds) {\n  phone <- list(\"pcts\" = seq(5, 30, by = 5), \"probs\" = c(0.2, 0.3, 0.2, 0.15, 0.1, 0.05))\n  laptop <- list(\"pcts\" = seq(10, 30, by = 5), \"probs\" = c(0.3, 0.25, 0.2, 0.15, 0.1))\n  attempts_per_round <- replicate(n = attempted_rounds, {\n    attempts <- 0\n    total_charge <- 0\n    while (total_charge < required_charge) {\n      phone_charge <- sample(phone$pcts, size = 1, prob = phone$probs)\n      laptop_charge <- sample(laptop$pcts, size = 1, prob = laptop$probs)\n      total_charge <- total_charge + (phone_charge + laptop_charge)\n      attempts <- attempts + 1\n    }\n    attempts\n    })\n  names(attempts_per_round) <- paste(\"round\", 1:attempted_rounds)\n  return(attempts_per_round)\n  }\ncharge_devices(required_charge = 40, attempted_rounds = 5)\n#> round 1 round 2 round 3 round 4 round 5\n#>       1       3       2       2       2",
    "comment": "",
    "key": false
   },
   {
    "id": "c176",
    "label": "Problem 11",
    "code": "stock_price_simulator <- function(days, start_price, mean_up, mean_down, p_up) {\n  day_means <- sample(c(mean_up, mean_down), size = days, prob = c(p_up, 1 - p_up), replace = TRUE)\n  day_changes <- sapply(day_means, function(day_mean) rnorm(1, mean = day_mean, sd = 1))\n  day_prices <- cumsum(c(start_price, day_changes))[-1]\n  data.frame(\"Day\" = 1:days, \"Price\" = day_prices, \"Change\" = day_changes)\n}\nstock_price_simulator(days = 30, start_price = 100, mean_up = 4, mean_down = -5, p_up = 0.55)\n#>    Day     Price    Change\n#> 1    1 103.87908  3.879076\n#> 2    2  99.70630 -4.172778\n#> 3    3  93.85007 -5.856232\n#> 4    4  88.68780 -5.162262\n#> 5    5  81.99771 -6.690089\n#> 6    6  85.59094  3.593226\n#> 7    7  87.75200  2.161056\n#> 8    8  82.27764 -5.474355\n#> 9    9  79.07776 -3.199879\n#> 10  10  73.09697 -5.980793\n#> 11  11  69.25286 -3.844109\n#> 12  12  74.04248  4.789618\n#> 13  13  79.24507  5.202594\n#> 14  14  74.77343 -4.471645\n#> 15  15  78.67459  3.901159\n#> 16  16  72.32262 -6.351967\n#> 17  17  66.13791 -6.184715\n#> 18  18  70.47056  4.332652\n#> 19  19  74.22709  3.756528\n#> 20  20  78.25655  4.029460\n#> 21  21  72.35124 -5.905303\n#> 22  22  66.49079 -5.860448\n#> 23  23  61.05028 -5.440511\n#> 24  24  54.15146 -6.898822\n#> 25  25  59.27038  5.118918\n#> 26  26  54.94183 -4.328549\n#> 27  27  48.57692 -6.364905\n#> 28  28  52.50854  3.931613\n#> 29  29  47.50999 -4.998544\n#> 30  30  42.69657 -4.813422",
    "comment": "",
    "key": false
   }
  ],
  "notes": "Unfair dice, sampling until a sum passes 10, `test_scores_variation`, coin streaks, rainy days, light bulbs, an adaptive quiz, a random walk and more simulation functions.\n\nCode chunks below are from the posted solutions, with printed output marked `#>`.",
  "takeaways": [],
  "updatedAt": "2026-10-12T15:40:00Z"
 }
};
