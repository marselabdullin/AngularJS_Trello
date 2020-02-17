angular.module('app').factory('cardFactory', function () {
    var service = {};

    cards = [
        {
            id: 1,
            description: 'Fix bug',
            list_id: 1
        },
        {
            id: 2,
            description: 'Add feature',
            list_id: 2
        },
        {
            id: 3,
            description: 'Learn AngularJS',
            list_id: 3
        },
    ];

    service.getCards = function (list) {
        return _.filter(cards, {list_id: list.id})
    };

    service.createCard = function (list, description) {
        cards.push({
            id: _.uniqueId('card_'),
            description,
            list_id: list.id
        });
    };

    service.deleteCard = function (card) {
        _.pull(cards, card);
    };

    service.updateCard = function (updatingCard) {
        var card = _.findWhere(cards, {id: updatingCard.id});
        card.description = updatingCard.description;
        card.list_id = updatingCard.list_id;
    };

    return service;

});