export interface InboxType {
    id?: number;
    student_id?: any;
    mentor_id?: any;
    avatar?: any;
    student_name?: string;
}

export interface ChatsType {
    id?: any;
    sender_name?: string[];
    chat?: string[];
}

export interface Params {
    student_id?: string;
    mentor_id?: string;
}