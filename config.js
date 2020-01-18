'use strict';

module.exports = {
    endpoints: [
        {
            url: '/api/posts',
            method: 'GET',
            description: 'A list of posts.'
        },
        {
            url: '/api/posts/8631',
            method: 'GET',
            description: 'Single post.'
        },
        {
            url: '/api/posts/foo',
            method: 'GET',
            description: 'HTTP 404 Error.'
        }
    ]
};