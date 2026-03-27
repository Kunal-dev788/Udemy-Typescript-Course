So when dealing with strictly typed programming languages, you might come across these two types of

type systems.

A nominal type system as well as a structural type system.

TypeScript uses a structural type system.

So let's look at two different types of type systems.

And let's see what TypeScript uses.

And if there is an opportunity to use a nominal type system instead of structural type system if you

want to within your programs.

So let's look at what is a nominal type system.

Programming languages like Java use a nominal type system where even if a type has similar properties,

these two types would be considered as different types and not as same types, even if they have the

same structure doesn't really matter.

So you have two types over here a type of an employee and a type of user.

The employee type has two properties that is name and age, and the user type also has two properties

name and age.

So the structure of these two types is exactly the same.

But in a programming language that uses a nominal type system, these two types would be considered

as different types.

So if a variable is assigned as a type of an employee, that particular variable would not be able to

accept a type of user.

But it's kind of opposite in case of TypeScript.

TypeScript uses a structural type system, so if the structure of two types is same in case of TypeScript,

TypeScript would accept one type instead of the other.

So here we can see that we have a type of an employee and a type of user.

Both of them have same properties, and in TypeScript these two types would be considered equal.

That is because they have the same structure, hence a structural type system.

So let's look at this in action.

Let's go back to Visual Studio Code and let's start writing some code.

I'm going to go ahead and declare two interfaces.

The first interface is going to be a ball.

And ball is going to have a diameter like so which is going to be a number.

I'll just simply go ahead and create another interface.

And I'll call this interface as sphere.

And sphere is going to have all the properties of the ball.

So sphere is going to have a diameter, which is again going to be a type of a number.

Now we can go ahead and use these interfaces in order to create a ball as well as a sphere.

So I'll declare a new variable called ball, which is going to be a type of a ball.

And this is going to be an object which has a property of diameter.

And let's say the diameter over here is ten.

Similarly I will create a sphere also.

So let's declare one more variable called sphere, which is going to be a type of a sphere this time

and not a ball.

Now sphere will have a diameter, and diameter over here can be 20 like so.

Now here's the cool part about structural type system.

In TypeScript you can grab the sphere and assign it to a ball.

Let me correct the spellings of sphere over here, so you can grab the sphere and assign it to a ball,

and you can do vice versa as well.

And TypeScript will not complain.

So you can grab the ball and assign it to the sphere.

So you're interchanging the values of sphere and ball, even though they come from two different types.

So they have different interfaces.

But you're able to reassign them to each other is because they share the same structure.

Had the structure been different.

So let's say the ball would have had another property called color, which would be a type of a string,

let's say.

And over here we would have had one more property, say the color of the ball.

And the ball color might be white.

So let's assign white color to the ball.

Let me correct the spellings of color over here.

Looks good.

Now you will see that you are not able to assign sphere to a ball.

This is because now they are structurally different from each other.

But as long as the sphere and the ball have the same structure, they can be used interchangeably.

That's because TypeScript follows a structural type system and not a nominal type system.

So you're interchanging the values of sphere and ball, even though they come from two different types.

so they have different interfaces, but you're able to reassign them to each other is because they share

the same structure.

Let me correct the spellings of color over here.

Looks good.

Now you will see that you are not able to assign sphere to a ball.

This is because now they are structurally different from each other.

But as long as the sphere and the ball have the same structure, they can be used interchangeably.

That's because TypeScript follows a structural type system and not a nominal type system.

This understanding can be taken a step further as well.

Let us assume that we declared one more interface and we call this interface as tube.

Now tube has the diameter.

So let's first include this diameter which is a type of a number.

But tube also has an additional property let's say the length of the tube.

And I'm assuming that the length of the tube is also a type of a number.

Now, if we create this kind of a type which structurally contains all of the members of the ball and

sphere, it does contain the diameter.

It just has an extra property, which is length.

Then also this tube can be assigned to the ball.

So I can go ahead and I can create a new tube.

Let's create a new tube which is going to be a type of a tube.

And here we have the object.

First it's going to have a diameter.

So let's use diameter like this.

And let's say the diameter is 12.

Let's use an equal to sign here.

And then we add the length of the tube as well.

So the length of the tube is let's say three.

Now since the tube has the diameter you can go ahead and assign the tube to the ball.

TypeScript will not complain even if tube has an extra property and is structurally a little bit different

from the ball.

But this extra property is ignored by TypeScript just because it has the diameter tube can be assigned

as a value to the ball, but you cannot go ahead and do the opposite.

So if I was supposed to take tube and assign it a value of ball, TypeScript is going to complain.

This is because tube does expect you to have this extra property, which is length, and ball doesn't

have that property.

So here TypeScript does become strict, and it does complain that you're trying to assign a ball to

a tube.

And ball just has one property which is diameter.

And this additional property which is declared in the interface tube which is this length property,

is missing in the ball.

So that's structural typing for you.

But what about nominal typing?

Can we get the impact of nominal typing in TypeScript?

And do you actually need that.

Let's look at that with the help of an example where you might need a stricter type check which is offered

by nominal type system.

For the sake of our example, I'm going to go ahead and I'm going to create a function.

Let's declare a new function called validate user input.

This is going to be an arrow function like so.

And what this function does is that it takes an input which is a type of a string.

And within this function let us assume that you perform certain kind of validations.

So here I'm going to perform a very simple validation.

In fact it's more of a sanitization instead of a validation.

So I'll declare a new constant here.

Let's call it as simple validated input.

And what this does is that it just takes the input, which is the argument passed by the user and trims

it.

And from within this function we just simply go ahead and return the trimmed string.

So we return simple validated input from within this function.

So we are basically mimicking a validation function where we are validating an input string.

Now what if we had another function which was responsible for printing these validated inputs.

So let's declare one more function.

And let's say that this function is responsible for printing a name.

And this name must be a validated input.

Now we can take one parameter name which is supposed to be printed onto the console.

And we can simply go ahead and print the name to the console.

So console, dot log and name.

Now I want to make sure that name is always validated using this function before it is printed onto

the console.

Right now, the strictest type that I can assign to this parameter is string, but assigning a type

of string is very liberal.

It does not ensure that this string has been validated.

The return type of this function is also a string.

So once again, when invoking this function, the print name function, you will not be sure whether

the string which you're passing in as an argument has been validated or not.

So let me show you with the help of an example.

Let's say we are using print name in order to print Johns name, but we are validating Johns name.

So we use validate user input, and then we pass John as a string to this as an argument.

So Johns name is being validated before it is printed onto the console.

But the irony is you can simply go ahead and use print name function like this without validating the

input.

You could simply pass mark as an argument, which is a string, and without validation, the string

would be outputted onto the console or printed to the console.

We don't want this kind of a behavior in order to make sure that this string is always validated.

We can use intersection types, so let's see how.

Using the intersection type we can use stricter types which would force a behavior which is similar

to a programming language that uses a nominal type system.

So I'm going to go ahead and I'm going to declare a new type over here.

So let's declare this new type.

And let's call this type as a validated input string like so.

Now this is going to be an intersection type between a string.

So first of all whatever value is being assigned to a variable that uses this particular type that is

validated input string must be a string.

And once it is a string, it also must contain this particular property which is underscore underscore

brand.

So underscore underscore brand is just a convention that is used.

And it's kind of a flag that we are using in order to flag a string which has been validated already.

Let's go ahead and let's say that the type of underscore.

Underscore brand is a literal value of validated input like so.

You could give any string to this.

Validated input is a literal type that we are assigning to underscore underscore brand property, which

is just creating a unique type out of it.

So any unique identifier string that you want to use is okay over here.

Now we can go ahead and use this type along with the print name function.

Instead of saying that the name parameter is always of the type string, we will go ahead and say that

it must be of the type validated input string.

Now you will see TypeScript goes ahead and throws an error.

Right now both these errors, even though they are valid, the first error shouldn't actually exist

because we are actually going ahead and validating.

John.

So what you have to do is from within this function, this return type, you have to assert it as a

validated return.

So you have to say we are returning this string with just simple validated input, but we are returning

it as a validated input string.

So you're confirming that whatever string is returned from within this function has passed the validation

and it confirms to this particular type.

Once you do that now TypeScript identifies that John has been validated.

So it's kind of a genuine input.

It has been checked for its type correctness whereas Mark is not.

The correct input Mark needs to be validated before it is passed to the print name function.

And that's how it gives you a stricter typing, which kind of complies programming languages that use

a nominal type structure.

So TypeScript, even though it uses a structural type system, it gives you kind of flexibility and

features that you can use in order to have stricter types, which are supported in a programming language

that supports nominal type structure.

So wherever needed, you can use these features and make the types stricter in nature.