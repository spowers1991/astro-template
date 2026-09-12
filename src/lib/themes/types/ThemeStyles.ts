export interface ThemeStyles {
  html?: string;
  body?: string;
  header?: string;
  main?: string;

  p?: string;
  a?: string;
  ul?: string;
  ol?: string;
  li?: string;

  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;

  button?: string | {
    variants?: Record<string, string>;
  };
  
  input?: string;
  textarea?: string;
  select?: string;
  label?: string;

  table?: string;
  th?: string;
  td?: string;

  blockquote?: string;
  code?: string;
  pre?: string;
  hr?: string;
  span?: string;

  // New semantic / structural tags
  section?: string;
  article?: string;
  aside?: string;
  footer?: string;
  "header-article"?: string;
  hgroup?: string;

  time?: string;
  mark?: string;

  details?: string;
  summary?: string;

  figure?: string;
  figcaption?: string;

  meter?: string;
  progress?: string;

  address?: string;

  dialog?: string;
  data?: string;
  datalist?: string;
  output?: string;
  ruby?: string;
  rt?: string;
  rp?: string;
  wbr?: string;
  checkbox?: string;
  card?: string;
}
