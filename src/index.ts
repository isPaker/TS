import { Dictionary } from "./dictionary";

const dic = new Dictionary<string, number>()

dic.set("ab", 1);
dic.set("cd", 2);
dic.ForEach((k, v)=>{
    console.log(`${k}: ${v}`)
})