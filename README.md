# gpt-grid-problem
GPT-4 and earlier versions really struggle with grid problems. 

# Problem

Given a 3x3 grid, these are the rules:

1. A cell in the grid can have either a value of 1 or 0.
2. Exactly 3 cells in the grid have a value of 1.
3. In order for the grid to be valid, every cell that has a value of 1 must have an edge that has a value of 1. For example:
```
1 0 0
0 1 0
0 0 1
```
This is a valid grid because the first 1-cell has a southeast 1-cell edge, which also has a southeast 1-cell edge. 
```
1 0 0
0 1 0
1 0 0
```
This is also a valid grid because the second 1-cell has a southwest 1-cell edge. 
```
1 0 0
0 0 1
1 0 0
```
This is an invalid grid because the first 1-cell has only 0-cell edges at the east, southeast, and south.
```
1 0 0
0 0 0
0 0 1
```
This is an invalid grid because there are only two 1-cells.

Find how many total valid possibilities exist.

# GPT-4 Failing Conversation Log

![image](https://user-images.githubusercontent.com/93538794/230710190-fe077db7-b1d1-4464-be9e-05039e6b9ff5.png)
![image](https://user-images.githubusercontent.com/93538794/230710203-23124d67-687d-4a20-8fc7-2d180e2f02bc.png)
![image](https://user-images.githubusercontent.com/93538794/230710210-784aa615-a6f7-475e-bf28-2e4de7a2c059.png)
![image](https://user-images.githubusercontent.com/93538794/230710216-ccec2f0d-fffa-4419-94b8-b1e033065938.png)
![image](https://user-images.githubusercontent.com/93538794/230710222-9033a3c8-1899-4838-a21b-60f24b14786d.png)
![image](https://user-images.githubusercontent.com/93538794/230710230-aefe5097-2aeb-42f5-a6f8-886299c37795.png)
![image](https://user-images.githubusercontent.com/93538794/230710237-f1adae2a-1ca7-4c5e-8580-4f17773942e4.png)
![image](https://user-images.githubusercontent.com/93538794/230710244-a921ca4c-a29e-43dd-8081-d2d1d7079023.png)

# Clear Issue

GPT-4 seems to really struggle, repeatedly, with this kind of problem. If you make it more complex (e.g., adding another dimension in the grid) it will likely fail even harder. It isn't a very simple question to answer, but it's an interesting weak point that I noticed.

# My solution
I built a quick program to attempt to answer this question for a 3x3 grid. Making a program for it is definitely easier than doing it by hand given that there are 512 different possibilities. A more generalized solution for different grid dimensions would be ideal, but I whipped this up just for this one specific problem.
```
Total valid grids: 48
Total with three 1-cells: 84
==============================================
0 0 0
0 0 0
1 1 1

0 0 0
0 0 1
0 1 1

0 0 0
0 0 1
1 1 0

0 0 0
0 1 0
0 1 1

0 0 0
0 1 0
1 0 1

0 0 0
0 1 0
1 1 0

0 0 0
0 1 1
0 0 1

0 0 0
0 1 1
0 1 0

0 0 0
0 1 1
1 0 0

0 0 0
1 0 0
0 1 1

0 0 0
1 0 0
1 1 0

0 0 0
1 0 1
0 1 0

0 0 0
1 1 0
0 0 1

0 0 0
1 1 0
0 1 0

0 0 0
1 1 0
1 0 0

0 0 0
1 1 1
0 0 0

0 0 1
0 0 1
0 0 1

0 0 1
0 0 1
0 1 0

0 0 1
0 1 0
0 0 1

0 0 1
0 1 0
0 1 0

0 0 1
0 1 0
1 0 0

0 0 1
0 1 1
0 0 0

0 0 1
1 1 0
0 0 0

0 1 0
0 0 1
0 0 1

0 1 0
0 0 1
0 1 0

0 1 0
0 1 0
0 0 1

0 1 0
0 1 0
0 1 0

0 1 0
0 1 0
1 0 0

0 1 0
0 1 1
0 0 0

0 1 0
1 0 0
0 1 0

0 1 0
1 0 0
1 0 0

0 1 0
1 0 1
0 0 0

0 1 0
1 1 0
0 0 0

0 1 1
0 0 1
0 0 0

0 1 1
0 1 0
0 0 0

0 1 1
1 0 0
0 0 0

1 0 0
0 1 0
0 0 1

1 0 0
0 1 0
0 1 0

1 0 0
0 1 0
1 0 0

1 0 0
0 1 1
0 0 0

1 0 0
1 0 0
0 1 0

1 0 0
1 0 0
1 0 0

1 0 0
1 1 0
0 0 0

1 0 1
0 1 0
0 0 0

1 1 0
0 0 1
0 0 0

1 1 0
0 1 0
0 0 0

1 1 0
1 0 0
0 0 0

1 1 1
0 0 0
0 0 0
```
