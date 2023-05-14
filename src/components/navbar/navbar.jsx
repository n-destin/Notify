/* eslint-disable max-len */
import './navbar.scss';

import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftside">
                <i className="fa-sharp fa-solid fa-bars" />
                Notify
            </div>
            <div className="rightside">
                <i className="fa-sharp fa-light fa-house-chimney" />

                <div className="profile">
                    <img
                        // eslint-disable-next-line max-len
                        // eslint-disable-next-line indent
                      // eslint-disable-next-line indent
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAWRXhpZgAASUkqAAgAAAAAAAAAAAD/7QBYUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAADwcAlAAIENlbGVicml0aWVzICYgU2VjcmV0IFR1YmUgLyA1MDBwHAJuABJHZXR0eSBJbWFnZXMvNTAwcHj/4QS/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy81MDBweCIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEzNTUzNjcxNDkiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7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"
                        // eslint-disable-next-line indent
                      alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
