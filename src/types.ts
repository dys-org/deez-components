export type VueClass =
  | string
  | Record<string, boolean>
  | (string | Record<string, boolean>)[]
  | false;
