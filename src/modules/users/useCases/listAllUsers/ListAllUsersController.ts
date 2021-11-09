import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ListAllUsersController };
