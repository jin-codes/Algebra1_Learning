export type Example = { problem: string; steps: string[] };
export type Concept = {
  id: string;
  title: string;
  explanation: string;
  formulas?: string[];
  examples?: Example[];
  keywords?: string[];
};
export type Chapter = {
  id: string;
  number: number;
  title: string;
  color: "cyan" | "purple" | "green" | "pink";
  concepts: Concept[];
};

export const curriculum: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "Foundations: Numbers & Expressions",
    color: "cyan",
    concepts: [
      {
        id: "real-numbers",
        title: "The Real Number System",
        explanation:
          "Real numbers include natural numbers, whole numbers, integers, rational numbers (fractions and terminating/repeating decimals), and irrational numbers (non-repeating, non-terminating decimals such as $\\sqrt{2}$ and $\\pi$). Each set sits inside the next larger one.",
        formulas: [
          "\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}",
        ],
        examples: [
          {
            problem: "Classify $-\\dfrac{3}{4}$, $\\sqrt{9}$, and $\\sqrt{5}$.",
            steps: [
              "$-\\frac{3}{4}$ is a ratio of integers, so it is rational.",
              "$\\sqrt{9} = 3$ is a natural number (also whole, integer, rational).",
              "$\\sqrt{5}$ is not a perfect square root, so it is irrational.",
            ],
          },
        ],
        keywords: ["rational", "irrational", "integer", "number sets"],
      },
      {
        id: "order-of-ops",
        title: "Order of Operations",
        explanation:
          "Evaluate expressions in this order: Parentheses (and other grouping symbols), Exponents, Multiplication and Division from left to right, then Addition and Subtraction from left to right (PEMDAS).",
        formulas: ["\\text{P} \\to \\text{E} \\to \\text{MD} \\to \\text{AS}"],
        examples: [
          {
            problem: "Evaluate: $8 + 2(5 - 3)^2 \\div 4$",
            steps: [
              "Parentheses: $8 + 2(2)^2 \\div 4$",
              "Exponent: $8 + 2 \\cdot 4 \\div 4$",
              "Multiply/divide left to right: $8 + 8 \\div 4 = 8 + 2$",
              "Add: $10$",
            ],
          },
        ],
        keywords: ["PEMDAS", "BODMAS", "evaluate", "expression"],
      },
      {
        id: "properties",
        title: "Properties of Real Numbers",
        explanation:
          "These properties justify each step of simplifying. Addition and multiplication are commutative and associative. The distributive property links multiplication and addition. Identities leave a number unchanged, and inverses produce the identity.",
        formulas: [
          "a + b = b + a \\qquad ab = ba",
          "a(b + c) = ab + ac",
          "a + 0 = a \\qquad a \\cdot 1 = a",
          "a + (-a) = 0 \\qquad a \\cdot \\dfrac{1}{a} = 1 \\ (a \\ne 0)",
        ],
        examples: [
          {
            problem: "Simplify: $3(2x + 5) - 4x$",
            steps: [
              "Distribute: $6x + 15 - 4x$",
              "Combine like terms: $2x + 15$",
            ],
          },
        ],
        keywords: ["commutative", "associative", "distributive", "identity", "inverse"],
      },
      {
        id: "absolute-value",
        title: "Absolute Value",
        explanation:
          "The absolute value of a number is its distance from 0 on the number line, so it is never negative. The distance between two numbers a and b is $|a - b|$.",
        formulas: [
          "|a| = \\begin{cases} a & a \\ge 0 \\\\ -a & a < 0 \\end{cases}",
          "d(a, b) = |a - b|",
        ],
        examples: [
          {
            problem: "Evaluate: $|3 - 10| - |-2|$",
            steps: ["$|-7| - 2$", "$7 - 2 = 5$"],
          },
        ],
        keywords: ["distance", "number line", "magnitude"],
      },
    ],
  },
  {
    id: "ch2",
    number: 2,
    title: "Linear Equations",
    color: "purple",
    concepts: [
      {
        id: "one-step-two-step",
        title: "One- and Two-Step Equations",
        explanation:
          "To solve an equation, undo operations in reverse order using inverse operations, and do the same thing to both sides. Undo addition/subtraction first, then multiplication/division.",
        formulas: ["ax + b = c \\implies x = \\dfrac{c - b}{a}"],
        examples: [
          {
            problem: "Solve: $3x - 7 = 11$",
            steps: ["Add 7: $3x = 18$", "Divide by 3: $x = 6$", "Check: $3(6) - 7 = 11$ ✓"],
          },
        ],
        keywords: ["solve", "inverse operations", "isolate"],
      },
      {
        id: "multi-step",
        title: "Multi-Step Equations & Variables on Both Sides",
        explanation:
          "Simplify each side first (distribute, combine like terms), then collect variable terms on one side and constants on the other. If the variable cancels, the equation is either an identity (always true, infinitely many solutions) or a contradiction (never true, no solution).",
        formulas: ["ax + b = cx + d \\implies x = \\dfrac{d - b}{a - c}"],
        examples: [
          {
            problem: "Solve: $2(x + 3) = 5x - 9$",
            steps: [
              "Distribute: $2x + 6 = 5x - 9$",
              "Subtract $2x$: $6 = 3x - 9$",
              "Add 9: $15 = 3x$, so $x = 5$",
            ],
          },
          {
            problem: "Solve: $4x + 2 = 4x + 7$",
            steps: ["Subtract $4x$: $2 = 7$", "False statement, so there is no solution."],
          },
        ],
        keywords: ["distribute", "no solution", "identity", "infinitely many"],
      },
      {
        id: "literal-equations",
        title: "Literal Equations & Formulas",
        explanation:
          "A literal equation has several variables. To solve for one variable, treat the others as constants and isolate it using the same inverse-operation steps.",
        formulas: ["d = rt \\implies t = \\dfrac{d}{r}", "A = \\tfrac{1}{2}bh \\implies h = \\dfrac{2A}{b}"],
        examples: [
          {
            problem: "Solve $P = 2l + 2w$ for $w$.",
            steps: ["Subtract $2l$: $P - 2l = 2w$", "Divide by 2: $w = \\dfrac{P - 2l}{2}$"],
          },
        ],
        keywords: ["formula", "solve for", "rearrange"],
      },
      {
        id: "ratios-percents",
        title: "Ratios, Proportions & Percents",
        explanation:
          "A proportion says two ratios are equal; solve it by cross-multiplying. Percent problems use the relationship part = percent × whole. Percent change compares the change to the original amount.",
        formulas: [
          "\\dfrac{a}{b} = \\dfrac{c}{d} \\implies ad = bc",
          "\\text{part} = \\text{percent} \\times \\text{whole}",
          "\\%\\text{ change} = \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100",
        ],
        examples: [
          {
            problem: "A jacket that costs 40 dollars is on sale for 30 dollars. Find the percent decrease.",
            steps: ["Change: $30 - 40 = -10$", "$\\dfrac{-10}{40} = -0.25$", "A 25% decrease."],
          },
        ],
        keywords: ["proportion", "cross multiply", "percent", "rate"],
      },
    ],
  },
  {
    id: "ch3",
    number: 3,
    title: "Linear Inequalities",
    color: "green",
    concepts: [
      {
        id: "solving-inequalities",
        title: "Solving One-Variable Inequalities",
        explanation:
          "Inequalities are solved like equations with one crucial difference: multiplying or dividing both sides by a negative number reverses the inequality sign. Solutions are graphed on a number line with an open circle for < and > and a closed circle for ≤ and ≥.",
        formulas: ["-ax > b \\implies x < -\\dfrac{b}{a} \\quad (a > 0)"],
        examples: [
          {
            problem: "Solve: $-2x + 4 > 10$",
            steps: ["Subtract 4: $-2x > 6$", "Divide by $-2$ and FLIP the sign: $x < -3$"],
          },
        ],
        keywords: ["flip", "reverse", "number line", "solution set"],
      },
      {
        id: "compound-inequalities",
        title: "Compound Inequalities",
        explanation:
          "An \"and\" compound inequality requires both parts to be true (intersection); an \"or\" compound requires at least one (union). A three-part inequality like $a < x < b$ can be solved by working on all three parts at once.",
        formulas: ["a < x < b", "x < a \\ \\text{or} \\ x > b"],
        examples: [
          {
            problem: "Solve: $-3 < 2x + 1 \\le 9$",
            steps: ["Subtract 1 from all parts: $-4 < 2x \\le 8$", "Divide by 2: $-2 < x \\le 4$"],
          },
        ],
        keywords: ["and", "or", "intersection", "union"],
      },
      {
        id: "absolute-value-eq",
        title: "Absolute Value Equations & Inequalities",
        explanation:
          "Because $|u|$ measures distance from zero, $|u| = k$ splits into two cases. For inequalities, $|u| < k$ means $u$ is between $-k$ and $k$ (an \"and\"), while $|u| > k$ means $u$ is beyond both (an \"or\"). Isolate the absolute value first.",
        formulas: [
          "|u| = k \\implies u = k \\ \\text{or} \\ u = -k",
          "|u| < k \\implies -k < u < k",
          "|u| > k \\implies u < -k \\ \\text{or} \\ u > k",
        ],
        examples: [
          {
            problem: "Solve: $|2x - 3| = 7$",
            steps: ["$2x - 3 = 7$ gives $x = 5$", "$2x - 3 = -7$ gives $x = -2$"],
          },
          {
            problem: "Solve: $|x - 4| \\le 3$",
            steps: ["$-3 \\le x - 4 \\le 3$", "Add 4: $1 \\le x \\le 7$"],
          },
        ],
        keywords: ["absolute value", "distance", "two cases"],
      },
      {
        id: "inequality-word",
        title: "Modeling with Inequalities",
        explanation:
          "Translate phrases carefully: \"at least\" is ≥, \"at most\" is ≤, \"more than\" is >, \"fewer than\" is <. Define the variable, write the inequality, solve, and interpret the answer in context.",
        formulas: ["\\text{cost} = \\text{fixed} + (\\text{rate})(x) \\le \\text{budget}"],
        examples: [
          {
            problem: "You have 50 dollars. A game costs 12 dollars and snacks cost 3 dollars each. How many snacks can you buy?",
            steps: ["$12 + 3s \\le 50$", "$3s \\le 38$, so $s \\le 12.67$", "At most 12 snacks."],
          },
        ],
        keywords: ["at least", "at most", "word problem", "budget"],
      },
    ],
  },
  {
    id: "ch4",
    number: 4,
    title: "Linear Functions & Graphs",
    color: "pink",
    concepts: [
      {
        id: "functions-basics",
        title: "Relations & Functions",
        explanation:
          "A relation is a set of ordered pairs. A function assigns each input (domain) exactly one output (range). Use the vertical line test on a graph: if any vertical line hits the graph more than once, it is not a function. $f(x)$ notation reads \"f of x.\"",
        formulas: ["y = f(x)", "f(x) = 3x - 2 \\implies f(4) = 3(4) - 2 = 10"],
        examples: [
          {
            problem: "Is $\\{(1, 2), (2, 4), (1, 5)\\}$ a function?",
            steps: ["The input 1 maps to both 2 and 5.", "So it is NOT a function."],
          },
        ],
        keywords: ["domain", "range", "vertical line test", "f(x)"],
      },
      {
        id: "slope",
        title: "Slope & Rate of Change",
        explanation:
          "Slope measures steepness: rise over run. Positive slopes rise left to right, negative slopes fall, horizontal lines have slope 0, and vertical lines have undefined slope. Parallel lines share a slope; perpendicular lines have slopes that are negative reciprocals.",
        formulas: [
          "m = \\dfrac{y_2 - y_1}{x_2 - x_1}",
          "m_1 = m_2 \\ \\text{(parallel)}",
          "m_1 \\cdot m_2 = -1 \\ \\text{(perpendicular)}",
        ],
        examples: [
          {
            problem: "Find the slope through $(2, 3)$ and $(6, 11)$.",
            steps: ["$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4}$", "$m = 2$"],
          },
        ],
        keywords: ["slope", "rise over run", "parallel", "perpendicular"],
      },
      {
        id: "line-forms",
        title: "Forms of Linear Equations",
        explanation:
          "Slope-intercept form shows the slope and y-intercept. Point-slope form is built from one point and the slope. Standard form has integer coefficients and is handy for finding intercepts.",
        formulas: [
          "y = mx + b",
          "y - y_1 = m(x - x_1)",
          "Ax + By = C",
        ],
        examples: [
          {
            problem: "Write the line with slope 3 through $(1, 5)$ in slope-intercept form.",
            steps: [
              "Point-slope: $y - 5 = 3(x - 1)$",
              "Distribute: $y - 5 = 3x - 3$",
              "Add 5: $y = 3x + 2$",
            ],
          },
        ],
        keywords: ["slope-intercept", "point-slope", "standard form", "y-intercept"],
      },
      {
        id: "graphing-lines",
        title: "Graphing Lines & Intercepts",
        explanation:
          "To graph from slope-intercept form, plot the y-intercept and use the slope to find more points. To use intercepts, set $x = 0$ to find the y-intercept and $y = 0$ to find the x-intercept. Direct variation $y = kx$ is a line through the origin.",
        formulas: ["x\\text{-int: } y = 0 \\qquad y\\text{-int: } x = 0", "y = kx"],
        examples: [
          {
            problem: "Find the intercepts of $2x + 3y = 12$.",
            steps: ["Let $y = 0$: $2x = 12$, so $x = 6$", "Let $x = 0$: $3y = 12$, so $y = 4$", "Intercepts: $(6, 0)$ and $(0, 4)$"],
          },
        ],
        keywords: ["intercepts", "graph", "direct variation", "plot"],
      },
    ],
  },
  {
    id: "ch5",
    number: 5,
    title: "Systems of Linear Equations",
    color: "cyan",
    concepts: [
      {
        id: "graphing-systems",
        title: "Solving Systems by Graphing",
        explanation:
          "A system is a set of equations sharing variables. Graph both lines; the intersection point is the solution. Different slopes give exactly one solution, the same slope with different intercepts (parallel lines) gives none, and identical lines give infinitely many.",
        formulas: ["\\begin{cases} y = m_1 x + b_1 \\\\ y = m_2 x + b_2 \\end{cases}"],
        examples: [
          {
            problem: "How many solutions: $y = 2x + 1$ and $y = 2x - 4$?",
            steps: ["Both slopes are 2, intercepts differ.", "The lines are parallel: no solution."],
          },
        ],
        keywords: ["system", "intersection", "parallel", "consistent"],
      },
      {
        id: "substitution",
        title: "Substitution Method",
        explanation:
          "Solve one equation for a variable, then substitute that expression into the other equation. Solve the resulting one-variable equation, then back-substitute to find the other variable.",
        formulas: ["y = 2x - 1 \\ \\text{into} \\ 3x + y = 9"],
        examples: [
          {
            problem: "Solve: $y = 2x - 1$ and $3x + y = 9$",
            steps: [
              "Substitute: $3x + (2x - 1) = 9$",
              "$5x - 1 = 9$, so $x = 2$",
              "$y = 2(2) - 1 = 3$",
              "Solution: $(2, 3)$",
            ],
          },
        ],
        keywords: ["substitute", "back-substitute"],
      },
      {
        id: "elimination",
        title: "Elimination Method",
        explanation:
          "Add or subtract the equations to cancel one variable. If no variable cancels directly, multiply one or both equations by constants first so that a pair of coefficients are opposites.",
        formulas: [
          "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}",
          "x = \\dfrac{c_1 b_2 - c_2 b_1}{a_1 b_2 - a_2 b_1}",
        ],
        examples: [
          {
            problem: "Solve: $2x + y = 7$ and $x - y = 2$",
            steps: [
              "Add the equations: $3x = 9$, so $x = 3$",
              "Substitute: $3 - y = 2$, so $y = 1$",
              "Solution: $(3, 1)$",
            ],
          },
        ],
        keywords: ["elimination", "add equations", "cancel"],
      },
      {
        id: "system-inequalities",
        title: "Systems of Linear Inequalities",
        explanation:
          "Graph each inequality as a boundary line (dashed for < or >, solid for ≤ or ≥) and shade the correct side. Test a point, such as $(0, 0)$, to decide which side to shade. The solution is the region where all shaded areas overlap.",
        formulas: ["\\begin{cases} y \\ge 2x - 1 \\\\ y < -x + 4 \\end{cases}"],
        examples: [
          {
            problem: "Is $(1, 2)$ a solution of $y \\ge 2x - 1$ and $y < -x + 4$?",
            steps: ["First: $2 \\ge 1$ ✓", "Second: $2 < 3$ ✓", "Yes, it satisfies both."],
          },
        ],
        keywords: ["shade", "boundary", "region", "test point"],
      },
    ],
  },
  {
    id: "ch6",
    number: 6,
    title: "Exponents & Exponential Functions",
    color: "purple",
    concepts: [
      {
        id: "exponent-rules",
        title: "Exponent Rules",
        explanation:
          "Exponent rules simplify expressions with powers. The product and quotient rules require the same base. A negative exponent means reciprocal, and any nonzero base to the power 0 equals 1.",
        formulas: [
          "a^m \\cdot a^n = a^{m+n}",
          "\\dfrac{a^m}{a^n} = a^{m-n}",
          "(a^m)^n = a^{mn}",
          "(ab)^n = a^n b^n",
          "a^{-n} = \\dfrac{1}{a^n}",
          "a^0 = 1 \\quad (a \\ne 0)",
        ],
        examples: [
          {
            problem: "Simplify: $\\dfrac{x^5 \\cdot x^{-2}}{x^{-3}}$",
            steps: ["Top: $x^{5 + (-2)} = x^3$", "Divide: $x^{3 - (-3)} = x^6$"],
          },
        ],
        keywords: ["power", "base", "negative exponent", "zero exponent"],
      },
      {
        id: "scientific-notation",
        title: "Scientific Notation",
        explanation:
          "Scientific notation writes a number as a product of a number from 1 up to (but not including) 10 and a power of 10. Large numbers get a positive exponent and numbers smaller than 1 get a negative exponent.",
        formulas: ["N = a \\times 10^n, \\quad 1 \\le |a| < 10"],
        examples: [
          {
            problem: "Write 0.00042 in scientific notation.",
            steps: ["Move the decimal 4 places right to get 4.2", "Small number, so the exponent is negative: $4.2 \\times 10^{-4}$"],
          },
          {
            problem: "Multiply: $(3 \\times 10^4)(2 \\times 10^5)$",
            steps: ["Multiply coefficients: $3 \\cdot 2 = 6$", "Add exponents: $10^{4+5}$", "$6 \\times 10^9$"],
          },
        ],
        keywords: ["scientific notation", "power of ten", "large numbers"],
      },
      {
        id: "exponential-functions",
        title: "Exponential Growth & Decay",
        explanation:
          "An exponential function has the variable in the exponent. With $y = a \\cdot b^x$, $a$ is the starting value and $b$ is the growth factor: $b > 1$ is growth, $0 < b < 1$ is decay. Write $b = 1 + r$ for growth by rate $r$ and $b = 1 - r$ for decay.",
        formulas: [
          "y = a \\cdot b^x",
          "y = a(1 + r)^t \\quad \\text{(growth)}",
          "y = a(1 - r)^t \\quad \\text{(decay)}",
        ],
        examples: [
          {
            problem: "A 2000-dollar account earns 5% per year. Find the balance after 3 years.",
            steps: ["$y = 2000(1.05)^3$", "$= 2000(1.157625)$", "$\\approx 2315.25$ dollars"],
          },
        ],
        keywords: ["growth", "decay", "compound interest", "growth factor"],
      },
      {
        id: "sequences",
        title: "Arithmetic & Geometric Sequences",
        explanation:
          "An arithmetic sequence adds a common difference $d$ each step (linear growth). A geometric sequence multiplies by a common ratio $r$ each step (exponential growth). Both have explicit formulas for the $n$th term.",
        formulas: [
          "a_n = a_1 + (n - 1)d",
          "a_n = a_1 \\cdot r^{\\,n-1}",
        ],
        examples: [
          {
            problem: "Find the 10th term of $5, 8, 11, 14, \\ldots$",
            steps: ["Arithmetic with $a_1 = 5$, $d = 3$", "$a_{10} = 5 + 9(3) = 32$"],
          },
        ],
        keywords: ["arithmetic", "geometric", "common difference", "common ratio"],
      },
    ],
  },
  {
    id: "ch7",
    number: 7,
    title: "Polynomials & Factoring",
    color: "pink",
    concepts: [
      {
        id: "poly-basics",
        title: "Adding & Subtracting Polynomials",
        explanation:
          "A polynomial is a sum of terms with whole-number exponents. Its degree is the highest exponent. Add or subtract by combining like terms; when subtracting, distribute the negative sign to every term of the second polynomial.",
        formulas: ["(ax^2 + bx + c) + (dx^2 + ex + f) = (a+d)x^2 + (b+e)x + (c+f)"],
        examples: [
          {
            problem: "Simplify: $(3x^2 + 2x - 5) - (x^2 - 4x + 1)$",
            steps: ["Distribute the negative: $3x^2 + 2x - 5 - x^2 + 4x - 1$", "Combine: $2x^2 + 6x - 6$"],
          },
        ],
        keywords: ["polynomial", "degree", "like terms", "monomial", "binomial"],
      },
      {
        id: "multiplying-polys",
        title: "Multiplying Polynomials",
        explanation:
          "Multiply a monomial by a polynomial with the distributive property. To multiply two binomials use FOIL (First, Outer, Inner, Last). Special products have shortcuts.",
        formulas: [
          "(a+b)(c+d) = ac + ad + bc + bd",
          "(a+b)^2 = a^2 + 2ab + b^2",
          "(a-b)^2 = a^2 - 2ab + b^2",
          "(a+b)(a-b) = a^2 - b^2",
        ],
        examples: [
          {
            problem: "Multiply: $(2x + 3)(x - 4)$",
            steps: ["$2x^2 - 8x + 3x - 12$", "$2x^2 - 5x - 12$"],
          },
        ],
        keywords: ["FOIL", "distribute", "special products", "binomial"],
      },
      {
        id: "factoring",
        title: "Factoring Polynomials",
        explanation:
          "Factoring undoes multiplication. Always pull out the greatest common factor (GCF) first. For $x^2 + bx + c$ find two numbers that multiply to $c$ and add to $b$. For $ax^2 + bx + c$ with $a \\ne 1$, use the AC method or grouping.",
        formulas: [
          "x^2 + bx + c = (x + p)(x + q), \\ pq = c, \\ p + q = b",
          "a^2 - b^2 = (a - b)(a + b)",
          "a^2 \\pm 2ab + b^2 = (a \\pm b)^2",
        ],
        examples: [
          {
            problem: "Factor: $x^2 + 5x + 6$",
            steps: ["Need two numbers with product 6 and sum 5: 2 and 3", "$(x + 2)(x + 3)$"],
          },
          {
            problem: "Factor: $2x^2 - 18$",
            steps: ["GCF: $2(x^2 - 9)$", "Difference of squares: $2(x - 3)(x + 3)$"],
          },
          {
            problem: "Factor: $6x^2 + 7x - 3$",
            steps: [
              "AC method: $ac = -18$; need product $-18$, sum 7: 9 and $-2$",
              "Split: $6x^2 + 9x - 2x - 3$",
              "Group: $3x(2x + 3) - 1(2x + 3)$",
              "$(2x + 3)(3x - 1)$",
            ],
          },
        ],
        keywords: ["GCF", "difference of squares", "trinomial", "grouping"],
      },
      {
        id: "zero-product",
        title: "Solving Equations by Factoring",
        explanation:
          "The Zero Product Property says that if $ab = 0$ then $a = 0$ or $b = 0$. To solve a polynomial equation, move everything to one side so it equals zero, factor, and set each factor equal to zero.",
        formulas: ["ab = 0 \\implies a = 0 \\ \\text{or} \\ b = 0"],
        examples: [
          {
            problem: "Solve: $x^2 - 5x = -6$",
            steps: ["Rewrite: $x^2 - 5x + 6 = 0$", "Factor: $(x - 2)(x - 3) = 0$", "$x = 2$ or $x = 3$"],
          },
        ],
        keywords: ["zero product", "roots", "solve by factoring"],
      },
    ],
  },
  {
    id: "ch8",
    number: 8,
    title: "Quadratic Functions",
    color: "green",
    concepts: [
      {
        id: "parabolas",
        title: "Graphing Quadratic Functions",
        explanation:
          "The graph of $y = ax^2 + bx + c$ is a parabola. It opens up if $a > 0$ and down if $a < 0$. The axis of symmetry is the vertical line through the vertex, and the y-intercept is $c$.",
        formulas: [
          "x = -\\dfrac{b}{2a} \\quad \\text{(axis of symmetry)}",
          "\\text{vertex} = \\left(-\\dfrac{b}{2a},\\ f\\!\\left(-\\dfrac{b}{2a}\\right)\\right)",
        ],
        examples: [
          {
            problem: "Find the vertex of $y = x^2 - 6x + 5$.",
            steps: ["$x = -\\dfrac{-6}{2(1)} = 3$", "$y = 9 - 18 + 5 = -4$", "Vertex: $(3, -4)$ (a minimum)"],
          },
        ],
        keywords: ["parabola", "vertex", "axis of symmetry", "opens up"],
      },
      {
        id: "vertex-form",
        title: "Vertex Form & Transformations",
        explanation:
          "Vertex form $y = a(x - h)^2 + k$ reveals the vertex $(h, k)$ directly. Changing $h$ shifts the graph horizontally (opposite sign!), $k$ shifts it vertically, and $a$ stretches, compresses, or reflects it.",
        formulas: ["y = a(x - h)^2 + k"],
        examples: [
          {
            problem: "Describe $y = -2(x + 1)^2 + 3$.",
            steps: ["Vertex: $(-1, 3)$", "$a = -2$: opens down and is narrower than $y = x^2$"],
          },
        ],
        keywords: ["vertex form", "transformation", "shift", "reflection"],
      },
      {
        id: "quadratic-formula",
        title: "The Quadratic Formula & Discriminant",
        explanation:
          "Any quadratic $ax^2 + bx + c = 0$ can be solved with the quadratic formula. The discriminant $b^2 - 4ac$ tells how many real solutions there are: positive gives two, zero gives one, and negative gives none.",
        formulas: [
          "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
          "D = b^2 - 4ac",
        ],
        examples: [
          {
            problem: "Solve: $2x^2 + 3x - 2 = 0$",
            steps: [
              "$D = 9 - 4(2)(-2) = 25$",
              "$x = \\dfrac{-3 \\pm 5}{4}$",
              "$x = \\tfrac{1}{2}$ or $x = -2$",
            ],
          },
        ],
        keywords: ["discriminant", "roots", "solutions", "quadratic formula"],
      },
      {
        id: "complete-square",
        title: "Completing the Square & Square Roots",
        explanation:
          "If an equation has the form $x^2 = k$, take square roots of both sides (remember $\\pm$). Otherwise complete the square by adding $\\left(\\tfrac{b}{2}\\right)^2$ to both sides to create a perfect-square trinomial.",
        formulas: [
          "x^2 = k \\implies x = \\pm\\sqrt{k}",
          "x^2 + bx + \\left(\\tfrac{b}{2}\\right)^2 = \\left(x + \\tfrac{b}{2}\\right)^2",
        ],
        examples: [
          {
            problem: "Solve: $x^2 + 6x - 7 = 0$",
            steps: [
              "Move constant: $x^2 + 6x = 7$",
              "Add $9$ to both sides: $x^2 + 6x + 9 = 16$",
              "$(x + 3)^2 = 16$",
              "$x + 3 = \\pm 4$, so $x = 1$ or $x = -7$",
            ],
          },
        ],
        keywords: ["completing the square", "square root", "perfect square"],
      },
    ],
  },
  {
    id: "ch9",
    number: 9,
    title: "Radicals & the Pythagorean Theorem",
    color: "cyan",
    concepts: [
      {
        id: "simplify-radicals",
        title: "Simplifying Radicals",
        explanation:
          "Pull perfect-square factors out of the radicand. The product and quotient properties of square roots let you split a radical into simpler pieces. A simplified radical has no perfect-square factor and no radical in a denominator.",
        formulas: [
          "\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}",
          "\\sqrt{\\dfrac{a}{b}} = \\dfrac{\\sqrt{a}}{\\sqrt{b}}",
        ],
        examples: [
          {
            problem: "Simplify: $\\sqrt{72}$",
            steps: ["$72 = 36 \\cdot 2$", "$\\sqrt{36}\\sqrt{2} = 6\\sqrt{2}$"],
          },
          {
            problem: "Rationalize: $\\dfrac{6}{\\sqrt{3}}$",
            steps: ["Multiply top and bottom by $\\sqrt{3}$: $\\dfrac{6\\sqrt{3}}{3}$", "$2\\sqrt{3}$"],
          },
        ],
        keywords: ["radical", "square root", "rationalize", "radicand"],
      },
      {
        id: "radical-ops",
        title: "Operations with Radicals",
        explanation:
          "Add or subtract radicals only when the radicands match (like terms). Multiply radicals by multiplying the radicands, then simplify. Use FOIL for products of binomials with radicals.",
        formulas: ["a\\sqrt{x} + b\\sqrt{x} = (a + b)\\sqrt{x}", "\\sqrt{a}\\cdot\\sqrt{b} = \\sqrt{ab}"],
        examples: [
          {
            problem: "Simplify: $\\sqrt{12} + \\sqrt{27}$",
            steps: ["$2\\sqrt{3} + 3\\sqrt{3}$", "$5\\sqrt{3}$"],
          },
        ],
        keywords: ["like radicals", "add radicals", "multiply radicals"],
      },
      {
        id: "radical-equations",
        title: "Solving Radical Equations",
        explanation:
          "Isolate the radical, then square both sides. Squaring can introduce extraneous solutions, so always check every answer in the original equation.",
        formulas: ["\\sqrt{u} = k \\implies u = k^2"],
        examples: [
          {
            problem: "Solve: $\\sqrt{x + 7} = x + 1$",
            steps: [
              "Square both sides: $x + 7 = x^2 + 2x + 1$",
              "$0 = x^2 + x - 6 = (x + 3)(x - 2)$",
              "Check $x = 2$: $\\sqrt{9} = 3$ ✓. Check $x = -3$: $\\sqrt{4} = 2 \\ne -2$ ✗",
              "Only $x = 2$.",
            ],
          },
        ],
        keywords: ["extraneous", "isolate radical", "square both sides"],
      },
      {
        id: "pythagorean",
        title: "Pythagorean Theorem & Distance",
        explanation:
          "In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$. The converse also holds. The distance formula applies the theorem to two points in the coordinate plane, and the midpoint formula averages the coordinates.",
        formulas: [
          "a^2 + b^2 = c^2",
          "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
          "M = \\left(\\dfrac{x_1 + x_2}{2},\\ \\dfrac{y_1 + y_2}{2}\\right)",
        ],
        examples: [
          {
            problem: "Find the distance between $(1, 2)$ and $(7, 10)$.",
            steps: ["$d = \\sqrt{6^2 + 8^2}$", "$= \\sqrt{100} = 10$"],
          },
        ],
        keywords: ["hypotenuse", "right triangle", "distance formula", "midpoint"],
      },
    ],
  },
  {
    id: "ch10",
    number: 10,
    title: "Data Analysis & Statistics",
    color: "purple",
    concepts: [
      {
        id: "central-tendency",
        title: "Mean, Median, Mode & Range",
        explanation:
          "The mean is the sum divided by the count, the median is the middle value of the ordered list (average the two middle values when the count is even), and the mode is the most frequent value. The range is the maximum minus the minimum.",
        formulas: [
          "\\bar{x} = \\dfrac{\\sum x}{n}",
          "\\text{range} = \\max - \\min",
        ],
        examples: [
          {
            problem: "Find the mean and median of $4, 8, 6, 5, 12$.",
            steps: ["Sum $= 35$, mean $= 35 \\div 5 = 7$", "Ordered: $4, 5, 6, 8, 12$; median $= 6$"],
          },
        ],
        keywords: ["average", "median", "mode", "range", "mean"],
      },
      {
        id: "quartiles",
        title: "Quartiles, IQR & Box Plots",
        explanation:
          "Quartiles split ordered data into four parts: Q1 is the median of the lower half, Q3 the median of the upper half. The interquartile range measures the spread of the middle 50%. A value is an outlier if it lies more than 1.5 IQR below Q1 or above Q3.",
        formulas: [
          "\\text{IQR} = Q_3 - Q_1",
          "\\text{outlier if } x < Q_1 - 1.5\\,\\text{IQR} \\ \\text{ or } \\ x > Q_3 + 1.5\\,\\text{IQR}",
        ],
        examples: [
          {
            problem: "Data: $2, 4, 5, 7, 8, 10, 30$. Is 30 an outlier?",
            steps: [
              "Median $= 7$; $Q_1 = 4$, $Q_3 = 10$",
              "$\\text{IQR} = 6$; upper fence $= 10 + 9 = 19$",
              "$30 > 19$, so yes, it is an outlier.",
            ],
          },
        ],
        keywords: ["box plot", "IQR", "outlier", "five-number summary"],
      },
      {
        id: "scatter-plots",
        title: "Scatter Plots & Lines of Best Fit",
        explanation:
          "A scatter plot shows the relationship between two variables. The correlation can be positive, negative, or none. A line of best fit models the trend and can be used to predict values; the correlation coefficient $r$ ranges from $-1$ to $1$. Correlation does not imply causation.",
        formulas: ["\\hat{y} = mx + b", "-1 \\le r \\le 1"],
        examples: [
          {
            problem: "A best-fit line is $\\hat{y} = 2.5x + 10$. Predict $y$ when $x = 8$.",
            steps: ["$\\hat{y} = 2.5(8) + 10$", "$= 30$"],
          },
        ],
        keywords: ["correlation", "trend line", "regression", "prediction"],
      },
      {
        id: "probability",
        title: "Basic Probability & Counting",
        explanation:
          "Probability is the number of favorable outcomes divided by the total number of equally likely outcomes. For independent events multiply probabilities. Use the counting principle to count arrangements, and combinations when order doesn't matter.",
        formulas: [
          "P(A) = \\dfrac{\\text{favorable}}{\\text{total}}",
          "P(A \\text{ and } B) = P(A)\\cdot P(B) \\quad \\text{(independent)}",
          "P(\\text{not } A) = 1 - P(A)",
          "{}_nC_r = \\dfrac{n!}{r!\\,(n-r)!}",
        ],
        examples: [
          {
            problem: "Two fair coins are flipped. Find $P(\\text{two heads})$.",
            steps: ["Each flip: $\\tfrac{1}{2}$", "$\\tfrac{1}{2} \\cdot \\tfrac{1}{2} = \\tfrac{1}{4}$"],
          },
        ],
        keywords: ["probability", "independent", "combination", "counting principle"],
      },
    ],
  },
];
