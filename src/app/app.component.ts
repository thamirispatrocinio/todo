import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Lista de tarefas
l
  //Variavel publica chamada todos do tipo any que seria um tipo qualquer, que é um array[] e foi inicializada = com um array [] vazio
  public todos: Todo[] = [];
  //Para usar formulario
  public form: FormGroup;

  //Metodo construtor para criar algumas tarefas, ele vai ser chamado automaticamente sempre que a classe iniciar
  constructor(private fb: FormBuilder) {  //criacao de forms
    //para compor o formulario
    this.form = this.fb.group({//colocando os itens dentro do grupo
      title: ['', Validators.compose([//array que compoe a validação
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    this.load();
  }

  load(){//metodo para carregar os todos
    this.todos.push({//push para inserir item no array
      title: 'Passear com o cachorro', //Json
      done: false});
      this.todos.push({
      title: 'Ir ao supermercado', //Json
      done: false});
    
  }
  //METODOS PARA TORNAR O PROJETO MAIS DINAMICO, OS PRINCIPAIS
  addTodo(){
    //this.form.value //o resultado vai ser o json que é {title: '' } , tras o valor do formulario
    const title = this.form.controls['title'].value;
    this.todos.push(new Todo(title, false));
    this.form.reset();
  }

  removeTodo(todo: Todo){//todo: Todo -> assim que tipa nos metodos
    const index = this.todos.indexOf(todo);//o metodo indexOF tras o indice do array do todo
    this.todos.splice(index,1);//splice para remover item do array, 1 para ir removendo o item
  }

}
