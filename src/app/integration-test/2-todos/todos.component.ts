import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: any[] = [];
    message;

    constructor(private service: TodoService) { }

    ngOnInit() {
        this.service.getAll().subscribe(
            data => {
                this.todos = data
                console.log("getAll", data)
            },
            err => this.message = err,
            () => console.log("complete getAll")
        );
    }

    add() {
        var newTodo = {
            address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874", geo: {lat: "-43.9509",lng: "-34.4618"} },
            company: { name: "travel-time", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" },
            email: "doc@brown.com",
            id: 11,
            name: "Emet Brown",
            phone: "1-770-736-8031 x56442",
            username: "Doc",
            website: "outatime.org",
        };
        this.service.add(newTodo).subscribe(
            data => {
                this.todos.push(data)
                console.log("add", data)
            },
            err => {
                this.message = err
                console.log("err add", err)
            },
            () => console.log("complete add")
        );
    }

    delete(id) {
        if (confirm('Are you sure?'))
            this.service.delete(id).subscribe(
                data => {
                    console.log("delete", data)
                },
                err => {
                    this.message = err
                    console.log("err delete", err)
                },
                () => console.log("complete delete")
            );
    }
}
