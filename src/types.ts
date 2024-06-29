export type ServerActionResponse = {
  message: string;
  type?: ResponseType;
};

export enum ResponseType {
  SUCCESS = "success",
  ERROR = "destructive",
}
