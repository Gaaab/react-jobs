export interface Job {
  id:          string;
  title:       string;
  type:        string;
  description: string;
  location:    string;
  salary:      string;
  company:     Company;
}

export interface Company {
  name:         string;
  description:  string;
  contactEmail: string;
  contactPhone: string;
}
