export interface UserData {
  id: number;
  name: string;
  username: string;
  userType: string; // Assuming it's a URL to the uploaded photo
  status: string;

}

export const SAMPLE_USER_DATA: UserData[] = [
  {
    id: 1060,
    name: 'Danodya Senewirathne',
    username: 'danodya1998',
    userType: 'Admin',
    status: 'Active',
  },
  {
    id: 2123,
    name: 'Jhone Ebrahim',
    username: 'john1234',
    userType: 'Seller',
    status: 'Active',
  }
];

