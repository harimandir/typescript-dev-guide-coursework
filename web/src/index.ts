import { User } from "./models/User";

const user = new User({ name: "Unborn", age: 0 });
user.save();
