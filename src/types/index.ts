// src/types/index.ts

export interface User {
    id: string;
    name: string;
    title: string;
    email: string;
    role: string;
    avatarUrl: string;
    positionDescription: string;
    todos: Todo[];
}

export interface Todo {
    title: string;
    status: 'not_completed' | 'complete';
    lastCompleted?: string;
    dueDate?: string;
}

export interface UserCard {
    id: string;
    name: string;
    title: string;
    avatarUrl: string;
    status: {
        onboarding: boolean;
        backgroundCheck: boolean;
        training: boolean;
        performanceEvaluations: boolean;
    };
}