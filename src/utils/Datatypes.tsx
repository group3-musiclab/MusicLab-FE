export interface EditProfilType {
  id?: number;
  name?: string;
  phone?: string;
  sex?: string;
  about?: string;
  address?: string;
  avatar?: any;
  email?: string;
  instagram?: string;
}

export interface EditPassword {
  old_password?: any;
  new_password?: string;
  confirmation_password?: string;
}
