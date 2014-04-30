var Publisher = (function (pub) {
    //Construtor
    function Publisher() {        
    }

    var publishersCollection = new Array();

    //Coleção de Assinantes
    var subscribers = new Array();

    //Mensagem para quem é Assinante. 
    var subPubCollection = new Array();

    //Método de Registrar Publicador.
    Publisher.prototype.regPublisher = function (pub) {
        publishersCollection.push(pub);
    }

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

    /*------------------------------------------------------------- 
       Método que realiza a manutenção da Coleção de Subscribers,
       e envia Mensagem para quem é Assinante. 
    --------------------------------------------------------------*/
    Publisher.prototype.visitSubscribers = function (action, arg) {
        var i;                                     //action = publish/unsubscribe
        var max = subscribers.length;              //arg = publication/subscriber
        for (i = 0; i < max; i++) {
            if (action === 'publish') {
                subPubCollection.push({ subscriber: subscribers[i], publication: arg });
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
        return subPubCollection;
    }
    
    //Lista/valida Subscriber (assinante);
    Publisher.prototype.listaSubscriber = function (codSubscriber) {
        var sub = '';                             //cod do subscriber (assinante)
        if (codSubscriber == 'subscribers') {
            sub = subscribers.toString();
         }else{
            for (var i in subscribers) {
                if (subscribers[i] == codSubscriber) {
                    sub = subscribers[i];
                    break;
                }
            }
        }
        return sub;
    }
    return Publisher;
})

exports.Publisher = Publisher;

var pubsub = require('./PubSub.js');
var publicador = new pubsub.Publisher();