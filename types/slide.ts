export type Slide = {
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  button: string;
};