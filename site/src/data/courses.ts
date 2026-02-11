export interface Sheet {
  label: string;
  /** PDF filename without extension (e.g. "2c03-final") */
  pdf: string;
}

export interface Course {
  /** Directory name in the repo (e.g. "COMPSCI-2C03") */
  dir: string;
  /** Display code (e.g. "COMPSCI 2C03") */
  code: string;
  /** Human-readable course name */
  name: string;
  sheets: Sheet[];
}

export interface Department {
  id: string;
  name: string;
}

export const departments: Department[] = [
  { id: "COMPSCI", name: "Computer Science" },
  { id: "ENGPHYS", name: "Engineering Physics" },
  { id: "MATH", name: "Mathematics" },
  { id: "PHYSICS", name: "Physics" },
];

export const courses: Course[] = [
  {
    dir: "COMPSCI-2C03",
    code: "COMPSCI 2C03",
    name: "Data Structures & Algorithms",
    sheets: [
      { label: "Midterm", pdf: "2c03-midterm" },
      { label: "Final", pdf: "2c03-final" },
    ],
  },
  {
    dir: "COMPSCI-2GA3",
    code: "COMPSCI 2GA3",
    name: "Computer Architecture",
    sheets: [
      { label: "Midterm", pdf: "2ga3-midterm" },
      { label: "Final", pdf: "2ga3-final" },
    ],
  },
  {
    dir: "COMPSCI-2LC3",
    code: "COMPSCI 2LC3",
    name: "Logical Reasoning for Computer Science",
    sheets: [
      { label: "Midterm", pdf: "2lc3-midterm" },
      { label: "Final", pdf: "2lc3-final" },
    ],
  },
  {
    dir: "COMPSCI-2ME3",
    code: "COMPSCI 2ME3",
    name: "Software Engineering Practice & Experience",
    sheets: [
      { label: "Midterm", pdf: "2me3-midterm" },
      { label: "Final", pdf: "2me3-final" },
    ],
  },
  {
    dir: "COMPSCI-2SD3",
    code: "COMPSCI 2SD3",
    name: "Concurrent Systems",
    sheets: [
      { label: "Final", pdf: "2sd3-final" },
    ],
  },
  {
    dir: "COMPSCI-2XC3",
    code: "COMPSCI 2XC3",
    name: "Algorithms & Software Design",
    sheets: [
      { label: "Midterm", pdf: "2xc3-midterm" },
    ],
  },
  {
    dir: "COMPSCI-3AC3",
    code: "COMPSCI 3AC3",
    name: "Algorithms & Complexity",
    sheets: [
      { label: "Final", pdf: "3ac3-final" },
    ],
  },
  {
    dir: "COMPSCI-3GC3",
    code: "COMPSCI 3GC3",
    name: "Computer Graphics",
    sheets: [
      { label: "Midterm", pdf: "3gc3-midterm" },
      { label: "Final", pdf: "3gc3-final" },
    ],
  },
  {
    dir: "COMPSCI-3MI3",
    code: "COMPSCI 3MI3",
    name: "Principles of Programming Languages",
    sheets: [
      { label: "Final", pdf: "3mi3-final" },
    ],
  },
  {
    dir: "COMPSCI-3N03",
    code: "COMPSCI 3N03",
    name: "Computer Networks & Security",
    sheets: [
      { label: "Final", pdf: "3n03-final" },
    ],
  },
  {
    dir: "COMPSCI-3SH3",
    code: "COMPSCI 3SH3",
    name: "Operating Systems",
    sheets: [
      { label: "Final", pdf: "3sh3-final" },
    ],
  },
  {
    dir: "COMPSCI-4NL3",
    code: "COMPSCI 4NL3",
    name: "Natural Language Processing",
    sheets: [
      { label: "Midterm", pdf: "4nl3-midterm" },
      { label: "Final", pdf: "4nl3-final" },
    ],
  },
  {
    dir: "ENGPHYS-3SP3",
    code: "ENGPHYS 3SP3",
    name: "Signal Processing",
    sheets: [
      { label: "Final", pdf: "engphys-3sp3-final" },
    ],
  },
  {
    dir: "MATH-2Z03",
    code: "MATH 2Z03",
    name: "Engineering Mathematics III",
    sheets: [
      { label: "Final", pdf: "math-2z03-final" },
    ],
  },
  {
    dir: "PHYSICS-3QI3",
    code: "PHYSICS 3QI3",
    name: "Quantum Information",
    sheets: [
      { label: "Midterm", pdf: "physics-3qi3-midterm" },
      { label: "Final", pdf: "physics-3qi3-final" },
    ],
  },
];

export function getCoursesByDepartment(deptId: string): Course[] {
  return courses.filter((c) => c.dir.startsWith(deptId + "-"));
}
