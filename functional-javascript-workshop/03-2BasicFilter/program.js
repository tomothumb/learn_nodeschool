function getShortMessages(messages) {

    return messages.filter(function(row){
        return (row.message.length<=50)
    }).map(function(row){
        return row.message;
    });
}

module.exports = getShortMessages;
