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
