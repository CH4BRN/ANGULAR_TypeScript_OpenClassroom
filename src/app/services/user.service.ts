import { User } from "../models/User.model";
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
    new User("Trevor", "PHILIPS", "t.p@associated.us", "Jus d'orange", ['coder', 'dealer']),
    new User("Franklin", "JOHNSON", "fraaaanklin.j@grove.us","Jus de kiwi",['chops', 'dealer'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}