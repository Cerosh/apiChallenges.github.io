import { faker } from "@faker-js/faker";
import xmlbuilder from "xmlbuilder";

export namespace todoGenerator {
  export interface Todo {
    id: number;
    title: string;
    doneStatus: string | boolean | number;
    description: string;
  }
  export interface TodosResponse {
    todos: Todo[];
  }
  export function generateTodo(doneStatusOverride?: number | string): Todo {
    let doneStatus: string | boolean | number;
    switch (doneStatusOverride) {
      case 1:
      case "true":
        doneStatus = true;
        break;
      case 0:
      case "false":
        doneStatus = false;
        break;
      default:
        doneStatus = doneStatusOverride ?? faker.datatype.boolean();
        break;
    }
    return {
      title: faker.commerce.productName(),
      doneStatus,
      description: faker.commerce.productDescription(),
    };
  }

  export function generateTodoXML(
    doneStatusOverride?: number | string
  ): string {
    const todo = generateTodo(doneStatusOverride);
    const xml = xmlbuilder
      .create("todo")
      .ele("title", todo.title)
      .up()
      .ele("doneStatus", todo.doneStatus)
      .up()
      .ele("description", todo.description)
      .end({ pretty: true });

    return xml;
  }
}
