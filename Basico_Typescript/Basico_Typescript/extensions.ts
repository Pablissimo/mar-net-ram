interface String {
    
}

String.prototype.tamanho = function () {
    return this.length;
}

interface Array<T> {
    add1(): void;
}

Array.prototype.add1 = function <T>() {
    this.push('1'.tamanho());
}
