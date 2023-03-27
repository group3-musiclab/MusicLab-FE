export interface InboxType {
    id: number;
    student_id?: any;
    mentor_id?: any;
    avatar?: any;
    student_name?: string;
}

export interface ChatsType {
    id?: number;
    sender_name: any;
    chat?: string;
}

export interface Params {
    student_id?: string;
    mentor_id?: string;
}