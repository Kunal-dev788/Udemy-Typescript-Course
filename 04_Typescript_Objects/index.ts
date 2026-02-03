// Objects In TypeScript

// Alias for the object
type Car = {
  name: string;
  color: string;
};

let car: Car = {
  name: "BMW",
  color: "Matt Black",
};

console.log(car);

// Nested Object Example

type Author = {
  name: string;
  email: string;
  contactNumber: number;
  readonly type: "Human" | "AI";
};

type AwardsDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardsDetails; // yaha par objects ayenga or unka type hamesa same hi rahega
};

type Post = {
  name: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string; // optional property
};

const post: Post = {
  name: "Impact Of AI",
  content: "This is a AI Post",
  date: new Date(),
  author: {
    name: "Kunal Rathore",
    email: "kunal@email.com",
    contactNumber: 1234567890,
    type: "Human",
  },
  awards: {
    web: {
      name: "Web Awards",
      date: new Date(),
    },
    web3: {
      name: "Web3 Awards",
      date: new Date(),
    },
  },
  category: "Tech",
};

// post.author.type = "AI" // not possible because of readOnly.

// Union
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type Hybrid = Dog | Cat; // works like or operator

let dog: Hybrid = {
  name: "Johhny",
  barks: true,
  wags: false,
};

let cat: Hybrid = {
  name: "Santra Billa",
  purrs: true,
};

let hybridAnimal: Hybrid = {
  name: "Kya Pata",
  barks: true,
  wags: true,
};

// Intersection Example

type HybridIntersection = Dog & Cat; // works like and operator

const IntersectionAnimal: HybridIntersection = {
    name: "Hello Animal",  // common
    purrs: false,
    barks: true,
    wags: true
}


// To Discriminate Unions All the three types must have the state property
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// We Want to create a Network State with includes Loading, Failed and Success
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

// Based on the types created now we can discriminate the network state and take action based on the state
// We need to create a logger function which logs the state of the network
function logger(state: NetworkState): string {
  // Right now TypeScript does not know which of the three
  // potential types state could be.

  // Trying to access a property which isn't shared
  // across all types will raise an error
  //! state.code;

  // By switching on state, TypeScript can narrow the union
  // down in code flow analysis
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the `code` field is safe
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
