import SeoClient from "./components/Shared/SeoClient";
import Home from "./components/Home";

export default function page() {
  const seoField = {
    title: "Leading Builders & Developers in Bangalore | Chartered",
    description:
      "Chartered Housing, one of Bangalore’s most trusted real estate developers.",
    path: "",
  };

  return (
    <>
      <SeoClient {...seoField} />
      <Home />
    </>
  );
}


