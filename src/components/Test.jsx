import React from 'react';

export default function Test() {
    // return the items in the local storage
    return (
        <div>
            <h1>
                {' '}
                {localStorage.getItem('name')}
            </h1>
            <h1>
                {' '}
                {localStorage.getItem('email')}
            </h1>
            <h1>{localStorage.getItem('uid')}</h1>
            <img src={localStorage.getItem('photo')} alt="profile pic" />
            <h1>
                {/* {localStorage.getItem('user')} */}
                {localStorage.getItem('userEmail')}

            </h1>
        </div>

    );
}
