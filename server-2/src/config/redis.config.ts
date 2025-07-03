import { Redis } from "ioredis";
let redis = new Redis({
    host:"localhost",
    port:6379,
    password:"c26052003s"
});

export default redis;