import config from "../../../config";

export const FetchAllCategories = (): Promise<any> =>
  fetch(`http://${config.api.url}:${config.api.port}/categories`).then((response: Response) =>
    response.json(),
  );

export const FetchAllApplications = (): Promise<any> =>
  fetch(`http://${config.api.url}:${config.api.port}/apps`).then((response: Response) =>
    response.json(),
  );