interface User {
  id: string;
  nom: string;
  prenoms: string;
  email: string;
  matricule: string;
  entreprise: string;
  profil_id: string;
  created_at: string;
  updated_at: string;
  roles: string[];
  codes_permissions: string[];
  [key: string]: any;
}

export interface IAuthData {
  login: string;
  email: string;
  user: User[];
  iat: number;
  exp: number;
  access_token: string;
  refresh_token: string;
}
