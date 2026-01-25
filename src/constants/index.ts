import { Subject } from "@/types";

export const DEPARTMENTS = ["CS", "IT", "ME", "CE", "EE"];


export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((department) => ({
    value: department,
    label: department,
}));

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: "1",
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Foundational concepts of computer science and basic programming techniques using Python.",
        createdAtDate: "2024-01-01",
        updatedAtDate: "2024-01-01"
    },
    {
        id: "2",
        code: "MAT202",
        name: "Linear Algebra",
        department: "CS",
        description: "Comprehensive study of vectors, matrices, systems of linear equations, and vector spaces.",
        createdAtDate: "2024-01-02",
        updatedAtDate: "2024-01-02"
    },
    {
        id: "3",
        code: "PHY101",
        name: "General Physics I",
        department: "EE",
        description: "Introduction to mechanics, properties of matter, heat, and sound with laboratory experiments.",
        createdAtDate: "2024-01-03",
        updatedAtDate: "2024-01-03"
    }
];