import React from "react";

const Blog = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold my-3">
        1. When should use context api?
      </h3>
      <p>
        When a large number of components at various nesting levels require
        access to a single piece of data, context is usually used. It makes
        component reuse more challenging, so use it carefully. Component
        composition is frequently a more straightforward option than context if
        all you want to do is avoid passing some props through a lot of layers.
      </p>
      <h3 className="text-2xl font-bold my-3">2. What is custom hooks?</h3>
      <p>
        A React JS software developer can employ custom React JS hooks, which
        are reusable functions, to add distinctive and customized functionality
        to React apps. Typically, one can install a third-party library and fix
        the issue if a feature is needed to be added.
      </p>
      <h3 className="text-2xl font-bold my-3">
        3. What is useRef and useMemo?
      </h3>
      <p>
        UseRef, which stands for reference, is a hook that enables data
        persistence between renderings without requiring the component to redraw
        itself. It is utilized by calling the useRef method and giving it a
        starting value. Let's start by going over the syntax and applying the
        hook.
        <br />A function's result can be memoized using the hook useMemo so that
        it is only recalculated when its dependencies change. It can be used to
        speed up the rendering of a component that handles a lot of items or
        complex computations.
      </p>
    </div>
  );
};

export default Blog;
