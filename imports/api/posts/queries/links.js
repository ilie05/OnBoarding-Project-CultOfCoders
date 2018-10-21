import {Posts} from '/db';
import {Comments} from '/db';

Posts.addLinks({
    'author': {
        type: 'one',
        collection: Meteor.users,
        field: 'userId',
    }
})

Posts.addLinks({
    'allComments': {
        type: 'many',
        collection: Comments,
        field: 'commentsIds',
    }
})