import { UserDetailsComponent } from './integration-test/3-user-details/user-details.component';
import { TodosComponent } from './integration-test/2-todos/todos.component';
import { HomeComponent } from './integration-test/home/home.component';


export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
];