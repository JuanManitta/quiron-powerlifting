export interface Athlete {
    id: string,
    fullName: string,
    age: number,
    bench: number,
    squat: number,
    deadlift: number,
    total?: number,
    isActive: boolean,
    federation: string,
}