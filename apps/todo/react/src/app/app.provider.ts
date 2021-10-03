import { TodoInMemoryRepository } from '@nx-clean/todo-data-access';
import { TodoRepository } from '@nx-clean/todo-domain';
import { Injector } from './injector';
import {
  TodoPresenter,
  TodoDefaultPresenter,
} from '@nx-clean/todo-presentation';

export const injector = Injector.create([
  {
    provide: TodoRepository,
    useFactory: () => {
      return new TodoInMemoryRepository([
        { id: '1', title: 'test', completed: false },
      ]);
    },
  },
  {
    provide: TodoPresenter,
    useFactory: (repo: TodoRepository) => {
      return new TodoDefaultPresenter(repo);
    },
    deps: [TodoRepository],
  },
]);