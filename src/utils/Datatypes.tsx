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
