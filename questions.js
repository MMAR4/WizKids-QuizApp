const questions = {
  aptitude: {
    easy: [
      {
        question: "If 5x = 20, what is x?",
        options: ["2", "4", "5", "10"],
        answer: "4"
      },
      {
        question: "A train travels 120 km in 2 hours. What is its speed?",
        options: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
        answer: "60 km/h"
      },
      {
        question: "What is 30% of 200?",
        options: ["40", "50", "60", "70"],
        answer: "60"
      },
      {
        question: "If 8 workers complete a task in 15 days, how many days would 12 workers take?",
        options: ["8 days", "10 days", "12 days", "14 days"],
        answer: "10 days"
      },
      {
        question: "What is the average of 15, 20, and 25?",
        options: ["18", "20", "22", "24"],
        answer: "20"
      },
      {
        question: "A shirt costs $40 after a 20% discount. What was its original price?",
        options: ["$45", "$48", "$50", "$52"],
        answer: "$50"
      },
      {
        question: "If a:b = 3:4 and b:c = 4:5, what is a:c?",
        options: ["3:5", "4:5", "5:3", "3:4"],
        answer: "3:5"
      },
      {
        question: "What is the next number: 3, 6, 9, 12, ...?",
        options: ["14", "15", "16", "18"],
        answer: "15"
      },
      {
        question: "A rectangle has length 8 cm and width 5 cm. What is its area?",
        options: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
        answer: "40 cm²"
      },
      {
        question: "If 20% of a number is 50, what is the number?",
        options: ["200", "220", "240", "250"],
        answer: "250"
      }
    ],
    medium: [
      {
        question: "What is the next number in the series: 2, 6, 12, 20, ...?",
        options: ["28", "30", "32", "36"],
        answer: "30"
      },
      {
        question: "A boat travels downstream at 18 km/h and upstream at 12 km/h. What is the boat's speed in still water?",
        options: ["13 km/h", "14 km/h", "15 km/h", "16 km/h"],
        answer: "15 km/h"
      },
      {
        question: "What is the probability of getting a prime number when rolling a die?",
        options: ["1/2", "1/3", "1/4", "1/6"],
        answer: "1/2"
      },
      {
        question: "The ratio of boys to girls in a class is 3:2. If there are 15 boys, how many girls are there?",
        options: ["8", "10", "12", "14"],
        answer: "10"
      },
      {
        question: "What is the missing number: 5, 11, 17, 23, ?",
        options: ["27", "29", "31", "33"],
        answer: "29"
      },
      {
        question: "A sum doubles in 5 years at simple interest. What is the annual interest rate?",
        options: ["15%", "18%", "20%", "25%"],
        answer: "20%"
      },
      {
        question: "If 15% of x is 45, what is 30% of x?",
        options: ["60", "75", "90", "120"],
        answer: "90"
      },
      {
        question: "Pipe A fills a tank in 6 hours, Pipe B in 8 hours. How long to fill if both pipes are open?",
        options: ["3.2 hours", "3.4 hours", "3.6 hours", "3.8 hours"],
        answer: "3.4 hours"
      },
      {
        question: "What is the smallest number divisible by 4, 6, and 8?",
        options: ["16", "24", "32", "48"],
        answer: "24"
      },
      {
        question: "A number increased by 20% becomes 180. What is the original number?",
        options: ["140", "150", "160", "170"],
        answer: "150"
      }
    ],
    hard: [
      {
        question: "What is the compound interest on $1000 at 5% for 2 years?",
        options: ["$102.5", "$100", "$110.25", "$105"],
        answer: "$102.5"
      },
      {
        question: "In how many ways can 5 books be arranged on a shelf?",
        options: ["60", "100", "120", "150"],
        answer: "120"
      },
      {
        question: "What is the remainder when 2^100 is divided by 7?",
        options: ["1", "2", "3", "4"],
        answer: "2"
      },
      {
        question: "Two trains 150m and 120m long run towards each other at 50 km/h and 40 km/h. How long to cross each other?",
        options: ["8.5 sec", "9.8 sec", "10.2 sec", "11.4 sec"],
        answer: "10.2 sec"
      },
      {
        question: "What is the highest power of 5 in 100!?",
        options: ["20", "24", "30", "32"],
        answer: "24"
      },
      {
        question: "A and B can complete a work in 12 days, B and C in 15 days, C and A in 20 days. How long would A alone take?",
        options: ["20 days", "25 days", "30 days", "35 days"],
        answer: "30 days"
      },
      {
        question: "What is the sum of all factors of 48?",
        options: ["100", "120", "124", "140"],
        answer: "124"
      },
      {
        question: "In a mixture of 60L, milk:water = 2:1. How much water to add to make 1:1 ratio?",
        options: ["10L", "15L", "20L", "25L"],
        answer: "20L"
      },
      {
        question: "What is the area of the largest circle that fits in a square of side 14 cm?",
        options: ["144π cm²", "147π cm²", "150π cm²", "154π cm²"],
        answer: "154π cm²"
      },
      {
        question: "A clock shows 3:15. What is the angle between the hands?",
        options: ["0°", "7.5°", "15°", "22.5°"],
        answer: "7.5°"
      }
    ]
  },
  math: {
    easy: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
      },
      {
        question: "What is 7 × 8?",
        options: ["48", "54", "56", "64"],
        answer: "56"
      },
      {
        question: "What is 15 ÷ 3?",
        options: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        question: "What is 12 - 5?",
        options: ["6", "7", "8", "9"],
        answer: "7"
      },
      {
        question: "What is 3²?",
        options: ["6", "9", "12", "15"],
        answer: "9"
      },
      {
        question: "What is 0.5 × 10?",
        options: ["0.05", "0.5", "5", "50"],
        answer: "5"
      },
      {
        question: "How many sides does a pentagon have?",
        options: ["4", "5", "6", "7"],
        answer: "5"
      },
      {
        question: "What is 1/4 of 20?",
        options: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        question: "What is 9 + 7?",
        options: ["14", "15", "16", "17"],
        answer: "16"
      },
      {
        question: "What is 100 ÷ 10?",
        options: ["1", "10", "100", "1000"],
        answer: "10"
      }
    ],
    medium: [
      {
        question: "Solve: 3x - 7 = 11",
        options: ["4", "5", "6", "7"],
        answer: "6"
      },
      {
        question: "What is the slope of y = 2x + 5?",
        options: ["2", "5", "-2", "1/2"],
        answer: "2"
      },
      {
        question: "Factor: x² - 9",
        options: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+3)²"],
        answer: "(x-3)(x+3)"
      },
      {
        question: "What is log₁₀100?",
        options: ["1", "2", "10", "20"],
        answer: "2"
      },
      {
        question: "Solve: 2(x + 3) = 16",
        options: ["5", "6", "7", "8"],
        answer: "5"
      },
      {
        question: "What is the vertex of parabola y = x² - 4x + 4?",
        options: ["(1,1)", "(2,0)", "(3,1)", "(4,4)"],
        answer: "(2,0)"
      },
      {
        question: "What is sin(30°)?",
        options: ["0", "0.5", "√3/2", "1"],
        answer: "0.5"
      },
      {
        question: "What is the area of a circle with radius 7?",
        options: ["14π", "28π", "49π", "98π"],
        answer: "49π"
      },
      {
        question: "Solve: |x - 3| = 5",
        options: ["x=8", "x=-2", "x=8 or x=-2", "x=2 or x=8"],
        answer: "x=8 or x=-2"
      },
      {
        question: "What is the next term in the sequence: 1, 1, 2, 3, 5, 8, ...?",
        options: ["11", "12", "13", "14"],
        answer: "13"
      }
    ],
    hard: [
      {
        question: "What is the integral of x² dx?",
        options: ["x²/2", "x³/3", "2x", "x² + C"],
        answer: "x³/3"
      },
      {
        question: "What is the derivative of sin(2x)?",
        options: ["2cos(2x)", "cos(2x)", "2sin(2x)", "-2cos(2x)"],
        answer: "2cos(2x)"
      },
      {
        question: "Solve: dy/dx = y, y(0)=1",
        options: ["y=eˣ", "y=x", "y=lnx", "y=x²"],
        answer: "y=eˣ"
      },
      {
        question: "What is the limit of (sin x)/x as x→0?",
        options: ["0", "1", "∞", "Undefined"],
        answer: "1"
      },
      {
        question: "What is the solution to x² + 2x + 5 = 0?",
        options: ["-1±2i", "-2±i", "1±2i", "No solution"],
        answer: "-1±2i"
      },
      {
        question: "What is the rank of a 3x3 identity matrix?",
        options: ["0", "1", "2", "3"],
        answer: "3"
      },
      {
        question: "What is the value of ∫₀¹ x dx?",
        options: ["0", "0.25", "0.5", "1"],
        answer: "0.5"
      },
      {
        question: "What is the Maclaurin series for eˣ?",
        options: ["Σxⁿ/n!", "Σxⁿ", "Σn!xⁿ", "Σ(-1)ⁿxⁿ/n!"],
        answer: "Σxⁿ/n!"
      },
      {
        question: "What is the gradient of f(x,y) = x² + y² at (1,1)?",
        options: ["<0,0>", "<1,1>", "<2,2>", "<4,4>"],
        answer: "<2,2>"
      },
      {
        question: "What is the determinant of [[2,3],[1,4]]?",
        options: ["5", "6", "7", "8"],
        answer: "5"
      }
    ]
  },
  science: {
    easy: [
      {
        question: "What planet do we live on?",
        options: ["Mars", "Earth", "Venus", "Jupiter"],
        answer: "Earth"
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
      },
      {
        question: "How many bones are in the adult human body?",
        options: ["206", "300", "150", "250"],
        answer: "206"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au"
      },
      {
        question: "Which is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        answer: "Energy"
      },
      {
        question: "What is the closest star to Earth?",
        options: ["Proxima Centauri", "Sirius", "Sun", "Alpha Centauri"],
        answer: "Sun"
      },
      {
        question: "What is the main gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "What force keeps planets in orbit?",
        options: ["Magnetism", "Gravity", "Friction", "Electricity"],
        answer: "Gravity"
      },
      {
        question: "What is H₂O?",
        options: ["Hydrogen", "Oxygen", "Water", "Helium"],
        answer: "Water"
      }
    ],
    medium: [
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "H₂O", "CO₂", "KCl"],
        answer: "NaCl"
      },
      {
        question: "Which organ produces insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Heart"],
        answer: "Pancreas"
      },
      {
        question: "What is the pH of pure water?",
        options: ["5", "6", "7", "8"],
        answer: "7"
      },
      {
        question: "What type of energy is stored in a battery?",
        options: ["Mechanical", "Chemical", "Thermal", "Nuclear"],
        answer: "Chemical"
      },
      {
        question: "What is the speed of light in vacuum?",
        options: ["300,000 m/s", "3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s"],
        answer: "3×10⁸ m/s"
      },
      {
        question: "Which element has the atomic number 6?",
        options: ["Nitrogen", "Oxygen", "Carbon", "Boron"],
        answer: "Carbon"
      },
      {
        question: "What is Newton's first law?",
        options: [
          "F=ma",
          "Action-reaction",
          "Law of inertia",
          "Law of gravitation"
        ],
        answer: "Law of inertia"
      },
      {
        question: "What process do plants use to make food?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
        answer: "Photosynthesis"
      },
      {
        question: "What is the chemical formula for sulfuric acid?",
        options: ["H₂SO₃", "H₂SO₄", "HCl", "HNO₃"],
        answer: "H₂SO₄"
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: "Ohm"
      }
    ],
    hard: [
      {
        question: "What particle has a negative charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        answer: "Electron"
      },
      {
        question: "What is the atomic number of Uranium?",
        options: ["89", "90", "91", "92"],
        answer: "92"
      },
      {
        question: "Which law states that entropy always increases?",
        options: [
          "First Law of Thermodynamics",
          "Second Law of Thermodynamics",
          "Zeroth Law",
          "Third Law"
        ],
        answer: "Second Law of Thermodynamics"
      },
      {
        question: "What is the Heisenberg Uncertainty Principle?",
        options: [
          "Energy conservation",
          "Wave-particle duality",
          "Impossible to know position/momentum simultaneously",
          "Quantum entanglement"
        ],
        answer: "Impossible to know position/momentum simultaneously"
      },
      {
        question: "What is CRISPR used for?",
        options: [
          "Quantum computing",
          "Nuclear fusion",
          "Gene editing",
          "Nanotechnology"
        ],
        answer: "Gene editing"
      },
      {
        question: "What is the chemical formula for ozone?",
        options: ["O₂", "O₃", "H₂O₂", "CO₂"],
        answer: "O₃"
      },
      {
        question: "Which particle mediates the electromagnetic force?",
        options: ["Gluon", "Photon", "W Boson", "Z Boson"],
        answer: "Photon"
      },
      {
        question: "What is the main component of a black hole?",
        options: ["Neutron star", "Singularity", "Dark matter", "Quark star"],
        answer: "Singularity"
      },
      {
        question: "What is Schrödinger's equation used for?",
        options: [
          "Describing gravity",
          "Describing quantum states",
          "Relativity calculations",
          "Thermodynamics"
        ],
        answer: "Describing quantum states"
      },
      {
        question: "What is the half-life of Carbon-14?",
        options: ["5730 years", "1620 years", "10,000 years", "1.25 million years"],
        answer: "5730 years"
      }
    ]
  }
};

export default questions;
