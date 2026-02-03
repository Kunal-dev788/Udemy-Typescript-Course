"use strict";
// Objects In TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    name: "BMW",
    color: "Matt Black",
};
console.log(car);
const post = {
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
let dog = {
    name: "Johhny",
    barks: true,
    wags: false,
};
let cat = {
    name: "Santra Billa",
    purrs: true,
};
let hybridAnimal = {
    name: "Kya Pata",
    barks: true,
    wags: true,
};
const IntersectionAnimal = {
    name: "Hello Animal", // common
    purrs: false,
    barks: true,
    wags: true
};
// Based on the types created now we can discriminate the network state and take action based on the state
// We need to create a logger function which logs the state of the network
function logger(state) {
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
//# sourceMappingURL=index.js.map