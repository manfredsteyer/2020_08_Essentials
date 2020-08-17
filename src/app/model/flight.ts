

export interface Flight {
    id: number; // int + double
    from: string;
    to: string;
    date: string; // JSON, ISO: YYYY-MM-DDTHH:MM:SS+02:00
    delayed: boolean;
}
