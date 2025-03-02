export type Error = {
  message: string;
  status: number;
};

export type ApiResponse<T> = T | Error;
