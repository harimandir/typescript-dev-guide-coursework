import "reflect-metadata";
import { RequestHandler } from "express";
import { RouteHandlerDescriptor } from "./RouteHandlerDescriptor";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: RouteHandlerDescriptor) {
    const middlewares: RequestHandler[] =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) ?? [];

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
