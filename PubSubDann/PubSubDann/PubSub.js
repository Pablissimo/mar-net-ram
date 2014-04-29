var Publisher = (function () {
    function Publisher() {
    }

    //Coleção de Assinantes
    var  subscribers = new Array();

    //Método de Publicar
    Publisher.prototype.publish = function (publication){
        this.visitSubscribers('publish', publication);
    }
    //Método de Assinar
    Publisher.prototype.subscribe = function (subscriber) {
        subscribers.push(subscriber);

    }
    //Método de remover Assinatura
    Publisher.prototype.unsubscribe = function (subscriber) {

        this.visitSubscribers('unsubscribe', subscriber);

    }
    //Método que realiza a manutenção da Coleção de Subscribers
    Publisher.prototype.visitSubscribers = function (action, arg) {
        var i;                                     //action = publish/unsubscribe
        var max = subscribers.length;              //arg = publication/subscriber
        
        for (i = 0; i < max; i++) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }

    }

    function createPublisher(o) {
        var i;
        for (i in publisher) {
            if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
                o[i] = publisher[i];
            }
        }
        o.subscribers = { any: [] };
    }

})

exports.PubSub = PubSub;