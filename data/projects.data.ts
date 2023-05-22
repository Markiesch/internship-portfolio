import Success from "@/public/illustrations/business-success-chart.svg"
import Illustrator from "@/public/illustrations/illustrator.svg"
import PackageDelivery from "@/public/illustrations/package-delivery.svg"
import ProductLaunch from "@/public/illustrations/product-launch.svg"
import WebDesign from "@/public/illustrations/web-design.svg"
import ModuleGenerator from "@/public/module-generator.png"
import AantalCorrecteLettersQuery from "@/public/project/exercise-generator/aantal-correcte-letters.png"
import CorrecteLettersQuery from "@/public/project/exercise-generator/correcte-letters-query.png"
import LettersMixedQuery from "@/public/project/exercise-generator/letters-mixed-query.png"
import OefeningLettersMixed from "@/public/project/exercise-generator/oefening-letters-mixed.png"
import Landingpage from "@/public/project/landingpage.png"
import OefeningVulJuisteWoordIn from "@/public/project/oefening-vul-juiste-woord-in.png"
import AntwoordenWoordzoeker from "@/public/project/oefening/woordzoeker.antwoorden.png"
import OefeningWoordzoeker from "@/public/project/oefening/woordzoeker.oefening.png"
import TypescriptAutoCompletion from "@/public/project/typescript-type-assistance/auto-completion.png"
import TypescriptData from "@/public/project/typescript-type-assistance/data.png"
import TypescriptType from "@/public/project/typescript-type-assistance/type.png"

import { Project } from "@/types/projects"

export const projects: Project[] = [
  {
    url: "exercise-generator",
    name: "Exercise generator",
    description:
      "I created several SQL queries that generate an exercise. The queries all generate the necessary data which is needed to properly render it in de frontend.",
    img: PackageDelivery,
    data: [
      { type: "title", text: "An example" },
      { type: "image", url: AantalCorrecteLettersQuery },
      {
        type: "text",
        text: "The above (sub)query returns the amount of correct letters that need to be displayed in the exercise",
      },
      { type: "image", url: CorrecteLettersQuery },
      {
        type: "text",
        text: "The above (sub)query returns an array of all correct letters that need to be rendered, this also include duplicate letters.",
      },
      { type: "image", url: LettersMixedQuery },
      {
        type: "text",
        text: "Combining the two sub-queries and added logic to generate the incorrect letters, we get this somewhat complex query. The result: an array which contains correct and incorrect letters.",
      },
      { type: "title", text: "The result" },
      {
        type: "text",
        text: "The above query should generate data which can be used to render the following exercise component.",
      },
      { type: "image", url: OefeningLettersMixed },
    ],
  },
  {
    url: "exercise-components",
    name: "Exercise components",
    description:
      "I created a set of components which each render an exercised. These components are used to display the exercise and the solution.",
    img: Illustrator,
    data: [
      {
        type: "title",
        text: "The components",
      },
      { type: "image", url: OefeningWoordzoeker },
      { type: "image", url: AntwoordenWoordzoeker },
      { type: "image", url: OefeningLettersMixed },
      { type: "image", url: OefeningVulJuisteWoordIn },
    ],
  },
  {
    url: "landingpage",
    name: "Landingpage",
    description:
      "I created a landingpage for the application. This landingpage is used to promote the application and to get new users.",
    img: WebDesign,
    data: [{ type: "image", url: Landingpage }],
  },
  {
    url: "module-generator",
    name: "Module generator",
    description:
      "I created a module generator to speed up the development process. It generates a module with all the necessary files and folders. It also adds the module to the main app module.",
    img: ProductLaunch,
    data: [
      { type: "image", url: ModuleGenerator },
      { type: "title", text: "How it works" },
      {
        type: "text",
        text: `When you start the module generator it prompts you with a few questions, first it will ask you to enter the module name in singular and plural form. Then you can select all files and folders you want to generate. When you have entered all the information it will generate the module.`,
      },
    ],
  },
  {
    url: "typescript-type-assistance",
    name: "Typescript type assistance",
    description:
      "To catch possible typos and speed up development with intelligent autocompletion, I created some complex types to help the compiler and IDE to understand the code.",
    img: Success,
    data: [
      { type: "image", url: TypescriptData },
      {
        type: "text",
        text: "The screenshot above shows which data needs to be transformed into a string literal type",
      },
      { type: "image", url: TypescriptType },
      {
        type: "text",
        text: "The screenshot above shows the result of the type, this may look complex and overcomplicated but it is very useful to have autocompletion and avoid any typos. The hardest part was to get typescript not making a type with all possible combinations of the data.",
      },
      { type: "image", url: TypescriptAutoCompletion },
      {
        type: "text",
        text: "The screenshot above show the autocompletion you get in your IDE. As you might expected, any typos will result in an build error.",
      },
    ],
  },
]
