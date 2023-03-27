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
