import React from "react";

import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share AI Promts
        <br className="max-md: hidden" />
        <span className="orange_gradient text-center">
          AI - Powred Prompsts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for moderm world to
        Discover create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
