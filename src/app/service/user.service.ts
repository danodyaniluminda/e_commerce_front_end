import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private users: User[] = [
  //   { id: 1, userName: 'John Doe', userType: 'Admin' },
  //   { id: 2, userName: 'Jane Smith', userType: 'User' }
  // ];
  //
  // getUsers(): User[] {
  //   return this.users;
  // }
  //
  // getUserById(id: number): User {
  //   return <User>this.users.find(user => user.id === id);
  // }
  //
  // addUser(user: User) {
  //   const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
  //   user.id = id;
  //   this.users.push(user);
  // }
  //
  // updateUser(user: User) {
  //   const index = this.users.findIndex(u => u.id === user.id);
  //   if (index !== -1) {
  //     this.users[index] = user;
  //   }
  // }
  //
  // deleteUser(id: number) {
  //   this.users = this.users.filter(user => user.id !== id);
  // }
}
