export type CallBack<T, U> = (key:T, val:U) => void;
export class Dictionary<K, V>{
    // 泛型
    private keys: K[] = [];
    private vals: V[] = [];

    set(key: K, val: V){
        const i = this.keys.indexOf(key)
        if(i < 0){
            // 不存在
            this.keys.push(key);
            this.vals.push(val);
        }else{
            // 存在
            this.vals[i] = val;
        }
    };

    ForEach(callback: CallBack<K, V>){
        this.keys.forEach((k, i)=>{
            const v = this.vals[i];
            callback(k, v);
        })
    };

    has(key: K){
        return this.keys.includes(key)
    };
}