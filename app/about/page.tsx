import { Metadata } from "next";
import AboutMe from "../_components/aboutComponent";


export const metadata: Metadata = {
  title: "About me",
  description: "Learn more about me, Charlie VA",
};

export default function aboutPage() {
  return (<div><AboutMe /></div>);
}
