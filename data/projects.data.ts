import { Project } from "@/types/projects";
import ProductLaunch from "@/public/illustrations/product-launch.svg";
import Success from "@/public/illustrations/business-success-chart.svg";
import Illustrator from "@/public/illustrations/illustrator.svg";
import PackageDelivery from "@/public/illustrations/package-delivery.svg";
import WebDesign from "@/public/illustrations/web-design.svg";

export const projects: Project[] = [
  {
    name: "Exercise generator",
    description: "I created several SQL queries that generate an exercise. The queries all generate the necessary data which is needed to properly render it in de frontend.",
    img: PackageDelivery,
  },
  {
    name: "Exercise components",
    description:
      "I created a set of components which each render an exercised. These components are used to display the exercise and the solution.",
    img: Illustrator,
  },
  {
    name: "Landingpage",
    description: "I created a landingpage for the application. This landingpage is used to promote the application and to get new users.",
    img: WebDesign,
  },
  {
    name: "Module generator",
    description:
      "I created a module generator to speed up the development process. It generates a module with all the necessary files and folders. It also adds the module to the main app module.",
    img: ProductLaunch,
  },
  {
    name: "Typescript type assistance",
    description:
      "To catch possible typos and speed up development with intelligent autocompletion, I created some complex types to help the compiler and IDE to understand the code.",
    img: Success,
  },

]
