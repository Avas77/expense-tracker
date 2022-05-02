import { Segment } from "@speechly/browser-client";

export const getHelperText = (segment?: Segment) => {
  if (segment) {
    return segment.words.map((word) => word.value).join(" ");
  } else {
    return "";
  }
};
