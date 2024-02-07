export interface Crud {
    Id: any;
    Title:string;
    Price: string;
    Image?: string; // URL or Base64-encoded string
}


export interface Todo {
    title:string;
    id: any;
    startTime: string;
    endTime: string;
    description: string;
    // Image?: string; // URL or Base64-encoded string
}

