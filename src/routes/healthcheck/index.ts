import { Express } from "express";
import { healthcheckHandler } from "../../modules/healthcheck";

export default class {
  app: Express;
  checker: any;
  
  constructor(app: Express, checker = healthcheckHandler) {
    this.app = app;
    this.checker = checker;
  }
  
  healthcheck(): Express {
    return this.app.get('/healthcheck', (new this.checker()).healthcheck());
  }
  
}