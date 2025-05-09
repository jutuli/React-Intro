type FAQItem = {
  question: string;
  answer: string;
  answerLong: string;
};

export const faq: FAQItem[] = [
  {
    question: 'Why is React great?',
    answer: '1. Fast Learning Curve',
    answerLong:
      'React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.',
  },
  {
    question: 'Why is React great?',
    answer: '2. Reusable Components',
    answerLong:
      'React provides a component based structure. Components are your lego pieces. You start with tiny components like button, checkbox, dropdown etc. and the you create wrapper components composed of those smaller components. And then you write higher level wrapper components. And, it goes on like that until you have this one root component and that component is your app. Each component decides how it should be rendered. Each component has its own internal logic. This approach has some amazing results. You can re-use components anywhere you need. As a result, (1) your app has consistent look and feel, (2) code re-use makes it easier to maintain and grow your codebase, and (3) it is easier to develop your app. This component based structure helped us tremendously building our large web app, the brand new form builder on JotForm 4.0. To give you a cool example, all form fields are reused as components in both within the form editor (where you build your forms) and on the actual form (as we render forms as html using server-side Javascript).',
  },
  {
    question: 'Why is React great?',
    answer: '3. Fast render with Virtual DOM',
    answerLong:
      'When you are about to develop a web application that involves high user interaction and view updates, like the new form builder on JotForm 4.0, you have to consider the possible performance issues. Although today’s javascript engines are fast enough to handle such complex applications, DOM manipulations are still not that fast. Updating DOM is usually the bottleneck when it comes to the web performance. React is trying to solve this problem by using something called virtual DOM; a DOM kept in memory. Any view changes are first reflected to virtual DOM, then an efficient diff algorithm compares the previous and current states of the virtual DOM and calculates the best way (minimum amount of updates needed) to apply these changes. Finally those updates are applied to the DOM to ensure minimum read/write time. This is the main reason behind React’s high performance.',
  },
  {
    question: 'Why is React great?',
    answer: '4. Clean Abstraction',
    answerLong:
      'One of the powerful sides of React is that it provides a good abstraction which means that it does not expose any complex internals to the user. Compare this to Angular: Why on earth should you have to learn an internal process such as digest cycles? Those kind of details better be kept as internals to provide a clean abstraction. You only need to understand a component’s life cycles, states and props to master React to accomplish everything you need. React does not dictate any patterns or architecture like MVC/MVVM, after all its only about the view layer and you are free to design your app’s architecture in any way you see fit. Yet there is one good architecture that fits React really well called Flux.',
  },
  {
    question: 'Why is React great?',
    answer: '5. Flux and Redux',
    answerLong:
      'Flux architecture is introduced and maintained by Facebook and they use it for their web applications. It complements React components by unidirectional data flow. The overall structure is as follows. The main idea is to create actions which are orchestrated by a central dispatcher to update stores. Then the views are updated with respect to the changes in that stores. All the data to be displayed by components are kept in stores and are not duplicated as models in MVC structure which saves you from trying to keep your model data in sync throughout the application all the time. Unfortunately, flux is not a ready to use library but there are such implementations. The most popular one is Redux which is a kind of reinterpretation of flux architecture. It provides a single store which is not required in flux. In my opinion, this is a great decision you should make, for the sake of having a single source of truth. There is only one single object where you keep all the application data. This makes it easier to observe and manipulate. Any change on the store (data) will trigger a render for related components and the view is always kept in sync with data. Another great feature of Redux is that you can define a middleware to intercept dispatched actions. Generally it used for logging, exception handling and async API calls but you can also write a middleware easily to solve all kinds of other problems. If you choose to use redux it comes with a great dev tool. That will make things a lot easier for you.',
  },
  {
    question: 'Why is React great?',
    answer: '6. Great Developer Tools',
    answerLong:
      'Developer toolset is another important factor when you are choosing a development platform. There are two great tools you should be aware of: React Developer Tools and Redux Developer Tools. Both can be installed as Chrome extensions. React Developer Tools is great for inspecting react components within their hierarchy and also great for observing their current props and states. You can see a snapshot below. Here we are inspecting JotForm 4.0 components. Selected component is highlighted on the left side, its position in the hierarchy and its props are displayed in the rightmost pane. If you are using the Redux library you should definitely take a look at Redux Developer Tools for Chrome. You can observe dispatched actions, current store states and watch changes on stores. You can also dispatch actions or modify stores and see changes reflected to your view instantly. Since all the updates are kept within the extension, time travel is even possible. You can record and go back to any state of your application for debug purposes.',
  },
  {
    question: 'Why is React great?',
    answer: '7. React Native',
    answerLong:
      'Learning React comes with a bonus: React Native. React is not a ‘write once run anywhere library’, as the creators says, it’s a ‘learn once write anywhere’ library. Yes, you can write native apps for Android and iOS using React Native. Although you will not be able to use the exact same code you wrote for web, you will be able to use the same methodology and the same architecture.',
  },
];
export default faq;
