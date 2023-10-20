import React, { useState } from "react";

import { dataList } from "./data";
import Accordion from "./Accordion";

const Container = () => {



  return (
    <main>
      <section className="container">
        <h1>Questions</h1>

        {dataList.map((item,index) => {
          return <Accordion item={item} />
        })}
      </section>
    </main>
  );
};

export default Container;
