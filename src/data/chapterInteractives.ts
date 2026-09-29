// Flagship formula + variable tooltips + interactive calculator for each chapter.

export type VarTip = {
  /** KaTeX source for the symbol shown on the chip (e.g. "m", "b^2-4ac"). */
  symbol: string;
  /** Plain-English explanation shown on hover. */
  meaning: string;
};

export type CalcInput = {
  /** Variable key used by the compute function. */
  key: string;
  /** Display label (KaTeX inline source, no $ delimiters). */
  label: string;
  /** Optional placeholder hint. */
  placeholder?: string;
  /** Default value (string so empties work). */
  default?: string;
};

export type CalcSpec = {
  /** Heading shown above the calculator. */
  title: string;
  /** Short prose description. */
  description: string;
  /** KaTeX of the formula (the same flagship formula). */
  formula: string;
  /** The hoverable variables in the flagship formula. */
  tips: VarTip[];
  /** Inputs the user fills in. */
  inputs: CalcInput[];
  /**
   * Build a KaTeX string of the formula with the user's numbers substituted in.
   * Receives a record of the current input strings.
   */
  substitute: (vals: Record<string, string>) => string;
  /**
   * Compute the result. Return a KaTeX string to render, or null when inputs
   * are missing/invalid (the UI then shows a hint instead).
   */
  compute: (vals: Record<string, number>) => string | null;
  /** Names of inputs that must be valid numbers before compute runs. */
  required: string[];
};

const num = (s: string | undefined) => {
  if (s === undefined || s.trim() === "") return NaN;
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
};

const fmt = (n: number, d = 4) => {
  if (!Number.isFinite(n)) return "\\text{undefined}";
  if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
  return Number(n.toFixed(d)).toString();
};

const sub = (vals: Record<string, string>, key: string, fallback = "?") =>
  vals[key]?.trim() ? vals[key] : fallback;

export const chapterInteractives: Record<string, CalcSpec> = {
  // ───────────────────────── Ch 1 — Distance on a Number Line ─────────────────────────
  ch1: {
    title: "Distance on a Number Line",
    description:
      "Enter two numbers to find how far apart they are using absolute value.",
    formula: "d = |a - b|",
    tips: [
      { symbol: "d", meaning: "Distance between the two numbers (never negative)." },
      { symbol: "a", meaning: "The first number on the number line." },
      { symbol: "b", meaning: "The second number on the number line." },
      { symbol: "|\\ \\ |", meaning: "Absolute value — strips the sign, leaving the size." },
    ],
    inputs: [
      { key: "a", label: "a", default: "-3" },
      { key: "b", label: "b", default: "8" },
    ],
    required: ["a", "b"],
    substitute: (v) => `d = |(${sub(v, "a")}) - (${sub(v, "b")})|`,
    compute: (v) => `d = ${fmt(Math.abs(v.a - v.b))}`,
  },

  // ───────────────────────── Ch 2 — Two-Step Equation ─────────────────────────
  ch2: {
    title: "Two-Step Equation Solver",
    description:
      "Enter a, b, and c for ax + b = c. The solver undoes the addition, then the multiplication.",
    formula: "ax + b = c \\implies x = \\dfrac{c - b}{a}",
    tips: [
      { symbol: "a", meaning: "Coefficient of x (must not be 0)." },
      { symbol: "b", meaning: "Constant added to ax — subtract it from both sides first." },
      { symbol: "c", meaning: "The value the left side equals." },
      { symbol: "x", meaning: "The unknown you are solving for." },
    ],
    inputs: [
      { key: "a", label: "a", default: "3" },
      { key: "b", label: "b", default: "-7" },
      { key: "c", label: "c", default: "11" },
    ],
    required: ["a", "b", "c"],
    substitute: (v) => `(${sub(v, "a")})x + (${sub(v, "b")}) = ${sub(v, "c")}`,
    compute: (v) => {
      if (v.a === 0) return v.b === v.c ? "\\text{infinitely many solutions}" : "\\text{no solution}";
      return `x = ${fmt((v.c - v.b) / v.a)}`;
    },
  },

  // ───────────────────────── Ch 3 — Linear Inequality ─────────────────────────
  ch3: {
    title: "Inequality Solver",
    description:
      "Enter a, b, and c for ax + b < c. Watch the sign flip when a is negative.",
    formula: "ax + b < c \\implies x < \\dfrac{c - b}{a} \\ (a > 0)",
    tips: [
      { symbol: "a", meaning: "Coefficient of x. If negative, the inequality sign flips." },
      { symbol: "b", meaning: "Constant added to ax." },
      { symbol: "c", meaning: "Right-hand bound." },
      { symbol: "<", meaning: "Reverses to > when you divide by a negative number." },
    ],
    inputs: [
      { key: "a", label: "a", default: "-2" },
      { key: "b", label: "b", default: "4" },
      { key: "c", label: "c", default: "10" },
    ],
    required: ["a", "b", "c"],
    substitute: (v) => `(${sub(v, "a")})x + (${sub(v, "b")}) < ${sub(v, "c")}`,
    compute: (v) => {
      if (v.a === 0) return v.b < v.c ? "\\text{all real numbers}" : "\\text{no solution}";
      const bound = fmt((v.c - v.b) / v.a);
      return v.a > 0 ? `x < ${bound}` : `x > ${bound}`;
    },
  },

  // ───────────────────────── Ch 4 — Slope ─────────────────────────
  ch4: {
    title: "Slope from Two Points",
    description:
      "Enter two points to compute the slope and the slope-intercept equation of the line through them.",
    formula: "m = \\dfrac{y_2 - y_1}{x_2 - x_1}",
    tips: [
      { symbol: "m", meaning: "Slope — rise over run; how steep the line is." },
      { symbol: "y_2 - y_1", meaning: "Rise — the vertical change between the points." },
      { symbol: "x_2 - x_1", meaning: "Run — the horizontal change between the points." },
    ],
    inputs: [
      { key: "x1", label: "x_1", default: "2" },
      { key: "y1", label: "y_1", default: "3" },
      { key: "x2", label: "x_2", default: "6" },
      { key: "y2", label: "y_2", default: "11" },
    ],
    required: ["x1", "y1", "x2", "y2"],
    substitute: (v) =>
      `m = \\dfrac{${sub(v, "y2")} - (${sub(v, "y1")})}{${sub(v, "x2")} - (${sub(v, "x1")})}`,
    compute: (v) => {
      if (v.x2 === v.x1) return `\\text{vertical line: } x = ${fmt(v.x1)} \\ (\\text{slope undefined})`;
      const m = (v.y2 - v.y1) / (v.x2 - v.x1);
      const b = v.y1 - m * v.x1;
      return `m = ${fmt(m)}, \\quad y = ${fmt(m)}x ${b < 0 ? "-" : "+"} ${fmt(Math.abs(b))}`;
    },
  },

  // ───────────────────────── Ch 5 — Systems (Cramer's rule) ─────────────────────────
  ch5: {
    title: "2×2 System Solver",
    description:
      "Enter the coefficients of a x + b y = c and d x + e y = f. Returns the intersection point, if there is one.",
    formula: "x = \\dfrac{ce - bf}{ae - bd}, \\quad y = \\dfrac{af - cd}{ae - bd}",
    tips: [
      { symbol: "ae - bd", meaning: "Determinant of the system. If 0, the lines are parallel or identical." },
      { symbol: "x", meaning: "x-coordinate of the intersection point." },
      { symbol: "y", meaning: "y-coordinate of the intersection point." },
    ],
    inputs: [
      { key: "a", label: "a", default: "2" },
      { key: "b", label: "b", default: "1" },
      { key: "c", label: "c", default: "7" },
      { key: "d", label: "d", default: "1" },
      { key: "e", label: "e", default: "-1" },
      { key: "f", label: "f", default: "2" },
    ],
    required: ["a", "b", "c", "d", "e", "f"],
    substitute: (v) =>
      `\\begin{cases} (${sub(v, "a")})x + (${sub(v, "b")})y = ${sub(v, "c")} \\\\ (${sub(v, "d")})x + (${sub(v, "e")})y = ${sub(v, "f")} \\end{cases}`,
    compute: (v) => {
      const det = v.a * v.e - v.b * v.d;
      if (det === 0) return "\\text{no unique solution (parallel or identical lines)}";
      const x = (v.c * v.e - v.b * v.f) / det;
      const y = (v.a * v.f - v.c * v.d) / det;
      return `(x, y) = (${fmt(x)},\\ ${fmt(y)})`;
    },
  },

  // ───────────────────────── Ch 6 — Exponential growth ─────────────────────────
  ch6: {
    title: "Exponential Growth & Decay",
    description:
      "Enter a starting amount, a rate per period (as a percent, negative for decay), and the number of periods.",
    formula: "y = a(1 + r)^t",
    tips: [
      { symbol: "y", meaning: "Amount after t periods." },
      { symbol: "a", meaning: "Starting amount." },
      { symbol: "r", meaning: "Rate per period as a decimal (5% = 0.05). Negative means decay." },
      { symbol: "t", meaning: "Number of periods (years, days, …)." },
    ],
    inputs: [
      { key: "a", label: "a", default: "2000" },
      { key: "r", label: "r\\,(\\%)", default: "5" },
      { key: "t", label: "t", default: "3" },
    ],
    required: ["a", "r", "t"],
    substitute: (v) => `y = ${sub(v, "a")}\\left(1 + \\dfrac{${sub(v, "r")}}{100}\\right)^{${sub(v, "t")}}`,
    compute: (v) => `y \\approx ${fmt(v.a * Math.pow(1 + v.r / 100, v.t), 2)}`,
  },

  // ───────────────────────── Ch 7 — FOIL ─────────────────────────
  ch7: {
    title: "FOIL Multiplier",
    description:
      "Enter the coefficients of two binomials (px + q)(rx + s) and expand them into a quadratic.",
    formula: "(px + q)(rx + s) = pr\\,x^2 + (ps + qr)\\,x + qs",
    tips: [
      { symbol: "pr", meaning: "First terms multiplied — the x² coefficient." },
      { symbol: "ps + qr", meaning: "Outer + Inner terms — the x coefficient." },
      { symbol: "qs", meaning: "Last terms multiplied — the constant." },
    ],
    inputs: [
      { key: "p", label: "p", default: "2" },
      { key: "q", label: "q", default: "3" },
      { key: "r", label: "r", default: "1" },
      { key: "s", label: "s", default: "-4" },
    ],
    required: ["p", "q", "r", "s"],
    substitute: (v) =>
      `(${sub(v, "p")}x + (${sub(v, "q")}))(${sub(v, "r")}x + (${sub(v, "s")}))`,
    compute: (v) => {
      const A = v.p * v.r;
      const B = v.p * v.s + v.q * v.r;
      const C = v.q * v.s;
      const term = (co: number, pow: string, first: boolean) => {
        if (co === 0) return "";
        const sign = co < 0 ? "-" : first ? "" : "+";
        const mag = Math.abs(co);
        const body = pow && mag === 1 ? pow : `${fmt(mag)}${pow}`;
        return `${first ? sign : ` ${sign} `}${body}`;
      };
      const parts = [term(A, "x^2", true)];
      parts.push(term(B, "x", parts[0] === ""));
      parts.push(term(C, "", parts[0] === "" && parts[1] === ""));
      return parts.join("") || "0";
    },
  },

  // ───────────────────────── Ch 8 — Quadratic formula ─────────────────────────
  ch8: {
    title: "Quadratic Formula Solver",
    description:
      "Enter a, b, c for ax² + bx + c = 0. Returns the real solutions and the vertex, using the discriminant.",
    formula: "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    tips: [
      { symbol: "a", meaning: "Coefficient of x² (must not be 0)." },
      { symbol: "b", meaning: "Coefficient of x." },
      { symbol: "c", meaning: "Constant term." },
      { symbol: "b^2-4ac", meaning: "Discriminant — positive: 2 real roots, zero: 1, negative: none." },
    ],
    inputs: [
      { key: "a", label: "a", default: "1" },
      { key: "b", label: "b", default: "-5" },
      { key: "c", label: "c", default: "6" },
    ],
    required: ["a", "b", "c"],
    substitute: (v) =>
      `x = \\dfrac{-(${sub(v, "b")}) \\pm \\sqrt{(${sub(v, "b")})^2 - 4(${sub(v, "a")})(${sub(v, "c")})}}{2(${sub(v, "a")})}`,
    compute: (v) => {
      if (v.a === 0) return "\\text{a must not be } 0";
      const D = v.b * v.b - 4 * v.a * v.c;
      const h = -v.b / (2 * v.a);
      const k = v.a * h * h + v.b * h + v.c;
      const vertex = `\\text{vertex } (${fmt(h)},\\ ${fmt(k)})`;
      if (D < 0) return `D = ${fmt(D)} < 0: \\text{no real solutions}, \\quad ${vertex}`;
      if (D === 0) return `x = ${fmt(h)} \\ (\\text{one solution}), \\quad ${vertex}`;
      const r = Math.sqrt(D);
      const x1 = (-v.b + r) / (2 * v.a);
      const x2 = (-v.b - r) / (2 * v.a);
      return `x = ${fmt(x1)} \\ \\text{or} \\ x = ${fmt(x2)}, \\quad ${vertex}`;
    },
  },

  // ───────────────────────── Ch 9 — Pythagorean theorem ─────────────────────────
  ch9: {
    title: "Hypotenuse Calculator",
    description:
      "Enter the two legs of a right triangle to find the hypotenuse, as an exact radical and a decimal.",
    formula: "c = \\sqrt{a^2 + b^2}",
    tips: [
      { symbol: "c", meaning: "Hypotenuse — the side opposite the right angle (the longest side)." },
      { symbol: "a", meaning: "First leg of the right triangle." },
      { symbol: "b", meaning: "Second leg of the right triangle." },
    ],
    inputs: [
      { key: "a", label: "a", default: "3" },
      { key: "b", label: "b", default: "4" },
    ],
    required: ["a", "b"],
    substitute: (v) => `c = \\sqrt{(${sub(v, "a")})^2 + (${sub(v, "b")})^2}`,
    compute: (v) => {
      if (v.a <= 0 || v.b <= 0) return "\\text{legs must be positive}";
      const sq = v.a * v.a + v.b * v.b;
      const c = Math.sqrt(sq);
      if (Math.abs(c - Math.round(c)) < 1e-9) return `c = ${fmt(c)}`;
      return `c = \\sqrt{${fmt(sq)}} \\approx ${fmt(c)}`;
    },
  },

  // ───────────────────────── Ch 10 — Mean / median / range ─────────────────────────
  ch10: {
    title: "Mean, Median & Range",
    description:
      "Enter a list of numbers separated by commas to get the mean, median, and range.",
    formula: "\\bar{x} = \\dfrac{\\sum x}{n}",
    tips: [
      { symbol: "\\bar{x}", meaning: "The mean (average) of the data set." },
      { symbol: "\\sum x", meaning: "The sum of all the values." },
      { symbol: "n", meaning: "How many values are in the data set." },
    ],
    inputs: [
      {
        key: "data",
        label: "\\text{data}",
        default: "4, 8, 6, 5, 12",
        placeholder: "e.g. 4, 8, 6, 5, 12",
      },
    ],
    required: [],
    substitute: (v) => {
      const xs = (v.data || "").split(",").map((s) => s.trim()).filter(Boolean);
      if (!xs.length) return "\\bar{x} = ?";
      return `\\bar{x} = \\dfrac{${xs.join(" + ")}}{${xs.length}}`;
    },
    compute: () => null, // handled by ch10StatsCompute (string list input)
  },
};

// Special compute override for Ch 10 (comma-separated data list).
export const ch10StatsCompute = (vals: Record<string, string>): string | null => {
  const xs = (vals.data || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map(Number);
  if (!xs.length || xs.some((n) => !Number.isFinite(n))) return null;
  const sorted = [...xs].sort((a, b) => a - b);
  const n = sorted.length;
  const mean = xs.reduce((s, x) => s + x, 0) / n;
  const median = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const range = sorted[n - 1] - sorted[0];
  return `\\bar{x} = ${fmt(mean)}, \\quad \\text{median} = ${fmt(median)}, \\quad \\text{range} = ${fmt(range)}`;
};

export { num, fmt };
