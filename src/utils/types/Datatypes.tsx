export interface EditProfilType {
  id?: any;
  name?: string;
  phone?: string;
  sex?: string;
  about?: string;
  address?: string;
  avatar_file?: any;
  email?: string;
  instagram?: string;
}

export interface AllMentor {
  id?: any;
  name?: string;
  phone?: string;
  sex?: string;
  about?: string;
  address?: string;
  avatar?: any;
  email?: string;
  instagram?: string;
  rating?: any;
  instrument_name?: string;
}

export interface EditPassword {
  old_password?: any;
  new_password?: string;
  confirmation_password?: string;
}

export interface ProfileStudent {
  id?: number;
  avatar?: any;
  name?: string;
  email?: string;
  sex?: string;
  phone?: string;
  address?: string;
}

export interface EditProfileStudent {
  id?: number;
  avatar_file?: any;
  name?: string;
  email?: string;
  sex?: string;
  phone?: string;
  address?: string;
}

export interface Instrument {
  id?: number;
  name?: string;
}

export interface GenreType {
  id?: number;
  name?: string;
}

export interface MentorClass {
  id?: number;
  image?: any;
  name?: string;
  price?: string;
}

export interface EditKursus {
  image?: any;
  name?: string;
  level?: string;
  description?: string;
  syllabus?: string;
  for_whom?: string;
  requirement?: string;
  price?: number;
  duration?: number;
}

export interface Shcedules {
  id?: any;
  day?: string;
  start_time?: string;
  end_time?: string;
}

export interface ClassDetail {
  id?: number;
  description?: string;
  for_whom?: string;
  image?: any;
  level?: string;
  name?: string;
  price?: string;
  requirement?: string;
  syllabus?: string;
}

export interface MentorDetail {
  id?: any;
  name?: string;
  phone?: string;
  sex?: string;
  about?: string;
  address?: string;
  avatar?: any;
  email?: string;
  instagram?: string;
  rating?: any;
  count_reviews?: number;
}

export interface HistoryStudent {
  id?: number;
  mentor_id?: number;
  mentor_name?: string;
  class_name?: string;
  start_date?: string;
  end_date?: string;
  price?: string;
  status?: string;
}

export interface HistoryMentor {
  class_name?: string;
  end_date?: string;
  id?: number;
  price?: number;
  start_date?: string;
  status?: string;
  student_name?: string;
}

export interface Review {
  avatar?: string;
  comment?: string;
  created_at?: string;
  id?: string;
  name?: string;
  rating?: number;
}
