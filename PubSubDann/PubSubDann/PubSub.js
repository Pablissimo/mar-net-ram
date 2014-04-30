var Publisher = (function () {
    function Publisher() {
        
    }

    //Coleção de Assinantes
    var subscribers = new Array();

    //Método de Publicar
    Publisher.prototype.publish = function (publication) {
        return this.visitSubscribers('publish', publication);
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
        var subscribersCollection = new Array();
        for (i = 0; i < max; i++) {
            if (action === 'publish') {

                subscribersCollection.push({subscriber: subscribers[i], publication: arg});
                
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
        return subscribersCollection;
    }
    
    Publisher.prototype.listaSubscriber = function (codSubscriber) {
        var sub = '';
        for (var i in subscribers) {
            if (subscribers[i] == codSubscriber) {
                sub = subscribers[i];
                break;
            }
        }
        return sub;
    }
    return Publisher;
})

exports.Publisher = Publisher;

var pubsub = require('./PubSub.js');
var publicador = new pubsub.Publisher();



